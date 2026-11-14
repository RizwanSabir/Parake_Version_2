// vendor/module-92940.js — webpack module 92940
// params: (e, t, n) = (module, exports, require)
let r = n(14041 /* vendor/module-14041 */),
  o = n(31085 /* vendor/module-31085 */);
t.createStoreContext = function () {
  const e = (0, r.createContext)(null);
  return (
    (e.displayName = "StoreContext"),
    {
      StoreProvider: function ({ children: t, value: n }) {
        return (0, o.jsx)(e.Provider, { value: n, children: t });
      },
      useStoreContext: function () {
        const t = (0, r.useContext)(e);
        if (null === t)
          throw new Error("Missing StoreProvider for StoreContext");
        return t;
      },
    }
  );
};
