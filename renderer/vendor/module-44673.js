// vendor/module-44673.js — webpack module 44673
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxEmpty = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(32118 /* vendor/module-32118 */),
  s = n(48622 /* vendor/module-48622 */);
t.ComboboxEmpty = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, children: l, ...c } = e,
    { filteredItems: u } = (0, a.useComboboxDerivedItemsContext)(),
    d = (0, a.useComboboxRootContext)(),
    p = (0, s.useInitialLiveRegionTextMutation)(),
    f = 0 === u.length ? l : null;
  return (0, i.useRenderElement)("div", e, {
    ref: [t, d.state.emptyRef, p],
    props: [
      {
        children: f,
        role: "status",
        "aria-live": "polite",
        "aria-atomic": !0,
      },
      c,
    ],
  });
});
