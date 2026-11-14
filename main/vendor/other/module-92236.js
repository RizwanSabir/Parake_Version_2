// vendor/other/module-92236.js — webpack module 92236
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(2084 /* vendor/other/module-2084 */),
  o = n(16973 /* vendor/other/module-16973 */),
  i = n(76041 /* vendor/other/module-76041 */),
  s = n(75703 /* vendor/other/module-75703 */),
  a = n(58637 /* vendor/other/module-58637 */),
  c = n(23295 /* vendor/other/module-23295 */),
  u = n(75715 /* vendor/other/module-75715 */),
  l = n(33836 /* vendor/other/module-33836 */),
  d = n(19410 /* vendor/other/module-19410 */),
  p = n(78430 /* vendor/other/module-78430 */),
  f = n(25607 /* vendor/other/module-25607 */),
  h = n(45456 /* vendor/other/module-45456 */),
  g = n(27557 /* vendor/other/module-27557 */);
function m(e, t, n, r = !0) {
  !n || (e[t] && !r) || (e[t] = n);
}
function _(e, t) {
  const n = y(),
    r = E(e);
  void 0 === r
    ? n.set(e, [t])
    : r.length >= 100
      ? (S(e, r), n.set(e, [t]))
      : n.set(e, [...r, t]);
}
function S(e, t) {
  const n = t ?? E(e) ?? [];
  if (0 === n.length) return;
  const r = e.getOptions(),
    o = g.createLogEnvelope(
      n,
      r._metadata,
      r.tunnel,
      e.getDsn(),
      e.getDataCollectionOptions().userInfo,
    );
  y().set(e, []), e.emit("flushLogs"), e.sendEnvelope(o);
}
function E(e) {
  return y().get(e);
}
function y() {
  return o.getGlobalSingleton("clientToLogBufferMap", () => new WeakMap());
}
function T(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    const e = b(n);
    "string" === r.type ? (t[e] = { ...r, value: b(r.value) }) : (t[e] = r);
  }
  return t;
}
function b(e) {
  const t = Object(e),
    n = t.isWellFormed,
    r = t.toWellFormed;
  return "function" == typeof n && "function" == typeof r
    ? n.call(e)
      ? e
      : r.call(e)
    : e;
}
(t._INTERNAL_captureLog = function (e, t = i.getCurrentScope(), n = _) {
  const o = t?.getClient() ?? i.getClient();
  if (!o)
    return void (
      s.DEBUG_BUILD && a.debug.warn("No client available to capture log.")
    );
  const {
    release: g,
    environment: S,
    enableLogs: E = !1,
    beforeSendLog: y,
  } = o.getOptions();
  if (!E)
    return void (
      s.DEBUG_BUILD &&
      a.debug.warn("logging option not enabled, log will not be captured.")
    );
  const [, I] = f._getTraceInfoFromScope(o, t),
    v = { ...e.attributes },
    {
      user: { id: A, email: N, username: R },
      attributes: C = {},
    } = u.getCombinedScopeData(i.getIsolationScope(), t);
  m(v, "user.id", A, !1),
    m(v, "user.email", N, !1),
    m(v, "user.name", R, !1),
    m(v, "sentry.release", g),
    m(v, "sentry.environment", S);
  const { name: O, version: w } = o.getSdkMetadata()?.sdk ?? {};
  m(v, "sentry.sdk.name", O), m(v, "sentry.sdk.version", w);
  const k = o.getIntegrationByName("Replay"),
    P = k?.getReplayId(!0);
  m(v, "sentry.replay_id", P),
    P &&
      "buffer" === k?.getRecordingMode() &&
      m(v, "sentry._internal.replay_is_buffering", !0);
  const L = e.message;
  if (c.isParameterizedString(L)) {
    const {
      __sentry_template_string__: e,
      __sentry_template_values__: t = [],
    } = L;
    t?.length && (v["sentry.message.template"] = e),
      t.forEach((e, t) => {
        v[`sentry.message.parameter.${t}`] = e;
      });
  }
  const x = l._getSpanForScope(t);
  m(v, "sentry.trace.parent_span_id", x?.spanContext().spanId);
  const M = { ...e, attributes: v };
  o.emit("beforeCaptureLog", M);
  const D = y ? a.consoleSandbox(() => y(M)) : M;
  if (!D)
    return (
      o.recordDroppedEvent("before_send", "log_item", 1),
      void (
        s.DEBUG_BUILD &&
        a.debug.warn("beforeSendLog returned null, log will not be captured.")
      )
    );
  const { level: U, message: B, attributes: G = {}, severityNumber: F } = D,
    j = d.timestampInSeconds(),
    H = p.getSequenceAttribute(j);
  n(o, {
    timestamp: j,
    level: U,
    body: b(String(B)),
    trace_id: I?.trace_id,
    severity_number: F ?? h.SEVERITY_TEXT_TO_SEVERITY_NUMBER[U],
    attributes: T({
      ...r.serializeAttributes(C),
      ...r.serializeAttributes(G, !0),
      [H.key]: H.value,
    }),
  }),
    o.emit("afterCaptureLog", D);
}),
  (t._INTERNAL_captureSerializedLog = _),
  (t._INTERNAL_flushLogsBuffer = S),
  (t._INTERNAL_getLogBuffer = E),
  (t._removeLoneSurrogates = b);
