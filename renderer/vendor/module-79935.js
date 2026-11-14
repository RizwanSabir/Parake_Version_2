// vendor/module-79935.js — webpack module 79935
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SwitchThumb = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(67886 /* vendor/module-67886 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(81580 /* vendor/module-81580 */);
t.SwitchThumb = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...l } = e,
    c = (0, i.useSwitchRootContext)();
  return (0, a.useRenderElement)("span", e, {
    state: c,
    ref: t,
    stateAttributesMapping: s.stateAttributesMapping,
    props: l,
  });
});
