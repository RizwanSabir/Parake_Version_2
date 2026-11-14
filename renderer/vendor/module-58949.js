// vendor/module-58949.js — webpack module 58949
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DialogViewport = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(51146 /* vendor/module-51146 */),
  s = n(44306 /* vendor/module-44306 */),
  l = n(90498 /* vendor/module-90498 */),
  c = n(63042 /* vendor/module-63042 */),
  u = n(95980 /* vendor/module-95980 */);
const d = {
  ...a.popupStateMapping,
  ...s.transitionStatusMapping,
  nested: (e) => (e ? { [u.DialogViewportDataAttributes.nested]: "" } : null),
  nestedDialogOpen: (e) =>
    e ? { [u.DialogViewportDataAttributes.nestedDialogOpen]: "" } : null,
};
t.DialogViewport = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, children: a, ...s } = e,
    u = (0, c.useDialogPortalContext)(),
    { store: p } = (0, l.useDialogRootContext)(),
    f = p.useState("open"),
    h = p.useState("nested"),
    m = p.useState("transitionStatus"),
    g = p.useState("nestedOpenDialogCount"),
    y = p.useState("mounted"),
    v = p.useStateSetter("viewportElement"),
    b = {
      open: f,
      nested: h,
      transitionStatus: m,
      nestedDialogOpen: g > 0,
    },
    S = u || y;
  return (0, i.useRenderElement)("div", e, {
    enabled: S,
    state: b,
    ref: [t, v],
    stateAttributesMapping: d,
    props: [
      {
        role: "presentation",
        hidden: !y,
        style: { pointerEvents: f ? void 0 : "none" },
        children: a,
      },
      s,
    ],
  });
});
