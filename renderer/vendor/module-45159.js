// vendor/module-45159.js — webpack module 45159
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxIcon = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */);
t.ComboboxIcon = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...a } = e;
  return (0, i.useRenderElement)("span", e, {
    ref: t,
    props: [{ "aria-hidden": !0, children: "▼" }, a],
  });
});
