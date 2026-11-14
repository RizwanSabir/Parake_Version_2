// vendor/module-65189.js — webpack module 65189
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxBackdrop = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(78207 /* vendor/module-78207 */),
  a = n(32118 /* vendor/module-32118 */),
  s = n(51146 /* vendor/module-51146 */),
  l = n(44306 /* vendor/module-44306 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(36826 /* vendor/module-36826 */);
const d = { ...s.popupStateMapping, ...l.transitionStatusMapping };
t.ComboboxBackdrop = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...s } = e,
    l = (0, a.useComboboxRootContext)(),
    p = (0, i.useStore)(l, u.selectors.open),
    f = (0, i.useStore)(l, u.selectors.mounted),
    h = {
      open: p,
      transitionStatus: (0, i.useStore)(l, u.selectors.transitionStatus),
    };
  return (0, c.useRenderElement)("div", e, {
    state: h,
    ref: t,
    stateAttributesMapping: d,
    props: [
      {
        role: "presentation",
        hidden: !f,
        style: { userSelect: "none", WebkitUserSelect: "none" },
      },
      s,
    ],
  });
});
