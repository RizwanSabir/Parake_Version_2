// app/mic-monitor-process.js — webpack module 18925
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.startMicMonitorProcess = function ({ onUpdate: e, onStop: t }) {
    if (u) return;
    const n = i.app.isPackaged
      ? o.default.join(__dirname, "mic-monitor-worker.js")
      : o.default.join(__dirname, "mic-monitor-worker.bundle.dev.js");
    (u = i.utilityProcess.fork(n, [], {
      serviceName: "meeting-mic-monitor-process",
    })),
      u.on("message", (t) => {
        if ("mic-update" === t.type) {
          const {
            processes: n,
            newlyDetectedProcesses: r,
            noLongerDetectedProcesses: o,
          } = t;
          return void e({
            processes: n,
            newlyDetectedProcesses: r,
            noLongerDetectedProcesses: o,
          });
        }
        s.default.error("[mic-monitor-process] error", t.message),
          c.mainWindow &&
            a.ipcMainProxy.emit(
              c.mainWindow,
              "main/show-error",
              `Meeting detector error: ${t.message}`,
            );
      }),
      u.on("exit", (e) => {
        s.default.warn(`[mic-monitor-process] exited with code ${e}`),
          (u = null),
          t();
      });
  }),
  (t.stopMicMonitorProcess = function () {
    u &&
      (u.postMessage("stop"),
      setTimeout(() => {
        u && (u.kill(), (u = null));
      }, 300));
  });
const o = r(n(16928 /* external/path */)),
  i = n(84157 /* external/electron */),
  s = r(n(57686 /* vendor/electron-log/index */)),
  a = n(9596 /* app/ipc-main-proxy */),
  c = n(30327 /* app/main-entry */);
let u = null;
