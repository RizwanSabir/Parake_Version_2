// app/components/outside-press.js — webpack module 66309
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MenuRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(54807 /* vendor/module-54807 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(28991 /* vendor/module-28991 */),
  l = n(57122 /* vendor/module-57122 */),
  c = n(38340 /* vendor/module-38340 */),
  u = n(39083 /* vendor/module-39083 */),
  d = n(47797 /* vendor/module-47797 */),
  p = n(85950 /* vendor/module-85950 */),
  f = n(57401 /* vendor/module-57401 */),
  h = n(25743 /* vendor/module-25743 */),
  m = n(96092 /* vendor/module-96092 */),
  g = n(91988 /* vendor/module-91988 */),
  y = n(22877 /* vendor/module-22877 */),
  v = n(82063 /* vendor/module-82063 */),
  b = n(87891 /* vendor/module-87891 */),
  S = n(55327 /* vendor/module-55327 */),
  _ = n(28381 /* vendor/module-28381 */),
  x = n(94661 /* vendor/module-94661 */),
  w = n(87057 /* vendor/module-87057 */),
  E = n(31085 /* vendor/module-31085 */);
t.MenuRoot = (0, u.fastComponent)(function (e) {
  const {
      children: t,
      open: n,
      onOpenChange: r,
      onOpenChangeComplete: u,
      defaultOpen: T = !1,
      disabled: k = !1,
      modal: C,
      loopFocus: I = !0,
      orientation: A = "vertical",
      actionsRef: O,
      closeParentOnEsc: R = !1,
      handle: M,
      triggerId: P,
      defaultTriggerId: N = null,
      highlightItemOnHover: D = !0,
    } = e,
    j = (0, b.useContextMenuRootContext)(!0),
    L = (0, p.useMenuRootContext)(!0),
    F = (0, f.useMenubarContext)(!0),
    U = (0, w.useMenuSubmenuRootContext)(),
    B = o.useMemo(
      () =>
        U && L
          ? { type: "menu", store: L.store }
          : F
            ? { type: "menubar", context: F }
            : j && !L
              ? { type: "context-menu", context: j }
              : { type: void 0 },
      [j, L, F, U],
    ),
    z = _.MenuStore.useStore(M?.store, {
      open: T,
      openProp: n,
      activeTriggerId: N,
      triggerIdProp: P,
      parent: B,
    });
  (0, x.useInitialOpenSync)(z, n, T, N),
    z.useControlledProp("openProp", n),
    z.useControlledProp("triggerIdProp", P),
    z.useContextCallback("onOpenChangeComplete", u);
  const H = (0, s.useId)(),
    V = (0, s.useId)(),
    q = z.useState("floatingTreeRoot"),
    G = (0, d.useFloatingNodeId)(q),
    W = (0, d.useFloatingParentNodeId)(),
    $ = z.useState("open"),
    Y = z.useState("activeTriggerElement"),
    K = z.useState("positionerElement"),
    Z = z.useState("hoverEnabled"),
    Q = z.useState("disabled"),
    J = z.useState("lastOpenChangeReason"),
    X = z.useState("parent"),
    ee = z.useState("activeIndex"),
    te = z.useState("payload"),
    ne = z.useState("floatingParentNodeId"),
    re = o.useRef(null),
    oe = o.useRef("context-menu" !== X.type),
    ie = (0, i.useTimeout)(),
    ae = o.useRef(!0),
    se = (0, i.useTimeout)(),
    le = null != ne,
    { openMethod: ce, triggerProps: ue } = (0, g.useOpenInteractionType)($);
  z.useSyncedValues({
    disabled: k,
    highlightItemOnHover: D,
    modal: void 0 === X.type ? C : void 0,
    openMethod: ce,
    rootId: H,
  }),
    (0, x.useImplicitActiveTrigger)(z);
  const { forceUnmount: de } = (0, x.useOpenStateTransitions)($, z, () => {
    z.update({ allowMouseEnter: !1, stickIfOpen: !0 });
  });
  (0, l.useIsoLayoutEffect)(() => {
    j && !L
      ? z.update({
          parent: { type: "context-menu", context: j },
          floatingNodeId: G,
          floatingParentNodeId: W,
        })
      : L && z.update({ floatingNodeId: G, floatingParentNodeId: W });
  }, [j, L, G, W, z]),
    o.useEffect(() => {
      if (($ || (re.current = null), "context-menu" === X.type))
        return $
          ? void ie.start(500, () => {
              oe.current = !0;
            })
          : (ie.clear(), void (oe.current = !1));
    }, [ie, $, X.type]),
    (0, l.useIsoLayoutEffect)(() => {
      $ || Z || z.set("hoverEnabled", !0);
    }, [$, Z, z]);
  const pe = (0, a.useStableCallback)((e, t) => {
      const n = t.reason;
      if ($ === e && t.trigger === Y && J === n) return;
      const o = (0, x.attachPreventUnmountOnClose)(t);
      if (
        (e || null != t.trigger || (t.trigger = Y ?? void 0),
        r?.(e, t),
        t.isCanceled)
      )
        return;
      z.state.floatingRootContext.dispatchOpenChange(e, t);
      const i = t.event;
      if (
        !1 === e &&
        "click" === i?.type &&
        "touch" === i.pointerType &&
        !ae.current
      )
        return;
      e && n === v.REASONS.triggerFocus
        ? ((ae.current = !1),
          se.start(300, () => {
            ae.current = !0;
          }))
        : ((ae.current = !0), se.clear());
      const a =
          (n === v.REASONS.triggerPress || n === v.REASONS.itemPress) &&
          0 === i.detail &&
          i?.isTrusted,
        s = !e && (n === v.REASONS.escapeKey || null == n),
        l = { open: e, openChangeReason: n };
      (re.current = t.event ?? null),
        (0, x.setPopupOpenState)(l, e, t.trigger, o()),
        z.update(l),
        "menubar" !== X.type ||
        (n !== v.REASONS.triggerFocus &&
          n !== v.REASONS.focusOut &&
          n !== v.REASONS.triggerHover &&
          n !== v.REASONS.listNavigation &&
          n !== v.REASONS.siblingOpen)
          ? a || s
            ? z.set("instantType", a ? "click" : "dismiss")
            : z.set("instantType", void 0)
          : z.set("instantType", "group");
    }),
    fe = (0, d.useSyncedFloatingRootContext)({
      popupStore: z,
      floatingId: V,
      nested: null != W,
      onOpenChange: pe,
    }),
    he = fe.context.events;
  o.useEffect(() => {
    const e = ({ open: e, eventDetails: t }) => pe(e, t);
    return (
      he.on("setOpen", e),
      () => {
        he?.off("setOpen", e);
      }
    );
  }, [he, pe]);
  const me = o.useCallback(() => {
    z.setOpen(!1, (0, y.createChangeEventDetails)(v.REASONS.imperativeAction));
  }, [z]);
  let ge;
  o.useImperativeHandle(O, () => ({ unmount: de, close: me }), [de, me]),
    "context-menu" === X.type && (ge = X.context),
    o.useImperativeHandle(ge?.positionerRef, () => K, [K]),
    o.useImperativeHandle(ge?.actionsRef, () => ({ setOpen: pe }), [pe]);
  const ye = (0, d.useDismiss)(fe, {
      enabled: !Q,
      bubbles: { escapeKey: R && "menu" === X.type },
      outsidePress: () =>
        "context-menu" !== X.type ||
        "contextmenu" === re.current?.type ||
        oe.current,
      externalTree: le ? q : void 0,
    }),
    ve = (0, m.useDirection)(),
    be = o.useCallback(
      (e) => {
        z.select("activeIndex") !== e && z.set("activeIndex", e);
      },
      [z],
    ),
    Se = (0, d.useListNavigation)(fe, {
      enabled: !Q,
      listRef: z.context.itemDomElements,
      activeIndex: ee,
      nested: void 0 !== X.type,
      loopFocus: I,
      orientation: A,
      parentOrientation: "menubar" === X.type ? X.context.orientation : void 0,
      rtl: "rtl" === ve,
      disabledIndices: c.EMPTY_ARRAY,
      onNavigate: be,
      openOnArrowKeyDown: "context-menu" !== X.type,
      externalTree: le ? q : void 0,
      focusItemOnHover: D,
    }),
    _e = o.useCallback(
      (e) => {
        z.context.typingRef.current = e;
      },
      [z],
    ),
    xe = (0, d.useTypeahead)(fe, {
      enabled: !Q,
      listRef: z.context.itemLabels,
      elementsRef: z.context.itemDomElements,
      activeIndex: ee,
      resetMs: h.TYPEAHEAD_RESET_MS,
      onMatch: (e) => {
        $ && e !== ee && z.set("activeIndex", e);
      },
      onTyping: _e,
    }),
    we = o.useMemo(() => {
      const e = (0, S.mergeProps)(
        xe.reference,
        Se.reference,
        ye.reference,
        {
          onMouseMove() {
            z.set("allowMouseEnter", !0);
          },
        },
        ue,
      );
      return (e["aria-haspopup"] = "menu"), (e["aria-expanded"] = $), e;
    }, [z, xe.reference, Se.reference, ye.reference, ue, $]),
    Ee = o.useMemo(() => {
      const e = (0, S.mergeProps)(Se.trigger, ye.trigger, ue);
      return (e["aria-haspopup"] = "menu"), (e["aria-expanded"] = !1), e;
    }, [Se.trigger, ye.trigger, ue]),
    Te = o.useMemo(
      () =>
        (0, S.mergeProps)(
          x.FOCUSABLE_POPUP_PROPS,
          {
            id: V,
            role: "menu",
            "aria-labelledby": Y?.id,
            onMouseMove() {
              z.set("allowMouseEnter", !0),
                "menu" === X.type && z.set("hoverEnabled", !1);
            },
            onClick() {
              z.select("hoverEnabled") && z.set("hoverEnabled", !1);
            },
            onKeyDown(e) {
              const t = z.select("keyboardEventRelay");
              t && !e.isPropagationStopped() && t(e);
            },
          },
          xe.floating,
          Se.floating,
          ye.floating,
        ),
      [Y, V, X.type, z, xe.floating, Se.floating, ye.floating],
    ),
    ke = Se.item ?? c.EMPTY_OBJECT;
  (0, x.usePopupInteractionProps)(z, {
    floatingRootContext: fe,
    activeTriggerProps: we,
    inactiveTriggerProps: Ee,
    popupProps: Te,
    itemProps: ke,
  });
  const Ce = o.useMemo(() => ({ store: z, parent: B }), [z, B]),
    Ie = (0, E.jsx)(p.MenuRootContext.Provider, {
      value: Ce,
      children: "function" == typeof t ? t({ payload: te }) : t,
    });
  return void 0 === X.type || "context-menu" === X.type
    ? (0, E.jsx)(d.FloatingTree, { externalTree: q, children: Ie })
    : Ie;
});
