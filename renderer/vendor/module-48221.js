// vendor/module-48221.js — webpack module 48221
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SliderLabel = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(81339 /* vendor/module-81339 */),
  a = n(854 /* vendor/module-854 */),
  s = n(8648 /* vendor/module-8648 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(16754 /* vendor/module-16754 */),
  u = n(12758 /* vendor/module-12758 */);
t.SliderLabel = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...d } = e;
  delete d.id;
  const {
      state: p,
      setLabelId: f,
      controlRef: h,
      rootLabelId: m,
    } = (0, c.useSliderRootContext)(),
    g = (0, s.useLabel)({
      id: m,
      setLabelId: f,
      focusControl: function (e, t) {
        if (t) {
          const n = (0, a.ownerDocument)(e.currentTarget).getElementById(t);
          if ((0, i.isHTMLElement)(n))
            return void (0, s.focusElementWithVisible)(n);
        }
        const n = h.current?.querySelectorAll('input[type="range"]'),
          r = 1 === n?.length ? n[0] : null;
        (0, i.isHTMLElement)(r) && (0, s.focusElementWithVisible)(r);
      },
    });
  return (0, l.useRenderElement)("div", e, {
    ref: t,
    state: p,
    props: [g, d],
    stateAttributesMapping: u.sliderStateAttributesMapping,
  });
});
