// vendor/other/module-9121.js — webpack module 9121
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(58637 /* vendor/other/module-58637 */),
  s = n(23295 /* vendor/other/module-23295 */),
  a = n(17442 /* vendor/other/module-17442 */),
  c = n(1698 /* vendor/other/module-1698 */),
  u = n(42123 /* vendor/other/module-42123 */),
  l = n(45814 /* vendor/other/module-45814 */),
  d = n(32997 /* vendor/other/module-32997 */);
t.injectTracePropagationHeaders = function (e, t) {
  const n = l.getRequestUrlFromClientRequest(e),
    p = r.getClient()?.getOptions(),
    { tracePropagationTargets: f, propagateTraceparent: h } = p ?? {};
  if (!c.shouldPropagateTraceForUrl(n, f, t)) return;
  if (e.getHeader("sentry-trace")) return;
  const g = a.getTraceData({ propagateTraceparent: h });
  if (!g) return;
  const { "sentry-trace": m, baggage: _, traceparent: S } = g;
  if (m)
    try {
      e.setHeader("sentry-trace", m),
        o.DEBUG_BUILD && i.debug.log(u.LOG_PREFIX, "Added sentry-trace header");
    } catch (e) {
      o.DEBUG_BUILD &&
        i.debug.error(
          u.LOG_PREFIX,
          "Failed to set sentry-trace header:",
          s.isError(e) ? e.message : "Unknown error",
        );
    }
  if (S && !e.getHeader("traceparent"))
    try {
      e.setHeader("traceparent", S),
        o.DEBUG_BUILD && i.debug.log(u.LOG_PREFIX, "Added traceparent header");
    } catch (e) {
      o.DEBUG_BUILD &&
        i.debug.error(
          u.LOG_PREFIX,
          "Failed to set traceparent header:",
          s.isError(e) ? e.message : "Unknown error",
        );
    }
  if (_) {
    const t = d.mergeBaggageHeaders(e.getHeader("baggage"), _);
    if (t)
      try {
        e.setHeader("baggage", t),
          o.DEBUG_BUILD && i.debug.log(u.LOG_PREFIX, "Added baggage header");
      } catch (e) {
        o.DEBUG_BUILD &&
          i.debug.error(
            u.LOG_PREFIX,
            "Failed to set baggage header:",
            s.isError(e) ? e.message : "Unknown error",
          );
      }
  }
};
