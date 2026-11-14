// vendor/module-29460.js — webpack module 29460
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardArrow = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(16581 /* vendor/module-16581 */),
  a = n(2001 /* vendor/module-2001 */),
  s = n(51146 /* vendor/module-51146 */),
  l = n(51909 /* vendor/module-51909 */);
t.PreviewCardArrow = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...c } = e,
    u = (0, a.usePreviewCardRootContext)(),
    {
      arrowRef: d,
      side: p,
      align: f,
      arrowUncentered: h,
      arrowStyles: m,
    } = (0, i.usePreviewCardPositionerContext)(),
    g = {
      open: u.useState("open"),
      side: p,
      align: f,
      uncentered: h,
    };
  return (0, l.useRenderElement)("div", e, {
    state: g,
    ref: [d, t],
    props: [{ style: m, "aria-hidden": !0 }, c],
    stateAttributesMapping: s.popupStateMapping,
  });
});
