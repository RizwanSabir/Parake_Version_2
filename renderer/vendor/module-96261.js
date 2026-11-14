// vendor/module-96261.js — webpack module 96261
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ComboboxStatus = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(48622 /* vendor/module-48622 */);
t.ComboboxStatus = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, children: s, ...l } = e,
    c = (0, a.useInitialLiveRegionTextMutation)();
  return (0, i.useRenderElement)("div", e, {
    ref: [t, c],
    props: [
      {
        children: s,
        role: "status",
        "aria-live": "polite",
        "aria-atomic": !0,
      },
      l,
    ],
  });
});
