// vendor/other/module-84518.js — webpack module 84518
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = "Http",
  a = Object.assign(o.instrumentHttpOutgoingRequests, {
    id: `${s}.sentry`,
  }),
  c = r.defineIntegration((e = {}) => {
    const t = e.spans ?? !0,
      n = e.disableIncomingRequestSpans,
      a = t && !n,
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
        instrumentation: e.instrumentation,
        onSpanCreated: e.incomingRequestSpanHook,
      },
      l = o.httpServerIntegration(c),
      d = o.httpServerSpansIntegration(u);
    return {
      name: s,
      setup(e) {
        const t = e.getOptions();
        a && r.hasSpansEnabled(t) && d.setup(e);
      },
      setupOnce() {
        l.setupOnce();
        const n = {
          breadcrumbs: e.breadcrumbs,
          spans: t,
          propagateTraceInOutgoingRequests: e.tracePropagation ?? !0,
          createSpansForOutgoingRequests: t,
          ignoreOutgoingRequests: e.ignoreOutgoingRequests,
          outgoingRequestHook: (t, n) => {
            const o = r.getRequestUrlFromClientRequest(n);
            if (o.startsWith("data:")) {
              const e = r.stripDataUrlContent(o);
              t.setAttribute("http.url", e),
                t.setAttribute(i.URL_FULL, e),
                t.updateName(`${n.method || "GET"} ${e}`);
            }
            e.instrumentation?.requestHook?.(t, n);
          },
          outgoingResponseHook: e.instrumentation?.responseHook,
          outgoingRequestApplyCustomAttributes:
            e.instrumentation?.applyCustomAttributesOnSpan,
        };
        o.instrumentHttpOutgoingRequests(n);
      },
      processEvent: (e) => d.processEvent(e),
    };
  });
(t.httpIntegration = c), (t.instrumentSentryHttp = a);
