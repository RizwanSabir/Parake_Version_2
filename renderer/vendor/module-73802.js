// vendor/module-73802.js — webpack module 73802
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82615 /* vendor/module-82615 */);
(t.generateSpanId = function () {
  return r.uuid4().substring(16);
}),
  (t.generateTraceId = function () {
    return r.uuid4();
  });
