// vendor/module-73149.js — webpack module 73149
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxLabel = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i =
    (n(71923 /* vendor/module-71923 */),
    n(23549 /* vendor/module-23549 */),
    n(78207 /* vendor/module-78207 */)),
  a = n(51909 /* vendor/module-51909 */),
  s = n(62527 /* vendor/module-62527 */),
  l = n(41128 /* vendor/module-41128 */),
  c = n(8648 /* vendor/module-8648 */),
  u = n(42090 /* vendor/module-42090 */),
  d = n(32118 /* vendor/module-32118 */),
  p = n(36826 /* vendor/module-36826 */);
t.ComboboxLabel = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...f } = e;
  delete f.id;
  const h = (0, s.useFieldRootContext)(),
    m = (0, d.useComboboxRootContext)(),
    g = (0, i.useStore)(m, p.selectors.inputInsidePopup),
    y = (0, i.useStore)(m, p.selectors.triggerElement),
    v =
      ((0, i.useStore)(m, p.selectors.inputElement),
      (0, i.useStore)(m, p.selectors.id)),
    b = (0, u.getDefaultLabelId)(v),
    S = y?.id ?? (g ? v : void 0),
    _ = (0, c.useLabel)({
      id: b,
      fallbackControlId: S,
      setLabelId(e) {
        m.set("labelId", e);
      },
    });
  return (0, a.useRenderElement)("div", e, {
    ref: t,
    state: h.state,
    props: [_, f],
    stateAttributesMapping: l.fieldValidityMapping,
  });
});
