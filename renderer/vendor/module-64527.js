// vendor/module-64527.js — webpack module 64527
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SelectLabel = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(62527 /* vendor/module-62527 */),
  l = n(41128 /* vendor/module-41128 */),
  c = n(8648 /* vendor/module-8648 */),
  u = n(42090 /* vendor/module-42090 */),
  d = n(22370 /* vendor/module-22370 */),
  p = n(84557 /* vendor/module-84557 */);
t.SelectLabel = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...f } = e;
  delete f.id;
  const h = (0, s.useFieldRootContext)(),
    { store: m } = (0, d.useSelectRootContext)(),
    g = (0, i.useStore)(m, p.selectors.triggerElement),
    y = (0, i.useStore)(m, p.selectors.id),
    v = (0, u.getDefaultLabelId)(y),
    b = (0, c.useLabel)({
      id: v,
      fallbackControlId: g?.id ?? y,
      setLabelId(e) {
        m.set("labelId", e);
      },
    });
  return (0, a.useRenderElement)("div", e, {
    ref: t,
    state: h.state,
    props: [b, f],
    stateAttributesMapping: l.fieldValidityMapping,
  });
});
