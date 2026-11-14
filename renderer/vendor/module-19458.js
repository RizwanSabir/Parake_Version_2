// vendor/module-19458.js — webpack module 19458
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/module-16973 */);
(t.getSegmentSpanCaptureStrategy = function () {
  return r.getSentryCarrier(r.getMainCarrier()).segmentSpanCaptureStrategy;
}),
  (t.setSegmentSpanCaptureStrategy = function (e) {
    r.getSentryCarrier(r.getMainCarrier()).segmentSpanCaptureStrategy = e;
  });
