// vendor/module-77100.js — webpack module 77100
// params: (e, t, n) = (module, exports, require)
let r = n(29550 /* vendor/module-29550 */),
  o = n(14041 /* vendor/module-14041 */);
t.useCreateStore = function (e, t) {
  const [n] = (0, o.useState)(() =>
    "function" == typeof e
      ? (0, r.createStore)(e)
      : t
        ? (0, r.createStore)(e, t)
        : (0, r.createStore)(e),
  );
  return n;
};
