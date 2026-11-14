// vendor/other/module-6199.js — webpack module 6199
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(72925 /* vendor/other/module-72925 */),
  s = n(18828 /* vendor/other/module-18828 */);
t.sampleSpan = function (e, t, n) {
  if (!i.hasSpansEnabled(e)) return [!1];
  let a, c;
  "function" == typeof e.tracesSampler
    ? ((c = e.tracesSampler({
        ...t,
        inheritOrSampleWith: (e) =>
          "number" == typeof t.parentSampleRate
            ? t.parentSampleRate
            : "boolean" == typeof t.parentSampled
              ? Number(t.parentSampled)
              : e,
      })),
      (a = !0))
    : void 0 !== t.parentSampled
      ? (c = t.parentSampled)
      : void 0 !== e.tracesSampleRate && ((c = e.tracesSampleRate), (a = !0));
  const u = s.parseSampleRate(c);
  if (void 0 === u)
    return (
      r.DEBUG_BUILD &&
        o.debug.warn(
          `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(c)} of type ${JSON.stringify(typeof c)}.`,
        ),
      [!1]
    );
  if (!u)
    return (
      r.DEBUG_BUILD &&
        o.debug.log(
          "[Tracing] Discarding transaction because " +
            ("function" == typeof e.tracesSampler
              ? "tracesSampler returned 0 or false"
              : "a negative sampling decision was inherited or tracesSampleRate is set to 0"),
        ),
      [!1, u, a]
    );
  const l = n < u;
  return (
    l ||
      (r.DEBUG_BUILD &&
        o.debug.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(c)})`,
        )),
    [l, u, a]
  );
};
