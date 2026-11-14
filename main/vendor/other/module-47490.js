// vendor/other/module-47490.js — webpack module 47490
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(57230 /* vendor/other/module-57230 */),
  i = n(39053 /* vendor/other/module-39053 */);
n(76414 /* vendor/other/module-76414 */),
  n(30225 /* vendor/other/module-30225 */),
  n(24296 /* vendor/other/module-24296 */),
  n(69027 /* vendor/other/module-69027 */),
  n(16588 /* vendor/other/module-16588 */),
  n(82225 /* vendor/other/module-82225 */),
  n(61586 /* vendor/other/module-61586 */),
  n(45481 /* vendor/other/module-45481 */),
  n(97822 /* vendor/other/module-97822 */);
const s = "sentry_previous_trace",
  a = "sentry.previous_trace";
function c(e, t, n) {
  const i = r.spanToJSON(t),
    s = {
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
  if (!e) return s;
  const c = e.spanContext;
  return c.traceId === i.trace_id
    ? e
    : (Date.now() / 1e3 - e.startTimestamp <= 3600 &&
        (o.DEBUG_BUILD &&
          r.debug.log(
            `Adding previous_trace \`${JSON.stringify(c)}\` link to span \`${JSON.stringify({ op: i.op, ...t.spanContext() })}\``,
          ),
        t.addLink({
          context: c,
          attributes: {
            [r.SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE]: "previous_trace",
          },
        }),
        t.setAttribute(a, `${c.traceId}-${c.spanId}-${d(c) ? 1 : 0}`)),
      s);
}
function u(e) {
  try {
    i.WINDOW.sessionStorage.setItem(s, JSON.stringify(e));
  } catch (e) {
    o.DEBUG_BUILD &&
      r.debug.warn("Could not store previous trace in sessionStorage", e);
  }
}
function l() {
  try {
    const e = i.WINDOW.sessionStorage?.getItem(s);
    return JSON.parse(e);
  } catch {
    return;
  }
}
function d(e) {
  return 1 === e.traceFlags;
}
(t.PREVIOUS_TRACE_KEY = s),
  (t.PREVIOUS_TRACE_MAX_DURATION = 3600),
  (t.PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE = a),
  (t.addPreviousTraceSpanLink = c),
  (t.getPreviousTraceFromSessionStorage = l),
  (t.linkTraces = function (
    e,
    { linkPreviousTrace: t, consistentTraceSampling: n },
  ) {
    const o = "session-storage" === t;
    let i = o ? l() : void 0;
    e.on("spanStart", (e) => {
      if (r.getRootSpan(e) !== e) return;
      const t = r.getCurrentScope().getPropagationContext();
      (i = c(i, e, t)), o && u(i);
    });
    let s = !0;
    n &&
      e.on("beforeSampling", (e) => {
        if (!i) return;
        const t = r.getCurrentScope(),
          n = t.getPropagationContext();
        s && n.parentSpanId
          ? (s = !1)
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
  (t.storePreviousTraceInSessionStorage = u);
