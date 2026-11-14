// vendor/module-88106.js — webpack module 88106
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuGroupLabel = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(33115 /* vendor/module-33115 */),
  l = n(61978 /* vendor/module-61978 */);
t.MenuGroupLabel = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, id: c, ...u } = e,
    d = (0, s.useBaseUiId)(c),
    p = (0, l.useMenuGroupRootContext)();
  return (
    (0, i.useIsoLayoutEffect)(
      () => (
        p(d),
        () => {
          p(void 0);
        }
      ),
      [p, d],
    ),
    (0, a.useRenderElement)("div", e, {
      ref: t,
      props: { id: d, role: "presentation", ...u },
    })
  );
});
