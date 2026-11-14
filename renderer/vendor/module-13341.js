// vendor/module-13341.js — webpack module 13341
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverStore = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(78207 /* vendor/module-78207 */),
  s = n(54807 /* vendor/module-54807 */),
  l = n(82063 /* vendor/module-82063 */),
  c = n(94661 /* vendor/module-94661 */),
  u = n(25743 /* vendor/module-25743 */);
const d = {
  ...c.popupStoreSelectors,
  disabled: (0, a.createSelector)((e) => e.disabled),
  instantType: (0, a.createSelector)((e) => e.instantType),
  openMethod: (0, a.createSelector)((e) => e.openMethod),
  openChangeReason: (0, a.createSelector)((e) => e.openChangeReason),
  modal: (0, a.createSelector)((e) => e.modal),
  focusManagerModal: (0, a.createSelector)((e) => e.focusManagerModal),
  stickIfOpen: (0, a.createSelector)((e) => e.stickIfOpen),
  titleElementId: (0, a.createSelector)((e) => e.titleElementId),
  descriptionElementId: (0, a.createSelector)((e) => e.descriptionElementId),
  openOnHover: (0, a.createSelector)((e) => e.openOnHover),
  closeDelay: (0, a.createSelector)((e) => e.closeDelay),
  hasViewport: (0, a.createSelector)((e) => e.hasViewport),
};
class p extends a.ReactStore {
  constructor(e, t, n = !1) {
    const r = {
        ...{
          ...(0, c.createInitialPopupStoreState)(),
          disabled: !1,
          modal: !1,
          focusManagerModal: !1,
          instantType: void 0,
          openMethod: null,
          openChangeReason: null,
          titleElementId: void 0,
          descriptionElementId: void 0,
          stickIfOpen: !0,
          nested: !1,
          openOnHover: !1,
          closeDelay: 0,
          hasViewport: !1,
        },
        ...e,
      },
      i = new c.PopupTriggerMap();
    r.open && void 0 === e?.mounted && (r.mounted = !0),
      (r.floatingRootContext = (0, c.createPopupFloatingRootContext)(i, t, n)),
      super(
        r,
        {
          popupRef: o.createRef(),
          backdropRef: o.createRef(),
          internalBackdropRef: o.createRef(),
          onOpenChange: void 0,
          onOpenChangeComplete: void 0,
          triggerFocusTargetRef: o.createRef(),
          beforeContentFocusGuardRef: o.createRef(),
          stickIfOpenTimeout: new s.Timeout(),
          triggerElements: i,
        },
        d,
      );
  }
  setOpen = (e, t) => {
    const n = t.reason === l.REASONS.triggerHover,
      r = t.reason === l.REASONS.triggerPress && 0 === t.event.detail,
      o = !e && (t.reason === l.REASONS.escapeKey || null == t.reason),
      a = (0, c.attachPreventUnmountOnClose)(t),
      s = this.select("activeTriggerId");
    if (
      (e ||
        t.reason !== l.REASONS.closePress ||
        null != t.trigger ||
        null == s ||
        (t.trigger =
          this.context.triggerElements.getById(s) ??
          this.select("activeTriggerElement") ??
          void 0),
      this.context.onOpenChange?.(e, t),
      t.isCanceled)
    )
      return;
    this.state.floatingRootContext.dispatchOpenChange(e, t);
    const d = () => {
      const n = { open: e, openChangeReason: t.reason };
      (0, c.setPopupOpenState)(n, e, t.trigger, a()), this.update(n);
    };
    n
      ? (this.set("stickIfOpen", !0),
        this.context.stickIfOpenTimeout.start(u.PATIENT_CLICK_THRESHOLD, () => {
          this.set("stickIfOpen", !1);
        }),
        i.flushSync(d))
      : d(),
      r || o
        ? this.set("instantType", r ? "click" : "dismiss")
        : t.reason === l.REASONS.focusOut
          ? this.set("instantType", "focus")
          : this.set("instantType", void 0);
  };
  static useStore(e, t) {
    const { store: n, internalStore: r } = (0, c.usePopupStore)(
      e,
      (e, n) => new p(t, e, n),
    );
    return o.useEffect(() => r?.disposeEffect(), [r]), n;
  }
  disposeEffect = () => this.context.stickIfOpenTimeout.disposeEffect();
}
t.PopoverStore = p;
