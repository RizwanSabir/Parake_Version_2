// vendor/module-36809.js — webpack module 36809
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuViewport = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(85950 /* vendor/module-85950 */),
  a = n(83838 /* vendor/module-83838 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(72856 /* app/hooks/use-popup-viewport */),
  c = n(23660 /* vendor/module-23660 */);
const u = {
  activationDirection: (e) => (e ? { "data-activation-direction": e } : null),
};
t.MenuViewport = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, children: d, ...p } = e,
    { store: f } = (0, i.useMenuRootContext)(),
    { side: h } = (0, a.useMenuPositionerContext)(),
    m = f.useState("instantType"),
    { children: g, state: y } = (0, l.usePopupViewport)({
      store: f,
      side: h,
      cssVars: c.MenuViewportCssVars,
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
