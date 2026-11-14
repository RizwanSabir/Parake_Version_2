// vendor/module-77252.js — webpack module 77252
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => c });
var n = r(88748 /* vendor/module-88748 */),
  o = r(96956 /* vendor/module-96956 */),
  i = r(34517 /* vendor/module-34517 */),
  s = r(85378 /* vendor/module-85378 */),
  u = r(92888 /* vendor/module-92888 */),
  a = Object.prototype.hasOwnProperty;
const c = function (t, e) {
  var r = (0, o.A)(t),
    c = !r && (0, n.A)(t),
    h = !r && !c && (0, i.A)(t),
    f = !r && !c && !h && (0, u.A)(t),
    l = r || c || h || f,
    d = l
      ? (function (t, e) {
          for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
          return n;
        })(t.length, String)
      : [],
    A = d.length;
  for (var v in t)
    (!e && !a.call(t, v)) ||
      (l &&
        ("length" == v ||
          (h && ("offset" == v || "parent" == v)) ||
          (f && ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
          (0, s.A)(v, A))) ||
      d.push(v);
  return d;
};
