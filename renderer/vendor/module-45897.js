// vendor/module-45897.js — webpack module 45897
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxClear = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(32118 /* vendor/module-32118 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(36826 /* vendor/module-36826 */),
  c = n(63917 /* vendor/module-63917 */),
  u = n(62527 /* vendor/module-62527 */),
  d = n(45796 /* vendor/module-45796 */),
  p = n(44306 /* vendor/module-44306 */),
  f = n(15586 /* vendor/module-15586 */),
  h = n(22877 /* vendor/module-22877 */),
  m = n(82063 /* vendor/module-82063 */),
  g = n(51146 /* vendor/module-51146 */);
const y = {
  ...p.transitionStatusMapping,
  ...g.triggerOpenStateMapping,
};
t.ComboboxClear = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      disabled: o = !1,
      nativeButton: p = !0,
      keepMounted: g = !1,
      style: v,
      ...b
    } = e,
    { disabled: S } = (0, u.useFieldRootContext)(),
    _ = (0, a.useComboboxRootContext)(),
    x = (0, i.useStore)(_, l.selectors.selectionMode),
    w = (0, i.useStore)(_, l.selectors.disabled),
    E = (0, i.useStore)(_, l.selectors.readOnly),
    T = (0, i.useStore)(_, l.selectors.open),
    k = (0, i.useStore)(_, l.selectors.selectedValue),
    C = (0, i.useStore)(_, l.selectors.hasSelectionChips),
    I = (0, a.useComboboxInputValueContext)();
  let A = !1;
  A = "none" === x ? "" !== I : "single" === x ? null != k : C;
  const O = S || w || o,
    { buttonRef: R, getButtonProps: M } = (0, c.useButton)({
      native: p,
      disabled: O,
    }),
    {
      mounted: P,
      transitionStatus: N,
      setMounted: D,
    } = (0, d.useTransitionStatus)(A),
    j = { disabled: O, visible: A, open: T, transitionStatus: N };
  (0, f.useOpenChangeComplete)({
    open: A,
    ref: _.state.clearRef,
    onComplete() {
      A || D(!1);
    },
  });
  const L = (0, s.useRenderElement)("button", e, {
    state: j,
    ref: [t, R, _.state.clearRef],
    props: [
      {
        tabIndex: -1,
        children: "x",
        onMouseDown(e) {
          e.preventDefault();
        },
        onClick(e) {
          if (O || E) return;
          const t = _.state.keyboardActiveRef;
          _.state.setInputValue(
            "",
            (0, h.createChangeEventDetails)(
              m.REASONS.clearPress,
              e.nativeEvent,
            ),
          ),
            "none" !== x
              ? (_.state.setSelectedValue(
                  Array.isArray(k) ? [] : null,
                  (0, h.createChangeEventDetails)(
                    m.REASONS.clearPress,
                    e.nativeEvent,
                  ),
                ),
                _.state.setIndices({
                  activeIndex: null,
                  selectedIndex: null,
                  type: t.current ? "keyboard" : "pointer",
                }))
              : _.state.setIndices({
                  activeIndex: null,
                  type: t.current ? "keyboard" : "pointer",
                }),
            _.state.inputRef.current?.focus();
        },
      },
      b,
      M,
    ],
    stateAttributesMapping: y,
  });
  return g || P ? L : null;
});
