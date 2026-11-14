// vendor/module-29696.js — webpack module 29696
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useFloatingRootContext = function (e) {
    const { open: t = !1, onOpenChange: n, elements: u = {} } = e,
      d = (0, o.useId)(),
      p = null != (0, l.useFloatingParentNodeId)(),
      f = (0, a.useRefWithInit)(
        () =>
          new c.FloatingRootStore({
            open: t,
            transitionStatus: void 0,
            onOpenChange: n,
            referenceElement: u.reference ?? null,
            floatingElement: u.floating ?? null,
            triggerElements: new s.PopupTriggerMap(),
            floatingId: d,
            syncOnly: !1,
            nested: p,
          }),
      ).current;
    return (
      (0, i.useIsoLayoutEffect)(() => {
        const e = { open: t, floatingId: d };
        void 0 !== u.reference &&
          ((e.referenceElement = u.reference),
          (e.domReferenceElement = (0, r.isElement)(u.reference)
            ? u.reference
            : null)),
          void 0 !== u.floating && (e.floatingElement = u.floating),
          f.update(e);
      }, [t, d, u.reference, u.floating, f]),
      (f.context.onOpenChange = n),
      (f.context.nested = p),
      f
    );
  });
var r = n(81339 /* vendor/module-81339 */),
  o = n(28991 /* vendor/module-28991 */),
  i = n(57122 /* vendor/module-57122 */),
  a = n(16843 /* vendor/module-16843 */),
  s = n(94661 /* vendor/module-94661 */),
  l = n(33406 /* vendor/module-33406 */),
  c = n(95377 /* vendor/module-95377 */);
