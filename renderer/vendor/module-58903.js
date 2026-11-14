// vendor/module-58903.js — webpack module 58903
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverClose = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(27788 /* vendor/module-27788 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(63917 /* vendor/module-63917 */),
  l = n(22877 /* vendor/module-22877 */),
  c = n(82063 /* vendor/module-82063 */),
  u = n(38476 /* vendor/module-38476 */);
t.PopoverClose = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: o,
      disabled: d = !1,
      nativeButton: p = !0,
      ...f
    } = e,
    { buttonRef: h, getButtonProps: m } = (0, s.useButton)({
      disabled: d,
      focusableWhenDisabled: !1,
      native: p,
    }),
    { store: g } = (0, i.usePopoverRootContext)();
  return (
    (0, u.useClosePartRegistration)(),
    (0, a.useRenderElement)("button", e, {
      ref: [t, h],
      props: [
        {
          onClick(e) {
            g.setOpen(
              !1,
              (0, l.createChangeEventDetails)(
                c.REASONS.closePress,
                e.nativeEvent,
              ),
            );
          },
        },
        f,
        m,
      ],
    })
  );
});
