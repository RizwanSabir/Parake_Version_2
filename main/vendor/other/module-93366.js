// vendor/other/module-93366.js — webpack module 93366
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(84018 /* vendor/other/module-84018 */),
  o = n(56623 /* vendor/other/module-56623 */),
  i = new RegExp(
    "^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$",
  ),
  s = new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),
  a = /^[-+]?[0-9]+e/;
e.exports = new o("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: function (e) {
    return (
      null !== e && !!i.test(e) && (!!isFinite(parseFloat(e, 10)) || s.test(e))
    );
  },
  construct: function (e) {
    let t = e.toLowerCase();
    const n = "-" === t[0] ? -1 : 1;
    return (
      "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)),
      ".inf" === t
        ? 1 === n
          ? Number.POSITIVE_INFINITY
          : Number.NEGATIVE_INFINITY
        : ".nan" === t
          ? NaN
          : n * parseFloat(t, 10)
    );
  },
  predicate: function (e) {
    return (
      "[object Number]" === Object.prototype.toString.call(e) &&
      (e % 1 != 0 || r.isNegativeZero(e))
    );
  },
  represent: function (e, t) {
    if (isNaN(e))
      switch (t) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    else if (Number.POSITIVE_INFINITY === e)
      switch (t) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    else if (Number.NEGATIVE_INFINITY === e)
      switch (t) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    else if (r.isNegativeZero(e)) return "-0.0";
    const n = e.toString(10);
    return a.test(n) ? n.replace("e", ".e") : n;
  },
  defaultStyle: "lowercase",
});
