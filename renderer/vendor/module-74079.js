// vendor/module-74079.js — webpack module 74079
// params: (e, t, n) = (module, exports, require)
const r = n(92686 /* vendor/module-92686 */),
  o = n(33811 /* app/components/infinite-query-options */),
  i = r.__toESM(n(35e3)),
  a = r.__toESM(n(14041 /* vendor/module-14041 */));
(t.createTRPCQueryUtils = function (e) {
  const t = o.createUtilityFunctions(e);
  return o.createQueryUtilsProxy(t);
}),
  (t.createTRPCReact = function (e) {
    return (function (e) {
      const t = o.createReactDecoration(e);
      return (0, i.createFlatProxy)((n) =>
        "useContext" === n || "useUtils" === n
          ? () => {
              const t = e.useUtils();
              return a.useMemo(() => o.createReactQueryUtils(t), [t]);
            }
          : e.hasOwnProperty(n)
            ? e[n]
            : t[n],
      );
    })(o.createRootHooks(e));
  }),
  (t.getMutationKey = r.getMutationKey),
  (t.getQueryKey = r.getQueryKey);
var s = n(21692 /* vendor/module-21692 */);
Object.keys(s).forEach(function (e) {
  "default" === e ||
    Object.prototype.hasOwnProperty.call(t, e) ||
    Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return s[e];
      },
    });
});
