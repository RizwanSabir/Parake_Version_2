// app/components/on-click-46652.js — webpack module 46652
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AnswerPreferencesDialog = function (e) {
  const t = (0, o.c)(65),
    { open: n, onOpenChange: S, value: _, onSave: x, loadPreviews: w } = e;
  let E;
  t[0] !== _ ? ((E = b(_)), (t[0] = _), (t[1] = E)) : (E = t[1]);
  const T = E,
    k = (0, v.useAnswerPreferencesDraft)(T),
    {
      draft: C,
      setDraft: I,
      step: A,
      setStarMethod: O,
      setFillerWords: R,
      resetAll: M,
      atDefaults: P,
      unchanged: N,
      category: D,
      setCategory: j,
      answer: L,
      handlePreviewsLoaded: F,
    } = k,
    [U, B] = (0, a.useState)("forward"),
    z = (0, a.useRef)(null);
  let H, V, q;
  t[2] !== k || t[3] !== n || t[4] !== T
    ? ((H = () => {
        n
          ? (z.current && (0, l.sameResponseStyle)(z.current, T)) ||
            ((z.current = T), k.reset())
          : (z.current = null);
      }),
      (t[2] = k),
      (t[3] = n),
      (t[4] = T),
      (t[5] = H))
    : (H = t[5]),
    t[6] !== n || t[7] !== T
      ? ((V = [n, T]), (t[6] = n), (t[7] = T), (t[8] = V))
      : (V = t[8]),
    (0, a.useEffect)(H, V),
    t[9] !== k
      ? ((q = (e) => {
          k.openPreference(e), B("forward");
        }),
        (t[9] = k),
        (t[10] = q))
      : (q = t[10]);
  const G = q;
  let W;
  t[11] !== k
    ? ((W = (e) => {
        k.leavePreference(e), B("back");
      }),
      (t[11] = k),
      (t[12] = W))
    : (W = t[12]);
  const $ = W,
    Y = A?.field ?? "list",
    K = "forward" === U ? "animate-drill-forward" : "animate-drill-back";
  let Z, Q;
  t[13] !== K
    ? ((Z = (0, c.cn)("flex flex-col gap-5", K)), (t[13] = K), (t[14] = Z))
    : (Z = t[14]),
    t[15] === Symbol.for("react.memo_cache_sentinel")
      ? ((Q = (0, r.jsx)("h2", {})), (t[15] = Q))
      : (Q = t[15]);
  const J = A ? A.heading : "Answer preferences";
  let X;
  t[16] !== J
    ? ((X = (0, r.jsx)(d.DialogTitle, { render: Q, children: J })),
      (t[16] = J),
      (t[17] = X))
    : (X = t[17]);
  const ee = A
    ? A.subheading
    : "Pick a preference to change how answers are shaped. You can change these anytime, including mid-call.";
  let te, ne, re, oe;
  t[18] !== ee
    ? ((te = (0, r.jsx)(d.DialogDescription, { children: ee })),
      (t[18] = ee),
      (t[19] = te))
    : (te = t[19]),
    t[20] !== X || t[21] !== te
      ? ((ne = (0, r.jsxs)("div", {
          className: "flex flex-col",
          children: [X, te],
        })),
        (t[20] = X),
        (t[21] = te),
        (t[22] = ne))
      : (ne = t[22]),
    t[23] !== C ||
    t[24] !== G ||
    t[25] !== I ||
    t[26] !== R ||
    t[27] !== O ||
    t[28] !== A
      ? ((re = A
          ? (0, r.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                (0, r.jsx)(y.StyleOptionCards, {
                  ariaLabel: A.heading,
                  options: A.values.map((e) => ({
                    value: e,
                    ...(0, s.optionMeta)(A, e),
                  })),
                  value: C[A.field],
                  onChange: (e) => I((t) => ({ ...t, [A.field]: e })),
                }),
                "responseFormat" === A.field &&
                  (0, r.jsx)(g.StarMethodSwitch, {
                    className: "w-full justify-between px-2",
                    checked: C.useStarMethod,
                    onCheckedChange: O,
                  }),
                "responseFormat" === A.field &&
                  (0, r.jsx)(m.FillerWordsSwitch, {
                    className: "w-full justify-between px-2",
                    checked: C.useFillerWords,
                    disabled: !(0, l.honorsFillerWords)(C.responseFormat),
                    onCheckedChange: R,
                  }),
              ],
            })
          : (0, r.jsx)("div", {
              className:
                "bg-muted/50 flex flex-col overflow-hidden rounded-2xl",
              children: s.ANSWER_STYLE_STEPS.map((e, t) => {
                const n = v.PREFERENCE_ICONS[e.field];
                return (0, r.jsxs)(
                  "button",
                  {
                    type: "button",
                    onClick: () => G(e.field),
                    className:
                      "hover:bg-muted flex h-17 w-full cursor-pointer items-center gap-4 px-3 text-left transition-colors",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "bg-background flex size-9 shrink-0 items-center justify-center rounded-xl shadow-xs",
                        children: (0, r.jsx)(n, {
                          className: "size-4",
                        }),
                      }),
                      (0, r.jsxs)("span", {
                        className: (0, c.cn)(
                          "flex flex-1 items-center gap-3 self-stretch",
                          t > 0 && "border-border border-t",
                        ),
                        children: [
                          (0, r.jsxs)(p.FieldContent, {
                            children: [
                              (0, r.jsx)(p.FieldTitle, {
                                children: e.tab,
                              }),
                              (0, r.jsx)(f.Typography, {
                                variant: "meta",
                                className: "text-muted-foreground",
                                children: (0, v.describePreference)(e, C),
                              }),
                            ],
                          }),
                          (0, r.jsx)(i.ChevronRight, {
                            className: "text-muted-foreground size-4 shrink-0",
                          }),
                        ],
                      }),
                    ],
                  },
                  e.field,
                );
              }),
            })),
        (t[23] = C),
        (t[24] = G),
        (t[25] = I),
        (t[26] = R),
        (t[27] = O),
        (t[28] = A),
        (t[29] = re))
      : (re = t[29]),
    t[30] !== ne || t[31] !== re || t[32] !== Y || t[33] !== Z
      ? ((oe = (0, r.jsx)("div", {
          className:
            "flex flex-col gap-5 md:min-h-0 md:overflow-x-hidden md:overflow-y-auto md:px-5 md:pt-5 md:pb-2",
          children: (0, r.jsxs)("div", { className: Z, children: [ne, re] }, Y),
        })),
        (t[30] = ne),
        (t[31] = re),
        (t[32] = Y),
        (t[33] = Z),
        (t[34] = oe))
      : (oe = t[34]);
  const ie = !A && "max-md:hidden";
  let ae, se, le, ce, ue, de, pe;
  return (
    t[35] !== ie
      ? ((ae = (0, c.cn)(ie, "md:contents")), (t[35] = ie), (t[36] = ae))
      : (ae = t[36]),
    t[37] !== L || t[38] !== D || t[39] !== F || t[40] !== w || t[41] !== j
      ? ((se = (0, r.jsx)(h.AnswerPreviewPanel, {
          category: D,
          onCategoryChange: j,
          answer: L,
          onPreviewsLoaded: F,
          answerClassName: "text-sm",
          loadPreviews: w,
        })),
        (t[37] = L),
        (t[38] = D),
        (t[39] = F),
        (t[40] = w),
        (t[41] = j),
        (t[42] = se))
      : (se = t[42]),
    t[43] !== ae || t[44] !== se
      ? ((le = (0, r.jsx)("div", { className: ae, children: se })),
        (t[43] = ae),
        (t[44] = se),
        (t[45] = le))
      : (le = t[45]),
    t[46] !== oe || t[47] !== le
      ? ((ce = (0, r.jsxs)("div", {
          className:
            "flex min-h-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto px-4 pt-12 pb-4 md:contents",
          children: [oe, le],
        })),
        (t[46] = oe),
        (t[47] = le),
        (t[48] = ce))
      : (ce = t[48]),
    t[49] !== P ||
    t[50] !== C ||
    t[51] !== $ ||
    t[52] !== S ||
    t[53] !== x ||
    t[54] !== M ||
    t[55] !== A ||
    t[56] !== N
      ? ((ue = (0, r.jsx)("div", {
          className:
            "bg-background grid shrink-0 grid-cols-1 gap-2 p-4 md:col-start-1 md:row-start-2 md:flex md:items-center md:justify-between md:gap-3 md:px-5 md:pt-0 md:pb-5 [&>*:first-child]:order-last md:[&>*:first-child]:order-none",
          children: A
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(u.Button, {
                    variant: "outline",
                    className: "h-11 flex-1 md:h-9 md:w-[130px] md:flex-none",
                    onClick: () => $(!1),
                    children: "Back",
                  }),
                  (0, r.jsx)(u.Button, {
                    className: "h-11 flex-1 md:h-9 md:w-[130px] md:flex-none",
                    onClick: () => $(!0),
                    children: "Select",
                  }),
                ],
              })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(u.Button, {
                    variant: "outline",
                    className: "h-11 flex-1 md:h-9 md:w-[130px] md:flex-none",
                    disabled: P,
                    onClick: M,
                    children: "Set default",
                  }),
                  (0, r.jsx)(u.Button, {
                    className: "h-11 flex-1 md:h-9 md:w-[130px] md:flex-none",
                    disabled: N,
                    onClick: () => {
                      x(b(C)), S(!1);
                    },
                    children: "Save",
                  }),
                ],
              }),
        })),
        (t[49] = P),
        (t[50] = C),
        (t[51] = $),
        (t[52] = S),
        (t[53] = x),
        (t[54] = M),
        (t[55] = A),
        (t[56] = N),
        (t[57] = ue))
      : (ue = t[57]),
    t[58] !== ce || t[59] !== ue
      ? ((de = (0, r.jsxs)(d.DialogContent, {
          className:
            "flex max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] flex-col gap-0 overflow-hidden p-0 md:grid md:h-auto md:max-h-[calc(100svh-4rem)] md:!max-w-[918px] md:grid-cols-[45%_55%] md:grid-rows-[1fr_auto]",
          children: [ce, ue],
        })),
        (t[58] = ce),
        (t[59] = ue),
        (t[60] = de))
      : (de = t[60]),
    t[61] !== S || t[62] !== n || t[63] !== de
      ? ((pe = (0, r.jsx)(d.Dialog, {
          open: n,
          onOpenChange: S,
          children: de,
        })),
        (t[61] = S),
        (t[62] = n),
        (t[63] = de),
        (t[64] = pe))
      : (pe = t[64]),
    pe
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(57995 /* vendor/module-57995 */),
  l = n(37167 /* vendor/module-37167 */),
  c = n(29113 /* vendor/module-29113 */),
  u = n(66244 /* app/components/button-variants */),
  d = n(98980 /* app/components/dialog */),
  p = n(98134 /* app/components/field */),
  f = n(34483 /* app/components/typography-variants */),
  h = n(74886 /* app/components/on-click-74886 */),
  m = n(7157 /* app/components/filler-words-switch */),
  g = n(49241 /* app/components/star-method-switch */),
  y = n(24107 /* app/components/style-option-cards */),
  v = n(94984 /* vendor/module-94984 */),
  b = (e) => ({
    responseLength: e.responseLength,
    responseFormat: e.responseFormat,
    responseTone: e.responseTone,
    useStarMethod: e.useStarMethod,
    useFillerWords: e.useFillerWords,
  });
