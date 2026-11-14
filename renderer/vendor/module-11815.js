// vendor/module-11815.js — webpack module 11815
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => a });
const n = function (t, e, r, n) {
  var o = -1,
    i = null == t ? 0 : t.length;
  for (n && i && (r = t[++o]); ++o < i; ) r = e(r, t[o], o, t);
  return r;
};
var o = r(1987 /* vendor/module-1987 */),
  i = r(72814 /* vendor/module-72814 */);
const s = function (t, e, r, n, o) {
  return (
    o(t, function (t, o, i) {
      r = n ? ((n = !1), t) : e(r, t, o, i);
    }),
    r
  );
};
var u = r(96956 /* vendor/module-96956 */);
const a = function (t, e, r) {
  var a = (0, u.A)(t) ? n : s,
    c = arguments.length < 3;
  return a(t, (0, i.A)(e, 4), r, c, o.A);
};
