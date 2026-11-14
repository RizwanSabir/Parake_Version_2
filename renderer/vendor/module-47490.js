// vendor/module-47490.js — webpack module 47490
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = n(39053 /* vendor/module-39053 */);
n(76414 /* vendor/module-76414 */),
  n(30225 /* vendor/module-30225 */),
  n(24296 /* vendor/module-24296 */),
  n(69027 /* vendor/module-69027 */),
  n(16588 /* vendor/module-16588 */),
  n(82225 /* vendor/module-82225 */),
  n(61586 /* vendor/module-61586 */),
  n(45481 /* vendor/module-45481 */),
  n(97822 /* vendor/module-97822 */);
const a = "sentry_previous_trace",
  s = "sentry.previous_trace";
function l(e, t, n) {
  const i = r.spanToJSON(t),
    a = {
      spanContext: t.spanContext(),
      startTimestamp: i.start_timestamp,
      sampleRate: (function () {
        try {
          const e = Number(
            i.data?.[r.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ??
              n.dsc?.sample_rate,
          );
          return Number.isNaN(e) ? 0 : e;
        } catch {
          return 0;
        }
      })(),
      sampleRand: n.sampleRand,
    };
  if (!e) return a;
  const l = e.spanContext;
  return l.traceId === i.trace_id
    ? e
    : (Date.now() / 1e3 - e.startTimestamp <= 3600 &&
        (o.DEBUG_BUILD &&
          r.debug.log(
            `Adding previous_trace \`${JSON.stringify(l)}\` link to span \`${JSON.stringify({ op: i.op, ...t.spanContext() })}\``,
          ),
        t.addLink({
          context: l,
          attributes: {
            [r.SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE]: "previous_trace",
          },
        }),
        t.setAttribute(s, `${l.traceId}-${l.spanId}-${d(l) ? 1 : 0}`)),
      a);
}
function c(e) {
  try {
    i.WINDOW.sessionStorage.setItem(a, JSON.stringify(e));
  } catch (e) {
    o.DEBUG_BUILD &&
      r.debug.warn("Could not store previous trace in sessionStorage", e);
  }
}
function u() {
  try {
    const e = i.WINDOW.sessionStorage?.getItem(a);
    return JSON.parse(e);
  } catch {
    return;
  }
}
function d(e) {
  return 1 === e.traceFlags;
}
(t.PREVIOUS_TRACE_KEY = a),
  (t.PREVIOUS_TRACE_MAX_DURATION = 3600),
  (t.PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE = s),
  (t.addPreviousTraceSpanLink = l),
  (t.getPreviousTraceFromSessionStorage = u),
  (t.linkTraces = function (
    e,
    { linkPreviousTrace: t, consistentTraceSampling: n },
  ) {
    const o = "session-storage" === t;
    let i = o ? u() : void 0;
    e.on("spanStart", (e) => {
      if (r.getRootSpan(e) !== e) return;
      const t = r.getCurrentScope().getPropagationContext();
      (i = l(i, e, t)), o && c(i);
    });
    let a = !0;
    n &&
      e.on("beforeSampling", (e) => {
        if (!i) return;
        const t = r.getCurrentScope(),
          n = t.getPropagationContext();
        a && n.parentSpanId
          ? (a = !1)
          : (t.setPropagationContext({
              ...n,
              dsc: {
                ...n.dsc,
                sample_rate: String(i.sampleRate),
                sampled: String(d(i.spanContext)),
              },
              sampleRand: i.sampleRand,
            }),
            (e.parentSampled = d(i.spanContext)),
            (e.parentSampleRate = i.sampleRate),
            (e.spanAttributes = {
              ...e.spanAttributes,
              [r.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE]:
                i.sampleRate,
            }));
      });
  }),
  (t.spanContextSampled = d),
  (t.storePreviousTraceInSessionStorage = c);
