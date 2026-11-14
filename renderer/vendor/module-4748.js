// vendor/module-4748.js — webpack module 4748
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardStore = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(94661 /* vendor/module-94661 */),
  s = n(82063 /* vendor/module-82063 */),
  l = n(20838 /* vendor/module-20838 */);
const c = {
  ...a.popupStoreSelectors,
  instantType: (0, i.createSelector)((e) => e.instantType),
  hasViewport: (0, i.createSelector)((e) => e.hasViewport),
};
class u extends i.ReactStore {
  constructor(e, t, n = !1) {
    const r = new a.PopupTriggerMap(),
      i = {
        ...{
          ...(0, a.createInitialPopupStoreState)(),
          instantType: void 0,
          hasViewport: !1,
        },
        ...e,
      };
    (i.floatingRootContext = (0, a.createPopupFloatingRootContext)(r, t, n)),
      super(
        i,
        {
          popupRef: o.createRef(),
          onOpenChange: void 0,
          onOpenChangeComplete: void 0,
          triggerElements: r,
          closeDelayRef: { current: l.CLOSE_DELAY },
          inlineRectCoordsRef: { current: void 0 },
        },
        c,
      );
  }
  setOpen = (e, t) => {
    const { inlineRectCoordsRef: n } = this.context;
    (0, a.applyPopupOpenChange)(this, e, t, {
      onBeforeDispatch() {
        const r = t.event;
        e &&
          t.reason === s.REASONS.triggerHover &&
          t.trigger &&
          "clientX" in r &&
          "clientY" in r &&
          n.current?.element !== t.trigger &&
          (0, a.updateInlineRectCoords)(n, t.trigger, r.clientX, r.clientY);
      },
    });
  };
  static useStore(e, t) {
    return (0, a.usePopupStore)(e, (e, n) => new u(t, e, n)).store;
  }
}
t.PreviewCardStore = u;
