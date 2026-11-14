// vendor/module-30697.js — webpack module 30697
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.CheckboxIndicator = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(54014 /* vendor/module-54014 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(32514 /* vendor/module-32514 */),
  l = n(15586 /* vendor/module-15586 */),
  c = n(45796 /* vendor/module-45796 */),
  u = n(44306 /* vendor/module-44306 */),
  d = n(41128 /* vendor/module-41128 */);
t.CheckboxIndicator = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: p, keepMounted: f = !1, ...h } = e,
    m = (0, i.useCheckboxRootContext)(),
    g = m.checked || m.indeterminate,
    {
      mounted: y,
      transitionStatus: v,
      setMounted: b,
    } = (0, c.useTransitionStatus)(g),
    S = o.useRef(null),
    _ = { ...m, transitionStatus: v };
  (0, l.useOpenChangeComplete)({
    open: g,
    ref: S,
    onComplete() {
      g || b(!1);
    },
  });
  const x = {
      ...(0, s.useStateAttributesMapping)(m),
      ...u.transitionStatusMapping,
      ...d.fieldValidityMapping,
    },
    w = f || y,
    E = (0, a.useRenderElement)("span", e, {
      ref: [t, S],
      state: _,
      stateAttributesMapping: x,
      props: h,
    });
  return w ? E : null;
});
