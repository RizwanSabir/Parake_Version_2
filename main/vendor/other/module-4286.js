// vendor/other/module-4286.js — webpack module 4286
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(56623 /* vendor/other/module-56623 */);
e.exports = new r("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: function (e) {
    if (null === e) return !1;
    const t = e.length;
    return (
      (4 === t && ("true" === e || "True" === e || "TRUE" === e)) ||
      (5 === t && ("false" === e || "False" === e || "FALSE" === e))
    );
  },
  construct: function (e) {
    return "true" === e || "True" === e || "TRUE" === e;
  },
  predicate: function (e) {
    return "[object Boolean]" === Object.prototype.toString.call(e);
  },
  represent: {
    lowercase: function (e) {
      return e ? "true" : "false";
    },
    uppercase: function (e) {
      return e ? "TRUE" : "FALSE";
    },
    camelcase: function (e) {
      return e ? "True" : "False";
    },
  },
  defaultStyle: "lowercase",
});
