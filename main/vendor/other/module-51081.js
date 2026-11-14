// vendor/other/module-51081.js — webpack module 51081
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/other/module-16973 */),
  o = n(33836 /* vendor/other/module-33836 */),
  i = n(98050 /* vendor/other/module-98050 */),
  s = n(64289 /* vendor/other/module-64289 */);
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
    const o = s
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
