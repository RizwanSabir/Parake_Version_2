// vendor/module-41461.js — webpack module 41461
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DrawerBackdrop = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(90498 /* vendor/module-90498 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(51146 /* vendor/module-51146 */),
  l = n(44306 /* vendor/module-44306 */),
  c = n(51244 /* vendor/module-51244 */),
  u = n(86424 /* vendor/module-86424 */);
const d = { ...s.popupStateMapping, ...l.transitionStatusMapping };
t.DrawerBackdrop = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, forceRender: s = !1, ...l } = e,
    { store: p } = (0, i.useDialogRootContext)(),
    f = p.useState("open"),
    h = p.useState("nested"),
    m = p.useState("mounted"),
    g = { open: f, transitionStatus: p.useState("transitionStatus") };
  return (0, a.useRenderElement)("div", e, {
    state: g,
    ref: [p.context.backdropRef, t],
    stateAttributesMapping: d,
    props: [
      {
        role: "presentation",
        hidden: !m,
        style: {
          pointerEvents: f ? void 0 : "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          [u.DrawerBackdropCssVars.swipeProgress]: "0",
          [c.DrawerPopupCssVars.swipeStrength]: "1",
        },
      },
      l,
    ],
    enabled: s || !h,
  });
});
