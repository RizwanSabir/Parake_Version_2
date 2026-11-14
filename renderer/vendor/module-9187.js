// vendor/module-9187.js — webpack module 9187
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.DialogStore = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(94661 /* vendor/module-94661 */);
const s = {
  ...a.popupStoreSelectors,
  modal: (0, i.createSelector)((e) => e.modal),
  nested: (0, i.createSelector)((e) => e.nested),
  nestedOpenDialogCount: (0, i.createSelector)((e) => e.nestedOpenDialogCount),
  nestedOpenDrawerCount: (0, i.createSelector)((e) => e.nestedOpenDrawerCount),
  disablePointerDismissal: (0, i.createSelector)(
    (e) => e.disablePointerDismissal,
  ),
  openMethod: (0, i.createSelector)((e) => e.openMethod),
  descriptionElementId: (0, i.createSelector)((e) => e.descriptionElementId),
  titleElementId: (0, i.createSelector)((e) => e.titleElementId),
  viewportElement: (0, i.createSelector)((e) => e.viewportElement),
  role: (0, i.createSelector)((e) => e.role),
};
class l extends i.ReactStore {
  constructor(e, t, n = !1) {
    const r = new a.PopupTriggerMap(),
      i = (function (e = {}) {
        return {
          ...(0, a.createInitialPopupStoreState)(),
          modal: !0,
          disablePointerDismissal: !1,
          popupElement: null,
          viewportElement: null,
          descriptionElementId: void 0,
          titleElementId: void 0,
          openMethod: null,
          nested: !1,
          nestedOpenDialogCount: 0,
          nestedOpenDrawerCount: 0,
          role: "dialog",
          ...e,
        };
      })(e);
    (i.floatingRootContext = (0, a.createPopupFloatingRootContext)(r, t, n)),
      super(
        i,
        {
          popupRef: o.createRef(),
          backdropRef: o.createRef(),
          internalBackdropRef: o.createRef(),
          outsidePressEnabledRef: { current: !0 },
          triggerElements: r,
          onOpenChange: void 0,
          onOpenChangeComplete: void 0,
        },
        s,
      );
  }
  setOpen = (e, t) => {
    if (
      ((t.preventUnmountOnClose = () => {
        this.set("preventUnmountingOnClose", !0);
      }),
      e ||
        null != t.trigger ||
        null == this.state.activeTriggerId ||
        (t.trigger = this.state.activeTriggerElement ?? void 0),
      this.context.onOpenChange?.(e, t),
      t.isCanceled)
    )
      return;
    this.state.floatingRootContext.dispatchOpenChange(e, t);
    const n = { open: e };
    (0, a.setPopupOpenState)(n, e, t.trigger), this.update(n);
  };
  static useStore(e, t) {
    return (0, a.usePopupStore)(e, (e, n) => new l(t, e, n), !0).store;
  }
}
t.DialogStore = l;
