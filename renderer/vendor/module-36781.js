// vendor/module-36781.js — webpack module 36781
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => u });
var n = r(6096 /* vendor/module-6096 */);
var o = r(25436 /* vendor/module-25436 */),
  i = r(13269 /* vendor/module-13269 */);
function s(t) {
  var e = (this.__data__ = new n.A(t));
  this.size = e.size;
}
(s.prototype.clear = function () {
  (this.__data__ = new n.A()), (this.size = 0);
}),
  (s.prototype.delete = function (t) {
    var e = this.__data__,
      r = e.delete(t);
    return (this.size = e.size), r;
  }),
  (s.prototype.get = function (t) {
    return this.__data__.get(t);
  }),
  (s.prototype.has = function (t) {
    return this.__data__.has(t);
  }),
  (s.prototype.set = function (t, e) {
    var r = this.__data__;
    if (r instanceof n.A) {
      var s = r.__data__;
      if (!o.A || s.length < 199)
        return s.push([t, e]), (this.size = ++r.size), this;
      r = this.__data__ = new i.A(s);
    }
    return r.set(t, e), (this.size = r.size), this;
  });
const u = s;
