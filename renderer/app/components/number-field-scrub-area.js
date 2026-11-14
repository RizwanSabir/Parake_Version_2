// app/components/number-field-scrub-area.js — webpack module 6387
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.NumberFieldScrubArea = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(23504 /* vendor/module-23504 */),
  s = n(38592 /* vendor/module-38592 */),
  l = n(854 /* vendor/module-854 */),
  c = n(87177 /* vendor/module-87177 */),
  u = n(4674 /* vendor/module-4674 */),
  d = n(54807 /* vendor/module-54807 */),
  p = n(46007 /* vendor/module-46007 */),
  f = n(5274 /* vendor/module-5274 */),
  h = n(86444 /* vendor/module-86444 */),
  m = n(51909 /* vendor/module-51909 */),
  g = n(53602 /* vendor/module-53602 */),
  y = n(48917 /* vendor/module-48917 */),
  v = n(22877 /* vendor/module-22877 */),
  b = n(82063 /* vendor/module-82063 */),
  S = n(65200 /* vendor/module-65200 */),
  _ = n(31085 /* vendor/module-31085 */);
const x = {
  touchAction: "none",
  WebkitUserSelect: "none",
  userSelect: "none",
};
t.NumberFieldScrubArea = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      direction: w = "horizontal",
      pixelSensitivity: E = 2,
      teleportDistance: T,
      style: k,
      ...C
    } = e,
    {
      state: I,
      setIsScrubbing: A,
      disabled: O,
      readOnly: R,
      inputRef: M,
      incrementValue: P,
      allowInputSyncRef: N,
      getStepAmount: D,
      onValueCommitted: j,
      lastChangedValueRef: L,
      valueRef: F,
    } = (0, p.useNumberFieldRootContext)(),
    U = o.useRef(null),
    B = o.useRef(!1),
    z = o.useRef(!1),
    H = o.useRef(null),
    V = o.useRef(null),
    q = o.useRef({ x: 0, y: 0 }),
    G = o.useRef(1),
    W = (0, d.useTimeout)(),
    [$, Y] = o.useState(!1),
    [K, Z] = o.useState(!1),
    [Q, J] = o.useState(!1);
  function X(e, t) {
    V.current &&
      (V.current.style.transform = `translate3d(${e}px,${t}px,0) scale(${1 / G.current})`);
  }
  o.useEffect(() => {
    if (Q && V.current)
      return (0, y.subscribeToVisualViewportResize)(V.current, G);
  }, [Q]);
  const ee = (0, u.useStableCallback)(({ movementX: e, movementY: t }) => {
      const n = V.current,
        r = U.current;
      if (!n || !r) return;
      const o = (0, g.getViewportRect)(T, r),
        i = q.current,
        a = { x: Math.round(i.x + e), y: Math.round(i.y + t) },
        s = n.offsetWidth,
        l = n.offsetHeight;
      a.x + s / 2 < o.left
        ? (a.x = o.right - s / 2)
        : a.x + s / 2 > o.right && (a.x = o.left - s / 2),
        a.y + l / 2 < o.top
          ? (a.y = o.bottom - l / 2)
          : a.y + l / 2 > o.bottom && (a.y = o.top - l / 2),
        (q.current = a),
        X(a.x, a.y);
    }),
    te = (0, u.useStableCallback)((e, { clientX: t, clientY: n }) => {
      i.flushSync(() => {
        J(e), A(e);
      });
      const r = V.current;
      if (!r || !e) return;
      const o = {
        x: t - r.offsetWidth / 2,
        y: n - r.offsetHeight / 2,
      };
      (q.current = o), X(o.x, o.y);
    });
  o.useEffect(
    function () {
      if (!M.current || O || R || !Q) return;
      let e = 0;
      const t = (0, l.ownerWindow)(M.current),
        n = (0, s.mergeCleanups)(
          (0, a.addEventListener)(
            t,
            "pointerup",
            function (e) {
              function t() {
                try {
                  (0, l.ownerDocument)(U.current).exitPointerLock();
                } catch {
                } finally {
                  (B.current = !1),
                    te(!1, e),
                    j(
                      L.current ?? F.current,
                      (0, v.createGenericEventDetails)(b.REASONS.scrub, e),
                    );
                  const t = H.current,
                    n = M.current;
                  !z.current &&
                    null != t &&
                    n &&
                    t.dispatchEvent(
                      new ((0, l.ownerWindow)(n).MouseEvent)("click", {
                        bubbles: !0,
                        cancelable: !0,
                      }),
                    ),
                    (z.current = !1),
                    (H.current = null);
                }
              }
              c.platform.engine.gecko ? W.start(20, t) : t();
            },
            !0,
          ),
          (0, a.addEventListener)(
            t,
            "pointermove",
            function (t) {
              if (!B.current) return;
              t.preventDefault(), ee(t);
              const { movementX: n, movementY: r } = t;
              if (((e += "vertical" === w ? r : n), Math.abs(e) >= E)) {
                (e = 0), (z.current = !0);
                const o = ("vertical" === w ? -r : n) * D(t);
                0 !== o &&
                  ((N.current = !0),
                  P(Math.abs(o), {
                    direction: o >= 0 ? 1 : -1,
                    event: t,
                    reason: b.REASONS.scrub,
                  }));
              }
            },
            !0,
          ),
        );
      return () => {
        W.clear(), n();
      };
    },
    [O, R, N, P, Q, D, M, te, ee, w, E, L, j, F, W],
  ),
    o.useEffect(
      () => () => {
        if (B.current) {
          (B.current = !1), A(!1);
          try {
            (0, l.ownerDocument)(U.current).exitPointerLock();
          } catch {}
        }
      },
      [A],
    ),
    o.useEffect(
      function () {
        const e = U.current;
        if (e && !O && !R)
          return (0, a.addEventListener)(e, "touchstart", function (e) {
            1 === e.touches.length && e.preventDefault();
          });
      },
      [O, R],
    );
  const ne = {
      role: "presentation",
      style: x,
      async onPointerDown(e) {
        const t = !e.button || 0 === e.button;
        if (e.defaultPrevented || R || !t || O) return;
        const n = "touch" === e.pointerType;
        if (
          (Y(n),
          "mouse" === e.pointerType && (e.preventDefault(), M.current?.focus()),
          (B.current = !0),
          (z.current = !1),
          (H.current = (0, S.getTarget)(e.nativeEvent)),
          te(!0, e.nativeEvent),
          !n && !c.platform.engine.webkit)
        )
          try {
            await (0, l.ownerDocument)(U.current).body.requestPointerLock(),
              Z(!1);
          } catch (e) {
            Z(!0);
          } finally {
            B.current && te(!0, e.nativeEvent);
          }
      },
    },
    re = (0, m.useRenderElement)("span", e, {
      ref: [t, U],
      state: I,
      props: [ne, C],
      stateAttributesMapping: f.stateAttributesMapping,
    }),
    oe = o.useMemo(
      () => ({
        isScrubbing: Q,
        isTouchInput: $,
        isPointerLockDenied: K,
        scrubAreaCursorRef: V,
      }),
      [Q, $, K],
    );
  return (0, _.jsx)(h.NumberFieldScrubAreaContext.Provider, {
    value: oe,
    children: re,
  });
});
