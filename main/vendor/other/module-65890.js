// vendor/other/module-65890.js — webpack module 65890
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { M1: () => o, Zf: () => i });
const r = (0, n(98902 /* vendor/other/module-98902 */).n)(
  "OpenTelemetry SDK Context Key SUPPRESS_TRACING",
);
function o(e) {
  return e.setValue(r, !0);
}
function i(e) {
  return !0 === e.getValue(r);
}
