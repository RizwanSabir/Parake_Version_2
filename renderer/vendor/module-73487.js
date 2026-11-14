// vendor/module-73487.js — webpack module 73487
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TooltipTrigger = void 0);
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */)),
  s = n(81339 /* vendor/module-81339 */),
  l = n(39083 /* vendor/module-39083 */),
  c = n(54807 /* vendor/module-54807 */),
  u = n(71740 /* vendor/module-71740 */),
  d = n(14648 /* vendor/module-14648 */),
  p = n(51146 /* vendor/module-51146 */),
  f = n(51909 /* vendor/module-51909 */),
  h = n(94661 /* vendor/module-94661 */),
  m = n(33115 /* vendor/module-33115 */),
  g = n(53164 /* vendor/module-53164 */),
  y = n(47797 /* vendor/module-47797 */),
  v = n(80475 /* vendor/module-80475 */),
  b = n(76475 /* vendor/module-76475 */),
  S = n(22877 /* vendor/module-22877 */),
  _ = n(82063 /* vendor/module-82063 */),
  x = n(55522 /* vendor/module-55522 */),
  w = n(17517 /* vendor/module-17517 */),
  E = n(20860 /* vendor/module-20860 */);
const T = "data-base-ui-tooltip-trigger";
function k(e) {
  if ("composedPath" in e) {
    const t = e.composedPath();
    for (let e = 0; e < t.length; e += 1) {
      const n = t[e];
      if ((0, s.isElement)(n)) return n;
    }
  }
  const t = e.target;
  return (0, s.isElement)(t) ? t : null;
}
t.TooltipTrigger = (0, l.fastComponentRef)(function (e, t) {
  const {
      render: n,
      className: r,
      style: o,
      handle: l,
      payload: C,
      disabled: I,
      delay: A,
      closeOnClick: O = !0,
      closeDelay: R,
      id: M,
      ...P
    } = e,
    N = (0, d.useTooltipRootContext)(!0),
    D = l?.store ?? N;
  if (!D) throw new Error((0, i.default)(82));
  const j = (0, m.useBaseUiId)(M),
    L = D.useState("isTriggerActive", j),
    F = D.useState("isOpenedByTrigger", j),
    U = D.useState("floatingRootContext"),
    B = a.useRef(null),
    z = A ?? E.OPEN_DELAY,
    H = R ?? 0,
    { registerTrigger: V, isMountedByThisTrigger: q } = (0,
    h.useTriggerDataForwarding)(j, B, D, {
      payload: C,
      closeOnClick: O,
      closeDelay: H,
    }),
    G = (0, g.useTooltipProviderContext)(),
    {
      delayRef: W,
      isInstantPhase: $,
      hasProvider: Y,
    } = (0, y.useDelayGroup)(U, { open: F }),
    K = (0, w.useHoverInteractionSharedState)(U);
  D.useSyncedValue("isInstantPhase", $);
  const Z = D.useState("disabled"),
    Q = I ?? Z,
    J = (0, u.useValueAsRef)(Q),
    X = D.useState("trackCursorAxis"),
    ee = D.useState("disableHoverablePopup"),
    te = a.useRef(!1),
    ne = (0, c.useTimeout)(),
    re = a.useRef(void 0);
  function oe() {
    const e = G?.delay,
      t = "object" == typeof W.current ? W.current.open : void 0;
    let n = z;
    return Y && (n = 0 !== t ? (A ?? e ?? z) : 0), n;
  }
  function ie(e) {
    const t = B.current;
    if (!t || !e) return !1;
    const n = (function (e) {
      let t = e;
      for (; t; ) {
        if (t.hasAttribute(T)) return t;
        const e = t.parentElement;
        if (e) {
          t = e;
          continue;
        }
        const n = t.getRootNode();
        t = "host" in n && (0, s.isElement)(n.host) ? n.host : null;
      }
      return null;
    })(e);
    return null !== n && n !== t && (0, v.contains)(t, n);
  }
  const ae = (0, y.useHoverReferenceInteraction)(U, {
      enabled: !Q,
      mouseOnly: !0,
      move: !1,
      handleClose: ee || "both" === X ? null : (0, y.safePolygon)(),
      restMs: oe,
      delay() {
        const e = "object" == typeof W.current ? W.current.close : void 0;
        let t = H;
        return null == R && Y && (t = e), { close: t };
      },
      triggerElementRef: B,
      isActiveTrigger: L,
      isClosing: () => "ending" === D.select("transitionStatus"),
      shouldOpen: () => !te.current,
    }),
    se = (0, y.useFocus)(U, { enabled: !Q }).reference,
    le = D.useState("triggerProps", q),
    ce = q || "none" !== X,
    ue = { open: F };
  return (0, f.useRenderElement)("button", e, {
    state: ue,
    ref: [t, V, B],
    props: [
      ae,
      se,
      ce ? le : void 0,
      {
        onMouseOver(e) {
          ((e) => {
            const t = te.current,
              n = k(e),
              r = (function (e) {
                const t = ie(e);
                return (
                  (te.current = t),
                  t &&
                    (K.openChangeTimeout.clear(),
                    K.restTimeout.clear(),
                    (K.restTimeoutPending = !1),
                    ne.clear()),
                  t
                );
              })(n),
              o = B.current,
              i = o && n && (0, v.contains)(o, n);
            if (
              r &&
              D.select("open") &&
              D.select("lastOpenChangeReason") === _.REASONS.triggerHover
            )
              D.setOpen(
                !1,
                (0, S.createChangeEventDetails)(_.REASONS.triggerHover, e),
              );
            else if (
              t &&
              !r &&
              i &&
              !J.current &&
              !D.select("open") &&
              o &&
              (0, b.isMouseLikePointerType)(re.current)
            ) {
              const t = () => {
                  te.current ||
                    J.current ||
                    D.select("open") ||
                    D.setOpen(
                      !0,
                      (0, S.createChangeEventDetails)(
                        _.REASONS.triggerHover,
                        e,
                        o,
                      ),
                    );
                },
                n = oe();
              0 === n ? (ne.clear(), t()) : ne.start(n, t);
            }
          })(e.nativeEvent);
        },
        onFocus(e) {
          ie(k(e.nativeEvent)) && e.preventBaseUIHandler();
        },
        onMouseLeave() {
          (te.current = !1), ne.clear(), (re.current = void 0);
        },
        onPointerEnter(e) {
          re.current = e.pointerType;
        },
        onPointerDown(e) {
          (re.current = e.pointerType),
            D.set("closeOnClick", O),
            O && !D.select("open") && D.cancelPendingOpen(e.nativeEvent);
        },
        onClick(e) {
          O && !D.select("open") && D.cancelPendingOpen(e.nativeEvent);
        },
        id: j,
        [x.TooltipTriggerDataAttributes.triggerDisabled]: Q ? "" : void 0,
        [T]: Q ? void 0 : "",
      },
      P,
    ],
    stateAttributesMapping: p.triggerOpenStateMapping,
  });
});
