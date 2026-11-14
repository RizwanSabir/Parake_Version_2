// vendor/module-72625.js — webpack module 72625
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ProgressIndicator = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(10252 /* vendor/module-10252 */),
  s = n(96390 /* vendor/module-96390 */),
  l = n(7076 /* vendor/module-7076 */);
t.ProgressIndicator = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...c } = e,
    { max: u, min: d, value: p, state: f } = (0, s.useProgressRootContext)(),
    h =
      Number.isFinite(p) && null !== p ? (0, a.valueToPercent)(p, d, u) : null,
    m =
      null == h
        ? {}
        : { insetInlineStart: 0, height: "inherit", width: `${h}%` };
  return (0, i.useRenderElement)("div", e, {
    state: f,
    ref: t,
    props: [{ style: m }, c],
    stateAttributesMapping: l.progressStateAttributesMapping,
  });
});
