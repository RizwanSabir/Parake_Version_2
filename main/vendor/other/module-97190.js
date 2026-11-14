// vendor/other/module-97190.js — webpack module 97190
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(27352 /* vendor/other/module-27352 */);
let o;
function i(e) {
  if (void 0 !== o) return o ? o(e) : e();
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"),
    n = r.GLOBAL_OBJ;
  return t in n && "function" == typeof n[t]
    ? ((o = n[t]), o(e))
    : ((o = null), e());
}
(t.safeDateNow = function () {
  return i(() => Date.now());
}),
  (t.safeMathRandom = function () {
    return i(() => Math.random());
  }),
  (t.withRandomSafeContext = i);
