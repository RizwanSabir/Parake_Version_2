// vendor/module-69236.js — webpack module 69236
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useHoverReferenceInteraction = function (e, t = {}) {
    const {
        enabled: n = !0,
        delay: r = 0,
        handleClose: S = null,
        mouseOnly: _ = !1,
        restMs: x = 0,
        move: w = !0,
        triggerElementRef: E = b,
        externalTree: T,
        isActiveTrigger: k = !0,
        getHandleCloseContext: C,
        isClosing: I,
        shouldOpen: A,
      } = t,
      O = "rootStore" in e ? e.rootStore : e,
      { dataRef: R, events: M } = O.context,
      P = (0, h.useFloatingTree)(T),
      N = (0, y.useHoverInteractionSharedState)(O),
      D = o.useRef(!1),
      j = (0, u.useValueAsRef)(S),
      L = (0, u.useValueAsRef)(r),
      F = (0, u.useValueAsRef)(x),
      U = (0, u.useValueAsRef)(n),
      B = (0, u.useValueAsRef)(A),
      z = (0, u.useValueAsRef)(I),
      H = (0, c.useStableCallback)(() =>
        (0, v.isClickLikeOpenEvent)(
          R.current.openEvent?.type,
          N.interactedInside,
        ),
      ),
      V = (0, c.useStableCallback)(() => !1 !== B.current?.()),
      q = (0, c.useStableCallback)((e, t, n) => {
        const r = O.context.triggerElements;
        if (r.hasElement(t)) return !e || !(0, m.contains)(e, t);
        if (!(0, d.isElement)(n)) return !1;
        const o = n;
        return (
          r.hasMatchingElement((e) => (0, m.contains)(e, o)) &&
          (!e || !(0, m.contains)(e, o))
        );
      }),
      G = (0, c.useStableCallback)(() => {
        N.handler &&
          ((0, l.ownerDocument)(
            O.select("domReferenceElement"),
          ).removeEventListener("mousemove", N.handler),
          (N.handler = void 0));
      }),
      W = (0, c.useStableCallback)(() => {
        (0, y.clearSafePolygonPointerEventsMutation)(N);
      });
    return (
      k && (N.handleCloseOptions = j.current?.__options),
      o.useEffect(() => G, [G]),
      o.useEffect(() => {
        if (n)
          return (
            M.on("openchange", e),
            () => {
              M.off("openchange", e);
            }
          );
        function e(e) {
          e.open
            ? (D.current = !1)
            : ((D.current = e.reason === f.REASONS.triggerHover),
              G(),
              N.openChangeTimeout.clear(),
              N.restTimeout.clear(),
              (N.blockMouseMove = !0),
              (N.restTimeoutPending = !1));
        }
      }, [n, M, N, G]),
      o.useEffect(() => {
        if (!n) return;
        function e(e, t = !0) {
          const n = (0, v.getDelay)(L.current, "close", N.pointerType);
          n
            ? N.openChangeTimeout.start(n, () => {
                O.setOpen(
                  !1,
                  (0, p.createChangeEventDetails)(f.REASONS.triggerHover, e),
                ),
                  P?.events.emit("floating.closed", e);
              })
            : t &&
              (N.openChangeTimeout.clear(),
              O.setOpen(
                !1,
                (0, p.createChangeEventDetails)(f.REASONS.triggerHover, e),
              ),
              P?.events.emit("floating.closed", e));
        }
        const t = E.current ?? (k ? O.select("domReferenceElement") : null);
        if ((0, d.isElement)(t))
          return w
            ? (0, s.mergeCleanups)(
                (0, a.addEventListener)(t, "mousemove", r, {
                  once: !0,
                }),
                (0, a.addEventListener)(t, "mouseenter", r),
                (0, a.addEventListener)(t, "mouseleave", o),
              )
            : (0, s.mergeCleanups)(
                (0, a.addEventListener)(t, "mouseenter", r),
                (0, a.addEventListener)(t, "mouseleave", o),
              );
        function r(e) {
          if (
            (N.openChangeTimeout.clear(),
            (N.blockMouseMove = !1),
            _ && !(0, g.isMouseLikePointerType)(N.pointerType))
          )
            return;
          const t = (0, v.getRestMs)(F.current),
            n = (0, v.getDelay)(L.current, "open", N.pointerType),
            r = (0, m.getTarget)(e),
            o = e.currentTarget ?? null,
            i = O.select("domReferenceElement");
          let a = o;
          if ((0, d.isElement)(r) && !O.context.triggerElements.hasElement(r))
            for (const e of O.context.triggerElements.elements())
              if ((0, m.contains)(e, r)) {
                a = e;
                break;
              }
          (0, d.isElement)(o) &&
            (0, d.isElement)(i) &&
            !O.context.triggerElements.hasElement(o) &&
            (0, m.contains)(o, i) &&
            (a = i);
          const s = null != a && q(i, a, r),
            l = O.select("open"),
            c = z.current?.() ?? "ending" === O.select("transitionStatus"),
            u = !l && c && D.current,
            h =
              !s &&
              (0, d.isElement)(a) &&
              (0, d.isElement)(i) &&
              (0, m.contains)(i, a) &&
              u,
            y = t > 0 && !n,
            b = !l || s;
          (s && (l || u)) || h
            ? V() &&
              O.setOpen(
                !0,
                (0, p.createChangeEventDetails)(f.REASONS.triggerHover, e, a),
              )
            : y ||
              (n
                ? N.openChangeTimeout.start(n, () => {
                    b &&
                      V() &&
                      O.setOpen(
                        !0,
                        (0, p.createChangeEventDetails)(
                          f.REASONS.triggerHover,
                          e,
                          a,
                        ),
                      );
                  })
                : b &&
                  V() &&
                  O.setOpen(
                    !0,
                    (0, p.createChangeEventDetails)(
                      f.REASONS.triggerHover,
                      e,
                      a,
                    ),
                  ));
        }
        function o(t) {
          if (H()) return void W();
          G();
          const n = O.select("domReferenceElement"),
            r = (0, l.ownerDocument)(n);
          N.restTimeout.clear(), (N.restTimeoutPending = !1);
          const o = R.current.floatingContext ?? C?.();
          if (
            !(0, v.isInsideEnabledTrigger)(
              t.relatedTarget,
              O.context.triggerElements,
            )
          ) {
            if (j.current && o) {
              O.select("open") || N.openChangeTimeout.clear();
              const n = E.current;
              return (
                (N.handler = j.current({
                  ...o,
                  tree: P,
                  x: t.clientX,
                  y: t.clientY,
                  onClose() {
                    W(),
                      G(),
                      U.current &&
                        !H() &&
                        n === O.select("domReferenceElement") &&
                        e(t, !0);
                  },
                })),
                r.addEventListener("mousemove", N.handler),
                void N.handler(t)
              );
            }
            ("touch" !== N.pointerType ||
              !(0, m.contains)(O.select("floatingElement"), t.relatedTarget)) &&
              e(t);
          }
        }
      }, [G, W, R, L, O, n, j, N, k, q, H, _, w, F, E, P, U, C, z, V]),
      o.useMemo(() => {
        if (n)
          return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
              const { nativeEvent: t } = e,
                n = e.currentTarget,
                r = O.select("domReferenceElement"),
                o = O.select("open"),
                a = q(r, n, e.target);
              if (_ && !(0, g.isMouseLikePointerType)(N.pointerType)) return;
              if (o && a && N.handleCloseOptions?.blockPointerEvents) {
                const e = O.select("floatingElement");
                if (e) {
                  const t =
                    N.handleCloseOptions?.getScope?.() ?? n.ownerDocument.body;
                  (0, y.applySafePolygonPointerEventsMutation)(N, {
                    scopeElement: t,
                    referenceElement: n,
                    floatingElement: e,
                  });
                }
              }
              const s = (0, v.getRestMs)(F.current);
              function l() {
                if (((N.restTimeoutPending = !1), H())) return;
                const e = O.select("open");
                N.blockMouseMove ||
                  (e && !a) ||
                  !V() ||
                  O.setOpen(
                    !0,
                    (0, p.createChangeEventDetails)(
                      f.REASONS.triggerHover,
                      t,
                      n,
                    ),
                  );
              }
              (o && !a) ||
                0 === s ||
                (!a &&
                  N.restTimeoutPending &&
                  e.movementX ** 2 + e.movementY ** 2 < 2) ||
                (N.restTimeout.clear(),
                "touch" === N.pointerType
                  ? i.flushSync(() => {
                      l();
                    })
                  : a && o
                    ? l()
                    : ((N.restTimeoutPending = !0), N.restTimeout.start(s, l)));
            },
          };
        function e(e) {
          N.pointerType = e.pointerType;
        }
      }, [n, N, H, q, _, O, F, V])
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(23504 /* vendor/module-23504 */),
  s = n(38592 /* vendor/module-38592 */),
  l = n(854 /* vendor/module-854 */),
  c = n(4674 /* vendor/module-4674 */),
  u = n(71740 /* vendor/module-71740 */),
  d = n(81339 /* vendor/module-81339 */),
  p = n(22877 /* vendor/module-22877 */),
  f = n(82063 /* vendor/module-82063 */),
  h = n(33406 /* vendor/module-33406 */),
  m = n(80475 /* vendor/module-80475 */),
  g = n(76475 /* vendor/module-76475 */),
  y = n(17517 /* vendor/module-17517 */),
  v = n(63514 /* vendor/module-63514 */);
const b = { current: null };
