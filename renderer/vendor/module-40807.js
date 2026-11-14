// vendor/module-40807.js — webpack module 40807
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopoverBackdrop = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(27788 /* vendor/module-27788 */),
  a = n(51146 /* vendor/module-51146 */),
  s = n(44306 /* vendor/module-44306 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(82063 /* vendor/module-82063 */);
const u = { ...a.popupStateMapping, ...s.transitionStatusMapping };
t.PopoverBackdrop = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...a } = e,
    { store: s } = (0, i.usePopoverRootContext)(),
    d = s.useState("open"),
    p = s.useState("mounted"),
    f = s.useState("transitionStatus"),
    h = s.useState("openChangeReason"),
    m = { open: d, transitionStatus: f };
  return (0, l.useRenderElement)("div", e, {
    state: m,
    ref: [s.context.backdropRef, t],
    props: [
      {
        role: "presentation",
        hidden: !p,
        style: {
          pointerEvents: h === c.REASONS.triggerHover ? "none" : void 0,
          userSelect: "none",
          WebkitUserSelect: "none",
        },
      },
      a,
    ],
    stateAttributesMapping: u,
  });
});
