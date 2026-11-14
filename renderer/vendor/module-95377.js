// vendor/module-95377.js — webpack module 95377
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FloatingRootStore = void 0);
var r = n(78207 /* vendor/module-78207 */),
  o = n(16705 /* vendor/module-16705 */),
  i = n(65200 /* vendor/module-65200 */);
const a = {
  open: (0, r.createSelector)((e) => e.open),
  transitionStatus: (0, r.createSelector)((e) => e.transitionStatus),
  domReferenceElement: (0, r.createSelector)((e) => e.domReferenceElement),
  referenceElement: (0, r.createSelector)(
    (e) => e.positionReference ?? e.referenceElement,
  ),
  floatingElement: (0, r.createSelector)((e) => e.floatingElement),
  floatingId: (0, r.createSelector)((e) => e.floatingId),
};
class s extends r.ReactStore {
  constructor(e) {
    const {
      syncOnly: t,
      nested: n,
      onOpenChange: r,
      triggerElements: i,
      ...s
    } = e;
    super(
      {
        ...s,
        positionReference: s.referenceElement,
        domReferenceElement: s.referenceElement,
      },
      {
        onOpenChange: r,
        dataRef: { current: {} },
        events: (0, o.createEventEmitter)(),
        nested: n,
        triggerElements: i,
      },
      a,
    ),
      (this.syncOnly = t);
  }
  syncOpenEvent = (e, t) => {
    (!e || !this.state.open || (null != t && (0, i.isClickLikeEvent)(t))) &&
      (this.context.dataRef.current.openEvent = e ? t : void 0);
  };
  dispatchOpenChange = (e, t) => {
    this.syncOpenEvent(e, t.event);
    const n = {
      open: e,
      reason: t.reason,
      nativeEvent: t.event,
      nested: this.context.nested,
      triggerElement: t.trigger,
    };
    this.context.events.emit("openchange", n);
  };
  setOpen = (e, t) => {
    this.syncOnly || this.dispatchOpenChange(e, t),
      this.context.onOpenChange?.(e, t);
  };
}
t.FloatingRootStore = s;
