// app/components/answer-code-block.js — webpack module 94274
// params: (e, t, n) = (module, exports, require)
t.AnswerCodeBlock = function (e) {
  const t = (0, o.c)(32);
  let n, u, d;
  if (t[0] !== e) {
    const { className: r, children: o, node: i, ...a } = e;
    (u = r), (n = o), (d = a), (t[0] = e), (t[1] = n), (t[2] = u), (t[3] = d);
  } else (n = t[1]), (u = t[2]), (d = t[3]);
  const { copyable: p } = (0, l.useAnswerEnvironment)();
  let f;
  t[4] !== u
    ? ((f = u?.replace("language-", "")), (t[4] = u), (t[5] = f))
    : (f = t[5]);
  const h = f,
    m = String(n);
  let g;
  if (t[6] !== m) {
    let e;
    t[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((e = /\n$/), (t[8] = e))
      : (e = t[8]),
      (g = m.replace(e, "")),
      (t[6] = m),
      (t[7] = g);
  } else g = t[7];
  const y = g;
  if (!h) {
    let e;
    return (
      t[9] !== d || t[10] !== y
        ? ((e = (0, r.jsx)("code", {
            className:
              "bg-muted rounded-sm px-1.5 py-0.5 font-mono text-[0.9em] break-words",
            ...d,
            children: y,
          })),
          (t[9] = d),
          (t[10] = y),
          (t[11] = e))
        : (e = t[11]),
      e
    );
  }
  let v;
  t[12] !== p || t[13] !== y
    ? ((v = p
        ? (0, r.jsx)(c.CopyButton, { text: y, label: "Copy code" })
        : null),
      (t[12] = p),
      (t[13] = y),
      (t[14] = v))
    : (v = t[14]);
  const b = v;
  let S, _, x, w, E;
  t[15] !== h
    ? ((S = (0, r.jsx)(s.Typography, {
        variant: "meta",
        className: "text-muted-foreground font-mono",
        children: h,
      })),
      (t[15] = h),
      (t[16] = S))
    : (S = t[16]),
    t[17] !== b || t[18] !== S
      ? ((_ = (0, r.jsxs)("figcaption", {
          className:
            "flex items-center justify-between gap-2 border-b py-1 pr-1 pl-3",
          children: [S, b],
        })),
        (t[17] = b),
        (t[18] = S),
        (t[19] = _))
      : (_ = t[19]),
    t[20] !== h || t[21] !== y
      ? ((x = (0, i.highlightCode)(y, h)),
        (t[20] = h),
        (t[21] = y),
        (t[22] = x))
      : (x = t[22]),
    t[23] !== x
      ? ((w = (0, r.jsx)("pre", {
          className: "overflow-x-auto p-3 text-[0.875em] leading-relaxed",
          children: (0, r.jsx)("code", {
            className: "font-mono whitespace-pre",
            dangerouslySetInnerHTML: { __html: x },
          }),
        })),
        (t[23] = x),
        (t[24] = w))
      : (w = t[24]),
    t[25] !== _ || t[26] !== w
      ? ((E = (0, r.jsxs)("figure", {
          className:
            "bg-muted text-foreground answer-code my-2 overflow-hidden rounded-(--radius-surface) border",
          children: [_, w],
        })),
        (t[25] = _),
        (t[26] = w),
        (t[27] = E))
      : (E = t[27]);
  const T = E;
  if ("mermaid" === h) {
    let e;
    return (
      t[28] !== T || t[29] !== b || t[30] !== y
        ? ((e = (0, r.jsx)(a.MermaidDiagram, {
            source: y,
            fallback: T,
            action: b,
          })),
          (t[28] = T),
          (t[29] = b),
          (t[30] = y),
          (t[31] = e))
        : (e = t[31]),
      e
    );
  }
  return T;
};
const r = n(31085 /* vendor/module-31085 */),
  o = n(54005 /* vendor/module-54005 */),
  i = n(92587 /* vendor/module-92587 */),
  a = n(95773 /* app/components/mermaid-diagram */),
  s = n(34483 /* app/components/typography-variants */),
  l = n(97329 /* vendor/module-97329 */),
  c = n(3111 /* vendor/module-3111 */);
