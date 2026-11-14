// vendor/module-6096.js — webpack module 6096
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => u });
var n = r(26979 /* vendor/module-26979 */);
const o = function (t, e) {
  for (var r = t.length; r--; ) if ((0, n.A)(t[r][0], e)) return r;
  return -1;
};
var i = Array.prototype.splice;
function s(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
(s.prototype.clear = function () {
  (this.__data__ = []), (this.size = 0);
}),
  (s.prototype.delete = function (t) {
    var e = this.__data__,
      r = o(e, t);
    return !(
      r < 0 || (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, 0)
    );
  }),
  (s.prototype.get = function (t) {
    var e = this.__data__,
      r = o(e, t);
    return r < 0 ? void 0 : e[r][1];
  }),
  (s.prototype.has = function (t) {
    return o(this.__data__, t) > -1;
  }),
  (s.prototype.set = function (t, e) {
    var r = this.__data__,
      n = o(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
  });
const u = s;
