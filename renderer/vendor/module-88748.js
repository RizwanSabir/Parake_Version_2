// vendor/module-88748.js — webpack module 88748
// params: (t, e, r) = (module, exports, require)
r.d(e, { A: () => h });
var n = r(4044 /* vendor/module-4044 */),
  o = r(47313 /* vendor/module-47313 */);
const i = function (t) {
  return (0, o.A)(t) && "[object Arguments]" == (0, n.A)(t);
};
var s = Object.prototype,
  u = s.hasOwnProperty,
  a = s.propertyIsEnumerable,
  c = i(
    (function () {
      return arguments;
    })(),
  )
    ? i
    : function (t) {
        return (0, o.A)(t) && u.call(t, "callee") && !a.call(t, "callee");
      };
const h = c;
