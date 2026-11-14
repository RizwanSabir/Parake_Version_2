// vendor/module-43992.js — webpack module 43992
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PreviewCardBackdrop = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(2001 /* vendor/module-2001 */),
  a = n(51146 /* vendor/module-51146 */),
  s = n(44306 /* vendor/module-44306 */),
  l = n(51909 /* vendor/module-51909 */);
const c = { ...a.popupStateMapping, ...s.transitionStatusMapping };
t.PreviewCardBackdrop = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...a } = e,
    s = (0, i.usePreviewCardRootContext)(),
    u = s.useState("open"),
    d = s.useState("mounted"),
    p = { open: u, transitionStatus: s.useState("transitionStatus") };
  return (0, l.useRenderElement)("div", e, {
    state: p,
    ref: [t],
    props: [
      {
        role: "presentation",
        hidden: !d,
        style: {
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
        },
      },
      a,
    ],
    stateAttributesMapping: c,
  });
});
