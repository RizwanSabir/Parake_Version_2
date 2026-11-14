// app/components/dialog-popup.js — webpack module 18587
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.DialogPopup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(47797 /* vendor/module-47797 */),
  a = n(90498 /* vendor/module-90498 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(51146 /* vendor/module-51146 */),
  c = n(44306 /* vendor/module-44306 */),
  u = n(62042 /* vendor/module-62042 */),
  d = n(90310 /* vendor/module-90310 */),
  p = n(63042 /* vendor/module-63042 */),
  f = n(15586 /* vendor/module-15586 */),
  h = n(30197 /* vendor/module-30197 */),
  m = n(94661 /* vendor/module-94661 */),
  g = n(31085 /* vendor/module-31085 */);
const y = {
  ...l.popupStateMapping,
  ...c.transitionStatusMapping,
  nestedDialogOpen: (e) =>
    e ? { [d.DialogPopupDataAttributes.nestedDialogOpen]: "" } : null,
};
t.DialogPopup = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: o,
      finalFocus: l,
      initialFocus: c,
      ...d
    } = e,
    { store: v } = (0, a.useDialogRootContext)(),
    b = v.useState("descriptionElementId"),
    S = v.useState("disablePointerDismissal"),
    _ = v.useState("floatingRootContext"),
    x = v.useState("popupProps"),
    w = v.useState("modal"),
    E = v.useState("mounted"),
    T = v.useState("nested"),
    k = v.useState("nestedOpenDialogCount"),
    C = v.useState("open"),
    I = v.useState("openMethod"),
    A = v.useState("titleElementId"),
    O = v.useState("transitionStatus"),
    R = v.useState("role"),
    M = _.useState("floatingId"),
    P = d.id ?? M;
  (0, p.useDialogPortalContext)(),
    (0, f.useOpenChangeComplete)({
      open: C,
      ref: v.context.popupRef,
      onComplete() {
        C && v.context.onOpenChangeComplete?.(!0);
      },
    });
  const N =
      void 0 === c ? (0, m.createDefaultInitialFocus)(v.context.popupRef) : c,
    D = k > 0,
    j = v.useStateSetter("popupElement"),
    L = {
      open: C,
      nested: T,
      transitionStatus: O,
      nestedDialogOpen: D,
    },
    F = (0, s.useRenderElement)("div", e, {
      state: L,
      props: [
        x,
        {
          id: P,
          "aria-labelledby": A ?? void 0,
          "aria-describedby": b ?? void 0,
          role: R,
          ...m.FOCUSABLE_POPUP_PROPS,
          hidden: !E,
          onKeyDown(e) {
            h.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
          },
          style: { [u.DialogPopupCssVars.nestedDialogs]: k },
        },
        d,
      ],
      ref: [t, v.context.popupRef, j],
      stateAttributesMapping: y,
    });
  return (0, g.jsx)(i.FloatingFocusManager, {
    context: _,
    openInteractionType: I,
    disabled: !E,
    closeOnFocusOut: !S,
    initialFocus: N,
    returnFocus: l,
    modal: !1 !== w,
    restoreFocus: "popup",
    children: F,
  });
});
