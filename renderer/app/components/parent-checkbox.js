// app/components/parent-checkbox.js — webpack module 1861
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PARENT_CHECKBOX = t.CheckboxRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(38340 /* vendor/module-38340 */),
  a = n(95836 /* vendor/module-95836 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(12772 /* vendor/module-12772 */),
  c = n(16843 /* vendor/module-16843 */),
  u = n(38602 /* vendor/module-38602 */),
  d = n(854 /* vendor/module-854 */),
  p = n(29043 /* vendor/module-29043 */),
  f = n(75224 /* vendor/module-75224 */),
  h = n(32514 /* vendor/module-32514 */),
  m = n(51909 /* vendor/module-51909 */),
  g = n(33115 /* vendor/module-33115 */),
  y = n(55327 /* vendor/module-55327 */),
  v = n(87782 /* vendor/module-87782 */),
  b = n(62527 /* vendor/module-62527 */),
  S = n(85326 /* vendor/module-85326 */),
  _ = n(61634 /* vendor/module-61634 */),
  x = n(77982 /* vendor/module-77982 */),
  w = n(83470 /* vendor/module-83470 */),
  E = n(22835 /* vendor/module-22835 */),
  T = n(26028 /* vendor/module-26028 */),
  k = n(54014 /* vendor/module-54014 */),
  C = n(22877 /* vendor/module-22877 */),
  I = n(82063 /* vendor/module-82063 */),
  A = n(24422 /* vendor/module-24422 */),
  O = n(31085 /* vendor/module-31085 */);
const R = (t.PARENT_CHECKBOX = "data-parent");
t.CheckboxRoot = o.forwardRef(function (e, t) {
  const {
      checked: n,
      className: r,
      defaultChecked: M = !1,
      "aria-labelledby": P,
      disabled: N = !1,
      form: D,
      id: j,
      indeterminate: L = !1,
      inputRef: F,
      name: U,
      onCheckedChange: B,
      parent: z = !1,
      readOnly: H = !1,
      render: V,
      required: q = !1,
      uncheckedValue: G,
      value: W,
      nativeButton: $ = !1,
      style: Y,
      ...K
    } = e,
    { clearErrors: Z } = (0, x.useFormContext)(),
    {
      disabled: Q,
      name: J,
      setDirty: X,
      setFilled: ee,
      setFocused: te,
      setTouched: ne,
      state: re,
      validationMode: oe,
      validityData: ie,
      validation: ae,
    } = (0, b.useFieldRootContext)(),
    se = (0, _.useFieldItemContext)(),
    {
      labelId: le,
      controlId: ce,
      registerControlId: ue,
      getDescriptionProps: de,
    } = (0, w.useLabelableContext)(),
    pe = (0, T.useCheckboxGroupContext)(),
    fe = pe?.parent,
    he = fe && pe.allValues,
    me = Q || se.disabled || pe?.disabled || N,
    ge = J ?? U,
    ye = W ?? ge,
    ve = (0, g.useBaseUiId)(),
    be = (0, g.useBaseUiId)();
  let Se = ce;
  he ? (Se = z ? be : `${fe.id}-${ye}`) : j && (Se = j);
  let _e = {};
  he &&
    (z
      ? (_e = pe.parent.getParentProps())
      : ye && (_e = pe.parent.getChildProps(ye)));
  const {
      checked: xe = n,
      indeterminate: we = L,
      onCheckedChange: Ee,
      ...Te
    } = _e,
    ke = pe?.value,
    Ce = pe?.setValue,
    Ie = pe?.defaultValue,
    Ae = o.useRef(null),
    Oe = (0, c.useRefWithInit)(() => Symbol("checkbox-control")),
    Re = o.useRef(!1),
    { getButtonProps: Me, buttonRef: Pe } = (0, v.useButton)({
      disabled: me,
      native: $,
    }),
    Ne = pe?.validation ?? ae,
    [De, je] = (0, a.useControlled)({
      controlled: ye && ke && !z ? ke.includes(ye) : xe,
      default: ye && Ie && !z ? Ie.includes(ye) : M,
      name: "Checkbox",
      state: "checked",
    }),
    Le = he ? Boolean(xe) : De,
    Fe = (he && we) || L;
  (0, s.useIsoLayoutEffect)(() => {
    ue !== f.NOOP && ((Re.current = !0), ue(Oe.current, Se));
  }, [Se, ue, Oe]),
    o.useEffect(() => {
      const e = Oe.current;
      return () => {
        Re.current && ue !== f.NOOP && ((Re.current = !1), ue(e, void 0));
      };
    }, [ue, Oe]),
    (0, S.useRegisterFieldControl)(Ae, ve, De, void 0, !pe && !me, U);
  const Ue = o.useRef(null),
    Be = (0, l.useMergedRefs)(F, Ue, Ne.inputRef, Ne.registerInput),
    ze = (0, E.useAriaLabelledBy)(P, le, Ue, !$, Se ?? void 0);
  (0, s.useIsoLayoutEffect)(() => {
    Ue.current && ((Ue.current.indeterminate = Fe), De && ee(!0));
  }, [De, Fe, ee]),
    (0, A.useValueChanged)(De, () => {
      pe || (Z(ge), ee(De), X(De !== ie.initialValue), Ne.change(De));
    });
  const He = (0, y.mergeProps)(
    {
      checked: De,
      disabled: me,
      form: D,
      name: z ? void 0 : ge,
      id: $ ? void 0 : (Se ?? void 0),
      required: q,
      ref: Be,
      style: ge ? u.visuallyHiddenInput : u.visuallyHidden,
      tabIndex: -1,
      type: "checkbox",
      "aria-hidden": !0,
      onChange(e) {
        if (e.nativeEvent.defaultPrevented) return;
        if (H) return void e.preventDefault();
        const t = e.currentTarget.checked,
          n = (0, C.createChangeEventDetails)(I.REASONS.none, e.nativeEvent);
        if (
          (B?.(t, n),
          !n.isCanceled &&
            (Ee?.(t, n), !n.isCanceled && (je(t), ye && ke && Ce && !z && !he)))
        ) {
          const e = t ? [...ke, ye] : ke.filter((e) => e !== ye);
          Ce(e, n);
        }
      },
      onFocus() {
        Ae.current?.focus();
      },
    },
    void 0 !== W ? { value: (pe ? De && W : W) || "" } : i.EMPTY_OBJECT,
    de,
    (e) => Ne.getValidationProps(me, e),
  );
  o.useEffect(() => {
    if (!fe || !ye) return;
    const e = fe.disabledStatesRef.current;
    return (
      e.set(ye, me),
      () => {
        e.delete(ye);
      }
    );
  }, [fe, me, ye]);
  const Ve = o.useMemo(
      () => ({
        ...re,
        checked: Le,
        disabled: me,
        readOnly: H,
        required: q,
        indeterminate: Fe,
      }),
      [re, Le, me, H, q, Fe],
    ),
    qe = (0, h.useStateAttributesMapping)(Ve),
    Ge = (0, m.useRenderElement)("span", e, {
      state: Ve,
      ref: [Pe, Ae, t, pe?.registerControlRef],
      props: [
        {
          id: $ ? (Se ?? void 0) : ve,
          role: "checkbox",
          "aria-checked": Fe ? "mixed" : Le,
          "aria-readonly": H || void 0,
          "aria-required": q || void 0,
          "aria-labelledby": ze,
          [R]: z ? "" : void 0,
          onFocus() {
            me || te(!0);
          },
          onBlur() {
            const e = Ue.current;
            e &&
              (ne(!0),
              te(!1),
              "onBlur" === oe && Ne.commit(pe ? ke : e.checked));
          },
          onKeyDown(e) {
            if ("Enter" !== e.key) return;
            if ((e.preventBaseUIHandler(), e.defaultPrevented)) return;
            const t = Ue.current?.form ?? null,
              n = e.currentTarget,
              r = e.nativeEvent,
              o = e.preventDefault,
              i = r.preventDefault;
            let a = !1;
            (e.preventDefault = () => {
              (a = !0), o.call(e);
            }),
              (r.preventDefault = () => {
                (a = !0), i.call(r);
              }),
              i.call(r),
              (0, d.ownerWindow)(n).queueMicrotask(() => {
                (e.preventDefault = o),
                  (r.preventDefault = i),
                  a || (0, p.getDefaultFormSubmitter)(t)?.click();
              });
          },
          onClick(e) {
            if (H || me) return;
            e.preventDefault();
            const t = Ue.current;
            t &&
              t.dispatchEvent(
                new ((0, d.ownerWindow)(t).PointerEvent)("click", {
                  bubbles: !0,
                  shiftKey: e.shiftKey,
                  ctrlKey: e.ctrlKey,
                  altKey: e.altKey,
                  metaKey: e.metaKey,
                }),
              );
          },
        },
        K,
        Te,
        Me,
        de,
        (e) => Ne.getValidationProps(me, e),
      ],
      stateAttributesMapping: qe,
    });
  return (0, O.jsxs)(k.CheckboxRootContext.Provider, {
    value: Ve,
    children: [
      Ge,
      !De &&
        !pe &&
        ge &&
        !z &&
        void 0 !== G &&
        (0, O.jsx)("input", {
          type: "hidden",
          form: D,
          name: ge,
          value: G,
          disabled: me,
        }),
      (0, O.jsx)("input", { ...He, suppressHydrationWarning: !0 }),
    ],
  });
});
