// vendor/module-17946.js — webpack module 17946
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.Button = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(87782 /* vendor/module-87782 */),
  a = n(51909 /* vendor/module-51909 */);
t.Button = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      disabled: o = !1,
      focusableWhenDisabled: s = !1,
      nativeButton: l = !0,
      style: c,
      ...u
    } = e,
    { getButtonProps: d, buttonRef: p } = (0, i.useButton)({
      disabled: o,
      focusableWhenDisabled: s,
      native: l,
    }),
    f = { disabled: o };
  return (0, a.useRenderElement)("button", e, {
    state: f,
    ref: [t, p],
    props: [u, d],
  });
});
