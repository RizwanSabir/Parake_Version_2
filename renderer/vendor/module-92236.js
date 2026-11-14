// vendor/module-92236.js — webpack module 92236
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(2084 /* vendor/module-2084 */),
  o = n(16973 /* vendor/module-16973 */),
  i = n(76041 /* vendor/module-76041 */),
  a = n(75703 /* vendor/module-75703 */),
  s = n(58637 /* vendor/module-58637 */),
  l = n(23295 /* vendor/module-23295 */),
  c = n(75715 /* vendor/module-75715 */),
  u = n(33836 /* vendor/module-33836 */),
  d = n(19410 /* vendor/module-19410 */),
  p = n(78430 /* vendor/module-78430 */),
  f = n(25607 /* vendor/module-25607 */),
  h = n(45456 /* vendor/module-45456 */),
  m = n(27557 /* vendor/module-27557 */);
function g(e, t, n, r = !0) {
  !n || (e[t] && !r) || (e[t] = n);
}
function y(e, t) {
  const n = S(),
    r = b(e);
  void 0 === r
    ? n.set(e, [t])
    : r.length >= 100
      ? (v(e, r), n.set(e, [t]))
      : n.set(e, [...r, t]);
}
function v(e, t) {
  const n = t ?? b(e) ?? [];
  if (0 === n.length) return;
  const r = e.getOptions(),
    o = m.createLogEnvelope(
      n,
      r._metadata,
      r.tunnel,
      e.getDsn(),
      e.getDataCollectionOptions().userInfo,
    );
  S().set(e, []), e.emit("flushLogs"), e.sendEnvelope(o);
}
function b(e) {
  return S().get(e);
}
function S() {
  return o.getGlobalSingleton("clientToLogBufferMap", () => new WeakMap());
}
function _(e) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    const e = x(n);
    "string" === r.type ? (t[e] = { ...r, value: x(r.value) }) : (t[e] = r);
  }
  return t;
}
function x(e) {
  const t = Object(e),
    n = t.isWellFormed,
    r = t.toWellFormed;
  return "function" == typeof n && "function" == typeof r
    ? n.call(e)
      ? e
      : r.call(e)
    : e;
}
(t._INTERNAL_captureLog = function (e, t = i.getCurrentScope(), n = y) {
  const o = t?.getClient() ?? i.getClient();
  if (!o)
    return void (
      a.DEBUG_BUILD && s.debug.warn("No client available to capture log.")
    );
  const {
    release: m,
    environment: v,
    enableLogs: b = !1,
    beforeSendLog: S,
  } = o.getOptions();
  if (!b)
    return void (
      a.DEBUG_BUILD &&
      s.debug.warn("logging option not enabled, log will not be captured.")
    );
  const [, w] = f._getTraceInfoFromScope(o, t),
    E = { ...e.attributes },
    {
      user: { id: T, email: k, username: C },
      attributes: I = {},
    } = c.getCombinedScopeData(i.getIsolationScope(), t);
  g(E, "user.id", T, !1),
    g(E, "user.email", k, !1),
    g(E, "user.name", C, !1),
    g(E, "sentry.release", m),
    g(E, "sentry.environment", v);
  const { name: A, version: O } = o.getSdkMetadata()?.sdk ?? {};
  g(E, "sentry.sdk.name", A), g(E, "sentry.sdk.version", O);
  const R = o.getIntegrationByName("Replay"),
    M = R?.getReplayId(!0);
  g(E, "sentry.replay_id", M),
    M &&
      "buffer" === R?.getRecordingMode() &&
      g(E, "sentry._internal.replay_is_buffering", !0);
  const P = e.message;
  if (l.isParameterizedString(P)) {
    const {
      __sentry_template_string__: e,
      __sentry_template_values__: t = [],
    } = P;
    t?.length && (E["sentry.message.template"] = e),
      t.forEach((e, t) => {
        E[`sentry.message.parameter.${t}`] = e;
      });
  }
  const N = u._getSpanForScope(t);
  g(E, "sentry.trace.parent_span_id", N?.spanContext().spanId);
  const D = { ...e, attributes: E };
  o.emit("beforeCaptureLog", D);
  const j = S ? s.consoleSandbox(() => S(D)) : D;
  if (!j)
    return (
      o.recordDroppedEvent("before_send", "log_item", 1),
      void (
        a.DEBUG_BUILD &&
        s.debug.warn("beforeSendLog returned null, log will not be captured.")
      )
    );
  const { level: L, message: F, attributes: U = {}, severityNumber: B } = j,
    z = d.timestampInSeconds(),
    H = p.getSequenceAttribute(z);
  n(o, {
    timestamp: z,
    level: L,
    body: x(String(F)),
    trace_id: w?.trace_id,
    severity_number: B ?? h.SEVERITY_TEXT_TO_SEVERITY_NUMBER[L],
    attributes: _({
      ...r.serializeAttributes(I),
      ...r.serializeAttributes(U, !0),
      [H.key]: H.value,
    }),
  }),
    o.emit("afterCaptureLog", j);
}),
  (t._INTERNAL_captureSerializedLog = y),
  (t._INTERNAL_flushLogsBuffer = v),
  (t._INTERNAL_getLogBuffer = b),
  (t._removeLoneSurrogates = x);
