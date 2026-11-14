// vendor/other/module-68609.js — webpack module 68609
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(48420 /* vendor/other/module-48420 */),
  i = n(47720 /* vendor/other/module-47720 */),
  s = n(60467 /* vendor/other/module-60467 */),
  a = n(22605 /* vendor/other/module-22605 */),
  c = n(13111 /* vendor/other/module-13111 */),
  u = n(63319 /* vendor/other/module-63319 */),
  l = n(71417 /* vendor/other/module-71417 */),
  d = n(88516 /* vendor/other/module-88516 */);
function p(e) {
  const {
      name: t,
      op: n,
      origin: o,
      metricName: i,
      value: a,
      attributes: c,
      parentSpan: u,
      reportEvent: l,
      startTime: p,
      endTime: f,
    } = e,
    h = r.getCurrentScope().getScopeData().transactionName,
    g = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: o,
      [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: n,
      [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0,
      [`browser.web_vital.${i}.value`]: a,
      [d.SENTRY_TRANSACTION]: h,
      [d.SENTRY_SEGMENT_NAME]: h,
      "user_agent.original": s.WINDOW.navigator?.userAgent,
      ...c,
    };
  u &&
    "pageload" ===
      r.spanToStreamedSpanJSON(u).attributes?.[
        r.SEMANTIC_ATTRIBUTE_SENTRY_OP
      ] &&
    (g["sentry.pageload.span_id"] = u.spanContext().spanId),
    l && (g[`browser.web_vital.${i}.report_event`] = l);
  const m = r.startInactiveSpan({
    name: t,
    attributes: g,
    startTime: p,
    parentSpan: u,
  });
  m && m.end(f ?? p);
}
function f(e, t, n, s) {
  if (!u.isValidLcpMetric(e)) return;
  o.DEBUG_BUILD && r.debug.log(`Sending LCP span (${e})`);
  const a = r.browserPerformanceTimeOrigin() || 0,
    c = l.msToSec(a),
    d = l.msToSec(a + (t?.startTime || 0)),
    f = t ? i.htmlTreeAsString(t.element) : "Largest contentful paint",
    h = {};
  t?.element &&
    (h["browser.web_vital.lcp.element"] = i.htmlTreeAsString(t.element)),
    t?.id && (h["browser.web_vital.lcp.id"] = t.id),
    t?.url && (h["browser.web_vital.lcp.url"] = t.url),
    null != t?.loadTime && (h["browser.web_vital.lcp.load_time"] = t.loadTime),
    null != t?.renderTime &&
      (h["browser.web_vital.lcp.render_time"] = t.renderTime),
    null != t?.size && (h["browser.web_vital.lcp.size"] = t.size),
    p({
      name: f,
      op: "ui.webvital.lcp",
      origin: "auto.http.browser.lcp",
      metricName: "lcp",
      value: e,
      attributes: h,
      parentSpan: n,
      reportEvent: s,
      startTime: c,
      endTime: d,
    });
}
function h(e, t, n, s) {
  o.DEBUG_BUILD && r.debug.log(`Sending CLS span (${e})`);
  const a = t
      ? l.msToSec((r.browserPerformanceTimeOrigin() || 0) + t.startTime)
      : r.timestampInSeconds(),
    c = t ? i.htmlTreeAsString(t.sources[0]?.node) : "Layout shift",
    u = {};
  t?.sources &&
    t.sources.forEach((e, t) => {
      u[`browser.web_vital.cls.source.${t + 1}`] = i.htmlTreeAsString(e.node);
    }),
    p({
      name: c,
      op: "ui.webvital.cls",
      origin: "auto.http.browser.cls",
      metricName: "cls",
      value: e,
      attributes: u,
      parentSpan: n,
      reportEvent: s,
      startTime: a,
    });
}
function g(e, t) {
  o.DEBUG_BUILD && r.debug.log(`Sending INP span (${e})`);
  const n = l.msToSec(r.browserPerformanceTimeOrigin() + t.startTime),
    s = l.msToSec(e),
    c = a.INP_ENTRY_MAP[t.name],
    u = a.getCachedInteractionContext(t.interactionId),
    f = r.getActiveSpan(),
    h = f ? r.getRootSpan(f) : void 0,
    g = u?.span || h,
    m = g
      ? r.spanToStreamedSpanJSON(g).name
      : r.getCurrentScope().getScopeData().transactionName;
  p({
    name: u?.elementName || i.htmlTreeAsString(t.target),
    op: `ui.interaction.${c}`,
    origin: "auto.http.browser.inp",
    metricName: "inp",
    value: e,
    attributes: {
      [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: t.duration,
      [d.SENTRY_TRANSACTION]: m,
      [d.SENTRY_SEGMENT_NAME]: m,
    },
    startTime: n,
    endTime: n + s,
    parentSpan: g,
  });
}
(t._emitWebVitalSpan = p),
  (t._sendClsSpan = h),
  (t._sendInpSpan = g),
  (t._sendLcpSpan = f),
  (t.trackClsAsSpan = function (e) {
    let t,
      n = 0;
    if (!l.supportsWebVital("layout-shift")) return;
    const r = c.addClsInstrumentationHandler(({ metric: e }) => {
      const r = e.entries[e.entries.length - 1];
      r && ((n = e.value), (t = r));
    }, !0);
    l.listenForWebVitalReportEvents(e, (e, o, i) => {
      h(n, t, i, e), r();
    });
  }),
  (t.trackInpAsSpan = function () {
    l.getBrowserPerformanceAPI() &&
      r.browserPerformanceTimeOrigin() &&
      c.addInpInstrumentationHandler(({ metric: e }) => {
        if (null == e.value) return;
        if (l.msToSec(e.value) > a.MAX_PLAUSIBLE_INP_DURATION) return;
        const t = e.entries.find(
          (t) => t.duration === e.value && a.INP_ENTRY_MAP[t.name],
        );
        t && g(e.value, t);
      });
  }),
  (t.trackLcpAsSpan = function (e) {
    let t,
      n = 0;
    if (!l.supportsWebVital("largest-contentful-paint")) return;
    const r = c.addLcpInstrumentationHandler(({ metric: e }) => {
      const r = e.entries[e.entries.length - 1];
      r && u.isValidLcpMetric(e.value) && ((n = e.value), (t = r));
    }, !0);
    l.listenForWebVitalReportEvents(e, (e, o, i) => {
      f(n, t, i, e), r();
    });
  });
