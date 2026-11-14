// app/components/radio-root.js — webpack module 37219
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.RadioRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(12772 /* vendor/module-12772 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(4674 /* vendor/module-4674 */),
  l = n(38602 /* vendor/module-38602 */),
  c = n(38340 /* vendor/module-38340 */),
  u = n(854 /* vendor/module-854 */),
  d = n(22877 /* vendor/module-22877 */),
  p = n(82063 /* vendor/module-82063 */),
  f = n(75224 /* vendor/module-75224 */),
  h = n(40799 /* vendor/module-40799 */),
  m = n(33115 /* vendor/module-33115 */),
  g = n(51909 /* vendor/module-51909 */),
  y = n(63917 /* vendor/module-63917 */),
  v = n(8647 /* vendor/module-8647 */),
  b = n(79504 /* vendor/module-79504 */),
  S = n(62527 /* vendor/module-62527 */),
  _ = n(61634 /* vendor/module-61634 */),
  x = n(83470 /* vendor/module-83470 */),
  w = n(22835 /* vendor/module-22835 */),
  E = n(62429 /* vendor/module-62429 */),
  T = n(95816 /* vendor/module-95816 */),
  k = n(75639 /* vendor/module-75639 */),
  C = n(40380 /* vendor/module-40380 */),
  I = n(31085 /* vendor/module-31085 */);
t.RadioRoot = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      disabled: A = !1,
      readOnly: O = !1,
      required: R = !1,
      "aria-labelledby": M,
      value: P,
      inputRef: N,
      nativeButton: D = !1,
      id: j,
      style: L,
      ...F
    } = e,
    U = (0, T.useRadioGroupContext)(),
    {
      disabled: B,
      readOnly: z,
      required: H,
      form: V,
      checkedValue: q,
      touched: G = !1,
      validation: W,
      name: $,
    } = U ?? {},
    Y = U?.setCheckedValue ?? f.NOOP,
    K = U?.setTouched ?? f.NOOP,
    Z = U?.registerControlRef ?? f.NOOP,
    Q = U?.registerInputRef ?? f.NOOP,
    {
      setTouched: J,
      setFilled: X,
      state: ee,
      disabled: te,
    } = (0, S.useFieldRootContext)(),
    ne = (0, _.useFieldItemContext)(),
    { labelId: re, getDescriptionProps: oe } = (0, x.useLabelableContext)(),
    ie = te || ne.disabled || B || A,
    ae = z || O,
    se = H || R,
    le = V,
    ce = U ? q === P : "" === P,
    ue = o.useRef(null),
    de = o.useRef(null),
    pe = (0, s.useStableCallback)((e) => {
      e && Z(e, ie);
    }),
    fe = (0, i.useMergedRefs)(N, de, Q);
  (0, a.useIsoLayoutEffect)(() => {
    de.current?.checked && X(!0);
  }, [X]),
    (0, a.useIsoLayoutEffect)(() => {
      de.current &&
        (ie && ce ? Q(null) : (ue.current && Z(ue.current, ie), Q(de.current)));
    }, [ce, ie, Z, Q]);
  const he = (0, m.useBaseUiId)(),
    me = (0, E.useLabelableId)({
      id: j,
      implicit: !1,
      controlRef: ue,
    }),
    ge = D ? void 0 : me,
    ye = (0, w.useAriaLabelledBy)(M, re, de, !D, ge),
    ve = {
      role: "radio",
      "aria-checked": ce,
      "aria-required": se || void 0,
      "aria-readonly": ae || void 0,
      "aria-labelledby": ye,
      [v.ACTIVE_COMPOSITE_ITEM]: ce ? "" : void 0,
      id: D ? me : he,
      onKeyDown(e) {
        "Enter" === e.key && e.preventDefault();
      },
      onClick(e) {
        if (e.defaultPrevented || ie || ae) return;
        e.preventDefault();
        const t = de.current;
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
      onFocus(e) {
        e.defaultPrevented || ie || ae || !G || (de.current?.click(), K(!1));
      },
    },
    { getButtonProps: be, buttonRef: Se } = (0, y.useButton)({
      disabled: ie,
      native: D,
      composite: !1,
    }),
    _e = {
      type: "radio",
      ref: fe,
      form: le,
      id: ge,
      name: $,
      tabIndex: -1,
      style: $ ? l.visuallyHiddenInput : l.visuallyHidden,
      "aria-hidden": !0,
      ...(void 0 !== P ? { value: (0, k.serializeValue)(P) } : c.EMPTY_OBJECT),
      disabled: ie,
      checked: ce,
      required: se,
      readOnly: ae,
      onChange(e) {
        if (e.nativeEvent.defaultPrevented) return;
        if (ie || ae || void 0 === P) return;
        const t = (0, d.createChangeEventDetails)(
          p.REASONS.none,
          e.nativeEvent,
        );
        Y(P, t), t.isCanceled || J(!0);
      },
      onFocus() {
        ue.current?.focus();
      },
    },
    xe = o.useMemo(
      () => ({
        ...ee,
        required: se,
        disabled: ie,
        readOnly: ae,
        checked: ce,
      }),
      [ee, ie, ae, ce, se],
    ),
    we = xe,
    Ee = void 0 !== U,
    Te = [t, ue, Se, pe],
    ke = [
      ve,
      F,
      be,
      oe,
      W ? (e) => W.getValidationProps(ie, e) : c.EMPTY_OBJECT,
    ],
    Ce = (0, g.useRenderElement)("span", e, {
      enabled: !Ee,
      state: xe,
      ref: Te,
      props: ke,
      stateAttributesMapping: h.stateAttributesMapping,
    });
  return (0, I.jsxs)(C.RadioRootContext.Provider, {
    value: we,
    children: [
      Ee
        ? (0, I.jsx)(b.CompositeItem, {
            tag: "span",
            render: n,
            className: r,
            style: L,
            state: xe,
            refs: Te,
            props: ke,
            stateAttributesMapping: h.stateAttributesMapping,
          })
        : Ce,
      (0, I.jsx)("input", { ..._e, suppressHydrationWarning: !0 }),
    ],
  });
});
