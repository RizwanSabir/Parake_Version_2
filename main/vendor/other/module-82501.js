// vendor/other/module-82501.js — webpack module 82501
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
e.exports = {
  transformStyles: o,
  applyAnsiStyles: ({ data: e }) => o(e, n, r),
  removeStyles: ({ data: e }) => o(e, () => ""),
};
const t = {
  unset: "[0m",
  black: "[30m",
  red: "[31m",
  green: "[32m",
  yellow: "[33m",
  blue: "[34m",
  magenta: "[35m",
  cyan: "[36m",
  white: "[37m",
  gray: "[90m",
};
function n(e) {
  const n = e.replace(/color:\s*(\w+).*/, "$1").toLowerCase();
  return t[n] || "";
}
function r(e) {
  return e + t.unset;
}
function o(e, t, n) {
  const r = {};
  return e.reduce((e, o, i, s) => {
    if (r[i]) return e;
    if ("string" == typeof o) {
      let e = i,
        a = !1;
      (o = o.replace(/%[1cdfiOos]/g, (n) => {
        if (((e += 1), "%c" !== n)) return n;
        const i = s[e];
        return "string" == typeof i ? ((r[e] = !0), (a = !0), t(i, o)) : n;
      })),
        a && n && (o = n(o));
    }
    return e.push(o), e;
  }, []);
}
