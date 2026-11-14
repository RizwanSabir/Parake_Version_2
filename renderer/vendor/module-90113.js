// vendor/module-90113.js — webpack module 90113
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }), (t.SliderValue = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(82371 /* vendor/module-82371 */),
  a = n(51909 /* vendor/module-51909 */),
  s = n(16754 /* vendor/module-16754 */),
  l = n(12758 /* vendor/module-12758 */);
t.SliderValue = o.forwardRef(function (e, t) {
  const {
      "aria-live": n = "off",
      render: r,
      className: c,
      children: u,
      style: d,
      ...p
    } = e,
    {
      thumbMap: f,
      state: h,
      values: m,
      formatOptionsRef: g,
      locale: y,
    } = (0, s.useSliderRootContext)();
  let v = "";
  for (const e of f.values()) e?.inputId && (v += `${e.inputId} `);
  const b = "" === v.trim() ? void 0 : v.trim(),
    S = o.useMemo(() => {
      const e = [];
      for (let t = 0; t < m.length; t += 1)
        e.push((0, i.formatNumber)(m[t], y, g.current ?? void 0));
      return e;
    }, [g, y, m]),
    _ = m.map((e, t) => S[t] || e).join(" – ");
  return (0, a.useRenderElement)("output", e, {
    state: h,
    ref: t,
    props: [
      {
        "aria-live": n,
        children: "function" == typeof u ? u(S, m) : _,
        htmlFor: b,
      },
      p,
    ],
    stateAttributesMapping: l.sliderStateAttributesMapping,
  });
});
