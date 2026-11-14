// vendor/other/module-69618.js — webpack module 69618
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(38707 /* vendor/other/module-38707 */),
  o = n(20566 /* vendor/other/module-20566 */),
  i = n(73871 /* vendor/other/module-73871 */);
e.exports = (e, t) => {
  e = new o(e, t);
  let n = new r("0.0.0");
  if (e.test(n)) return n;
  if (((n = new r("0.0.0-0")), e.test(n))) return n;
  n = null;
  for (let t = 0; t < e.set.length; ++t) {
    const o = e.set[t];
    let s = null;
    o.forEach((e) => {
      const t = new r(e.semver.version);
      switch (e.operator) {
        case ">":
          0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
            (t.raw = t.format());
        case "":
        case ">=":
          (s && !i(t, s)) || (s = t);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${e.operator}`);
      }
    }),
      !s || (n && !i(n, s)) || (n = s);
  }
  return n && e.test(n) ? n : null;
};
