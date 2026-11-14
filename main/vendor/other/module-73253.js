// vendor/other/module-73253.js — webpack module 73253
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(58637 /* vendor/other/module-58637 */),
  o = n(32997 /* vendor/other/module-32997 */),
  i = n(31538 /* vendor/other/module-31538 */),
  s = n(18828 /* vendor/other/module-18828 */),
  a = n(73802 /* vendor/other/module-73802 */),
  c = n(97190 /* vendor/other/module-97190 */),
  u = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function l(e) {
  if (!e) return;
  const t = e.match(u);
  if (!t) return;
  let n;
  return (
    "1" === t[3] ? (n = !0) : "0" === t[3] && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
(t.TRACEPARENT_REGEXP = u),
  (t.extractTraceparentData = l),
  (t.generateSentryTraceHeader = function (
    e = a.generateTraceId(),
    t = a.generateSpanId(),
    n,
  ) {
    let r = "";
    return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
  }),
  (t.generateTraceparentHeader = function (
    e = a.generateTraceId(),
    t = a.generateSpanId(),
    n,
  ) {
    return `00-${e}-${t}-${n ? "01" : "00"}`;
  }),
  (t.propagationContextFromHeaders = function (e, t) {
    const n = l(e),
      r = o.baggageHeaderToDynamicSamplingContext(t);
    if (!n?.traceId)
      return {
        traceId: a.generateTraceId(),
        sampleRand: c.safeMathRandom(),
      };
    const i = (function (e, t) {
      const n = s.parseSampleRate(t?.sample_rand);
      if (void 0 !== n) return n;
      const r = s.parseSampleRate(t?.sample_rate);
      return r && void 0 !== e?.parentSampled
        ? e.parentSampled
          ? c.safeMathRandom() * r
          : r + c.safeMathRandom() * (1 - r)
        : c.safeMathRandom();
    })(n, r);
    r && (r.sample_rand = i.toString());
    const { traceId: u, parentSpanId: d, parentSampled: p } = n;
    return {
      traceId: u,
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
