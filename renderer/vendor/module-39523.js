// vendor/module-39523.js — webpack module 39523
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SelectIcon = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(22370 /* vendor/module-22370 */),
  l = n(51146 /* vendor/module-51146 */),
  c = n(84557 /* vendor/module-84557 */);
t.SelectIcon = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...u } = e,
    { store: d } = (0, s.useSelectRootContext)(),
    p = { open: (0, i.useStore)(d, c.selectors.open) };
  return (0, a.useRenderElement)("span", e, {
    state: p,
    ref: t,
    props: [{ "aria-hidden": !0, children: "▼" }, u],
    stateAttributesMapping: l.triggerOpenStateMapping,
  });
});
