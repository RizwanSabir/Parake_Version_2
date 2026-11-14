// vendor/module-91691.js — webpack module 91691
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxInternalDismissButton = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(12772 /* vendor/module-12772 */),
  a = n(38602 /* vendor/module-38602 */),
  s = n(63917 /* vendor/module-63917 */),
  l = n(22877 /* vendor/module-22877 */),
  c = n(82063 /* vendor/module-82063 */),
  u = n(32118 /* vendor/module-32118 */),
  d = n(31085 /* vendor/module-31085 */);
t.ComboboxInternalDismissButton = o.forwardRef(function (e, t) {
  const n = (0, u.useComboboxRootContext)(),
    { buttonRef: r, getButtonProps: o } = (0, s.useButton)({
      native: !1,
    }),
    p = (0, i.useMergedRefs)(t, r),
    f = o({
      onClick: function (e) {
        n.state.setOpen(
          !1,
          (0, l.createChangeEventDetails)(
            c.REASONS.closePress,
            e.nativeEvent,
            e.currentTarget,
          ),
        );
      },
    });
  return (0, d.jsx)("span", {
    ref: p,
    ...f,
    "aria-label": "Dismiss",
    tabIndex: void 0,
    style: a.visuallyHiddenInput,
  });
});
