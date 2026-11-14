// vendor/module-68300.js — webpack module 68300
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxChipRemove = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(32118 /* vendor/module-32118 */),
  l = n(47870 /* vendor/module-47870 */),
  c = n(63917 /* vendor/module-63917 */),
  u = n(65200 /* vendor/module-65200 */),
  d = n(36826 /* vendor/module-36826 */),
  p = n(22877 /* vendor/module-22877 */),
  f = n(82063 /* vendor/module-82063 */),
  h = n(68323 /* vendor/module-68323 */);
t.ComboboxChipRemove = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      disabled: o = !1,
      nativeButton: m = !0,
      style: g,
      ...y
    } = e,
    v = (0, s.useComboboxRootContext)(),
    { index: b } = (0, l.useComboboxChipContext)(),
    S = (0, i.useStore)(v, d.selectors.disabled),
    _ = (0, i.useStore)(v, d.selectors.readOnly),
    x = (0, i.useStore)(v, d.selectors.selectedValue),
    w = (0, i.useStore)(v, d.selectors.isItemEqualToValue),
    E = S || o,
    { buttonRef: T, getButtonProps: k } = (0, c.useButton)({
      native: m,
      disabled: E || _,
      focusableWhenDisabled: !0,
    }),
    C = { disabled: E };
  function I(e) {
    const t = (0, p.createChangeEventDetails)(
      f.REASONS.chipRemovePress,
      e.nativeEvent,
    );
    return (
      (function (e) {
        const t = v.state.activeIndex;
        if (null == t) return;
        const n = (0, h.findItemIndex)(v.state.valuesRef.current, e, w);
        -1 !== n &&
          t === n &&
          v.state.setIndices({
            activeIndex: null,
            type: v.state.keyboardActiveRef.current ? "keyboard" : "pointer",
          });
      })(x[b]),
      v.state.setSelectedValue(
        x.filter((e, t) => t !== b),
        t,
      ),
      v.state.inputRef.current?.focus(),
      t
    );
  }
  return (0, a.useRenderElement)("button", e, {
    ref: [t, T],
    state: C,
    props: [
      {
        tabIndex: -1,
        onMouseDown(e) {
          e.preventDefault();
        },
        onClick(e) {
          E || _ || I(e).isPropagationAllowed || e.stopPropagation();
        },
        onKeyDown(e) {
          E ||
            _ ||
            ("Enter" !== e.key && " " !== e.key) ||
            I(e).isPropagationAllowed ||
            (0, u.stopEvent)(e);
        },
      },
      y,
      k,
    ],
  });
});
