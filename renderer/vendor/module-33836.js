// vendor/module-33836.js — webpack module 33836
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(68020 /* vendor/module-68020 */),
  o = n(88422 /* vendor/module-88422 */),
  i = "_sentrySpan";
(t._getSpanForScope = function (e) {
  return o.derefWeakRef(e[i]);
}),
  (t._setSpanForScope = function (e, t) {
    t ? r.addNonEnumerableProperty(e, i, o.makeWeakRef(t)) : delete e[i];
  });
