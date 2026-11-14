// vendor/module-25567.js — webpack module 25567
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => i });
var n = r(13269 /* vendor/module-13269 */);
function o(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.__data__ = new n.A(); ++e < r; ) this.add(t[e]);
}
(o.prototype.add = o.prototype.push =
  function (t) {
    return this.__data__.set(t, "__lodash_hash_undefined__"), this;
  }),
  (o.prototype.has = function (t) {
    return this.__data__.has(t);
  });
const i = o;
