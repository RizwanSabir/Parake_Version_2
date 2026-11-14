// vendor/other/module-19458.js — webpack module 19458
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/other/module-16973 */);
(t.getSegmentSpanCaptureStrategy = function () {
  return r.getSentryCarrier(r.getMainCarrier()).segmentSpanCaptureStrategy;
}),
  (t.setSegmentSpanCaptureStrategy = function (e) {
    r.getSentryCarrier(r.getMainCarrier()).segmentSpanCaptureStrategy = e;
  });
