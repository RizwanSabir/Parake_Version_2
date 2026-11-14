// vendor/module-15769.js — webpack module 15769
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxGroup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(22562 /* vendor/module-22562 */),
  s = n(4796 /* vendor/module-4796 */),
  l = n(31085 /* vendor/module-31085 */);
t.ComboboxGroup = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: c, items: u, ...d } = e,
    [p, f] = o.useState(),
    h = o.useMemo(() => ({ labelId: p, setLabelId: f, items: u }), [p, f, u]),
    m = (0, i.useRenderElement)("div", e, {
      ref: t,
      props: [{ role: "group", "aria-labelledby": p }, d],
    }),
    g = (0, l.jsx)(a.ComboboxGroupContext.Provider, {
      value: h,
      children: m,
    });
  return u
    ? (0, l.jsx)(s.GroupCollectionProvider, { items: u, children: g })
    : g;
});
