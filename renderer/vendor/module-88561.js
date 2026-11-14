// vendor/module-88561.js — webpack module 88561
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SliderIndicator = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(10252 /* vendor/module-10252 */),
  a = n(16504 /* vendor/module-16504 */),
  s = n(51909 /* vendor/module-51909 */),
  l = n(16754 /* vendor/module-16754 */),
  c = n(12758 /* vendor/module-12758 */);
t.SliderIndicator = o.forwardRef(function (e, t) {
  const { render: n, className: r, style: o, ...u } = e,
    {
      indicatorPosition: d,
      inset: p,
      max: f,
      min: h,
      orientation: m,
      renderBeforeHydration: g,
      state: y,
      values: v,
    } = (0, l.useSliderRootContext)(),
    b = (0, a.useIsHydrating)(),
    S = "vertical" === m,
    _ = v.length > 1,
    x = p
      ? (function (e, t, n, r, o, i) {
          const a = e ? "bottom" : "insetInlineStart",
            s = e ? "height" : "width",
            l = e ? "width" : "height",
            c = {
              visibility:
                (o && i) || void 0 === n || (t && void 0 === r)
                  ? "hidden"
                  : void 0,
              position: e ? "absolute" : "relative",
              [l]: "inherit",
            };
          return (
            (c["--start-position"] = `${n ?? 0}%`),
            t
              ? ((c["--relative-size"] = (r ?? 0) - (n ?? 0) + "%"),
                (c[a] = "var(--start-position)"),
                (c[s] = "var(--relative-size)"),
                c)
              : ((c[a] = 0), (c[s] = "var(--start-position)"), c)
          );
        })(S, _, d[0], d[1], g, b)
      : (function (e, t, n, r) {
          const o = e ? "bottom" : "insetInlineStart",
            i = e ? "height" : "width",
            a = e ? "width" : "height",
            s = {
              position: e ? "absolute" : "relative",
              [a]: "inherit",
            };
          if (!t) return (s[o] = 0), (s[i] = `${n}%`), s;
          const l = r - n;
          return (s[o] = `${n}%`), (s[i] = `${l}%`), s;
        })(
          S,
          _,
          (0, i.valueToPercent)(v[0], h, f),
          (0, i.valueToPercent)(v[v.length - 1], h, f),
        );
  return (0, s.useRenderElement)("div", e, {
    state: y,
    ref: t,
    props: [
      {
        "data-base-ui-slider-indicator": g ? "" : void 0,
        style: x,
        suppressHydrationWarning: g || void 0,
      },
      u,
    ],
    stateAttributesMapping: c.sliderStateAttributesMapping,
  });
});
