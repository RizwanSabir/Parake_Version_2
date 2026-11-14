// vendor/module-3996.js — webpack module 3996
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(92940 /* vendor/module-92940 */),
  o = n(65662 /* vendor/module-65662 */),
  i = n(77100 /* vendor/module-77100 */),
  a = n(41630 /* vendor/module-41630 */),
  s = n(43982 /* vendor/module-43982 */),
  l = n(88823 /* vendor/module-88823 */),
  c = n(62268 /* vendor/module-62268 */);
(t._useStore = l._useStore),
  (t.createStoreContext = r.createStoreContext),
  (t.useAtom = s.useAtom),
  (t.useCreateAtom = o.useCreateAtom),
  (t.useCreateStore = i.useCreateStore),
  (t.useSelector = a.useSelector),
  (t.useStore = c.useStore);
var u = n(29550 /* vendor/module-29550 */);
Object.keys(u).forEach(function (e) {
  "default" === e ||
    Object.prototype.hasOwnProperty.call(t, e) ||
    Object.defineProperty(t, e, {
      enumerable: !0,
      get: function () {
        return u[e];
      },
    });
});
