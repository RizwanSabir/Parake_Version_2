// app/components/reference-press.js — webpack module 3839
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.TooltipRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(39083 /* vendor/module-39083 */),
  a = n(57122 /* vendor/module-57122 */),
  s = n(14648 /* vendor/module-14648 */),
  l = n(47797 /* vendor/module-47797 */),
  c = n(22877 /* vendor/module-22877 */),
  u = n(94661 /* vendor/module-94661 */),
  d = n(55327 /* vendor/module-55327 */),
  p = n(15973 /* vendor/module-15973 */),
  f = n(82063 /* vendor/module-82063 */),
  h = n(31085 /* vendor/module-31085 */);
function m({ store: e, disabled: t, trackCursorAxis: n }) {
  const r = e.useState("floatingRootContext"),
    i = (0, l.useDismiss)(r, {
      enabled: !t,
      referencePress: () => e.select("closeOnClick"),
    }),
    a = (0, l.useClientPoint)(r, {
      enabled: !t && "none" !== n,
      axis: "none" === n ? void 0 : n,
    }),
    s = o.useMemo(
      () => (0, d.mergeProps)(a.reference, i.reference),
      [a.reference, i.reference],
    ),
    c = o.useMemo(
      () => (0, d.mergeProps)(a.trigger, i.trigger),
      [a.trigger, i.trigger],
    ),
    p = o.useMemo(
      () => (0, d.mergeProps)(u.FOCUSABLE_POPUP_PROPS, a.floating, i.floating),
      [a.floating, i.floating],
    );
  return (
    (0, u.usePopupInteractionProps)(e, {
      activeTriggerProps: s,
      inactiveTriggerProps: c,
      popupProps: p,
    }),
    null
  );
}
t.TooltipRoot = (0, i.fastComponent)(function (e) {
  const {
      disabled: t = !1,
      defaultOpen: n = !1,
      open: r,
      disableHoverablePopup: i = !1,
      trackCursorAxis: l = "none",
      actionsRef: d,
      onOpenChange: g,
      onOpenChangeComplete: y,
      handle: v,
      triggerId: b,
      defaultTriggerId: S = null,
      children: _,
    } = e,
    x = p.TooltipStore.useStore(v?.store, {
      open: n,
      openProp: r,
      activeTriggerId: S,
      triggerIdProp: b,
    });
  (0, u.useInitialOpenSync)(x, r, n, S),
    x.useControlledProp("openProp", r),
    x.useControlledProp("triggerIdProp", b),
    x.useContextCallback("onOpenChange", g),
    x.useContextCallback("onOpenChangeComplete", y);
  const w = x.useState("open"),
    E = !t && w,
    T = x.useState("activeTriggerId"),
    k = x.useState("mounted"),
    C = x.useState("payload");
  x.useSyncedValues({ trackCursorAxis: l, disableHoverablePopup: i }),
    x.useSyncedValue("disabled", t),
    (0, u.useImplicitActiveTrigger)(x, {
      closeOnActiveTriggerUnmount: !0,
    });
  const { forceUnmount: I, transitionStatus: A } = (0,
    u.useOpenStateTransitions)(E, x),
    O = x.useState("isInstantPhase"),
    R = x.useState("instantType"),
    M = x.useState("lastOpenChangeReason"),
    P = o.useRef(null);
  (0, a.useIsoLayoutEffect)(() => {
    w &&
      t &&
      x.setOpen(!1, (0, c.createChangeEventDetails)(f.REASONS.disabled));
  }, [w, t, x]),
    (0, a.useIsoLayoutEffect)(() => {
      ("ending" === A && M === f.REASONS.none) || ("ending" !== A && O)
        ? ("delay" !== R && (P.current = R), x.set("instantType", "delay"))
        : null !== P.current &&
          (x.set("instantType", P.current), (P.current = null));
    }, [A, O, M, R, x]),
    (0, a.useIsoLayoutEffect)(() => {
      E && null == T && x.set("payload", void 0);
    }, [x, T, E]);
  const N = o.useCallback(() => {
    x.setOpen(!1, (0, c.createChangeEventDetails)(f.REASONS.imperativeAction));
  }, [x]);
  o.useImperativeHandle(d, () => ({ unmount: I, close: N }), [I, N]);
  const D = E || k || (!t && "none" !== l);
  return (0, h.jsxs)(s.TooltipRootContext.Provider, {
    value: x,
    children: [
      D && (0, h.jsx)(m, { store: x, disabled: t, trackCursorAxis: l }),
      "function" == typeof _ ? _({ payload: C }) : _,
    ],
  });
});
