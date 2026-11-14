// vendor/other/module-24464.js — webpack module 24464
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(38707 /* vendor/other/module-38707 */),
  o = n(21627 /* vendor/other/module-21627 */),
  { ANY: i } = o,
  s = n(20566 /* vendor/other/module-20566 */),
  a = n(59091 /* vendor/other/module-59091 */),
  c = n(73871 /* vendor/other/module-73871 */),
  u = n(59240 /* vendor/other/module-59240 */),
  l = n(31141 /* vendor/other/module-31141 */),
  d = n(67356 /* vendor/other/module-67356 */);
e.exports = (e, t, n, p) => {
  let f, h, g, m, _;
  switch (((e = new r(e, p)), (t = new s(t, p)), n)) {
    case ">":
      (f = c), (h = l), (g = u), (m = ">"), (_ = ">=");
      break;
    case "<":
      (f = u), (h = d), (g = c), (m = "<"), (_ = "<=");
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (a(e, t, p)) return !1;
  for (let n = 0; n < t.set.length; ++n) {
    const r = t.set[n];
    let s = null,
      a = null;
    if (
      (r.forEach((e) => {
        e.semver === i && (e = new o(">=0.0.0")),
          (s = s || e),
          (a = a || e),
          f(e.semver, s.semver, p)
            ? (s = e)
            : g(e.semver, a.semver, p) && (a = e);
      }),
      s.operator === m || s.operator === _)
    )
      return !1;
    if ((!a.operator || a.operator === m) && h(e, a.semver)) return !1;
    if (a.operator === _ && g(e, a.semver)) return !1;
  }
  return !0;
};
