// vendor/module-21505.js — webpack module 21505
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverArrow = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(47356 /* vendor/module-47356 */),
  a = n(27788 /* vendor/module-27788 */),
  s = n(51146 /* vendor/module-51146 */),
  l = n(51909 /* vendor/module-51909 */);
t.PopoverArrow = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...c } = e,
    { store: u } = (0, a.usePopoverRootContext)(),
    d = u.useState("open"),
    {
      arrowRef: p,
      side: f,
      align: h,
      arrowUncentered: m,
      arrowStyles: g,
    } = (0, i.usePopoverPositionerContext)(),
    y = { open: d, side: f, align: h, uncentered: m };
  return (0, l.useRenderElement)("div", e, {
    state: y,
    ref: [t, p],
    props: [{ style: g, "aria-hidden": !0 }, c],
    stateAttributesMapping: s.popupStateMapping,
  });
});
