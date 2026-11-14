// vendor/module-60169.js — webpack module 60169
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(56080 /* vendor/module-56080 */),
  o = n(76041 /* vendor/module-76041 */),
  i = n(12724 /* vendor/module-12724 */),
  a = n(32997 /* vendor/module-32997 */),
  s = n(31538 /* vendor/module-31538 */),
  l = n(72925 /* vendor/module-72925 */),
  c = n(68020 /* vendor/module-68020 */),
  u = n(38862 /* vendor/module-38862 */),
  d = n(63059 /* vendor/module-63059 */),
  p = n(30401 /* vendor/module-30401 */),
  f = "_frozenDsc";
function h(e, t) {
  const n = t.getOptions(),
    { publicKey: o } = t.getDsn() || {},
    i = {
      environment: n.environment || r.DEFAULT_ENVIRONMENT,
      release: n.release,
      public_key: o,
      trace_id: e,
      org_id: s.extractOrgIdFromClient(t),
    };
  return t.emit("createDsc", i), i;
}
function m(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || h(n.traceId, e);
}
function g(e) {
  const t = o.getClient();
  if (!t) return {};
  const n = u.getRootSpan(e),
    r = u.spanToJSON(n),
    s = r.data,
    c = n.spanContext().traceState,
    g =
      c?.get("sentry.sample_rate") ??
      s[i.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ??
      s[i.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
  function y(e) {
    return (
      ("number" != typeof g && "string" != typeof g) ||
        (e.sample_rate = `${g}`),
      e
    );
  }
  const v = n[f];
  if (v) return y(v);
  const b = d.spanIsNonRecordingSpan(n),
    S = b && "ignored" === n.dropReason;
  if (b && (!l.hasSpansEnabled(t.getOptions()) || S)) {
    const e = p.getCapturedScopesOnSpan(n).scope;
    if (e) {
      const n = { ...m(t, e) };
      return S && (n.sampled = "false"), y(n);
    }
  }
  const _ = c?.get("sentry.dsc"),
    x = _ && a.baggageHeaderToDynamicSamplingContext(_);
  if (x) return y(x);
  const w = h(e.spanContext().traceId, t),
    E =
      s[i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] ?? s["sentry.segment.name.source"],
    T = r.description;
  return (
    "url" !== E && T && (w.transaction = T),
    l.hasSpansEnabled() &&
      ((w.sampled = String(u.spanIsSampled(n))),
      (w.sample_rand =
        c?.get("sentry.sample_rand") ??
        p
          .getCapturedScopesOnSpan(n)
          .scope?.getPropagationContext()
          .sampleRand.toString())),
    y(w),
    t.emit("createDsc", w, n),
    w
  );
}
(t.freezeDscOnSpan = function (e, t) {
  const n = e;
  c.addNonEnumerableProperty(n, f, t);
}),
  (t.getDynamicSamplingContextFromClient = h),
  (t.getDynamicSamplingContextFromScope = m),
  (t.getDynamicSamplingContextFromSpan = g),
  (t.spanToBaggageHeader = function (e) {
    const t = g(e);
    return a.dynamicSamplingContextToSentryBaggageHeader(t);
  });
