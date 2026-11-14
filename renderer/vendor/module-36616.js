// vendor/module-36616.js — webpack module 36616
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectItemText = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(22370 /* vendor/module-22370 */),
  a = n(68720 /* vendor/module-68720 */),
  s = n(51909 /* vendor/module-51909 */);
t.SelectItemText = o.memo(
  o.forwardRef(function (e, t) {
    const {
        index: n,
        textRef: r,
        selectedByFocus: l,
        hasRegistered: c,
      } = (0, a.useSelectItemContext)(),
      { firstItemTextRef: u, selectedItemTextRef: d } = (0,
      i.useSelectRootContext)(),
      { render: p, className: f, style: h, ...m } = e,
      g = o.useCallback(
        (e) => {
          e && (c && 0 === n && (u.current = e), c && l && (d.current = e));
        },
        [u, d, n, l, c],
      );
    return (0, s.useRenderElement)("div", e, {
      ref: [g, t, r],
      props: m,
    });
  }),
);
