// vendor/other/module-60169.js — webpack module 60169
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(56080 /* vendor/other/module-56080 */),
  o = n(76041 /* vendor/other/module-76041 */),
  i = n(12724 /* vendor/other/module-12724 */),
  s = n(32997 /* vendor/other/module-32997 */),
  a = n(31538 /* vendor/other/module-31538 */),
  c = n(72925 /* vendor/other/module-72925 */),
  u = n(68020 /* vendor/other/module-68020 */),
  l = n(38862 /* vendor/other/module-38862 */),
  d = n(63059 /* vendor/other/module-63059 */),
  p = n(30401 /* vendor/other/module-30401 */),
  f = "_frozenDsc";
function h(e, t) {
  const n = t.getOptions(),
    { publicKey: o } = t.getDsn() || {},
    i = {
      environment: n.environment || r.DEFAULT_ENVIRONMENT,
      release: n.release,
      public_key: o,
      trace_id: e,
      org_id: a.extractOrgIdFromClient(t),
    };
  return t.emit("createDsc", i), i;
}
function g(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || h(n.traceId, e);
}
function m(e) {
  const t = o.getClient();
  if (!t) return {};
  const n = l.getRootSpan(e),
    r = l.spanToJSON(n),
    a = r.data,
    u = n.spanContext().traceState,
    m =
      u?.get("sentry.sample_rate") ??
      a[i.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ??
      a[i.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
  function _(e) {
    return (
      ("number" != typeof m && "string" != typeof m) ||
        (e.sample_rate = `${m}`),
      e
    );
  }
  const S = n[f];
  if (S) return _(S);
  const E = d.spanIsNonRecordingSpan(n),
    y = E && "ignored" === n.dropReason;
  if (E && (!c.hasSpansEnabled(t.getOptions()) || y)) {
    const e = p.getCapturedScopesOnSpan(n).scope;
    if (e) {
      const n = { ...g(t, e) };
      return y && (n.sampled = "false"), _(n);
    }
  }
  const T = u?.get("sentry.dsc"),
    b = T && s.baggageHeaderToDynamicSamplingContext(T);
  if (b) return _(b);
  const I = h(e.spanContext().traceId, t),
    v =
      a[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] ?? a["sentry.segment.name.source"],
    A = r.description;
  return (
    "url" !== v && A && (I.transaction = A),
    c.hasSpansEnabled() &&
      ((I.sampled = String(l.spanIsSampled(n))),
      (I.sample_rand =
        u?.get("sentry.sample_rand") ??
        p
          .getCapturedScopesOnSpan(n)
          .scope?.getPropagationContext()
          .sampleRand.toString())),
    _(I),
    t.emit("createDsc", I, n),
    I
  );
}
(t.freezeDscOnSpan = function (e, t) {
  const n = e;
  u.addNonEnumerableProperty(n, f, t);
}),
  (t.getDynamicSamplingContextFromClient = h),
  (t.getDynamicSamplingContextFromScope = g),
  (t.getDynamicSamplingContextFromSpan = m),
  (t.spanToBaggageHeader = function (e) {
    const t = m(e);
    return s.dynamicSamplingContextToSentryBaggageHeader(t);
  });
