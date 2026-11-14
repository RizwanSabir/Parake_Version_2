// vendor/module-54418.js — webpack module 54418
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuSubmenuTrigger = void 0);
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */)),
  s =
    (n(3137 /* vendor/module-3137 */),
    n(57122 /* vendor/module-57122 */),
    n(77157 /* vendor/module-77157 */),
    n(23549 /* vendor/module-23549 */),
    n(38340 /* vendor/module-38340 */)),
  l = n(47797 /* vendor/module-47797 */),
  c = n(85950 /* vendor/module-85950 */),
  u = n(33115 /* vendor/module-33115 */),
  d = n(51146 /* vendor/module-51146 */),
  p = n(33770 /* vendor/module-33770 */),
  f = n(83612 /* vendor/module-83612 */),
  h = n(51909 /* vendor/module-51909 */),
  m = n(83838 /* vendor/module-83838 */),
  g = n(94661 /* vendor/module-94661 */),
  y = n(87057 /* vendor/module-87057 */);
t.MenuSubmenuTrigger = a.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: o,
      label: v,
      id: b,
      nativeButton: S = !1,
      openOnHover: _ = !0,
      delay: x = 100,
      closeDelay: w = 0,
      disabled: E = !1,
      ...T
    } = e,
    k = (0, p.useCompositeListItem)({ label: v }),
    C = (0, m.useMenuPositionerContext)(),
    { store: I } = (0, c.useMenuRootContext)(),
    A = (0, u.useBaseUiId)(b),
    O = I.useState("open"),
    R = I.useState("floatingRootContext"),
    M = I.useState("floatingTreeRoot"),
    P = I.useState("triggerPopupId", A),
    N = (0, g.useTriggerRegistration)(A, I),
    D = a.useCallback(
      (e) => {
        const t = N(e);
        return (
          null !== e &&
            I.select("open") &&
            null == I.select("activeTriggerId") &&
            I.update({
              activeTriggerId: A,
              activeTriggerElement: e,
              closeDelay: w,
            }),
          t
        );
      },
      [N, w, I, A],
    ),
    j = a.useRef(null),
    L = a.useCallback(
      (e) => {
        (j.current = e), I.set("activeTriggerElement", e);
      },
      [I],
    ),
    F = (0, y.useMenuSubmenuRootContext)();
  if (!F?.parentMenu) throw new Error((0, i.default)(37));
  I.useSyncedValue("closeDelay", w);
  const U = F.parentMenu,
    B = I.useState("disabled"),
    z = U.useState("disabled"),
    H = E || B || z,
    V = U.useState("itemProps"),
    q = U.useState("isActive", k.index),
    G = a.useMemo(
      () => ({
        type: "submenu-trigger",
        setActive() {
          U.select("highlightItemOnHover") && U.set("activeIndex", k.index);
        },
      }),
      [U, k.index],
    ),
    { getItemProps: W, itemRef: $ } = (0, f.useMenuItem)({
      closeOnClick: !1,
      disabled: H,
      highlighted: q,
      id: A,
      store: I,
      typingRef: U.context.typingRef,
      nativeButton: S,
      itemMetadata: G,
      nodeId: C?.context.nodeId,
    }),
    Y = I.useState("hoverEnabled"),
    K = (0, l.useHoverReferenceInteraction)(R, {
      enabled: Y && _ && !H,
      handleClose: (0, l.safePolygon)({ blockPointerEvents: !0 }),
      mouseOnly: !0,
      move: !0,
      restMs: x,
      delay: { open: x, close: w },
      shouldOpen: x > 0 ? () => U.select("allowMouseEnter") : void 0,
      triggerElementRef: j,
      externalTree: M,
      isClosing: () => "ending" === I.select("transitionStatus"),
    }),
    Z =
      (0, l.useClick)(R, {
        enabled: !H,
        event: "mousedown",
        toggle: !_,
        ignoreMouse: _,
        stickIfOpen: !1,
      }).reference ?? s.EMPTY_OBJECT,
    Q = I.useState("triggerProps", !0);
  delete Q.id;
  const J = { disabled: H, highlighted: q, open: O };
  return (0, h.useRenderElement)("div", e, {
    state: J,
    stateAttributesMapping: d.triggerOpenStateMapping,
    props: [
      Z,
      K,
      Q,
      V,
      {
        "aria-controls": P,
        tabIndex: O || q ? 0 : -1,
        onBlur() {
          q && U.set("activeIndex", null);
        },
      },
      T,
      W,
    ],
    ref: [t, k.ref, $, D, L],
  });
});
