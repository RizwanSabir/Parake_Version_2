// vendor/other/module-87284.js — webpack module 87284
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(59091 /* vendor/other/module-59091 */),
  o = n(78957 /* vendor/other/module-78957 */);
e.exports = (e, t, n) => {
  const i = [];
  let s = null,
    a = null;
  const c = e.sort((e, t) => o(e, t, n));
  for (const e of c)
    r(e, t, n)
      ? ((a = e), s || (s = e))
      : (a && i.push([s, a]), (a = null), (s = null));
  s && i.push([s, null]);
  const u = [];
  for (const [e, t] of i)
    e === t
      ? u.push(e)
      : t || e !== c[0]
        ? t
          ? e === c[0]
            ? u.push(`<=${t}`)
            : u.push(`${e} - ${t}`)
          : u.push(`>=${e}`)
        : u.push("*");
  const l = u.join(" || "),
    d = "string" == typeof t.raw ? t.raw : String(t);
  return l.length < d.length ? l : t;
};
