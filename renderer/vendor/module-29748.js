// vendor/module-29748.js — webpack module 29748
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.NumberFieldGroup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(46007 /* vendor/module-46007 */),
  a = n(5274 /* vendor/module-5274 */),
  s = n(51909 /* vendor/module-51909 */);
t.NumberFieldGroup = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e,
    { state: c } = (0, i.useNumberFieldRootContext)();
  return (0, s.useRenderElement)("div", e, {
    ref: t,
    state: c,
    props: [{ role: "group" }, l],
    stateAttributesMapping: a.stateAttributesMapping,
  });
});
