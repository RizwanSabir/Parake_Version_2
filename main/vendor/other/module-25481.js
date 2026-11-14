// vendor/other/module-25481.js — webpack module 25481
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(84018 /* vendor/other/module-84018 */),
  o = n(56623 /* vendor/other/module-56623 */);
function i(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function s(e) {
  return e >= 48 && e <= 55;
}
function a(e) {
  return e >= 48 && e <= 57;
}
function c(e) {
  let t = e,
    n = 1,
    r = t[0];
  if (
    (("-" !== r && "+" !== r) ||
      ("-" === r && (n = -1), (t = t.slice(1)), (r = t[0])),
    "0" === t)
  )
    return 0;
  if ("0" === r) {
    if ("b" === t[1]) return n * parseInt(t.slice(2), 2);
    if ("x" === t[1]) return n * parseInt(t.slice(2), 16);
    if ("o" === t[1]) return n * parseInt(t.slice(2), 8);
  }
  return n * parseInt(t, 10);
}
e.exports = new o("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: function (e) {
    if (null === e) return !1;
    const t = e.length;
    let n = 0,
      r = !1;
    if (!t) return !1;
    let o = e[n];
    if ((("-" !== o && "+" !== o) || (o = e[++n]), "0" === o)) {
      if (n + 1 === t) return !0;
      if (((o = e[++n]), "b" === o)) {
        for (n++; n < t; n++) {
          if (((o = e[n]), "0" !== o && "1" !== o)) return !1;
          r = !0;
        }
        return r && isFinite(c(e));
      }
      if ("x" === o) {
        for (n++; n < t; n++) {
          if (!i(e.charCodeAt(n))) return !1;
          r = !0;
        }
        return r && isFinite(c(e));
      }
      if ("o" === o) {
        for (n++; n < t; n++) {
          if (!s(e.charCodeAt(n))) return !1;
          r = !0;
        }
        return r && isFinite(c(e));
      }
    }
    for (; n < t; n++) {
      if (!a(e.charCodeAt(n))) return !1;
      r = !0;
    }
    return !!r && isFinite(c(e));
  },
  construct: function (e) {
    return c(e);
  },
  predicate: function (e) {
    return (
      "[object Number]" === Object.prototype.toString.call(e) &&
      e % 1 == 0 &&
      !r.isNegativeZero(e)
    );
  },
  represent: {
    binary: function (e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    },
    octal: function (e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    },
    decimal: function (e) {
      return e.toString(10);
    },
    hexadecimal: function (e) {
      return e >= 0
        ? "0x" + e.toString(16).toUpperCase()
        : "-0x" + e.toString(16).toUpperCase().slice(1);
    },
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"],
  },
});
