// vendor/module-42567.js — webpack module 42567
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverPortal = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(47797 /* vendor/module-47797 */),
  a = n(27788 /* vendor/module-27788 */),
  s = n(38464 /* vendor/module-38464 */),
  l = n(31085 /* vendor/module-31085 */);
t.PopoverPortal = o.forwardRef(function (e, t) {
  const { keepMounted: n = !1, ...r } = e,
    { store: o } = (0, a.usePopoverRootContext)();
  return o.useState("mounted") || n
    ? (0, l.jsx)(s.PopoverPortalContext.Provider, {
        value: n,
        children: (0, l.jsx)(i.FloatingPortal, { ref: t, ...r }),
      })
    : null;
});
