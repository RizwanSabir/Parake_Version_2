// vendor/module-43575.js — webpack module 43575
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.DialogTitle = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(90498 /* vendor/module-90498 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(33115 /* vendor/module-33115 */);
t.DialogTitle = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, id: l, ...c } = e,
    { store: u } = (0, i.useDialogRootContext)(),
    d = (0, s.useBaseUiId)(l);
  return (
    u.useSyncedValueWithCleanup("titleElementId", d),
    (0, a.useRenderElement)("h2", e, {
      ref: t,
      props: [{ id: d }, c],
    })
  );
});
