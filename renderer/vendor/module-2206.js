// vendor/module-2206.js — webpack module 2206
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuCheckboxItem = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(95836 /* vendor/module-95836 */),
  a = n(30811 /* vendor/module-30811 */),
  s = n(83612 /* vendor/module-83612 */),
  l = n(33770 /* vendor/module-33770 */),
  c = n(85950 /* vendor/module-85950 */),
  u = n(51909 /* vendor/module-51909 */),
  d = n(33115 /* vendor/module-33115 */),
  p = n(76291 /* vendor/module-76291 */),
  f = n(83838 /* vendor/module-83838 */),
  h = n(22877 /* vendor/module-22877 */),
  m = n(82063 /* vendor/module-82063 */),
  g = n(31085 /* vendor/module-31085 */);
t.MenuCheckboxItem = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      id: y,
      label: v,
      nativeButton: b = !1,
      disabled: S = !1,
      closeOnClick: _ = !1,
      checked: x,
      defaultChecked: w,
      onCheckedChange: E,
      style: T,
      ...k
    } = e,
    C = (0, l.useCompositeListItem)({ label: v }),
    I = (0, f.useMenuPositionerContext)(!0),
    A = (0, d.useBaseUiId)(y),
    { store: O } = (0, c.useMenuRootContext)(),
    R = O.useState("isActive", C.index),
    M = O.useState("itemProps"),
    [P, N] = (0, i.useControlled)({
      controlled: x,
      default: w ?? !1,
      name: "MenuCheckboxItem",
      state: "checked",
    }),
    { getItemProps: D, itemRef: j } = (0, s.useMenuItem)({
      closeOnClick: _,
      disabled: S,
      highlighted: R,
      id: A,
      store: O,
      nativeButton: b,
      nodeId: I?.context.nodeId,
      itemMetadata: s.REGULAR_ITEM,
    }),
    L = o.useMemo(
      () => ({ disabled: S, highlighted: R, checked: P }),
      [S, R, P],
    ),
    F = (0, u.useRenderElement)("div", e, {
      state: L,
      stateAttributesMapping: p.itemMapping,
      props: [
        M,
        {
          role: "menuitemcheckbox",
          "aria-checked": P,
          onClick: function (e) {
            const t = (0, h.createChangeEventDetails)(
              m.REASONS.itemPress,
              e.nativeEvent,
              void 0,
              { preventUnmountOnClose() {} },
            );
            E?.(!P, t), t.isCanceled || N((e) => !e);
          },
        },
        k,
        D,
      ],
      ref: [j, t, C.ref],
    });
  return (0, g.jsx)(a.MenuCheckboxItemContext.Provider, {
    value: L,
    children: F,
  });
});
