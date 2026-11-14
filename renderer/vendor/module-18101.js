// vendor/module-18101.js — webpack module 18101
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ProgressTrack = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(96390 /* vendor/module-96390 */),
  s = n(7076 /* vendor/module-7076 */);
t.ProgressTrack = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e,
    { state: c } = (0, a.useProgressRootContext)();
  return (0, i.useRenderElement)("div", e, {
    state: c,
    ref: t,
    props: l,
    stateAttributesMapping: s.progressStateAttributesMapping,
  });
});
