// app/components/menu-positioner.js — webpack module 53957
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuPositioner = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(9220 /* vendor/module-9220 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(54807 /* vendor/module-54807 */),
  l = n(47797 /* vendor/module-47797 */),
  c = n(83838 /* vendor/module-83838 */),
  u = n(85950 /* vendor/module-85950 */),
  d = n(54330 /* vendor/module-54330 */),
  p = n(77144 /* app/components/composite-list */),
  f = n(95102 /* vendor/module-95102 */),
  h = n(99794 /* vendor/module-99794 */),
  m = n(25743 /* vendor/module-25743 */),
  g = n(87891 /* vendor/module-87891 */),
  y = n(22877 /* vendor/module-22877 */),
  v = n(82063 /* vendor/module-82063 */),
  b = n(25833 /* vendor/module-25833 */),
  S = n(43808 /* vendor/module-43808 */),
  _ = n(90718 /* vendor/module-90718 */),
  x = n(82296 /* vendor/module-82296 */),
  w = n(31085 /* vendor/module-31085 */);
t.MenuPositioner = o.forwardRef(function (e, t) {
  const {
      anchor: n,
      positionMethod: r = "absolute",
      className: E,
      render: T,
      side: k,
      align: C,
      sideOffset: I = 0,
      alignOffset: A = 0,
      collisionBoundary: O = "clipping-ancestors",
      collisionPadding: R = 5,
      arrowPadding: M = 5,
      sticky: P = !1,
      disableAnchorTracking: N = !1,
      collisionAvoidance: D = m.DROPDOWN_COLLISION_AVOIDANCE,
      style: j,
      ...L
    } = e,
    { store: F } = (0, u.useMenuRootContext)(),
    U = (0, h.useMenuPortalContext)(),
    B = (0, g.useContextMenuRootContext)(!0),
    z = F.useState("parent"),
    H = F.useState("floatingRootContext"),
    V = F.useState("floatingTreeRoot"),
    q = F.useState("mounted"),
    G = F.useState("open"),
    W = F.useState("modal"),
    $ = F.useState("openMethod"),
    Y = F.useState("activeTriggerElement"),
    K = F.useState("transitionStatus"),
    Z = F.useState("positionerElement"),
    Q = F.useState("instantType"),
    J = F.useState("hasViewport"),
    X = F.useState("lastOpenChangeReason"),
    ee = F.useState("floatingNodeId"),
    te = F.useState("floatingParentNodeId"),
    ne = H.useState("domReferenceElement"),
    re = o.useRef(null),
    oe = (0, S.useAnimationsFinished)(Z, !1, !1);
  let ie = n,
    ae = I,
    se = A,
    le = C,
    ce = D;
  "context-menu" === z.type &&
    ((ie = n ?? z.context?.anchor),
    (le = le ?? "start"),
    k ||
      "center" === le ||
      ((se = e.alignOffset ?? 2), (ae = e.sideOffset ?? -5)));
  let ue = k,
    de = le;
  "menu" === z.type
    ? ((ue = ue ?? "inline-end"),
      (de = de ?? "start"),
      (ce = e.collisionAvoidance ?? m.POPUP_COLLISION_AVOIDANCE))
    : "menubar" === z.type &&
      ((ue =
        ue ?? ("vertical" === z.context.orientation ? "inline-end" : "bottom")),
      (de = de ?? "start"));
  const pe = "context-menu" === z.type,
    fe = (0, d.useAnchorPositioning)({
      anchor: ie,
      floatingRootContext: H,
      positionMethod: B ? "fixed" : r,
      mounted: q,
      side: ue,
      sideOffset: ae,
      align: de,
      alignOffset: se,
      arrowPadding: pe ? 0 : M,
      collisionBoundary: O,
      collisionPadding: R,
      sticky: P,
      nodeId: ee,
      keepMounted: U,
      disableAnchorTracking: N,
      collisionAvoidance: ce,
      shiftCrossAxis: pe && !("side" in ce && "flip" === ce.side),
      externalTree: V,
      adaptiveOrigin: J ? b.adaptiveOrigin : void 0,
    });
  o.useEffect(() => {
    function e(e) {
      e.open &&
        (e.parentNodeId === ee && F.set("hoverEnabled", !1),
        e.nodeId !== ee &&
          e.parentNodeId === F.select("floatingParentNodeId") &&
          F.setOpen(
            !1,
            (0, y.createChangeEventDetails)(v.REASONS.siblingOpen),
          ));
    }
    return (
      V.events.on("menuopenchange", e),
      () => {
        V.events.off("menuopenchange", e);
      }
    );
  }, [F, V.events, ee]),
    o.useEffect(() => {
      if (null != F.select("floatingParentNodeId"))
        return (
          V.events.on("menuopenchange", e),
          () => {
            V.events.off("menuopenchange", e);
          }
        );
      function e(e) {
        if (e.open || e.nodeId !== F.select("floatingParentNodeId")) return;
        const t = e.reason ?? v.REASONS.siblingOpen;
        F.setOpen(!1, (0, y.createChangeEventDetails)(t));
      }
    }, [V.events, F]);
  const he = (0, s.useTimeout)();
  o.useEffect(() => {
    G || he.clear();
  }, [G, he]),
    o.useEffect(() => {
      function e(e) {
        if (G && e.nodeId === F.select("floatingParentNodeId"))
          if (e.target && Y && Y !== e.target) {
            const e = F.select("closeDelay");
            e > 0
              ? he.isStarted() ||
                he.start(e, () => {
                  F.setOpen(
                    !1,
                    (0, y.createChangeEventDetails)(v.REASONS.siblingOpen),
                  );
                })
              : F.setOpen(
                  !1,
                  (0, y.createChangeEventDetails)(v.REASONS.siblingOpen),
                );
          } else he.clear();
      }
      return (
        V.events.on("itemhover", e),
        () => {
          V.events.off("itemhover", e);
        }
      );
    }, [V.events, G, Y, F, he]),
    o.useEffect(() => {
      const e = {
        open: G,
        nodeId: ee,
        parentNodeId: te,
        reason: F.select("lastOpenChangeReason"),
      };
      V.events.emit("menuopenchange", e);
    }, [V.events, G, F, ee, te]),
    (0, a.useIsoLayoutEffect)(() => {
      const e = ne,
        t = re.current;
      if ((e && (re.current = e), t && e && e !== t)) {
        F.set("instantType", void 0);
        const e = new AbortController();
        return (
          oe(() => {
            F.set("instantType", "trigger-change");
          }, e.signal),
          () => {
            e.abort();
          }
        );
      }
    }, [ne, oe, F]);
  const me = {
      open: G,
      side: fe.side,
      align: fe.align,
      anchorHidden: fe.anchorHidden,
      nested: "menu" === z.type,
      instant: Q,
    },
    ge = "menubar" === z.type && z.context.modal,
    ye = W && X !== v.REASONS.triggerHover;
  (0, x.useAnchoredPopupScrollLock)(G && (ge || ye), "touch" === $, Z, Y);
  const ve = (0, _.usePositioner)(e, me, {
      styles: fe.positionerStyles,
      transitionStatus: K,
      props: L,
      refs: [t, F.useStateSetter("positionerElement")],
      hidden: !q,
      inert: !G,
    }),
    be =
      q &&
      "menu" !== z.type &&
      (("menubar" !== z.type && W && X !== v.REASONS.triggerHover) ||
        ("menubar" === z.type && z.context.modal));
  let Se = null;
  return (
    "menubar" === z.type
      ? (Se = z.context.contentElement)
      : void 0 === z.type && (Se = Y),
    (0, w.jsxs)(c.MenuPositionerContext.Provider, {
      value: fe,
      children: [
        be &&
          (0, w.jsx)(f.InternalBackdrop, {
            ref:
              "context-menu" === z.type || "nested-context-menu" === z.type
                ? z.context.internalBackdropRef
                : null,
            inert: (0, i.inertValue)(!G),
            cutout: Se,
          }),
        (0, w.jsx)(l.FloatingNode, {
          id: ee,
          children: (0, w.jsx)(p.CompositeList, {
            elementsRef: F.context.itemDomElements,
            labelsRef: F.context.itemLabels,
            children: ve,
          }),
        }),
      ],
    })
  );
});
