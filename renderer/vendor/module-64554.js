// vendor/module-64554.js — webpack module 64554
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(2084 /* vendor/module-2084 */),
  o = n(16973 /* vendor/module-16973 */),
  i = n(76041 /* vendor/module-76041 */),
  a = n(75703 /* vendor/module-75703 */),
  s = n(58637 /* vendor/module-58637 */),
  l = n(75715 /* vendor/module-75715 */),
  c = n(33836 /* vendor/module-33836 */),
  u = n(19410 /* vendor/module-19410 */),
  d = n(78430 /* vendor/module-78430 */),
  p = n(25607 /* vendor/module-25607 */),
  f = n(34243 /* vendor/module-34243 */);
function h(e, t, n, r = !0) {
  !n || (!r && t in e) || (e[t] = n);
}
function m(e, t) {
  const n = v(),
    r = y(e);
  void 0 === r
    ? n.set(e, [t])
    : r.length >= 1e3
      ? (g(e, r), n.set(e, [t]))
      : n.set(e, [...r, t]);
}
function g(e, t) {
  const n = t ?? y(e) ?? [];
  if (0 === n.length) return;
  const r = e.getOptions(),
    o = f.createMetricEnvelope(
      n,
      r._metadata,
      r.tunnel,
      e.getDsn(),
      e.getDataCollectionOptions().userInfo,
    );
  v().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(o);
}
function y(e) {
  return v().get(e);
}
function v() {
  return o.getGlobalSingleton("clientToMetricBufferMap", () => new WeakMap());
}
(t._INTERNAL_captureMetric = function (e, t) {
  const n = t?.scope ?? i.getCurrentScope(),
    o = t?.captureSerializedMetric ?? m,
    f = n?.getClient() ?? i.getClient();
  if (!f)
    return void (
      a.DEBUG_BUILD && s.debug.warn("No client available to capture metric.")
    );
  const {
    _experiments: g,
    enableMetrics: y,
    beforeSendMetric: v,
  } = f.getOptions();
  if (!(y ?? g?.enableMetrics ?? 1))
    return void (
      a.DEBUG_BUILD &&
      s.debug.warn("metrics option not enabled, metric will not be captured.")
    );
  const { user: b, attributes: S } = l.getCombinedScopeData(
      i.getIsolationScope(),
      n,
    ),
    _ = (function (e, t, n) {
      const { release: r, environment: o } = t.getOptions(),
        i = { ...e.attributes };
      h(i, "user.id", n.id, !1),
        h(i, "user.email", n.email, !1),
        h(i, "user.name", n.username, !1),
        h(i, "sentry.release", r),
        h(i, "sentry.environment", o);
      const { name: a, version: s } = t.getSdkMetadata()?.sdk ?? {};
      h(i, "sentry.sdk.name", a), h(i, "sentry.sdk.version", s);
      const l = t.getIntegrationByName("Replay"),
        c = l?.getReplayId(!0);
      return (
        h(i, "sentry.replay_id", c),
        c &&
          "buffer" === l?.getRecordingMode() &&
          h(i, "sentry._internal.replay_is_buffering", !0),
        { ...e, attributes: i }
      );
    })(e, f, b);
  f.emit("processMetric", _);
  const x = v || g?.beforeSendMetric,
    w = x ? x(_) : _;
  if (!w)
    return void (
      a.DEBUG_BUILD &&
      s.debug.log("`beforeSendMetric` returned `null`, will not send metric.")
    );
  const E = (function (e, t, n, o) {
    const [, i] = p._getTraceInfoFromScope(t, n),
      a = c._getSpanForScope(n),
      s = a ? a.spanContext().traceId : i?.trace_id,
      l = a ? a.spanContext().spanId : void 0,
      f = u.timestampInSeconds(),
      h = d.getSequenceAttribute(f);
    return {
      timestamp: f,
      trace_id: s ?? "",
      span_id: l,
      name: e.name,
      type: e.type,
      unit: e.unit,
      value: e.value,
      attributes: {
        ...r.serializeAttributes(o),
        ...r.serializeAttributes(e.attributes, "skip-undefined"),
        [h.key]: h.value,
      },
    };
  })(w, f, n, S);
  a.DEBUG_BUILD && s.debug.log("[Metric]", E),
    o(f, E),
    f.emit("afterCaptureMetric", w);
}),
  (t._INTERNAL_captureSerializedMetric = m),
  (t._INTERNAL_flushMetricsBuffer = g),
  (t._INTERNAL_getMetricBuffer = y);
