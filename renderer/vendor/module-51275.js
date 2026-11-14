// vendor/module-51275.js — webpack module 51275
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MenuItem = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(83612 /* vendor/module-83612 */),
  a = n(85950 /* vendor/module-85950 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(33115 /* vendor/module-33115 */),
  c = n(33770 /* vendor/module-33770 */),
  u = n(83838 /* vendor/module-83838 */);
t.MenuItem = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      id: o,
      label: d,
      nativeButton: p = !1,
      disabled: f = !1,
      closeOnClick: h = !0,
      style: m,
      ...g
    } = e,
    y = (0, c.useCompositeListItem)({ label: d }),
    v = (0, u.useMenuPositionerContext)(!0),
    b = (0, l.useBaseUiId)(o),
    { store: S } = (0, a.useMenuRootContext)(),
    _ = S.useState("isActive", y.index),
    x = S.useState("itemProps"),
    { getItemProps: w, itemRef: E } = (0, i.useMenuItem)({
      closeOnClick: h,
      disabled: f,
      highlighted: _,
      id: b,
      store: S,
      nativeButton: p,
      nodeId: v?.context.nodeId,
      itemMetadata: i.REGULAR_ITEM,
    }),
    T = { disabled: f, highlighted: _ };
  return (0, s.useRenderElement)("div", e, {
    state: T,
    props: [x, g, w],
    ref: [E, t, y.ref],
  });
});
