// vendor/module-6199.js — webpack module 6199
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(72925 /* vendor/module-72925 */),
  a = n(18828 /* vendor/module-18828 */);
t.sampleSpan = function (e, t, n) {
  if (!i.hasSpansEnabled(e)) return [!1];
  let s, l;
  "function" == typeof e.tracesSampler
    ? ((l = e.tracesSampler({
        ...t,
        inheritOrSampleWith: (e) =>
          "number" == typeof t.parentSampleRate
            ? t.parentSampleRate
            : "boolean" == typeof t.parentSampled
              ? Number(t.parentSampled)
              : e,
      })),
      (s = !0))
    : void 0 !== t.parentSampled
      ? (l = t.parentSampled)
      : void 0 !== e.tracesSampleRate && ((l = e.tracesSampleRate), (s = !0));
  const c = a.parseSampleRate(l);
  if (void 0 === c)
    return (
      r.DEBUG_BUILD &&
        o.debug.warn(
          `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(l)} of type ${JSON.stringify(typeof l)}.`,
        ),
      [!1]
    );
  if (!c)
    return (
      r.DEBUG_BUILD &&
        o.debug.log(
          "[Tracing] Discarding transaction because " +
            ("function" == typeof e.tracesSampler
              ? "tracesSampler returned 0 or false"
              : "a negative sampling decision was inherited or tracesSampleRate is set to 0"),
        ),
      [!1, c, s]
    );
  const u = n < c;
  return (
    u ||
      (r.DEBUG_BUILD &&
        o.debug.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(l)})`,
        )),
    [u, c, s]
  );
};
