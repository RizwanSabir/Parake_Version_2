// vendor/module-71612.js — webpack module 71612
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createInitialPopupStoreState = function () {
    return {
      open: !1,
      openProp: void 0,
      mounted: !1,
      transitionStatus: void 0,
      floatingRootContext: (0, a.getEmptyRootContext)(),
      floatingId: void 0,
      triggerCount: 0,
      preventUnmountingOnClose: !1,
      payload: void 0,
      activeTriggerId: null,
      activeTriggerElement: null,
      triggerIdProp: void 0,
      popupElement: null,
      positionerElement: null,
      activeTriggerProps: o.EMPTY_OBJECT,
      inactiveTriggerProps: o.EMPTY_OBJECT,
      popupProps: o.EMPTY_OBJECT,
    };
  }),
  (t.createPopupFloatingRootContext = function (e, t, n = !1) {
    return new i.FloatingRootStore({
      open: !1,
      transitionStatus: void 0,
      floatingElement: null,
      referenceElement: null,
      triggerElements: e,
      floatingId: t,
      syncOnly: !0,
      nested: n,
      onOpenChange: void 0,
    });
  }),
  (t.popupStoreSelectors = void 0);
var r = n(78207 /* vendor/module-78207 */),
  o = n(38340 /* vendor/module-38340 */),
  i = n(95377 /* vendor/module-95377 */),
  a = n(93711 /* vendor/module-93711 */);
const s = (0, r.createSelector)((e) => e.triggerIdProp ?? e.activeTriggerId),
  l = (0, r.createSelector)((e) => e.openProp ?? e.open),
  c = (0, r.createSelector)(
    (e) => (e.popupElement?.id ?? e.floatingId) || void 0,
  );
function u(e, t) {
  return void 0 !== t && l(e) && s(e) === t;
}
t.popupStoreSelectors = {
  open: l,
  mounted: (0, r.createSelector)((e) => e.mounted),
  transitionStatus: (0, r.createSelector)((e) => e.transitionStatus),
  floatingRootContext: (0, r.createSelector)((e) => e.floatingRootContext),
  triggerCount: (0, r.createSelector)((e) => e.triggerCount),
  preventUnmountingOnClose: (0, r.createSelector)(
    (e) => e.preventUnmountingOnClose,
  ),
  payload: (0, r.createSelector)((e) => e.payload),
  activeTriggerId: s,
  activeTriggerElement: (0, r.createSelector)((e) =>
    e.mounted ? e.activeTriggerElement : null,
  ),
  popupId: c,
  isTriggerActive: (0, r.createSelector)((e, t) => void 0 !== t && s(e) === t),
  isOpenedByTrigger: (0, r.createSelector)((e, t) => u(e, t)),
  isMountedByTrigger: (0, r.createSelector)(
    (e, t) => void 0 !== t && s(e) === t && e.mounted,
  ),
  triggerProps: (0, r.createSelector)((e, t) =>
    t ? e.activeTriggerProps : e.inactiveTriggerProps,
  ),
  triggerPopupId: (0, r.createSelector)((e, t) =>
    (function (e, t) {
      return (
        !!u(e, t) ||
        (void 0 !== t && l(e) && null == s(e) && 1 === e.triggerCount)
      );
    })(e, t)
      ? c(e)
      : void 0,
  ),
  popupProps: (0, r.createSelector)((e) => e.popupProps),
  popupElement: (0, r.createSelector)((e) => e.popupElement),
  positionerElement: (0, r.createSelector)((e) => e.positionerElement),
};
