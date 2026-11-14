// app/components/preview-card-positioner.js — webpack module 24272
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardPositioner = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(2001 /* vendor/module-2001 */),
  s = n(16581 /* vendor/module-16581 */),
  l = n(47797 /* vendor/module-47797 */),
  c = n(54330 /* vendor/module-54330 */),
  u = n(31761 /* vendor/module-31761 */),
  d = n(25743 /* vendor/module-25743 */),
  p = n(25833 /* vendor/module-25833 */),
  f = n(90718 /* vendor/module-90718 */),
  h = n(94661 /* vendor/module-94661 */),
  m = n(31085 /* vendor/module-31085 */);
t.PreviewCardPositioner = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      anchor: o,
      positionMethod: g = "absolute",
      side: y = "bottom",
      align: v = "center",
      sideOffset: b = 0,
      alignOffset: S = 0,
      collisionBoundary: _ = "clipping-ancestors",
      collisionPadding: x = 5,
      arrowPadding: w = 5,
      sticky: E = !1,
      disableAnchorTracking: T = !1,
      collisionAvoidance: k = d.POPUP_COLLISION_AVOIDANCE,
      style: C,
      ...I
    } = e,
    A = (0, a.usePreviewCardRootContext)(),
    O = (0, u.usePreviewCardPortalContext)(),
    R = (0, l.useFloatingNodeId)(),
    M = A.useState("open"),
    P = A.useState("mounted"),
    N = A.useState("floatingRootContext"),
    D = A.useState("instantType"),
    j = A.useState("transitionStatus"),
    L = A.useState("hasViewport"),
    F = A.context.inlineRectCoordsRef,
    U = (0, c.useAnchorPositioning)({
      anchor: o,
      floatingRootContext: N,
      positionMethod: g,
      mounted: P,
      side: y,
      sideOffset: b,
      align: v,
      alignOffset: S,
      arrowPadding: w,
      collisionBoundary: _,
      collisionPadding: x,
      sticky: E,
      disableAnchorTracking: T,
      keepMounted: O,
      nodeId: R,
      collisionAvoidance: k,
      adaptiveOrigin: L ? p.adaptiveOrigin : void 0,
      inline: (0, h.createInlineMiddleware)(F),
    }),
    B = U.update;
  (0, i.useIsoLayoutEffect)(() => {
    M && P && B();
  }, [M, P, B]);
  const z = {
      open: M,
      side: U.side,
      align: U.align,
      anchorHidden: U.anchorHidden,
      instant: D,
    },
    H = (0, f.usePositioner)(e, z, {
      styles: U.positionerStyles,
      transitionStatus: j,
      props: I,
      refs: [t, A.useStateSetter("positionerElement")],
      hidden: !P,
      inert: !M,
    });
  return (0, m.jsx)(s.PreviewCardPositionerContext.Provider, {
    value: U,
    children: (0, m.jsx)(l.FloatingNode, { id: R, children: H }),
  });
});
