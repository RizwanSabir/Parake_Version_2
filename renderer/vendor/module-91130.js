// vendor/module-91130.js — webpack module 91130
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => c });
var n = r(53271 /* vendor/module-53271 */),
  o = r(83516 /* vendor/module-83516 */),
  i = r(88748 /* vendor/module-88748 */),
  s = r(96956 /* vendor/module-96956 */),
  u = o.A ? o.A.isConcatSpreadable : void 0;
const a = function (t) {
    return (0, s.A)(t) || (0, i.A)(t) || !!(u && t && t[u]);
  },
  c = function t(e, r, o, i, s) {
    var u = -1,
      c = e.length;
    for (o || (o = a), s || (s = []); ++u < c; ) {
      var h = e[u];
      r > 0 && o(h)
        ? r > 1
          ? t(h, r - 1, o, i, s)
          : (0, n.A)(s, h)
        : i || (s[s.length] = h);
    }
    return s;
  };
