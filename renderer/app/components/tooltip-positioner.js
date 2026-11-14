// app/components/tooltip-positioner.js — webpack module 88671
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TooltipPositioner = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(14648 /* vendor/module-14648 */),
  a = n(15864 /* vendor/module-15864 */),
  s = n(54330 /* vendor/module-54330 */),
  l = n(32512 /* vendor/module-32512 */),
  c = n(25743 /* vendor/module-25743 */),
  u = n(25833 /* vendor/module-25833 */),
  d = n(90718 /* vendor/module-90718 */),
  p = n(31085 /* vendor/module-31085 */);
t.TooltipPositioner = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      anchor: f,
      positionMethod: h = "absolute",
      side: m = "top",
      align: g = "center",
      sideOffset: y = 0,
      alignOffset: v = 0,
      collisionBoundary: b = "clipping-ancestors",
      collisionPadding: S = 5,
      arrowPadding: _ = 5,
      sticky: x = !1,
      disableAnchorTracking: w = !1,
      collisionAvoidance: E = c.POPUP_COLLISION_AVOIDANCE,
      style: T,
      ...k
    } = e,
    C = (0, i.useTooltipRootContext)(),
    I = (0, l.useTooltipPortalContext)(),
    A = C.useState("open"),
    O = C.useState("mounted"),
    R = C.useState("trackCursorAxis"),
    M = C.useState("disableHoverablePopup"),
    P = C.useState("floatingRootContext"),
    N = C.useState("instantType"),
    D = C.useState("transitionStatus"),
    j = C.useState("hasViewport"),
    L = (0, s.useAnchorPositioning)({
      anchor: f,
      positionMethod: h,
      floatingRootContext: P,
      mounted: O,
      side: m,
      sideOffset: y,
      align: g,
      alignOffset: v,
      collisionBoundary: b,
      collisionPadding: S,
      sticky: x,
      arrowPadding: _,
      disableAnchorTracking: w,
      keepMounted: I,
      collisionAvoidance: E,
      adaptiveOrigin: j ? u.adaptiveOrigin : void 0,
    }),
    F = o.useMemo(
      () => ({
        open: A,
        side: L.side,
        align: L.align,
        anchorHidden: L.anchorHidden,
        instant: "none" !== R ? "tracking-cursor" : N,
      }),
      [A, L.side, L.align, L.anchorHidden, R, N],
    ),
    U = (0, d.usePositioner)(e, F, {
      styles: L.positionerStyles,
      transitionStatus: D,
      props: k,
      refs: [t, C.useStateSetter("positionerElement")],
      hidden: !O,
      inert: !A || "both" === R || M,
    });
  return (0, p.jsx)(a.TooltipPositionerContext.Provider, {
    value: L,
    children: U,
  });
});
