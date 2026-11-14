// vendor/sentry/ipc-protocol.js — webpack module 73727
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(84157 /* external/electron */);
var o;
!(function (e) {
  (e[(e.Classic = 1)] = "Classic"),
    (e[(e.Protocol = 2)] = "Protocol"),
    (e[(e.Both = 3)] = "Both");
})(o || (o = {})),
  (function (e = "sentry-ipc") {
    const t = (function (e) {
      return {
        createUrl: (t) => `${e}://${t}/sentry_key`,
        urlMatches: function (e, t) {
          return e.startsWith(this.createUrl(t));
        },
        createKey: (t) => `${e}.${t}`,
        namespace: e,
      };
    })(e);
    if (
      ((window.__SENTRY_IPC__ = window.__SENTRY_IPC__ || {}),
      window.__SENTRY_IPC__[t.namespace])
    );
    else {
      const e = {
        sendRendererStart: () => r.ipcRenderer.send(t.createKey("start")),
        sendScope: (e) => r.ipcRenderer.send(t.createKey("scope"), e),
        sendEnvelope: (e) => r.ipcRenderer.send(t.createKey("envelope"), e),
        sendStatus: (e) => r.ipcRenderer.send(t.createKey("status"), e),
        sendStructuredLog: (e) =>
          r.ipcRenderer.send(t.createKey("structured-log"), e),
        sendMetric: (e) => r.ipcRenderer.send(t.createKey("metric"), e),
      };
      if (((window.__SENTRY_IPC__[t.namespace] = e), r.contextBridge))
        try {
          r.contextBridge.exposeInMainWorld(
            "__SENTRY_IPC__",
            window.__SENTRY_IPC__,
          );
        } catch {}
    }
  })();
