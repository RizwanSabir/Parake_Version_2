// app/components/slider-root.js — webpack module 95913
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SliderRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(854 /* vendor/module-854 */),
  a = n(95836 /* vendor/module-95836 */),
  s = n(4674 /* vendor/module-4674 */),
  l = n(71740 /* vendor/module-71740 */),
  c = n(57122 /* vendor/module-57122 */),
  u = (n(77157 /* vendor/module-77157 */), n(22877 /* vendor/module-22877 */)),
  d = n(24422 /* vendor/module-24422 */),
  p = n(33115 /* vendor/module-33115 */),
  f = n(51909 /* vendor/module-51909 */),
  h = n(41153 /* vendor/module-41153 */),
  m = n(81268 /* vendor/module-81268 */),
  g = n(65200 /* vendor/module-65200 */),
  y = n(77144 /* app/components/composite-list */),
  v = n(62527 /* vendor/module-62527 */),
  b = n(85326 /* vendor/module-85326 */),
  S = n(77982 /* vendor/module-77982 */),
  _ = n(83470 /* vendor/module-83470 */),
  x = n(42090 /* vendor/module-42090 */),
  w = n(77266 /* vendor/module-77266 */),
  E = n(75961 /* vendor/module-75961 */),
  T = n(73114 /* vendor/module-73114 */),
  k = n(12758 /* vendor/module-12758 */),
  C = n(16754 /* vendor/module-16754 */),
  I = n(82063 /* vendor/module-82063 */),
  A = n(31085 /* vendor/module-31085 */);
t.SliderRoot = o.forwardRef(function (e, t) {
  const {
      "aria-labelledby": n,
      className: r,
      defaultValue: O,
      disabled: R = !1,
      id: M,
      format: P,
      largeStep: N = 10,
      locale: D,
      render: j,
      max: L = 100,
      min: F = 0,
      minStepsBetweenValues: U = 0,
      form: B,
      name: z,
      onValueChange: H,
      onValueCommitted: V,
      orientation: q = "horizontal",
      step: G = 1,
      thumbCollisionBehavior: W = "push",
      thumbAlignment: $ = "center",
      value: Y,
      style: K,
      ...Z
    } = e,
    Q = (0, p.useBaseUiId)(M),
    J = (0, x.getDefaultLabelId)(Q),
    X = (0, s.useStableCallback)(H),
    ee = (0, s.useStableCallback)(V),
    { clearErrors: te } = (0, S.useFormContext)(),
    {
      state: ne,
      disabled: re,
      name: oe,
      setTouched: ie,
      setDirty: ae,
      validityData: se,
      validation: le,
    } = (0, v.useFieldRootContext)(),
    { labelId: ce } = (0, _.useLabelableContext)(),
    [ue, de] = o.useState(),
    pe = n ?? (0, x.resolveAriaLabelledBy)(ce, ue),
    fe = re || R,
    he = oe ?? z,
    [me, ge] = (0, a.useControlled)({
      controlled: Y,
      default: O ?? F,
      name: "Slider",
    }),
    ye = o.useRef(null),
    ve = o.useRef(null),
    be = o.useRef([]),
    Se = o.useRef(null),
    _e = o.useRef(null),
    xe = o.useRef(-1),
    we = o.useRef(null),
    Ee = o.useRef("none"),
    Te = (0, l.useValueAsRef)(P),
    [ke, Ce] = o.useState(-1),
    [Ie, Ae] = o.useState(-1),
    [Oe, Re] = o.useState(!1),
    [Me, Pe] = o.useState(() => new Map()),
    [Ne, De] = o.useState([void 0, void 0]),
    je = (0, s.useStableCallback)((e) => {
      Ce(e), -1 !== e && Ae(e);
    });
  (0, b.useRegisterFieldControl)(le.inputRef, Q, me, void 0, !fe, z),
    (0, d.useValueChanged)(me, () => {
      te(he), le.change(me);
      const e = se.initialValue;
      let t;
      (t =
        Array.isArray(me) && Array.isArray(e)
          ? !(0, m.areArraysEqual)(me, e)
          : me !== e),
        ae(t);
    });
  const Le = (0, s.useStableCallback)((e) => {
      e && (ve.current = e);
    }),
    Fe = Array.isArray(me),
    Ue = o.useMemo(
      () => (Fe ? me.slice().sort(w.asc) : [(0, h.clamp)(me, F, L)]),
      [L, F, Fe, me],
    ),
    Be = (0, s.useStableCallback)((e, t) => {
      if (
        Number.isNaN(e) ||
        (function (e, t) {
          return "number" == typeof e && "number" == typeof t
            ? e === t
            : !(!Array.isArray(e) || !Array.isArray(t)) &&
                (0, m.areArraysEqual)(e, t);
        })(e, me)
      )
        return !1;
      const n =
          t ??
          (0, u.createChangeEventDetails)(I.REASONS.none, void 0, void 0, {
            activeThumbIndex: -1,
          }),
        r = n.event,
        o = new (r.constructor ?? Event)(r.type, r);
      return (
        Object.defineProperty(o, "target", {
          writable: !0,
          value: { value: e, name: he },
        }),
        (n.event = o),
        X(e, n),
        !n.isCanceled && ((Ee.current = n.reason), ge(e), !0)
      );
    }),
    ze = (0, s.useStableCallback)((e, t, n) => {
      const r = (0, E.getSliderValue)(e, t, F, L, Fe, Ue);
      if ((0, T.validateMinimumDistance)(r, G, U)) {
        const e = (function (e) {
            return "key" in e ? I.REASONS.keyboard : I.REASONS.inputChange;
          })(n),
          o = Be(
            r,
            (0, u.createChangeEventDetails)(e, n.nativeEvent, void 0, {
              activeThumbIndex: t,
            }),
          );
        ie(!0), o && ee(r, (0, u.createGenericEventDetails)(e, n.nativeEvent));
      }
    });
  (0, c.useIsoLayoutEffect)(() => {
    const e = (0, g.activeElement)((0, i.ownerDocument)(ye.current));
    fe && (0, g.contains)(ye.current, e) && e.blur();
  }, [fe]),
    fe && -1 !== ke && je(-1);
  const He = o.useMemo(
      () => ({
        ...ne,
        activeThumbIndex: ke,
        disabled: fe,
        dragging: Oe,
        orientation: q,
        max: L,
        min: F,
        minStepsBetweenValues: U,
        step: G,
        values: Ue,
      }),
      [ne, ke, fe, Oe, L, F, U, q, G, Ue],
    ),
    Ve = o.useMemo(
      () => ({
        active: ke,
        controlRef: ve,
        disabled: fe,
        dragging: Oe,
        validation: le,
        formatOptionsRef: Te,
        handleInputChange: ze,
        indicatorPosition: Ne,
        inset: "center" !== $,
        labelId: pe,
        rootLabelId: J,
        largeStep: N,
        lastUsedThumbIndex: Ie,
        lastChangeReasonRef: Ee,
        form: B,
        locale: D,
        max: L,
        min: F,
        minStepsBetweenValues: U,
        name: he,
        onValueCommitted: ee,
        orientation: q,
        pressedInputRef: Se,
        pressedThumbCenterOffsetRef: _e,
        pressedThumbIndexRef: xe,
        pressedValuesRef: we,
        registerFieldControlRef: Le,
        renderBeforeHydration: "edge" === $,
        setActive: je,
        setDragging: Re,
        setIndicatorPosition: De,
        setLabelId: de,
        setValue: Be,
        state: He,
        step: G,
        thumbCollisionBehavior: W,
        thumbMap: Me,
        thumbRefs: be,
        values: Ue,
      }),
      [
        ke,
        ve,
        pe,
        J,
        fe,
        Oe,
        le,
        Te,
        ze,
        Ne,
        N,
        Ie,
        Ee,
        B,
        D,
        L,
        F,
        U,
        he,
        ee,
        q,
        Se,
        _e,
        xe,
        we,
        Le,
        je,
        Re,
        De,
        de,
        Be,
        He,
        G,
        W,
        $,
        Me,
        be,
        Ue,
      ],
    ),
    qe = (0, f.useRenderElement)("div", e, {
      state: He,
      ref: [t, ye],
      props: [
        { "aria-labelledby": pe, id: Q, role: "group" },
        Z,
        (e) => le.getValidationProps(fe, e),
      ],
      stateAttributesMapping: k.sliderStateAttributesMapping,
    });
  return (0, A.jsx)(C.SliderRootContext.Provider, {
    value: Ve,
    children: (0, A.jsx)(y.CompositeList, {
      elementsRef: be,
      onMapChange: Pe,
      children: qe,
    }),
  });
});
