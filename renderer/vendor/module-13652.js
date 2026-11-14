// vendor/module-13652.js — webpack module 13652
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getDisplacement = d),
  (t.getElementTransform = p),
  (t.useSwipeDismiss = function (e) {
    const {
        enabled: t,
        directions: n,
        elementRef: r,
        movementCssVars: g,
        canStart: y,
        ignoreSelectorWhenTouch: v = !0,
        ignoreScrollableAncestors: b = !1,
        swipeThreshold: S,
        onDismiss: _,
        onProgress: x,
        onCancel: w,
        onSwipeStart: E,
        onRelease: T,
        onSwipingChange: k,
        trackDrag: C = !0,
      } = e,
      I = 1 === n.length ? n[0] : void 0,
      A = Math.max(0, "number" == typeof S ? S : 40),
      O = n.includes("left"),
      R = n.includes("right"),
      M = n.includes("up"),
      P = n.includes("down"),
      N = O || R,
      D = M || P,
      j = o.useMemo(() => {
        const e = [];
        return D && e.push("vertical"), N && e.push("horizontal"), e;
      }, [N, D]),
      [L, F] = o.useState(void 0),
      [U, B] = o.useState(!1),
      [z, H] = o.useState(!1),
      V = o.useRef({ x: 0, y: 0 }),
      q = o.useRef({ x: 0, y: 0 }),
      G = o.useRef(null),
      W = o.useRef({ x: 0, y: 0, scale: 1 }),
      $ = o.useRef(void 0),
      Y = o.useRef(0),
      K = o.useRef(!1),
      Z = o.useRef({ x: 0, y: 0 }),
      Q = o.useRef(null),
      J = o.useRef(!1),
      X = o.useRef(!1),
      ee = o.useRef(null),
      te = o.useRef(!1),
      ne = o.useRef(!1),
      re = o.useRef({ width: 0, height: 0 }),
      oe = o.useRef(0),
      ie = o.useRef(A),
      ae = o.useRef(null),
      se = o.useRef(null),
      le = o.useRef({ x: 0, y: 0 }),
      ce = o.useRef(null),
      ue = o.useRef(!1),
      de = o.useRef(null),
      pe = (0, i.useStableCallback)((e) => {
        ue.current !== e && ((ue.current = e), B(e), k?.(e));
      });
    function fe(e) {
      if (!e) return;
      if ("function" != typeof S) return void (ie.current = A);
      const t = r.current;
      if (!t) return;
      const n = S({ element: t, direction: e });
      ie.current = Math.max(0, n);
    }
    const he = (0, i.useStableCallback)((e, t) => {
        const n = Number.isFinite(e) ? (0, c.clamp)(e, 0, 1) : 0,
          r = n !== oe.current;
        let o = !1;
        if (t) {
          const e = ce.current;
          o =
            !e ||
            e.deltaX !== t.deltaX ||
            e.deltaY !== t.deltaY ||
            e.direction !== t.direction;
        }
        (r || o) &&
          ((oe.current = n),
          t ? (ce.current = t) : r && (ce.current = null),
          x?.(n, t));
      }),
      me = (0, i.useStableCallback)((e) => {
        const t = r.current;
        if (!C || !t) return void (e || (de.current = null));
        const n = t.style,
          o = de.current;
        e
          ? (o || (de.current = [n.transition, n.transform]),
            (n.transition = "none"))
          : o && (([n.transition, n.transform] = o), (de.current = null));
        const i = q.current,
          a = W.current,
          s = i.x - a.x,
          l = i.y - a.y;
        e && (n.transform = h(i, a.scale)),
          n.setProperty(g.x, `${s}px`),
          n.setProperty(g.y, `${l}px`);
      });
    function ge(e, t) {
      if (null === t) return;
      const n = se.current;
      if (n && t > n.time) {
        const r = Math.max(t - n.time, 16);
        le.current = { x: (e.x - n.x) / r, y: (e.y - n.y) / r };
      }
      se.current = { x: e.x, y: e.y, time: t };
    }
    const ye = o.useCallback(() => {
      F(void 0),
        pe(!1),
        H(!1),
        he(0),
        (ie.current = A),
        (V.current = { x: 0, y: 0 }),
        (q.current = { x: 0, y: 0 }),
        (W.current = { x: 0, y: 0, scale: 1 }),
        ($.current = void 0),
        (Y.current = 0),
        (K.current = !1),
        (Z.current = { x: 0, y: 0 }),
        (Q.current = null),
        (J.current = !1),
        (G.current = null),
        (X.current = !1),
        (ee.current = null),
        (te.current = !1),
        (ne.current = !1),
        (re.current = { width: 0, height: 0 }),
        (ae.current = null),
        (se.current = null),
        (le.current = { x: 0, y: 0 }),
        (ce.current = null),
        me(!1);
    }, [pe, A, me, he]);
    function ve(e) {
      if ("touches" in e) {
        const t = e.touches[0];
        return t ? { x: t.clientX, y: t.clientY } : null;
      }
      return { x: e.clientX, y: e.clientY };
    }
    function be(e) {
      return "touches" in e || "touch" === e.pointerType;
    }
    function Se(e, t) {
      const n = (0, a.ownerDocument)(r.current);
      return (0, u.getElementAtPoint)(n, e.x, e.y) ?? (0, s.getTarget)(t);
    }
    function _e(e, t) {
      return N && !D
        ? (0, l.findScrollableTouchTarget)(e, t, "horizontal")
        : D && !N
          ? (0, l.findScrollableTouchTarget)(e, t, "vertical")
          : ((0, l.findScrollableTouchTarget)(e, t, "vertical") ??
            (0, l.findScrollableTouchTarget)(e, t, "horizontal"));
    }
    function xe(e, t, n) {
      te.current = !1;
      const o = be(e),
        i = Se(t, e.nativeEvent),
        s = (0, a.ownerDocument)(r.current).body,
        c = o && s ? _e(i, s) : null,
        u = n?.ignoreScrollableTarget ?? !1;
      if (c && !u) return !1;
      if (
        ((te.current = Boolean(c && u)),
        i &&
          i.closest('button,a,input,select,textarea,label,[role="button"]') &&
          (!o || v))
      )
        return !1;
      const d = r.current;
      if (
        b &&
        d &&
        i &&
        j.length > 0 &&
        !n?.ignoreScrollableAncestors &&
        (0, l.hasScrollableAncestor)(i, d, j)
      )
        return !1;
      if (
        ((K.current = !1),
        ($.current = void 0),
        (Y.current = 0),
        (V.current = t),
        (ae.current = f(e.timeStamp)),
        (Z.current = t),
        (G.current = t),
        d)
      ) {
        (re.current = {
          width: d.offsetWidth,
          height: d.offsetHeight,
        }),
          fe(I);
        const t = p(d);
        (W.current = t),
          (q.current = { x: t.x, y: t.y }),
          ge({ x: t.x, y: t.y }, ae.current),
          "touches" in e || m(d, e.pointerId, "setPointerCapture");
      }
      return (
        E?.(e.nativeEvent),
        pe(!0),
        (Q.current = null),
        (J.current = !0),
        he(0),
        me(!0),
        !0
      );
    }
    function we() {
      Ee(), (te.current = !1), (G.current = null);
    }
    function Ee() {
      (X.current = !1), (ee.current = null);
    }
    o.useEffect(() => {
      "function" != typeof S && (ie.current = A);
    }, [A, S]);
    const Te = (0, i.useStableCallback)((e) => {
      if (!t) return;
      if (e.defaultPrevented || e.nativeEvent.defaultPrevented) return;
      if (!("touches" in e) && 0 !== e.button) return;
      const n = ve(e);
      n &&
        ((X.current = !0),
        (ee.current = n),
        (te.current = !1),
        (ne.current = !1),
        (!y || y(n, { nativeEvent: e.nativeEvent, direction: I })) &&
          xe(e, n) &&
          Ee());
    });
    const ke = (0, i.useStableCallback)((e) => {
        if (!t) return;
        const o = q.current,
          i = W.current,
          a = o.x - i.x,
          s = o.y - i.y,
          l = { deltaX: a, deltaY: s, direction: $.current };
        if (!ue.current) return we(), void he(0, l);
        pe(!1), (Q.current = null), we(), (ne.current = !1);
        const c = r.current;
        c && ("touches" in e || m(c, e.pointerId, "releasePointerCapture"));
        const u = a,
          d = s,
          p = ae.current,
          h = f(e.timeStamp),
          g = null !== p && null !== h && h > p ? h - p : 0,
          y = g > 0 ? Math.max(g, 50) : 0,
          v = y > 0 ? u / y : 0,
          b = y > 0 ? d / y : 0;
        let S = le.current.x,
          x = le.current.y;
        const w = se.current;
        if (w && null !== h && h >= w.time) {
          const e = h - w.time;
          if (e <= 80) {
            const t = Math.max(e, 16),
              n = (o.x - w.x) / t,
              r = (o.y - w.y) / t;
            0 !== n && (S = n), 0 !== r && (x = r);
          } else (S = 0), (x = 0);
        }
        const E = T?.({
            event: e.nativeEvent,
            direction: $.current,
            deltaX: u,
            deltaY: d,
            velocityX: v,
            velocityY: b,
            releaseVelocityX: S,
            releaseVelocityY: x,
          }),
          k = "boolean" == typeof E;
        if (K.current && !k)
          return (
            (q.current = { x: i.x, y: i.y }), F(void 0), me(!1), void he(0, l)
          );
        let C,
          A = !1;
        if (k) (A = E), (C = $.current ?? I);
        else
          for (const e of n) {
            switch (e) {
              case "right":
                u > ie.current && ((A = !0), (C = "right"));
                break;
              case "left":
                u < -ie.current && ((A = !0), (C = "left"));
                break;
              case "down":
                d > ie.current && ((A = !0), (C = "down"));
                break;
              case "up":
                d < -ie.current && ((A = !0), (C = "up"));
            }
            if (A) break;
          }
        A && C
          ? (F(C), H(!0), me(!1), _?.(e.nativeEvent, { direction: C }))
          : ((q.current = { x: i.x, y: i.y }), F(void 0), me(!1), he(0, l));
      }),
      Ce = (0, i.useStableCallback)((e) => {
        const n = ve(e);
        if (!n) return;
        let o = !1;
        if (!("touches" in e)) {
          const t = e.buttons % 2 == 1;
          if ((t && (ne.current = !0), 0 !== e.buttons && !t))
            return void (function (e) {
              if ((we(), !ue.current)) return;
              pe(!1), (Q.current = null);
              const t = W.current;
              (q.current = { x: t.x, y: t.y }),
                F(void 0),
                (ne.current = !1),
                me(!1);
              const n = r.current;
              n && m(n, e.pointerId, "releasePointerCapture"),
                he(0, { deltaX: 0, deltaY: 0, direction: void 0 }),
                w?.(e.nativeEvent);
            })(e);
          if (0 === e.buttons && ne.current) {
            if (!ue.current) return void ke(e);
            o = !0;
          }
        }
        if (!U && X.current) {
          if (!be(e) && (e.defaultPrevented || e.nativeEvent.defaultPrevented))
            return void we();
          if (!y || y(n, { nativeEvent: e.nativeEvent, direction: I })) {
            const t = ee.current;
            let o = !1;
            if (be(e)) {
              const i = r.current;
              if (t && i) {
                const r = Se(n, e.nativeEvent),
                  l = (0, a.ownerDocument)(i).body,
                  c = l ? _e(r, l) : null;
                if (c && ((0, s.contains)(i, c) || (0, s.contains)(c, i))) {
                  const e = (function (e, t, n) {
                    const r = Math.abs(t),
                      o = Math.abs(n);
                    if (D && 0 !== n && (!N || o >= r)) {
                      const t = Math.max(0, e.scrollHeight - e.clientHeight),
                        r = e.scrollTop <= 0,
                        o = e.scrollTop >= t;
                      return (n > 0 && r && P) || (n < 0 && o && M);
                    }
                    if (N && 0 !== t && (!D || r > o)) {
                      const n = Math.max(0, e.scrollWidth - e.clientWidth),
                        r = e.scrollLeft <= 0,
                        o = e.scrollLeft >= n;
                      return (t > 0 && r && R) || (t < 0 && o && O);
                    }
                    return null;
                  })(c, n.x - t.x, n.y - t.y);
                  if (!1 === e) return;
                  !0 === e && (o = !0);
                }
              }
            }
            xe(e, n, {
              ignoreScrollableTarget: o,
              ignoreScrollableAncestors: o,
            }) &&
              (t && o
                ? (Ee(),
                  (V.current = t),
                  (Z.current = t),
                  (G.current = t),
                  (J.current = !1))
                : (Ee(), (te.current = !1)));
          }
        }
        const i = G.current,
          l = null === i ? { x: 0, y: 0 } : { x: n.x - i.x, y: n.y - i.y };
        (G.current = n),
          (function (e, n, r) {
            if (!t || !ue.current) return;
            const o = (0, s.getTarget)(e.nativeEvent);
            if (be(e) && !te.current && _e(o, e.currentTarget)) return;
            if (("touches" in e || e.preventDefault(), J.current)) {
              V.current = n;
              const t = f(e.timeStamp);
              null !== t && (ae.current = t), (J.current = !1);
            }
            const i = n.x,
              a = n.y,
              l = r.x,
              c = r.y;
            ((c < 0 && a > Z.current.y) || (c > 0 && a < Z.current.y)) &&
              (Z.current = { x: Z.current.x, y: a }),
              ((l < 0 && i > Z.current.x) || (l > 0 && i < Z.current.x)) &&
                (Z.current = { x: i, y: Z.current.y });
            const u = i - V.current.x,
              p = a - V.current.y,
              h = a - Z.current.y,
              m = i - Z.current.x;
            let g,
              y = Q.current;
            if (
              (null === y &&
                N &&
                D &&
                Math.sqrt(u * u + p * p) >= 1 &&
                ((y = Math.abs(u) > Math.abs(p) ? "horizontal" : "vertical"),
                (Q.current = y)),
              $.current)
            ) {
              const e = $.current,
                t = d(e, m, h);
              t > ie.current
                ? ((K.current = !1), F(e))
                : (O && R) ||
                  (M && P) ||
                  !(Y.current - t >= 10) ||
                  (K.current = !0);
            } else
              "vertical" === y
                ? p > 0
                  ? (g = "down")
                  : p < 0 && (g = "up")
                : "horizontal" === y
                  ? u > 0
                    ? (g = "right")
                    : u < 0 && (g = "left")
                  : (g =
                      Math.abs(u) >= Math.abs(p)
                        ? u > 0
                          ? "right"
                          : "left"
                        : p > 0
                          ? "down"
                          : "up"),
                g &&
                  (("left" === g && O) ||
                    ("right" === g && R) ||
                    ("up" === g && M) ||
                    ("down" === g && P)) &&
                  (($.current = g), (Y.current = d(g, u, p)), F(g), fe(g));
            const v = (function (e, t) {
              const n = (e) => (e >= 0 ? e ** 0.5 : -(Math.abs(e) ** 0.5)),
                r = (e, t, r) => ((!t && e < 0) || (!r && e > 0) ? n(e) : e);
              return {
                x: N ? r(e, O, R) : n(e),
                y: D ? r(t, M, P) : n(t),
              };
            })(u, p);
            let b = W.current.x,
              S = W.current.y;
            "horizontal" === y
              ? N && (b += v.x)
              : ("vertical" === y || (N && (b += v.x)), D && (S += v.y)),
              (q.current = { x: b, y: S }),
              me(!0),
              ge({ x: b, y: S }, f(e.timeStamp));
            const _ = b - W.current.x,
              x = S - W.current.y,
              w = $.current,
              E = I ?? $.current;
            if (!E)
              return void he(0, {
                deltaX: _,
                deltaY: x,
                direction: w,
              });
            const T =
                "left" === E || "right" === E
                  ? re.current.width
                  : re.current.height,
              k = W.current.scale || 1;
            if (T <= 0 || k <= 0)
              return void he(0, {
                deltaX: _,
                deltaY: x,
                direction: w,
              });
            const C = d(E, b - W.current.x, S - W.current.y);
            he(C <= 0 ? 0 : C / (T * k), {
              deltaX: _,
              deltaY: x,
              direction: w,
            });
          })(e, n, l),
          o && !("touches" in e) && ke(e);
      }),
      Ie = (0, i.useStableCallback)((e, t) => {
        Ce({
          touches: e.touches,
          currentTarget: t,
          nativeEvent: e,
          defaultPrevented: e.defaultPrevented,
          timeStamp: e.timeStamp,
        });
      }),
      Ae = o.useCallback(() => {
        const e = q.current,
          t = W.current,
          n = e.x - t.x,
          r = e.y - t.y;
        return U || 0 !== n || 0 !== r || z
          ? {
              transition: U ? "none" : void 0,
              transform: U ? h(e, t.scale) : void 0,
              [g.x]: `${n}px`,
              [g.y]: `${r}px`,
            }
          : { [g.x]: "0px", [g.y]: "0px" };
      }, [z, U, g]),
      Oe = o.useCallback(
        () =>
          t
            ? {
                onPointerDown: Te,
                onPointerMove: Ce,
                onPointerUp: ke,
                onPointerCancel: ke,
              }
            : {},
        [t, ke, Ce, Te],
      ),
      Re = o.useCallback(
        () =>
          t
            ? {
                onTouchStart: Te,
                onTouchMove: Ce,
                onTouchEnd: ke,
                onTouchCancel: ke,
              }
            : {},
        [t, ke, Ce, Te],
      );
    return {
      swiping: U,
      swipeDirection: L,
      dragDismissed: z,
      getPointerProps: Oe,
      getTouchProps: Re,
      moveNative: Ie,
      getDragStyles: Ae,
      reset: ye,
    };
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(854 /* vendor/module-854 */),
  s = n(65200 /* vendor/module-65200 */),
  l = n(77324 /* vendor/module-77324 */),
  c = n(41153 /* vendor/module-41153 */),
  u = n(71256 /* vendor/module-71256 */);
function d(e, t, n) {
  switch (e) {
    case "up":
      return -n;
    case "down":
      return n;
    case "left":
      return -t;
    case "right":
      return t;
    default:
      return 0;
  }
}
function p(e) {
  const t = (0, a.ownerWindow)(e).getComputedStyle(e).transform;
  let n = 0,
    r = 0,
    o = 1;
  if (t && "none" !== t) {
    const e = t.match(/matrix(?:3d)?\(([^)]+)\)/);
    if (e) {
      const t = e[1].split(", ").map(parseFloat);
      6 === t.length
        ? ((n = t[4]), (r = t[5]), (o = Math.sqrt(t[0] * t[0] + t[1] * t[1])))
        : 16 === t.length && ((n = t[12]), (r = t[13]), (o = t[0]));
    }
  }
  return { x: n, y: r, scale: o };
}
function f(e) {
  return Number.isFinite(e) && e > 0 ? e : null;
}
function h(e, t) {
  return `translate3d(${e.x}px,${e.y}px,0) scale(${t})`;
}
function m(e, t, n) {
  const r = e[n];
  if ("function" == typeof r)
    try {
      r.call(e, t);
    } catch (e) {
      if (
        e &&
        "object" == typeof e &&
        "name" in e &&
        "NotFoundError" === e.name
      )
        return;
      throw e;
    }
}
