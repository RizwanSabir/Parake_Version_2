// vendor/module-24856.js — webpack module 24856
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DrawerIndentBackground = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(17452 /* vendor/module-17452 */);
const s = {
  active: (e) => (e ? { "data-active": "" } : { "data-inactive": "" }),
};
t.DrawerIndentBackground = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e,
    c = (0, a.useDrawerProviderContext)(!0),
    u = { active: c?.active ?? !1 };
  return (0, i.useRenderElement)("div", e, {
    ref: t,
    state: u,
    props: l,
    stateAttributesMapping: s,
  });
});
