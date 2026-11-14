// vendor/module-25607.js — webpack module 25607
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(60169 /* vendor/module-60169 */),
  i = n(38862 /* vendor/module-38862 */);
t._getTraceInfoFromScope = function (e, t) {
  return t
    ? r.withScope(t, () => {
        const n = i.getActiveSpan(),
          a = n ? i.spanToTraceContext(n) : r.getTraceContextFromScope(t);
        return [
          n
            ? o.getDynamicSamplingContextFromSpan(n)
            : o.getDynamicSamplingContextFromScope(e, t),
          a,
        ];
      })
    : [void 0, void 0];
};
