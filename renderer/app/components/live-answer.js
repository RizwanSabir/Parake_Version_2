// app/components/live-answer.js — webpack module 36564
// params: (e, t, n) = (module, exports, require)
t.LiveAnswer = function (e) {
  const t = (0, o.c)(43),
    {
      fields: n,
      text: h,
      images: m,
      meta: g,
      thumbs: y,
      onCopied: v,
      actions: b,
    } = e;
  let S;
  t[0] !== m
    ? ((S = void 0 === m ? [] : m), (t[0] = m), (t[1] = S))
    : (S = t[1]);
  const _ = S,
    x = void 0 === b || b,
    { touch: w, glass: E } = (0, u.useAnswerEnvironment)();
  let T;
  t[2] !== n || t[3] !== h
    ? ((T = n ? (0, a.answerCopyText)(n) : (h ?? "")),
      (t[2] = n),
      (t[3] = h),
      (t[4] = T))
    : (T = t[4]);
  const k = T,
    C = n?.question,
    I = n?.code,
    A = w ? "px-2" : "px-1";
  let O, R, M, P, N, D, j, L, F, U;
  t[5] !== A
    ? ((O = (0, s.cn)("flex flex-col gap-3 py-3", A)), (t[5] = A), (t[6] = O))
    : (O = t[6]),
    t[7] !== _ || t[8] !== C
      ? ((R =
          (C || _.length > 0) &&
          (0, r.jsxs)("div", {
            className:
              "border-muted-foreground/60 flex items-start gap-2 border-l-2 py-0.5 pl-3",
            children: [
              _.length > 0 && (0, r.jsx)(p.ScreenshotPreview, { urls: _ }),
              C &&
                (0, r.jsx)(l.Typography, {
                  variant: "title-sm",
                  relative: !0,
                  render: (0, r.jsx)("div", {}),
                  children: (0, r.jsx)(c.AnswerMarkdown, {
                    markdown: C,
                  }),
                }),
            ],
          })),
        (t[7] = _),
        (t[8] = C),
        (t[9] = R))
      : (R = t[9]),
    t[10] !== n
      ? ((M =
          n?.answer &&
          (0, r.jsx)("div", {
            children: (0, r.jsx)(c.AnswerMarkdown, {
              markdown: n.answer,
            }),
          })),
        (t[10] = n),
        (t[11] = M))
      : (M = t[11]),
    t[12] !== n || t[13] !== h
      ? ((P =
          !n &&
          h &&
          (0, r.jsx)("div", {
            children: (0, r.jsx)(c.AnswerMarkdown, { markdown: h }),
          })),
        (t[12] = n),
        (t[13] = h),
        (t[14] = P))
      : (P = t[14]),
    t[15] !== n
      ? ((N =
          n?.keySteps &&
          (0, r.jsx)(f, {
            icon: (0, r.jsx)(i.ListOrdered, {}),
            title: "Key steps",
            children: (0, r.jsx)(c.AnswerMarkdown, {
              markdown: n.keySteps,
            }),
          })),
        (t[15] = n),
        (t[16] = N))
      : (N = t[16]),
    t[17] !== I
      ? ((D =
          void 0 !== I?.source &&
          (0, r.jsx)(f, {
            icon: (0, r.jsx)(i.Code2, {}),
            title: "Code",
            children: (0, r.jsx)(c.AnswerMarkdown, {
              markdown: (0, a.fencedCode)(I),
            }),
          })),
        (t[17] = I),
        (t[18] = D))
      : (D = t[18]),
    t[19] !== n
      ? ((j =
          n?.explanation &&
          (0, r.jsx)(f, {
            icon: (0, r.jsx)(i.Lightbulb, {}),
            title: "Explanation",
            children: (0, r.jsx)(c.AnswerMarkdown, {
              markdown: n.explanation,
            }),
          })),
        (t[19] = n),
        (t[20] = j))
      : (j = t[20]),
    t[21] !== n
      ? ((L =
          n?.diagram &&
          (0, r.jsx)(c.AnswerMarkdown, {
            markdown: `\`\`\`mermaid\n${n.diagram}\n\`\`\``,
          })),
        (t[21] = n),
        (t[22] = L))
      : (L = t[22]),
    t[23] !== x ||
    t[24] !== k ||
    t[25] !== E ||
    t[26] !== g ||
    t[27] !== v ||
    t[28] !== y
      ? ((F =
          x &&
          k &&
          (0, r.jsxs)("div", {
            className: (0, s.cn)(
              "text-muted-foreground flex flex-wrap items-center",
              E && "gap-1",
            ),
            children: [
              (0, r.jsx)(d.CopyButton, {
                text: k,
                onCopied: v,
                iconOnly: !0,
              }),
              y,
              (0, r.jsx)(l.Typography, {
                variant: "meta",
                relative: !0,
                render: (0, r.jsx)("div", {}),
                className: "ml-auto flex items-center gap-1",
                children: g,
              }),
            ],
          })),
        (t[23] = x),
        (t[24] = k),
        (t[25] = E),
        (t[26] = g),
        (t[27] = v),
        (t[28] = y),
        (t[29] = F))
      : (F = t[29]),
    t[30] !== N ||
    t[31] !== D ||
    t[32] !== j ||
    t[33] !== L ||
    t[34] !== F ||
    t[35] !== O ||
    t[36] !== R ||
    t[37] !== M ||
    t[38] !== P
      ? ((U = (0, r.jsxs)("article", {
          className: O,
          children: [R, M, P, N, D, j, L, F],
        })),
        (t[30] = N),
        (t[31] = D),
        (t[32] = j),
        (t[33] = L),
        (t[34] = F),
        (t[35] = O),
        (t[36] = R),
        (t[37] = M),
        (t[38] = P),
        (t[39] = U))
      : (U = t[39]);
  const B = U;
  let z;
  return (
    t[40] !== x || t[41] !== B
      ? ((z = x
          ? B
          : (0, r.jsx)(u.AnswerProvider, {
              copyable: !1,
              children: B,
            })),
        (t[40] = x),
        (t[41] = B),
        (t[42] = z))
      : (z = t[42]),
    z
  );
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(87952 /* vendor/module-87952 */),
  a = n(47171 /* vendor/module-47171 */),
  s = n(29113 /* vendor/module-29113 */),
  l = n(34483 /* app/components/typography-variants */),
  c = n(40725 /* app/components/on-click-40725 */),
  u = n(97329 /* vendor/module-97329 */),
  d = n(3111 /* vendor/module-3111 */),
  p = n(21450 /* app/components/screenshot-preview */);
function f(e) {
  const t = (0, o.c)(7),
    { icon: n, title: i, children: a } = e;
  let s, c, u;
  return (
    t[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((s = (0, r.jsx)("h4", {})), (t[0] = s))
      : (s = t[0]),
    t[1] !== n || t[2] !== i
      ? ((c = (0, r.jsxs)(l.Typography, {
          variant: "label",
          relative: !0,
          className:
            "text-muted-foreground flex items-center gap-1.5 uppercase [&_svg]:size-[1.167em]",
          render: s,
          children: [n, i],
        })),
        (t[1] = n),
        (t[2] = i),
        (t[3] = c))
      : (c = t[3]),
    t[4] !== a || t[5] !== c
      ? ((u = (0, r.jsxs)("section", {
          className: "flex flex-col gap-1.5",
          children: [c, a],
        })),
        (t[4] = a),
        (t[5] = c),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
