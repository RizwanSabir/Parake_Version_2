// app/components/switch-root.js — webpack module 15157
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SwitchRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(95836 /* vendor/module-95836 */),
  a = n(12772 /* vendor/module-12772 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(38602 /* vendor/module-38602 */),
  c = n(38340 /* vendor/module-38340 */),
  u = n(854 /* vendor/module-854 */),
  d = n(51909 /* vendor/module-51909 */),
  p = n(55327 /* vendor/module-55327 */),
  f = n(33115 /* vendor/module-33115 */),
  h = n(63917 /* vendor/module-63917 */),
  m = n(67886 /* vendor/module-67886 */),
  g = n(81580 /* vendor/module-81580 */),
  y = n(62527 /* vendor/module-62527 */),
  v = n(85326 /* vendor/module-85326 */),
  b = n(77982 /* vendor/module-77982 */),
  S = n(83470 /* vendor/module-83470 */),
  _ = n(22835 /* vendor/module-22835 */),
  x = n(62429 /* vendor/module-62429 */),
  w = n(22877 /* vendor/module-22877 */),
  E = n(82063 /* vendor/module-82063 */),
  T = n(24422 /* vendor/module-24422 */),
  k = n(31085 /* vendor/module-31085 */);
t.SwitchRoot = o.forwardRef(function (e, t) {
  const {
      checked: n,
      className: r,
      defaultChecked: C,
      "aria-labelledby": I,
      form: A,
      id: O,
      inputRef: R,
      name: M,
      nativeButton: P = !1,
      onCheckedChange: N,
      readOnly: D = !1,
      required: j = !1,
      disabled: L = !1,
      render: F,
      uncheckedValue: U,
      value: B,
      style: z,
      ...H
    } = e,
    { clearErrors: V } = (0, b.useFormContext)(),
    {
      state: q,
      setTouched: G,
      setDirty: W,
      validityData: $,
      setFilled: Y,
      setFocused: K,
      validationMode: Z,
      disabled: Q,
      name: J,
      validation: X,
    } = (0, y.useFieldRootContext)(),
    { labelId: ee } = (0, S.useLabelableContext)(),
    te = Q || L,
    ne = J ?? M,
    re = o.useRef(null),
    oe = (0, a.useMergedRefs)(re, R, X.inputRef),
    ie = o.useRef(null),
    ae = (0, f.useBaseUiId)(),
    se = (0, x.useLabelableId)({
      id: O,
      implicit: !1,
      controlRef: ie,
    }),
    le = P ? void 0 : se,
    [ce, ue] = (0, i.useControlled)({
      controlled: n,
      default: Boolean(C),
      name: "Switch",
      state: "checked",
    });
  (0, v.useRegisterFieldControl)(ie, ae, ce, void 0, !te, M),
    (0, s.useIsoLayoutEffect)(() => {
      re.current && Y(re.current.checked);
    }, [re, Y]),
    (0, T.useValueChanged)(ce, () => {
      V(ne), W(ce !== $.initialValue), Y(ce), X.change(ce);
    });
  const { getButtonProps: de, buttonRef: pe } = (0, h.useButton)({
      disabled: te,
      native: P,
    }),
    fe = (0, _.useAriaLabelledBy)(I, ee, re, !P, le),
    he = {
      id: P ? se : ae,
      role: "switch",
      "aria-checked": ce,
      "aria-readonly": D || void 0,
      "aria-required": j || void 0,
      "aria-labelledby": fe,
      onFocus() {
        te || K(!0);
      },
      onBlur() {
        const e = re.current;
        e && !te && (G(!0), K(!1), "onBlur" === Z && X.commit(e.checked));
      },
      onClick(e) {
        if (D || te) return;
        e.preventDefault();
        const t = re.current;
        t &&
          t.dispatchEvent(
            new ((0, u.ownerWindow)(t).PointerEvent)("click", {
              bubbles: !0,
              shiftKey: e.shiftKey,
              ctrlKey: e.ctrlKey,
              altKey: e.altKey,
              metaKey: e.metaKey,
            }),
          );
      },
    },
    me = (0, p.mergeProps)(
      {
        checked: ce,
        disabled: te,
        form: A,
        id: le,
        name: ne,
        required: j,
        style: ne ? l.visuallyHiddenInput : l.visuallyHidden,
        tabIndex: -1,
        type: "checkbox",
        "aria-hidden": !0,
        ref: oe,
        onChange(e) {
          if (e.nativeEvent.defaultPrevented) return;
          if (D) return void e.preventDefault();
          const t = e.currentTarget.checked,
            n = (0, w.createChangeEventDetails)(E.REASONS.none, e.nativeEvent);
          N?.(t, n), n.isCanceled || ue(t);
        },
        onFocus() {
          ie.current?.focus();
        },
      },
      (e) => X.getValidationProps(te, e),
      void 0 !== B ? { value: B } : c.EMPTY_OBJECT,
    ),
    ge = o.useMemo(
      () => ({
        ...q,
        checked: ce,
        disabled: te,
        readOnly: D,
        required: j,
      }),
      [q, ce, te, D, j],
    ),
    ye = (0, d.useRenderElement)("span", e, {
      state: ge,
      ref: [t, ie, pe],
      props: [he, H, de, (e) => X.getValidationProps(te, e)],
      stateAttributesMapping: g.stateAttributesMapping,
    });
  return (0, k.jsxs)(m.SwitchRootContext.Provider, {
    value: ge,
    children: [
      ye,
      !ce &&
        ne &&
        void 0 !== U &&
        (0, k.jsx)("input", {
          type: "hidden",
          form: A,
          name: ne,
          value: U,
          disabled: te,
        }),
      (0, k.jsx)("input", { ...me, suppressHydrationWarning: !0 }),
    ],
  });
});
