// vendor/module-75317.js — webpack module 75317
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ProgressValue = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(96390 /* vendor/module-96390 */),
  s = n(7076 /* vendor/module-7076 */);
t.ProgressValue = o.forwardRef(function (e, t) {
  const { className: n, render: r, children: o, style: l, ...c } = e,
    { value: u, formattedValue: d, state: p } = (0, a.useProgressRootContext)(),
    f = null == u ? "indeterminate" : d,
    h = null == u ? null : d;
  return (0, i.useRenderElement)("span", e, {
    state: p,
    ref: t,
    props: [
      {
        "aria-hidden": !0,
        children: "function" == typeof o ? o(f, u) : h,
      },
      c,
    ],
    stateAttributesMapping: s.progressStateAttributesMapping,
  });
});
