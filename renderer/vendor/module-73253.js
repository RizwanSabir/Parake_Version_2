// vendor/module-73253.js — webpack module 73253
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(58637 /* vendor/module-58637 */),
  o = n(32997 /* vendor/module-32997 */),
  i = n(31538 /* vendor/module-31538 */),
  a = n(18828 /* vendor/module-18828 */),
  s = n(73802 /* vendor/module-73802 */),
  l = n(97190 /* vendor/module-97190 */),
  c = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function u(e) {
  if (!e) return;
  const t = e.match(c);
  if (!t) return;
  let n;
  return (
    "1" === t[3] ? (n = !0) : "0" === t[3] && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
(t.TRACEPARENT_REGEXP = c),
  (t.extractTraceparentData = u),
  (t.generateSentryTraceHeader = function (
    e = s.generateTraceId(),
    t = s.generateSpanId(),
    n,
  ) {
    let r = "";
    return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
  }),
  (t.generateTraceparentHeader = function (
    e = s.generateTraceId(),
    t = s.generateSpanId(),
    n,
  ) {
    return `00-${e}-${t}-${n ? "01" : "00"}`;
  }),
  (t.propagationContextFromHeaders = function (e, t) {
    const n = u(e),
      r = o.baggageHeaderToDynamicSamplingContext(t);
    if (!n?.traceId)
      return {
        traceId: s.generateTraceId(),
        sampleRand: l.safeMathRandom(),
      };
    const i = (function (e, t) {
      const n = a.parseSampleRate(t?.sample_rand);
      if (void 0 !== n) return n;
      const r = a.parseSampleRate(t?.sample_rate);
      return r && void 0 !== e?.parentSampled
        ? e.parentSampled
          ? l.safeMathRandom() * r
          : r + l.safeMathRandom() * (1 - r)
        : l.safeMathRandom();
    })(n, r);
    r && (r.sample_rand = i.toString());
    const { traceId: c, parentSpanId: d, parentSampled: p } = n;
    return {
      traceId: c,
      parentSpanId: d,
      sampled: p,
      dsc: r || {},
      sampleRand: i,
    };
  }),
  (t.shouldContinueTrace = function (e, t) {
    const n = i.extractOrgIdFromClient(e);
    return t && n && t !== n
      ? (r.debug.log(
          `Won't continue trace because org IDs don't match (incoming baggage: ${t}, SDK options: ${n})`,
        ),
        !1)
      : !e.getOptions().strictTraceContinuation ||
          !((t && !n) || (!t && n)) ||
          (r.debug.log(
            `Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${t}, Sentry client: ${n})`,
          ),
          !1);
  });
