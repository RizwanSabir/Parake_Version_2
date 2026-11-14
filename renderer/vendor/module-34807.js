// vendor/module-34807.js — webpack module 34807
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TooltipViewport = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(14648 /* vendor/module-14648 */),
  a = n(15864 /* vendor/module-15864 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(32550 /* vendor/module-32550 */),
  c = n(72856 /* app/hooks/use-popup-viewport */);
const u = {
  activationDirection: (e) => (e ? { "data-activation-direction": e } : null),
};
t.TooltipViewport = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, children: d, ...p } = e,
    f = (0, i.useTooltipRootContext)(),
    h = (0, a.useTooltipPositionerContext)(),
    m = f.useState("instantType"),
    { children: g, state: y } = (0, c.usePopupViewport)({
      store: f,
      side: h.side,
      cssVars: l.TooltipViewportCssVars,
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
