// vendor/module-76043.js — webpack module 76043
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SelectGroup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(14948 /* vendor/module-14948 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(31085 /* vendor/module-31085 */);
t.SelectGroup = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: l, ...c } = e,
    [u, d] = o.useState(),
    p = o.useMemo(() => ({ labelId: u, setLabelId: d }), [u, d]),
    f = (0, a.useRenderElement)("div", e, {
      ref: t,
      props: [{ role: "group", "aria-labelledby": u }, c],
    });
  return (0, s.jsx)(i.SelectGroupContext.Provider, {
    value: p,
    children: f,
  });
});
