// vendor/module-85229.js — webpack module 85229
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MenuArrow = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(83838 /* vendor/module-83838 */),
  a = n(85950 /* vendor/module-85950 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(51146 /* vendor/module-51146 */);
t.MenuArrow = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...c } = e,
    { store: u } = (0, a.useMenuRootContext)(),
    {
      arrowRef: d,
      side: p,
      align: f,
      arrowUncentered: h,
      arrowStyles: m,
    } = (0, i.useMenuPositionerContext)(),
    g = {
      open: u.useState("open"),
      side: p,
      align: f,
      uncentered: h,
    };
  return (0, s.useRenderElement)("div", e, {
    ref: [d, t],
    stateAttributesMapping: l.popupStateMapping,
    state: g,
    props: { style: m, "aria-hidden": !0, ...c },
  });
});
