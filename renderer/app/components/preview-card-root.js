// app/components/preview-card-root.js — webpack module 24096
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(39083 /* vendor/module-39083 */),
  a = n(38340 /* vendor/module-38340 */),
  s = n(57122 /* vendor/module-57122 */),
  l = n(47797 /* vendor/module-47797 */),
  c = n(2001 /* vendor/module-2001 */),
  u = n(22877 /* vendor/module-22877 */),
  d = n(82063 /* vendor/module-82063 */),
  p = n(4748 /* vendor/module-4748 */),
  f = n(94661 /* vendor/module-94661 */),
  h = n(55327 /* vendor/module-55327 */),
  m = n(31085 /* vendor/module-31085 */);
function g(e) {
  const {
      open: t,
      defaultOpen: n = !1,
      onOpenChange: r,
      onOpenChangeComplete: i,
      actionsRef: a,
      handle: l,
      triggerId: h,
      defaultTriggerId: g = null,
      children: v,
    } = e,
    b = p.PreviewCardStore.useStore(l?.store, {
      open: n,
      openProp: t,
      activeTriggerId: g,
      triggerIdProp: h,
    });
  (0, f.useInitialOpenSync)(b, t, n, g),
    b.useControlledProp("openProp", t),
    b.useControlledProp("triggerIdProp", h),
    b.useContextCallback("onOpenChange", r),
    b.useContextCallback("onOpenChangeComplete", i);
  const S = b.useState("open"),
    _ = b.useState("activeTriggerId"),
    x = b.useState("mounted"),
    w = b.useState("payload");
  (0, f.useImplicitActiveTrigger)(b, {
    closeOnActiveTriggerUnmount: !0,
  });
  const { forceUnmount: E } = (0, f.useOpenStateTransitions)(S, b, () => {
    b.context.inlineRectCoordsRef.current = void 0;
  });
  (0, s.useIsoLayoutEffect)(() => {
    S && null == _ && b.set("payload", void 0);
  }, [b, _, S]);
  const T = o.useCallback(() => {
    b.setOpen(!1, (0, u.createChangeEventDetails)(d.REASONS.imperativeAction));
  }, [b]);
  o.useImperativeHandle(a, () => ({ unmount: E, close: T }), [E, T]);
  const k = S || x;
  return (0, m.jsxs)(c.PreviewCardRootContext.Provider, {
    value: b,
    children: [
      k && (0, m.jsx)(y, { store: b }),
      "function" == typeof v ? v({ payload: w }) : v,
    ],
  });
}
function y({ store: e }) {
  const t = e.useState("floatingRootContext"),
    n = (0, l.useDismiss)(t),
    r = n.reference ?? a.EMPTY_OBJECT,
    i = n.trigger ?? a.EMPTY_OBJECT,
    s = o.useMemo(
      () => (0, h.mergeProps)(f.FOCUSABLE_POPUP_PROPS, n.floating),
      [n.floating],
    );
  return (
    (0, f.usePopupInteractionProps)(e, {
      activeTriggerProps: r,
      inactiveTriggerProps: i,
      popupProps: s,
    }),
    null
  );
}
t.PreviewCardRoot = (0, i.fastComponent)(function (e) {
  return (0, c.usePreviewCardRootContext)(!0)
    ? (0, m.jsx)(g, { ...e })
    : (0, m.jsx)(l.FloatingTree, {
        children: (0, m.jsx)(g, { ...e }),
      });
});
