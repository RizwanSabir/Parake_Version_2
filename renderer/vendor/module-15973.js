// vendor/module-15973.js — webpack module 15973
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TooltipStore = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(22877 /* vendor/module-22877 */),
  s = n(82063 /* vendor/module-82063 */),
  l = n(94661 /* vendor/module-94661 */);
const c = {
  ...l.popupStoreSelectors,
  disabled: (0, i.createSelector)((e) => e.disabled),
  instantType: (0, i.createSelector)((e) => e.instantType),
  isInstantPhase: (0, i.createSelector)((e) => e.isInstantPhase),
  trackCursorAxis: (0, i.createSelector)((e) => e.trackCursorAxis),
  disableHoverablePopup: (0, i.createSelector)((e) => e.disableHoverablePopup),
  lastOpenChangeReason: (0, i.createSelector)((e) => e.openChangeReason),
  closeOnClick: (0, i.createSelector)((e) => e.closeOnClick),
  closeDelay: (0, i.createSelector)((e) => e.closeDelay),
  hasViewport: (0, i.createSelector)((e) => e.hasViewport),
};
class u extends i.ReactStore {
  constructor(e, t, n = !1) {
    const r = new l.PopupTriggerMap(),
      i = {
        ...{
          ...(0, l.createInitialPopupStoreState)(),
          disabled: !1,
          instantType: void 0,
          isInstantPhase: !1,
          trackCursorAxis: "none",
          disableHoverablePopup: !1,
          openChangeReason: null,
          closeOnClick: !0,
          closeDelay: 0,
          hasViewport: !1,
        },
        ...e,
      };
    (i.floatingRootContext = (0, l.createPopupFloatingRootContext)(r, t, n)),
      super(
        i,
        {
          popupRef: o.createRef(),
          onOpenChange: void 0,
          onOpenChangeComplete: void 0,
          triggerElements: r,
        },
        c,
      );
  }
  setOpen = (e, t) => {
    (0, l.applyPopupOpenChange)(this, e, t, {
      extraState: { openChangeReason: t.reason },
    });
  };
  cancelPendingOpen(e) {
    this.state.floatingRootContext.dispatchOpenChange(
      !1,
      (0, a.createChangeEventDetails)(s.REASONS.triggerPress, e),
    );
  }
  static useStore(e, t) {
    return (0, l.usePopupStore)(e, (e, n) => new u(t, e, n)).store;
  }
}
t.TooltipStore = u;
