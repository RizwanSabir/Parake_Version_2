// app/ipc-handlers.js — webpack module 44100
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.registerIpcHandlers = function () {
    s.ipcMainProxy.handle("renderer/audio-processor/start", () => {
      (0, a.startAudioProcessor)();
    }),
      s.ipcMainProxy.handle("renderer/audio-processor/stop", () => {
        (0, a.stopAudioProcessor)();
      }),
      s.ipcMainProxy.handle(
        "renderer/audio-processor/push-share-audio",
        (e, t) => {
          (0, a.getAudioProcessor)().pushSystemAudio(t);
        },
      ),
      s.ipcMainProxy.handle(
        "renderer/audio-processor/process-mic-audio",
        (e, t) => (0, a.getAudioProcessor)().processMicAudio(t),
      ),
      s.ipcMainProxy.handle("renderer/audio-processor/flush-mic", () =>
        (0, a.getAudioProcessor)().flushMic(),
      ),
      s.ipcMainProxy.handle("renderer/list-output-devices", () => {
        try {
          return (0, d.listOutputDevices)();
        } catch {
          return [];
        }
      }),
      s.ipcMainProxy.handle("renderer/start-share-loopback", (e, t) =>
        y.start(t),
      ),
      s.ipcMainProxy.handle("renderer/stop-share-loopback", () => {
        y.stop();
      }),
      s.ipcMainProxy.handle("renderer/quit-app", () => {
        u.mainWindow?.close(),
          (0, f.unregisterAppShortcuts)(),
          (0, g.unregisterLiveCallSessionScreenShortcuts)();
      }),
      s.ipcMainProxy.handle("renderer/keepalive-fetch", (e, t) =>
        (0, c.executeKeepaliveFetch)(t),
      ),
      s.ipcMainProxy.handle("renderer/capture-screenshot", async () => {
        try {
          const { granted: e, status: t } = await E();
          if (!e)
            throw (
              (i.default.error("Screen recording permission not granted", {
                status: t,
              }),
              new Error(
                `Screen recording permission not granted (status: ${t}). Enable it in System Settings › Privacy & Security › Screen Recording.`,
              ))
            );
          const n = (0, S.getCurrentScreenIndex)(),
            r = o.screen.getAllDisplays();
          if (!r.length)
            throw (
              (i.default.error("No screens detected"),
              new Error("No screens detected"))
            );
          let s = r[n];
          s ||
            (1 === r.length
              ? (i.default.warn(
                  "Active screen not found by current screen index, defaulting to only screen available",
                  { currentScreenIndex: n, displays: r },
                ),
                (s = r[0]))
              : (i.default.warn(
                  "Active screen not found by current screen index, defaulting to primary screen",
                  { currentScreenIndex: n, displays: r },
                ),
                (s = o.screen.getPrimaryDisplay())));
          const a = await o.desktopCapturer.getSources({
            types: ["screen"],
            thumbnailSize: {
              width: Math.min(s.size.width, 3840),
              height: Math.min(s.size.height, 2160),
            },
          });
          if (!a.length) throw new Error("No screenshot sources available");
          let c = a.find((e) => e.display_id === String(s.id));
          c ||
            (1 === a.length
              ? (i.default.error(
                  "Screenshot source not found for display, defaulting to only source available",
                  {
                    currentScreenIndex: n,
                    displays: r,
                    sources: a,
                    displayId: s.id,
                  },
                ),
                (c = a[0]))
              : (i.default.error(
                  "Screenshot source not found for display, defaulting to first source",
                  {
                    currentScreenIndex: n,
                    displays: r,
                    sources: a,
                    displayId: s.id,
                  },
                ),
                (c = a[0])));
          const u = c?.thumbnail;
          if (!u)
            throw (
              (i.default.error("No screenshot source found for display", {
                currentScreenIndex: n,
                displays: r,
                sources: a,
                displayId: s.id,
              }),
              new Error(`No screenshot source found for display ${s.id}`))
            );
          const { width: l, height: d } = u.getSize();
          if (u.isEmpty() || !l || !d)
            throw (
              (i.default.error("Screenshot thumbnail is empty", {
                width: l,
                height: d,
                isEmpty: u.isEmpty(),
                displayId: s.id,
                sourceId: c?.id,
              }),
              new Error(
                "Screenshot thumbnail is empty — the display may be locked, asleep, showing DRM-protected content, or screen recording may be blocked.",
              ))
            );
          const p = 3840,
            f = 2160;
          let h = u;
          if (l > p || d > f) {
            const e = Math.min(p / l, f / d),
              t = Math.max(1, Math.round(l * e)),
              n = Math.max(1, Math.round(d * e));
            h = u.resize({ width: t, height: n, quality: "best" });
          }
          const g = h.toJPEG(85);
          if (!g.length)
            throw (
              (i.default.error("Screenshot encoding produced empty buffer", {
                width: l,
                height: d,
                resizedSize: h.getSize(),
                displayId: s.id,
              }),
              new Error("Screenshot encoding produced empty buffer"))
            );
          i.default.info("Screenshot captured", {
            width: l,
            height: d,
            resizedSize: h.getSize(),
            bytes: g.length,
          });
          return `data:image/jpeg;base64,${g.toString("base64")}`;
        } catch (e) {
          throw (
            (i.default.error("Error capturing screenshot:", e),
            u.mainWindow &&
              s.ipcMainProxy.emit(
                u.mainWindow,
                "main/show-error",
                e instanceof Error ? e.message : String(e),
              ),
            e)
          );
        }
      }),
      s.ipcMainProxy.handle("renderer/write-clipboard", (e, t) => {
        try {
          o.clipboard.writeText(t),
            i.default.info("Text written to clipboard successfully");
        } catch (e) {
          throw (i.default.error("Error writing to clipboard:", e), e);
        }
      }),
      s.ipcMainProxy.handle("renderer/set-auth-token", async (e, t) => {
        try {
          return u.mainWindow
            ? (await (0, _.setNextAuthCookie)(u.mainWindow, t), !0)
            : (i.default.error(
                "Cannot set auth cookie – mainWindow not ready yet",
              ),
              !1);
        } catch (e) {
          throw (i.default.error("Error setting auth token:", e), e);
        }
      }),
      s.ipcMainProxy.handle("renderer/get-version", () => u.version),
      s.ipcMainProxy.handle("renderer/set-ignore-mouse-events", (e, t) => {
        u.mainWindow &&
          !u.mainWindow.isDestroyed() &&
          u.mainWindow.setIgnoreMouseEvents(t, { forward: !0 });
      }),
      s.ipcMainProxy.handle("renderer/window-error", (e, t) => {
        i.default.error("Window error:", t),
          u.mainWindow && !u.mainWindow.isDestroyed() && u.mainWindow.destroy(),
          o.dialog.showMessageBox({
            type: "error",
            title: "Window Error",
            message: `Window error: ${JSON.stringify(t)}`,
          });
      }),
      s.ipcMainProxy.handle("renderer/set-is-window-focusable", (e, t) => {
        u.mainWindow &&
          !u.mainWindow.isDestroyed() &&
          (u.mainWindow.setFocusable(t),
          t
            ? (u.mainWindow.setSkipTaskbar(!0), u.mainWindow.focus())
            : u.mainWindow.blur());
      }),
      s.ipcMainProxy.handle(
        "renderer/set-is-live-call-session-screen-visible",
        (e, { isVisible: t, resetPrivateMode: n }) => {
          (0, l.setIsLiveCallSessionVisible)(t),
            n && (0, p.setPrivateMode)(!0),
            t
              ? (0, g.registerLiveCallSessionScreenShortcuts)()
              : ((0, g.unregisterLiveCallSessionScreenShortcuts)(),
                (0, h.checkAndInstallUpdate)({ severity: "forced" }));
        },
      ),
      s.ipcMainProxy.handle("renderer/set-is-app-visible", (e, t) => {
        t ? (0, f.registerAppShortcuts)() : (0, f.unregisterAppShortcuts)();
      }),
      s.ipcMainProxy.handle("renderer/meeting-detector-screen-ready", (e) => {
        (0, l.markMeetingDetectorRendererReady)(e.sender.id);
      }),
      s.ipcMainProxy.handle("renderer/get-current-meeting-app", () =>
        (0, l.getCurrentMeetingAppSlug)(),
      ),
      s.ipcMainProxy.handle("renderer/get-unrecognized-meeting-apps", () =>
        (0, l.getUnrecognizedMeetingApps)(),
      ),
      s.ipcMainProxy.handle("renderer/unregister-tray", () => {
        (0, m.unregisterTray)();
      }),
      s.ipcMainProxy.handle("renderer/toggle-devtools", () => {
        u.mainWindow &&
          !u.mainWindow.isDestroyed() &&
          (u.mainWindow.webContents.isDevToolsOpened()
            ? u.mainWindow.webContents.closeDevTools()
            : u.mainWindow.webContents.openDevTools({
                mode: "detach",
              }));
      }),
      s.ipcMainProxy.handle("renderer/open-log-file", () => {
        const e = i.default.transports.file.getFile().path;
        o.shell.openPath(e);
      }),
      s.ipcMainProxy.handle(
        "renderer/get-screen-recording-permission-status",
        E,
      ),
      s.ipcMainProxy.handle("renderer/open-privacy-settings", async (e, t) => {
        if (u.isMacOS) {
          const e =
            "microphone" === t ? "Privacy_Microphone" : "Privacy_ScreenCapture";
          return (
            await o.shell.openExternal(
              `x-apple.systempreferences:com.apple.preference.security?${e}`,
            ),
            (0, u.setShouldFullyQuit)(),
            void o.app.quit()
          );
        }
        await o.shell.openExternal("ms-settings:privacy-microphone");
      });
  });
const o = n(84157 /* external/electron */),
  i = r(n(57686 /* vendor/electron-log/index */)),
  s = n(9596 /* app/ipc-main-proxy */),
  a = n(75796 /* app/audio-processor-controller */),
  c = n(35320 /* app/keepalive-fetch */),
  u = n(30327 /* app/main-entry */),
  l = n(54654 /* app/meeting-detector */),
  d = n(83340 /* app/native-audio-bindings */),
  p = n(89800 /* app/private-mode */),
  f = n(36501 /* app/app-shortcuts */),
  h = n(15295 /* app/auto-updater */),
  g = n(83034 /* app/live-call-shortcuts */),
  m = n(83924 /* app/tray */),
  _ = n(33181 /* app/next-auth-cookie */),
  S = n(92763 /* app/settings-store */);
async function E() {
  if (!u.isMacOS) return { granted: !0 };
  const e = o.systemPreferences.getMediaAccessStatus("screen"),
    t = "granted" === e;
  return (
    t ||
      (await o.desktopCapturer
        .getSources({
          types: ["screen"],
          thumbnailSize: { width: 1, height: 1 },
        })
        .catch(() => {})),
    { granted: t, status: e }
  );
}
const y = new (n(40566 /* vendor/other/module-40566 */).ShareLoopbackCapture)({
  getWindow: () => u.mainWindow,
  createCapture: () => new d.OutputLoopbackCapture(),
  listDevices: () => (0, d.listOutputDevices)(),
  sendAudio: (e, t) => s.ipcMainProxy.emit(e, "main/share-loopback-audio", t),
  sendError: (e, t) => s.ipcMainProxy.emit(e, "main/share-loopback-error", t),
  logError: (e, t) => i.default.error(e, t),
});
