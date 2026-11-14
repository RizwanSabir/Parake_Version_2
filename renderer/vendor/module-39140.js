// vendor/module-39140.js — webpack module 39140
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuRadioGroup = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(95836 /* vendor/module-95836 */),
  a = n(4674 /* vendor/module-4674 */),
  s = n(70393 /* vendor/module-70393 */),
  l = n(61978 /* vendor/module-61978 */),
  c = n(51909 /* vendor/module-51909 */),
  u = n(31085 /* vendor/module-31085 */);
t.MenuRadioGroup = o.memo(
  o.forwardRef(function (e, t) {
    const {
        render: n,
        className: r,
        value: d,
        defaultValue: p,
        onValueChange: f,
        disabled: h = !1,
        style: m,
        "aria-labelledby": g,
        ...y
      } = e,
      [v, b] = o.useState(void 0),
      [S, _] = (0, i.useControlled)({
        controlled: d,
        default: p,
        name: "MenuRadioGroup",
      }),
      x = (0, a.useStableCallback)((e, t) => {
        f?.(e, t), t.isCanceled || _(e);
      }),
      w = { disabled: h },
      E = (0, c.useRenderElement)("div", e, {
        state: w,
        ref: t,
        props: {
          role: "group",
          "aria-labelledby": g ?? v,
          "aria-disabled": h || void 0,
          ...y,
        },
      }),
      T = o.useMemo(() => ({ value: S, setValue: x, disabled: h }), [S, x, h]);
    return (0, u.jsx)(l.MenuGroupContext.Provider, {
      value: b,
      children: (0, u.jsx)(s.MenuRadioGroupContext.Provider, {
        value: T,
        children: E,
      }),
    });
  }),
);
