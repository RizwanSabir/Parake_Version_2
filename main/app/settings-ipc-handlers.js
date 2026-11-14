// app/settings-ipc-handlers.js — webpack module 98447
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.registerSettingsIpcHandlers = function () {
  const e = (e) => {
      u.mainWindow &&
        !u.mainWindow.isDestroyed() &&
        i.ipcMainProxy.emit(u.mainWindow, "main/overlay-opacity-changed", e);
    },
    t = (e) => {
      u.mainWindow &&
        !u.mainWindow.isDestroyed() &&
        i.ipcMainProxy.emit(u.mainWindow, "main/font-size-changed", e);
    },
    n = () => {
      u.mainWindow &&
        !u.mainWindow.isDestroyed() &&
        i.ipcMainProxy.emit(
          u.mainWindow,
          "main/zoom-changed",
          u.mainWindow.webContents.getZoomFactor(),
        );
    };
  i.ipcMainProxy.handle("renderer/set-is-private", (e, t) => {
    (0, p.setPrivateMode)(t);
  }),
    i.ipcMainProxy.handle("renderer/get-is-private", () =>
      (0, p.getPrivateMode)(),
    ),
    i.ipcMainProxy.handle("renderer/set-auto-detect-meetings", (e, t) => {
      (0, f.setSetting)("autoDetectMeetings", t);
    }),
    i.ipcMainProxy.handle("renderer/get-auto-detect-meetings", () =>
      (0, f.getSetting)("autoDetectMeetings"),
    ),
    i.ipcMainProxy.handle(
      "renderer/set-location-on-screen",
      (e, { location: t, offset: n }) => {
        (0, f.setSetting)("locationOnScreen", t),
          (0, f.setSetting)("locationOffsetX", n.x),
          (0, f.setSetting)("locationOffsetY", n.y);
      },
    ),
    i.ipcMainProxy.handle("renderer/get-location-on-screen", () => ({
      location: (0, f.getSetting)("locationOnScreen"),
      offset: {
        x: (0, f.getSetting)("locationOffsetX"),
        y: (0, f.getSetting)("locationOffsetY"),
      },
    })),
    i.ipcMainProxy.handle("renderer/get-api-config", () =>
      (0, a.getApiConfig)(),
    ),
    i.ipcMainProxy.handle("renderer/set-api-config", async (e, t) => {
      const n = (0, a.setApiConfig)(t);
      u.mainWindow &&
        !u.mainWindow.isDestroyed() &&
        i.ipcMainProxy.emit(u.mainWindow, "main/api-config-changed", n);
    }),
    i.ipcMainProxy.handle("renderer/set-microphone-device-id", (e, t) => {
      (0, f.setSetting)("microphoneDeviceId", t ?? "");
    }),
    i.ipcMainProxy.handle(
      "renderer/get-microphone-device-id",
      () => (0, f.getSetting)("microphoneDeviceId") || null,
    );
  const m = (0, h.createShareOutputPin)({
    read: () => ({
      deviceId: (0, f.getSetting)("shareOutputDeviceId"),
      defaultAtPin: (0, f.getSetting)("shareOutputDefaultDeviceId"),
    }),
    write: ({ deviceId: e, defaultAtPin: t }) => {
      (0, f.setSetting)("shareOutputDeviceId", e),
        (0, f.setSetting)("shareOutputDefaultDeviceId", t);
    },
    listDevices: () => (0, d.listOutputDevices)(),
    onReset: () => {
      u.mainWindow &&
        !u.mainWindow.isDestroyed() &&
        i.ipcMainProxy.emit(u.mainWindow, "main/share-output-device-reset");
    },
  });
  i.ipcMainProxy.handle("renderer/set-share-output-device-id", (e, t) => {
    m.set(t);
  }),
    i.ipcMainProxy.handle("renderer/get-share-output-device-id", () => m.get()),
    i.ipcMainProxy.handle("renderer/increase-zoom", () => {
      if (u.mainWindow && !u.mainWindow.isDestroyed()) {
        const e = u.mainWindow.webContents.getZoomFactor();
        u.mainWindow.webContents.setZoomFactor(1.05 * e), n();
      }
    }),
    i.ipcMainProxy.handle("renderer/decrease-zoom", () => {
      if (u.mainWindow && !u.mainWindow.isDestroyed()) {
        const e = u.mainWindow.webContents.getZoomFactor();
        u.mainWindow.webContents.setZoomFactor(e / 1.05), n();
      }
    }),
    i.ipcMainProxy.handle("renderer/reset-zoom", () => {
      u.mainWindow &&
        !u.mainWindow.isDestroyed() &&
        (u.mainWindow.webContents.setZoomFactor(1), n());
    }),
    i.ipcMainProxy.handle("renderer/get-zoom", () =>
      u.mainWindow && !u.mainWindow.isDestroyed()
        ? u.mainWindow.webContents.getZoomFactor()
        : 1,
    ),
    i.ipcMainProxy.handle("renderer/increase-overlay-opacity", () => {
      const t = (0, s.clampOverlayOpacity)(
        (0, f.getSetting)("overlayOpacity") + s.OVERLAY_OPACITY_STEP,
      );
      (0, f.setSetting)("overlayOpacity", t), e(t);
    }),
    i.ipcMainProxy.handle("renderer/decrease-overlay-opacity", () => {
      const t = (0, s.clampOverlayOpacity)(
        (0, f.getSetting)("overlayOpacity") - s.OVERLAY_OPACITY_STEP,
      );
      (0, f.setSetting)("overlayOpacity", t), e(t);
    }),
    i.ipcMainProxy.handle("renderer/reset-overlay-opacity", () => {
      (0, f.setSetting)("overlayOpacity", s.DEFAULT_OVERLAY_OPACITY),
        e(s.DEFAULT_OVERLAY_OPACITY);
    }),
    i.ipcMainProxy.handle("renderer/get-overlay-opacity", () =>
      (0, f.getSetting)("overlayOpacity"),
    ),
    i.ipcMainProxy.handle("renderer/increase-font-size", () => {
      const e = (0, o.clampFontSizeIndex)(
        (0, f.getSetting)("fontSizeIndex") + 1,
      );
      (0, f.setSetting)("fontSizeIndex", e), t(e);
    }),
    i.ipcMainProxy.handle("renderer/decrease-font-size", () => {
      const e = (0, o.clampFontSizeIndex)(
        (0, f.getSetting)("fontSizeIndex") - 1,
      );
      (0, f.setSetting)("fontSizeIndex", e), t(e);
    }),
    i.ipcMainProxy.handle("renderer/reset-font-size", () => {
      (0, f.setSetting)("fontSizeIndex", o.DEFAULT_FONT_SIZE_INDEX),
        t(o.DEFAULT_FONT_SIZE_INDEX);
    }),
    i.ipcMainProxy.handle("renderer/get-font-size", () =>
      (0, f.getSetting)("fontSizeIndex"),
    ),
    i.ipcMainProxy.handle("renderer/set-theme", (e, { scope: t, theme: n }) => {
      (0, f.setSetting)(g.THEME_SETTING_KEYS[t], n);
    }),
    i.ipcMainProxy.handle("renderer/get-are-there-multiple-screens", () => {
      try {
        return r.screen.getAllDisplays().length > 1;
      } catch {
        return !1;
      }
    }),
    i.ipcMainProxy.handle("renderer/set-is-transcript-open", (e, t) => {
      (0, f.setSetting)("isTranscriptOpen", t);
    }),
    i.ipcMainProxy.handle("renderer/get-is-transcript-open", () =>
      (0, f.getSetting)("isTranscriptOpen"),
    ),
    i.ipcMainProxy.handle("renderer/set-is-transcription-minimized", (e, t) => {
      (0, f.setSetting)("isTranscriptionMinimized", t);
    }),
    i.ipcMainProxy.handle("renderer/get-is-transcription-minimized", () =>
      (0, f.getSetting)("isTranscriptionMinimized"),
    ),
    i.ipcMainProxy.handle(
      "renderer/set-ai-messages-screen-size",
      (e, { height: t }) => {
        (0, f.setSetting)("aiMessagesScreenHeight", t);
      },
    ),
    i.ipcMainProxy.handle("renderer/get-ai-messages-screen-size", () => ({
      height: (0, f.getSetting)("aiMessagesScreenHeight"),
    })),
    i.ipcMainProxy.handle("renderer/set-current-screen-index-to-next", () => {
      const e = r.screen.getAllDisplays();
      if (e.length <= 1) return;
      const t = ((0, f.getSetting)("currentScreenIndex") + 1) % e.length;
      (0, f.setSetting)("currentScreenIndex", t),
        u.mainWindow &&
          !u.mainWindow.isDestroyed() &&
          (0, c.applyWindowSizeAndMargin)(u.mainWindow);
    }),
    i.ipcMainProxy.handle("renderer/move-to-screen-at-cursor", (e, t) =>
      !u.mainWindow || u.mainWindow.isDestroyed()
        ? null
        : (0, l.moveToScreenAtCursor)(u.mainWindow, t),
    );
};
const r = n(84157 /* external/electron */),
  o = n(71975 /* vendor/other/module-71975 */),
  i = n(9596 /* app/ipc-main-proxy */),
  s = n(50231 /* vendor/other/module-50231 */),
  a = n(2510 /* app/api-config-store */),
  c = n(99918 /* app/window-size-and-margin */),
  u = n(30327 /* app/main-entry */),
  l = n(20673 /* app/move-to-screen-at-cursor */),
  d = n(83340 /* app/native-audio-bindings */),
  p = n(89800 /* app/private-mode */),
  f = n(92763 /* app/settings-store */),
  h = n(80239 /* vendor/other/module-80239 */),
  g = n(5252 /* app/theme-settings */);
