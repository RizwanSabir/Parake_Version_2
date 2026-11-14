// vendor/module-61497.js — webpack module 61497
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DrawerContent = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(90498 /* vendor/module-90498 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(11160 /* vendor/module-11160 */);
t.DrawerContent = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e;
  return (
    (0, i.useDialogRootContext)(),
    (0, a.useRenderElement)("div", e, {
      ref: t,
      props: [{ [s.DRAWER_CONTENT_ATTRIBUTE]: "" }, l],
    })
  );
});
