// vendor/module-67861.js — webpack module 67861
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useHoverFloatingInteraction = function (e, t = {}) {
    const { enabled: n = !0, closeDelay: r = 0, nodeId: b } = t,
      S = "rootStore" in e ? e.rootStore : e,
      _ = S.useState("open"),
      x = S.useState("floatingElement"),
      w = S.useState("domReferenceElement"),
      { dataRef: E } = S.context,
      T = (0, h.useFloatingTree)(),
      k = (0, h.useFloatingParentNodeId)(),
      C = (0, y.useHoverInteractionSharedState)(S),
      I = (0, u.useTimeout)(),
      A = (0, c.useStableCallback)(() =>
        (0, v.isClickLikeOpenEvent)(
          E.current.openEvent?.type,
          C.interactedInside,
        ),
      ),
      O = (0, c.useStableCallback)(() =>
        (0, v.isHoverOpenEvent)(E.current.openEvent?.type),
      ),
      R = (0, c.useStableCallback)(() => {
        (0, y.clearSafePolygonPointerEventsMutation)(C);
      });
    (0, s.useIsoLayoutEffect)(() => {
      _ ||
        ((C.pointerType = void 0),
        (C.restTimeoutPending = !1),
        (C.interactedInside = !1),
        R());
    }, [_, C, R]),
      o.useEffect(() => R, [R]),
      (0, s.useIsoLayoutEffect)(() => {
        if (
          n &&
          _ &&
          C.handleCloseOptions?.blockPointerEvents &&
          O() &&
          (0, d.isElement)(w) &&
          x
        ) {
          const e = w,
            t = x,
            n = (0, l.ownerDocument)(x),
            r = T?.nodesRef.current.find((e) => e.id === k)?.context?.elements
              .floating;
          r && (r.style.pointerEvents = "");
          const o =
              C.pointerEventsScopeElement !== t
                ? C.pointerEventsScopeElement
                : null,
            i = r !== t ? r : null,
            a =
              C.handleCloseOptions?.getScope?.() ??
              o ??
              i ??
              e.closest("[data-rootownerid]") ??
              n.body;
          return (
            (0, y.applySafePolygonPointerEventsMutation)(C, {
              scopeElement: a,
              referenceElement: e,
              floatingElement: t,
            }),
            () => {
              R();
            }
          );
        }
      }, [n, _, w, x, C, O, T, k, R]),
      o.useEffect(() => {
        if (!n) return;
        function e() {
          return !!(
            T &&
            k &&
            (0, g.getNodeChildren)(T.nodesRef.current, k).length > 0
          );
        }
        function t(n) {
          T &&
            k &&
            !e() &&
            I.start(0, () => {
              T.events.off("floating.closed", t),
                S.setOpen(
                  !1,
                  (0, p.createChangeEventDetails)(f.REASONS.triggerHover, n),
                ),
                T.events.emit("floating.closed", n);
            });
        }
        const o = x;
        return (0, a.mergeCleanups)(
          o &&
            (0, i.addEventListener)(o, "mouseenter", function () {
              C.openChangeTimeout.clear(),
                I.clear(),
                T?.events.off("floating.closed", t),
                R();
            }),
          o &&
            (0, i.addEventListener)(o, "mouseleave", function (n) {
              if (e() && T) return void T.events.on("floating.closed", t);
              if (
                (0, v.isInsideEnabledTrigger)(
                  n.relatedTarget,
                  S.context.triggerElements,
                )
              )
                return;
              const o = E.current.floatingContext?.nodeId ?? b,
                i = n.relatedTarget;
              (T &&
                o &&
                (0, d.isElement)(i) &&
                (0, g.getNodeChildren)(T.nodesRef.current, o, !1).some((e) =>
                  (0, m.contains)(e.context?.elements.floating, i),
                )) ||
                (C.handler
                  ? C.handler(n)
                  : (R(),
                    O() &&
                      !A() &&
                      (function (e) {
                        const t = (0, v.getDelay)(r, "close", C.pointerType),
                          n = () => {
                            S.setOpen(
                              !1,
                              (0, p.createChangeEventDetails)(
                                f.REASONS.triggerHover,
                                e,
                              ),
                            ),
                              T?.events.emit("floating.closed", e);
                          };
                        t
                          ? C.openChangeTimeout.start(t, n)
                          : (C.openChangeTimeout.clear(), n());
                      })(n)));
            }),
          o &&
            (0, i.addEventListener)(
              o,
              "pointerdown",
              function (e) {
                const t = (0, m.getTarget)(e);
                (0, y.isInteractiveElement)(t)
                  ? (C.interactedInside = null != t?.closest("[aria-haspopup]"))
                  : (C.interactedInside = !1);
              },
              !0,
            ),
          () => {
            T?.events.off("floating.closed", t);
          },
        );
      }, [n, x, S, E, r, b, O, A, R, C, T, k, I]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(23504 /* vendor/module-23504 */),
  a = n(38592 /* vendor/module-38592 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(854 /* vendor/module-854 */),
  c = n(4674 /* vendor/module-4674 */),
  u = n(54807 /* vendor/module-54807 */),
  d = n(81339 /* vendor/module-81339 */),
  p = n(22877 /* vendor/module-22877 */),
  f = n(82063 /* vendor/module-82063 */),
  h = n(33406 /* vendor/module-33406 */),
  m = n(80475 /* vendor/module-80475 */),
  g = n(43650 /* vendor/module-43650 */),
  y = n(17517 /* vendor/module-17517 */),
  v = n(63514 /* vendor/module-63514 */);
