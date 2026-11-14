// app/components/logo-controls.js — webpack module 6998
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LogoControls = function (e) {
  const t = (0, o.c)(32),
    {
      className: n,
      showLogo: c,
      onShowLogoChange: u,
      canEnlarge: d,
      canShrink: p,
      onEnlarge: f,
      onShrink: h,
      onReset: m,
    } = e;
  let g, y, v, b, S, _;
  t[0] !== n ? ((g = (0, s.cn)(n)), (t[0] = n), (t[1] = g)) : (g = t[1]),
    t[2] !== u || t[3] !== c
      ? ((y = () => u(!c)), (t[2] = u), (t[3] = c), (t[4] = y))
      : (y = t[4]),
    t[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((v = (0, r.jsxs)("span", {
          className: "flex flex-row items-center gap-1",
          children: [
            (0, r.jsx)(i.Image, {
              className: "text-muted-foreground h-4 w-4",
            }),
            " Show logo",
          ],
        })),
        (t[5] = v))
      : (v = t[5]),
    t[6] !== c
      ? ((b = (0, r.jsx)(a.Switch, { checked: c })), (t[6] = c), (t[7] = b))
      : (b = t[7]),
    t[8] !== y || t[9] !== b
      ? ((S = (0, r.jsxs)("div", {
          className:
            "hover:bg-accent flex flex-row items-center justify-between gap-1 p-2 select-none",
          onClick: y,
          children: [v, b],
        })),
        (t[8] = y),
        (t[9] = b),
        (t[10] = S))
      : (S = t[10]),
    t[11] === Symbol.for("react.memo_cache_sentinel")
      ? ((_ = (0, r.jsx)("span", {
          className: "text-sm",
          children: "Logo size",
        })),
        (t[11] = _))
      : (_ = t[11]);
  const x = !c || !d;
  let w, E;
  t[12] === Symbol.for("react.memo_cache_sentinel")
    ? ((w = (0, r.jsx)(i.Plus, { className: "h-4 w-4" })), (t[12] = w))
    : (w = t[12]),
    t[13] !== f || t[14] !== x
      ? ((E = (0, r.jsx)(l.Button, {
          variant: "outline",
          size: "icon",
          className: "h-6 w-6",
          "aria-label": "Bigger logo",
          disabled: x,
          onClick: f,
          children: w,
        })),
        (t[13] = f),
        (t[14] = x),
        (t[15] = E))
      : (E = t[15]);
  const T = !c || !p;
  let k, C;
  t[16] === Symbol.for("react.memo_cache_sentinel")
    ? ((k = (0, r.jsx)(i.Minus, { className: "h-4 w-4" })), (t[16] = k))
    : (k = t[16]),
    t[17] !== h || t[18] !== T
      ? ((C = (0, r.jsx)(l.Button, {
          variant: "outline",
          size: "icon",
          className: "h-6 w-6",
          "aria-label": "Smaller logo",
          disabled: T,
          onClick: h,
          children: k,
        })),
        (t[17] = h),
        (t[18] = T),
        (t[19] = C))
      : (C = t[19]);
  const I = !c;
  let A, O, R, M;
  return (
    t[20] === Symbol.for("react.memo_cache_sentinel")
      ? ((A = (0, r.jsx)(i.RefreshCcw, { className: "h-4 w-4" })), (t[20] = A))
      : (A = t[20]),
    t[21] !== m || t[22] !== I
      ? ((O = (0, r.jsx)(l.Button, {
          variant: "outline",
          size: "icon",
          className: "h-6 w-6",
          "aria-label": "Reset logo size",
          disabled: I,
          onClick: m,
          children: A,
        })),
        (t[21] = m),
        (t[22] = I),
        (t[23] = O))
      : (O = t[23]),
    t[24] !== C || t[25] !== O || t[26] !== E
      ? ((R = (0, r.jsxs)("div", {
          className:
            "flex flex-row items-center justify-between gap-2 px-2 py-1",
          children: [
            _,
            (0, r.jsxs)("div", {
              className: "flex flex-row items-center gap-1",
              children: [E, C, O],
            }),
          ],
        })),
        (t[24] = C),
        (t[25] = O),
        (t[26] = E),
        (t[27] = R))
      : (R = t[27]),
    t[28] !== g || t[29] !== R || t[30] !== S
      ? ((M = (0, r.jsxs)("div", { className: g, children: [S, R] })),
        (t[28] = g),
        (t[29] = R),
        (t[30] = S),
        (t[31] = M))
      : (M = t[31]),
    M
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(88364 /* app/components/switch */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(99683 /* vendor/module-99683 */);
