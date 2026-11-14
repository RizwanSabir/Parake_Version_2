// vendor/module-9121.js — webpack module 9121
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(23295 /* vendor/module-23295 */),
  s = n(17442 /* vendor/module-17442 */),
  l = n(79317 /* vendor/module-79317 */),
  c = n(42123 /* vendor/module-42123 */),
  u = n(45814 /* vendor/module-45814 */),
  d = n(32997 /* vendor/module-32997 */);
t.injectTracePropagationHeaders = function (e, t) {
  const n = u.getRequestUrlFromClientRequest(e),
    p = r.getClient()?.getOptions(),
    { tracePropagationTargets: f, propagateTraceparent: h } = p ?? {};
  if (!l.shouldPropagateTraceForUrl(n, f, t)) return;
  if (e.getHeader("sentry-trace")) return;
  const m = s.getTraceData({ propagateTraceparent: h });
  if (!m) return;
  const { "sentry-trace": g, baggage: y, traceparent: v } = m;
  if (g)
    try {
      e.setHeader("sentry-trace", g),
        o.DEBUG_BUILD && i.debug.log(c.LOG_PREFIX, "Added sentry-trace header");
    } catch (e) {
      o.DEBUG_BUILD &&
        i.debug.error(
          c.LOG_PREFIX,
          "Failed to set sentry-trace header:",
          a.isError(e) ? e.message : "Unknown error",
        );
    }
  if (v && !e.getHeader("traceparent"))
    try {
      e.setHeader("traceparent", v),
        o.DEBUG_BUILD && i.debug.log(c.LOG_PREFIX, "Added traceparent header");
    } catch (e) {
      o.DEBUG_BUILD &&
        i.debug.error(
          c.LOG_PREFIX,
          "Failed to set traceparent header:",
          a.isError(e) ? e.message : "Unknown error",
        );
    }
  if (y) {
    const t = d.mergeBaggageHeaders(e.getHeader("baggage"), y);
    if (t)
      try {
        e.setHeader("baggage", t),
          o.DEBUG_BUILD && i.debug.log(c.LOG_PREFIX, "Added baggage header");
      } catch (e) {
        o.DEBUG_BUILD &&
          i.debug.error(
            c.LOG_PREFIX,
            "Failed to set baggage header:",
            a.isError(e) ? e.message : "Unknown error",
          );
      }
  }
};
