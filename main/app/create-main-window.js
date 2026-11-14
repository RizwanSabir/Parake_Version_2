// app/create-main-window.js — webpack module 6586
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createOrFocusMainWindow = async function (
    { meetingDetectorStatus: e } = { meetingDetectorStatus: null },
  ) {
    if (
      (s.default.info(
        "Creating or focusing main window with meeting detector status:",
        e,
      ),
      !i.app.isReady())
    )
      return (
        s.default.info(
          "App is not ready yet, deferring window creation to whenReady",
        ),
        null
      );
    if (p.mainWindow && !p.mainWindow.isDestroyed())
      return (
        s.default.info("Main window already exists, focusing it"),
        p.mainWindow.isMinimized()
          ? p.mainWindow.restore()
          : p.mainWindow.isFocused() || p.mainWindow.focus(),
        i.app.dock?.isVisible() &&
          (s.default.info("Dock visible after focus, hiding it"),
          i.app.dock.hide()),
        null === e &&
          (a.ipcMainProxy.emit(p.mainWindow, "main/focus-window"),
          (0, g.unregisterTray)()),
        s.default.info("Main window focused"),
        p.mainWindow
      );
    if ("ended" === e)
      return (
        s.default.info(
          "Meeting detector status is ended, will not create the window",
        ),
        null
      );
    s.default.info("Main window does not exist, creating it"),
      i.app.dock?.hide();
    const t = "started" === e;
    t || (0, g.unregisterTray)();
    const n = (0, m.readThemeSettings)(),
      r = new i.BrowserWindow({
        icon: (0, l.getAssetPath)("icons/512x512.png"),
        webPreferences: {
          preload: i.app.isPackaged
            ? o.default.join(__dirname, "preload.js")
            : o.default.join(__dirname, "../../.erb/dll/preload.js"),
          experimentalFeatures: !0,
          additionalArguments: [
            `--show-meeting-start-toast-only=${t}`,
            `--${c.THEME_FLAGS.shell}=${n.shell}`,
            `--${c.THEME_FLAGS.liveCall}=${n.liveCall}`,
          ],
        },
        transparent: !0,
        roundedCorners: !1,
        hasShadow: !1,
        alwaysOnTop: !0,
        frame: !1,
        resizable: !1,
        skipTaskbar: !0,
        hiddenInMissionControl: !0,
        movable: !1,
        type: "panel",
      });
    if (p.isWindows) {
      r.setAlwaysOnTop(!0, "screen-saver", 1),
        r.webContents.setBackgroundThrottling(!1);
      const e = setInterval(() => {
        r && !r.isDestroyed()
          ? r.setAlwaysOnTop(!0, "screen-saver", 1)
          : e && clearInterval(e);
      }, 1e3);
    }
    return (
      r.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
      r.webContents.session.setPermissionRequestHandler((e, t, n) => {
        n("media" === t || "clipboard-read" === t);
      }),
      r.loadURL((0, _.resolveHtmlPath)("index.html")),
      r.on("closed", () => {
        (0, p.setMainWindow)(null);
      }),
      r.on("ready-to-show", () => {
        (async () => {
          if (!r) throw new Error('"newMainWindow" is not defined');
          s.default.info("Main window ready to show"),
            r.show(),
            p.initialProtocolUrl &&
              (await (0, d.handleProtocolUrl)(p.initialProtocolUrl));
        })();
      }),
      r.webContents.setWindowOpenHandler(
        (e) => (i.shell.openExternal(e.url), { action: "deny" }),
      ),
      (0, u.applyWindowSizeAndMargin)(r),
      r.setIgnoreMouseEvents(!0, { forward: !0 }),
      (0, p.setMainWindow)(r),
      (0, f.setPrivateMode)(!0),
      (0, h.checkForUpdates)(),
      s.default.info("Main window created"),
      r
    );
  });
const o = r(n(16928 /* external/path */)),
  i = n(84157 /* external/electron */),
  s = r(n(57686 /* vendor/electron-log/index */)),
  a = n(9596 /* app/ipc-main-proxy */),
  c = n(74969 /* vendor/other/module-74969 */),
  u = n(99918 /* app/window-size-and-margin */),
  l = n(89553 /* app/asset-path */),
  d = n(93155 /* app/protocol-url-handler */),
  p = n(30327 /* app/main-entry */),
  f = n(89800 /* app/private-mode */),
  h = n(15295 /* app/auto-updater */),
  g = n(83924 /* app/tray */),
  m = n(5252 /* app/theme-settings */),
  _ = n(146 /* vendor/other/module-146 */);
