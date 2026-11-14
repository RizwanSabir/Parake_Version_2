// vendor/module-10557.js — webpack module 10557
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FloatingPortalLite = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = r(n(43144 /* vendor/module-43144 */)),
  a = n(47797 /* vendor/module-47797 */),
  s = n(31085 /* vendor/module-31085 */);
t.FloatingPortalLite = o.forwardRef(function (e, t) {
  const {
      children: n,
      container: r,
      className: l,
      render: c,
      style: u,
      ...d
    } = e,
    { portalNode: p, portalSubtree: f } = (0, a.useFloatingPortalNode)({
      container: r,
      ref: t,
      componentProps: e,
      elementProps: d,
    });
  return f || p
    ? (0, s.jsxs)(o.Fragment, {
        children: [f, p && i.createPortal(n, p)],
      })
    : null;
});
