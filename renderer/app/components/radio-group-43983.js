// app/components/radio-group-43983.js — webpack module 43983
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.RadioGroup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(95836 /* vendor/module-95836 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(33115 /* vendor/module-33115 */),
  l = n(65200 /* vendor/module-65200 */),
  c = n(30197 /* vendor/module-30197 */),
  u = n(79216 /* vendor/module-79216 */),
  d = n(62527 /* vendor/module-62527 */),
  p = n(85326 /* vendor/module-85326 */),
  f = n(41128 /* vendor/module-41128 */),
  h = n(81146 /* vendor/module-81146 */),
  m = n(77982 /* vendor/module-77982 */),
  g = n(83470 /* vendor/module-83470 */),
  y = n(24422 /* vendor/module-24422 */),
  v = n(95816 /* vendor/module-95816 */),
  b = n(31085 /* vendor/module-31085 */);
const S = [c.SHIFT];
t.RadioGroup = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      disabled: c,
      readOnly: _,
      required: x,
      onValueChange: w,
      value: E,
      defaultValue: T,
      form: k,
      name: C,
      inputRef: I,
      id: A,
      style: O,
      ...R
    } = e,
    {
      setTouched: M,
      setFocused: P,
      validationMode: N,
      name: D,
      disabled: j,
      state: L,
      validation: F,
      setDirty: U,
      setFilled: B,
      validityData: z,
    } = (0, d.useFieldRootContext)(),
    { labelId: H } = (0, g.useLabelableContext)(),
    { clearErrors: V } = (0, m.useFormContext)(),
    q = (0, h.useFieldsetRootContext)(!0),
    G = j || c,
    W = D ?? C,
    $ = (0, s.useBaseUiId)(A),
    [Y, K] = (0, i.useControlled)({
      controlled: E,
      default: T,
      name: "RadioGroup",
      state: "value",
    }),
    [Z, Q] = o.useState(!1),
    J = (0, a.useStableCallback)((e, t) => {
      w?.(e, t), t.isCanceled || K(e);
    }),
    X = o.useRef(null),
    ee = o.useRef(null),
    te = o.useRef(null);
  function ne(e) {
    let t;
    return (
      I && ("function" == typeof I ? (t = I(e)) : (I.current = e)),
      (ee.current = e),
      (F.inputRef.current = e),
      t
    );
  }
  const re = (0, a.useStableCallback)((e, t = !1) => {
      e &&
        (t
          ? X.current === e && (X.current = null)
          : null == X.current && (X.current = e));
    }),
    oe = (0, a.useStableCallback)((e) => {
      if (!e || e.disabled) return;
      te.current || (te.current = e);
      const t = ee.current;
      return e.checked || null == t || t.disabled ? ne(e) : void 0;
    }),
    ie = (0, a.useStableCallback)(() => {
      const e = ee.current;
      return e && !e.disabled && e.checked ? (Y ?? null) : null;
    });
  (0, p.useRegisterFieldControl)(X, $, Y ?? null, ie, !G, C),
    (0, y.useValueChanged)(Y, () => {
      V(W), U(Y !== z.initialValue), B(null != Y), F.change(Y);
      const e = te.current;
      null == Y && e && !e.disabled && ne(e);
    });
  const ae = R["aria-labelledby"] ?? H ?? q?.legendId,
    se = {
      ...L,
      disabled: G ?? !1,
      required: x ?? !1,
      readOnly: _ ?? !1,
    },
    le = o.useMemo(
      () => ({
        ...L,
        checkedValue: Y,
        disabled: G,
        form: k,
        validation: F,
        name: W,
        readOnly: _,
        registerControlRef: re,
        registerInputRef: oe,
        required: x,
        setCheckedValue: J,
        setTouched: Q,
        touched: Z,
      }),
      [Y, G, k, F, L, W, _, re, oe, x, J, Q, Z],
    ),
    ce = {
      id: A,
      role: "radiogroup",
      "aria-required": x || void 0,
      "aria-disabled": G || void 0,
      "aria-readonly": _ || void 0,
      "aria-labelledby": ae,
      onFocus() {
        P(!0);
      },
      onBlur(e) {
        (0, l.contains)(e.currentTarget, e.relatedTarget) ||
          (M(!0), P(!1), "onBlur" === N && F.commit(Y));
      },
      onKeyDownCapture(e) {
        e.key.startsWith("Arrow") && (Q(!0), P(!0));
      },
    };
  return (0, b.jsx)(v.RadioGroupContext.Provider, {
    value: le,
    children: (0, b.jsx)(u.CompositeRoot, {
      render: n,
      className: r,
      style: O,
      state: se,
      props: [ce, R, (e) => F.getValidationProps(G ?? !1, e)],
      refs: [t],
      stateAttributesMapping: f.fieldValidityMapping,
      enableHomeAndEndKeys: !1,
      modifierKeys: S,
    }),
  });
});
