// app/components/is-closing-26605.js — webpack module 26605
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MenuTrigger = void 0);
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */)),
  s = n(54807 /* vendor/module-54807 */),
  l = n(854 /* vendor/module-854 */),
  c = n(39083 /* vendor/module-39083 */),
  u = n(4674 /* vendor/module-4674 */),
  d = n(57122 /* vendor/module-57122 */),
  p = n(38340 /* vendor/module-38340 */),
  f = n(47797 /* vendor/module-47797 */),
  h = n(35777 /* vendor/module-35777 */),
  m = n(65200 /* vendor/module-65200 */),
  g = n(85950 /* vendor/module-85950 */),
  y = n(51146 /* vendor/module-51146 */),
  v = n(51909 /* vendor/module-51909 */),
  b = n(87782 /* vendor/module-87782 */),
  S = n(77814 /* vendor/module-77814 */),
  _ = n(79504 /* vendor/module-79504 */),
  x = n(35749 /* vendor/module-35749 */),
  w = n(7306 /* vendor/module-7306 */),
  E = n(94661 /* vendor/module-94661 */),
  T = n(15400 /* vendor/module-15400 */),
  k = n(33115 /* vendor/module-33115 */),
  C = n(82063 /* vendor/module-82063 */),
  I = n(70223 /* vendor/module-70223 */),
  A = n(87891 /* vendor/module-87891 */),
  O = n(57401 /* vendor/module-57401 */),
  R = n(25743 /* vendor/module-25743 */),
  M = n(70444 /* vendor/module-70444 */),
  P = n(55327 /* vendor/module-55327 */),
  N = n(31085 /* vendor/module-31085 */);
t.MenuTrigger = (0, c.fastComponentRef)(function (e, t) {
  const {
      render: n,
      className: r,
      style: o,
      disabled: c = !1,
      nativeButton: D = !0,
      id: j,
      openOnHover: L,
      delay: F = 100,
      closeDelay: U = 0,
      handle: B,
      payload: z,
      ...H
    } = e,
    V = (0, g.useMenuRootContext)(!0),
    q = B?.store ?? V?.store;
  if (!q) throw new Error((0, i.default)(85));
  const G = (0, k.useBaseUiId)(j),
    W = q.useState("isTriggerActive", G),
    $ = q.useState("floatingRootContext"),
    Y = q.useState("isOpenedByTrigger", G),
    K = q.useState("triggerPopupId", G),
    Z = a.useRef(null),
    Q = (function () {
      const e = (0, A.useContextMenuRootContext)(!0),
        t = (0, g.useMenuRootContext)(!0),
        n = (0, O.useMenubarContext)(!0);
      return a.useMemo(
        () =>
          n
            ? { type: "menubar", context: n }
            : e && !t
              ? { type: "context-menu", context: e }
              : { type: void 0 },
        [e, t, n],
      );
    })(),
    J = (0, x.useCompositeRootContext)(!0),
    X = (0, f.useFloatingTree)(),
    ee = a.useMemo(() => X ?? new h.FloatingTreeStore(), [X]),
    te = (0, f.useFloatingNodeId)(ee),
    ne = (0, f.useFloatingParentNodeId)(),
    { registerTrigger: re, isMountedByThisTrigger: oe } = (0,
    E.useTriggerDataForwarding)(G, Z, q, {
      payload: z,
      closeDelay: U,
      parent: Q,
      floatingTreeRoot: ee,
      floatingNodeId: te,
      floatingParentNodeId: ne,
      keyboardEventRelay: J?.relayKeyboardEvent,
    }),
    ie = "menubar" === Q.type,
    ae = q.useState("disabled"),
    se = c || ae || (ie && Q.context.disabled),
    { getButtonProps: le, buttonRef: ce } = (0, b.useButton)({
      disabled: se,
      native: D,
    });
  a.useEffect(() => {
    Y || void 0 !== Q.type || (q.context.allowMouseUpTriggerRef.current = !1);
  }, [q, Y, Q.type]);
  const ue = a.useRef(null),
    de = (0, s.useTimeout)(),
    pe = (0, u.useStableCallback)((e) => {
      if (!ue.current) return;
      de.clear(), (q.context.allowMouseUpTriggerRef.current = !1);
      const t = e.target;
      if (
        (0, m.contains)(ue.current, t) ||
        (0, m.contains)(q.select("positionerElement"), t) ||
        t === ue.current
      )
        return;
      if (null != t && (0, w.findRootOwnerId)(t) === q.select("rootId")) return;
      const n = (0, S.getPseudoElementBounds)(ue.current);
      (e.clientX >= n.left - 2 &&
        e.clientX <= n.right + 2 &&
        e.clientY >= n.top - 2 &&
        e.clientY <= n.bottom + 2) ||
        ee.events.emit("close", {
          domEvent: e,
          reason: C.REASONS.cancelOpen,
        });
    });
  a.useEffect(() => {
    Y &&
      q.select("lastOpenChangeReason") === C.REASONS.triggerHover &&
      (0, l.ownerDocument)(ue.current).addEventListener("mouseup", pe, {
        once: !0,
      });
  }, [Y, pe, q]);
  const fe = ie && Q.context.hasSubmenuOpen,
    he = L ?? fe,
    me = (0, f.useHoverReferenceInteraction)($, {
      enabled: he && !se && "context-menu" !== Q.type && (!ie || (fe && !oe)),
      handleClose: (0, f.safePolygon)({ blockPointerEvents: !ie }),
      mouseOnly: !0,
      move: !1,
      restMs: void 0 === Q.type ? F : void 0,
      delay: { close: U },
      triggerElementRef: Z,
      externalTree: ee,
      isActiveTrigger: W,
      isClosing: () => "ending" === q.select("transitionStatus"),
    }),
    ge = (function (e, t) {
      const n = (0, s.useTimeout)(),
        [r, o] = a.useState(!1);
      return (
        (0, d.useIsoLayoutEffect)(() => {
          e && "trigger-hover" === t
            ? (o(!0),
              n.start(R.PATIENT_CLICK_THRESHOLD, () => {
                o(!1);
              }))
            : e || (n.clear(), o(!1));
        }, [e, t, n]),
        r
      );
    })(Y, q.select("lastOpenChangeReason")),
    ye = (0, f.useClick)($, {
      enabled: !se && "context-menu" !== Q.type,
      event: Y && ie ? "click" : "mousedown",
      toggle: !0,
      ignoreMouse: !1,
      stickIfOpen: void 0 === Q.type && ge,
    }),
    ve = (0, f.useFocus)($, { enabled: !se && fe }),
    be = (0, I.useMixedToggleClickHandler)({
      open: Y,
      enabled: ie,
      mouseDownAction: "open",
    }),
    Se = a.useMemo(
      () => (0, P.mergeProps)(ve.reference, ye.reference),
      [ve.reference, ye.reference],
    ),
    _e = q.useState("triggerProps", oe),
    {
      preFocusGuardRef: xe,
      handlePreFocusGuardFocus: we,
      handleFocusTargetFocus: Ee,
    } = (0, T.useTriggerFocusGuards)(q, Z),
    Te = { disabled: se, open: Y },
    ke = [ue, t, ce, re, Z],
    Ce = [
      Se,
      me ?? p.EMPTY_OBJECT,
      _e,
      {
        "aria-haspopup": "menu",
        "aria-controls": K,
        id: G,
        onMouseDown: (e) => {
          q.select("open") ||
            (de.start(200, () => {
              q.context.allowMouseUpTriggerRef.current = !0;
            }),
            (0, l.ownerDocument)(e.currentTarget).addEventListener(
              "mouseup",
              pe,
              { once: !0 },
            ));
        },
      },
      ie ? { role: "menuitem" } : {},
      be,
      H,
      le,
    ],
    Ie = (0, v.useRenderElement)("button", e, {
      enabled: !ie,
      stateAttributesMapping: y.pressableTriggerOpenStateMapping,
      state: Te,
      ref: ke,
      props: Ce,
    });
  return ie
    ? (0, N.jsx)(_.CompositeItem, {
        tag: "button",
        render: n,
        className: r,
        style: o,
        state: Te,
        refs: ke,
        props: Ce,
        stateAttributesMapping: y.pressableTriggerOpenStateMapping,
      })
    : Y
      ? (0, N.jsxs)(a.Fragment, {
          children: [
            (0, N.jsx)(
              M.FocusGuard,
              { ref: xe, onFocus: we },
              `${G}-pre-focus-guard`,
            ),
            (0, N.jsx)(a.Fragment, { children: Ie }, G),
            (0, N.jsx)(
              M.FocusGuard,
              { ref: q.context.triggerFocusTargetRef, onFocus: Ee },
              `${G}-post-focus-guard`,
            ),
          ],
        })
      : (0, N.jsx)(a.Fragment, { children: Ie }, G);
});
