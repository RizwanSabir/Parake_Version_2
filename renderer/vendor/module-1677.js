// vendor/module-1677.js — webpack module 1677
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => u });
var n = r(96956 /* vendor/module-96956 */),
  o = r(84089 /* vendor/module-84089 */),
  i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  s = /^\w*$/;
const u = function (t, e) {
  if ((0, n.A)(t)) return !1;
  var r = typeof t;
  return (
    !(
      "number" != r &&
      "symbol" != r &&
      "boolean" != r &&
      null != t &&
      !(0, o.A)(t)
    ) ||
    s.test(t) ||
    !i.test(t) ||
    (null != e && t in Object(e))
  );
};
