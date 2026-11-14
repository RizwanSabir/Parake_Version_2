// app/main-entry.js — webpack module 30327
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.version =
    t.setInitialProtocolUrl =
    t.initialProtocolUrl =
    t.setMainWindow =
    t.mainWindow =
    t.PROTOCOL =
    t.isWindows =
    t.isMacOS =
      void 0),
  (t.setShouldFullyQuit = function () {
    v = !0;
  }),
  n(68346 /* app/dev-environment-setup */);
const o = r(n(16928 /* external/path */)),
  i = n(84157 /* external/electron */),
  s = n(41112 /* app/loopback-audio-main */),
  a = r(n(57686 /* vendor/electron-log/index */)),
  c = n(90848 /* vendor/other/module-90848 */),
  u = n(26279 /* app/brand-constants */),
  l = n(6586 /* app/create-main-window */),
  d = n(93155 /* app/protocol-url-handler */),
  p = n(35320 /* app/keepalive-fetch */),
  f = n(54654 /* app/meeting-detector */),
  h = n(36501 /* app/app-shortcuts */),
  g = n(15295 /* app/auto-updater */),
  m = n(38824 /* app/bypass-token-request-header */),
  _ = n(90238 /* app/content-security-policy */),
  S = n(37632 /* app/display-listeners */),
  E = n(44100 /* app/ipc-handlers */),
  y = n(83034 /* app/live-call-shortcuts */),
  T = n(98447 /* app/settings-ipc-handlers */),
  b = n(83924 /* app/tray */),
  I = n(92763 /* app/settings-store */);
(a.default.transports.file.level = "info"),
  (a.default.transports.console.level = "info"),
  (global.WebSocket = c.WebSocket),
  (t.isMacOS = "darwin" === process.platform),
  (t.isWindows = "win32" === process.platform),
  (t.PROTOCOL = (0, u.deepLinkScheme)(u.DESKTOP_BRAND, i.app.isPackaged)),
  i.app.isPackaged ||
    i.app.commandLine.appendSwitch("remote-debugging-port", "9223"),
  t.isWindows &&
    (i.app.isPackaged && i.app.setAppUserModelId(u.DESKTOP_BRAND.appId),
    i.app.commandLine.appendSwitch(
      "disable-features",
      "CalculateNativeWinOcclusion",
    )),
  (t.mainWindow = null),
  (t.setMainWindow = (e) => {
    t.mainWindow = e;
  }),
  (0, s.initMain)(),
  (0, E.registerIpcHandlers)(),
  (0, T.registerSettingsIpcHandlers)(),
  (t.initialProtocolUrl = null),
  (t.setInitialProtocolUrl = (e) => {
    t.initialProtocolUrl = e;
  });
let v = !1;
if (
  ((t.version = i.app.getVersion()),
  i.app.on("open-url", (e, t) => {
    e.preventDefault(), (0, d.handleProtocolUrl)(t);
  }),
  i.app.requestSingleInstanceLock()
    ? i.app.on("second-instance", (e, n, r) => {
        if (t.isWindows) {
          const e = n.find((e) => e.startsWith(`${t.PROTOCOL}://`));
          if (e) return void (0, d.handleProtocolUrl)(e);
        }
        (0, l.createOrFocusMainWindow)();
      })
    : i.app.quit(),
  t.isWindows)
) {
  a.default.info(
    "Windows detected, checking process.argv for protocol URL:",
    process.argv,
  );
  const e = process.argv.find((e) => e.startsWith(`${t.PROTOCOL}://`));
  e
    ? (a.default.info("Found protocol URL in process.argv:", e),
      (t.initialProtocolUrl = e))
    : a.default.info("No protocol URL found in process.argv");
}
i.app.whenReady().then(async () => {
  if (
    ((0, _.registerContentSecurityPolicy)(),
    (0, m.registerBypassTokenRequestHeader)(),
    t.isWindows && !i.app.isPackaged
      ? i.app.setAsDefaultProtocolClient(t.PROTOCOL, process.execPath, [
          o.default.resolve(process.cwd()),
        ])
      : i.app.setAsDefaultProtocolClient(t.PROTOCOL),
    !i.app.isPackaged)
  )
    for (const e of u.DESKTOP_BRAND.legacyDevSchemes)
      i.app.removeAsDefaultProtocolClient(e);
  try {
    i.app.isPackaged &&
      i.app.setLoginItemSettings({
        openAtLogin: !0,
        args: t.isWindows ? ["--was-opened-at-login"] : void 0,
      });
  } catch (e) {
    a.default.warn("Failed to set login item settings:", e);
  }
  (0, g.registerAppUpdater)(), (0, S.registerDisplayListeners)();
  const e = i.app.getLoginItemSettings();
  let n = (0, I.getSetting)("startHiddenAfterUpdate");
  if (n)
    try {
      (0, I.setSetting)("startHiddenAfterUpdate", !1);
    } catch (e) {
      a.default.warn(
        "Could not clear startHiddenAfterUpdate; starting visible:",
        e,
      ),
        (n = !1);
    }
  if (
    !0 === e.wasOpenedAtLogin ||
    process.argv.includes("--was-opened-at-login") ||
    n
  ) {
    if (
      (i.app.dock?.hide(),
      "enabled" !== (0, I.getSetting)("autoDetectMeetings"))
    )
      return void i.app.quit();
    (0, b.registerTray)();
  } else (0, l.createOrFocusMainWindow)();
  try {
    i.session.defaultSession.setDisplayMediaRequestHandler(
      (e, t) => {
        i.desktopCapturer.getSources({ types: ["screen"] }).then((e) => {
          t({ video: e[0], audio: "loopback" });
        });
      },
      { useSystemPicker: !0 },
    );
  } catch (e) {
    a.default.warn("Failed to set display media request handler:", e);
  }
  t.isMacOS &&
    setInterval(() => {
      i.app.dock &&
        i.app.dock.isVisible() &&
        (a.default.info("Dock poll: dock visible, re-hiding"),
        i.app.dock.hide());
    }, 2e3),
    (0, f.startMeetingDetector)();
}),
  i.app.on("activate", () => {
    (0, l.createOrFocusMainWindow)();
  }),
  i.app.on("window-all-closed", () => {
    (0, h.unregisterAppShortcuts)(),
      (0, y.unregisterLiveCallSessionScreenShortcuts)(),
      "enabled" === (0, I.getSetting)("autoDetectMeetings") &&
        (0, b.registerTray)(),
      (0, g.checkAndInstallUpdate)({ severity: "all" }) || i.app.quit();
  }),
  i.app.on("before-quit", (e) => {
    if (!v && "enabled" === (0, I.getSetting)("autoDetectMeetings"))
      return (
        e.preventDefault(),
        void (
          t.mainWindow &&
          !t.mainWindow.isDestroyed() &&
          t.mainWindow.close()
        )
      );
    (0, f.stopMeetingDetector)();
  }),
  i.app.on("will-quit", (e) => {
    (0, p.handleWillQuitKeepaliveDrain)(e);
  });
