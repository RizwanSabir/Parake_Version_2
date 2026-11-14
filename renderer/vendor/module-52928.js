// vendor/module-52928.js — webpack module 52928
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(48420 /* vendor/module-48420 */),
  i = n(47720 /* vendor/module-47720 */),
  a = n(13111 /* vendor/module-13111 */),
  s = n(71417 /* vendor/module-71417 */);
function l(e, t, n, a) {
  o.DEBUG_BUILD && r.debug.log(`Sending CLS span (${e})`);
  const l = t
      ? s.msToSec((r.browserPerformanceTimeOrigin() || 0) + t.startTime)
      : r.timestampInSeconds(),
    c = r.getCurrentScope().getScopeData().transactionName,
    u = t ? i.htmlTreeAsString(t.sources[0]?.node) : "Layout shift",
    d = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls",
      [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": a,
    };
  t?.sources &&
    t.sources.forEach((e, t) => {
      d[`cls.source.${t + 1}`] = i.htmlTreeAsString(e.node);
    });
  const p = s.startStandaloneWebVitalSpan({
    name: u,
    transaction: c,
    attributes: d,
    startTime: l,
  });
  p &&
    (p.addEvent("cls", {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: e,
    }),
    p.end(l));
}
(t._sendStandaloneClsSpan = l),
  (t.trackClsAsStandaloneSpan = function (e) {
    let t,
      n = 0;
    if (!s.supportsWebVital("layout-shift")) return;
    const r = a.addClsInstrumentationHandler(({ metric: e }) => {
      const r = e.entries[e.entries.length - 1];
      r && ((n = e.value), (t = r));
    }, !0);
    s.listenForWebVitalReportEvents(e, (e, o) => {
      l(n, t, o, e), r();
    });
  });
