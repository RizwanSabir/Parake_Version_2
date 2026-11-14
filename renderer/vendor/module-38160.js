// vendor/module-38160.js — webpack module 38160
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectGroupLabel = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(57122 /* vendor/module-57122 */),
  a = n(33115 /* vendor/module-33115 */),
  s = n(14948 /* vendor/module-14948 */),
  l = n(51909 /* vendor/module-51909 */);
t.SelectGroupLabel = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, id: c, ...u } = e,
    { setLabelId: d } = (0, s.useSelectGroupContext)(),
    p = (0, a.useBaseUiId)(c);
  return (
    (0, i.useIsoLayoutEffect)(() => {
      d(p);
    }, [p, d]),
    (0, l.useRenderElement)("div", e, {
      ref: t,
      props: [{ id: p }, u],
    })
  );
});
