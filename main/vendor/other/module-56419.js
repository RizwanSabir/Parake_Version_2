// vendor/other/module-56419.js — webpack module 56419
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(56623 /* vendor/other/module-56623 */);
e.exports = new r("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: function (e) {
    if (null === e) return !0;
    const t = e.length;
    return (
      (1 === t && "~" === e) ||
      (4 === t && ("null" === e || "Null" === e || "NULL" === e))
    );
  },
  construct: function () {
    return null;
  },
  predicate: function (e) {
    return null === e;
  },
  represent: {
    canonical: function () {
      return "~";
    },
    lowercase: function () {
      return "null";
    },
    uppercase: function () {
      return "NULL";
    },
    camelcase: function () {
      return "Null";
    },
    empty: function () {
      return "";
    },
  },
  defaultStyle: "lowercase",
});
