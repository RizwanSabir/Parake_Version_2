// vendor/module-10450.js — webpack module 10450
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.NumberFieldInput = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i =
    (n(23549 /* vendor/module-23549 */),
    n(77157 /* vendor/module-77157 */),
    n(57122 /* vendor/module-57122 */)),
  a = n(65200 /* vendor/module-65200 */),
  s = n(46007 /* vendor/module-46007 */),
  l = n(62527 /* vendor/module-62527 */),
  c = n(85326 /* vendor/module-85326 */),
  u = n(77982 /* vendor/module-77982 */),
  d = n(83470 /* vendor/module-83470 */),
  p = n(46597 /* vendor/module-46597 */),
  f = n(5274 /* vendor/module-5274 */),
  h = n(51909 /* vendor/module-51909 */),
  m = n(22877 /* vendor/module-22877 */),
  g = n(82371 /* vendor/module-82371 */),
  y = n(24422 /* vendor/module-24422 */),
  v = n(82063 /* vendor/module-82063 */),
  b = n(19026 /* vendor/module-19026 */);
const S = new Set([
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Tab",
  "Enter",
  "Escape",
]);
t.NumberFieldInput = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: _, ...x } = e,
    {
      allowInputSyncRef: w,
      disabled: E,
      formatOptionsRef: T,
      getAllowedNonNumericKeys: k,
      getStepAmount: C,
      id: I,
      incrementValue: A,
      inputMode: O,
      inputValue: R,
      max: M,
      min: P,
      name: N,
      nameProp: D,
      readOnly: j,
      required: L,
      setValue: F,
      state: U,
      setInputValue: B,
      locale: z,
      inputRef: H,
      value: V,
      onValueCommitted: q,
      lastChangedValueRef: G,
      hasPendingCommitRef: W,
      valueRef: $,
    } = (0, s.useNumberFieldRootContext)(),
    { clearErrors: Y } = (0, u.useFormContext)(),
    {
      validationMode: K,
      setTouched: Z,
      setFocused: Q,
      invalid: J,
      shouldValidateOnChange: X,
      validation: ee,
    } = (0, l.useFieldRootContext)(),
    { labelId: te } = (0, d.useLabelableContext)(),
    ne = o.useRef(!1),
    re = o.useRef(!1),
    oe = o.useRef(null);
  (0, c.useRegisterFieldControl)(H, I, V, void 0, !E, D),
    (0, i.useIsoLayoutEffect)(() => {
      if (null != oe.current) {
        const e = oe.current;
        (oe.current = null), H.current?.setSelectionRange(e, e);
      }
    }),
    (0, y.useValueChanged)(V, () => {
      Y(N), !re.current || X() ? ee.change(V) : (re.current = !1);
    });
  const ie = {
    id: I,
    required: L,
    disabled: E,
    readOnly: j,
    inputMode: O,
    value: R,
    type: "text",
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: "false",
    "aria-roledescription": "Number field",
    "aria-invalid": !(E || !J) || void 0,
    "aria-labelledby": te,
    suppressHydrationWarning: !0,
    onFocus(e) {
      if (e.defaultPrevented || E) return;
      if ((Q(!0), ne.current)) return;
      ne.current = !0;
      const t = e.currentTarget,
        n = t.value.length;
      t.setSelectionRange(n, n);
    },
    onBlur(e) {
      if (e.defaultPrevented || E) return;
      if ((Z(!0), Q(!1), j)) return;
      const t = !w.current,
        n = W.current;
      if (((w.current = !0), "" === R.trim())) {
        const r = (0, m.createChangeEventDetails)(
          v.REASONS.inputClear,
          e.nativeEvent,
        );
        if ((F(null, r), r.isCanceled)) return;
        return (
          "onBlur" === K && ee.commit(null),
          void (
            (t || n || null !== V) &&
            q(
              null,
              (0, m.createGenericEventDetails)(
                v.REASONS.inputClear,
                e.nativeEvent,
              ),
            )
          )
        );
      }
      const r = T.current,
        o = (0, p.parseNumber)(R, z, r);
      if (null === o) return;
      const i = (0, b.hasNumberFormatRoundingOptions)(r);
      let a;
      a = t || i ? (i ? (0, b.removeFloatingPointErrors)(o, r) : o) : V;
      const s = (0, m.createGenericEventDetails)(
          v.REASONS.inputBlur,
          e.nativeEvent,
        ),
        l = V !== a,
        c = t || l || n;
      let u = a;
      if (l) {
        const t = (0, m.createChangeEventDetails)(
          v.REASONS.inputBlur,
          e.nativeEvent,
        );
        if (((re.current = !0), F(a, t), t.isCanceled))
          return void (re.current = !1);
        (u = G.current ?? a), u === V && (re.current = !1);
      }
      "onBlur" === K && ee.commit(u), c && q(u, s);
      const d = (0, g.formatNumber)(u, z, r);
      R !== d && B(d);
    },
    onChange(e) {
      if (e.nativeEvent.defaultPrevented) return;
      w.current = !1;
      const t = e.currentTarget.value;
      if ("" === t.trim())
        return (
          B(t),
          void F(
            null,
            (0, m.createChangeEventDetails)(
              v.REASONS.inputClear,
              e.nativeEvent,
            ),
          )
        );
      const n = k();
      if (
        !Array.from(t).every(
          (e) =>
            (0, p.isNumeralChar)(e) ||
            p.ANY_MINUS_DETECT_RE.test(e) ||
            n.has(e),
        )
      )
        return;
      const r = (0, p.parseNumber)(t, z, T.current);
      B(t),
        null !== r &&
          F(
            r,
            (0, m.createChangeEventDetails)(
              v.REASONS.inputChange,
              e.nativeEvent,
            ),
          );
    },
    onKeyDown(e) {
      if (e.defaultPrevented || j || E) return;
      const t = e.nativeEvent,
        n = !w.current,
        r = k();
      let o = r.has(e.key);
      const {
          decimal: i,
          currency: s,
          percentSign: l,
        } = (0, p.getNumberLocaleDetails)(z, T.current),
        c = e.currentTarget.selectionStart,
        u = e.currentTarget.selectionEnd,
        d = 0 === c && u === R.length,
        f = (e) => null != c && null != u && e >= c && e < u;
      [
        [p.ANY_MINUS_DETECT_RE, p.ANY_MINUS_RE],
        [p.ANY_PLUS_DETECT_RE, p.ANY_PLUS_RE],
      ].forEach(([t, n]) => {
        if (t.test(e.key) && Array.from(r).some((e) => t.test(e))) {
          const e = R.search(n),
            t = -1 !== e && f(e);
          o =
            !(p.ANY_MINUS_DETECT_RE.test(R) || p.ANY_PLUS_DETECT_RE.test(R)) ||
            d ||
            t;
        }
      }),
        [i, s, l].forEach((t) => {
          if (e.key === t) {
            const e = R.indexOf(t),
              n = f(e);
            o = !R.includes(t) || d || n;
          }
        });
      const h = S.has(e.key),
        g = "ArrowUp" === e.key || "ArrowDown" === e.key;
      if (
        229 === e.which ||
        (e.altKey && !g) ||
        e.ctrlKey ||
        e.metaKey ||
        o ||
        (0, p.isNumeralChar)(e.key) ||
        h
      )
        return;
      const y = "Home" === e.key && null != P,
        b = "End" === e.key && null != M;
      if (e.key.length > 1 && !g && !y && !b) return;
      const _ = n ? (0, p.parseNumber)(R, z, T.current) : null,
        x = C(e);
      (0, a.stopEvent)(e);
      const I = (0, m.createGenericEventDetails)(v.REASONS.keyboard, t);
      let O = !1;
      "ArrowUp" === e.key || "ArrowDown" === e.key
        ? ((w.current = !0),
          n || (G.current = $.current),
          (O = A(x, {
            direction: "ArrowUp" === e.key ? 1 : -1,
            currentValue: _,
            event: t,
            reason: v.REASONS.keyboard,
          })))
        : y
          ? ((w.current = !0),
            (O = F(P, (0, m.createChangeEventDetails)(v.REASONS.keyboard, t))))
          : b &&
            ((w.current = !0),
            (O = F(M, (0, m.createChangeEventDetails)(v.REASONS.keyboard, t)))),
        O && q(G.current ?? $.current, I);
    },
    onPaste(e) {
      if (e.defaultPrevented || j || E) return;
      let t = "";
      try {
        t = e.clipboardData?.getData("text/plain") ?? "";
      } catch {
        return;
      }
      e.preventDefault();
      const n = e.currentTarget,
        r = n.selectionStart ?? R.length,
        o = n.selectionEnd ?? R.length,
        i = R.slice(0, r) + t + R.slice(o),
        a = (0, p.parseNumber)(i, z, T.current);
      null !== a &&
        ((w.current = !1),
        (oe.current = r + t.length),
        F(
          a,
          (0, m.createChangeEventDetails)(v.REASONS.inputPaste, e.nativeEvent),
        ),
        B(i));
    },
  };
  return (0, h.useRenderElement)("input", e, {
    ref: [t, H],
    state: U,
    props: [ie, x, (e) => ee.getValidationProps(E, e)],
    stateAttributesMapping: f.stateAttributesMapping,
  });
});
