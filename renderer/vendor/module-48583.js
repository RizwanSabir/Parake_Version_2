// vendor/module-48583.js — webpack module 48583
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TooltipPortal = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(14648 /* vendor/module-14648 */),
  a = n(32512 /* vendor/module-32512 */),
  s = n(10557 /* vendor/module-10557 */),
  l = n(31085 /* vendor/module-31085 */);
t.TooltipPortal = o.forwardRef(function (e, t) {
  const { keepMounted: n = !1, ...r } = e;
  return (0, i.useTooltipRootContext)().useState("mounted") || n
    ? (0, l.jsx)(a.TooltipPortalContext.Provider, {
        value: n,
        children: (0, l.jsx)(s.FloatingPortalLite, { ref: t, ...r }),
      })
    : null;
});
