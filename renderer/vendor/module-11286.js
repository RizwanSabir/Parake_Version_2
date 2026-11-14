// vendor/module-11286.js — webpack module 11286
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuLinkItem = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(85950 /* vendor/module-85950 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(33115 /* vendor/module-33115 */),
  l = n(33770 /* vendor/module-33770 */),
  c = n(83838 /* vendor/module-83838 */),
  u = n(69067 /* vendor/module-69067 */),
  d = n(63917 /* vendor/module-63917 */),
  p = n(55327 /* vendor/module-55327 */);
t.MenuLinkItem = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      id: f,
      label: h,
      closeOnClick: m = !1,
      style: g,
      ...y
    } = e,
    v = o.useRef(null),
    b = (0, l.useCompositeListItem)({ label: h }),
    S = (0, c.useMenuPositionerContext)(!0),
    _ = S?.context.nodeId,
    x = (0, s.useBaseUiId)(f),
    { store: w } = (0, i.useMenuRootContext)(),
    E = w.useState("isActive", b.index),
    T = w.useState("itemProps"),
    k = w.context.typingRef,
    { getButtonProps: C, buttonRef: I } = (0, d.useButton)({
      native: !1,
      composite: !0,
    }),
    A = (0, u.useMenuItemCommonProps)({
      closeOnClick: m,
      highlighted: E,
      id: x,
      nodeId: _,
      store: w,
      typingRef: k,
      itemRef: v,
    }),
    O = { highlighted: E };
  return (0, a.useRenderElement)("a", e, {
    state: O,
    props: [
      T,
      y,
      function (e) {
        return (0, p.mergeProps)(A, e, C);
      },
    ],
    ref: [v, I, t, b.ref],
  });
});
