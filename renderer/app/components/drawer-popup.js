// app/components/drawer-popup.js — webpack module 55785
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.DrawerPopup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i =
    (n(71923 /* vendor/module-71923 */),
    n(23549 /* vendor/module-23549 */),
    n(57122 /* vendor/module-57122 */)),
  a = n(4674 /* vendor/module-4674 */),
  s = n(38340 /* vendor/module-38340 */),
  l = n(47797 /* vendor/module-47797 */),
  c = n(90498 /* vendor/module-90498 */),
  u = n(51909 /* vendor/module-51909 */),
  d = n(51146 /* vendor/module-51146 */),
  p = n(44306 /* vendor/module-44306 */),
  f = n(86424 /* vendor/module-86424 */),
  h = n(51244 /* vendor/module-51244 */),
  m = n(16072 /* vendor/module-16072 */),
  g = n(63042 /* vendor/module-63042 */),
  y = n(15586 /* vendor/module-15586 */),
  v = n(30197 /* vendor/module-30197 */),
  b = n(14714 /* vendor/module-14714 */),
  S = n(34087 /* vendor/module-34087 */),
  _ = n(1698 /* vendor/module-1698 */),
  x = n(94661 /* vendor/module-94661 */),
  w = n(31085 /* vendor/module-31085 */);
let E = !1;
const T = {
  ...d.popupStateMapping,
  ...p.transitionStatusMapping,
  expanded: (e) => (e ? { [m.DrawerPopupDataAttributes.expanded]: "" } : null),
  nestedDrawerOpen: (e) =>
    e ? { [m.DrawerPopupDataAttributes.nestedDrawerOpen]: "" } : null,
  nestedDrawerSwiping: (e) =>
    e ? { [m.DrawerPopupDataAttributes.nestedDrawerSwiping]: "" } : null,
  swipeDirection: (e) =>
    e ? { [m.DrawerPopupDataAttributes.swipeDirection]: e } : null,
  swiping: (e) => (e ? { [m.DrawerPopupDataAttributes.swiping]: "" } : null),
};
t.DrawerPopup = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: d,
      finalFocus: p,
      initialFocus: m,
      ...k
    } = e,
    { store: C } = (0, c.useDialogRootContext)(),
    I = C.context.popupRef,
    {
      swipeDirection: A,
      frontmostHeight: O,
      hasNestedDrawer: R,
      nestedSwiping: M,
      nestedSwipeProgressStore: P,
      onPopupHeightChange: N,
      notifyParentFrontmostHeight: D,
      notifyParentHasNestedDrawer: j,
    } = (0, b.useDrawerRootContext)(),
    L = C.useState("descriptionElementId"),
    F = C.useState("disablePointerDismissal"),
    U = C.useState("floatingRootContext"),
    B = C.useState("popupProps"),
    z = C.useState("modal"),
    H = C.useState("mounted"),
    V = C.useState("nested"),
    q = C.useState("nestedOpenDrawerCount"),
    G = C.useState("transitionStatus"),
    W = C.useState("open"),
    $ = C.useState("openMethod"),
    Y = C.useState("titleElementId"),
    K = C.useState("role"),
    Z = U.useState("floatingId"),
    Q = k.id ?? Z,
    J = (0, _.useDrawerViewportContext)(!0);
  (0, g.useDialogPortalContext)();
  const {
      snapPoints: X,
      activeSnapPoint: ee,
      activeSnapPointOffset: te,
    } = (0, S.useDrawerSnapPoints)(),
    ne = q > 0,
    re = J?.swiping ?? !1,
    oe = J?.swipeStrength ?? null,
    [ie, ae] = o.useState(0),
    se = o.useRef(0),
    le = (0, a.useStableCallback)(() => {
      const e = I.current;
      if (!e) return;
      const t = e.offsetHeight;
      if (se.current > 0 && O > se.current && t > se.current) return;
      if (se.current > 0 && R) {
        const e = se.current;
        return ae(e), void N(e);
      }
      const n = t;
      n !== se.current && ((se.current = n), ae(n), N(n));
    });
  (0, i.useIsoLayoutEffect)(() => {
    if (!H) return (se.current = 0), ae(0), void N(0);
    const e = I.current;
    if (!e) return;
    if (
      (E ||
        ("undefined" != typeof CSS &&
          "registerProperty" in CSS &&
          ([
            h.DrawerPopupCssVars.swipeMovementX,
            h.DrawerPopupCssVars.swipeMovementY,
            h.DrawerPopupCssVars.snapPointOffset,
          ].forEach((e) => {
            try {
              CSS.registerProperty({
                name: e,
                syntax: "<length>",
                inherits: !1,
                initialValue: "0px",
              });
            } catch {}
          }),
          [
            {
              name: f.DrawerBackdropCssVars.swipeProgress,
              initialValue: "0",
            },
            {
              name: h.DrawerPopupCssVars.swipeStrength,
              initialValue: "1",
            },
          ].forEach(({ name: e, initialValue: t }) => {
            try {
              CSS.registerProperty({
                name: e,
                syntax: "<number>",
                inherits: !1,
                initialValue: t,
              });
            } catch {}
          })),
        (E = !0)),
      le(),
      "function" != typeof ResizeObserver)
    )
      return;
    const t = new ResizeObserver(le);
    return (
      t.observe(e),
      () => {
        t.disconnect();
      }
    );
  }, [le, H, ne, N, I]),
    (0, i.useIsoLayoutEffect)(() => {
      const e = () => {
        const e = I.current;
        if (!e) return;
        const t = P.getSnapshot();
        t > 0
          ? e.style.setProperty(f.DrawerBackdropCssVars.swipeProgress, `${t}`)
          : e.style.setProperty(f.DrawerBackdropCssVars.swipeProgress, "0");
      };
      e();
      const t = P.subscribe(e),
        n = I.current;
      return () => {
        t(),
          n && n.style.setProperty(f.DrawerBackdropCssVars.swipeProgress, "0");
      };
    }, [P, I]),
    o.useEffect(() => {
      if (W)
        return (
          D?.(O),
          () => {
            D?.(0);
          }
        );
    }, [O, W, D]),
    o.useEffect(() => {
      if (j)
        return (
          j(W || "ending" === G),
          () => {
            j(!1);
          }
        );
    }, [j, W, G]),
    (0, y.useOpenChangeComplete)({
      open: W,
      ref: I,
      onComplete() {
        W && C.context.onOpenChangeComplete?.(!0);
      },
    });
  const ce = void 0 === m ? I : m,
    ue = C.useStateSetter("popupElement"),
    de = {
      open: W,
      nested: V,
      transitionStatus: G,
      expanded: 1 === ee,
      nestedDrawerOpen: ne,
      nestedDrawerSwiping: M,
      swipeDirection: A,
      swiping: re,
    };
  let pe;
  ie && (R || "ending" === G) && (pe = `${ie}px`);
  const fe = X && X.length > 0 && ("down" === A || "up" === A);
  let he = null;
  fe && null !== te && (he = "up" === A ? -te : te);
  let me = J ? J.getDragStyles() : s.EMPTY_OBJECT;
  if (fe && "down" === A) {
    const e = te ?? 0,
      t = Number.parseFloat(
        String(me[h.DrawerPopupCssVars.swipeMovementY] ?? 0),
      );
    me =
      re && Number.isFinite(t)
        ? {
            ...me,
            transform: void 0,
            [h.DrawerPopupCssVars.swipeMovementY]:
              `${(0, S.getSnapPointSwipeMovement)(e, t)}px`,
          }
        : { ...me, transform: void 0 };
  }
  const ge = (0, u.useRenderElement)("div", e, {
    state: de,
    props: [
      B,
      {
        id: Q,
        "aria-labelledby": Y,
        "aria-describedby": L,
        role: K,
        ...x.FOCUSABLE_POPUP_PROPS,
        hidden: !H,
        onKeyDown(e) {
          v.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
        },
        style: {
          ...me,
          [f.DrawerBackdropCssVars.swipeProgress]: "0",
          [h.DrawerPopupCssVars.nestedDrawers]: q,
          [h.DrawerPopupCssVars.height]: pe,
          [h.DrawerPopupCssVars.snapPointOffset]:
            "number" == typeof he ? `${he}px` : "0px",
          [h.DrawerPopupCssVars.frontmostHeight]: O ? `${O}px` : void 0,
          [h.DrawerPopupCssVars.swipeStrength]:
            "number" == typeof oe && Number.isFinite(oe) && oe > 0
              ? `${oe}`
              : "1",
        },
      },
      k,
    ],
    ref: [t, I, ue],
    stateAttributesMapping: T,
  });
  return (0, w.jsx)(l.FloatingFocusManager, {
    context: U,
    openInteractionType: $,
    disabled: !H,
    closeOnFocusOut: !F,
    initialFocus: ce,
    returnFocus: p,
    modal: !1 !== z,
    restoreFocus: "popup",
    children: ge,
  });
});
