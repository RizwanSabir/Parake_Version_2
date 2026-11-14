// app/components/slider-thumb.js — webpack module 3097
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SliderThumb = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(12772 /* vendor/module-12772 */),
  l = n(38602 /* vendor/module-38602 */),
  c = n(854 /* vendor/module-854 */),
  u = n(41153 /* vendor/module-41153 */),
  d = n(82371 /* vendor/module-82371 */),
  p = n(55327 /* vendor/module-55327 */),
  f = n(33115 /* vendor/module-33115 */),
  h = n(16504 /* vendor/module-16504 */),
  m = n(51909 /* vendor/module-51909 */),
  g = n(10252 /* vendor/module-10252 */),
  y = n(30197 /* vendor/module-30197 */),
  v = n(33770 /* vendor/module-33770 */),
  b = n(96092 /* vendor/module-96092 */),
  S = n(22728 /* vendor/module-22728 */),
  _ = n(62527 /* vendor/module-62527 */),
  x = n(80475 /* vendor/module-80475 */),
  w = n(62429 /* vendor/module-62429 */),
  E = n(65759 /* vendor/module-65759 */),
  T = n(75961 /* vendor/module-75961 */),
  k = n(8997 /* vendor/module-8997 */),
  C = n(16754 /* vendor/module-16754 */),
  I = n(12758 /* vendor/module-12758 */),
  A = n(46808 /* vendor/module-46808 */),
  O = n(69640 /* vendor/module-69640 */),
  R = n(31085 /* vendor/module-31085 */);
const M = new Set([...y.COMPOSITE_KEYS, y.PAGE_UP, y.PAGE_DOWN]);
function P(e, t, n, r) {
  if (!(t < 0))
    return 2 === e.length
      ? 0 === t
        ? `${(0, d.formatNumber)(e[t], r, n)} start range`
        : `${(0, d.formatNumber)(e[t], r, n)} end range`
      : n
        ? (0, d.formatNumber)(e[t], r, n)
        : void 0;
}
function N(e, t, n, r, o) {
  const i = Number(
    (1 === n ? e + t : e - t).toFixed(
      Math.max(
        (0, k.getDecimalPrecision)(e),
        (0, k.getDecimalPrecision)(t),
        (0, k.getDecimalPrecision)(r),
      ),
    ),
  );
  return (0, u.clamp)(i, r, o);
}
t.SliderThumb = o.forwardRef(function (e, t) {
  const {
      render: n,
      children: r,
      className: u,
      "aria-describedby": D,
      "aria-label": j,
      "aria-labelledby": L,
      "aria-valuetext": F,
      disabled: U = !1,
      getAriaLabel: B,
      getAriaValueText: z,
      id: H,
      index: V,
      inputRef: q,
      onBlur: G,
      onFocus: W,
      onKeyDown: $,
      tabIndex: Y,
      style: K,
      ...Z
    } = e,
    { nonce: Q } = (0, S.useCSPContext)(),
    J = (0, f.useBaseUiId)(H),
    {
      active: X,
      lastUsedThumbIndex: ee,
      controlRef: te,
      disabled: ne,
      validation: re,
      formatOptionsRef: oe,
      handleInputChange: ie,
      inset: ae,
      labelId: se,
      largeStep: le,
      locale: ce,
      max: ue,
      min: de,
      minStepsBetweenValues: pe,
      form: fe,
      name: he,
      orientation: me,
      pressedInputRef: ge,
      pressedThumbCenterOffsetRef: ye,
      pressedThumbIndexRef: ve,
      renderBeforeHydration: be,
      setActive: Se,
      setIndicatorPosition: _e,
      state: xe,
      step: we,
      values: Ee,
    } = (0, C.useSliderRootContext)(),
    Te = (0, b.useDirection)(),
    ke = U || ne,
    Ce = Ee.length > 1,
    Ie = "vertical" === me,
    Ae = "rtl" === Te,
    {
      setTouched: Oe,
      setFocused: Re,
      validationMode: Me,
    } = (0, _.useFieldRootContext)(),
    Pe = o.useRef(null),
    Ne = o.useRef(null),
    De = o.useRef(!1),
    je = (0, f.useBaseUiId)(),
    Le = (0, w.useLabelableId)(),
    Fe = Ce ? je : Le,
    Ue = o.useMemo(() => ({ inputId: Fe }), [Fe]),
    { ref: Be, index: ze } = (0, v.useCompositeListItem)({
      metadata: Ue,
    }),
    He = Ce ? (V ?? ze) : 0,
    Ve = He === Ee.length - 1,
    qe = Ee[He],
    Ge = (0, g.valueToPercent)(qe, de, ue),
    [We, $e] = o.useState(),
    Ye = (0, h.useIsHydrating)(),
    Ke = ee >= 0 && ee < Ee.length ? ee : -1,
    Ze = (0, i.useStableCallback)(() => {
      const e = te.current,
        t = Pe.current;
      if (!e || !t) return;
      const n = t.getBoundingClientRect(),
        r = e.getBoundingClientRect(),
        o = Ie ? "height" : "width",
        i = r[o] - n[o],
        a = ((n[o] / 2 + (i * Ge) / 100) / r[o]) * 100,
        s = Number.isFinite(a) ? a : void 0;
      $e(s), 0 === He ? _e((e) => [s, e[1]]) : Ve && _e((e) => [e[0], s]);
    });
  (0, a.useIsoLayoutEffect)(() => {
    ae && queueMicrotask(Ze);
  }, [Ze, ae]),
    (0, a.useIsoLayoutEffect)(() => {
      ae && Ze();
    }, [Ze, ae, Ge]),
    (0, a.useIsoLayoutEffect)(() => {
      if (!ae) return;
      const e = te.current,
        t = Pe.current;
      if (!e || !t) return;
      const n = (0, c.ownerWindow)(e).ResizeObserver;
      if ("function" != typeof n) return;
      const r = new n(Ze);
      return (
        r.observe(e),
        r.observe(t),
        () => {
          r.disconnect();
        }
      );
    }, [te, Ze, ae]);
  const Qe = Ie ? "bottom" : "insetInlineStart",
    Je = Ie ? "left" : "top";
  let Xe, et, tt;
  Ce ? (X === He ? (Xe = 2) : Ke === He && (Xe = 1)) : X === He && (Xe = 1),
    (et = ae
      ? {
          "--position": `${We ?? 0}%`,
          visibility: (be && Ye) || void 0 === We ? "hidden" : void 0,
          position: "absolute",
          [Qe]: "var(--position)",
          [Je]: "50%",
          translate: `${50 * (Ie || !Ae ? -1 : 1)}% ${50 * (Ie ? 1 : -1)}%`,
          zIndex: Xe,
        }
      : Number.isFinite(Ge)
        ? {
            position: "absolute",
            [Qe]: `${Ge}%`,
            [Je]: "50%",
            translate: `${50 * (Ie || !Ae ? -1 : 1)}% ${50 * (Ie ? 1 : -1)}%`,
            zIndex: Xe,
          }
        : l.visuallyHidden),
    "vertical" === me && (tt = Ae ? "vertical-rl" : "vertical-lr");
  const nt = "function" == typeof B ? B(He) : j,
    rt = (0, p.mergeProps)(
      {
        "aria-label": nt,
        "aria-labelledby": L ?? (null == nt ? se : void 0),
        "aria-describedby": D,
        "aria-orientation": me,
        "aria-valuenow": qe,
        "aria-valuetext":
          "function" == typeof z
            ? z((0, d.formatNumber)(qe, ce, oe.current ?? void 0), qe, He)
            : (F ?? P(Ee, He, oe.current ?? void 0, ce)),
        disabled: ke,
        form: fe,
        id: Fe,
        max: ue,
        min: de,
        name: he,
        onChange(e) {
          ie(e.currentTarget.valueAsNumber, He, e);
        },
        onFocus(e) {
          const t = De.current;
          (De.current = !1), Se(He), Re(!0), t && e.stopPropagation();
        },
        onBlur(e) {
          De.current
            ? e.stopPropagation()
            : Pe.current &&
              (Se(-1),
              Oe(!0),
              Re(!1),
              "onBlur" === Me &&
                re.commit((0, T.getSliderValue)(qe, He, de, ue, Ce, Ee)));
        },
        onKeyDown(e) {
          if (e.defaultPrevented) return;
          if (!M.has(e.key)) return;
          y.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
          let t = null;
          const n = (0, k.roundValueToStep)(qe, we, de);
          switch (e.key) {
            case y.ARROW_UP:
              t = N(n, e.shiftKey ? le : we, 1, de, ue);
              break;
            case y.ARROW_RIGHT:
              t = N(n, e.shiftKey ? le : we, Ae ? -1 : 1, de, ue);
              break;
            case y.ARROW_DOWN:
              t = N(n, e.shiftKey ? le : we, -1, de, ue);
              break;
            case y.ARROW_LEFT:
              t = N(n, e.shiftKey ? le : we, Ae ? 1 : -1, de, ue);
              break;
            case y.PAGE_UP:
              t = N(n, le, 1, de, ue);
              break;
            case y.PAGE_DOWN:
              t = N(n, le, -1, de, ue);
              break;
            case y.END:
              (t = ue),
                Ce &&
                  (t = Number.isFinite(Ee[He + 1]) ? Ee[He + 1] - we * pe : ue);
              break;
            case y.HOME:
              (t = de),
                Ce &&
                  (t = Number.isFinite(Ee[He - 1]) ? Ee[He - 1] + we * pe : de);
          }
          if (null !== t) {
            const n = e.currentTarget;
            (0, x.matchesFocusVisible)(n) ||
              ((De.current = !0),
              n.blur(),
              n.focus({ preventScroll: !0, focusVisible: !0 })),
              ie(t, He, e),
              e.preventDefault();
          }
        },
        step: we,
        style: {
          ...l.visuallyHidden,
          width: "100%",
          height: "100%",
          writingMode: tt,
        },
        tabIndex: Y ?? void 0,
        type: "range",
        value: qe ?? "",
      },
      (e) => re.getValidationProps(ke, e),
      { onKeyDown: $ },
    ),
    ot = (0, s.useMergedRefs)(Ne, re.inputRef, q);
  return (0, m.useRenderElement)("div", e, {
    state: xe,
    ref: [t, Be, Pe],
    props: [
      {
        [A.SliderThumbDataAttributes.index]: He,
        children: (0, R.jsxs)(o.Fragment, {
          children: [
            r,
            (0, R.jsx)("input", {
              ref: ot,
              ...rt,
              suppressHydrationWarning: !0,
            }),
            ae &&
              Ye &&
              be &&
              Ve &&
              (0, R.jsx)("script", {
                nonce: Q,
                dangerouslySetInnerHTML: { __html: O.script },
                suppressHydrationWarning: !0,
              }),
          ],
        }),
        id: J,
        onBlur: G,
        onFocus: W,
        onPointerDown(e) {
          if (!ke) {
            if (((ve.current = He), null != Pe.current)) {
              const t = "horizontal" === me ? "x" : "y",
                n = (0, E.getMidpoint)(Pe.current),
                r = ("horizontal" === me ? e.clientX : e.clientY) - n[t];
              ye.current = r;
            }
            null != Ne.current &&
              ge.current !== Ne.current &&
              (ge.current = Ne.current);
          }
        },
        style: et,
        suppressHydrationWarning: be || void 0,
      },
      Z,
    ],
    stateAttributesMapping: I.sliderStateAttributesMapping,
  });
});
