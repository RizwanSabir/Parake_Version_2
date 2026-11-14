// vendor/other/module-19410.js — webpack module 19410
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(97190 /* vendor/other/module-97190 */),
  o = n(27352 /* vendor/other/module-27352 */);
function i() {
  return r.safeDateNow() / 1e3;
}
let s,
  a = null;
(t.browserPerformanceTimeOrigin = function () {
  return (
    null === a &&
      (a = (function () {
        const { performance: e } = o.GLOBAL_OBJ;
        if (!e?.now) return;
        const t = 3e5,
          n = r.withRandomSafeContext(() => e.now()),
          i = r.safeDateNow(),
          s = e.timeOrigin;
        if ("number" == typeof s && Math.abs(s + n - i) < t) return s;
        const a = e.timing?.navigationStart;
        return "number" == typeof a && Math.abs(a + n - i) < t ? a : i - n;
      })()),
    a
  );
}),
  (t.dateTimestampInSeconds = i),
  (t.timestampInSeconds = function () {
    return (
      s ??
      (s = (function () {
        const { performance: e } = o.GLOBAL_OBJ;
        if (!e?.now || !e.timeOrigin) return i;
        const t = e.timeOrigin;
        return () => (t + r.withRandomSafeContext(() => e.now())) / 1e3;
      })())
    )();
  });
