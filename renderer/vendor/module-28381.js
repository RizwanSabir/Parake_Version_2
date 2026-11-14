// vendor/module-28381.js — webpack module 28381
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MenuStore = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(38340 /* vendor/module-38340 */),
  s = n(16843 /* vendor/module-16843 */),
  l = n(35777 /* vendor/module-35777 */),
  c = n(94661 /* vendor/module-94661 */);
const u = {
  ...c.popupStoreSelectors,
  disabled: (0, i.createSelector)(
    (e) =>
      ("menubar" === e.parent.type && e.parent.context.disabled) || e.disabled,
  ),
  modal: (0, i.createSelector)(
    (e) =>
      (void 0 === e.parent.type || "context-menu" === e.parent.type) &&
      (e.modal ?? !0),
  ),
  openMethod: (0, i.createSelector)((e) => e.openMethod),
  allowMouseEnter: (0, i.createSelector)((e) => e.allowMouseEnter),
  highlightItemOnHover: (0, i.createSelector)((e) => e.highlightItemOnHover),
  stickIfOpen: (0, i.createSelector)((e) => e.stickIfOpen),
  parent: (0, i.createSelector)((e) => e.parent),
  rootId: (0, i.createSelector)((e) =>
    "menu" === e.parent.type
      ? e.parent.store.select("rootId")
      : void 0 !== e.parent.type
        ? e.parent.context.rootId
        : e.rootId,
  ),
  activeIndex: (0, i.createSelector)((e) => e.activeIndex),
  isActive: (0, i.createSelector)((e, t) => e.activeIndex === t),
  hoverEnabled: (0, i.createSelector)((e) => e.hoverEnabled),
  instantType: (0, i.createSelector)((e) => e.instantType),
  lastOpenChangeReason: (0, i.createSelector)((e) => e.openChangeReason),
  floatingTreeRoot: (0, i.createSelector)((e) =>
    "menu" === e.parent.type
      ? e.parent.store.select("floatingTreeRoot")
      : e.floatingTreeRoot,
  ),
  floatingNodeId: (0, i.createSelector)((e) => e.floatingNodeId),
  floatingParentNodeId: (0, i.createSelector)((e) => e.floatingParentNodeId),
  itemProps: (0, i.createSelector)((e) => e.itemProps),
  closeDelay: (0, i.createSelector)((e) => e.closeDelay),
  hasViewport: (0, i.createSelector)((e) => e.hasViewport),
  keyboardEventRelay: (0, i.createSelector)((e) =>
    e.keyboardEventRelay
      ? e.keyboardEventRelay
      : "menu" === e.parent.type
        ? e.parent.store.select("keyboardEventRelay")
        : void 0,
  ),
};
class d extends i.ReactStore {
  constructor(e) {
    super(
      {
        ...{
          ...(0, c.createInitialPopupStoreState)(),
          disabled: !1,
          modal: !0,
          openMethod: null,
          allowMouseEnter: !1,
          highlightItemOnHover: !0,
          stickIfOpen: !0,
          parent: { type: void 0 },
          rootId: void 0,
          activeIndex: null,
          hoverEnabled: !0,
          instantType: void 0,
          openChangeReason: null,
          floatingTreeRoot: new l.FloatingTreeStore(),
          floatingNodeId: void 0,
          floatingParentNodeId: null,
          itemProps: a.EMPTY_OBJECT,
          keyboardEventRelay: void 0,
          closeDelay: 0,
          hasViewport: !1,
        },
        ...e,
      },
      {
        positionerRef: o.createRef(),
        popupRef: o.createRef(),
        typingRef: { current: !1 },
        itemDomElements: { current: [] },
        itemLabels: { current: [] },
        allowMouseUpTriggerRef: { current: !1 },
        triggerFocusTargetRef: o.createRef(),
        beforeContentFocusGuardRef: o.createRef(),
        onOpenChangeComplete: void 0,
        triggerElements: new c.PopupTriggerMap(),
      },
      u,
    ),
      (this.unsubscribeParentListener = this.observe("parent", (e) => {
        if ((this.unsubscribeParentListener?.(), "menu" === e.type)) {
          let t = e.store.select("rootId"),
            n = e.store.select("floatingTreeRoot"),
            r = e.store.select("keyboardEventRelay");
          return (
            (this.unsubscribeParentListener = e.store.subscribe(() => {
              const o = e.store.select("rootId"),
                i = e.store.select("floatingTreeRoot"),
                a = e.store.select("keyboardEventRelay");
              (t === o && n === i && r === a) ||
                ((t = o), (n = i), (r = a), this.notifyAll());
            })),
            void (this.context.allowMouseUpTriggerRef =
              e.store.context.allowMouseUpTriggerRef)
          );
        }
        void 0 !== e.type &&
          (this.context.allowMouseUpTriggerRef =
            e.context.allowMouseUpTriggerRef),
          (this.unsubscribeParentListener = null);
      }));
  }
  setOpen(e, t) {
    this.state.floatingRootContext.context.events.emit("setOpen", {
      open: e,
      eventDetails: t,
    });
  }
  static useStore(e, t) {
    const n = (0, s.useRefWithInit)(() => new d(t)).current;
    return e ?? n;
  }
  unsubscribeParentListener = null;
}
t.MenuStore = d;
