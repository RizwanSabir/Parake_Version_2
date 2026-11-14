// vendor/module-17517.js — webpack module 17517
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.HoverInteraction = void 0),
  (t.applySafePolygonPointerEventsMutation = function (e, t) {
    const { scopeElement: n, referenceElement: r, floatingElement: o } = t,
      i = l.get(n);
    i && i !== e && c(i),
      c(e),
      (e.performedPointerEventsMutation = !0),
      (e.pointerEventsScopeElement = n),
      (e.pointerEventsReferenceElement = r),
      (e.pointerEventsFloatingElement = o),
      l.set(n, e),
      (n.style.pointerEvents = "none"),
      (r.style.pointerEvents = "auto"),
      (o.style.pointerEvents = "auto");
  }),
  (t.clearSafePolygonPointerEventsMutation = c),
  Object.defineProperty(t, "isInteractiveElement", {
    enumerable: !0,
    get: function () {
      return a.isInteractiveElement;
    },
  }),
  (t.useHoverInteractionSharedState = function (e) {
    const t = e.context.dataRef.current,
      n = (0, o.useRefWithInit)(
        () => t.hoverInteractionState ?? s.create(),
      ).current;
    return (
      t.hoverInteractionState || (t.hoverInteractionState = n),
      (0, r.useOnMount)(t.hoverInteractionState.disposeEffect),
      t.hoverInteractionState
    );
  });
var r = n(32310 /* vendor/module-32310 */),
  o = n(16843 /* vendor/module-16843 */),
  i = n(54807 /* vendor/module-54807 */),
  a = n(65200 /* vendor/module-65200 */);
class s {
  constructor() {
    (this.pointerType = void 0),
      (this.interactedInside = !1),
      (this.handler = void 0),
      (this.blockMouseMove = !0),
      (this.performedPointerEventsMutation = !1),
      (this.pointerEventsScopeElement = null),
      (this.pointerEventsReferenceElement = null),
      (this.pointerEventsFloatingElement = null),
      (this.restTimeoutPending = !1),
      (this.openChangeTimeout = new i.Timeout()),
      (this.restTimeout = new i.Timeout()),
      (this.handleCloseOptions = void 0);
  }
  static create() {
    return new s();
  }
  dispose = () => {
    this.openChangeTimeout.clear(), this.restTimeout.clear();
  };
  disposeEffect = () => this.dispose;
}
t.HoverInteraction = s;
const l = new WeakMap();
function c(e) {
  if (!e.performedPointerEventsMutation) return;
  const t = e.pointerEventsScopeElement;
  t &&
    l.get(t) === e &&
    (e.pointerEventsScopeElement?.style.removeProperty("pointer-events"),
    e.pointerEventsReferenceElement?.style.removeProperty("pointer-events"),
    e.pointerEventsFloatingElement?.style.removeProperty("pointer-events"),
    l.delete(t)),
    (e.performedPointerEventsMutation = !1),
    (e.pointerEventsScopeElement = null),
    (e.pointerEventsReferenceElement = null),
    (e.pointerEventsFloatingElement = null);
}
