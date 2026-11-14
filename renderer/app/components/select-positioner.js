// app/components/select-positioner.js — webpack module 51657
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectPositioner = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(9220 /* vendor/module-9220 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(4674 /* vendor/module-4674 */),
  l = n(78207 /* vendor/module-78207 */),
  c = n(22370 /* vendor/module-22370 */),
  u = n(77144 /* app/components/composite-list */),
  d = n(54330 /* vendor/module-54330 */),
  p = n(67538 /* vendor/module-67538 */),
  f = n(95102 /* vendor/module-95102 */),
  h = n(25743 /* vendor/module-25743 */),
  m = n(74940 /* vendor/module-74940 */),
  g = n(84557 /* vendor/module-84557 */),
  y = n(22877 /* vendor/module-22877 */),
  v = n(82063 /* vendor/module-82063 */),
  b = n(68323 /* vendor/module-68323 */),
  S = n(90718 /* vendor/module-90718 */),
  _ = n(82296 /* vendor/module-82296 */),
  x = n(31085 /* vendor/module-31085 */);
const w = { position: "fixed" };
t.SelectPositioner = o.forwardRef(function (e, t) {
  const {
      anchor: n,
      positionMethod: r = "absolute",
      className: E,
      render: T,
      side: k = "bottom",
      align: C = "center",
      sideOffset: I = 0,
      alignOffset: A = 0,
      collisionBoundary: O = "clipping-ancestors",
      collisionPadding: R,
      arrowPadding: M = 5,
      sticky: P = !1,
      disableAnchorTracking: N,
      alignItemWithTrigger: D = !0,
      collisionAvoidance: j = h.DROPDOWN_COLLISION_AVOIDANCE,
      style: L,
      ...F
    } = e,
    {
      store: U,
      listRef: B,
      labelsRef: z,
      alignItemWithTriggerActiveRef: H,
      selectedItemTextRef: V,
      valuesRef: q,
      initialValueRef: G,
      popupRef: W,
      setValue: $,
    } = (0, c.useSelectRootContext)(),
    Y = (0, c.useSelectFloatingContext)(),
    K = (0, l.useStore)(U, g.selectors.open),
    Z = (0, l.useStore)(U, g.selectors.mounted),
    Q = (0, l.useStore)(U, g.selectors.modal),
    J = (0, l.useStore)(U, g.selectors.value),
    X = (0, l.useStore)(U, g.selectors.openMethod),
    ee = (0, l.useStore)(U, g.selectors.positionerElement),
    te = (0, l.useStore)(U, g.selectors.triggerElement),
    ne = (0, l.useStore)(U, g.selectors.isItemEqualToValue),
    re = (0, l.useStore)(U, g.selectors.transitionStatus),
    oe = o.useRef(null),
    ie = o.useRef(null),
    [ae, se] = o.useState(D),
    le = Z && ae && "touch" !== X;
  Z || ae === D || se(D),
    (0, a.useIsoLayoutEffect)(() => {
      Z ||
        (g.selectors.scrollUpArrowVisible(U.state) &&
          U.set("scrollUpArrowVisible", !1),
        g.selectors.scrollDownArrowVisible(U.state) &&
          U.set("scrollDownArrowVisible", !1));
    }, [U, Z]),
    o.useImperativeHandle(H, () => le),
    (0, _.useAnchoredPopupScrollLock)((le || Q) && K, "touch" === X, ee, te);
  const ce = (0, d.useAnchorPositioning)({
      anchor: n,
      floatingRootContext: Y,
      positionMethod: r,
      mounted: Z,
      side: k,
      sideOffset: I,
      align: C,
      alignOffset: A,
      arrowPadding: M,
      collisionBoundary: O,
      collisionPadding: R,
      sticky: P,
      disableAnchorTracking: N ?? le,
      collisionAvoidance: j,
      keepMounted: !0,
    }),
    ue = le ? "none" : ce.side,
    de = le ? w : ce.positionerStyles,
    pe = {
      open: K,
      side: ue,
      align: ce.align,
      anchorHidden: ce.anchorHidden,
    };
  (0, a.useIsoLayoutEffect)(() => {
    U.set("popupSide", ce.side);
  }, [U, ce.side]);
  const fe = (0, s.useStableCallback)((e) => {
      U.set("positionerElement", e);
    }),
    he = (0, S.usePositioner)(e, pe, {
      styles: de,
      transitionStatus: re,
      props: F,
      refs: [t, fe],
      hidden: !Z,
      inert: !K,
    }),
    me = o.useRef(0),
    ge = (0, s.useStableCallback)((e) => {
      if (0 === e.size && 0 === me.current) return;
      if (0 === q.current.length) return;
      const t = me.current;
      if (((me.current = e.size), e.size === t)) return;
      const n = (0, y.createChangeEventDetails)(v.REASONS.none);
      if (
        0 !== t &&
        !U.state.multiple &&
        null !== J &&
        -1 === (0, b.findItemIndex)(q.current, J, ne)
      ) {
        const e = G.current,
          t =
            null != e && -1 !== (0, b.findItemIndex)(q.current, e, ne)
              ? e
              : null;
        $(t, n),
          null === t && (U.set("selectedIndex", null), (V.current = null));
      }
      if (0 !== t && U.state.multiple && Array.isArray(J)) {
        const e = (e) => -1 !== (0, b.findItemIndex)(q.current, e, ne),
          t = J.filter((t) => e(t));
        (t.length !== J.length ||
          t.some((e) => !(0, b.selectedValueIncludes)(J, e, ne))) &&
          ($(t, n),
          0 === t.length && (U.set("selectedIndex", null), (V.current = null)));
      }
      if (K && le) {
        U.update({
          scrollUpArrowVisible: !1,
          scrollDownArrowVisible: !1,
        });
        const e = { height: "" };
        (0, m.clearStyles)(ee, e), (0, m.clearStyles)(W.current, e);
      }
    }),
    ye = o.useMemo(
      () => ({
        ...ce,
        side: ue,
        alignItemWithTriggerActive: le,
        setControlledAlignItemWithTrigger: se,
        scrollUpArrowRef: oe,
        scrollDownArrowRef: ie,
      }),
      [ce, ue, le, se],
    );
  return (0, x.jsx)(u.CompositeList, {
    elementsRef: B,
    labelsRef: z,
    onMapChange: ge,
    children: (0, x.jsxs)(p.SelectPositionerContext.Provider, {
      value: ye,
      children: [
        Z &&
          Q &&
          (0, x.jsx)(f.InternalBackdrop, {
            inert: (0, i.inertValue)(!K),
            cutout: te,
          }),
        he,
      ],
    }),
  });
});
