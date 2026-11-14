// vendor/module-87840.js — webpack module 87840
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardViewport = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(2001 /* vendor/module-2001 */),
  a = n(16581 /* vendor/module-16581 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(63407 /* vendor/module-63407 */),
  c = n(72856 /* app/hooks/use-popup-viewport */);
const u = {
  activationDirection: (e) => (e ? { "data-activation-direction": e } : null),
};
t.PreviewCardViewport = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, children: d, ...p } = e,
    f = (0, i.usePreviewCardRootContext)(),
    h = (0, a.usePreviewCardPositionerContext)(),
    m = f.useState("instantType"),
    { children: g, state: y } = (0, c.usePopupViewport)({
      store: f,
      side: h.side,
      cssVars: l.PreviewCardViewportCssVars,
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
