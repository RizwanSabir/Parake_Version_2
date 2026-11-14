// app/components/on-click-74886.js — webpack module 74886
// params: (e, t, n) = (module, exports, require)
"use strict";
t.AnswerPreviewPanel = function (e) {
  const t = (0, o.c)(29),
    {
      category: n,
      onCategoryChange: g,
      answer: y,
      onPreviewsLoaded: v,
      answerClassName: b,
      loadPreviews: S,
    } = e,
    [_, x] = (0, a.useState)("loading");
  let w, E, T, k, C, I, A, O, R, M, P, N, D, j;
  return (
    t[0] !== n || t[1] !== _ || t[2] !== S || t[3] !== v
      ? ((w = () => {
          if ("loading" !== _) return;
          let e = !0;
          return (
            S(n).then(
              (t) => {
                e && (v(t), x("loaded"));
              },
              () => {
                e && x("failed");
              },
            ),
            () => {
              e = !1;
            }
          );
        }),
        (E = [n, v, _, S]),
        (t[0] = n),
        (t[1] = _),
        (t[2] = S),
        (t[3] = v),
        (t[4] = w),
        (t[5] = E))
      : ((w = t[4]), (E = t[5])),
    (0, a.useEffect)(w, E),
    t[6] === Symbol.for("react.memo_cache_sentinel")
      ? ((T = () => {
          x("loading");
        }),
        (t[6] = T))
      : (T = t[6]),
    t[7] !== n ? ((k = [n]), (t[7] = n), (t[8] = k)) : (k = t[8]),
    (0, a.useEffect)(T, k),
    t[9] === Symbol.for("react.memo_cache_sentinel")
      ? ((C = (0, r.jsxs)("div", {
          className: "text-muted-foreground flex items-center gap-1.5",
          children: [
            (0, r.jsx)(i.CircleHelp, { className: "size-4" }),
            (0, r.jsx)(p.Typography, {
              variant: "meta",
              children: "Question Type",
            }),
          ],
        })),
        (t[9] = C))
      : (C = t[9]),
    t[10] !== g ? ((I = (e) => g(e)), (t[10] = g), (t[11] = I)) : (I = t[11]),
    t[12] === Symbol.for("react.memo_cache_sentinel")
      ? ((A = (0, r.jsx)(u.SelectTrigger, {
          className:
            "bg-background dark:bg-background dark:hover:bg-background w-full",
          children: (0, r.jsx)(u.SelectValue, { children: m }),
        })),
        (t[12] = A))
      : (A = t[12]),
    t[13] === Symbol.for("react.memo_cache_sentinel")
      ? ((O = (0, r.jsx)(u.SelectContent, {
          children: s.PREVIEW_CATEGORY_VALUES.map(h),
        })),
        (t[13] = O))
      : (O = t[13]),
    t[14] !== n || t[15] !== I
      ? ((R = (0, r.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            C,
            (0, r.jsxs)(u.Select, {
              value: n,
              onValueChange: I,
              children: [A, O],
            }),
          ],
        })),
        (t[14] = n),
        (t[15] = I),
        (t[16] = R))
      : (R = t[16]),
    t[17] === Symbol.for("react.memo_cache_sentinel")
      ? ((M = (0, r.jsxs)("div", {
          className: "text-muted-foreground flex items-center gap-1.5",
          children: [
            (0, r.jsx)(i.Sparkles, { className: "size-4" }),
            (0, r.jsx)(p.Typography, {
              variant: "meta",
              children: "Answer Preview",
            }),
          ],
        })),
        (t[17] = M))
      : (M = t[17]),
    t[18] !== b
      ? ((P = (0, l.cn)(
          "bg-background min-h-[338px] rounded-lg border p-3 md:h-[338px] md:min-h-0 md:overflow-y-auto",
          b,
        )),
        (t[18] = b),
        (t[19] = P))
      : (P = t[19]),
    t[20] !== y || t[21] !== _
      ? ((N =
          "loading" === _
            ? (0, r.jsxs)("div", {
                className:
                  "text-muted-foreground flex h-full items-center justify-center gap-2",
                children: [
                  (0, r.jsx)(d.Spinner, { className: "size-4" }),
                  (0, r.jsx)(p.Typography, {
                    variant: "body",
                    children: "Generating preview",
                  }),
                ],
              })
            : "failed" === _
              ? (0, r.jsxs)("div", {
                  className:
                    "text-muted-foreground flex h-full flex-col items-center justify-center gap-2",
                  children: [
                    (0, r.jsx)(p.Typography, {
                      variant: "body",
                      children: "Couldn't load the preview.",
                    }),
                    (0, r.jsx)(c.Button, {
                      variant: "outline",
                      size: "sm",
                      onClick: () => x("loading"),
                      children: "Retry",
                    }),
                  ],
                })
              : y
                ? (0, r.jsx)(f.TypingAnswer, {
                    fields: y,
                    active: !0,
                  })
                : (0, r.jsx)(p.Typography, {
                    variant: "body",
                    className:
                      "text-muted-foreground flex h-full items-center justify-center text-center",
                    children: "Choose options to see an answer preview",
                  })),
        (t[20] = y),
        (t[21] = _),
        (t[22] = N))
      : (N = t[22]),
    t[23] !== P || t[24] !== N
      ? ((D = (0, r.jsxs)("div", {
          className: "flex flex-col gap-2 md:min-h-0 md:flex-1",
          children: [M, (0, r.jsx)("div", { className: P, children: N })],
        })),
        (t[23] = P),
        (t[24] = N),
        (t[25] = D))
      : (D = t[25]),
    t[26] !== D || t[27] !== R
      ? ((j = (0, r.jsxs)("div", {
          className:
            "border-border bg-muted flex flex-col gap-5 rounded-xl border p-4 md:col-start-2 md:row-span-2 md:min-h-0 md:rounded-none md:border-0 md:border-l md:p-5",
          children: [R, D],
        })),
        (t[26] = D),
        (t[27] = R),
        (t[28] = j))
      : (j = t[28]),
    j
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(14041 /* vendor/module-14041 */),
  s = n(62656 /* vendor/module-62656 */),
  l = n(29113 /* vendor/module-29113 */),
  c = n(66244 /* app/components/button-variants */),
  u = n(9664 /* app/components/select-trigger-icon-class-name */),
  d = n(15201 /* app/components/spinner */),
  p = n(34483 /* app/components/typography-variants */),
  f = n(14953 /* app/components/typing-answer */);
function h(e) {
  return (0, r.jsx)(
    u.SelectItem,
    { value: e, children: s.previewQuestions[e].label },
    e,
  );
}
function m(e) {
  return s.previewQuestions[e].label;
}
