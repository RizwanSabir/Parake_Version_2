// vendor/module-35375.js — webpack module 35375
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverTitle = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(27788 /* vendor/module-27788 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(33115 /* vendor/module-33115 */);
t.PopoverTitle = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e,
    { store: c } = (0, i.usePopoverRootContext)(),
    u = (0, s.useBaseUiId)(l.id);
  return (
    c.useSyncedValueWithCleanup("titleElementId", u),
    (0, a.useRenderElement)("h2", e, {
      ref: t,
      props: [{ id: u }, l],
    })
  );
});
