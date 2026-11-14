// vendor/module-66049.js — webpack module 66049
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SliderControl = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(81339 /* vendor/module-81339 */),
  a = n(23504 /* vendor/module-23504 */),
  s = n(854 /* vendor/module-854 */),
  l = n(57569 /* vendor/module-57569 */),
  c = n(4674 /* vendor/module-4674 */),
  u = n(71740 /* vendor/module-71740 */),
  d = n(65200 /* vendor/module-65200 */),
  p = n(41153 /* vendor/module-41153 */),
  f = n(22877 /* vendor/module-22877 */),
  h = n(82063 /* vendor/module-82063 */),
  m = n(51909 /* vendor/module-51909 */),
  g = n(96092 /* vendor/module-96092 */),
  y = n(16754 /* vendor/module-16754 */),
  v = n(12758 /* vendor/module-12758 */),
  b = n(65759 /* vendor/module-65759 */),
  S = n(8997 /* vendor/module-8997 */),
  _ = n(73114 /* vendor/module-73114 */),
  x = n(68659 /* vendor/module-68659 */);
function w(e, t) {
  if (null != t.current && e.changedTouches) {
    const n = e;
    for (let e = 0; e < n.changedTouches.length; e += 1) {
      const r = n.changedTouches[e];
      if (r.identifier === t.current) return { x: r.clientX, y: r.clientY };
    }
    return null;
  }
  return { x: e.clientX, y: e.clientY };
}
t.SliderControl = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: E, ...T } = e,
    {
      disabled: k,
      dragging: C,
      inset: I,
      lastChangeReasonRef: A,
      max: O,
      min: R,
      minStepsBetweenValues: M,
      onValueCommitted: P,
      orientation: N,
      pressedInputRef: D,
      pressedThumbCenterOffsetRef: j,
      pressedThumbIndexRef: L,
      pressedValuesRef: F,
      registerFieldControlRef: U,
      renderBeforeHydration: B,
      setActive: z,
      setDragging: H,
      setValue: V,
      state: q,
      step: G,
      thumbCollisionBehavior: W,
      thumbRefs: $,
      values: Y,
    } = (0, y.useSliderRootContext)(),
    K = (0, g.useDirection)(),
    Z = Y.length > 1,
    Q = "vertical" === N,
    J = o.useRef(null),
    X = o.useRef(null),
    ee = (0, c.useStableCallback)((e) => {
      e &&
        null == X.current &&
        (X.current = (0, s.ownerWindow)(e).getComputedStyle(e));
    }),
    te = o.useRef(null),
    ne = o.useRef(0),
    re = o.useRef(0),
    oe = o.useRef(null),
    ie = (0, u.useValueAsRef)(Y);
  function ae(e) {
    L.current !== e && (L.current = e);
    const t = $.current[e];
    if (!t) return (j.current = null), void (D.current = null);
    D.current = t.querySelector('input[type="range"]');
  }
  function se() {
    (L.current = -1), (j.current = null), (D.current = null);
  }
  function le(e) {
    return (
      !!(0, i.isElement)(e) &&
      $.current.some(
        (t) =>
          !(!(0, i.isElement)(t) || !(0, d.contains)(t, e)) &&
          !0 === t.querySelector('input[type="range"]')?.disabled,
      )
    );
  }
  function ce(e) {
    const t = J.current,
      n = L.current;
    if (!t || (!Z && (n < 0 || n >= Y.length))) return null;
    const {
        width: r,
        height: o,
        bottom: i,
        left: a,
        right: s,
      } = t.getBoundingClientRect(),
      l = (function (e, t) {
        if (!e) return { start: 0, end: 0 };
        function n(e) {
          const t = null != e ? parseFloat(e) : 0;
          return Number.isNaN(t) ? 0 : t;
        }
        const r = t ? "Top" : "InlineStart",
          o = t ? "Bottom" : "InlineEnd";
        return {
          start: n(e[`border${r}Width`]) + n(e[`padding${r}`]),
          end: n(e[`border${o}Width`]) + n(e[`padding${o}`]),
        };
      })(X.current, Q),
      c = re.current,
      u = (Q ? o : r) - l.start - l.end - 2 * c,
      d = j.current ?? 0,
      f = e.x - d,
      h = e.y - d,
      m = Q ? i - h - l.end : ("rtl" === K ? s - f : f - a) - l.start,
      g = (0, p.clamp)((m - c) / u, 0, 1);
    let y = (O - R) * g + R;
    return (
      (y = (0, S.roundValueToStep)(y, G, R)),
      (y = (0, p.clamp)(y, R, O)),
      Z
        ? n < 0
          ? null
          : (0, x.resolveThumbCollision)({
              behavior: W,
              values: Y,
              currentValues: ie.current ?? Y,
              initialValues: F.current,
              pressedIndex: n,
              nextValue: y,
              min: R,
              max: O,
              step: G,
              minStepsBetweenValues: M,
            })
        : { value: y, thumbIndex: n, didSwap: !1 }
    );
  }
  function ue(e) {
    (F.current = Z ? Y.slice() : null), (oe.current = null), (ie.current = Y);
    const t = L.current;
    let n = t;
    if (t > -1 && t < Y.length) {
      if (Y[t] === O) {
        let e = t;
        for (; e > 0 && Y[e - 1] === O; ) e -= 1;
        n = e;
      }
    } else {
      const t = Q ? "y" : "x";
      let r;
      n = -1;
      for (let o = 0; o < $.current.length; o += 1) {
        const a = $.current[o];
        if (
          (0, i.isElement)(a) &&
          !a.querySelector('input[type="range"]')?.disabled
        ) {
          const i = (0, b.getMidpoint)(a),
            s = Math.abs(e[t] - i[t]);
          (void 0 === r || s <= r) && ((n = o), (r = s));
        }
      }
    }
    if ((n > -1 && n !== t && ae(n), I)) {
      const e = $.current[n];
      if ((0, i.isElement)(e)) {
        const t = e.getBoundingClientRect(),
          n = Q ? "height" : "width";
        re.current = t[n] / 2;
      }
    }
  }
  function de(e) {
    const t = $.current?.[e]?.querySelector('input[type="range"]');
    t && t.focus({ preventScroll: !0, focusVisible: !1 });
  }
  function pe(e, t, n) {
    const r = V(
      e.value,
      (0, f.createChangeEventDetails)(t, n, void 0, {
        activeThumbIndex: e.thumbIndex,
      }),
    );
    return (
      r &&
        ((oe.current = e.value),
        (ie.current = Array.isArray(e.value) ? e.value : [e.value]),
        e.didSwap && ae(e.thumbIndex)),
      r
    );
  }
  const fe = (0, c.useStableCallback)((e) => {
      const t = w(e, te);
      if (null == t) return;
      if (((ne.current += 1), "pointermove" === e.type && 0 === e.buttons))
        return void he(e);
      const n = ce(t);
      null != n &&
        (0, _.validateMinimumDistance)(n.value, G, M) &&
        (!C && ne.current > 2 && H(!0),
        pe(n, h.REASONS.drag, e) && n.didSwap && de(n.thumbIndex));
    }),
    he = (0, c.useStableCallback)((e) => {
      if (
        (z(-1),
        H(!1),
        (D.current = null),
        (j.current = null),
        null != oe.current)
      ) {
        const t = A.current;
        P(oe.current, (0, f.createGenericEventDetails)(t, e));
      }
      "pointerType" in e &&
        J.current?.hasPointerCapture(e.pointerId) &&
        J.current?.releasePointerCapture(e.pointerId),
        (L.current = -1),
        (te.current = null),
        (F.current = null),
        (oe.current = null),
        ge();
    }),
    me = (0, c.useStableCallback)((e) => {
      if (k) return;
      if (le((0, d.getTarget)(e))) return void se();
      const t = e.changedTouches[0];
      null != t && (te.current = t.identifier);
      const n = w(e, te);
      if (null != n) {
        ue(n);
        const t = ce(n);
        if (null == t) return;
        de(t.thumbIndex),
          pe(t, h.REASONS.trackPress, e) && t.didSwap && de(t.thumbIndex);
      }
      ne.current = 0;
      const r = (0, s.ownerDocument)(J.current);
      r.addEventListener("touchmove", fe, { passive: !0 }),
        r.addEventListener("touchend", he, { passive: !0 });
    }),
    ge = (0, c.useStableCallback)(() => {
      const e = (0, s.ownerDocument)(J.current);
      e.removeEventListener("pointermove", fe),
        e.removeEventListener("pointerup", he),
        e.removeEventListener("touchmove", fe),
        e.removeEventListener("touchend", he),
        (F.current = null),
        (oe.current = null);
    }),
    ye = (0, l.useAnimationFrame)();
  return (
    o.useEffect(() => {
      const e = J.current;
      if (!e) return () => ge();
      const t = (0, a.addEventListener)(e, "touchstart", me, {
        passive: !0,
      });
      return () => {
        t(), ye.cancel(), ge();
      };
    }, [ge, me, J, ye]),
    o.useEffect(() => {
      k && ge();
    }, [k, ge]),
    (0, m.useRenderElement)("div", e, {
      state: q,
      ref: [t, U, J, ee],
      props: [
        {
          "data-base-ui-slider-control": B ? "" : void 0,
          onPointerDown(e) {
            const t = J.current,
              n = (0, d.getTarget)(e.nativeEvent);
            if (
              !t ||
              k ||
              e.defaultPrevented ||
              !(0, i.isElement)(n) ||
              0 !== e.button
            )
              return;
            if (le(n)) return void se();
            const r = w(e, te);
            if (null != r) {
              ue(r);
              const n = ce(r);
              if (null == n) return;
              (0, d.contains)(
                $.current[n.thumbIndex],
                (0, d.activeElement)((0, s.ownerDocument)(t)),
              )
                ? e.preventDefault()
                : ye.request(() => {
                    de(n.thumbIndex);
                  }),
                H(!0),
                null == j.current &&
                  pe(n, h.REASONS.trackPress, e.nativeEvent) &&
                  n.didSwap &&
                  de(n.thumbIndex);
            }
            e.nativeEvent.pointerId &&
              t.setPointerCapture(e.nativeEvent.pointerId),
              (ne.current = 0);
            const o = (0, s.ownerDocument)(J.current);
            o.addEventListener("pointermove", fe, { passive: !0 }),
              o.addEventListener("pointerup", he, { once: !0 });
          },
        },
        T,
      ],
      stateAttributesMapping: v.sliderStateAttributesMapping,
    })
  );
});
