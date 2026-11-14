// vendor/module-97875.js — webpack module 97875
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.DialogClose = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(90498 /* vendor/module-90498 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(63917 /* vendor/module-63917 */),
  l = n(22877 /* vendor/module-22877 */),
  c = n(82063 /* vendor/module-82063 */);
t.DialogClose = o.forwardRef(function (e, t) {
  const {
      render: n,
      className: r,
      style: o,
      disabled: u = !1,
      nativeButton: d = !0,
      ...p
    } = e,
    { store: f } = (0, i.useDialogRootContext)(),
    h = f.useState("open"),
    { getButtonProps: m, buttonRef: g } = (0, s.useButton)({
      disabled: u,
      native: d,
    }),
    y = { disabled: u };
  return (0, a.useRenderElement)("button", e, {
    state: y,
    ref: [t, g],
    props: [
      {
        onClick: function (e) {
          h &&
            f.setOpen(
              !1,
              (0, l.createChangeEventDetails)(
                c.REASONS.closePress,
                e.nativeEvent,
              ),
            );
        },
      },
      p,
      m,
    ],
  });
});
