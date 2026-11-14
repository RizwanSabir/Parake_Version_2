// vendor/module-43125.js — webpack module 43125
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxPortal = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(47797 /* vendor/module-47797 */),
  s = n(32118 /* vendor/module-32118 */),
  l = n(54990 /* vendor/module-54990 */),
  c = n(36826 /* vendor/module-36826 */),
  u = n(31085 /* vendor/module-31085 */);
t.ComboboxPortal = o.forwardRef(function (e, t) {
  const { keepMounted: n = !1, ...r } = e,
    o = (0, s.useComboboxRootContext)(),
    d = (0, i.useStore)(o, c.selectors.mounted),
    p = (0, i.useStore)(o, c.selectors.forceMounted);
  return d || n || p
    ? (0, u.jsx)(l.ComboboxPortalContext.Provider, {
        value: n,
        children: (0, u.jsx)(a.FloatingPortal, { ref: t, ...r }),
      })
    : null;
});
