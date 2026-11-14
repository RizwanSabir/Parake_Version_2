// vendor/module-91145.js — webpack module 91145
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuBackdrop = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(85950 /* vendor/module-85950 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(51146 /* vendor/module-51146 */),
  l = n(44306 /* vendor/module-44306 */),
  c = n(87891 /* vendor/module-87891 */),
  u = n(82063 /* vendor/module-82063 */);
const d = { ...s.popupStateMapping, ...l.transitionStatusMapping };
t.MenuBackdrop = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...s } = e,
    { store: l } = (0, i.useMenuRootContext)(),
    p = l.useState("open"),
    f = l.useState("mounted"),
    h = l.useState("transitionStatus"),
    m = l.useState("lastOpenChangeReason"),
    g = (0, c.useContextMenuRootContext)(),
    y = { open: p, transitionStatus: h };
  return (0, a.useRenderElement)("div", e, {
    ref: g?.backdropRef ? [t, g.backdropRef] : t,
    state: y,
    stateAttributesMapping: d,
    props: [
      {
        role: "presentation",
        hidden: !f,
        style: {
          pointerEvents: m === u.REASONS.triggerHover ? "none" : void 0,
          userSelect: "none",
          WebkitUserSelect: "none",
        },
      },
      s,
    ],
  });
});
