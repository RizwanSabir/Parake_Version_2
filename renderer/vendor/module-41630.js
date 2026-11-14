// vendor/module-41630.js — webpack module 41630
// params: (e, t, n) = (module, exports, require)
let r = n(14041 /* vendor/module-14041 */),
  o = n(37121 /* vendor/module-37121 */);
function i(e, t) {
  return e === t;
}
t.useSelector = function (e, t = (e) => e, n) {
  const a = n?.compare ?? i,
    s = (0, r.useCallback)(
      (t) => {
        const { unsubscribe: n } = e.subscribe(t);
        return n;
      },
      [e],
    ),
    l = (0, r.useCallback)(() => e.get(), [e]);
  return (0, o.useSyncExternalStoreWithSelector)(s, l, l, t, a);
};
