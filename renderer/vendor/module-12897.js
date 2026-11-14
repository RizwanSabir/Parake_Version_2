// vendor/module-12897.js — webpack module 12897
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.ComboboxRow = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(28490 /* vendor/module-28490 */),
  s = n(31085 /* vendor/module-31085 */);
t.ComboboxRow = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e,
    c = (0, i.useRenderElement)("div", e, {
      ref: t,
      props: [{ role: "row" }, l],
    });
  return (0, s.jsx)(a.ComboboxRowContext.Provider, {
    value: !0,
    children: c,
  });
});
