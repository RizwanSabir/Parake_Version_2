// app/components/combobox-positioner.js — webpack module 32477
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxPositioner = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(4674 /* vendor/module-4674 */),
  l = n(9220 /* vendor/module-9220 */),
  c = n(32118 /* vendor/module-32118 */),
  u = n(95350 /* vendor/module-95350 */),
  d = n(54330 /* vendor/module-54330 */),
  p = n(54990 /* vendor/module-54990 */),
  f = n(25743 /* vendor/module-25743 */),
  h = n(36826 /* vendor/module-36826 */),
  m = n(95102 /* vendor/module-95102 */),
  g = n(90718 /* vendor/module-90718 */),
  y = n(82296 /* vendor/module-82296 */),
  v = n(31085 /* vendor/module-31085 */);
t.ComboboxPositioner = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      anchor: o,
      positionMethod: b = "absolute",
      side: S = "bottom",
      align: _ = "center",
      sideOffset: x = 0,
      alignOffset: w = 0,
      collisionBoundary: E = "clipping-ancestors",
      collisionPadding: T = 5,
      arrowPadding: k = 5,
      sticky: C = !1,
      disableAnchorTracking: I = !1,
      collisionAvoidance: A = f.DROPDOWN_COLLISION_AVOIDANCE,
      style: O,
      ...R
    } = e,
    M = (0, c.useComboboxRootContext)(),
    { filteredItems: P } = (0, c.useComboboxDerivedItemsContext)(),
    N = (0, c.useComboboxFloatingContext)(),
    D = (0, p.useComboboxPortalContext)(),
    j = (0, i.useStore)(M, h.selectors.modal),
    L = (0, i.useStore)(M, h.selectors.open),
    F = (0, i.useStore)(M, h.selectors.mounted),
    U = (0, i.useStore)(M, h.selectors.openMethod),
    B = (0, i.useStore)(M, h.selectors.positionerElement),
    z = (0, i.useStore)(M, h.selectors.triggerElement),
    H = (0, i.useStore)(M, h.selectors.inputElement),
    V = (0, i.useStore)(M, h.selectors.inputGroupElement),
    q = (0, i.useStore)(M, h.selectors.inputInsidePopup),
    G = (0, i.useStore)(M, h.selectors.transitionStatus),
    W = 0 === P.length,
    $ = o ?? (q ? z : (V ?? H)),
    Y = (0, d.useAnchorPositioning)({
      anchor: $,
      floatingRootContext: N,
      positionMethod: b,
      mounted: F,
      side: S,
      sideOffset: x,
      align: _,
      alignOffset: w,
      arrowPadding: k,
      collisionBoundary: E,
      collisionPadding: T,
      sticky: C,
      disableAnchorTracking: I,
      keepMounted: D,
      collisionAvoidance: A,
      lazyFlip: !0,
    });
  (0, y.useAnchoredPopupScrollLock)(L && j, "touch" === U, B, z);
  const K = {
    open: L,
    side: Y.side,
    align: Y.align,
    anchorHidden: Y.anchorHidden,
    empty: W,
  };
  (0, a.useIsoLayoutEffect)(() => {
    M.set("popupSide", Y.side);
  }, [M, Y.side]);
  const Z = (0, s.useStableCallback)((e) => {
      M.set("positionerElement", e);
    }),
    Q = (0, g.usePositioner)(e, K, {
      styles: Y.positionerStyles,
      transitionStatus: G,
      props: R,
      refs: [t, Z],
      hidden: !F,
      inert: !L,
    });
  return (0, v.jsxs)(u.ComboboxPositionerContext.Provider, {
    value: Y,
    children: [
      F &&
        j &&
        (0, v.jsx)(m.InternalBackdrop, {
          inert: (0, l.inertValue)(!L),
          cutout: V ?? H ?? z,
        }),
      Q,
    ],
  });
});
