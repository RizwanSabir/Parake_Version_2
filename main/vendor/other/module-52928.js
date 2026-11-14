// vendor/other/module-52928.js — webpack module 52928
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(48420 /* vendor/other/module-48420 */),
  i = n(47720 /* vendor/other/module-47720 */),
  s = n(13111 /* vendor/other/module-13111 */),
  a = n(71417 /* vendor/other/module-71417 */);
function c(e, t, n, s) {
  o.DEBUG_BUILD && r.debug.log(`Sending CLS span (${e})`);
  const c = t
      ? a.msToSec((r.browserPerformanceTimeOrigin() || 0) + t.startTime)
      : r.timestampInSeconds(),
    u = r.getCurrentScope().getScopeData().transactionName,
    l = t ? i.htmlTreeAsString(t.sources[0]?.node) : "Layout shift",
    d = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls",
      [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0,
      "sentry.pageload.span_id": n,
      "sentry.report_event": s,
    };
  t?.sources &&
    t.sources.forEach((e, t) => {
      d[`cls.source.${t + 1}`] = i.htmlTreeAsString(e.node);
    });
  const p = a.startStandaloneWebVitalSpan({
    name: l,
    transaction: u,
    attributes: d,
    startTime: c,
  });
  p &&
    (p.addEvent("cls", {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "",
      [r.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: e,
    }),
    p.end(c));
}
(t._sendStandaloneClsSpan = c),
  (t.trackClsAsStandaloneSpan = function (e) {
    let t,
      n = 0;
    if (!a.supportsWebVital("layout-shift")) return;
    const r = s.addClsInstrumentationHandler(({ metric: e }) => {
      const r = e.entries[e.entries.length - 1];
      r && ((n = e.value), (t = r));
    }, !0);
    a.listenForWebVitalReportEvents(e, (e, o) => {
      c(n, t, o, e), r();
    });
  });
