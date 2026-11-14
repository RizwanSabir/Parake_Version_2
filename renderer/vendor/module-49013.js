// vendor/module-49013.js — webpack module 49013
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.RadioIndicator = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(51909 /* vendor/module-51909 */),
  a = n(40380 /* vendor/module-40380 */),
  s = n(40799 /* vendor/module-40799 */),
  l = n(15586 /* vendor/module-15586 */),
  c = n(45796 /* vendor/module-45796 */);
t.RadioIndicator = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: u, keepMounted: d = !1, ...p } = e,
    f = (0, a.useRadioRootContext)(),
    h = f.checked,
    {
      mounted: m,
      transitionStatus: g,
      setMounted: y,
    } = (0, c.useTransitionStatus)(h),
    v = { ...f, transitionStatus: g },
    b = o.useRef(null),
    S = d || m,
    _ = (0, i.useRenderElement)("span", e, {
      ref: [t, b],
      state: v,
      props: p,
      stateAttributesMapping: s.stateAttributesMapping,
    });
  return (
    (0, l.useOpenChangeComplete)({
      open: h,
      ref: b,
      onComplete() {
        h || y(!1);
      },
    }),
    S ? _ : null
  );
});
