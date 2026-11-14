// vendor/module-63319.js — webpack module 63319
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(48420 /* vendor/module-48420 */),
  i = n(47720 /* vendor/module-47720 */),
  a = n(13111 /* vendor/module-13111 */),
  s = n(71417 /* vendor/module-71417 */);
function l(e) {
  return null != e && e > 0 && e <= 6e4;
}
function c(e, t, n, a) {
  if (!l(e)) return;
  o.DEBUG_BUILD && r.debug.log(`Sending LCP span (${e})`);
  const c = s.msToSec(
      (r.browserPerformanceTimeOrigin() || 0) + (t?.startTime || 0),
    ),
    u = r.getCurrentScope().getScopeData().transactionName,
    d = t ? i.htmlTreeAsString(t.element) : "Largest contentful paint",
    p = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.lcp",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.lcp",
      [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": a,
    };
  t &&
    (t.element && (p["lcp.element"] = i.htmlTreeAsString(t.element)),
    t.id && (p["lcp.id"] = t.id),
    t.url && (p["lcp.url"] = t.url),
    null != t.loadTime && (p["lcp.loadTime"] = t.loadTime),
    null != t.renderTime && (p["lcp.renderTime"] = t.renderTime),
    null != t.size && (p["lcp.size"] = t.size));
  const f = s.startStandaloneWebVitalSpan({
    name: d,
    transaction: u,
    attributes: p,
    startTime: c,
  });
  f &&
    (f.addEvent("lcp", {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: e,
    }),
    f.end(c));
}
(t.MAX_PLAUSIBLE_LCP_DURATION = 6e4),
  (t._sendStandaloneLcpSpan = c),
  (t.isValidLcpMetric = l),
  (t.trackLcpAsStandaloneSpan = function (e) {
    let t,
      n = 0;
    if (!s.supportsWebVital("largest-contentful-paint")) return;
    const r = a.addLcpInstrumentationHandler(({ metric: e }) => {
      const r = e.entries[e.entries.length - 1];
      r && l(e.value) && ((n = e.value), (t = r));
    }, !0);
    s.listenForWebVitalReportEvents(e, (e, o) => {
      c(n, t, o, e), r();
    });
  });
