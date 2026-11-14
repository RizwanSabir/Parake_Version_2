// vendor/other/module-95951.js — webpack module 95951
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
let t;
e.exports = {
  setDiagnosticsHook: function (e) {
    t = e;
  },
  emitDiagnostics: function (e) {
    t && t(e);
  },
};
