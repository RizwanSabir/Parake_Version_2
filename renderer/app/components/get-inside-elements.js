// app/components/get-inside-elements.js — webpack module 6245
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxPopup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(47797 /* vendor/module-47797 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(32118 /* vendor/module-32118 */),
  u = n(36826 /* vendor/module-36826 */),
  d = n(51146 /* vendor/module-51146 */),
  p = n(95350 /* vendor/module-95350 */),
  f = n(15586 /* vendor/module-15586 */),
  h = n(44306 /* vendor/module-44306 */),
  m = n(65200 /* vendor/module-65200 */),
  g = n(53469 /* vendor/module-53469 */),
  y = n(91691 /* vendor/module-91691 */),
  v = n(38458 /* vendor/module-38458 */),
  b = n(31085 /* vendor/module-31085 */);
const S = { ...d.popupStateMapping, ...h.transitionStatusMapping };
t.ComboboxPopup = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: d,
      initialFocus: h,
      finalFocus: _,
      ...x
    } = e,
    w = (0, c.useComboboxRootContext)(),
    E = (0, p.useComboboxPositionerContext)(),
    T = (0, c.useComboboxFloatingContext)(),
    { filteredItems: k } = (0, c.useComboboxDerivedItemsContext)(),
    C = (0, i.useStore)(w, u.selectors.mounted),
    I = (0, i.useStore)(w, u.selectors.open),
    A = (0, i.useStore)(w, u.selectors.openMethod),
    O = (0, i.useStore)(w, u.selectors.transitionStatus),
    R = (0, i.useStore)(w, u.selectors.inputInsidePopup),
    M = (0, i.useStore)(w, u.selectors.inputElement),
    P = (0, i.useStore)(w, u.selectors.modal),
    N = (0, i.useStore)(w, u.selectors.id),
    D = 0 === k.length,
    j = x.id ?? (R ? (0, v.getComboboxPopupId)(N) : void 0);
  (0, a.useIsoLayoutEffect)(
    () => (
      w.set("popupId", w.state.popupRef.current?.id || j),
      () => {
        w.set("popupId", void 0);
      }
    ),
    [w, j],
  ),
    (0, f.useOpenChangeComplete)({
      open: I,
      ref: w.state.popupRef,
      onComplete() {
        I && w.state.onOpenChangeComplete(!0);
      },
    });
  const L = {
      open: I,
      side: E.side,
      align: E.align,
      anchorHidden: E.anchorHidden,
      transitionStatus: O,
      empty: D,
    },
    F = (0, l.useRenderElement)("div", e, {
      state: L,
      ref: [t, w.state.popupRef],
      props: [
        {
          id: j,
          role: R ? "dialog" : "presentation",
          tabIndex: -1,
          onFocus(e) {
            const t = (0, m.getTarget)(e.nativeEvent);
            "touch" === A ||
              (!(0, m.contains)(w.state.listElement, t) &&
                t !== e.currentTarget) ||
              w.state.inputRef.current?.focus();
          },
        },
        (0, g.getDisabledMountTransitionStyles)(O),
        x,
      ],
      stateAttributesMapping: S,
    }),
    U =
      void 0 === h
        ? !!R && ((e) => ("touch" === e ? w.state.popupRef.current : M))
        : h;
  let B;
  B = null != _ ? _ : !!R && void 0;
  const z = !R || P;
  return (0, b.jsx)(s.FloatingFocusManager, {
    context: T,
    disabled: !C,
    modal: z,
    openInteractionType: A,
    initialFocus: U,
    returnFocus: B,
    getInsideElements: () => [
      w.state.startDismissRef.current,
      w.state.endDismissRef.current,
    ],
    children: (0, b.jsxs)(o.Fragment, {
      children: [
        F,
        z &&
          (0, b.jsx)(y.ComboboxInternalDismissButton, {
            ref: w.state.endDismissRef,
          }),
      ],
    }),
  });
});
