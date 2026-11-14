// vendor/module-16243.js — webpack module 16243
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(64554 /* vendor/module-64554 */);
function o(e, t, n, o) {
  r._INTERNAL_captureMetric(
    {
      type: e,
      name: t,
      value: n,
      unit: o?.unit,
      attributes: o?.attributes,
    },
    { scope: o?.scope },
  );
}
(t.count = function (e, t = 1, n) {
  o("counter", e, t, n);
}),
  (t.distribution = function (e, t, n) {
    o("distribution", e, t, n);
  }),
  (t.gauge = function (e, t, n) {
    o("gauge", e, t, n);
  });
