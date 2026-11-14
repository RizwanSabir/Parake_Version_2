// vendor/module-65662.js — webpack module 65662
// params: (e, t, n) = (module, exports, require)
let r = n(29550 /* vendor/module-29550 */),
  o = n(14041 /* vendor/module-14041 */);
t.useCreateAtom = function (e, t) {
  const [n] = (0, o.useState)(() => (0, r.createAtom)(e, t));
  return n;
};
