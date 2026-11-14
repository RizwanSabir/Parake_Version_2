// vendor/module-62695.js — webpack module 62695
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverDescription = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(27788 /* vendor/module-27788 */),
  a = n(33115 /* vendor/module-33115 */),
  s = n(51909 /* vendor/module-51909 */);
t.PopoverDescription = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e,
    { store: c } = (0, i.usePopoverRootContext)(),
    u = (0, a.useBaseUiId)(l.id);
  return (
    c.useSyncedValueWithCleanup("descriptionElementId", u),
    (0, s.useRenderElement)("p", e, { ref: t, props: [{ id: u }, l] })
  );
});
