// vendor/other/module-19172.js — webpack module 19172
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22476 /* vendor/other/module-22476 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(58637 /* vendor/other/module-58637 */),
  s = n(76041 /* vendor/other/module-76041 */),
  a = n(19648 /* vendor/other/module-19648 */),
  c = n(72925 /* vendor/other/module-72925 */),
  u = n(77481 /* vendor/other/module-77481 */),
  l = n(47020 /* vendor/other/module-47020 */),
  d = n(34678 /* vendor/other/module-34678 */),
  p = n(3743 /* vendor/other/module-3743 */),
  f = n(45814 /* vendor/other/module-45814 */),
  h = n(9121 /* vendor/other/module-9121 */),
  g = n(42123 /* vendor/other/module-42123 */),
  m = n(17639 /* vendor/other/module-17639 */);
t.getHttpClientSubscriptions = function (e) {
  const t = new d.LRUMap(100);
  return {
    [g.HTTP_ON_CLIENT_REQUEST]: (n) => {
      if (
        !0 ===
        s.getCurrentScope().getScopeData().sdkProcessingMetadata[
          u.SUPPRESS_TRACING_KEY
        ]
      )
        return;
      const d = s.getClient()?.getOptions(),
        {
          errorMonitor: _ = "error",
          spans: S = !d || c.hasSpansEnabled(d),
          propagateTrace: E = !1,
          breadcrumbs: y = !0,
          http: T,
          https: b,
          suppressOtelWarning: I = !1,
        } = e,
        { request: v } = n;
      if (e.ignoreOutgoingRequests?.(f.getRequestUrlFromClientRequest(v), v))
        return;
      let A = !1;
      function N(e, t) {
        A || ((A = !0), r.addOutgoingRequestBreadcrumb(e, t));
      }
      if (!S)
        return (
          y &&
            ((R = v).on(_, () => N(R, void 0)),
            R.prependListener("response", (e) => {
              R.listenerCount("response") <= 1 && e.resume(),
                e.on("end", () => N(R, e)),
                e.on(_, () => N(R, e));
            })),
          void (E && h.injectTracePropagationHeaders(v, t))
        );
      var R;
      I || (T && m.doubleWrapWarning(T), b && m.doubleWrapWarning(b));
      const C = u.startInactiveSpan(p.getOutgoingRequestSpanData(v));
      e.outgoingRequestHook?.(C, v),
        E &&
          (C.isRecording()
            ? u.withActiveSpan(C, () => {
                h.injectTracePropagationHeaders(v, t);
              })
            : h.injectTracePropagationHeaders(v, t));
      let O = !1;
      function w(e) {
        O || ((O = !0), C.setStatus(e), C.end());
      }
      const k = () => w({ code: a.SPAN_STATUS_UNSET });
      v.on("close", k),
        v.on(_, (e) => {
          o.DEBUG_BUILD &&
            i.debug.log(g.LOG_PREFIX, "outgoingRequest on request error()", e),
            y && N(v, void 0),
            w({ code: a.SPAN_STATUS_ERROR });
        }),
        v.prependListener("response", (t) => {
          v.removeListener("close", k),
            v.listenerCount("response") <= 1 && t.resume(),
            p.setIncomingResponseSpanData(t, C),
            l.bindScopeToEmitter(t),
            e.outgoingResponseHook?.(C, t);
          let n = !1;
          function r(r) {
            if (!n) {
              (n = !0),
                r &&
                  o.DEBUG_BUILD &&
                  i.debug.log(
                    g.LOG_PREFIX,
                    "outgoingRequest on response error()",
                    r,
                  ),
                y && N(v, t);
              const s = t.aborted && !t.complete,
                c =
                  r || "number" != typeof t.statusCode || s
                    ? { code: a.SPAN_STATUS_ERROR }
                    : a.getSpanStatusFromHttpCode(t.statusCode);
              e.applyCustomAttributesOnSpan?.(C, v, t), w(c);
            }
          }
          t.on("end", () => r()), t.on(_, r);
        });
    },
  };
};
