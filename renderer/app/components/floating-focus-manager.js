// app/components/floating-focus-manager.js — webpack module 75181
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FloatingFocusManager = function (e) {
    const {
        context: t,
        children: n,
        disabled: r = !1,
        initialFocus: M = !0,
        returnFocus: L = !0,
        restoreFocus: F = !1,
        modal: U = !0,
        closeOnFocusOut: B = !0,
        openInteractionType: z = "",
        nextFocusableElement: H,
        previousFocusableElement: V,
        beforeContentFocusGuardRef: q,
        externalTree: G,
        getInsideElements: W,
      } = e,
      $ = "rootStore" in t ? t.rootStore : t,
      Y = $.useState("open"),
      K = $.useState("domReferenceElement"),
      Z = $.useState("floatingElement"),
      { events: Q, dataRef: J } = $.context,
      X = (0, u.useStableCallback)(() => J.current.floatingContext?.nodeId),
      ee = !1 === M,
      te = (0, y.isTypeableCombobox)(K) && ee,
      ne = (0, c.useValueAsRef)(M),
      re = (0, c.useValueAsRef)(L),
      oe = (0, c.useValueAsRef)(z),
      ie = (0, c.useValueAsRef)(Y),
      ae = (0, I.useFloatingTree)(G),
      se = (0, C.usePortalContext)(),
      le = o.useRef(!1),
      ce = o.useRef(!1),
      ue = o.useRef(!1),
      de = o.useRef(null),
      pe = o.useRef(""),
      fe = o.useRef(""),
      he = o.useRef(null),
      me = o.useRef(null),
      ge = (0, l.useMergedRefs)(he, q, se?.beforeInsideRef),
      ye = (0, l.useMergedRefs)(me, se?.afterInsideRef),
      ve = (0, p.useTimeout)(),
      be = (0, p.useTimeout)(),
      Se = (0, h.useAnimationFrame)(),
      _e = null != se,
      xe = (0, y.getFloatingFocusElement)(Z),
      we = (0, u.useStableCallback)((e = xe) => (e ? (0, b.tabbable)(e) : [])),
      Ee = (0, u.useStableCallback)(() => W?.().filter((e) => null != e) ?? []);
    o.useEffect(() => {
      if (r || !U) return;
      const e = (0, m.ownerDocument)(xe);
      return (0, a.addEventListener)(e, "keydown", function (e) {
        "Tab" === e.key &&
          (0, y.contains)(xe, (0, y.activeElement)((0, m.ownerDocument)(xe))) &&
          0 === we().length &&
          !te &&
          (0, v.stopEvent)(e);
      });
    }, [r, xe, U, te, we]),
      o.useEffect(() => {
        if (r || !Y) return;
        const e = (0, m.ownerDocument)(xe);
        function t() {
          ue.current = !1;
        }
        return (0, s.mergeCleanups)(
          (0, a.addEventListener)(
            e,
            "pointerdown",
            function (e) {
              const t = (0, y.getTarget)(e),
                n = Ee(),
                r =
                  (0, y.contains)(Z, t) ||
                  (0, y.contains)(K, t) ||
                  (0, y.contains)(se?.portalNode, t) ||
                  n.some((e) => e === t || (0, y.contains)(e, t));
              (ue.current = !r),
                (fe.current = e.pointerType || "keyboard"),
                t?.closest(`[${A.CLICK_TRIGGER_IDENTIFIER}]`) &&
                  ((ce.current = !0),
                  be.start(0, () => {
                    ce.current = !1;
                  }));
            },
            !0,
          ),
          (0, a.addEventListener)(e, "pointerup", t, !0),
          (0, a.addEventListener)(e, "pointercancel", t, !0),
          (0, a.addEventListener)(
            e,
            "keydown",
            function () {
              fe.current = "keyboard";
            },
            !0,
          ),
          t,
        );
      }, [r, Z, K, xe, Y, se, be, Ee]),
      o.useEffect(() => {
        if (r || !B) return;
        const e = (0, m.ownerDocument)(xe);
        function t(t) {
          const n = t.relatedTarget,
            r = t.currentTarget,
            o = (0, y.getTarget)(t);
          U && null == n && null != o && (0, y.contains)(Z, o) && N(o),
            queueMicrotask(() => {
              const a = X(),
                s = $.context.triggerElements,
                l = Ee(),
                c =
                  n?.hasAttribute((0, E.createAttribute)("focus-guard")) &&
                  [
                    he.current,
                    me.current,
                    se?.beforeInsideRef.current,
                    se?.afterInsideRef.current,
                    se?.beforeOutsideRef.current,
                    se?.afterOutsideRef.current,
                    (0, O.resolveRef)(V),
                    (0, O.resolveRef)(H),
                  ].includes(n),
                u = !(
                  (0, y.contains)(K, n) ||
                  (0, y.contains)(Z, n) ||
                  (0, y.contains)(n, Z) ||
                  (0, y.contains)(se?.portalNode, n) ||
                  l.some((e) => e === n || (0, y.contains)(e, n)) ||
                  (null != n && s.hasElement(n)) ||
                  s.hasMatchingElement((e) => (0, y.contains)(e, n)) ||
                  c ||
                  (ae &&
                    ((0, S.getNodeChildren)(ae.nodesRef.current, a).find(
                      (e) =>
                        (0, y.contains)(e.context?.elements.floating, n) ||
                        (0, y.contains)(e.context?.elements.domReference, n),
                    ) ||
                      (0, S.getNodeAncestors)(ae.nodesRef.current, a).find(
                        (e) =>
                          [
                            e.context?.elements.floating,
                            (0, y.getFloatingFocusElement)(
                              e.context?.elements.floating,
                            ),
                          ].includes(n) ||
                          e.context?.elements.domReference === n,
                      )))
                );
              if (
                (r === K && xe && j(xe),
                F &&
                  r !== K &&
                  !(0, _.isElementVisible)(o) &&
                  (0, y.activeElement)(e) === e.body)
              ) {
                if ((0, i.isHTMLElement)(xe) && (xe.focus(), "popup" === F))
                  return void Se.request(() => {
                    xe.focus();
                  });
                const e = we(),
                  t = de.current,
                  n = (t && e.includes(t) ? t : null) || e[e.length - 1] || xe;
                (0, i.isHTMLElement)(n) && n.focus();
              }
              J.current.insideReactTree
                ? (J.current.insideReactTree = !1)
                : (!te && U) ||
                  !n ||
                  !u ||
                  ce.current ||
                  (!te && n === D()) ||
                  ((le.current = !0),
                  $.setOpen(
                    !1,
                    (0, x.createChangeEventDetails)(w.REASONS.focusOut, t),
                  ));
            });
        }
        const n = (0, i.isHTMLElement)(K) ? K : null;
        return Z || n
          ? (0, s.mergeCleanups)(
              n && (0, a.addEventListener)(n, "focusout", t),
              n &&
                (0, a.addEventListener)(n, "pointerdown", function () {
                  (ce.current = !0),
                    be.start(0, () => {
                      ce.current = !1;
                    });
                }),
              Z &&
                (0, a.addEventListener)(Z, "focusin", function (e) {
                  const t = (0, y.getTarget)(e);
                  (0, b.isTabbable)(t) && (de.current = t);
                }),
              Z && (0, a.addEventListener)(Z, "focusout", t),
              Z &&
                se &&
                (0, a.addEventListener)(
                  Z,
                  "focusout",
                  function () {
                    ue.current ||
                      ((J.current.insideReactTree = !0),
                      ve.start(0, () => {
                        J.current.insideReactTree = !1;
                      }));
                  },
                  !0,
                ),
            )
          : void 0;
      }, [r, K, Z, xe, U, ae, se, $, B, F, we, te, X, J, ve, be, Se, H, V, Ee]),
      o.useEffect(() => {
        if (r || !Z || !Y) return;
        const e = Array.from(
            se?.portalNode?.querySelectorAll(
              `[${(0, E.createAttribute)("portal")}]`,
            ) || [],
          ),
          t = ae ? (0, S.getNodeAncestors)(ae.nodesRef.current, X()) : [],
          n = t.find((e) =>
            (0, y.isTypeableCombobox)(e.context?.elements.domReference || null),
          )?.context?.elements.domReference,
          o = [
            Z,
            ...e,
            he.current,
            me.current,
            se?.beforeOutsideRef.current,
            se?.afterOutsideRef.current,
            ...Ee(),
            n,
            (0, O.resolveRef)(V),
            (0, O.resolveRef)(H),
            te ? K : null,
          ].filter((e) => null != e),
          i = (0, k.markOthers)(o, { ariaHidden: U || te, mark: !1 }),
          a = [Z, ...e].filter((e) => null != e),
          s = (0, k.markOthers)(a);
        return () => {
          s(), i();
        };
      }, [Y, r, K, Z, U, se, te, ae, X, H, V, Ee]),
      (0, d.useIsoLayoutEffect)(() => {
        if (!Y || r || !(0, i.isHTMLElement)(xe)) return;
        const e = (0, m.ownerDocument)(xe),
          t = (0, y.activeElement)(e);
        queueMicrotask(() => {
          const n = ne.current,
            r = "function" == typeof n ? n(oe.current || "") : n;
          if (void 0 === r || !1 === r) return;
          if ((0, y.contains)(xe, t)) return;
          let o = null;
          const i = () => (null == o && (o = we(xe)), o[0] || xe);
          let a;
          (a = !0 === r || null === r ? i() : (0, O.resolveRef)(r)),
            (a = a || i());
          const s = (0, y.contains)(xe, (0, y.activeElement)(e));
          (0, T.enqueueFocus)(a, {
            preventScroll: a === xe,
            shouldFocus() {
              if (!ie.current) return !1;
              if (s) return !0;
              const t = (0, y.activeElement)(e);
              return !(t !== a && (0, y.contains)(xe, t));
            },
          });
        });
      }, [r, Y, xe, we, ne, oe, ie]),
      (0, d.useIsoLayoutEffect)(() => {
        if (r || !xe) return;
        const e = (0, m.ownerDocument)(xe),
          t = (0, y.activeElement)(e),
          n = null == oe.current;
        function o(e) {
          if (
            (e.open ||
              (pe.current = (function (e, t) {
                const n = (0, m.ownerWindow)((0, y.getTarget)(e));
                return e instanceof n.KeyboardEvent
                  ? "keyboard"
                  : e instanceof n.FocusEvent
                    ? t || "keyboard"
                    : "pointerType" in e
                      ? e.pointerType || "keyboard"
                      : "touches" in e
                        ? "touch"
                        : e instanceof n.MouseEvent
                          ? t || (0 === e.detail ? "keyboard" : "mouse")
                          : "";
              })(e.nativeEvent, fe.current)),
            e.reason === w.REASONS.triggerHover &&
              "mouseleave" === e.nativeEvent.type &&
              (le.current = !0),
            e.reason === w.REASONS.outsidePress)
          )
            if (e.nested) le.current = !1;
            else if (
              (0, v.isVirtualClick)(e.nativeEvent) ||
              (0, v.isVirtualPointerEvent)(e.nativeEvent)
            )
              le.current = !1;
            else {
              let e = !1;
              (0, m.ownerDocument)(xe)
                .createElement("div")
                .focus({
                  get preventScroll() {
                    return (e = !0), !1;
                  },
                }),
                (le.current = !e);
            }
        }
        return (
          N(t),
          Q.on("openchange", o),
          () => {
            Q.off("openchange", o);
            const r = (0, y.activeElement)(e),
              a = Ee(),
              s =
                (0, y.contains)(Z, r) ||
                a.some((e) => e === r || (0, y.contains)(e, r)) ||
                (ae &&
                  (0, S.getNodeChildren)(ae.nodesRef.current, X(), !1).some(
                    (e) => (0, y.contains)(e.context?.elements.floating, r),
                  )),
              l = re.current,
              c = (function () {
                const e = re.current;
                let r = "function" == typeof e ? e(pe.current) : e;
                if (void 0 === r || !1 === r) return null;
                null === r && (r = !0);
                const o = K?.isConnected ? K : null,
                  a =
                    t?.isConnected && "body" !== (0, i.getNodeName)(t)
                      ? t
                      : null;
                let s = n ? a || o : o || a;
                return (
                  s || (s = D() || null),
                  "boolean" == typeof r ? s : (0, O.resolveRef)(r) || s || null
                );
              })();
            queueMicrotask(() => {
              const t = (o = c)
                  ? (0, b.isTabbable)(o)
                    ? o
                    : (0, b.tabbable)(o)[0] || o
                  : null,
                n = "boolean" != typeof l;
              var o;
              l &&
                !le.current &&
                (0, i.isHTMLElement)(t) &&
                (n || t === r || r === e.body || s) &&
                t.focus({ preventScroll: !0 }),
                (le.current = !1);
            });
          }
        );
      }, [r, Z, xe, re, oe, Q, ae, K, X, Ee]),
      (0, d.useIsoLayoutEffect)(() => {
        if (!f.platform.engine.webkit || Y || !Z) return;
        const e = (0, y.activeElement)((0, m.ownerDocument)(Z));
        (0, i.isHTMLElement)(e) &&
          (0, y.isTypeableElement)(e) &&
          (0, y.contains)(Z, e) &&
          e.blur();
      }, [Y, Z]),
      (0, d.useIsoLayoutEffect)(() => {
        if (!r && se)
          return (
            se.setFocusManagerState({
              modal: U,
              closeOnFocusOut: B,
              open: Y,
              onOpenChange: $.setOpen,
              domReference: K,
            }),
            () => {
              se.setFocusManagerState(null);
            }
          );
      }, [r, se, U, Y, $, B, K]),
      (0, d.useIsoLayoutEffect)(() => {
        if (!r && xe)
          return (
            j(xe),
            () => {
              queueMicrotask(P);
            }
          );
      }, [r, xe]);
    const Te = !r && (!U || !te) && (_e || U);
    return (0, R.jsxs)(o.Fragment, {
      children: [
        Te &&
          (0, R.jsx)(g.FocusGuard, {
            "data-type": "inside",
            ref: ge,
            onFocus: (e) => {
              if (U) {
                const e = we();
                (0, T.enqueueFocus)(e[e.length - 1]);
              } else if (se?.portalNode)
                if (
                  ((le.current = !1), (0, b.isOutsideEvent)(e, se.portalNode))
                ) {
                  const e = (0, b.getNextTabbable)(K);
                  e?.focus();
                } else (0, O.resolveRef)(V ?? se.beforeOutsideRef)?.focus();
            },
          }),
        n,
        Te &&
          (0, R.jsx)(g.FocusGuard, {
            "data-type": "inside",
            ref: ye,
            onFocus: (e) => {
              if (U) (0, T.enqueueFocus)(we()[0]);
              else if (se?.portalNode)
                if (
                  (B && (le.current = !0),
                  (0, b.isOutsideEvent)(e, se.portalNode))
                ) {
                  const e = (0, b.getPreviousTabbable)(K);
                  e?.focus();
                } else (0, O.resolveRef)(H ?? se.afterOutsideRef)?.focus();
            },
          }),
      ],
    });
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(81339 /* vendor/module-81339 */),
  a = n(23504 /* vendor/module-23504 */),
  s = n(38592 /* vendor/module-38592 */),
  l = n(12772 /* vendor/module-12772 */),
  c = n(71740 /* vendor/module-71740 */),
  u = n(4674 /* vendor/module-4674 */),
  d = n(57122 /* vendor/module-57122 */),
  p = n(54807 /* vendor/module-54807 */),
  f = n(87177 /* vendor/module-87177 */),
  h = n(57569 /* vendor/module-57569 */),
  m = n(854 /* vendor/module-854 */),
  g = n(70444 /* vendor/module-70444 */),
  y = n(80475 /* vendor/module-80475 */),
  v = n(76475 /* vendor/module-76475 */),
  b = n(3148 /* vendor/module-3148 */),
  S = n(43650 /* vendor/module-43650 */),
  _ = n(50684 /* vendor/module-50684 */),
  x = n(22877 /* vendor/module-22877 */),
  w = n(82063 /* vendor/module-82063 */),
  E = n(48719 /* vendor/module-48719 */),
  T = n(98437 /* vendor/module-98437 */),
  k = n(57285 /* vendor/module-57285 */),
  C = n(39160 /* app/components/floating-portal */),
  I = n(33406 /* vendor/module-33406 */),
  A = n(25743 /* vendor/module-25743 */),
  O = n(888 /* vendor/module-888 */),
  R = n(31085 /* vendor/module-31085 */);
let M = [];
function P() {
  M = M.filter((e) => e.deref()?.isConnected);
}
function N(e) {
  P(),
    e &&
      "body" !== (0, i.getNodeName)(e) &&
      (M.push(new WeakRef(e)), M.length > 20 && (M = M.slice(-20)));
}
function D() {
  return P(), M[M.length - 1]?.deref();
}
function j(e) {
  if (e.hasAttribute("tabindex") && !e.hasAttribute("data-tabindex")) return;
  if (!e.getAttribute("role")?.includes("dialog")) return;
  const t = (0, b.focusable)(e).filter((e) => {
      const t = e.getAttribute("data-tabindex") || "";
      return (
        (0, b.isTabbable)(e) ||
        (e.hasAttribute("data-tabindex") && !t.startsWith("-"))
      );
    }),
    n = e.getAttribute("tabindex");
  0 === t.length
    ? "0" !== n &&
      (e.setAttribute("tabindex", "0"), e.setAttribute("data-tabindex", "0"))
    : ("-1" !== n ||
        (e.hasAttribute("data-tabindex") &&
          "-1" !== e.getAttribute("data-tabindex"))) &&
      (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
