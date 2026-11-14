// vendor/other/module-85732.js — webpack module 85732
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(56623 /* vendor/other/module-56623 */);
e.exports = new r("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: function (e) {
    return "<<" === e || null === e;
  },
});
