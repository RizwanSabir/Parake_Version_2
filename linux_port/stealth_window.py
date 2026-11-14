#!/usr/bin/env python3
"""Linux equivalent of ParakeetAI's "private mode" window.

Original (Electron main.js) did:
  * BrowserWindow: transparent, frameless, alwaysOnTop, skipTaskbar, type "panel"
  * setAlwaysOnTop(true, "screen-saver")  (re-asserted every 1 s on Windows)
  * setVisibleOnAllWorkspaces(true)
  * setContentProtection(true)  -> Windows WDA_EXCLUDEFROMCAPTURE: the window is
    skipped by screen capture / screen sharing.

IMPORTANT LIMIT (read this): Linux has NO per-window "exclude from capture"
API. Electron's setContentProtection is a no-op on Linux. On X11 any app that
grabs the screen sees every window. So this port does everything else the
original did (floating, always on top, no taskbar entry, all workspaces,
translucent) and replaces capture-exclusion with what actually works:

  * --monitor N : put the notes on a monitor you are NOT sharing
                  (share one window / the other monitor in Zoom/Meet/Teams).
  * F9          : instantly hide/show the window (panic button).
  * F8          : cycle transparency.

Notes autosave to ~/.parakeet_notes.txt.
"""
from __future__ import annotations

import argparse
import subprocess
import tkinter as tk
from pathlib import Path

NOTES_FILE = Path.home() / ".parakeet_notes.txt"


def list_monitors() -> list[tuple[int, int, int, int]]:
    """(x, y, w, h) for each monitor, parsed from `xrandr --listmonitors`."""
    try:
        out = subprocess.run(["xrandr", "--listmonitors"], capture_output=True,
                             text=True, timeout=5).stdout
    except Exception:
        return []
    mons = []
    for line in out.splitlines()[1:]:
        for tok in line.split():
            if "/" in tok and "x" in tok and "+" in tok:  # 1920/509x1080/286+0+0
                size, x, y = tok.split("+")
                w = int(size.split("x")[0].split("/")[0])
                h = int(size.split("x")[1].split("/")[0])
                mons.append((int(x), int(y), w, h))
                break
    return mons


class Notes(tk.Tk):
    def __init__(self, monitor: int, width: int, height: int, alpha: float):
        super().__init__()
        self.title("notes")
        self.alphas = [alpha, 0.5, 0.75, 1.0]
        self.alpha_i = 0

        # --- equivalent of the Electron BrowserWindow flags -------------------
        self.attributes("-topmost", True)          # alwaysOnTop
        try:
            self.attributes("-type", "utility")    # no taskbar/alt-tab entry (skipTaskbar)
        except tk.TclError:
            pass
        self.attributes("-alpha", alpha)           # needs a compositor (GNOME has one)
        self.overrideredirect(False)

        # --- placement on the chosen (unshared) monitor ------------------------
        mons = list_monitors()
        x, y, mw, mh = mons[monitor] if 0 <= monitor < len(mons) else (0, 0, self.winfo_screenwidth(), self.winfo_screenheight())
        self.geometry(f"{width}x{height}+{x + mw - width - 20}+{y + 60}")

        self.text = tk.Text(self, wrap="word", bg="#14161a", fg="#e8e8e8",
                            insertbackground="white", font=("DejaVu Sans Mono", 11),
                            relief="flat", padx=10, pady=10, undo=True)
        self.text.pack(fill="both", expand=True)
        if NOTES_FILE.exists():
            self.text.insert("1.0", NOTES_FILE.read_text())
        self.text.bind("<<Modified>>", self._on_modified)

        self.bind("<F9>", lambda e: self.toggle_visible())
        self.bind("<F8>", lambda e: self.cycle_alpha())
        self.after(1000, self._keep_on_top)        # original re-asserted topmost every 1 s
        self._visible = True
        self.protocol("WM_DELETE_WINDOW", self._quit)

    def _keep_on_top(self):
        self.attributes("-topmost", True)
        self.after(1000, self._keep_on_top)

    def _on_modified(self, _):
        if self.text.edit_modified():
            NOTES_FILE.write_text(self.text.get("1.0", "end-1c"))
            self.text.edit_modified(False)

    def toggle_visible(self):
        # alpha 0 instead of withdraw(): a withdrawn window can't receive F9 to come back.
        # Needs the window to keep keyboard focus (no global hotkey without extra deps).
        self._visible = not self._visible
        self.attributes("-alpha", self.alphas[self.alpha_i] if self._visible else 0.0)

    def cycle_alpha(self):
        self.alpha_i = (self.alpha_i + 1) % len(self.alphas)
        self.attributes("-alpha", self.alphas[self.alpha_i])

    def _quit(self):
        NOTES_FILE.write_text(self.text.get("1.0", "end-1c"))
        self.destroy()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--monitor", type=int, default=0, help="monitor index to place the window on")
    ap.add_argument("--width", type=int, default=420)
    ap.add_argument("--height", type=int, default=520)
    ap.add_argument("--alpha", type=float, default=0.92)
    ap.add_argument("--list-monitors", action="store_true")
    a = ap.parse_args()
    if a.list_monitors:
        for i, m in enumerate(list_monitors()):
            print(i, m)
        return
    Notes(a.monitor, a.width, a.height, a.alpha).mainloop()


if __name__ == "__main__":
    main()
