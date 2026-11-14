// vendor/module-39327.js — webpack module 39327
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverViewport = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(27788 /* vendor/module-27788 */),
  a = n(47356 /* vendor/module-47356 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(62366 /* vendor/module-62366 */),
  c = n(72856 /* app/hooks/use-popup-viewport */);
const u = {
  activationDirection: (e) => (e ? { "data-activation-direction": e } : null),
};
t.PopoverViewport = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, children: d, ...p } = e,
    { store: f } = (0, i.usePopoverRootContext)(),
    { side: h } = (0, a.usePopoverPositionerContext)(),
    m = f.useState("instantType"),
    { children: g, state: y } = (0, c.usePopupViewport)({
      store: f,
      side: h,
      cssVars: l.PopoverViewportCssVars,
      children: d,
    }),
    v = {
      activationDirection: y.activationDirection,
      transitioning: y.transitioning,
      instant: m,
    };
  return (0, s.useRenderElement)("div", e, {
    state: v,
    ref: t,
    props: [p, { children: g }],
    stateAttributesMapping: u,
  });
});
