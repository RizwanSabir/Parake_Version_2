// app/components/create-session-footer.js — webpack module 29789
// params: (e, t, n) = (module, exports, require)
"use strict";
t.CreateSessionFooter = function (e) {
  const t = (0, o.c)(22),
    {
      onBack: n,
      backLabel: c,
      nextLabel: u,
      isSubmitStep: d,
      onNext: p,
      backDisabled: f,
      nextDisabled: h,
      nextTooltip: m,
      nextTooltipOpen: g,
      onNextTooltipOpenChange: y,
      isSubmitting: v,
      hideBackOnMobile: b,
    } = e,
    S = void 0 !== d && d,
    _ = void 0 !== b && b,
    x = _ ? "max-sm:grid-cols-1" : "max-sm:grid-cols-2";
  let w;
  t[0] !== x
    ? ((w = (0, i.cn)(
        "flex shrink-0 items-center gap-2 max-sm:grid",
        x,
        "max-sm:-mx-4 max-sm:px-4 max-sm:pt-4 max-sm:pb-8",
        "sm:justify-end",
      )),
      (t[0] = x),
      (t[1] = w))
    : (w = t[1]);
  const E = _ && "max-sm:hidden";
  let T, k;
  t[2] !== E ? ((T = (0, i.cn)(l, E)), (t[2] = E), (t[3] = T)) : (T = t[3]),
    t[4] !== f || t[5] !== c || t[6] !== n || t[7] !== T
      ? ((k = (0, r.jsx)(s.Button, {
          type: "button",
          variant: "secondary",
          onClick: n,
          disabled: f,
          className: T,
          children: c,
        })),
        (t[4] = f),
        (t[5] = c),
        (t[6] = n),
        (t[7] = T),
        (t[8] = k))
      : (k = t[8]);
  const C = S ? "submit" : "button",
    I = S ? void 0 : p;
  let A, O;
  return (
    t[9] !== v ||
    t[10] !== h ||
    t[11] !== u ||
    t[12] !== m ||
    t[13] !== g ||
    t[14] !== y ||
    t[15] !== C ||
    t[16] !== I
      ? ((A = (0, r.jsx)(a.ButtonWithTooltip, {
          type: C,
          className: l,
          onClick: I,
          disabled: h,
          loading: v,
          tooltip: m,
          tooltipOpen: g,
          onTooltipOpenChange: y,
          children: u,
        })),
        (t[9] = v),
        (t[10] = h),
        (t[11] = u),
        (t[12] = m),
        (t[13] = g),
        (t[14] = y),
        (t[15] = C),
        (t[16] = I),
        (t[17] = A))
      : (A = t[17]),
    t[18] !== A || t[19] !== w || t[20] !== k
      ? ((O = (0, r.jsxs)("div", { className: w, children: [k, A] })),
        (t[18] = A),
        (t[19] = w),
        (t[20] = k),
        (t[21] = O))
      : (O = t[21]),
    O
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(29113 /* vendor/module-29113 */),
  a = n(47276 /* vendor/module-47276 */),
  s = n(66244 /* app/components/button-variants */),
  l = "max-sm:h-11 max-sm:w-full sm:min-w-[130px]";
