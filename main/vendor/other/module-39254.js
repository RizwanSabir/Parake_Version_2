// vendor/other/module-39254.js — webpack module 39254
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(80781 /* vendor/other/module-80781 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(14052 /* vendor/other/module-14052 */),
  a = o.createContextKey("sentry_http_server_instrumented");
(t.recordRequestSession = i.recordRequestSession),
  (t.addStartSpanCallback = function (e, t) {
    i.addNonEnumerableProperty(e, "_startSpanCallback", new WeakRef(t));
  }),
  (t.httpServerIntegration = (e = {}) => {
    const t = {
      sessions: e.sessions ?? !0,
      sessionFlushingDelayMS: e.sessionFlushingDelayMS ?? 6e4,
      maxRequestBodySize: e.maxRequestBodySize ?? "medium",
      spans: !1,
      ignoreRequestBody: e.ignoreRequestBody,
      wrapServerEmitRequest(e, t, n, r) {
        const s = i.getClient();
        if (!s) return r();
        if (o.context.active().getValue(a)) return r();
        const c = o.propagation
          .extract(o.context.active(), n.headers)
          .setValue(a, !0);
        o.context.with(c, () => {
          s.emit("httpServerRequest", e, t, n);
          const o = e._startSpanCallback?.deref();
          o ? o(() => (r(), !0)) : r();
        });
      },
    };
    return {
      name: "Http.Server",
      setupOnce() {
        const { [i.HTTP_ON_SERVER_REQUEST]: e } =
          i.getHttpServerSubscriptions(t);
        r.subscribe(i.HTTP_ON_SERVER_REQUEST, e);
      },
      afterAllSetup(e) {
        s.DEBUG_BUILD &&
          e.getIntegrationByName("Http") &&
          i.debug.warn(
            "It seems that you have manually added `httpServerIntegration` while `httpIntegration` is also present. Make sure to remove `httpServerIntegration` when adding `httpIntegration`.",
          );
      },
    };
  });
