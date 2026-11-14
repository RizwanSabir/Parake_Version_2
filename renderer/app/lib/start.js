// app/lib/start.js — webpack module 27495
// params: (e, t) = (module, exports, require)
"use strict";
t.createIpcLoopbackRecorder = function ({ onAudio: e }) {
  let t = "inactive",
    n = !1;
  const r = window.electron.ipcRendererProxy.on(
    "main/share-loopback-audio",
    (n) => {
      "recording" === t && e(n);
    },
  );
  return {
    start: () => {
      t = "recording";
    },
    stop: () => {
      t = "inactive";
    },
    close: () => {
      n ||
        ((n = !0),
        (t = "inactive"),
        r(),
        window.electron.ipcRendererProxy
          .invoke("renderer/stop-share-loopback")
          .catch(() => {}));
    },
    get state() {
      return t;
    },
  };
};
