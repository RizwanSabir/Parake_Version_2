// vendor/module-28555.js — webpack module 28555
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useHover = function (e, t = {}) {
    const {
        delay: n = 0,
        handleClose: r = null,
        restMs: v = 0,
        move: b = !0,
      } = t,
      S = "rootStore" in e ? e.rootStore : e,
      _ = S.useState("open"),
      x = S.useState("floatingElement"),
      w = S.useState("domReferenceElement"),
      { dataRef: E, events: T } = S.context,
      k = (0, m.useFloatingTree)(),
      C = (0, m.useFloatingParentNodeId)(),
      I = (0, d.useValueAsRef)(r),
      A = (0, d.useValueAsRef)(n),
      O = (0, d.useValueAsRef)(v),
      R = o.useRef(void 0),
      M = o.useRef(!1),
      P = o.useRef(void 0),
      N = o.useRef(!0),
      D = o.useRef(!1),
      j = o.useRef(() => {}),
      L = o.useRef(!1),
      F = (0, u.useTimeout)(),
      U = (0, u.useTimeout)(),
      B = (0, c.useStableCallback)(() =>
        (0, y.isHoverOpenEvent)(E.current.openEvent?.type),
      ),
      z = (0, c.useStableCallback)(() =>
        (0, y.isClickLikeOpenEvent)(E.current.openEvent?.type, M.current),
      ),
      H = (0, c.useStableCallback)(() => {
        j.current(), (P.current = void 0);
      }),
      V = (0, c.useStableCallback)(() => {
        D.current &&
          (((0, l.ownerDocument)(x).body.style.pointerEvents = ""),
          (D.current = !1));
      });
    o.useEffect(() => {
      function e(e) {
        e.open || (F.clear(), U.clear(), (N.current = !0), (L.current = !1));
      }
      return (
        T.on("openchange", e),
        () => {
          T.off("openchange", e);
        }
      );
    }, [T, F, U]),
      o.useEffect(() => {
        if (!I.current) return;
        if (!_) return;
        const e = (0, l.ownerDocument)(x).documentElement;
        return (0, i.addEventListener)(e, "mouseleave", function (e) {
          z() ||
            (B() &&
              S.setOpen(
                !1,
                (0, f.createChangeEventDetails)(
                  h.REASONS.triggerHover,
                  e,
                  e.currentTarget ?? void 0,
                ),
              ));
        });
      }, [x, _, S, I, B, z]),
      o.useEffect(() => {
        function e(e, t = !0) {
          const n = (0, y.getDelay)(A.current, "close", R.current);
          n && !P.current
            ? F.start(n, () =>
                S.setOpen(
                  !1,
                  (0, f.createChangeEventDetails)(h.REASONS.triggerHover, e),
                ),
              )
            : t &&
              (F.clear(),
              S.setOpen(
                !1,
                (0, f.createChangeEventDetails)(h.REASONS.triggerHover, e),
              ));
        }
        function t(e, t) {
          return I.current && E.current.floatingContext
            ? I.current({
                ...E.current.floatingContext,
                tree: k,
                x: e.clientX,
                y: e.clientY,
                onClose: t,
              })
            : null;
        }
        function n(e) {
          if (
            (F.clear(),
            (N.current = !1),
            (0, y.getRestMs)(O.current) > 0 &&
              !(0, y.getDelay)(A.current, "open"))
          )
            return;
          const t = (0, y.getDelay)(A.current, "open", R.current),
            n = e.currentTarget ?? void 0,
            r = S.select("domReferenceElement"),
            o = r && n && !(0, g.contains)(r, n);
          t
            ? F.start(t, () => {
                S.select("open") ||
                  S.setOpen(
                    !0,
                    (0, f.createChangeEventDetails)(
                      h.REASONS.triggerHover,
                      e,
                      n,
                    ),
                  );
              })
            : (_ && !o) ||
              S.setOpen(
                !0,
                (0, f.createChangeEventDetails)(h.REASONS.triggerHover, e, n),
              );
        }
        function r(n) {
          if (z() || !E.current.floatingContext || !S.select("open")) return;
          const r = S.context.triggerElements;
          (n.relatedTarget && r.hasElement(n.relatedTarget)) ||
            t(n, () => {
              V(), H(), z() || e(n);
            })?.(n);
        }
        const o = w;
        if ((0, p.isElement)(o)) {
          const s = x;
          return (0, a.mergeCleanups)(
            _ && (0, i.addEventListener)(o, "mouseleave", r),
            b &&
              (0, i.addEventListener)(o, "mousemove", n, {
                once: !0,
              }),
            (0, i.addEventListener)(o, "mouseenter", n),
            (0, i.addEventListener)(o, "mouseleave", function (n) {
              if (z()) return void V();
              j.current();
              const r = (0, l.ownerDocument)(x);
              U.clear(), (L.current = !1);
              const o = S.context.triggerElements;
              if (n.relatedTarget && o.hasElement(n.relatedTarget)) return;
              const a = t(n, () => {
                V(), H(), z() || e(n, !0);
              });
              if (a)
                return (
                  _ || F.clear(),
                  (P.current = a),
                  void (j.current = (0, i.addEventListener)(r, "mousemove", a))
                );
              ("touch" !== R.current || !(0, g.contains)(x, n.relatedTarget)) &&
                e(n);
            }),
            s && (0, i.addEventListener)(s, "mouseleave", r),
            s &&
              (0, i.addEventListener)(s, "mouseenter", function () {
                F.clear(), V();
              }),
            s &&
              (0, i.addEventListener)(s, "mouseleave", function (t) {
                z() || e(t, !1);
              }),
            s &&
              (0, i.addEventListener)(
                s,
                "pointerdown",
                function (e) {
                  const t = (0, g.getTarget)(e);
                  (0, g.isInteractiveElement)(t)
                    ? (M.current = !0)
                    : (M.current = !1);
                },
                !0,
              ),
          );
        }
      }, [b, w, x, S, H, V, _, k, A, I, E, z, O, F, U]),
      (0, s.useIsoLayoutEffect)(() => {
        if (_ && I.current?.__options?.blockPointerEvents && B()) {
          D.current = !0;
          const e = x;
          if ((0, p.isElement)(w) && e) {
            const t = (0, l.ownerDocument)(x).body,
              n = w,
              r = k?.nodesRef.current.find((e) => e.id === C)?.context?.elements
                .floating;
            return (
              r && (r.style.pointerEvents = ""),
              (t.style.pointerEvents = "none"),
              (n.style.pointerEvents = "auto"),
              (e.style.pointerEvents = "auto"),
              () => {
                (t.style.pointerEvents = ""),
                  (n.style.pointerEvents = ""),
                  (e.style.pointerEvents = "");
              }
            );
          }
        }
      }, [_, C, k, I, B, w, x]),
      (0, s.useIsoLayoutEffect)(() => {
        _ ||
          ((R.current = void 0), (L.current = !1), (M.current = !1), H(), V());
      }, [_, H, V]),
      o.useEffect(
        () => () => {
          H(), F.clear(), U.clear(), (M.current = !1);
        },
        [w, H, F, U],
      ),
      o.useEffect(() => V, [V]);
    const q = o.useMemo(() => {
      function e(e) {
        R.current = e.pointerType;
      }
      return {
        onPointerDown: e,
        onPointerEnter: e,
        onMouseMove(e) {
          const { nativeEvent: t } = e,
            n = e.currentTarget,
            r =
              S.select("domReferenceElement") &&
              !(0, g.contains)(S.select("domReferenceElement"), e.target);
          function o() {
            N.current ||
              (S.select("open") && !r) ||
              S.setOpen(
                !0,
                (0, f.createChangeEventDetails)(h.REASONS.triggerHover, t, n),
              );
          }
          (S.select("open") && !r) ||
            0 === (0, y.getRestMs)(O.current) ||
            (!r && L.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
            (U.clear(),
            "touch" === R.current || r
              ? o()
              : ((L.current = !0), U.start((0, y.getRestMs)(O.current), o)));
        },
      };
    }, [S, O, U]);
    return o.useMemo(() => ({ reference: q }), [q]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(23504 /* vendor/module-23504 */),
  a = n(38592 /* vendor/module-38592 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(854 /* vendor/module-854 */),
  c = n(4674 /* vendor/module-4674 */),
  u = n(54807 /* vendor/module-54807 */),
  d = n(71740 /* vendor/module-71740 */),
  p = n(81339 /* vendor/module-81339 */),
  f = n(22877 /* vendor/module-22877 */),
  h = n(82063 /* vendor/module-82063 */),
  m = n(33406 /* vendor/module-33406 */),
  g = n(80475 /* vendor/module-80475 */),
  y = n(63514 /* vendor/module-63514 */);
