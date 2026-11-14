// app/components/font-size-controls.js — webpack module 49467
// params: (e, t, n) = (module, exports, require)
"use strict";
t.FontSizeControls = function (e) {
  const t = (0, o.c)(27),
    { className: n } = e,
    {
      fontSizeIndex: d,
      increase: p,
      decrease: f,
      reset: h,
    } = (0, u.useFontSize)();
  let m, g;
  t[0] !== n
    ? ((m = (0, s.cn)(
        "flex flex-row items-center justify-between gap-2 px-2 py-1",
        n,
      )),
      (t[0] = n),
      (t[1] = m))
    : (m = t[1]),
    t[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((g = (0, r.jsx)(a.TooltipTrigger, {
          render: (0, r.jsx)("span", {
            className: "text-sm",
            children: "Answer text size",
          }),
        })),
        (t[2] = g))
      : (g = t[2]);
  const y = l.FONT_SIZE_LABELS[d];
  let v, b;
  t[3] !== d
    ? ((v = (0, l.fontSizePercent)(d)), (t[3] = d), (t[4] = v))
    : (v = t[4]),
    t[5] !== y || t[6] !== v
      ? ((b = (0, r.jsxs)(a.Tooltip, {
          children: [
            g,
            (0, r.jsxs)(a.TooltipContent, {
              children: [y, " (", v, ")"],
            }),
          ],
        })),
        (t[5] = y),
        (t[6] = v),
        (t[7] = b))
      : (b = t[7]);
  const S = d >= l.FONT_SIZE_CLASSES.length - 1;
  let _, x;
  t[8] === Symbol.for("react.memo_cache_sentinel")
    ? ((_ = (0, r.jsx)(i.Plus, { className: "h-4 w-4" })), (t[8] = _))
    : (_ = t[8]),
    t[9] !== p || t[10] !== S
      ? ((x = (0, r.jsx)(c.Button, {
          variant: "outline",
          size: "icon",
          className: "h-6 w-6",
          "aria-label": "Increase font size",
          disabled: S,
          onClick: p,
          children: _,
        })),
        (t[9] = p),
        (t[10] = S),
        (t[11] = x))
      : (x = t[11]);
  const w = d <= 0;
  let E, T, k, C, I, A;
  return (
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((E = (0, r.jsx)(i.Minus, { className: "h-4 w-4" })), (t[12] = E))
      : (E = t[12]),
    t[13] !== f || t[14] !== w
      ? ((T = (0, r.jsx)(c.Button, {
          variant: "outline",
          size: "icon",
          className: "h-6 w-6",
          "aria-label": "Decrease font size",
          disabled: w,
          onClick: f,
          children: E,
        })),
        (t[13] = f),
        (t[14] = w),
        (t[15] = T))
      : (T = t[15]),
    t[16] === Symbol.for("react.memo_cache_sentinel")
      ? ((k = (0, r.jsx)(i.RefreshCcw, { className: "h-4 w-4" })), (t[16] = k))
      : (k = t[16]),
    t[17] !== h
      ? ((C = (0, r.jsx)(c.Button, {
          variant: "outline",
          size: "icon",
          className: "h-6 w-6",
          "aria-label": "Reset font size",
          onClick: h,
          children: k,
        })),
        (t[17] = h),
        (t[18] = C))
      : (C = t[18]),
    t[19] !== T || t[20] !== C || t[21] !== x
      ? ((I = (0, r.jsxs)("div", {
          className: "flex flex-row items-center gap-1",
          children: [x, T, C],
        })),
        (t[19] = T),
        (t[20] = C),
        (t[21] = x),
        (t[22] = I))
      : (I = t[22]),
    t[23] !== m || t[24] !== I || t[25] !== b
      ? ((A = (0, r.jsxs)("div", { className: m, children: [b, I] })),
        (t[23] = m),
        (t[24] = I),
        (t[25] = b),
        (t[26] = A))
      : (A = t[26]),
    A
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(58055 /* app/components/tooltip */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(39916 /* vendor/module-39916 */),
  c = n(99683 /* vendor/module-99683 */),
  u = n(43830 /* app/hooks/use-font-size */);
