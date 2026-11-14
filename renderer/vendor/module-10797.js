// vendor/module-10797.js — webpack module 10797
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TooltipArrow = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(15864 /* vendor/module-15864 */),
  a = n(51146 /* vendor/module-51146 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(14648 /* vendor/module-14648 */);
t.TooltipArrow = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...c } = e,
    u = (0, l.useTooltipRootContext)(),
    {
      arrowRef: d,
      side: p,
      align: f,
      arrowUncentered: h,
      arrowStyles: m,
    } = (0, i.useTooltipPositionerContext)(),
    g = {
      open: u.useState("open"),
      side: p,
      align: f,
      uncentered: h,
      instant: u.useState("instantType"),
    };
  return (0, s.useRenderElement)("div", e, {
    state: g,
    ref: [t, d],
    props: [{ style: m, "aria-hidden": !0 }, c],
    stateAttributesMapping: a.popupStateMapping,
  });
});
