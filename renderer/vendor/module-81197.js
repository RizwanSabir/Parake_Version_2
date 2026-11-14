// vendor/module-81197.js — webpack module 81197
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuCheckboxItemIndicator = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(30811 /* vendor/module-30811 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(76291 /* vendor/module-76291 */),
  l = n(45796 /* vendor/module-45796 */),
  c = n(15586 /* vendor/module-15586 */);
t.MenuCheckboxItemIndicator = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: u, keepMounted: d = !1, ...p } = e,
    f = (0, i.useMenuCheckboxItemContext)(),
    h = o.useRef(null),
    { transitionStatus: m, setMounted: g } = (0, l.useTransitionStatus)(
      f.checked,
    );
  (0, c.useOpenChangeComplete)({
    open: f.checked,
    ref: h,
    onComplete() {
      f.checked || g(!1);
    },
  });
  const y = {
    checked: f.checked,
    disabled: f.disabled,
    highlighted: f.highlighted,
    transitionStatus: m,
  };
  return (0, a.useRenderElement)("span", e, {
    state: y,
    ref: [t, h],
    stateAttributesMapping: s.itemMapping,
    props: { "aria-hidden": !0, ...p },
    enabled: d || f.checked,
  });
});
