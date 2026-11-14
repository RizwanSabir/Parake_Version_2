// vendor/module-93081.js — webpack module 93081
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => h });
var n = r(83516 /* vendor/module-83516 */),
  o = r(65133 /* vendor/module-65133 */),
  i = r(96956 /* vendor/module-96956 */),
  s = r(84089 /* vendor/module-84089 */),
  u = n.A ? n.A.prototype : void 0,
  a = u ? u.toString : void 0;
const c = function t(e) {
    if ("string" == typeof e) return e;
    if ((0, i.A)(e)) return (0, o.A)(e, t) + "";
    if ((0, s.A)(e)) return a ? a.call(e) : "";
    var r = e + "";
    return "0" == r && 1 / e == -1 / 0 ? "-0" : r;
  },
  h = function (t) {
    return null == t ? "" : c(t);
  };
