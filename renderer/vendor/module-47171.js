// vendor/module-47171.js — webpack module 47171
// params: (e, t, n) = (module, exports, require)
"use strict";
(t.ANSWER_PART_TYPE = void 0),
  (t.answerFieldsOf = g),
  (t.fencedCode = y),
  (t.answerCopyText = function (e) {
    return [
      e.answer,
      e.keySteps && `Key steps:\n${e.keySteps}`,
      e.code?.source,
      e.explanation,
      e.diagram && v(e.diagram),
    ]
      .filter(Boolean)
      .join("\n\n");
  }),
  (t.hasAnswerWords = b),
  (t.hasAnswerContent = function (e) {
    return Boolean(e.question) || b(e);
  }),
  (t.messageText = function (e) {
    const t = g(e);
    return t
      ? (function (e) {
          const t = [];
          return (
            e.question && t.push(`**Question**: ${e.question}`),
            e.answer && t.push(e.question ? `---\n\n${e.answer}` : e.answer),
            e.keySteps && t.push(`**Key Steps**:\n${e.keySteps}`),
            void 0 !== e.code?.source && t.push(`**Code**:\n${y(e.code)}`),
            e.explanation && t.push(`**Explanation**:\n${e.explanation}`),
            e.diagram && t.push(v(e.diagram)),
            t.join("\n\n")
          );
        })(t)
      : m(e);
  });
const r = n(74865 /* vendor/module-74865 */);
t.ANSWER_PART_TYPE = "data-answer";
const o = [
    "question",
    "answer_markdown",
    "key_steps",
    "code",
    "explanation",
    "diagram",
  ],
  i = (e) => e.replace(/["`\\\n]/g, " ").trim();
const a = (e) => e.replace(/\\(?:u[0-9a-fA-F]{0,3})?$/, "");
function s(e, t) {
  const n = ((e) =>
    e.replace(/(`+)[\s\S]*?(?:\1|$)|\\u([0-9a-fA-F]{4})/g, (e, t, n) =>
      n ? String.fromCharCode(parseInt(n, 16)) : e,
    ))(e);
  return t ? n : a(n);
}
function l(e, t) {
  return null == e ? e : s(e, t);
}
function c(e, t) {
  const n = {};
  return (
    "string" == typeof e.question && (n.question = s(e.question, t)),
    "string" == typeof e.answer_markdown &&
      (n.answer = s(e.answer_markdown, t)),
    ("string" != typeof e.key_steps && null !== e.key_steps) ||
      (n.keySteps = l(e.key_steps, t)),
    void 0 !== e.code &&
      (n.code =
        null === e.code
          ? null
          : {
              ...("string" == typeof e.code.language
                ? { language: e.code.language }
                : {}),
              ...("string" == typeof e.code.source
                ? { source: t ? e.code.source : a(e.code.source) }
                : {}),
            }),
    ("string" != typeof e.explanation && null !== e.explanation) ||
      (n.explanation = l(e.explanation, t)),
    t &&
      (n.diagram = (function (e) {
        if (
          !e ||
          !((e) =>
            Array.isArray(e.nodes) &&
            e.nodes.every(
              (e) => "string" == typeof e?.id && "string" == typeof e.label,
            ) &&
            Array.isArray(e.edges) &&
            e.edges.every(
              (e) =>
                "string" == typeof e?.from &&
                "string" == typeof e.to &&
                (null === e.label || "string" == typeof e.label),
            ))(e) ||
          0 === e.nodes.length
        )
          return null;
        const { nodes: t, edges: n } = e,
          r = new Map(t.map((e, t) => [e.id, `n${t}`])),
          o = t.map((e) => `${r.get(e.id)}["${i(e.label)}"]`);
        for (const { from: e, to: t, label: a } of n) {
          if (!r.has(e) || !r.has(t)) continue;
          const n = a ? `|"${i(a)}"|` : "";
          o.push(`${r.get(e)} --\x3e${n} ${r.get(t)}`);
        }
        return `flowchart TD\n${o.join("\n")}`;
      })(e.diagram)),
    n
  );
}
const u = (e) => e.replace(/^\s*```(?:json)?\s*/, "").replace(/\s*```\s*$/, ""),
  d = (e) =>
    Array.isArray(e)
      ? e
          .filter((e) => "string" == typeof e)
          .map((e) => (/^\s*[-*\d]/.test(e) ? e : `- ${e}`))
          .join("\n")
      : e;
function p(e) {
  const t = u(e);
  if (!t.trimStart().startsWith("{")) return null;
  let n;
  try {
    n = JSON.parse(t);
  } catch {
    try {
      n = (0, r.parse)(t, r.Allow.ALL);
    } catch {
      return null;
    }
  }
  return n && "object" == typeof n && !Array.isArray(n)
    ? (function (e) {
        const t = { ...e };
        return (
          "answer_markdown" in t && (t.answer_markdown = d(t.answer_markdown)),
          "key_steps" in t && (t.key_steps = d(t.key_steps)),
          "explanation" in t && (t.explanation = d(t.explanation)),
          "code" in t &&
            (t.code = ((e) => {
              if ("string" != typeof e) return e;
              const t = /^\s*```([\w+#-]*)\s*\n([\s\S]*?)\n?\s*```\s*$/.exec(e);
              return t
                ? { language: t[1] ?? "", source: t[2] ?? "" }
                : { language: "", source: e };
            })(t.code)),
          t
        );
      })(n)
    : null;
}
const f = /^\s*`{1,3}(?:j(?:s(?:o(?:n)?)?)?)?\s*$/;
function h(e) {
  return e.type === t.ANSWER_PART_TYPE;
}
const m = (e) =>
  e
    .filter((e) => "text" === e.type)
    .map((e) => e.text ?? "")
    .join("");
function g(e, { done: t = !0 } = {}) {
  const n = e.find(h);
  if (n) return n.data;
  const r = m(e);
  return r
    ? (function (e, t) {
        const n = p(e);
        return n && o.some((e) => e in n)
          ? c(n, t)
          : t
            ? null
            : u(e).trimStart().startsWith("{") || f.test(e)
              ? {}
              : null;
      })(r, t)
    : null;
}
function y({ language: e, source: t }) {
  return `\`\`\`${e ?? ""}\n${t ?? ""}\n\`\`\``;
}
function v(e) {
  return `\`\`\`mermaid\n${e}\n\`\`\``;
}
function b(e) {
  return Boolean(
    e.answer || e.keySteps || e.code?.source || e.explanation || e.diagram,
  );
}
