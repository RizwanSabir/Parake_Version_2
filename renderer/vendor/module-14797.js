// vendor/module-14797.js — webpack module 14797
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.ProgressRoot = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(71740 /* vendor/module-71740 */),
  a = n(38602 /* vendor/module-38602 */),
  s = n(82371 /* vendor/module-82371 */),
  l = n(51909 /* vendor/module-51909 */),
  c = n(96390 /* vendor/module-96390 */),
  u = n(7076 /* vendor/module-7076 */),
  d = n(31085 /* vendor/module-31085 */);
function p(e, t) {
  return null == t ? "indeterminate progress" : e || `${t}%`;
}
t.ProgressRoot = o.forwardRef(function (e, t) {
  const {
      format: n,
      getAriaValueText: r = p,
      locale: f,
      max: h = 100,
      min: m = 0,
      value: g,
      render: y,
      className: v,
      children: b,
      style: S,
      ..._
    } = e,
    [x, w] = o.useState(),
    E = (0, i.useValueAsRef)(n);
  let T = "indeterminate";
  Number.isFinite(g) && (T = g === h ? "complete" : "progressing");
  const k = (0, s.formatNumberValue)(g, f, E.current),
    C = o.useMemo(() => ({ status: T }), [T]),
    I = {
      "aria-labelledby": x,
      "aria-valuemax": h,
      "aria-valuemin": m,
      "aria-valuenow": g ?? void 0,
      "aria-valuetext": r(k, g),
      role: "progressbar",
      children: (0, d.jsxs)(o.Fragment, {
        children: [
          b,
          (0, d.jsx)("span", {
            role: "presentation",
            style: a.visuallyHidden,
            children: "x",
          }),
        ],
      }),
    },
    A = o.useMemo(
      () => ({
        formattedValue: k,
        max: h,
        min: m,
        setLabelId: w,
        state: C,
        status: T,
        value: g,
      }),
      [k, h, m, w, C, T, g],
    ),
    O = (0, l.useRenderElement)("div", e, {
      state: C,
      ref: t,
      props: [I, _],
      stateAttributesMapping: u.progressStateAttributesMapping,
    });
  return (0, d.jsx)(c.ProgressRootContext.Provider, {
    value: A,
    children: O,
  });
});
