// app/auto-updater.js — webpack module 15295
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.registerAppUpdater = function () {
    (o.default.transports.file.level = "info"),
      (i.autoUpdater.logger = o.default),
      c.DESKTOP_BRAND.updateFeed &&
        i.autoUpdater.setFeedURL(c.DESKTOP_BRAND.updateFeed),
      i.autoUpdater.on("checking-for-update", () => {
        o.default.info("Checking for update..."),
          _({ ...f, status: "checking" });
      }),
      i.autoUpdater.on("update-available", (e) => {
        o.default.info("Update available:", e),
          _({
            status: "available",
            severity: b(e.version),
            availableVersion: e.version,
            downloadProgressPercent: null,
            errorMessage: null,
          });
      }),
      i.autoUpdater.on("update-not-available", (e) => {
        o.default.info("Update not available:", e), _(f);
      }),
      i.autoUpdater.on("error", (e) => {
        o.default.error("Error in auto-updater:", e),
          _({
            status: "error",
            errorMessage: e.message,
            downloadProgressPercent: null,
            severity: m.severity,
            availableVersion: m.availableVersion,
          });
      }),
      i.autoUpdater.on("download-progress", (e) => {
        o.default.info("Download progress:", e),
          _({
            status: "downloading",
            downloadProgressPercent: e.percent,
            errorMessage: null,
            severity: m.severity,
            availableVersion: m.availableVersion,
          });
      }),
      i.autoUpdater.on("update-downloaded", (e) => {
        if (
          (o.default.info("Update downloaded:", e),
          _({
            status: "downloaded",
            severity: b(e.version),
            availableVersion: e.version,
            downloadProgressPercent: null,
            errorMessage: null,
          }),
          g && (clearTimeout(g), (g = null)),
          h)
        )
          return void T();
        const t = !!u.mainWindow && !u.mainWindow.isDestroyed(),
          n = "enabled" === (0, p.getSetting)("autoDetectMeetings");
        y(!t && n ? { severity: "all" } : { severity: "forced" });
      }),
      a.ipcMainProxy.handle("renderer/report-client-update-required", () => {
        h ||
          ((h = !0),
          o.default.info(
            "API requires a client update — forcing the pending update",
          )),
          _({ ...m }),
          "downloaded" === m.status
            ? T()
            : !g &&
              c.DESKTOP_BRAND.updateFeed &&
              (g = setTimeout(E, (0, d.serverGatedPollDelayMs)()));
      }),
      a.ipcMainProxy.handle("renderer/install-update", () => {
        try {
          T();
        } catch (e) {
          throw (o.default.error("Error installing update:", e), e);
        }
      }),
      a.ipcMainProxy.handle("renderer/get-update-state", () => m),
      c.DESKTOP_BRAND.updateFeed &&
        setInterval(() => {
          S();
        }, 18e5);
  }),
  (t.checkForUpdates = S),
  (t.checkAndInstallUpdate = y);
const o = r(n(57686 /* vendor/electron-log/index */)),
  i = n(77758 /* vendor/electron-updater/index */),
  s = n(17717 /* vendor/other/module-17717 */),
  a = n(9596 /* app/ipc-main-proxy */),
  c = n(26279 /* app/brand-constants */),
  u = n(30327 /* app/main-entry */),
  l = n(54654 /* app/meeting-detector */),
  d = n(1310 /* vendor/other/module-1310 */),
  p = n(92763 /* app/settings-store */),
  f = {
    status: "idle",
    severity: "none",
    availableVersion: null,
    downloadProgressPercent: null,
    errorMessage: null,
    serverGated: !1,
  };
let h = !1,
  g = null,
  m = f;
function _(e) {
  (m = { ...e, serverGated: h }),
    u.mainWindow &&
      !u.mainWindow.isDestroyed() &&
      a.ipcMainProxy.emit(u.mainWindow, "main/update-state-changed", m),
    o.default.info("update-state-changed", m);
}
function S() {
  c.DESKTOP_BRAND.updateFeed &&
    i.autoUpdater
      .checkForUpdates()
      .then((e) => {
        e?.downloadPromise?.catch((e) => {
          o.default.warn(
            "Update download failed, will retry on the next check:",
            e,
          );
        });
      })
      .catch((e) => {
        o.default.error("Error checking for updates:", e);
      });
}
function E() {
  (g = null),
    "downloaded" !== m.status &&
      "installing" !== m.status &&
      ("checking" !== m.status && "downloading" !== m.status && S(),
      (g = setTimeout(E, (0, d.serverGatedPollDelayMs)())));
}
function y({ severity: e }) {
  return (
    "downloaded" === m.status &&
    ("forced" !== e || "forced" === m.severity) &&
    ((0, l.getIsLiveCallSessionVisible)() && !h
      ? (o.default.info("Live call session is visible, skipping forced update"),
        !1)
      : (o.default.info(
          `Automatically installing ${m.severity} update for version: ${m.availableVersion}`,
        ),
        T()))
  );
}
function T() {
  if ("downloaded" !== m.status)
    return (
      o.default.error("Update is not downloaded, skipping installation"), !1
    );
  const e = !!u.mainWindow && !u.mainWindow.isDestroyed(),
    t = "enabled" === (0, p.getSetting)("autoDetectMeetings"),
    n = !e && t;
  return (
    o.default.info("Installing update", {
      startHiddenAfterUpdate: n,
      forceOpen: e || n,
    }),
    (0, p.setSetting)("startHiddenAfterUpdate", n),
    _({
      status: "installing",
      severity: m.severity,
      availableVersion: m.availableVersion,
      downloadProgressPercent: null,
      errorMessage: null,
    }),
    (0, u.setShouldFullyQuit)(),
    i.autoUpdater.quitAndInstall(!1, e || n),
    !0
  );
}
function b(e) {
  if (!e) return o.default.error("No next version provided"), "optional";
  const t = (0, s.parseVersionParts)(u.version),
    n = (0, s.parseVersionParts)(e);
  return t && n
    ? n[0] > t[0] || (n[0] === t[0] && n[1] > t[1])
      ? "forced"
      : "optional"
    : (o.default.error(
        `Failed to extract version parts from current: "${u.version}" and next: "${e}" versions`,
      ),
      "optional");
}
