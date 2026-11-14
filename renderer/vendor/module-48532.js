// vendor/module-48532.js — webpack module 48532
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuRadioItem = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(85950 /* vendor/module-85950 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(33115 /* vendor/module-33115 */),
  l = n(70393 /* vendor/module-70393 */),
  c = n(11273 /* vendor/module-11273 */),
  u = n(76291 /* vendor/module-76291 */),
  d = n(33770 /* vendor/module-33770 */),
  p = n(83612 /* vendor/module-83612 */),
  f = n(83838 /* vendor/module-83838 */),
  h = n(22877 /* vendor/module-22877 */),
  m = n(82063 /* vendor/module-82063 */),
  g = n(31085 /* vendor/module-31085 */);
t.MenuRadioItem = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      id: y,
      label: v,
      nativeButton: b = !1,
      disabled: S = !1,
      closeOnClick: _ = !1,
      value: x,
      style: w,
      ...E
    } = e,
    T = (0, d.useCompositeListItem)({ label: v }),
    k = (0, f.useMenuPositionerContext)(!0),
    C = (0, s.useBaseUiId)(y),
    { store: I } = (0, i.useMenuRootContext)(),
    A = I.useState("isActive", T.index),
    O = I.useState("itemProps"),
    { value: R, setValue: M, disabled: P } = (0, l.useMenuRadioGroupContext)(),
    N = P || S,
    D = R === x,
    { getItemProps: j, itemRef: L } = (0, p.useMenuItem)({
      closeOnClick: _,
      disabled: N,
      highlighted: A,
      id: C,
      store: I,
      nativeButton: b,
      nodeId: k?.context.nodeId,
      itemMetadata: p.REGULAR_ITEM,
    }),
    F = o.useMemo(
      () => ({ disabled: N, highlighted: A, checked: D }),
      [N, A, D],
    ),
    U = (0, a.useRenderElement)("div", e, {
      state: F,
      stateAttributesMapping: u.itemMapping,
      props: [
        O,
        {
          role: "menuitemradio",
          "aria-checked": D,
          onClick: function (e) {
            const t = (0, h.createChangeEventDetails)(
              m.REASONS.itemPress,
              e.nativeEvent,
              void 0,
              { preventUnmountOnClose() {} },
            );
            M(x, t);
          },
        },
        E,
        j,
      ],
      ref: [L, t, T.ref],
    });
  return (0, g.jsx)(c.MenuRadioItemContext.Provider, {
    value: F,
    children: U,
  });
});
