// vendor/other/module-73802.js — webpack module 73802
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82615 /* vendor/other/module-82615 */);
(t.generateSpanId = function () {
  return r.uuid4().substring(16);
}),
  (t.generateTraceId = function () {
    return r.uuid4();
  });
