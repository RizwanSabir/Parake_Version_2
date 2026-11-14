// vendor/module-51081.js — webpack module 51081
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/module-16973 */),
  o = n(33836 /* vendor/module-33836 */),
  i = n(98050 /* vendor/module-98050 */),
  a = n(64289 /* vendor/module-64289 */);
(t._INTERNAL_createTracingChannelBinding = function (e, t) {
  return {
    asyncLocalStorage: e,
    getStoreWithActiveSpan: (e) => {
      const { scope: n, isolationScope: r } = t(),
        i = n.clone();
      return o._setSpanForScope(i, e), { scope: i, isolationScope: r };
    },
  };
}),
  (t.waitForTracingChannelBinding = function e(t, n = 1) {
    const o = a
      .getAsyncContextStrategy(r.getMainCarrier())
      .getTracingChannelBinding?.();
    o
      ? t()
      : n &&
        i.safeUnref(
          setTimeout(() => {
            e(t, n - 1);
          }, 1),
        );
  });
