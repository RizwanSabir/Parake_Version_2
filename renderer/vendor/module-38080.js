// vendor/module-38080.js — webpack module 38080
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.Separator = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */);
t.Separator = o.forwardRef(function (e, t) {
  const {
      className: n,
      render: r,
      orientation: o = "horizontal",
      style: a,
      ...s
    } = e,
    l = { orientation: o };
  return (0, i.useRenderElement)("div", e, {
    state: l,
    ref: t,
    props: [{ role: "separator", "aria-orientation": o }, s],
  });
});
