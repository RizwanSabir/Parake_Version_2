// app/components/zoom-controls.js — webpack module 71318
// params: (e, t, n) = (module, exports, require)
"use strict";
t.ZoomControls = function (e) {
  const t = (0, o.c)(22),
    { className: n } = e,
    { zoom: u, increase: d, decrease: p, reset: f } = (0, c.useZoom)();
  let h, m, g, y, v, b, S, _, x, w, E;
  return (
    t[0] !== n
      ? ((h = (0, s.cn)(
          "flex flex-row items-center justify-between gap-2 border-t px-2 py-1",
          n,
        )),
        (t[0] = n),
        (t[1] = h))
      : (h = t[1]),
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((m = (0, r.jsx)(a.TooltipTrigger, {
          render: (0, r.jsx)("span", {
            className: "text-sm",
            children: "Zoom",
          }),
        })),
        (t[2] = m))
      : (m = t[2]),
    t[3] !== u
      ? ((g = (0, r.jsxs)(a.Tooltip, {
          children: [m, (0, r.jsxs)(a.TooltipContent, { children: [u, "%"] })],
        })),
        (t[3] = u),
        (t[4] = g))
      : (g = t[4]),
    t[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((y = (0, r.jsx)(i.Plus, { className: "h-4 w-4" })), (t[5] = y))
      : (y = t[5]),
    t[6] !== d
      ? ((v = (0, r.jsx)(l.Button, {
          variant: "outline",
          size: "icon",
          className: "h-6 w-6",
          "aria-label": "Increase zoom",
          onClick: d,
          children: y,
        })),
        (t[6] = d),
        (t[7] = v))
      : (v = t[7]),
    t[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((b = (0, r.jsx)(i.Minus, { className: "h-4 w-4" })), (t[8] = b))
      : (b = t[8]),
    t[9] !== p
      ? ((S = (0, r.jsx)(l.Button, {
          variant: "outline",
          size: "icon",
          className: "h-6 w-6",
          "aria-label": "Decrease zoom",
          onClick: p,
          children: b,
        })),
        (t[9] = p),
        (t[10] = S))
      : (S = t[10]),
    t[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((_ = (0, r.jsx)(i.RefreshCcw, { className: "h-4 w-4" })), (t[11] = _))
      : (_ = t[11]),
    t[12] !== f
      ? ((x = (0, r.jsx)(l.Button, {
          variant: "outline",
          size: "icon",
          className: "h-6 w-6",
          "aria-label": "Reset zoom",
          onClick: f,
          children: _,
        })),
        (t[12] = f),
        (t[13] = x))
      : (x = t[13]),
    t[14] !== v || t[15] !== S || t[16] !== x
      ? ((w = (0, r.jsxs)("div", {
          className: "flex flex-row items-center gap-1",
          children: [v, S, x],
        })),
        (t[14] = v),
        (t[15] = S),
        (t[16] = x),
        (t[17] = w))
      : (w = t[17]),
    t[18] !== h || t[19] !== w || t[20] !== g
      ? ((E = (0, r.jsxs)("div", { className: h, children: [g, w] })),
        (t[18] = h),
        (t[19] = w),
        (t[20] = g),
        (t[21] = E))
      : (E = t[21]),
    E
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(58055 /* app/components/tooltip */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(99683 /* vendor/module-99683 */),
  c = n(72601 /* app/hooks/use-zoom */);
