// vendor/module-96377.js — webpack module 96377
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DialogPortal = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(9220 /* vendor/module-9220 */),
  a = n(47797 /* vendor/module-47797 */),
  s = n(90498 /* vendor/module-90498 */),
  l = n(63042 /* vendor/module-63042 */),
  c = n(95102 /* vendor/module-95102 */),
  u = n(31085 /* vendor/module-31085 */);
t.DialogPortal = o.forwardRef(function (e, t) {
  const { keepMounted: n = !1, ...r } = e,
    { store: o } = (0, s.useDialogRootContext)(),
    d = o.useState("mounted"),
    p = o.useState("modal"),
    f = o.useState("open");
  return d || n
    ? (0, u.jsx)(l.DialogPortalContext.Provider, {
        value: n,
        children: (0, u.jsxs)(a.FloatingPortal, {
          ref: t,
          ...r,
          children: [
            d &&
              !0 === p &&
              (0, u.jsx)(c.InternalBackdrop, {
                ref: o.context.internalBackdropRef,
                inert: (0, i.inertValue)(!f),
              }),
            e.children,
          ],
        }),
      })
    : null;
});
