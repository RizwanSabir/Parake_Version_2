// app/components/language-selector.js — webpack module 33898
// params: (e, t, n) = (module, exports, require)
t.LanguageSelector = function (e) {
  const t = (0, o.c)(26),
    {
      selectedLanguage: n,
      onLanguageChange: p,
      disabled: f,
      className: h,
      selectTrigger: m,
      showLabel: g,
      transparent: y,
    } = e,
    v = void 0 !== f && f,
    b = void 0 === g || g,
    S = void 0 !== y && y,
    { data: _, isLoading: x, error: w } = (0, l.useTranscriptionLanguages)();
  let E, T, k;
  t[0] !== h
    ? ((E = (0, c.cn)("flex flex-col gap-y-1", h)), (t[0] = h), (t[1] = E))
    : (E = t[1]),
    t[2] !== b
      ? ((T =
          b &&
          (0, r.jsx)(a.LabelWithTooltip, {
            tooltip: "Select the language for transcription and AI responses.",
            children: "Language",
          })),
        (t[2] = b),
        (t[3] = T))
      : (T = t[3]),
    t[4] !== _ ? ((k = _ ?? []), (t[4] = _), (t[5] = k)) : (k = t[5]);
  const C = v || x || !!w;
  let I, A, O, R, M;
  return (
    t[6] !== w || t[7] !== x || t[8] !== m
      ? ((I =
          m ||
          (0, r.jsx)(u.SelectTrigger, {
            className: "w-full",
            children: x
              ? (0, r.jsxs)("div", {
                  className: "text-muted-foreground flex items-center gap-2",
                  children: [
                    (0, r.jsx)(s.Spinner, { className: "h-4 w-4" }),
                    "Loading...",
                  ],
                })
              : w
                ? (0, r.jsxs)("div", {
                    className: "text-error flex items-center gap-2",
                    children: [
                      (0, r.jsx)(i.AlertCircle, {
                        className: "text-error h-4 w-4",
                      }),
                      "Failed to load languages",
                    ],
                  })
                : (0, r.jsx)(u.SelectValue, {
                    placeholder: "Language...",
                  }),
          })),
        (t[6] = w),
        (t[7] = x),
        (t[8] = m),
        (t[9] = I))
      : (I = t[9]),
    t[10] !== _ ? ((A = _?.map(d)), (t[10] = _), (t[11] = A)) : (A = t[11]),
    t[12] !== A || t[13] !== S
      ? ((O = (0, r.jsx)(u.SelectContent, {
          transparent: S,
          children: A,
        })),
        (t[12] = A),
        (t[13] = S),
        (t[14] = O))
      : (O = t[14]),
    t[15] !== p ||
    t[16] !== n ||
    t[17] !== O ||
    t[18] !== k ||
    t[19] !== C ||
    t[20] !== I
      ? ((R = (0, r.jsxs)(u.Select, {
          value: n,
          items: k,
          onValueChange: p,
          disabled: C,
          children: [I, O],
        })),
        (t[15] = p),
        (t[16] = n),
        (t[17] = O),
        (t[18] = k),
        (t[19] = C),
        (t[20] = I),
        (t[21] = R))
      : (R = t[21]),
    t[22] !== R || t[23] !== E || t[24] !== T
      ? ((M = (0, r.jsxs)("div", { className: E, children: [T, R] })),
        (t[22] = R),
        (t[23] = E),
        (t[24] = T),
        (t[25] = M))
      : (M = t[25]),
    M
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(63110 /* app/components/label-with-tooltip */),
  s = n(15201 /* app/components/spinner */),
  l = n(94422 /* vendor/module-94422 */),
  c = n(29113 /* vendor/module-29113 */),
  u = n(65239 /* app/components/select-value */);
function d(e) {
  return (0, r.jsx)(
    u.SelectItem,
    { value: e.value, children: e.label },
    e.value,
  );
}
