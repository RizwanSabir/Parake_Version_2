// vendor/module-69229.js — webpack module 69229
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FOCUSABLE_POPUP_PROPS = void 0),
  (t.applyPopupOpenChange = function (e, t, n, r = {}) {
    const o = n.reason,
      a = o === y.REASONS.triggerHover,
      s = t && o === y.REASONS.triggerFocus,
      l = !t && (o === y.REASONS.triggerPress || o === y.REASONS.escapeKey),
      c = S(n);
    if ((e.context.onOpenChange?.(t, n), n.isCanceled)) return;
    r.onBeforeDispatch?.(),
      e.state.floatingRootContext.dispatchOpenChange(t, n);
    const u = () => {
      const o = { ...r.extraState, open: t };
      s
        ? (o.instantType = "focus")
        : l
          ? (o.instantType = "dismiss")
          : a && (o.instantType = void 0),
        b(o, t, n.trigger, c()),
        e.update(o);
    };
    a ? i.flushSync(u) : u();
  }),
  (t.attachPreventUnmountOnClose = S),
  (t.createDefaultInitialFocus = function (e) {
    return (t) => "touch" !== t || e.current;
  }),
  (t.setPopupOpenState = b),
  (t.useImplicitActiveTrigger = function (e, t = {}) {
    const { closeOnActiveTriggerUnmount: n = !1 } = t,
      r = e.useState("open"),
      o = e.useState("triggerCount");
    (0, c.useIsoLayoutEffect)(() => {
      if (!r)
        return void (0 !== e.state.triggerCount && e.set("triggerCount", 0));
      const t = e.context.triggerElements.size,
        o = {};
      e.state.triggerCount !== t && (o.triggerCount = t);
      const i = e.select("activeTriggerId");
      let a = null;
      if (i) {
        const t = e.context.triggerElements.getById(i);
        t
          ? t !== e.state.activeTriggerElement && (o.activeTriggerElement = t)
          : (a = i);
      }
      if (!a && !i && 1 === t) {
        const t = e.context.triggerElements.entries().next();
        if (!t.done) {
          const [e, n] = t.value;
          (o.activeTriggerId = e), (o.activeTriggerElement = n);
        }
      }
      (void 0 === o.triggerCount &&
        void 0 === o.activeTriggerId &&
        void 0 === o.activeTriggerElement) ||
        e.update(o),
        a &&
          n &&
          queueMicrotask(() => {
            if (
              e.select("open") &&
              e.select("activeTriggerId") === a &&
              !e.context.triggerElements.getById(a)
            ) {
              const t = (0, g.createChangeEventDetails)(y.REASONS.none);
              e.setOpen(!1, t),
                t.isCanceled ||
                  e.update({
                    activeTriggerId: null,
                    activeTriggerElement: null,
                  });
            }
          });
    }, [r, e, o, n]);
  }),
  (t.useInitialOpenSync = function (e, t, n, r) {
    (0, u.useOnFirstRender)(() => {
      void 0 === t &&
        !1 === e.state.open &&
        n &&
        (e.state = {
          ...e.state,
          open: !0,
          activeTriggerId: r,
          preventUnmountingOnClose: !1,
        });
    });
  }),
  (t.useOpenStateTransitions = function (e, t, n) {
    const {
        mounted: r,
        setMounted: o,
        transitionStatus: i,
      } = (0, h.useTransitionStatus)(e),
      a = t.useState("preventUnmountingOnClose"),
      s = !e && a;
    t.useSyncedValues({
      mounted: r,
      transitionStatus: i,
      preventUnmountingOnClose: s,
    });
    const c = (0, l.useStableCallback)(() => {
      o(!1),
        t.update({
          activeTriggerId: null,
          activeTriggerElement: null,
          mounted: !1,
          preventUnmountingOnClose: !1,
        }),
        n?.(),
        t.context.onOpenChangeComplete?.(!1);
    });
    return (
      (0, m.useOpenChangeComplete)({
        enabled: r && !e && !s,
        open: e,
        ref: t.context.popupRef,
        onComplete() {
          e || c();
        },
      }),
      { forceUnmount: c, transitionStatus: i }
    );
  }),
  (t.usePopupInteractionProps = function (e, t) {
    e.useSyncedValues(t),
      (0, c.useIsoLayoutEffect)(
        () => () => {
          e.update({
            activeTriggerProps: a.EMPTY_OBJECT,
            inactiveTriggerProps: a.EMPTY_OBJECT,
            popupProps: a.EMPTY_OBJECT,
          });
        },
        [e],
      );
  }),
  (t.usePopupRootSync = function (e, t) {
    (0, c.useIsoLayoutEffect)(() => {
      t || null === e.state.openMethod || e.set("openMethod", null);
    }, [t, e]),
      (0, c.useIsoLayoutEffect)(
        () => () => {
          null !== e.state.openMethod && e.set("openMethod", null);
        },
        [e],
      );
  }),
  (t.usePopupStore = function (e, t, n = !1) {
    const r = (0, s.useId)(),
      i = null != (0, p.useFloatingParentNodeId)(),
      a = o.useRef(null);
    void 0 === e && null === a.current && (a.current = t(r, i));
    const l = e ?? a.current;
    return (
      (0, f.useSyncedFloatingRootContext)({
        popupStore: l,
        treatPopupAsFloatingElement: n,
        floatingRootContext: l.state.floatingRootContext,
        floatingId: r,
        nested: i,
        onOpenChange: l.setOpen,
      }),
      { store: l, internalStore: a.current }
    );
  }),
  (t.useTriggerDataForwarding = function (e, t, n, r) {
    const o = n.useState("isMountedByTrigger", e),
      i = v(e, n),
      a = (0, l.useStableCallback)((t) => {
        if ((i(t), !t)) return;
        const o = n.select("open"),
          a = n.select("activeTriggerId");
        a !== e
          ? null == a &&
            o &&
            n.update({
              activeTriggerId: e,
              activeTriggerElement: t,
              ...r,
            })
          : n.update({ activeTriggerElement: t, ...(o ? r : null) });
      });
    return (
      (0, c.useIsoLayoutEffect)(() => {
        o && n.update({ activeTriggerElement: t.current, ...r });
      }, [o, n, t, ...Object.values(r)]),
      { registerTrigger: a, isMountedByThisTrigger: o }
    );
  }),
  (t.useTriggerRegistration = v);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(38340 /* vendor/module-38340 */),
  s = n(28991 /* vendor/module-28991 */),
  l = n(4674 /* vendor/module-4674 */),
  c = n(57122 /* vendor/module-57122 */),
  u = n(30101 /* vendor/module-30101 */),
  d = n(65930 /* vendor/module-65930 */),
  p = n(33406 /* vendor/module-33406 */),
  f = n(18654 /* vendor/module-18654 */),
  h = n(45796 /* vendor/module-45796 */),
  m = n(15586 /* vendor/module-15586 */),
  g = n(22877 /* vendor/module-22877 */),
  y = n(82063 /* vendor/module-82063 */);
function v(e, t) {
  const n = o.useRef(null),
    r = o.useRef(null);
  return o.useCallback(
    (o) => {
      if (void 0 === e) return;
      let i = !1;
      if (null !== n.current) {
        const e = n.current,
          o = r.current,
          a = t.context.triggerElements.getById(e);
        o && a === o && (t.context.triggerElements.delete(e), (i = !0)),
          (n.current = null),
          (r.current = null);
      }
      if (
        (null !== o &&
          ((n.current = e),
          (r.current = o),
          t.context.triggerElements.add(e, o),
          (i = !0)),
        i)
      ) {
        const e = t.context.triggerElements.size;
        t.select("open") &&
          t.state.triggerCount !== e &&
          t.set("triggerCount", e);
      }
    },
    [t, e],
  );
}
function b(e, t, n, r = !1) {
  t
    ? (e.preventUnmountingOnClose = !1)
    : r && (e.preventUnmountingOnClose = !0);
  const o = n?.id ?? null;
  (o || t) && ((e.activeTriggerId = o), (e.activeTriggerElement = n ?? null));
}
function S(e) {
  let t = !1;
  return (
    (e.preventUnmountOnClose = () => {
      t = !0;
    }),
    () => t
  );
}
t.FOCUSABLE_POPUP_PROPS = {
  tabIndex: -1,
  [d.FOCUSABLE_ATTRIBUTE]: "",
};
