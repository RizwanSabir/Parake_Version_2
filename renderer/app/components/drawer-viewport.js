// app/components/drawer-viewport.js — webpack module 11161
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DrawerViewport = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(81339 /* vendor/module-81339 */),
  s = n(23504 /* vendor/module-23504 */),
  l = n(854 /* vendor/module-854 */),
  c = n(57569 /* vendor/module-57569 */),
  u = n(4674 /* vendor/module-4674 */),
  d = n(90498 /* vendor/module-90498 */),
  p = n(58949 /* vendor/module-58949 */),
  f = n(55327 /* vendor/module-55327 */),
  h = n(14714 /* vendor/module-14714 */),
  m = n(34087 /* vendor/module-34087 */),
  g = n(17452 /* vendor/module-17452 */),
  y = n(41153 /* vendor/module-41153 */),
  v = n(13652 /* vendor/module-13652 */),
  b = n(51244 /* vendor/module-51244 */),
  S = n(16072 /* vendor/module-16072 */),
  _ = n(86424 /* vendor/module-86424 */),
  x = n(11160 /* vendor/module-11160 */),
  w = n(82063 /* vendor/module-82063 */),
  E = n(22877 /* vendor/module-22877 */),
  T = n(65200 /* vendor/module-65200 */),
  k = n(1698 /* vendor/module-1698 */),
  C = n(44306 /* vendor/module-44306 */),
  I = n(77324 /* vendor/module-77324 */),
  A = n(25743 /* vendor/module-25743 */),
  O = n(71256 /* vendor/module-71256 */),
  R = n(19805 /* vendor/module-19805 */),
  M = n(31085 /* vendor/module-31085 */);
const P = `[${x.DRAWER_CONTENT_ATTRIBUTE}]`;
function N(e, t) {
  e &&
    (t
      ? e.setAttribute(S.DrawerPopupDataAttributes.swiping, "")
      : e.removeAttribute(S.DrawerPopupDataAttributes.swiping));
}
function D(e) {
  return Boolean(e?.closest(A.BASE_UI_SWIPE_IGNORE_SELECTOR));
}
function j(e, t) {
  const n = "left" === t || "right" === t ? e.offsetWidth : e.offsetHeight;
  return Math.max(0.5 * n, 10);
}
function L(e, t) {
  return e instanceof t.HTMLInputElement && "range" === e.type;
}
function F(e, t) {
  const n = (0, T.activeElement)(e);
  if (
    Boolean(n && (0, T.contains)(t, n)) &&
    ((r = n),
    (0, a.isElement)(r) && ("INPUT" === r.tagName || "TEXTAREA" === r.tagName))
  ) {
    const { selectionStart: e, selectionEnd: t } = n;
    if (null != e && null != t && e < t) return !0;
  }
  var r;
  const o = e.getSelection?.();
  return (
    !(!o || o.isCollapsed) &&
    (function (e, t) {
      const n = (0, a.isElement)(e.anchorNode)
          ? e.anchorNode
          : e.anchorNode?.parentElement,
        r = (0, a.isElement)(e.focusNode)
          ? e.focusNode
          : e.focusNode?.parentElement;
      return (
        e.containsNode(t, !0) || (0, T.contains)(t, n) || (0, T.contains)(t, r)
      );
    })(o, t)
  );
}
function U(e, t) {
  const n = e.composedPath();
  return n ? n.some((e) => L(e, t)) : L((0, T.getTarget)(e), t);
}
function B(e, t) {
  (e.lastX = t.clientX), (e.lastY = t.clientY);
}
function z(e, t) {
  if ("vertical" === t) {
    const t = Math.max(0, e.scrollHeight - e.clientHeight);
    return { offset: e.scrollTop, max: t };
  }
  const n = Math.max(0, e.scrollWidth - e.clientWidth);
  return { offset: e.scrollLeft, max: n };
}
function H(e, t) {
  return "vertical" === t
    ? "down" === e || ("up" !== e && null)
    : "right" === e || ("left" !== e && null);
}
t.DrawerViewport = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: x, children: A, ...L } = e,
    { store: V } = (0, d.useDialogRootContext)(),
    q = V.context.popupRef,
    G = V.context.backdropRef,
    {
      swipeDirection: W,
      notifyParentSwipingChange: $,
      notifyParentSwipeProgressChange: Y,
      frontmostHeight: K,
      snapToSequentialPoints: Z,
    } = (0, h.useDrawerRootContext)(),
    Q = (0, g.useDrawerProviderContext)(!0),
    {
      snapPoints: J,
      resolvedSnapPoints: X,
      activeSnapPoint: ee,
      activeSnapPointOffset: te,
      setActiveSnapPoint: ne,
      popupHeight: re,
    } = (0, m.useDrawerSnapPoints)(),
    oe = V.useState("open"),
    ie = V.useState("mounted"),
    ae = V.useState("nested"),
    se = V.useState("nestedOpenDrawerCount"),
    le = V.useState("viewportElement"),
    ce = V.useState("popupElement"),
    ue = Q?.visualStateStore,
    de = se > 0,
    pe = "left" === W || "right" === W ? "horizontal" : "vertical",
    fe = "vertical" === pe,
    he = fe ? "horizontal" : "vertical",
    [me, ge] = o.useState(null),
    ye = o.useRef(void 0),
    ve = o.useRef(null),
    be = (0, c.useAnimationFrame)(),
    Se = o.useRef(!1),
    _e = o.useRef(!1),
    xe = o.useRef(""),
    we = o.useRef(!1),
    Ee = o.useRef(!1),
    Te = o.useRef(null),
    ke = (0, R.useDrawerVirtualKeyboardContext)(),
    Ce = o.useMemo(() => {
      if (!J || J.length < 2) return null;
      if ("down" !== W && "up" !== W) return null;
      if (X.length < 2) return null;
      const e = X.map((e) => e.offset)
        .filter((e) => Number.isFinite(e))
        .sort((e, t) => e - t);
      if (e.length < 2) return null;
      const t = e[0],
        n = e[1],
        r = e[e.length - 1];
      let o = n - t;
      if (!Number.isFinite(o) || o <= 0) {
        const e = r - t;
        if (!Number.isFinite(e) || e <= 0) return null;
        o = e;
      }
      return { minOffset: t, range: o };
    }, [X, J, W]),
    Ie = o.useMemo(
      () =>
        Ce && null !== te
          ? (0, y.clamp)((te - Ce.minOffset) / Ce.range, 0, 1)
          : null,
      [te, Ce],
    ),
    Ae = o.useMemo(
      () =>
        J && J.length > 0 && ("down" === W || "up" === W)
          ? "down" === W
            ? ["down", "up"]
            : ["up", "down"]
          : [W],
      [J, W],
    ),
    Oe = (0, u.useStableCallback)((e) => {
      !(function (e, t, n) {
        if (n)
          return (
            e?.setAttribute(S.DrawerPopupDataAttributes.swipeDismiss, ""),
            void t?.setAttribute(S.DrawerPopupDataAttributes.swipeDismiss, "")
          );
        e?.removeAttribute(S.DrawerPopupDataAttributes.swipeDismiss),
          t?.removeAttribute(S.DrawerPopupDataAttributes.swipeDismiss);
      })(q.current, G.current, e);
    }),
    Re = (0, u.useStableCallback)(() => {
      Oe(!1),
        q.current?.removeAttribute(
          C.TransitionStatusDataAttributes.endingStyle,
        ),
        ge(null);
    }),
    Me = (0, u.useStableCallback)(() => {
      _e.current && ((_e.current = !1), $?.(!1));
    }),
    Pe = (0, u.useStableCallback)(
      ({ resolvedProgress: e, shouldTrackProgress: t, notifyParent: n }) => {
        const r = oe && !ae && t,
          o = r ? e : 0,
          i = oe && t ? e : 0;
        n && Y && (Y(i), i <= 0 && Me()),
          ue?.set({
            swipeProgress: o,
            frontmostHeight: o > 0 ? K : 0,
          });
        const a = G.current;
        if (a) {
          if (!r || o <= 0)
            return (
              a.style.setProperty(_.DrawerBackdropCssVars.swipeProgress, "0"),
              void a.style.removeProperty(b.DrawerPopupCssVars.height)
            );
          a.style.setProperty(_.DrawerBackdropCssVars.swipeProgress, `${o}`),
            K > 0
              ? a.style.setProperty(b.DrawerPopupCssVars.height, `${K}px`)
              : a.style.removeProperty(b.DrawerPopupCssVars.height);
        }
      },
    ),
    Ne = (0, v.useSwipeDismiss)({
      enabled: ie && !de,
      directions: Ae,
      elementRef: V.context.popupRef,
      ignoreSelectorWhenTouch: !1,
      ignoreScrollableAncestors: !0,
      movementCssVars: {
        x: b.DrawerPopupCssVars.swipeMovementX,
        y: b.DrawerPopupCssVars.swipeMovementY,
      },
      onSwipeStart(e) {
        if ("touches" in e || ("pointerType" in e && "touch" === e.pointerType))
          return;
        const t = q.current;
        if (!t) return;
        const n = (0, l.ownerDocument)(t),
          r = n.getSelection?.();
        if (!r || r.isCollapsed) return;
        const o = (0, a.isElement)(r.anchorNode)
            ? r.anchorNode
            : r.anchorNode?.parentElement,
          i = (0, a.isElement)(r.focusNode)
            ? r.focusNode
            : r.focusNode?.parentElement;
        ((0, T.contains)(t, o) || (0, T.contains)(t, i)) && r.removeAllRanges();
      },
      onSwipingChange(e) {
        (Se.current = e), N(V.context.backdropRef.current, e), e || Y || Me();
      },
      swipeThreshold: ({ element: e, direction: t }) => j(e, t),
      canStart(e, t) {
        const n = V.context.popupRef.current;
        if (!n) return !1;
        const r = n.ownerDocument,
          o = (0, O.getElementAtPoint)(r, e.x, e.y);
        if (!o || !(0, T.contains)(n, o)) return !1;
        const i = t.nativeEvent;
        return !(
          (("touches" in i ||
            ("pointerType" in i && "touch" === i.pointerType)) &&
            F(r, n)) ||
          ("touchstart" === i.type && D(o))
        );
      },
      onProgress(e, t) {
        !(function (e) {
          if (_e.current || !e) return;
          const t = e.direction ?? W,
            n = "left" === t || "right" === t ? e.deltaX : e.deltaY;
          !Number.isFinite(n) ||
            Math.abs(n) < 10 ||
            ((_e.current = !0), $?.(!0));
        })(t);
        const n = Boolean(J && J.length > 0);
        if (Se.current && "down" === W && n && t && Number.isFinite(t.deltaY)) {
          const e = V.context.popupRef.current;
          e &&
            (e.style.removeProperty("transform"),
            e.style.setProperty(
              b.DrawerPopupCssVars.swipeMovementY,
              `${(0, m.getSnapPointSwipeMovement)(te ?? 0, t.deltaY)}px`,
            ));
        }
        const r = t?.direction ?? Ne.swipeDirection,
          o =
            (n && ("down" === W || "up" === W)) ||
            !n ||
            "left" === W ||
            "right" === W ||
            void 0 === r ||
            r === W;
        let i = e;
        if (Ce && re > 0)
          if (t && Number.isFinite(t.deltaY)) {
            const e = te ?? Ce.minOffset,
              n = (0, y.clamp)(e + t.deltaY, 0, re);
            i = (0, y.clamp)((n - Ce.minOffset) / Ce.range, 0, 1);
          } else if (null !== Ie) i = Ie;
          else if ("down" === r || "up" === r) {
            const t = e * re,
              n = te ?? Ce.minOffset,
              o = "down" === r ? n + t : n - t;
            i = (0, y.clamp)((o - Ce.minOffset) / Ce.range, 0, 1);
          }
        Pe({
          resolvedProgress: i,
          shouldTrackProgress: o,
          notifyParent: !0,
        });
      },
      onRelease({
        event: e,
        deltaX: t,
        deltaY: n,
        direction: r,
        velocityX: o,
        velocityY: a,
        releaseVelocityX: s,
        releaseVelocityY: l,
      }) {
        const c = {
          deltaX: t,
          deltaY: n,
          velocityX: o,
          velocityY: a,
          releaseVelocityX: s,
          releaseVelocityY: l,
        };
        function u(e) {
          const t = V.context.popupRef.current;
          t &&
            (Me(),
            Oe(!0),
            t.style.removeProperty("transition"),
            t.setAttribute(C.TransitionStatusDataAttributes.endingStyle, ""),
            i.flushSync(() => {
              ge(
                (function ({
                  direction: e,
                  deltaX: t,
                  deltaY: n,
                  velocityX: r,
                  velocityY: o,
                  releaseVelocityX: i,
                  releaseVelocityY: a,
                }) {
                  if (!e) return null;
                  const s = V.context.popupRef.current;
                  if (!s) return null;
                  const l =
                    "left" === e || "right" === e
                      ? s.offsetWidth
                      : s.offsetHeight;
                  if (!Number.isFinite(l) || l <= 0) return null;
                  const c = "left" === e || "right" === e ? t : n,
                    u = J && J.length > 0 ? (te ?? 0) : 0;
                  let d = 0;
                  "down" === e ? (d = u) : "up" === e && (d = -u);
                  const p = d + c,
                    f = "left" === e || "up" === e ? -p : p,
                    h = Math.max(0, l - f);
                  if (!Number.isFinite(h) || h <= 0) return null;
                  const m = "left" === e || "right" === e ? i : a,
                    g = "left" === e || "right" === e ? r : o,
                    v = Math.abs(m) > 0 && Number.isFinite(m) ? m : g,
                    b = "left" === e || "up" === e ? -v : v;
                  if (!Number.isFinite(b) || b <= 0.2) return null;
                  const S = (0, y.clamp)(b, 0.2, 4),
                    _ = (0, y.clamp)(h / S, 80, 360);
                  if (!Number.isFinite(_)) return null;
                  const x = (_ - 80) / 280,
                    w = (0, y.clamp)(0.1 + 0.9 * x, 0.1, 1);
                  return !Number.isFinite(w) || w <= 0 ? null : w;
                })({ direction: e, ...c }),
              );
            }));
        }
        if (!J || 0 === J.length) {
          if (!r) return void Re();
          const e = V.context.popupRef.current;
          if (!e) return void Re();
          const i = j(e, r),
            s = "left" === r || "right" === r ? t : n;
          if (!Number.isFinite(s)) return void Re();
          const l = "left" === r || "up" === r ? -s : s;
          if (l <= 0) return Re(), !1;
          const c = "left" === r || "right" === r ? o : a;
          if (("left" === r || "up" === r ? -c : c) >= 0.5 && l > 0)
            return u(r), !0;
          const d = l > i;
          return d ? u(r) : Re(), d;
        }
        if ("down" !== W && "up" !== W) return void Re();
        if (!re || 0 === X.length) return void Re();
        const d = "down" === W ? n : -n;
        if (!Number.isFinite(d)) return void Re();
        const p = Math.sign(d),
          f = "down" === W ? l : -l,
          h = "down" === W ? a : -a;
        let m = Number.isFinite(f) ? f : h;
        if (0 !== p && Math.abs(d) >= 10 && Number.isFinite(m)) {
          const e = Math.sign(m);
          0 !== e && e !== p && (m = h);
        }
        const g = te ?? 0,
          v = (0, y.clamp)(g + d, 0, re),
          b =
            Number.isFinite(m) && Math.abs(m) >= 0.5
              ? 300 * (0, y.clamp)(m, -4, 4)
              : 0,
          S = Z ? v : (0, y.clamp)(v + b, 0, re),
          _ = (0, E.createChangeEventDetails)(w.REASONS.swipe, e),
          x = () => ((ye.current = ee), ne?.(null, _), u(W), !0);
        if (Z) {
          const e = [...X].sort((e, t) => e.offset - t.offset);
          if (0 === e.length) return Re(), !1;
          let t = 0,
            n = Math.abs(g - e[0].offset);
          for (let r = 1; r < e.length; r += 1) {
            const o = Math.abs(g - e[r].offset);
            o < n && ((n = o), (t = r));
          }
          let r = e[0];
          n = Math.abs(S - r.offset);
          for (const t of e) {
            const e = Math.abs(S - t.offset);
            e < n && ((n = e), (r = t));
          }
          const o = Math.sign(m);
          let i = S;
          if (0 !== p && 0 !== o && o === p && Math.abs(m) >= 0.5) {
            const n = (0, y.clamp)(t + p, 0, e.length - 1);
            if (n !== t) {
              const t = e[n];
              (p > 0 ? S < t.offset : S > t.offset) &&
                ((r = t), (i = t.offset));
            } else if (p > 0) return x();
          }
          const a = re;
          return Math.abs(i - a) < Math.abs(i - r.offset)
            ? x()
            : (ne?.(r.value, _), Re(), !1);
        }
        if (m >= 0.5 && d > 0) return x();
        let T = X[0],
          k = Math.abs(S - T.offset);
        for (const e of X) {
          const t = Math.abs(S - e.offset);
          t < k && ((k = t), (T = e));
        }
        const I = re;
        return Math.abs(S - I) < k ? x() : (ne?.(T.value, _), Re(), !1);
      },
      onDismiss(e) {
        ue?.set({ swipeProgress: 0, frontmostHeight: 0 });
        const t = V.context.backdropRef.current;
        t &&
          (t.style.setProperty(_.DrawerBackdropCssVars.swipeProgress, "0"),
          t.style.removeProperty(b.DrawerPopupCssVars.height));
        const n = (0, E.createChangeEventDetails)(w.REASONS.swipe, e);
        if ((V.setOpen(!1, n), n.isCanceled)) {
          const t = ye.current;
          return (
            void 0 !== t &&
              ne?.(t, (0, E.createChangeEventDetails)(w.REASONS.swipe, e)),
            (ye.current = void 0),
            ve.current?.(),
            void Re()
          );
        }
        if (V.select("open")) {
          const t = e;
          return void be.request(() => {
            if (V.select("open")) {
              const e = ye.current;
              void 0 !== e &&
                ne?.(e, (0, E.createChangeEventDetails)(w.REASONS.swipe, t)),
                (ye.current = void 0),
                Re(),
                ve.current?.();
            } else ye.current = void 0;
          });
        }
        (ye.current = void 0), Oe(!0);
      },
    }),
    De = Ne.getPointerProps(),
    je = Ne.getTouchProps(),
    { moveNative: Le, reset: Fe } = Ne;
  (ve.current = Fe),
    o.useEffect(() => {
      const e = le ?? ce;
      if (!e) return;
      const t = e,
        n = (0, l.ownerDocument)(t),
        r = (0, l.ownerWindow)(n);
      return (0, s.addEventListener)(
        n,
        "touchmove",
        function (e) {
          if ((ke?.onTouchMove(e), Ee.current)) return;
          const o = Te.current,
            i = e.touches[0];
          if (!i || !o) return;
          const a = fe ? i.clientY - o.lastY : i.clientX - o.lastX;
          if (U(e, r)) return (o.allowSwipe = !1), void B(o, i);
          if (2 === e.touches.length) return void B(o, i);
          if (F(n, t) || !oe || !ie || de) return void B(o, i);
          if (
            (function (e, t, n) {
              if (e.preserveNativeCrossAxisScroll) return !0;
              if (!0 === e.allowSwipe || !e.hasCrossAxisScrollableContent)
                return !1;
              const r = n ? t.clientY - e.startY : t.clientX - e.startX,
                o = n ? t.clientX - e.startX : t.clientY - e.startY,
                i = Math.abs(r),
                a = Math.abs(o);
              return (
                !(a < 6 || a <= i + 2) &&
                ((e.preserveNativeCrossAxisScroll = !0), !0)
              );
            })(o, i, fe)
          )
            return void B(o, i);
          const s = o.scrollTarget;
          if (!s || s === n.documentElement || s === n.body)
            return (
              e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              Le(e, t),
              void B(o, i)
            );
          if (
            !(function (e, t) {
              return "vertical" === t
                ? e.scrollHeight > e.clientHeight
                : e.scrollWidth > e.clientWidth;
            })(s, pe)
          )
            return (
              e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              void B(o, i)
            );
          if (0 !== a) {
            const t = (function (e, t, n, r) {
              const { offset: o, max: i } = z(e, t),
                a = H(n, t);
              if (null === a) return !1;
              return !!(a ? r > 0 : r < 0) && (a ? o <= 0 : o >= i);
            })(s, pe, W, a);
            o.allowSwipe
              ? e.cancelable && e.preventDefault()
              : e.cancelable && t
                ? ((o.allowSwipe = !0), e.preventDefault())
                : (o.allowSwipe = !1);
          }
          !0 === o.allowSwipe && (e.stopPropagation(), Le(e, t)), B(o, i);
        },
        { passive: !1, capture: !0 },
      );
    }, [ie, de, oe, ce, fe, pe, W, Le, le, ke]),
    o.useEffect(() => {
      Ce &&
        !Ne.swiping &&
        Pe({
          resolvedProgress: !oe || ae ? 0 : (Ie ?? 0),
          shouldTrackProgress: !0,
          notifyParent: !1,
        });
    }, [Pe, K, ae, Y, oe, Ie, Ce, Ne.swiping, V, ue]),
    o.useEffect(() => {
      if (Y)
        return (
          oe || Y(0),
          () => {
            Y(0);
          }
        );
    }, [Y, oe]),
    o.useEffect(() => {
      oe && (Fe(), Re());
    }, [Re, oe, Fe]),
    o.useEffect(() => {
      const e = G.current;
      return () => {
        ue?.set({ swipeProgress: 0, frontmostHeight: 0 }), N(e, !1);
        const t = G.current;
        t !== e && N(t, !1), Me();
      };
    }, [G, Me, ue]);
  const Ue = o.useMemo(
    () => ({
      swiping: Ne.swiping,
      getDragStyles: Ne.getDragStyles,
      swipeStrength: me ?? null,
      setSwipeDismissed: Oe,
    }),
    [Oe, Ne.getDragStyles, Ne.swiping, me],
  );
  function Be() {
    (Ee.current = !1),
      (Te.current = null),
      (xe.current = ""),
      (we.current = !1);
  }
  return (0, M.jsx)(p.DialogViewport, {
    ref: t,
    className: r,
    style: x,
    render: n,
    ...(0, f.mergeProps)(L, {
      onPointerDown(e) {
        if (
          ((xe.current = e.pointerType),
          (we.current = "pen" === e.pointerType),
          !oe || !ie || de)
        )
          return;
        const t = (0, l.ownerDocument)(e.currentTarget),
          n = (0, O.getElementAtPoint)(t, e.clientX, e.clientY);
        var r;
        D(n) ||
          ((r = n), Boolean(r?.closest(P))) ||
          ("touch" !== e.pointerType && De.onPointerDown?.(e));
      },
      onPointerMove(e) {
        "touch" !== e.pointerType && De.onPointerMove?.(e);
      },
      onPointerUp(e) {
        xe.current === e.pointerType && (xe.current = ""),
          "touch" !== e.pointerType && De.onPointerUp?.(e);
      },
      onPointerCancel(e) {
        xe.current === e.pointerType && (xe.current = ""),
          "touch" !== e.pointerType && De.onPointerCancel?.(e);
      },
      onTouchStart(e) {
        if ("pen" === xe.current && we.current)
          return (we.current = !1), (Ee.current = !1), void (Te.current = null);
        if (!oe || !ie || de)
          return (Ee.current = !1), void (Te.current = null);
        const t = e.touches[0];
        if (!t) return;
        if (
          (function (e) {
            return U(e.nativeEvent, (0, l.ownerWindow)(e.currentTarget));
          })(e)
        )
          return (Ee.current = !1), void (Te.current = null);
        const n = (0, l.ownerDocument)(e.currentTarget),
          r = (0, O.getElementAtPoint)(n, t.clientX, t.clientY),
          o = le ?? ce,
          i = (0, T.getTarget)(e.nativeEvent),
          s = (0, a.isElement)(i) ? i : null;
        if (o && s && !(0, T.contains)(o, s))
          return (Ee.current = !0), void (Te.current = null);
        if ((ke?.onTouchStart(e), (Ee.current = D(r)), Ee.current))
          return void (Te.current = null);
        let c = null,
          u = !1;
        o &&
          s &&
          ((c = (0, I.findScrollableTouchTarget)(s, o, pe)),
          (u = null != (0, I.findScrollableTouchTarget)(s, o, he)));
        let d = null;
        if (c) {
          const e = (function (e, t, n) {
            const { offset: r, max: o } = z(e, t),
              i = H(n, t);
            return null !== i && (i ? r <= 0 : r >= o);
          })(c, pe, W);
          d = !!e && null;
        }
        (Te.current = {
          startX: t.clientX,
          startY: t.clientY,
          lastX: t.clientX,
          lastY: t.clientY,
          scrollTarget: c,
          hasCrossAxisScrollableContent: u,
          allowSwipe: d,
          preserveNativeCrossAxisScroll: !1,
        }),
          je.onTouchStart?.(e);
      },
      onTouchEnd(e) {
        ke?.onTouchEnd(e), Be(), je.onTouchEnd?.(e);
      },
      onTouchCancel(e) {
        ke?.onTouchCancel(), Be(), je.onTouchCancel?.(e);
      },
      "data-nested-dialog-open": void 0,
    }),
    children: (0, M.jsx)(k.DrawerViewportContext.Provider, {
      value: Ue,
      children: A,
    }),
  });
});
