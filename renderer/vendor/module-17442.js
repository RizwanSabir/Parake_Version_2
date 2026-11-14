// vendor/module-17442.js — webpack module 17442
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(64289 /* vendor/module-64289 */),
  o = n(16973 /* vendor/module-16973 */),
  i = n(76041 /* vendor/module-76041 */),
  a = n(15946 /* vendor/module-15946 */),
  s = n(58637 /* vendor/module-58637 */),
  l = n(38862 /* vendor/module-38862 */),
  c = n(72925 /* vendor/module-72925 */),
  u = n(63059 /* vendor/module-63059 */),
  d = n(60169 /* vendor/module-60169 */),
  p = n(32997 /* vendor/module-32997 */),
  f = n(73253 /* vendor/module-73253 */);
t.getTraceData = function (e = {}) {
  const t = e.client || i.getClient();
  if (!a.isEnabled() || !t) return {};
  const n = o.getMainCarrier(),
    h = r.getAsyncContextStrategy(n);
  if (h.getTraceData) return h.getTraceData(e);
  const m = e.scope || i.getCurrentScope(),
    g = e.span || l.getActiveSpan(),
    y = u.spanIsNonRecordingSpan(g) && !c.hasSpansEnabled(t.getOptions());
  if (!g && i.hasExternalPropagationContext()) return {};
  const v =
      g && !y
        ? l.spanToTraceHeader(g)
        : (function (e) {
            const {
              traceId: t,
              sampled: n,
              propagationSpanId: r,
            } = e.getPropagationContext();
            return f.generateSentryTraceHeader(t, r, n);
          })(m),
    b = g
      ? d.getDynamicSamplingContextFromSpan(g)
      : d.getDynamicSamplingContextFromScope(t, m),
    S = p.dynamicSamplingContextToSentryBaggageHeader(b);
  if (!f.TRACEPARENT_REGEXP.test(v))
    return (
      s.debug.warn("Invalid sentry-trace data. Cannot generate trace data"), {}
    );
  const _ = { "sentry-trace": v, baggage: S };
  return (
    e.propagateTraceparent &&
      (_.traceparent =
        g && !y
          ? l.spanToTraceparentHeader(g)
          : (function (e) {
              const {
                traceId: t,
                sampled: n,
                propagationSpanId: r,
              } = e.getPropagationContext();
              return f.generateTraceparentHeader(t, r, n);
            })(m)),
    _
  );
};
