// app/components/popover-root.js — webpack module 16723
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverRoot = function (e) {
    return (0, s.usePopoverRootContext)(!0)
      ? (0, f.jsx)(h, { props: e })
      : (0, f.jsx)(a.FloatingTree, {
          children: (0, f.jsx)(h, { props: e }),
        });
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(38340 /* vendor/module-38340 */),
  a = n(47797 /* vendor/module-47797 */),
  s = n(27788 /* vendor/module-27788 */),
  l = n(13341 /* vendor/module-13341 */),
  c = n(22877 /* vendor/module-22877 */),
  u = n(82063 /* vendor/module-82063 */),
  d = n(94661 /* vendor/module-94661 */),
  p = n(55327 /* vendor/module-55327 */),
  f = n(31085 /* vendor/module-31085 */);
function h({ props: e }) {
  const {
      children: t,
      open: n,
      defaultOpen: r = !1,
      onOpenChange: i,
      onOpenChangeComplete: p,
      modal: h = !1,
      handle: g,
      triggerId: y,
      defaultTriggerId: v = null,
    } = e,
    b = l.PopoverStore.useStore(g?.store, {
      modal: h,
      open: r,
      openProp: n,
      activeTriggerId: v,
      triggerIdProp: y,
    });
  (0, d.useInitialOpenSync)(b, n, r, v),
    b.useControlledProp("openProp", n),
    b.useControlledProp("triggerIdProp", y);
  const S = b.useState("open"),
    _ = b.useState("mounted"),
    x = b.useState("payload"),
    w = null != (0, a.useFloatingParentNodeId)();
  b.useContextCallback("onOpenChange", i),
    b.useContextCallback("onOpenChangeComplete", p),
    (0, d.usePopupRootSync)(b, S),
    (0, d.useImplicitActiveTrigger)(b);
  const { forceUnmount: E } = (0, d.useOpenStateTransitions)(S, b, () => {
    b.update({ stickIfOpen: !0, openChangeReason: null });
  });
  b.useSyncedValues({ modal: h, nested: w }),
    o.useEffect(() => {
      S || b.context.stickIfOpenTimeout.clear();
    }, [b, S]);
  const T = o.useCallback(() => {
    b.setOpen(!1, (0, c.createChangeEventDetails)(u.REASONS.imperativeAction));
  }, [b]);
  o.useImperativeHandle(e.actionsRef, () => ({ unmount: E, close: T }), [E, T]);
  const k = S || _,
    C = o.useMemo(() => ({ store: b }), [b]);
  return (0, f.jsxs)(s.PopoverRootContext.Provider, {
    value: C,
    children: [
      k && (0, f.jsx)(m, { store: b, modal: h }),
      "function" == typeof t ? t({ payload: x }) : t,
    ],
  });
}
function m({ store: e, modal: t }) {
  const n = e.useState("floatingRootContext"),
    r = (0, a.useDismiss)(n, {
      outsidePressEvent: {
        mouse: "trap-focus" === t ? "sloppy" : "intentional",
        touch: "sloppy",
      },
    }),
    s = r.reference ?? i.EMPTY_OBJECT,
    l = r.trigger ?? i.EMPTY_OBJECT,
    c = o.useMemo(
      () => (0, p.mergeProps)(d.FOCUSABLE_POPUP_PROPS, r.floating),
      [r.floating],
    );
  return (
    (0, d.usePopupInteractionProps)(e, {
      activeTriggerProps: s,
      inactiveTriggerProps: l,
      popupProps: c,
    }),
    null
  );
}
