// vendor/module-19172.js — webpack module 19172
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22476 /* vendor/module-22476 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(76041 /* vendor/module-76041 */),
  s = n(19648 /* vendor/module-19648 */),
  l = n(72925 /* vendor/module-72925 */),
  c = n(77481 /* vendor/module-77481 */),
  u = n(47020 /* vendor/module-47020 */),
  d = n(34678 /* vendor/module-34678 */),
  p = n(3743 /* vendor/module-3743 */),
  f = n(45814 /* vendor/module-45814 */),
  h = n(9121 /* vendor/module-9121 */),
  m = n(42123 /* vendor/module-42123 */),
  g = n(17639 /* vendor/module-17639 */);
t.getHttpClientSubscriptions = function (e) {
  const t = new d.LRUMap(100);
  return {
    [m.HTTP_ON_CLIENT_REQUEST]: (n) => {
      if (
        !0 ===
        a.getCurrentScope().getScopeData().sdkProcessingMetadata[
          c.SUPPRESS_TRACING_KEY
        ]
      )
        return;
      const d = a.getClient()?.getOptions(),
        {
          errorMonitor: y = "error",
          spans: v = !d || l.hasSpansEnabled(d),
          propagateTrace: b = !1,
          breadcrumbs: S = !0,
          http: _,
          https: x,
          suppressOtelWarning: w = !1,
        } = e,
        { request: E } = n;
      if (e.ignoreOutgoingRequests?.(f.getRequestUrlFromClientRequest(E), E))
        return;
      let T = !1;
      function k(e, t) {
        T || ((T = !0), r.addOutgoingRequestBreadcrumb(e, t));
      }
      if (!v)
        return (
          S &&
            ((C = E).on(y, () => k(C, void 0)),
            C.prependListener("response", (e) => {
              C.listenerCount("response") <= 1 && e.resume(),
                e.on("end", () => k(C, e)),
                e.on(y, () => k(C, e));
            })),
          void (b && h.injectTracePropagationHeaders(E, t))
        );
      var C;
      w || (_ && g.doubleWrapWarning(_), x && g.doubleWrapWarning(x));
      const I = c.startInactiveSpan(p.getOutgoingRequestSpanData(E));
      e.outgoingRequestHook?.(I, E),
        b &&
          (I.isRecording()
            ? c.withActiveSpan(I, () => {
                h.injectTracePropagationHeaders(E, t);
              })
            : h.injectTracePropagationHeaders(E, t));
      let A = !1;
      function O(e) {
        A || ((A = !0), I.setStatus(e), I.end());
      }
      const R = () => O({ code: s.SPAN_STATUS_UNSET });
      E.on("close", R),
        E.on(y, (e) => {
          o.DEBUG_BUILD &&
            i.debug.log(m.LOG_PREFIX, "outgoingRequest on request error()", e),
            S && k(E, void 0),
            O({ code: s.SPAN_STATUS_ERROR });
        }),
        E.prependListener("response", (t) => {
          E.removeListener("close", R),
            E.listenerCount("response") <= 1 && t.resume(),
            p.setIncomingResponseSpanData(t, I),
            u.bindScopeToEmitter(t),
            e.outgoingResponseHook?.(I, t);
          let n = !1;
          function r(r) {
            if (!n) {
              (n = !0),
                r &&
                  o.DEBUG_BUILD &&
                  i.debug.log(
                    m.LOG_PREFIX,
                    "outgoingRequest on response error()",
                    r,
                  ),
                S && k(E, t);
              const a = t.aborted && !t.complete,
                l =
                  r || "number" != typeof t.statusCode || a
                    ? { code: s.SPAN_STATUS_ERROR }
                    : s.getSpanStatusFromHttpCode(t.statusCode);
              e.applyCustomAttributesOnSpan?.(I, E, t), O(l);
            }
          }
          t.on("end", () => r()), t.on(y, r);
        });
    },
  };
};
