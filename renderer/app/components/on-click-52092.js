// app/components/on-click-52092.js — webpack module 52092
// params: (e, t, n) = (module, exports, require)
"use strict";
t.LiveMoreSelect = function (e) {
  const t = (0, o.c)(60),
    {
      callSession: n,
      onLanguageChange: b,
      isUpdatingLanguage: S,
      onAutoAnswerChange: _,
      isUpdatingAutoAnswer: x,
      autoExtend: w,
      isAdmin: E,
      showLogo: T,
      onShowLogoChange: k,
      logoSize: C,
      onEdit: I,
      onEditAnswerPreferences: A,
    } = e,
    { getLanguageLabel: O } = (0, c.useTranscriptionLanguages)(),
    { debugMode: R, setDebugMode: M } = (0, u.useAdminDebugMode)(E);
  let P, N, D, j, L, F, U, B, z, H;
  t[0] !== E || t[1] !== C || t[2] !== k || t[3] !== T
    ? ((P =
        E &&
        (0, r.jsx)(y.LogoControls, {
          className: "border-b",
          showLogo: T,
          onShowLogoChange: k,
          canEnlarge: C.canEnlarge,
          canShrink: C.canShrink,
          onEnlarge: C.onEnlarge,
          onShrink: C.onShrink,
          onReset: C.onReset,
        })),
      (t[0] = E),
      (t[1] = C),
      (t[2] = k),
      (t[3] = T),
      (t[4] = P))
    : (P = t[4]),
    t[5] === Symbol.for("react.memo_cache_sentinel")
      ? ((N = (0, r.jsx)(v.OverlayOpacityControls, {
          className: "border-b",
        })),
        (D = (0, r.jsx)(g.FontSizeControls, {
          className: "border-b",
        })),
        (t[5] = N),
        (t[6] = D))
      : ((N = t[5]), (D = t[6])),
    t[7] === Symbol.for("react.memo_cache_sentinel")
      ? ((j = (0, r.jsx)(i.Globe, {
          className: "text-muted-foreground h-4 w-4",
        })),
        (t[7] = j))
      : (j = t[7]),
    t[8] !== n.language || t[9] !== O
      ? ((L = O(n.language) || "loading..."),
        (t[8] = n.language),
        (t[9] = O),
        (t[10] = L))
      : (L = t[10]),
    t[11] !== L
      ? ((F = (0, r.jsx)(l.TooltipTrigger, {
          render: (0, r.jsx)(m.SelectTrigger, {
            variant: "row",
            iconClassName: "text-muted-foreground opacity-100",
            className: "gap-1 select-none",
            children: (0, r.jsxs)("div", {
              className: "flex flex-row items-center gap-1",
              children: [
                j,
                " ",
                (0, r.jsx)("div", {
                  className: "max-w-30 truncate",
                  children: L,
                }),
              ],
            }),
          }),
        })),
        (t[11] = L),
        (t[12] = F))
      : (F = t[12]),
    t[13] !== n.language || t[14] !== O
      ? ((U = O(n.language) || "loading..."),
        (t[13] = n.language),
        (t[14] = O),
        (t[15] = U))
      : (U = t[15]),
    t[16] !== U
      ? ((B = (0, r.jsx)(l.TooltipContent, {
          side: "left",
          children: U,
        })),
        (t[16] = U),
        (t[17] = B))
      : (B = t[17]),
    t[18] !== F || t[19] !== B
      ? ((z = (0, r.jsxs)(l.Tooltip, { children: [F, B] })),
        (t[18] = F),
        (t[19] = B),
        (t[20] = z))
      : (z = t[20]),
    t[21] !== n.language || t[22] !== S || t[23] !== b || t[24] !== z
      ? ((H = (0, r.jsx)(f.LanguageSelector, {
          selectedLanguage: n.language,
          onLanguageChange: b,
          disabled: S,
          selectTrigger: z,
          showLabel: !1,
        })),
        (t[21] = n.language),
        (t[22] = S),
        (t[23] = b),
        (t[24] = z),
        (t[25] = H))
      : (H = t[25]);
  const V = x && "pointer-events-none opacity-50";
  let q, G, W, $, Y, K, Z, Q, J, X, ee, te, ne;
  return (
    t[26] !== V
      ? ((q = (0, p.cn)(
          "hover:bg-accent flex flex-row items-center justify-between gap-1 border-t p-2",
          V,
        )),
        (t[26] = V),
        (t[27] = q))
      : (q = t[27]),
    t[28] !== n.autoAnswer || t[29] !== x || t[30] !== _
      ? ((G = () => !x && _(!n.autoAnswer)),
        (t[28] = n.autoAnswer),
        (t[29] = x),
        (t[30] = _),
        (t[31] = G))
      : (G = t[31]),
    t[32] !== n.autoAnswer
      ? ((W = (0, r.jsx)(s.Switch, { checked: n.autoAnswer })),
        (t[32] = n.autoAnswer),
        (t[33] = W))
      : (W = t[33]),
    t[34] !== q || t[35] !== G || t[36] !== W
      ? (($ = (0, r.jsxs)("div", {
          className: q,
          onClick: G,
          children: ["Auto Answer", W],
        })),
        (t[34] = q),
        (t[35] = G),
        (t[36] = W),
        (t[37] = $))
      : ($ = t[37]),
    t[38] !== w
      ? ((Y =
          w &&
          (0, r.jsxs)("div", {
            className: (0, p.cn)(
              "hover:bg-accent flex flex-row items-center justify-between gap-1 border-t p-2",
              w.isUpdating && "pointer-events-none opacity-50",
            ),
            onClick: () => !w.isUpdating && w.onChange(!w.value),
            children: [
              (0, r.jsx)(a.LabelWithTooltip, {
                className: "font-normal",
                tooltip: `When on, the session extends by ${d.MAX_CALL_DURATION_MINUTES} minutes for ${d.SESSION_CREDIT_COST} credit when the timer reaches 0.`,
                children: "Auto Extend",
              }),
              (0, r.jsx)(s.Switch, { checked: w.value }),
            ],
          })),
        (t[38] = w),
        (t[39] = Y))
      : (Y = t[39]),
    t[40] !== R || t[41] !== E || t[42] !== M
      ? ((K =
          E &&
          (0, r.jsxs)("div", {
            className:
              "hover:bg-accent flex flex-row items-center justify-between gap-1 border-t p-2",
            onClick: () => M(!R),
            children: [
              "Debug",
              (0, r.jsx)(s.Switch, {
                checked: R,
                className: "pointer-events-none",
              }),
            ],
          })),
        (t[40] = R),
        (t[41] = E),
        (t[42] = M),
        (t[43] = K))
      : (K = t[43]),
    t[44] === Symbol.for("react.memo_cache_sentinel")
      ? ((Z = (0, r.jsx)(i.SlidersHorizontal, {
          className: "text-muted-foreground",
        })),
        (Q = (0, r.jsx)(a.LabelWithTooltip, {
          className: "font-normal",
          tooltip:
            "How answers are written: length, format, tone, STAR and filler words.",
          children: "Answer Preferences",
        })),
        (t[44] = Z),
        (t[45] = Q))
      : ((Z = t[44]), (Q = t[45])),
    t[46] !== A
      ? ((J = (0, r.jsxs)(h.Button, {
          variant: "row",
          size: "row",
          className: "border-t",
          onClick: A,
          children: [Z, Q],
        })),
        (t[46] = A),
        (t[47] = J))
      : (J = t[47]),
    t[48] === Symbol.for("react.memo_cache_sentinel")
      ? ((X = (0, r.jsx)(i.Pencil, {
          className: "text-muted-foreground h-4 w-4",
        })),
        (t[48] = X))
      : (X = t[48]),
    t[49] === Symbol.for("react.memo_cache_sentinel")
      ? ((ee = (0, r.jsx)(a.LabelWithTooltip, {
          className: "font-normal",
          tooltip: "Edit this session's details and settings.",
          children: "Edit",
        })),
        (t[49] = ee))
      : (ee = t[49]),
    t[50] !== I
      ? ((te = (0, r.jsxs)("div", {
          className:
            "hover:bg-accent flex flex-row items-center gap-1 border-t p-2 select-none",
          onClick: I,
          children: [X, " ", ee],
        })),
        (t[50] = I),
        (t[51] = te))
      : (te = t[51]),
    t[52] !== P ||
    t[53] !== H ||
    t[54] !== $ ||
    t[55] !== Y ||
    t[56] !== K ||
    t[57] !== J ||
    t[58] !== te
      ? ((ne = (0, r.jsxs)("div", {
          className: "rounded-lg border text-sm shadow",
          children: [P, N, D, H, $, Y, K, J, te],
        })),
        (t[52] = P),
        (t[53] = H),
        (t[54] = $),
        (t[55] = Y),
        (t[56] = K),
        (t[57] = J),
        (t[58] = te),
        (t[59] = ne))
      : (ne = t[59]),
    ne
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(63110 /* app/components/label-with-tooltip */),
  s = n(88364 /* app/components/switch */),
  l = n(58055 /* app/components/tooltip */),
  c = n(94422 /* vendor/module-94422 */),
  u = n(69071 /* vendor/module-69071 */),
  d = n(46852 /* vendor/module-46852 */),
  p = n(29113 /* vendor/module-29113 */),
  f = n(33898 /* app/components/language-selector */),
  h = n(99683 /* vendor/module-99683 */),
  m = n(65239 /* app/components/select-value */),
  g = n(49467 /* app/components/font-size-controls */),
  y = n(6998 /* app/components/logo-controls */),
  v = n(90768 /* app/components/overlay-opacity-controls */);
