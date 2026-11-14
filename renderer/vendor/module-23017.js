// vendor/module-23017.js — webpack module 23017
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => c });
var n = r(29333 /* vendor/module-29333 */),
  o = r(88748 /* vendor/module-88748 */),
  i = r(96956 /* vendor/module-96956 */),
  s = r(85378 /* vendor/module-85378 */),
  u = r(47893 /* vendor/module-47893 */),
  a = r(9322 /* vendor/module-9322 */);
const c = function (t, e, r) {
  for (var c = -1, h = (e = (0, n.A)(e, t)).length, f = !1; ++c < h; ) {
    var l = (0, a.A)(e[c]);
    if (!(f = null != t && r(t, l))) break;
    t = t[l];
  }
  return f || ++c != h
    ? f
    : !!(h = null == t ? 0 : t.length) &&
        (0, u.A)(h) &&
        (0, s.A)(l, h) &&
        ((0, i.A)(t) || (0, o.A)(t));
};
