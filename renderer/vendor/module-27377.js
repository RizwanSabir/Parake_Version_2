// vendor/module-27377.js — webpack module 27377
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SliderTrack = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(16754 /* vendor/module-16754 */),
  s = n(12758 /* vendor/module-12758 */);
t.SliderTrack = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e,
    { state: c } = (0, a.useSliderRootContext)();
  return (0, i.useRenderElement)("div", e, {
    state: c,
    ref: t,
    props: [{ style: { position: "relative" } }, l],
    stateAttributesMapping: s.sliderStateAttributesMapping,
  });
});
