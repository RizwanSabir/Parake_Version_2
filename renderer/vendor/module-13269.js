// vendor/module-13269.js — webpack module 13269
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => l });
const n = (0, r(50123 /* vendor/module-50123 */).A)(Object, "create");
var o = Object.prototype.hasOwnProperty;
var i = Object.prototype.hasOwnProperty;
function s(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
(s.prototype.clear = function () {
  (this.__data__ = n ? n(null) : {}), (this.size = 0);
}),
  (s.prototype.delete = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }),
  (s.prototype.get = function (t) {
    var e = this.__data__;
    if (n) {
      var r = e[t];
      return "__lodash_hash_undefined__" === r ? void 0 : r;
    }
    return o.call(e, t) ? e[t] : void 0;
  }),
  (s.prototype.has = function (t) {
    var e = this.__data__;
    return n ? void 0 !== e[t] : i.call(e, t);
  }),
  (s.prototype.set = function (t, e) {
    var r = this.__data__;
    return (
      (this.size += this.has(t) ? 0 : 1),
      (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
      this
    );
  });
const u = s;
var a = r(6096 /* vendor/module-6096 */),
  c = r(25436 /* vendor/module-25436 */);
const h = function (t, e) {
  var r,
    n,
    o = t.__data__;
  return (
    "string" == (n = typeof (r = e)) ||
    "number" == n ||
    "symbol" == n ||
    "boolean" == n
      ? "__proto__" !== r
      : null === r
  )
    ? o["string" == typeof e ? "string" : "hash"]
    : o.map;
};
function f(t) {
  var e = -1,
    r = null == t ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
(f.prototype.clear = function () {
  (this.size = 0),
    (this.__data__ = {
      hash: new u(),
      map: new (c.A || a.A)(),
      string: new u(),
    });
}),
  (f.prototype.delete = function (t) {
    var e = h(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }),
  (f.prototype.get = function (t) {
    return h(this, t).get(t);
  }),
  (f.prototype.has = function (t) {
    return h(this, t).has(t);
  }),
  (f.prototype.set = function (t, e) {
    var r = h(this, t),
      n = r.size;
    return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
  });
const l = f;
