// vendor/electron-log/renderer-preload.js — webpack module 81355
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
let r = {};
try {
  r = n(84157 /* external/electron */);
} catch (e) {}
function o({ contextBridge: e, ipcRenderer: t }) {
  if (!t) return;
  t.on("__ELECTRON_LOG_IPC__", (e, t) => {
    window.postMessage({ cmd: "message", ...t });
  }),
    t.invoke("__ELECTRON_LOG__", { cmd: "getOptions" }).catch((e) => {});
  const n = {
    sendToMain(e) {
      try {
        t.send("__ELECTRON_LOG__", e);
      } catch (e) {
        t.send("__ELECTRON_LOG__", {
          cmd: "errorHandler",
          error: { message: e?.message, stack: e?.stack },
          errorName: "sendToMain",
        });
      }
    },
    log(...e) {
      n.sendToMain({ data: e, level: "info" });
    },
  };
  for (const e of ["error", "warn", "info", "verbose", "debug", "silly"])
    n[e] = (...t) => n.sendToMain({ data: t, level: e });
  if (e && process.contextIsolated)
    try {
      e.exposeInMainWorld("__electronLog", n);
    } catch {}
  "object" == typeof window ? (window.__electronLog = n) : (__electronLog = n);
}
r.ipcRenderer && o(r), (e.exports = o);
