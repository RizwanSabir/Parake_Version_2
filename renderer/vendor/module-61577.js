// vendor/module-61577.js — webpack module 61577
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectPortal = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(47797 /* vendor/module-47797 */),
  s = n(35154 /* vendor/module-35154 */),
  l = n(22370 /* vendor/module-22370 */),
  c = n(84557 /* vendor/module-84557 */),
  u = n(31085 /* vendor/module-31085 */);
t.SelectPortal = o.forwardRef(function (e, t) {
  const { store: n } = (0, l.useSelectRootContext)(),
    r = (0, i.useStore)(n, c.selectors.mounted),
    o = (0, i.useStore)(n, c.selectors.forceMount);
  return r || o
    ? (0, u.jsx)(s.SelectPortalContext.Provider, {
        value: !0,
        children: (0, u.jsx)(a.FloatingPortal, { ref: t, ...e }),
      })
    : null;
});
