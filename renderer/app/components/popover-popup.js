// app/components/popover-popup.js — webpack module 51471
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverPopup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(81339 /* vendor/module-81339 */),
  a = n(47797 /* vendor/module-47797 */),
  s = n(27788 /* vendor/module-27788 */),
  l = n(47356 /* vendor/module-47356 */),
  c = n(51146 /* vendor/module-51146 */),
  u = n(44306 /* vendor/module-44306 */),
  d = n(15586 /* vendor/module-15586 */),
  p = n(51909 /* vendor/module-51909 */),
  f = n(82063 /* vendor/module-82063 */),
  h = n(30197 /* vendor/module-30197 */),
  m = n(75256 /* vendor/module-75256 */),
  g = n(53469 /* vendor/module-53469 */),
  y = n(38476 /* vendor/module-38476 */),
  v = n(94661 /* vendor/module-94661 */),
  b = n(31085 /* vendor/module-31085 */);
const S = { ...c.popupStateMapping, ...u.transitionStatusMapping };
t.PopoverPopup = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: c,
      initialFocus: u,
      finalFocus: _,
      ...x
    } = e,
    { store: w } = (0, s.usePopoverRootContext)(),
    E = (0, l.usePopoverPositionerContext)(),
    T = null != (0, m.useToolbarRootContext)(!0),
    { context: k, hasClosePart: C } = (0, y.useClosePartCount)(),
    I = w.useState("open"),
    A = w.useState("openMethod"),
    O = w.useState("instantType"),
    R = w.useState("transitionStatus"),
    M = w.useState("popupProps"),
    P = w.useState("titleElementId"),
    N = w.useState("descriptionElementId"),
    D = w.useState("modal"),
    j = w.useState("mounted"),
    L = w.useState("openChangeReason"),
    F = w.useState("activeTriggerElement"),
    U = w.useState("floatingRootContext"),
    B = U.useState("floatingId"),
    z = w.useState("disabled"),
    H = w.useState("openOnHover"),
    V = w.useState("closeDelay"),
    q = x.id ?? B;
  (0, d.useOpenChangeComplete)({
    open: I,
    ref: w.context.popupRef,
    onComplete() {
      I && w.context.onOpenChangeComplete?.(!0);
    },
  }),
    (0, a.useHoverFloatingInteraction)(U, {
      enabled: H && !z,
      closeDelay: V,
    });
  const G =
      void 0 === u ? (0, v.createDefaultInitialFocus)(w.context.popupRef) : u,
    W = !1 !== D && C;
  w.useSyncedValue("focusManagerModal", W);
  const $ = o.useCallback(
      (e) => {
        w.set("popupElement", e);
      },
      [w],
    ),
    Y = {
      open: I,
      side: E.side,
      align: E.align,
      instant: O,
      transitionStatus: R,
    },
    K = (0, p.useRenderElement)("div", e, {
      state: Y,
      ref: [t, w.context.popupRef, $],
      props: [
        M,
        {
          id: q,
          role: "dialog",
          ...v.FOCUSABLE_POPUP_PROPS,
          "aria-labelledby": P,
          "aria-describedby": N,
          onKeyDown(e) {
            T && h.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
          },
        },
        (0, g.getDisabledMountTransitionStyles)(R),
        x,
      ],
      stateAttributesMapping: S,
    });
  return (0, b.jsx)(a.FloatingFocusManager, {
    context: U,
    openInteractionType: A,
    modal: W,
    disabled: !j || L === f.REASONS.triggerHover,
    initialFocus: G,
    returnFocus: _,
    restoreFocus: "popup",
    previousFocusableElement: (0, i.isHTMLElement)(F) ? F : void 0,
    nextFocusableElement: w.context.triggerFocusTargetRef,
    beforeContentFocusGuardRef: w.context.beforeContentFocusGuardRef,
    children: (0, b.jsx)(y.ClosePartProvider, {
      value: k,
      children: K,
    }),
  });
});
