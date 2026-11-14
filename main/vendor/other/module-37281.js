// vendor/other/module-37281.js — webpack module 37281
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(38707 /* vendor/other/module-38707 */),
  o = n(87561 /* vendor/other/module-87561 */),
  { safeRe: i, t: s } = n(50167 /* vendor/other/module-50167 */);
e.exports = (e, t) => {
  if (e instanceof r) return e;
  if (("number" == typeof e && (e = String(e)), "string" != typeof e))
    return null;
  let n = null;
  if ((t = t || {}).rtl) {
    const r = t.includePrerelease ? i[s.COERCERTLFULL] : i[s.COERCERTL];
    let o;
    for (; (o = r.exec(e)) && (!n || n.index + n[0].length !== e.length); )
      (n && o.index + o[0].length === n.index + n[0].length) || (n = o),
        (r.lastIndex = o.index + o[1].length + o[2].length);
    r.lastIndex = -1;
  } else n = e.match(t.includePrerelease ? i[s.COERCEFULL] : i[s.COERCE]);
  if (null === n) return null;
  const a = n[2],
    c = n[3] || "0",
    u = n[4] || "0",
    l = t.includePrerelease && n[5] ? `-${n[5]}` : "",
    d = t.includePrerelease && n[6] ? `+${n[6]}` : "";
  return o(`${a}.${c}.${u}${l}${d}`, t);
};
