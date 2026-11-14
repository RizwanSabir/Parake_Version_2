// vendor/module-40837.js — webpack module 40837
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ProgressLabel = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(56419 /* vendor/module-56419 */),
  s = n(96390 /* vendor/module-96390 */),
  l = n(7076 /* vendor/module-7076 */);
t.ProgressLabel = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, id: c, ...u } = e,
    { setLabelId: d, state: p } = (0, s.useProgressRootContext)(),
    f = (0, a.useRegisteredLabelId)(c, d);
  return (0, i.useRenderElement)("span", e, {
    state: p,
    ref: t,
    props: [{ id: f, role: "presentation" }, u],
    stateAttributesMapping: l.progressStateAttributesMapping,
  });
});
