// app/components/menu-popup.js — webpack module 7273
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MenuPopup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(47797 /* vendor/module-47797 */),
  a = n(85950 /* vendor/module-85950 */),
  s = n(83838 /* vendor/module-83838 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(51146 /* vendor/module-51146 */),
  u = n(44306 /* vendor/module-44306 */),
  d = n(15586 /* vendor/module-15586 */),
  p = n(22877 /* vendor/module-22877 */),
  f = n(82063 /* vendor/module-82063 */),
  h = n(75256 /* vendor/module-75256 */),
  m = n(30197 /* vendor/module-30197 */),
  g = n(53469 /* vendor/module-53469 */),
  y = n(31085 /* vendor/module-31085 */);
const v = { ...c.popupStateMapping, ...u.transitionStatusMapping };
t.MenuPopup = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: c, finalFocus: u, ...b } = e,
    { store: S } = (0, a.useMenuRootContext)(),
    { side: _, align: x } = (0, s.useMenuPositionerContext)(),
    w = null != (0, h.useToolbarRootContext)(!0),
    E = S.useState("open"),
    T = S.useState("transitionStatus"),
    k = S.useState("popupProps"),
    C = S.useState("mounted"),
    I = S.useState("instantType"),
    A = S.useState("activeTriggerElement"),
    O = S.useState("parent"),
    R = S.useState("lastOpenChangeReason"),
    M = S.useState("rootId"),
    P = S.useState("floatingRootContext"),
    N = S.useState("floatingTreeRoot"),
    D = S.useState("closeDelay"),
    j = S.useState("activeTriggerElement"),
    L = S.useState("hoverEnabled"),
    F = S.useState("disabled"),
    U = S.useState("openMethod"),
    B = "context-menu" === O.type;
  (0, d.useOpenChangeComplete)({
    open: E,
    ref: S.context.popupRef,
    onComplete() {
      E && S.context.onOpenChangeComplete?.(!0);
    },
  }),
    o.useEffect(() => {
      function e(e) {
        S.setOpen(!1, (0, p.createChangeEventDetails)(e.reason, e.domEvent));
      }
      return (
        N.events.on("close", e),
        () => {
          N.events.off("close", e);
        }
      );
    }, [N.events, S]),
    (0, i.useHoverFloatingInteraction)(P, {
      enabled: L && !F && !B && "menubar" !== O.type,
      closeDelay: D,
    });
  const z = o.useCallback(
      (e) => {
        S.set("popupElement", e);
      },
      [S],
    ),
    H = {
      transitionStatus: T,
      side: _,
      align: x,
      open: E,
      nested: "menu" === O.type,
      instant: I,
    },
    V = (0, l.useRenderElement)("div", e, {
      state: H,
      ref: [t, S.context.popupRef, z],
      stateAttributesMapping: v,
      props: [
        k,
        {
          onKeyDown(e) {
            w && m.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
          },
        },
        (0, g.getDisabledMountTransitionStyles)(T),
        b,
        { "data-rootownerid": M },
      ],
    });
  let q = void 0 === O.type || B;
  return (
    (A || ("menubar" === O.type && R !== f.REASONS.outsidePress)) && (q = !0),
    (0, y.jsx)(i.FloatingFocusManager, {
      context: P,
      openInteractionType: U,
      modal: B,
      disabled: !C,
      returnFocus: void 0 === u ? q : u,
      initialFocus: "menu" !== O.type,
      restoreFocus: !0,
      externalTree: "menubar" !== O.type ? N : void 0,
      previousFocusableElement: j,
      nextFocusableElement:
        void 0 === O.type ? S.context.triggerFocusTargetRef : void 0,
      beforeContentFocusGuardRef:
        void 0 === O.type ? S.context.beforeContentFocusGuardRef : void 0,
      children: V,
    })
  );
});
