// vendor/module-56222.js — webpack module 56222
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectItemIndicator = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(68720 /* vendor/module-68720 */),
  a = n(45796 /* vendor/module-45796 */),
  s = n(15586 /* vendor/module-15586 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(44306 /* vendor/module-44306 */),
  u = n(31085 /* vendor/module-31085 */);
t.SelectItemIndicator = o.forwardRef(function (e, t) {
  const n = e.keepMounted ?? !1,
    { selected: r } = (0, i.useSelectItemContext)();
  return n || r ? (0, u.jsx)(d, { ...e, ref: t }) : null;
});
const d = o.memo(
  o.forwardRef((e, t) => {
    const { render: n, className: r, style: u, keepMounted: d, ...p } = e,
      { selected: f } = (0, i.useSelectItemContext)(),
      h = o.useRef(null),
      { transitionStatus: m, setMounted: g } = (0, a.useTransitionStatus)(f),
      y = { selected: f, transitionStatus: m },
      v = (0, l.useRenderElement)("span", e, {
        ref: [t, h],
        state: y,
        props: [{ "aria-hidden": !0, children: "✔️" }, p],
        stateAttributesMapping: c.transitionStatusMapping,
      });
    return (
      (0, s.useOpenChangeComplete)({
        open: f,
        ref: h,
        onComplete() {
          f || g(!1);
        },
      }),
      v
    );
  }),
);
