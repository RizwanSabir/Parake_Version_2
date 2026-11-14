// app/meeting-detector.js — webpack module 54654
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.markMeetingDetectorRendererReady = function (e) {
    (m = e), _ && y(_);
  }),
  (t.setIsLiveCallSessionVisible = function (e) {
    S({ type: "liveCallSessionVisibilityChanged", isVisible: e });
  }),
  (t.getIsLiveCallSessionVisible = function () {
    return f.isLiveCallSessionVisible;
  }),
  (t.getUnrecognizedMeetingApps = function () {
    const e = new Set(o.app.getAppMetrics().map((e) => e.pid));
    return (0, l.unrecognizedAudioAppIds)(f, e);
  }),
  (t.getCurrentMeetingAppSlug = async function () {
    return (
      h && (await Promise.race([h, new Promise((e) => setTimeout(e, 2e3))])),
      (0, l.currentMeetingAppSlug)(f)
    );
  }),
  (t.startMeetingDetector = async function () {
    i.default.info("Starting meeting detector"),
      ["darwin", "win32"].includes(process.platform)
        ? g
          ? i.default.warn("Meeting detector already running")
          : ((g = !0),
            (0, d.startMicMonitorProcess)({ onUpdate: T, onStop: b }))
        : i.default.info("Meeting detector not supported on this platform");
  }),
  (t.stopMeetingDetector = function () {
    (g = !1),
      (_ = null),
      S({ type: "monitorStopped" }),
      (0, d.stopMicMonitorProcess)();
  });
const o = n(84157 /* external/electron */),
  i = r(n(57686 /* vendor/electron-log/index */)),
  s = n(9596 /* app/ipc-main-proxy */),
  a = n(6586 /* app/create-main-window */),
  c = n(30327 /* app/main-entry */),
  u = n(92763 /* app/settings-store */),
  l = n(60768 /* vendor/other/module-60768 */),
  d = n(18925 /* app/mic-monitor-process */),
  p = n(66707 /* app/web-meeting-detector */);
let f = l.initialMeetingDetectionState,
  h = null,
  g = !1,
  m = null,
  _ = null;
function S(e) {
  const { state: t, effects: n } = (0, l.reduceMeetingDetection)(f, e);
  (f = t), n.forEach(E);
}
function E(e) {
  if ("meetingAppChanged" === e.type)
    return (
      (h = null),
      (t = e.meetingApp),
      void (
        c.mainWindow &&
        !c.mainWindow.isDestroyed() &&
        s.ipcMainProxy.emit(c.mainWindow, "main/meeting-app-changed", t)
      )
    );
  var t;
  if ("refineWebMeetingService" === e.type)
    return void (function (e) {
      const t = (0, p.detectWebMeetingService)().then((n) => {
        n &&
          h === t &&
          (i.default.info(`Web meeting service for ${e}: ${n}`),
          S({
            type: "webServiceRefined",
            browserSlug: e,
            serviceSlug: n,
          }));
      });
      h = t;
    })(e.browserSlug);
  const n = e.processes.map((e) => e.bundleId).join(", ");
  "notifyMeetingStarted" === e.type
    ? i.default.info("Meeting started - mic input detected:", n)
    : i.default.info("Meeting ended:", n),
    y({
      status: "notifyMeetingStarted" === e.type ? "started" : "ended",
      triggeringAudioInputProcesses: e.processes,
    });
}
async function y({ status: e, triggeringAudioInputProcesses: t }) {
  const n = await (0, a.createOrFocusMainWindow)({
    meetingDetectorStatus: e,
  });
  if (!n) return;
  const r = n.webContents.isLoadingMainFrame();
  r && (m = null);
  const o = { status: e, triggeringAudioInputProcesses: t };
  if (n.webContents.id !== m || r)
    return (
      i.default.info("Meeting detector renderer not ready, queueing event:", e),
      void (_ = o)
    );
  (_ = null),
    s.ipcMainProxy.emit(n, "main/on-meeting-detector-status-changed", o);
}
function T({
  processes: e,
  newlyDetectedProcesses: t,
  noLongerDetectedProcesses: n,
}) {
  const r = "enabled" === (0, u.getSetting)("autoDetectMeetings");
  r || (_ = null),
    S({
      type: "micUpdate",
      autoDetectEnabled: r,
      processes: e,
      newlyDetectedProcesses: t,
      noLongerDetectedProcesses: n,
    });
}
function b() {
  g && ((g = !1), (_ = null), S({ type: "monitorStopped" }));
}
