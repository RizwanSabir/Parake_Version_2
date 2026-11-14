// vendor/other/module-17442.js — webpack module 17442
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(64289 /* vendor/other/module-64289 */),
  o = n(16973 /* vendor/other/module-16973 */),
  i = n(76041 /* vendor/other/module-76041 */),
  s = n(15946 /* vendor/other/module-15946 */),
  a = n(58637 /* vendor/other/module-58637 */),
  c = n(38862 /* vendor/other/module-38862 */),
  u = n(72925 /* vendor/other/module-72925 */),
  l = n(63059 /* vendor/other/module-63059 */),
  d = n(60169 /* vendor/other/module-60169 */),
  p = n(32997 /* vendor/other/module-32997 */),
  f = n(73253 /* vendor/other/module-73253 */);
t.getTraceData = function (e = {}) {
  const t = e.client || i.getClient();
  if (!s.isEnabled() || !t) return {};
  const n = o.getMainCarrier(),
    h = r.getAsyncContextStrategy(n);
  if (h.getTraceData) return h.getTraceData(e);
  const g = e.scope || i.getCurrentScope(),
    m = e.span || c.getActiveSpan(),
    _ = l.spanIsNonRecordingSpan(m) && !u.hasSpansEnabled(t.getOptions());
  if (!m && i.hasExternalPropagationContext()) return {};
  const S =
      m && !_
        ? c.spanToTraceHeader(m)
        : (function (e) {
            const {
              traceId: t,
              sampled: n,
              propagationSpanId: r,
            } = e.getPropagationContext();
            return f.generateSentryTraceHeader(t, r, n);
          })(g),
    E = m
      ? d.getDynamicSamplingContextFromSpan(m)
      : d.getDynamicSamplingContextFromScope(t, g),
    y = p.dynamicSamplingContextToSentryBaggageHeader(E);
  if (!f.TRACEPARENT_REGEXP.test(S))
    return (
      a.debug.warn("Invalid sentry-trace data. Cannot generate trace data"), {}
    );
  const T = { "sentry-trace": S, baggage: y };
  return (
    e.propagateTraceparent &&
      (T.traceparent =
        m && !_
          ? c.spanToTraceparentHeader(m)
          : (function (e) {
              const {
                traceId: t,
                sampled: n,
                propagationSpanId: r,
              } = e.getPropagationContext();
              return f.generateTraceparentHeader(t, r, n);
            })(g)),
    T
  );
};
