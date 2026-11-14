// vendor/module-1715.js — webpack module 1715
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SelectArrow = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(67538 /* vendor/module-67538 */),
  s = n(22370 /* vendor/module-22370 */),
  l = n(51146 /* vendor/module-51146 */),
  c = n(44306 /* vendor/module-44306 */),
  u = n(51909 /* vendor/module-51909 */),
  d = n(84557 /* vendor/module-84557 */);
const p = { ...l.popupStateMapping, ...c.transitionStatusMapping };
t.SelectArrow = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e,
    { store: c } = (0, s.useSelectRootContext)(),
    {
      side: f,
      align: h,
      arrowRef: m,
      arrowStyles: g,
      arrowUncentered: y,
      alignItemWithTriggerActive: v,
    } = (0, a.useSelectPositionerContext)(),
    b = {
      open: (0, i.useStore)(c, d.selectors.open),
      side: f,
      align: h,
      uncentered: y,
    },
    S = (0, u.useRenderElement)("div", e, {
      state: b,
      ref: [m, t],
      props: [{ style: g, "aria-hidden": !0 }, l],
      stateAttributesMapping: p,
    });
  return v ? null : S;
});
