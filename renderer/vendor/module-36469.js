// vendor/module-36469.js — webpack module 36469
// params: (e, t, n) = (module, exports, require)
"use strict";
function r(e) {
  const t = [],
    n = String(e || "");
  let r = n.indexOf(","),
    o = 0,
    i = !1;
  for (; !i; ) {
    -1 === r && ((r = n.length), (i = !0));
    const e = n.slice(o, r).trim();
    (!e && i) || t.push(e), (o = r + 1), (r = n.indexOf(",", o));
  }
  return t;
}
function o(e, t) {
  const n = t || {};
  return ("" === e[e.length - 1] ? [...e, ""] : e)
    .join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " "))
    .trim();
}
n.d(t, { A: () => o, q: () => r });
