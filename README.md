# Parake_Version_2

Readable, per-module copy of the **ParakeetAI Desktop v3.10.16** Electron app (`P.exe`, Windows x64),
plus a Linux/Python port of its two Windows-specific features (mic monitor and the notes window).

> This is **not original source**. It was recovered from the shipped installer by unpacking the NSIS
> installer -> `app.asar`, splitting the webpack bundles into one file per module, and formatting
> them. Variable names inside functions are still minified (`e`, `t`, `n`).
> Module *file names* were chosen by reading the code, so some are best guesses.

## Layout

```
main/                      Electron main process (Node.js side), 1048 modules
  app/                     first-party code (window creation, private mode, IPC, updater, meeting detector ...)
    native/                napi-rs loaders for the Rust addon parakeetai-native.*.node
  vendor/sentry|electron-updater|electron-log/   named third-party code
  vendor/other/            ~926 other npm modules, named module-<webpack id>.js
  external/                stubs for Node / Electron built-ins (fs, path, electron ...)
renderer/                  UI (React + Tailwind) loaded into the window, 1877 modules
  app/components|hooks|lib/  first-party UI code (names derived from exports / component names)
  vendor/                  libraries, named module-<id>.js
  style.css, index.html
entrypoints/               files that were never bundled: preload.js, mic-monitor-worker.js, pcm-framer.worklet.js
linux_port/                Python replacements for the Windows-only pieces (see below)
package.json               original manifest (main = ./dist/main/main.js)
```

Every file starts with a header giving its original webpack module id, and each
`n(<id> /* app/some-module */)` call is annotated with the module it loads.
`INDEX.md` in `main/` and `renderer/` lists file -> webpack id.
The files are for **reading**: the bundler wrapper is removed, so they do not run standalone.

## How the Windows features work (findings)

| Feature | Where | What it really does |
|---|---|---|
| Hidden from screen share | `main/app/private-mode.js`, `main/app/create-main-window.js` | `BrowserWindow.setContentProtection(true)` (Windows `WDA_EXCLUDEFROMCAPTURE`) + transparent, frameless, always-on-top (`screen-saver` level, re-applied every 1 s), `skipTaskbar`, click-through (`setIgnoreMouseEvents(true,{forward:true})`) |
| Mic monitor | `entrypoints/mic-monitor-worker.js`, `main/app/mic-monitor-process.js` | Worker thread calls native `getActiveAudioInputProcesses()` every 1 s, diffs `bundleId:pid:deviceUid`, posts `mic-update` messages |
| Audio capture | `main/app/native-audio-bindings.js` | Native `AudioProcessor`, `OutputLoopbackCapture`, `listOutputDevices` from the Rust addon (not ported yet) |

## Linux port (`linux_port/`)

Run inside the conda env: `conda activate bot`.

* `python linux_port/mic_monitor.py` - same message format as the original worker, using
  `pactl --format=json list source-outputs` (PulseAudio / PipeWire). `--include-monitors` also lists
  speaker-loopback streams.
* `python linux_port/stealth_window.py [--monitor N]` - tkinter notes window: always on top, no taskbar
  entry, translucent (F8), hide/show (F9), autosaves to `~/.parakeet_notes.txt`.

**Limit:** Linux has no per-window "exclude from screen capture" API (`setContentProtection` is a no-op
there). The port therefore cannot hide itself from a full-screen share. Use `--monitor N` to keep the
notes on a screen you are not sharing, or share a single window instead of the whole desktop.

## Status / TODO

- [x] Unpack installer, extract `app.asar`, split + name main and renderer modules
- [x] Linux mic monitor (tested with a live PulseAudio/PipeWire stream)
- [x] Linux notes window (always-on-top / skip-taskbar verified with `xprop`)
- [ ] Linux replacement for the capture-exclusion behaviour
- [ ] Linux replacement for `AudioProcessor` / `OutputLoopbackCapture`
- [ ] Name the ~926 + ~1500 vendor modules by package

## Legal note

The code in `main/` and `renderer/` comes from a commercial product's distributable. Keep this
repository private unless you own the code or have permission to publish it.
