// vendor/other/module-6265.js — webpack module 6265
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(39254 /* vendor/other/module-39254 */),
  i = n(99279 /* vendor/other/module-99279 */),
  s = n(2286 /* vendor/other/module-2286 */),
  a = "Http";
Object.assign(s.instrumentHttpOutgoingRequests, {
  id: `${a}.sentry`,
});
const c = r.defineIntegration((e = {}) => {
  const t = e.spans ?? !1,
    n = e.disableIncomingRequestSpans ?? !1,
    r = t && !n,
    c = {
      sessions: e.trackIncomingRequestsAsSessions,
      sessionFlushingDelayMS: e.sessionFlushingDelayMS,
      ignoreRequestBody: e.ignoreIncomingRequestBody,
      maxRequestBodySize: e.maxIncomingRequestBodySize,
    },
    u = {
      ignoreIncomingRequests: e.ignoreIncomingRequests,
      ignoreStaticAssets: e.ignoreStaticAssets,
      ignoreStatusCodes: e.dropSpansForIncomingRequestStatusCodes,
    },
    l = {
      breadcrumbs: e.breadcrumbs,
      propagateTraceInOutgoingRequests: e.tracePropagation ?? !0,
      ignoreOutgoingRequests: e.ignoreOutgoingRequests,
      spans: t,
    },
    d = o.httpServerIntegration(c),
    p = i.httpServerSpansIntegration(u);
  return {
    name: a,
    setup(e) {
      r && p.setup(e);
    },
    setupOnce() {
      d.setupOnce(), s.instrumentHttpOutgoingRequests(l);
    },
    processEvent: (e) => p.processEvent(e),
  };
});
t.httpIntegration = c;
