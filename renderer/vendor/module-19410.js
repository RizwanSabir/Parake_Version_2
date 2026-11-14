// vendor/module-19410.js — webpack module 19410
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(97190 /* vendor/module-97190 */),
  o = n(27352 /* vendor/module-27352 */);
function i() {
  return r.safeDateNow() / 1e3;
}
let a,
  s = null;
(t.browserPerformanceTimeOrigin = function () {
  return (
    null === s &&
      (s = (function () {
        const { performance: e } = o.GLOBAL_OBJ;
        if (!e?.now) return;
        const t = 3e5,
          n = r.withRandomSafeContext(() => e.now()),
          i = r.safeDateNow(),
          a = e.timeOrigin;
        if ("number" == typeof a && Math.abs(a + n - i) < t) return a;
        const s = e.timing?.navigationStart;
        return "number" == typeof s && Math.abs(s + n - i) < t ? s : i - n;
      })()),
    s
  );
}),
  (t.dateTimestampInSeconds = i),
  (t.timestampInSeconds = function () {
    return (
      a ??
      (a = (function () {
        const { performance: e } = o.GLOBAL_OBJ;
        if (!e?.now || !e.timeOrigin) return i;
        const t = e.timeOrigin;
        return () => (t + r.withRandomSafeContext(() => e.now())) / 1e3;
      })())
    )();
  });
