// app/components/popover-positioner.js — webpack module 14659
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverPositioner = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(9220 /* vendor/module-9220 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(47797 /* vendor/module-47797 */),
  l = n(27788 /* vendor/module-27788 */),
  c = n(47356 /* vendor/module-47356 */),
  u = n(54330 /* vendor/module-54330 */),
  d = n(38464 /* vendor/module-38464 */),
  p = n(95102 /* vendor/module-95102 */),
  f = n(82063 /* vendor/module-82063 */),
  h = n(25743 /* vendor/module-25743 */),
  m = n(43808 /* vendor/module-43808 */),
  g = n(25833 /* vendor/module-25833 */),
  y = n(90718 /* vendor/module-90718 */),
  v = n(82296 /* vendor/module-82296 */),
  b = n(31085 /* vendor/module-31085 */);
t.PopoverPositioner = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: S,
      anchor: _,
      positionMethod: x = "absolute",
      side: w = "bottom",
      align: E = "center",
      sideOffset: T = 0,
      alignOffset: k = 0,
      collisionBoundary: C = "clipping-ancestors",
      collisionPadding: I = 5,
      arrowPadding: A = 5,
      sticky: O = !1,
      disableAnchorTracking: R = !1,
      collisionAvoidance: M = h.POPUP_COLLISION_AVOIDANCE,
      ...P
    } = e,
    { store: N } = (0, l.usePopoverRootContext)(),
    D = (0, d.usePopoverPortalContext)(),
    j = (0, s.useFloatingNodeId)(),
    L = N.useState("floatingRootContext"),
    F = N.useState("mounted"),
    U = N.useState("open"),
    B = N.useState("openChangeReason"),
    z = N.useState("activeTriggerElement"),
    H = N.useState("modal"),
    V = N.useState("openMethod"),
    q = N.useState("positionerElement"),
    G = N.useState("instantType"),
    W = N.useState("transitionStatus"),
    $ = N.useState("hasViewport"),
    Y = o.useRef(null),
    K = (0, m.useAnimationsFinished)(q, !1, !1),
    Z = (0, u.useAnchorPositioning)({
      anchor: _,
      floatingRootContext: L,
      positionMethod: x,
      mounted: F,
      side: w,
      sideOffset: T,
      align: E,
      alignOffset: k,
      arrowPadding: A,
      collisionBoundary: C,
      collisionPadding: I,
      sticky: O,
      disableAnchorTracking: R,
      keepMounted: D,
      nodeId: j,
      collisionAvoidance: M,
      adaptiveOrigin: $ ? g.adaptiveOrigin : void 0,
    }),
    Q = L.useState("domReferenceElement");
  (0, a.useIsoLayoutEffect)(() => {
    const e = Q,
      t = Y.current;
    if ((e && (Y.current = e), t && e && e !== t)) {
      N.set("instantType", void 0);
      const e = new AbortController();
      return (
        K(() => {
          N.set("instantType", "trigger-change");
        }, e.signal),
        () => {
          e.abort();
        }
      );
    }
  }, [Q, K, N]),
    (0, v.useAnchoredPopupScrollLock)(
      U && !0 === H && B !== f.REASONS.triggerHover,
      "touch" === V,
      q,
      z,
    );
  const J = o.useCallback(
      (e) => {
        N.set("positionerElement", e);
      },
      [N],
    ),
    X = {
      open: U,
      side: Z.side,
      align: Z.align,
      anchorHidden: Z.anchorHidden,
      instant: G,
    },
    ee = (0, y.usePositioner)(e, X, {
      styles: Z.positionerStyles,
      transitionStatus: W,
      props: P,
      refs: [t, J],
      hidden: !F,
      inert: !U,
    });
  return (0, b.jsxs)(c.PopoverPositionerContext.Provider, {
    value: Z,
    children: [
      F &&
        !0 === H &&
        B !== f.REASONS.triggerHover &&
        (0, b.jsx)(p.InternalBackdrop, {
          ref: N.context.internalBackdropRef,
          inert: (0, i.inertValue)(!U),
          cutout: z,
        }),
      (0, b.jsx)(s.FloatingNode, { id: j, children: ee }),
    ],
  });
});
