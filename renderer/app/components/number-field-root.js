// app/components/number-field-root.js — webpack module 54170
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.NumberFieldRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(23504 /* vendor/module-23504 */),
  a = n(95836 /* vendor/module-95836 */),
  s = n(4674 /* vendor/module-4674 */),
  l = n(57122 /* vendor/module-57122 */),
  c = n(71740 /* vendor/module-71740 */),
  u = n(80308 /* vendor/module-80308 */),
  d = n(12772 /* vendor/module-12772 */),
  p = n(38602 /* vendor/module-38602 */),
  f = n(854 /* vendor/module-854 */),
  h = n(87177 /* vendor/module-87177 */),
  m = n(65200 /* vendor/module-65200 */),
  g = n(46007 /* vendor/module-46007 */),
  y = n(62527 /* vendor/module-62527 */),
  v = n(77982 /* vendor/module-77982 */),
  b = n(62429 /* vendor/module-62429 */),
  S = n(5274 /* vendor/module-5274 */),
  _ = n(51909 /* vendor/module-51909 */),
  x = n(46597 /* vendor/module-46597 */),
  w = n(82371 /* vendor/module-82371 */),
  E = n(19026 /* vendor/module-19026 */),
  T = n(22877 /* vendor/module-22877 */),
  k = n(82063 /* vendor/module-82063 */),
  C = n(31085 /* vendor/module-31085 */);
t.NumberFieldRoot = o.forwardRef(function (e, t) {
  const {
      id: n,
      min: r,
      max: I,
      smallStep: A = 0.1,
      step: O = 1,
      largeStep: R = 10,
      required: M = !1,
      disabled: P = !1,
      readOnly: N = !1,
      form: D,
      name: j,
      defaultValue: L,
      value: F,
      onValueChange: U,
      onValueCommitted: B,
      allowWheelScrub: z = !1,
      snapOnStep: H = !1,
      allowOutOfRange: V = !1,
      format: q,
      locale: G,
      render: W,
      className: $,
      inputRef: Y,
      style: K,
      ...Z
    } = e,
    {
      setDirty: Q,
      validityData: J,
      disabled: X,
      setFilled: ee,
      invalid: te,
      name: ne,
      state: re,
      validation: oe,
    } = (0, y.useFieldRootContext)(),
    { clearErrors: ie } = (0, v.useFormContext)(),
    ae = X || P,
    se = ne ?? j,
    le = "any" === O ? 1 : O,
    [ce, ue] = o.useState(!1),
    de = r ?? Number.MIN_SAFE_INTEGER,
    pe = I ?? Number.MAX_SAFE_INTEGER,
    fe = r ?? 0,
    he = q?.style,
    me = o.useRef(null),
    ge = (0, d.useMergedRefs)(Y, oe.inputRef),
    ye = (0, b.useLabelableId)({ id: n }),
    [ve, be] = (0, a.useControlled)({
      controlled: F,
      default: L,
      name: "NumberField",
      state: "value",
    }),
    Se = ve ?? null,
    _e = (0, c.useValueAsRef)(Se);
  (0, l.useIsoLayoutEffect)(() => {
    ee(null !== Se);
  }, [ee, Se]);
  const xe = (0, u.useForcedRerendering)(),
    we = (0, c.useValueAsRef)(q),
    Ee = o.useRef(!1),
    Te = (0, s.useStableCallback)((e, t) => {
      (Ee.current = !1), B?.(e, t);
    }),
    ke = o.useRef(!0),
    Ce = o.useRef(null),
    [Ie, Ae] = o.useState(() => (0, w.formatNumber)(Se, G, q)),
    [Oe, Re] = o.useState("numeric"),
    Me = (0, s.useStableCallback)(() => {
      const {
          decimal: e,
          group: t,
          currency: n,
          literal: r,
        } = (0, x.getNumberLocaleDetails)(G, q),
        o = new Set();
      x.BASE_NON_NUMERIC_SYMBOLS.forEach((e) => o.add(e)),
        e && o.add(e),
        t && (o.add(t), x.SPACE_SEPARATOR_RE.test(t) && o.add(" "));
      const i = "percent" === he || ("unit" === he && "percent" === q?.unit),
        a = "percent" === he || ("unit" === he && "permille" === q?.unit);
      return (
        i && x.PERCENTAGES.forEach((e) => o.add(e)),
        a && x.PERMILLE.forEach((e) => o.add(e)),
        "currency" === he && n && o.add(n),
        r &&
          (Array.from(r).forEach((e) => o.add(e)),
          x.SPACE_SEPARATOR_RE.test(r) && o.add(" ")),
        x.PLUS_SIGNS_WITH_ASCII.forEach((e) => o.add(e)),
        (de < 0 || V) && x.MINUS_SIGNS_WITH_ASCII.forEach((e) => o.add(e)),
        o
      );
    }),
    Pe = (0, s.useStableCallback)((e) =>
      e?.altKey ? A : e?.shiftKey ? R : le,
    ),
    Ne = (0, s.useStableCallback)((e, t) => {
      const n = t.event,
        r = t.direction,
        o =
          t.reason === k.REASONS.inputChange ||
          t.reason === k.REASONS.inputClear ||
          t.reason === k.REASONS.inputBlur ||
          t.reason === k.REASONS.inputPaste ||
          t.reason === k.REASONS.none,
        i = !V || !o,
        a = (0, E.toValidatedNumber)(e, {
          step: r ? Pe(n) * r : void 0,
          format: we.current,
          minWithDefault: de,
          maxWithDefault: pe,
          minWithZeroDefault: fe,
          snapOnStep: H,
          small: n?.altKey ?? !1,
          clamp: i,
        }),
        s = a !== Se || (o && (e !== Se || !1 === ke.current));
      if (s) {
        if ((U?.(a, t), t.isCanceled)) return !1;
        be(a), Q(a !== J.initialValue), (Ee.current = !0);
      }
      return (
        (Ce.current = a),
        ke.current && Ae((0, w.formatNumber)(a, G, q)),
        xe(),
        s
      );
    }),
    De = (0, s.useStableCallback)(
      (e, { direction: t, currentValue: n, event: r, reason: o }) => {
        const i = n ?? _e.current,
          a = r;
        return "number" != typeof i
          ? Ne(0, (0, T.createChangeEventDetails)(o, a))
          : Ne(
              i + e * t,
              (0, T.createChangeEventDetails)(o, a, void 0, {
                direction: t,
              }),
            );
      },
    );
  (0, l.useIsoLayoutEffect)(function () {
    if (!ke.current) return;
    const e = (0, w.formatNumber)(Se, G, q);
    e !== Ie && Ae(e);
  }),
    (0, l.useIsoLayoutEffect)(
      function () {
        if (!h.platform.os.ios) return;
        let e = "text";
        de >= 0 && (e = "decimal"), Re(e);
      },
      [de],
    ),
    o.useEffect(
      function () {
        const e = me.current;
        if (!ae && !N && z && e)
          return (0, i.addEventListener)(e, "wheel", function (e) {
            if (
              e.ctrlKey ||
              (0, m.activeElement)((0, f.ownerDocument)(me.current)) !==
                me.current
            )
              return;
            e.preventDefault(), (ke.current = !0);
            const t = Pe(e);
            De(t, {
              direction: e.deltaY > 0 ? -1 : 1,
              event: e,
              reason: "wheel",
            }) &&
              Te(
                Ce.current ?? _e.current,
                (0, T.createGenericEventDetails)(k.REASONS.wheel, e),
              );
          });
      },
      [z, De, ae, N, Pe, Te, Ce, _e],
    );
  const je = o.useMemo(
      () => ({
        ...re,
        disabled: ae,
        readOnly: N,
        required: M,
        value: Se,
        inputValue: Ie,
        scrubbing: ce,
      }),
      [re, ae, N, M, Se, Ie, ce],
    ),
    Le = o.useMemo(
      () => ({
        inputRef: me,
        inputValue: Ie,
        value: Se,
        minWithDefault: de,
        maxWithDefault: pe,
        disabled: ae,
        readOnly: N,
        id: ye,
        setValue: Ne,
        incrementValue: De,
        getStepAmount: Pe,
        allowInputSyncRef: ke,
        formatOptionsRef: we,
        valueRef: _e,
        lastChangedValueRef: Ce,
        hasPendingCommitRef: Ee,
        name: se,
        nameProp: j,
        required: M,
        invalid: te,
        inputMode: Oe,
        getAllowedNonNumericKeys: Me,
        min: r,
        max: I,
        setInputValue: Ae,
        locale: G,
        isScrubbing: ce,
        setIsScrubbing: ue,
        state: je,
        onValueCommitted: Te,
      }),
      [
        me,
        Ie,
        Se,
        de,
        pe,
        ae,
        N,
        ye,
        Ne,
        De,
        Pe,
        we,
        _e,
        se,
        j,
        M,
        te,
        Oe,
        Me,
        r,
        I,
        Ae,
        G,
        ce,
        je,
        Te,
      ],
    ),
    Fe = (0, _.useRenderElement)("div", e, {
      ref: t,
      state: je,
      props: Z,
      stateAttributesMapping: S.stateAttributesMapping,
    });
  return (0, C.jsxs)(g.NumberFieldRootContext.Provider, {
    value: Le,
    children: [
      Fe,
      (0, C.jsx)("input", {
        ...oe.getValidationProps(ae, {
          onFocus() {
            me.current?.focus();
          },
          onChange(e) {
            if (e.nativeEvent.defaultPrevented || ae || N) return;
            const t = e.currentTarget.valueAsNumber,
              n = Number.isNaN(t) ? null : t,
              r = (0, T.createChangeEventDetails)(
                k.REASONS.none,
                e.nativeEvent,
              );
            Ne(n, r), ie(se), oe.change(Ce.current ?? n);
          },
        }),
        ref: ge,
        type: "number",
        form: D,
        name: se,
        value: Se ?? "",
        min: r,
        max: I,
        step: O,
        disabled: ae,
        readOnly: N,
        required: M,
        "aria-hidden": !0,
        tabIndex: -1,
        style: se ? p.visuallyHiddenInput : p.visuallyHidden,
        suppressHydrationWarning: !0,
      }),
    ],
  });
});
