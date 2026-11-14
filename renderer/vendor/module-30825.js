// vendor/module-30825.js — webpack module 30825
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DialogBackdrop = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(90498 /* vendor/module-90498 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(51146 /* vendor/module-51146 */),
  l = n(44306 /* vendor/module-44306 */);
const c = { ...s.popupStateMapping, ...l.transitionStatusMapping };
t.DialogBackdrop = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, forceRender: s = !1, ...l } = e,
    { store: u } = (0, i.useDialogRootContext)(),
    d = u.useState("open"),
    p = u.useState("nested"),
    f = u.useState("mounted"),
    h = { open: d, transitionStatus: u.useState("transitionStatus") };
  return (0, a.useRenderElement)("div", e, {
    state: h,
    ref: [u.context.backdropRef, t],
    stateAttributesMapping: c,
    props: [
      {
        role: "presentation",
        hidden: !f,
        style: { userSelect: "none", WebkitUserSelect: "none" },
      },
      l,
    ],
    enabled: s || !p,
  });
});
