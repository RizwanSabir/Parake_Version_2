// vendor/module-10652.js — webpack module 10652
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardPortal = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(2001 /* vendor/module-2001 */),
  a = n(31761 /* vendor/module-31761 */),
  s = n(10557 /* vendor/module-10557 */),
  l = n(31085 /* vendor/module-31085 */);
t.PreviewCardPortal = o.forwardRef(function (e, t) {
  const { keepMounted: n = !1, ...r } = e;
  return (0, i.usePreviewCardRootContext)().useState("mounted") || n
    ? (0, l.jsx)(a.PreviewCardPortalContext.Provider, {
        value: n,
        children: (0, l.jsx)(s.FloatingPortalLite, { ref: t, ...r }),
      })
    : null;
});
