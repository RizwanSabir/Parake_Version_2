// vendor/module-3385.js — webpack module 3385
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.normalizeProp = S),
  (t.useDismiss = function (e, t = {}) {
    const {
        enabled: n = !0,
        escapeKey: r = !0,
        outsidePress: _ = !0,
        outsidePressEvent: x = "sloppy",
        referencePress: w = b,
        bubbles: E,
        externalTree: T,
      } = t,
      k = "rootStore" in e ? e.rootStore : e,
      C = k.useState("open"),
      I = k.useState("floatingElement"),
      { dataRef: A } = k.context,
      O = (0, p.useFloatingTree)(T),
      R = (0, l.useStableCallback)("function" == typeof _ ? _ : () => !1),
      M = "function" == typeof _ ? R : _,
      P = !1 !== M,
      N = (0, l.useStableCallback)(() => x),
      { escapeKey: D, outsidePress: j } = S(E),
      L = o.useRef(!1),
      F = o.useRef(!1),
      U = o.useRef(!1),
      B = o.useRef(!1),
      z = o.useRef(""),
      H = o.useRef(null),
      V = (0, c.useTimeout)(),
      q = (0, c.useTimeout)(),
      G = (0, l.useStableCallback)(() => {
        q.clear(), (A.current.insideReactTree = !1);
      }),
      W = (0, l.useStableCallback)((e) => {
        const t = A.current.floatingContext?.nodeId;
        return (O ? (0, v.getNodeChildren)(O.nodesRef.current, t) : []).some(
          (t) => t.context?.open && !t.context.dataRef.current[e],
        );
      }),
      $ = (0, l.useStableCallback)(
        (e) =>
          (0, g.isEventTargetWithin)(e, k.select("floatingElement")) ||
          (0, g.isEventTargetWithin)(e, k.select("domReferenceElement")),
      ),
      Y = (0, l.useStableCallback)((e) => {
        w() &&
          k.setOpen(
            !1,
            (0, f.createChangeEventDetails)(
              h.REASONS.triggerPress,
              e.nativeEvent,
            ),
          );
      }),
      K = (0, l.useStableCallback)((e) => {
        if (!C || !n || !r || "Escape" !== e.key) return;
        if (B.current) return;
        if (!D && W("__escapeKeyBubbles")) return;
        const t = (0, y.isReactEvent)(e) ? e.nativeEvent : e,
          o = (0, f.createChangeEventDetails)(h.REASONS.escapeKey, t);
        k.setOpen(!1, o),
          o.isCanceled || e.preventDefault(),
          D || o.isPropagationAllowed || e.stopPropagation();
      }),
      Z = (0, l.useStableCallback)(() => {
        (A.current.insideReactTree = !0), q.start(0, G);
      }),
      Q = (0, l.useStableCallback)((e) => {
        if (!C || !n || 0 !== e.button) return;
        const t = (0, g.getTarget)(e.nativeEvent);
        (0, g.contains)(k.select("floatingElement"), t) &&
          (L.current || ((L.current = !0), (F.current = !1)));
      }),
      J = (0, l.useStableCallback)((e) => {
        C &&
          n &&
          (e.defaultPrevented || e.nativeEvent.defaultPrevented) &&
          L.current &&
          (F.current = !0);
      });
    o.useEffect(() => {
      if (!C || !n) return;
      (A.current.__escapeKeyBubbles = D), (A.current.__outsidePressBubbles = j);
      const e = new c.Timeout(),
        t = new c.Timeout();
      function o() {
        (U.current = !0),
          t.start(0, () => {
            U.current = !1;
          });
      }
      function l() {
        (L.current = !1), (F.current = !1);
      }
      function p() {
        const e = z.current,
          t = "pen" !== e && e ? e : "mouse",
          n = N(),
          r = "function" == typeof n ? n() : n;
        return "string" == typeof r ? r : r[t];
      }
      function y(e) {
        const t = A.current.floatingContext?.nodeId,
          n =
            O &&
            (0, v.getNodeChildren)(O.nodesRef.current, t).some((t) =>
              (0, g.isEventTargetWithin)(e, t.context?.elements.floating),
            );
        return $(e) || n;
      }
      function b(e) {
        if (
          (function (e) {
            const t = p();
            return (
              ("intentional" === t && "click" !== e.type) ||
              ("sloppy" === t && "click" === e.type)
            );
          })(e)
        )
          return (
            "click" === e.type || $(e) || (t.clear(), (U.current = !1)),
            void G()
          );
        if (A.current.insideReactTree) return void G();
        const n = (0, g.getTarget)(e),
          r = `[${(0, m.createAttribute)("inert")}]`,
          o = (0, u.isElement)(n) ? n.getRootNode() : null,
          i = Array.from(
            ((0, u.isShadowRoot)(o)
              ? o
              : (0, s.ownerDocument)(k.select("floatingElement"))
            ).querySelectorAll(r),
          ),
          a = k.context.triggerElements;
        if (
          n &&
          (a.hasElement(n) ||
            a.hasMatchingElement((e) => (0, g.contains)(e, n)))
        )
          return;
        let l = (0, u.isElement)(n) ? n : null;
        for (; l && !(0, u.isLastTraversableNode)(l); ) {
          const e = (0, u.getParentNode)(l);
          if ((0, u.isLastTraversableNode)(e) || !(0, u.isElement)(e)) break;
          l = e;
        }
        if (
          !i.length ||
          !(0, u.isElement)(n) ||
          (0, g.isRootElement)(n) ||
          (0, g.contains)(n, k.select("floatingElement")) ||
          !i.every((e) => !(0, g.contains)(l, e))
        ) {
          if ((0, u.isHTMLElement)(n) && !("touches" in e)) {
            const t = (0, u.isLastTraversableNode)(n),
              r = (0, u.getComputedStyle)(n),
              o = /auto|scroll/,
              i = t || o.test(r.overflowX),
              a = t || o.test(r.overflowY),
              s = i && n.clientWidth > 0 && n.scrollWidth > n.clientWidth,
              l = a && n.clientHeight > 0 && n.scrollHeight > n.clientHeight,
              c = "rtl" === r.direction,
              d =
                l &&
                (c
                  ? e.offsetX <= n.offsetWidth - n.clientWidth
                  : e.offsetX > n.clientWidth),
              p = s && e.offsetY > n.clientHeight;
            if (d || p) return;
          }
          if (!y(e))
            return "intentional" === p() && U.current
              ? (t.clear(), void (U.current = !1))
              : void (
                  ("function" != typeof M || M(e)) &&
                  (W("__outsidePressBubbles") ||
                    (k.setOpen(
                      !1,
                      (0, f.createChangeEventDetails)(
                        h.REASONS.outsidePress,
                        e,
                      ),
                    ),
                    G()))
                );
        }
      }
      function S(e) {
        if ("sloppy" !== p() || !k.select("open") || !n || $(e)) return;
        const t = e.touches[0];
        t &&
          ((H.current = {
            startTime: Date.now(),
            startX: t.clientX,
            startY: t.clientY,
            dismissOnTouchEnd: !1,
            dismissOnMouseDown: !0,
          }),
          V.start(1e3, () => {
            H.current &&
              ((H.current.dismissOnTouchEnd = !1),
              (H.current.dismissOnMouseDown = !1));
          }));
      }
      function _(e, t) {
        const n = (0, g.getTarget)(e);
        if (!n) return;
        const r = (0, i.addEventListener)(n, e.type, () => {
          t(e), r();
        });
      }
      function x(e) {
        V.clear(),
          "pointerdown" === e.type && (z.current = e.pointerType),
          ("mousedown" === e.type &&
            H.current &&
            !H.current.dismissOnMouseDown) ||
            _(e, (e) => {
              "pointerdown" === e.type
                ? (function (e) {
                    "sloppy" === p() &&
                      "touch" !== e.pointerType &&
                      k.select("open") &&
                      n &&
                      !$(e) &&
                      b(e);
                  })(e)
                : b(e);
            });
      }
      function w(e) {
        if (!L.current) return;
        const n = F.current;
        l(),
          "intentional" === p() &&
            ("pointercancel" !== e.type
              ? y(e) ||
                (n
                  ? o()
                  : ("function" != typeof M || M(e)) &&
                    (t.clear(), (U.current = !0), G()))
              : n && o());
      }
      function E(e) {
        if ("sloppy" !== p() || !H.current || $(e)) return;
        const t = e.touches[0];
        if (!t) return;
        const n = Math.abs(t.clientX - H.current.startX),
          r = Math.abs(t.clientY - H.current.startY),
          o = Math.sqrt(n * n + r * r);
        o > 5 && (H.current.dismissOnTouchEnd = !0),
          o > 10 && (b(e), V.clear(), (H.current = null));
      }
      function T(e) {
        "sloppy" === p() &&
          H.current &&
          !$(e) &&
          (H.current.dismissOnTouchEnd && b(e), V.clear(), (H.current = null));
      }
      const R = (0, s.ownerDocument)(I),
        q = (0, a.mergeCleanups)(
          r &&
            (0, a.mergeCleanups)(
              (0, i.addEventListener)(R, "keydown", K),
              (0, i.addEventListener)(R, "compositionstart", function () {
                e.clear(), (B.current = !0);
              }),
              (0, i.addEventListener)(R, "compositionend", function () {
                e.start(d.platform.engine.webkit ? 5 : 0, () => {
                  B.current = !1;
                });
              }),
            ),
          P &&
            (0, a.mergeCleanups)(
              (0, i.addEventListener)(R, "click", x, !0),
              (0, i.addEventListener)(R, "pointerdown", x, !0),
              (0, i.addEventListener)(R, "pointerup", w, !0),
              (0, i.addEventListener)(R, "pointercancel", w, !0),
              (0, i.addEventListener)(R, "mousedown", x, !0),
              (0, i.addEventListener)(R, "mouseup", w, !0),
              (0, i.addEventListener)(
                R,
                "touchstart",
                function (e) {
                  (z.current = "touch"), _(e, S);
                },
                !0,
              ),
              (0, i.addEventListener)(
                R,
                "touchmove",
                function (e) {
                  _(e, E);
                },
                !0,
              ),
              (0, i.addEventListener)(
                R,
                "touchend",
                function (e) {
                  _(e, T);
                },
                !0,
              ),
            ),
        );
      return () => {
        q(), e.clear(), t.clear(), l(), (U.current = !1);
      };
    }, [A, I, r, P, M, C, n, D, j, K, G, N, W, $, O, k, V]),
      o.useEffect(G, [M, G]);
    const X = o.useMemo(
        () => ({ onKeyDown: K, onPointerDown: Y, onClick: Y }),
        [K, Y],
      ),
      ee = o.useMemo(
        () => ({
          onKeyDown: K,
          onPointerDown: J,
          onMouseDown: J,
          onClickCapture: Z,
          onMouseDownCapture(e) {
            Z(), Q(e);
          },
          onPointerDownCapture(e) {
            Z(), Q(e);
          },
          onMouseUpCapture: Z,
          onTouchEndCapture: Z,
          onTouchMoveCapture: Z,
        }),
        [K, Z, Q, J],
      );
    return o.useMemo(
      () => (n ? { reference: X, floating: ee, trigger: X } : {}),
      [n, X, ee],
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(23504 /* vendor/module-23504 */),
  a = n(38592 /* vendor/module-38592 */),
  s = n(854 /* vendor/module-854 */),
  l = n(4674 /* vendor/module-4674 */),
  c = n(54807 /* vendor/module-54807 */),
  u = n(81339 /* vendor/module-81339 */),
  d = n(87177 /* vendor/module-87177 */),
  p = n(33406 /* vendor/module-33406 */),
  f = n(22877 /* vendor/module-22877 */),
  h = n(82063 /* vendor/module-82063 */),
  m = n(48719 /* vendor/module-48719 */),
  g = n(80475 /* vendor/module-80475 */),
  y = n(76475 /* vendor/module-76475 */),
  v = n(43650 /* vendor/module-43650 */);
function b() {
  return !1;
}
function S(e) {
  return {
    escapeKey: "boolean" == typeof e ? e : (e?.escapeKey ?? !1),
    outsidePress: "boolean" == typeof e ? e : (e?.outsidePress ?? !0),
  };
}
