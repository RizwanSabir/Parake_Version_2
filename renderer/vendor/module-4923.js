// vendor/module-4923.js — webpack module 4923
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ESCAPE = void 0),
  (t.useListNavigation = function (e, t) {
    const {
        listRef: n,
        activeIndex: r,
        onNavigate: w = () => {},
        enabled: E = !0,
        selectedIndex: T = null,
        allowEscape: k = !1,
        loopFocus: C = !1,
        nested: I = !1,
        rtl: A = !1,
        virtual: O = !1,
        focusItemOnOpen: R = "auto",
        focusItemOnHover: M = !0,
        openOnArrowKeyDown: P = !0,
        disabledIndices: N,
        orientation: D = "vertical",
        parentOrientation: j,
        id: L,
        resetOnPointerLeave: F = !0,
        externalTree: U,
        grid: B,
      } = t,
      z = null != B,
      H = "rootStore" in e ? e.rootStore : e,
      V = H.useState("open"),
      q = H.useState("floatingElement"),
      G = H.useState("domReferenceElement"),
      W = H.context.dataRef,
      $ = (0, g.getFloatingFocusElement)(q),
      Y = (0, g.isTypeableCombobox)(G),
      K = (0, c.useValueAsRef)($),
      Z = (0, f.useFloatingParentNodeId)(),
      Q = (0, f.useFloatingTree)(U),
      J = o.useRef(R),
      X = o.useRef(T ?? -1),
      ee = o.useRef(null),
      te = o.useRef(!0),
      ne = (0, l.useStableCallback)((e) => {
        w(-1 === X.current ? null : X.current, e);
      }),
      re = o.useRef(!!q),
      oe = o.useRef(V),
      ie = o.useRef(!1),
      ae = o.useRef(!1),
      se = o.useRef(null),
      le = (0, c.useValueAsRef)(N),
      ce = (0, c.useValueAsRef)(V),
      ue = (0, c.useValueAsRef)(T),
      de = (0, c.useValueAsRef)(F),
      pe = (0, i.useAnimationFrame)(),
      fe = (0, i.useAnimationFrame)(),
      he = (0, l.useStableCallback)(() => {
        function e(e) {
          O
            ? Q?.events.emit("virtualfocus", e)
            : (se.current = (0, y.enqueueFocus)(e, {
                sync: ie.current,
                preventScroll: !0,
              }));
        }
        const t = n.current[X.current],
          r = ae.current;
        t && e(t),
          (ie.current ? (e) => e() : (e) => pe.request(e))(() => {
            const o = n.current[X.current] || t;
            o &&
              (t || e(o),
              Se &&
                (r || !te.current) &&
                o.scrollIntoView?.({
                  block: "nearest",
                  inline: "nearest",
                }));
          });
      });
    (0, a.useIsoLayoutEffect)(() => {
      W.current.orientation = D;
    }, [W, D]),
      (0, a.useIsoLayoutEffect)(() => {
        E &&
          (V && q
            ? ((X.current = T ?? -1),
              J.current && null != T && ((ae.current = !0), ne()))
            : re.current && ((X.current = -1), ne()));
      }, [E, V, q, T, ne]),
      (0, a.useIsoLayoutEffect)(() => {
        if (E)
          if (V) {
            if (q)
              if (null == r) {
                if (((ie.current = !1), null != ue.current)) return;
                if (
                  (re.current && ((X.current = -1), he()),
                  (!oe.current || !re.current) &&
                    J.current &&
                    (null != ee.current ||
                      (!0 === J.current && null == ee.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    null == n.current[0]
                      ? (e < 2 &&
                          (e ? (e) => fe.request(e) : queueMicrotask)(t),
                        (e += 1))
                      : ((X.current =
                          null == ee.current || x(ee.current, D, A) || I
                            ? (0, h.getMinListIndex)(n)
                            : (0, h.getMaxListIndex)(n)),
                        (ee.current = null),
                        ne());
                  };
                  t();
                }
              } else
                (0, h.isIndexOutOfListBounds)(n.current, r) ||
                  ((X.current = r), he(), (ae.current = !1));
          } else ie.current = !1;
      }, [E, V, q, r, ue, I, n, D, A, ne, he, fe]),
      (0, a.useIsoLayoutEffect)(() => {
        if (!E || q || !Q || O || !re.current) return;
        const e = Q.nodesRef.current,
          t = e.find((e) => e.id === Z)?.context?.elements.floating,
          n = (0, g.activeElement)((0, s.ownerDocument)(G ?? t ?? null)),
          r = e.some(
            (e) => e.context && (0, g.contains)(e.context.elements.floating, n),
          );
        t && !r && te.current && t.focus({ preventScroll: !0 });
      }, [E, q, G, Q, Z, O]),
      (0, a.useIsoLayoutEffect)(() => {
        (oe.current = V), (re.current = !!q);
      }),
      (0, a.useIsoLayoutEffect)(() => {
        V || ((ee.current = null), (J.current = R));
      }, [V, R]);
    const me = null != r,
      ge = (0, l.useStableCallback)((e) => {
        if (!ce.current) return;
        const t = n.current.indexOf(e.currentTarget);
        -1 === t || (X.current === t && r === t) || ((X.current = t), ne(e));
      }),
      ye = (0, l.useStableCallback)(
        () =>
          j ??
          Q?.nodesRef.current.find((e) => e.id === Z)?.context?.dataRef?.current
            .orientation,
      ),
      ve = (0, l.useStableCallback)(() =>
        (0, h.getMinListIndex)(n, le.current),
      ),
      be = (0, l.useStableCallback)((e) => {
        if (((te.current = !1), (ie.current = !0), 229 === e.which)) return;
        if (!ce.current && e.currentTarget === K.current) return;
        if (
          I &&
          (function (e, t, n, r) {
            const o = n ? e === m.ARROW_RIGHT : e === m.ARROW_LEFT,
              i = e === m.ARROW_UP;
            return "both" === t || ("horizontal" === t && r)
              ? e === b
              : S(t, o, i);
          })(e.key, D, A, z)
        )
          return (
            _(e.key, ye()) || (0, v.stopEvent)(e),
            H.setOpen(
              !1,
              (0, d.createChangeEventDetails)(
                p.REASONS.listNavigation,
                e.nativeEvent,
              ),
            ),
            void (
              (0, u.isHTMLElement)(G) &&
              (O ? Q?.events.emit("virtualfocus", G) : G.focus())
            )
          );
        const t = X.current,
          r = (0, h.getMinListIndex)(n, N),
          o = (0, h.getMaxListIndex)(n, N);
        if (
          (Y ||
            ("Home" === e.key && ((0, v.stopEvent)(e), (X.current = r), ne(e)),
            "End" === e.key && ((0, v.stopEvent)(e), (X.current = o), ne(e))),
          null != B)
        ) {
          const t = B(e, X.current, n, D, C, A, N, r, o);
          if ((null != t && ((X.current = t), ne(e)), "both" === D)) return;
        }
        if (_(e.key, D)) {
          if (
            ((0, v.stopEvent)(e),
            V &&
              !O &&
              (0, g.activeElement)(e.currentTarget.ownerDocument) ===
                e.currentTarget)
          )
            return (X.current = x(e.key, D, A) ? r : o), void ne(e);
          x(e.key, D, A)
            ? C
              ? t >= o
                ? k && t !== n.current.length
                  ? (X.current = -1)
                  : ((ie.current = !1), (X.current = r))
                : (X.current = (0, h.findNonDisabledListIndex)(n.current, {
                    startingIndex: t,
                    disabledIndices: N,
                  }))
              : (X.current = Math.min(
                  o,
                  (0, h.findNonDisabledListIndex)(n.current, {
                    startingIndex: t,
                    disabledIndices: N,
                  }),
                ))
            : C
              ? t <= r
                ? k && -1 !== t
                  ? (X.current = n.current.length)
                  : ((ie.current = !1), (X.current = o))
                : (X.current = (0, h.findNonDisabledListIndex)(n.current, {
                    startingIndex: t,
                    decrement: !0,
                    disabledIndices: N,
                  }))
              : (X.current = Math.max(
                  r,
                  (0, h.findNonDisabledListIndex)(n.current, {
                    startingIndex: t,
                    decrement: !0,
                    disabledIndices: N,
                  }),
                )),
            (0, h.isIndexOutOfListBounds)(n.current, X.current) &&
              (X.current = -1),
            ne(e);
        }
      }),
      Se = o.useMemo(
        () => ({
          onFocus(e) {
            (ie.current = !0), ge(e);
          },
          onClick: ({ currentTarget: e }) => e.focus({ preventScroll: !0 }),
          onMouseMove(e) {
            (ie.current = !0), (ae.current = !1), M && ge(e);
          },
          onPointerLeave(e) {
            if (!ce.current || !te.current || "touch" === e.pointerType) return;
            ie.current = !0;
            const t = e.relatedTarget;
            if (
              M &&
              !n.current.includes(t) &&
              de.current &&
              (se.current?.(), (se.current = null), (X.current = -1), ne(e), !O)
            ) {
              const e = K.current,
                t = (0, g.activeElement)((0, s.ownerDocument)(e));
              e && (0, g.contains)(e, t) && e.focus({ preventScroll: !0 });
            }
          },
        }),
        [ge, ce, K, M, n, ne, de, O],
      ),
      _e = o.useMemo(
        () => O && V && me && { "aria-activedescendant": `${L}-${r}` },
        [O, V, me, L, r],
      ),
      xe = o.useMemo(
        () => ({
          "aria-orientation": "both" === D ? void 0 : D,
          ...(Y ? {} : _e),
          onKeyDown(e) {
            if ("Tab" === e.key && e.shiftKey && V && !O) {
              const t = (0, g.getTarget)(e.nativeEvent);
              if (t && !(0, g.contains)(K.current, t)) return;
              return (
                (0, v.stopEvent)(e),
                H.setOpen(
                  !1,
                  (0, d.createChangeEventDetails)(
                    p.REASONS.focusOut,
                    e.nativeEvent,
                  ),
                ),
                void ((0, u.isHTMLElement)(G) && G.focus())
              );
            }
            be(e);
          },
          onPointerMove() {
            te.current = !0;
          },
        }),
        [_e, be, K, D, Y, H, V, O, G],
      ),
      we = o.useMemo(() => {
        function e(e) {
          H.setOpen(
            !0,
            (0, d.createChangeEventDetails)(
              p.REASONS.listNavigation,
              e.nativeEvent,
              e.currentTarget,
            ),
          );
        }
        function t(e) {
          "auto" === R &&
            (0, v.isVirtualClick)(e.nativeEvent) &&
            (J.current = !O);
        }
        function n(e) {
          (J.current = R),
            "auto" === R &&
              (0, v.isVirtualPointerEvent)(e.nativeEvent) &&
              (J.current = !0);
        }
        return {
          onKeyDown(t) {
            const n = H.select("open");
            te.current = !1;
            const r = t.key.startsWith("Arrow"),
              o = (function (e, t, n) {
                return S(
                  t,
                  n ? e === m.ARROW_LEFT : e === m.ARROW_RIGHT,
                  e === m.ARROW_DOWN,
                );
              })(t.key, ye(), A),
              i = _(t.key, D),
              a = (I ? o : i) || "Enter" === t.key || "" === t.key.trim();
            if (O && n) return be(t);
            if (n || P || !r) {
              if (a) {
                const e = _(t.key, ye());
                ee.current = I && e ? null : t.key;
              }
              I
                ? o &&
                  ((0, v.stopEvent)(t), n ? ((X.current = ve()), ne(t)) : e(t))
                : i &&
                  (null != ue.current && (X.current = ue.current),
                  (0, v.stopEvent)(t),
                  !n && P ? e(t) : be(t),
                  n && ne(t));
            }
          },
          onFocus(e) {
            H.select("open") && !O && ((X.current = -1), ne(e));
          },
          onPointerDown: n,
          onPointerEnter: n,
          onMouseDown: t,
          onClick: t,
        };
      }, [be, R, ve, I, ne, H, P, D, ye, A, ue, O]),
      Ee = o.useMemo(() => ({ ..._e, ...we }), [_e, we]);
    return o.useMemo(
      () => (E ? { reference: Ee, floating: xe, item: Se, trigger: we } : {}),
      [E, Ee, xe, we, Se],
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57569 /* vendor/module-57569 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(854 /* vendor/module-854 */),
  l = n(4674 /* vendor/module-4674 */),
  c = n(71740 /* vendor/module-71740 */),
  u = n(81339 /* vendor/module-81339 */),
  d = n(22877 /* vendor/module-22877 */),
  p = n(82063 /* vendor/module-82063 */),
  f = n(33406 /* vendor/module-33406 */),
  h = n(50684 /* vendor/module-50684 */),
  m = n(65930 /* vendor/module-65930 */),
  g = n(80475 /* vendor/module-80475 */),
  y = n(98437 /* vendor/module-98437 */),
  v = n(76475 /* vendor/module-76475 */);
const b = (t.ESCAPE = "Escape");
function S(e, t, n) {
  switch (e) {
    case "vertical":
      return t;
    case "horizontal":
      return n;
    default:
      return t || n;
  }
}
function _(e, t) {
  return S(
    t,
    e === m.ARROW_UP || e === m.ARROW_DOWN,
    e === m.ARROW_LEFT || e === m.ARROW_RIGHT,
  );
}
function x(e, t, n) {
  return (
    S(t, e === m.ARROW_DOWN, n ? e === m.ARROW_LEFT : e === m.ARROW_RIGHT) ||
    "Enter" === e ||
    " " === e ||
    "" === e
  );
}
