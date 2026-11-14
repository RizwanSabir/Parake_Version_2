// vendor/module-46181.js — webpack module 46181
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(19648 /* vendor/module-19648 */),
  o = n(48854 /* vendor/module-48854 */),
  i = n(90576 /* vendor/module-90576 */);
function a(e, t) {
  for (const n of e) {
    const e = n.function?.name ?? n.name,
      r = n.function?.arguments ?? n.arguments;
    if (null == e && null == r) continue;
    const o = n.index ?? 0,
      i = t[o];
    i
      ? i.function &&
        (e && !i.function.name && (i.function.name = e),
        r && (i.function.arguments = `${i.function.arguments ?? ""}${r}`))
      : (t[o] = {
          index: o,
          id: n.id,
          type: n.type,
          function: { name: e, arguments: r ?? "" },
        });
  }
}
function s(e, t, n, r) {
  const o = e.trim();
  if (!o.startsWith("data:")) return;
  const i = o.slice(5).trim();
  if (!i || "[DONE]" === i) return;
  let s;
  try {
    s = JSON.parse(i);
  } catch {
    return;
  }
  if (
    (s.usage &&
      ("number" == typeof s.usage.prompt_tokens &&
        (t.promptTokens = s.usage.prompt_tokens),
      "number" == typeof s.usage.completion_tokens &&
        (t.completionTokens = s.usage.completion_tokens),
      "number" == typeof s.usage.total_tokens &&
        (t.totalTokens = s.usage.total_tokens)),
    n && "string" == typeof s.response && t.responseTexts.push(s.response),
    n &&
      Array.isArray(s.tool_calls) &&
      s.tool_calls.length > 0 &&
      t.toolCalls.push(...s.tool_calls),
    Array.isArray(s.choices))
  )
    for (const e of s.choices)
      n &&
        "string" == typeof e.delta?.content &&
        e.delta.content &&
        t.responseTexts.push(e.delta.content),
        n && Array.isArray(e.delta?.tool_calls) && a(e.delta.tool_calls, r),
        "string" == typeof e.finish_reason &&
          t.finishReasons.push(e.finish_reason);
}
t.instrumentWorkersAiStream = function (e, t, n) {
  const a = e.getReader(),
    l = new TextDecoder(),
    c = {
      responseId: "",
      responseModel: "",
      finishReasons: [],
      responseTexts: [],
      toolCalls: [],
      promptTokens: void 0,
      completionTokens: void 0,
      totalTokens: void 0,
    },
    u = {};
  let d = "",
    p = !1;
  const f = () => {
      if (!p) {
        if (((p = !0), n)) {
          const e = Object.values(u);
          e.length > 0 && c.toolCalls.push(...e),
            i.setOutputMessagesAttribute(t, {
              responseText: c.responseTexts.join(""),
              toolCalls: c.toolCalls,
            });
        }
        o.endStreamSpan(t, c, n);
      }
    },
    h = (e) => {
      const t = d.split("\n");
      d = e ? "" : (t.pop() ?? "");
      for (const e of t) s(e, c, n, u);
    };
  return new ReadableStream({
    async pull(e) {
      try {
        const { done: t, value: n } = await a.read();
        if (t) return (d += l.decode()), h(!0), f(), void e.close();
        (d += l.decode(n, { stream: !0 })), h(!1), e.enqueue(n);
      } catch (n) {
        t.setStatus({
          code: r.SPAN_STATUS_ERROR,
          message: "internal_error",
        }),
          f(),
          e.error(n);
      }
    },
    async cancel(e) {
      f(), await a.cancel(e);
    },
  });
};
