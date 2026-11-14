// vendor/module-18654.js — webpack module 18654
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useSyncedFloatingRootContext = function (e) {
    const {
        popupStore: t,
        treatPopupAsFloatingElement: n = !1,
        floatingRootContext: r,
        floatingId: l,
        nested: c,
        onOpenChange: u,
      } = e,
      d = t.useState("open"),
      p = t.useState("activeTriggerElement"),
      f = t.useState(n ? "popupElement" : "positionerElement"),
      h = t.context.triggerElements,
      m = u,
      g = o.useRef(null);
    void 0 === r &&
      null === g.current &&
      (g.current = new s.FloatingRootStore({
        open: d,
        transitionStatus: void 0,
        referenceElement: p,
        floatingElement: f,
        triggerElements: h,
        onOpenChange: m,
        floatingId: l,
        syncOnly: !0,
        nested: c,
      }));
    const y = r ?? g.current;
    return (
      t.useSyncedValue("floatingId", l),
      (0, i.useIsoLayoutEffect)(() => {
        const e = {
          open: d,
          floatingId: l,
          referenceElement: p,
          floatingElement: f,
        };
        (0, a.isElement)(p) && (e.domReferenceElement = p),
          y.state.positionReference === y.state.referenceElement &&
            (e.positionReference = p),
          y.update(e);
      }, [d, l, p, f, y]),
      (y.context.onOpenChange = m),
      (y.context.nested = c),
      y
    );
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(81339 /* vendor/module-81339 */),
  s = n(95377 /* vendor/module-95377 */);
