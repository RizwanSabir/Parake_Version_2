// vendor/module-88297.js — webpack module 88297
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MenuPortal = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(47797 /* vendor/module-47797 */),
  a = n(85950 /* vendor/module-85950 */),
  s = n(99794 /* vendor/module-99794 */),
  l = n(31085 /* vendor/module-31085 */);
t.MenuPortal = o.forwardRef(function (e, t) {
  const { keepMounted: n = !1, ...r } = e,
    { store: o } = (0, a.useMenuRootContext)();
  return o.useState("mounted") || n
    ? (0, l.jsx)(s.MenuPortalContext.Provider, {
        value: n,
        children: (0, l.jsx)(i.FloatingPortal, { ref: t, ...r }),
      })
    : null;
});
