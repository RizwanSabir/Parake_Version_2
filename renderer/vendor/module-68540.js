// vendor/module-68540.js — webpack module 68540
// params: (e, t, n) = (module, exports, require)
const r = n(96137 /* vendor/module-96137 */),
  o = n(41302 /* vendor/module-41302 */);
let i;
t.getIPC = function (e = r.getClient()) {
  if (!e)
    throw new Error(
      "Could not find client, make sure to call Sentry.init before getIPC",
    );
  i || (i = new WeakMap());
  const t = i.get(e);
  if (t) return t;
  const n = (function (e) {
    const t = o.ipcChannelUtils(e);
    if (window.__SENTRY_IPC__?.[t.namespace])
      return window.__SENTRY_IPC__[t.namespace];
    {
      r.debug.log(
        "IPC was not configured in preload script, falling back to custom protocol and fetch",
      );
      const e = (window.__SENTRY_RENDERER_ID__ = r.uuid4()),
        n = { [o.RENDERER_ID_HEADER]: e };
      return {
        sendRendererStart: () => {
          fetch(t.createUrl("start"), {
            method: "POST",
            body: "",
            headers: n,
          }).catch(() => {});
        },
        sendScope: (e) => {
          fetch(t.createUrl("scope"), {
            method: "POST",
            body: e,
            headers: n,
          }).catch(() => {});
        },
        sendEnvelope: (e) => {
          const r =
            "string" == typeof e
              ? e
              : e.buffer instanceof ArrayBuffer
                ? e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                : Uint8Array.from(e).buffer;
          fetch(t.createUrl("envelope"), {
            method: "POST",
            body: r,
            headers: n,
          }).catch(() => {});
        },
        sendStatus: (e) => {
          fetch(t.createUrl("status"), {
            method: "POST",
            body: JSON.stringify({ status: e }),
            headers: n,
          }).catch(() => {});
        },
        sendStructuredLog: (e) => {
          fetch(t.createUrl("structured-log"), {
            method: "POST",
            body: JSON.stringify(e),
            headers: n,
          }).catch(() => {});
        },
        sendMetric: (e) => {
          fetch(t.createUrl("metric"), {
            method: "POST",
            body: JSON.stringify(e),
            headers: n,
          }).catch(() => {});
        },
      };
    }
  })(e.getOptions().ipcNamespace);
  return i.set(e, n), n.sendRendererStart(), n;
};
