// vendor/module-94408.js — webpack module 94408
// params: (e, t, n) = (module, exports, require)
const r = n(96137 /* vendor/module-96137 */),
  o = n(68540 /* vendor/module-68540 */);
function i(e, t, n, i) {
  const a = r.getClient();
  r._INTERNAL_captureMetric(
    {
      type: e,
      name: t,
      value: n,
      unit: i?.unit,
      attributes: i?.attributes,
    },
    {
      scope: i?.scope ?? r.getCurrentScope(),
      captureSerializedMetric: (e, t) => o.getIPC(a).sendMetric(t),
    },
  );
}
(t.count = function (e, t = 1, n) {
  i("counter", e, t, n);
}),
  (t.distribution = function (e, t, n) {
    i("distribution", e, t, n);
  }),
  (t.gauge = function (e, t, n) {
    i("gauge", e, t, n);
  });
