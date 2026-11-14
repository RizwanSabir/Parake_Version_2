// vendor/module-68609.js — webpack module 68609
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(48420 /* vendor/module-48420 */),
  i = n(47720 /* vendor/module-47720 */),
  a = n(60467 /* vendor/module-60467 */),
  s = n(22605 /* vendor/module-22605 */),
  l = n(13111 /* vendor/module-13111 */),
  c = n(63319 /* vendor/module-63319 */),
  u = n(71417 /* vendor/module-71417 */),
  d = n(88516 /* vendor/module-88516 */);
function p(e) {
  const {
      name: t,
      op: n,
      origin: o,
      metricName: i,
      value: s,
      attributes: l,
      parentSpan: c,
      reportEvent: u,
      startTime: p,
      endTime: f,
    } = e,
    h = r.getCurrentScope().getScopeData().transactionName,
    m = {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: o,
      [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: n,
      [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0,
      [`browser.web_vital.${i}.value`]: s,
      [d.SENTRY_TRANSACTION]: h,
      [d.SENTRY_SEGMENT_NAME]: h,
      "user_agent.original": a.WINDOW.navigator?.userAgent,
      ...l,
    };
  c &&
    "pageload" ===
      r.spanToStreamedSpanJSON(c).attributes?.[
        r.SEMANTIC_ATTRIBUTE_SENTRY_OP
      ] &&
    (m["sentry.pageload.span_id"] = c.spanContext().spanId),
    u && (m[`browser.web_vital.${i}.report_event`] = u);
  const g = r.startInactiveSpan({
    name: t,
    attributes: m,
    startTime: p,
    parentSpan: c,
  });
  g && g.end(f ?? p);
}
function f(e, t, n, a) {
  if (!c.isValidLcpMetric(e)) return;
  o.DEBUG_BUILD && r.debug.log(`Sending LCP span (${e})`);
  const s = r.browserPerformanceTimeOrigin() || 0,
    l = u.msToSec(s),
    d = u.msToSec(s + (t?.startTime || 0)),
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
      reportEvent: a,
      startTime: l,
      endTime: d,
    });
}
function h(e, t, n, a) {
  o.DEBUG_BUILD && r.debug.log(`Sending CLS span (${e})`);
  const s = t
      ? u.msToSec((r.browserPerformanceTimeOrigin() || 0) + t.startTime)
      : r.timestampInSeconds(),
    l = t ? i.htmlTreeAsString(t.sources[0]?.node) : "Layout shift",
    c = {};
  t?.sources &&
    t.sources.forEach((e, t) => {
      c[`browser.web_vital.cls.source.${t + 1}`] = i.htmlTreeAsString(e.node);
    }),
    p({
      name: l,
      op: "ui.webvital.cls",
      origin: "auto.http.browser.cls",
      metricName: "cls",
      value: e,
      attributes: c,
      parentSpan: n,
      reportEvent: a,
      startTime: s,
    });
}
function m(e, t) {
  o.DEBUG_BUILD && r.debug.log(`Sending INP span (${e})`);
  const n = u.msToSec(r.browserPerformanceTimeOrigin() + t.startTime),
    a = u.msToSec(e),
    l = s.INP_ENTRY_MAP[t.name],
    c = s.getCachedInteractionContext(t.interactionId),
    f = r.getActiveSpan(),
    h = f ? r.getRootSpan(f) : void 0,
    m = c?.span || h,
    g = m
      ? r.spanToStreamedSpanJSON(m).name
      : r.getCurrentScope().getScopeData().transactionName;
  p({
    name: c?.elementName || i.htmlTreeAsString(t.target),
    op: `ui.interaction.${l}`,
    origin: "auto.http.browser.inp",
    metricName: "inp",
    value: e,
    attributes: {
      [r.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: t.duration,
      [d.SENTRY_TRANSACTION]: g,
      [d.SENTRY_SEGMENT_NAME]: g,
    },
    startTime: n,
    endTime: n + a,
    parentSpan: m,
  });
}
(t._emitWebVitalSpan = p),
  (t._sendClsSpan = h),
  (t._sendInpSpan = m),
  (t._sendLcpSpan = f),
  (t.trackClsAsSpan = function (e) {
    let t,
      n = 0;
    if (!u.supportsWebVital("layout-shift")) return;
    const r = l.addClsInstrumentationHandler(({ metric: e }) => {
      const r = e.entries[e.entries.length - 1];
      r && ((n = e.value), (t = r));
    }, !0);
    u.listenForWebVitalReportEvents(e, (e, o, i) => {
      h(n, t, i, e), r();
    });
  }),
  (t.trackInpAsSpan = function () {
    u.getBrowserPerformanceAPI() &&
      r.browserPerformanceTimeOrigin() &&
      l.addInpInstrumentationHandler(({ metric: e }) => {
        if (null == e.value) return;
        if (u.msToSec(e.value) > s.MAX_PLAUSIBLE_INP_DURATION) return;
        const t = e.entries.find(
          (t) => t.duration === e.value && s.INP_ENTRY_MAP[t.name],
        );
        t && m(e.value, t);
      });
  }),
  (t.trackLcpAsSpan = function (e) {
    let t,
      n = 0;
    if (!u.supportsWebVital("largest-contentful-paint")) return;
    const r = l.addLcpInstrumentationHandler(({ metric: e }) => {
      const r = e.entries[e.entries.length - 1];
      r && c.isValidLcpMetric(e.value) && ((n = e.value), (t = r));
    }, !0);
    u.listenForWebVitalReportEvents(e, (e, o, i) => {
      f(n, t, i, e), r();
    });
  });
