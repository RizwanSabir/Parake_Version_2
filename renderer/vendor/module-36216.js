// vendor/module-36216.js — webpack module 36216
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(38862 /* vendor/module-38862 */);
(t.setMeasurement = function (e, t, n, s = a.getActiveSpan()) {
  const l = s && a.getRootSpan(s);
  l &&
    (r.DEBUG_BUILD &&
      i.debug.log(
        `[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`,
      ),
    l.addEvent(e, {
      [o.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: t,
      [o.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: n,
    }));
}),
  (t.timedEventsToMeasurements = function (e) {
    if (!e || 0 === e.length) return;
    const t = {};
    return (
      e.forEach((e) => {
        const n = e.attributes || {},
          r = n[o.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT],
          i = n[o.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
        "string" == typeof r &&
          "number" == typeof i &&
          (t[e.name] = { value: i, unit: r });
      }),
      t
    );
  });
