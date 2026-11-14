// vendor/module-63889.js — webpack module 63889
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MenuGroup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(61978 /* vendor/module-61978 */),
  s = n(31085 /* vendor/module-31085 */);
t.MenuGroup = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: l, ...c } = e,
    [u, d] = o.useState(void 0),
    p = (0, i.useRenderElement)("div", e, {
      ref: t,
      props: { role: "group", "aria-labelledby": u, ...c },
    });
  return (0, s.jsx)(a.MenuGroupContext.Provider, {
    value: d,
    children: p,
  });
});
