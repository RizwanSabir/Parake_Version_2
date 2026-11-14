// vendor/module-26081.js — webpack module 26081
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxArrow = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(95350 /* vendor/module-95350 */),
  s = n(32118 /* vendor/module-32118 */),
  l = n(36826 /* vendor/module-36826 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(51146 /* vendor/module-51146 */);
t.ComboboxArrow = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...d } = e,
    p = (0, s.useComboboxRootContext)(),
    {
      arrowRef: f,
      side: h,
      align: m,
      arrowUncentered: g,
      arrowStyles: y,
    } = (0, a.useComboboxPositionerContext)(),
    v = {
      open: (0, i.useStore)(p, l.selectors.open),
      side: h,
      align: m,
      uncentered: g,
    };
  return (0, c.useRenderElement)("div", e, {
    ref: [f, t],
    stateAttributesMapping: u.popupStateMapping,
    state: v,
    props: { style: y, "aria-hidden": !0, ...d },
  });
});
