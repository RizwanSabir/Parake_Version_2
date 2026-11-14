// vendor/module-89482.js — webpack module 89482
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxGroupLabel = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(33115 /* vendor/module-33115 */),
  s = n(22562 /* vendor/module-22562 */),
  l = n(51909 /* vendor/module-51909 */);
t.ComboboxGroupLabel = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, id: c, ...u } = e,
    { setLabelId: d } = (0, s.useComboboxGroupContext)(),
    p = (0, a.useBaseUiId)(c);
  return (
    (0, i.useIsoLayoutEffect)(
      () => (
        d(p),
        () => {
          d(void 0);
        }
      ),
      [p, d],
    ),
    (0, l.useRenderElement)("div", e, {
      ref: t,
      props: [{ id: p }, u],
    })
  );
});
