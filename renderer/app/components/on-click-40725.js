// app/components/on-click-40725.js — webpack module 40725
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.answerMarkdownComponents = void 0),
  (t.AnswerMarkdown = m),
  (t.renderAnswerMarkdown = function (e) {
    return (0, o.jsx)(m, { markdown: e });
  });
const o = n(31085 /* vendor/module-31085 */),
  i = n(54005 /* vendor/module-54005 */);
n(64781 /* vendor/module-64781 */);
const a = n(87952 /* vendor/module-87952 */),
  s = n(14041 /* vendor/module-14041 */),
  l = r(n(42786 /* vendor/module-42786 */)),
  c = n(60359 /* vendor/module-60359 */),
  u = n(27887 /* vendor/module-27887 */),
  d = n(66244 /* app/components/button-variants */),
  p = n(94274 /* app/components/answer-code-block */),
  f = n(97329 /* vendor/module-97329 */);
function h(e) {
  const t = (0, i.c)(15),
    { children: n } = e,
    {
      copy: r,
      touch: l,
      glass: c,
      copyable: p,
    } = (0, f.useAnswerEnvironment)(),
    [h, m] = (0, s.useState)(!1);
  let g;
  t[0] !== n
    ? ((g = (0, u.extractReactNodeText)(n).trim()), (t[0] = n), (t[1] = g))
    : (g = t[1]);
  const y = g;
  let v;
  t[2] !== r || t[3] !== y
    ? ((v = async function () {
        try {
          await r(y);
        } catch {
          return;
        }
        m(!0), setTimeout(() => m(!1), 1600);
      }),
      (t[2] = r),
      (t[3] = y),
      (t[4] = v))
    : (v = t[4]);
  const b = v;
  let S, _;
  return (
    t[5] !== h ||
    t[6] !== p ||
    t[7] !== c ||
    t[8] !== b ||
    t[9] !== y ||
    t[10] !== l
      ? ((S =
          y &&
          !l &&
          p &&
          (0, o.jsx)(d.Button, {
            type: "button",
            variant: c ? "glass" : "outline-solid",
            size: "icon-sm",
            onClick: () => {
              b();
            },
            "data-bullet-copy": !0,
            className:
              "absolute top-0 -left-7 opacity-0 transition-opacity group-hover/li:opacity-100 focus-visible:opacity-100",
            "aria-label": h ? "Copied" : "Copy this point",
            children: h ? (0, o.jsx)(a.Check, {}) : (0, o.jsx)(a.Copy, {}),
          })),
        (t[5] = h),
        (t[6] = p),
        (t[7] = c),
        (t[8] = b),
        (t[9] = y),
        (t[10] = l),
        (t[11] = S))
      : (S = t[11]),
    t[12] !== n || t[13] !== S
      ? ((_ = (0, o.jsxs)("li", {
          className:
            "group/li relative mb-1 list-item before:absolute before:top-0 before:-left-8 before:h-full before:w-8 before:content-['']",
          children: [S, n],
        })),
        (t[12] = n),
        (t[13] = S),
        (t[14] = _))
      : (_ = t[14]),
    _
  );
}
function m(e) {
  const n = (0, i.c)(5),
    { markdown: r, components: a } = e,
    s = void 0 === a ? t.answerMarkdownComponents : a;
  let u, d;
  return (
    n[0] !== r
      ? ((u = (0, c.preprocessAnswerMarkdown)(r)), (n[0] = r), (n[1] = u))
      : (u = n[1]),
    n[2] !== s || n[3] !== u
      ? ((d = (0, o.jsx)(l.default, {
          components: s,
          remarkPlugins: c.answerRemarkPlugins,
          rehypePlugins: c.answerRehypePlugins,
          children: u,
        })),
        (n[2] = s),
        (n[3] = u),
        (n[4] = d))
      : (d = n[4]),
    d
  );
}
t.answerMarkdownComponents = {
  code: p.AnswerCodeBlock,
  pre: ({ children: e }) =>
    (0, o.jsx)(o.Fragment, {
      children: s.Children.map(e, (e) =>
        (0, s.isValidElement)(e)
          ? (0, s.cloneElement)(e, {
              className: e.props.className ?? "language-text",
            })
          : e,
      ),
    }),
  hr: () =>
    (0, o.jsx)("hr", {
      className: "border-foreground/10 my-2 border-t",
    }),
  h1: ({ children: e }) =>
    (0, o.jsx)("h1", {
      className: "mb-2 text-[1.5em] font-semibold",
      children: e,
    }),
  h2: ({ children: e }) =>
    (0, o.jsx)("h2", {
      className: "mb-1 text-[1.25em] font-semibold",
      children: e,
    }),
  h3: ({ children: e }) =>
    (0, o.jsx)("h3", {
      className: "text-[1.125em] font-semibold",
      children: e,
    }),
  h4: ({ children: e }) =>
    (0, o.jsx)("h4", { className: "font-semibold", children: e }),
  p: ({ children: e }) =>
    (0, o.jsx)("p", { className: "mb-2 last:mb-0", children: e }),
  ul: ({ children: e }) =>
    (0, o.jsx)("ul", {
      className:
        "mb-2 list-disc pl-6 last:mb-0 [&_li_li>[data-bullet-copy]]:hidden",
      children: e,
    }),
  ol: ({ children: e }) =>
    (0, o.jsx)("ol", {
      className:
        "mb-2 list-decimal pl-6 last:mb-0 [&_li_li>[data-bullet-copy]]:hidden",
      children: e,
    }),
  li: ({ children: e }) => (0, o.jsx)(h, { children: e }),
  blockquote: ({ children: e }) =>
    (0, o.jsx)("blockquote", {
      className:
        "border-border text-muted-foreground my-2 border-l-4 pl-4 italic",
      children: e,
    }),
  table: ({ children: e }) =>
    (0, o.jsx)("div", {
      className: "my-2 overflow-x-auto",
      children: (0, o.jsx)("table", {
        className: "border-border min-w-full border-collapse border",
        children: e,
      }),
    }),
  thead: ({ children: e }) =>
    (0, o.jsx)("thead", { className: "bg-muted", children: e }),
  tbody: ({ children: e }) => (0, o.jsx)("tbody", { children: e }),
  tr: ({ children: e }) =>
    (0, o.jsx)("tr", {
      className: "border-border border-b",
      children: e,
    }),
  th: ({ children: e }) =>
    (0, o.jsx)("th", {
      className: "border-border border px-4 py-2 text-left font-semibold",
      children: e,
    }),
  td: ({ children: e }) =>
    (0, o.jsx)("td", {
      className: "border-border border px-4 py-2",
      children: e,
    }),
  img: ({ src: e, alt: t, node: n, ...r }) =>
    (0, o.jsx)("div", {
      className: "my-2 flex justify-center",
      children: (0, o.jsx)("img", {
        src: e,
        alt: t,
        className: "max-w-full rounded shadow-sm",
        ...r,
      }),
    }),
  a: ({ href: e, children: t, node: n, ...r }) =>
    (0, o.jsx)("a", {
      href: e,
      className: "underline underline-offset-2",
      target: "_blank",
      rel: "noopener noreferrer",
      ...r,
      children: t,
    }),
  input: ({ type: e, checked: t, node: n, ...r }) =>
    "checkbox" === e
      ? (0, o.jsx)("input", {
          type: "checkbox",
          checked: t,
          disabled: !0,
          className: "mr-2",
          ...r,
        })
      : (0, o.jsx)("input", { type: e, ...r }),
};
