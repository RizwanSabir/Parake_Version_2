// vendor/other/module-64554.js — webpack module 64554
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(2084 /* vendor/other/module-2084 */),
  o = n(16973 /* vendor/other/module-16973 */),
  i = n(76041 /* vendor/other/module-76041 */),
  s = n(75703 /* vendor/other/module-75703 */),
  a = n(58637 /* vendor/other/module-58637 */),
  c = n(75715 /* vendor/other/module-75715 */),
  u = n(33836 /* vendor/other/module-33836 */),
  l = n(19410 /* vendor/other/module-19410 */),
  d = n(78430 /* vendor/other/module-78430 */),
  p = n(25607 /* vendor/other/module-25607 */),
  f = n(34243 /* vendor/other/module-34243 */);
function h(e, t, n, r = !0) {
  !n || (!r && t in e) || (e[t] = n);
}
function g(e, t) {
  const n = S(),
    r = _(e);
  void 0 === r
    ? n.set(e, [t])
    : r.length >= 1e3
      ? (m(e, r), n.set(e, [t]))
      : n.set(e, [...r, t]);
}
function m(e, t) {
  const n = t ?? _(e) ?? [];
  if (0 === n.length) return;
  const r = e.getOptions(),
    o = f.createMetricEnvelope(
      n,
      r._metadata,
      r.tunnel,
      e.getDsn(),
      e.getDataCollectionOptions().userInfo,
    );
  S().set(e, []), e.emit("flushMetrics"), e.sendEnvelope(o);
}
function _(e) {
  return S().get(e);
}
function S() {
  return o.getGlobalSingleton("clientToMetricBufferMap", () => new WeakMap());
}
(t._INTERNAL_captureMetric = function (e, t) {
  const n = t?.scope ?? i.getCurrentScope(),
    o = t?.captureSerializedMetric ?? g,
    f = n?.getClient() ?? i.getClient();
  if (!f)
    return void (
      s.DEBUG_BUILD && a.debug.warn("No client available to capture metric.")
    );
  const {
    _experiments: m,
    enableMetrics: _,
    beforeSendMetric: S,
  } = f.getOptions();
  if (!(_ ?? m?.enableMetrics ?? 1))
    return void (
      s.DEBUG_BUILD &&
      a.debug.warn("metrics option not enabled, metric will not be captured.")
    );
  const { user: E, attributes: y } = c.getCombinedScopeData(
      i.getIsolationScope(),
      n,
    ),
    T = (function (e, t, n) {
      const { release: r, environment: o } = t.getOptions(),
        i = { ...e.attributes };
      h(i, "user.id", n.id, !1),
        h(i, "user.email", n.email, !1),
        h(i, "user.name", n.username, !1),
        h(i, "sentry.release", r),
        h(i, "sentry.environment", o);
      const { name: s, version: a } = t.getSdkMetadata()?.sdk ?? {};
      h(i, "sentry.sdk.name", s), h(i, "sentry.sdk.version", a);
      const c = t.getIntegrationByName("Replay"),
        u = c?.getReplayId(!0);
      return (
        h(i, "sentry.replay_id", u),
        u &&
          "buffer" === c?.getRecordingMode() &&
          h(i, "sentry._internal.replay_is_buffering", !0),
        { ...e, attributes: i }
      );
    })(e, f, E);
  f.emit("processMetric", T);
  const b = S || m?.beforeSendMetric,
    I = b ? b(T) : T;
  if (!I)
    return void (
      s.DEBUG_BUILD &&
      a.debug.log("`beforeSendMetric` returned `null`, will not send metric.")
    );
  const v = (function (e, t, n, o) {
    const [, i] = p._getTraceInfoFromScope(t, n),
      s = u._getSpanForScope(n),
      a = s ? s.spanContext().traceId : i?.trace_id,
      c = s ? s.spanContext().spanId : void 0,
      f = l.timestampInSeconds(),
      h = d.getSequenceAttribute(f);
    return {
      timestamp: f,
      trace_id: a ?? "",
      span_id: c,
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
  })(I, f, n, y);
  s.DEBUG_BUILD && a.debug.log("[Metric]", v),
    o(f, v),
    f.emit("afterCaptureMetric", I);
}),
  (t._INTERNAL_captureSerializedMetric = g),
  (t._INTERNAL_flushMetricsBuffer = m),
  (t._INTERNAL_getMetricBuffer = _);
