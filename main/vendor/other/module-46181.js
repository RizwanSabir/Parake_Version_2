// vendor/other/module-46181.js — webpack module 46181
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(19648 /* vendor/other/module-19648 */),
  o = n(48854 /* vendor/other/module-48854 */),
  i = n(90576 /* vendor/other/module-90576 */);
function s(e, t) {
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
function a(e, t, n, r) {
  const o = e.trim();
  if (!o.startsWith("data:")) return;
  const i = o.slice(5).trim();
  if (!i || "[DONE]" === i) return;
  let a;
  try {
    a = JSON.parse(i);
  } catch {
    return;
  }
  if (
    (a.usage &&
      ("number" == typeof a.usage.prompt_tokens &&
        (t.promptTokens = a.usage.prompt_tokens),
      "number" == typeof a.usage.completion_tokens &&
        (t.completionTokens = a.usage.completion_tokens),
      "number" == typeof a.usage.total_tokens &&
        (t.totalTokens = a.usage.total_tokens)),
    n && "string" == typeof a.response && t.responseTexts.push(a.response),
    n &&
      Array.isArray(a.tool_calls) &&
      a.tool_calls.length > 0 &&
      t.toolCalls.push(...a.tool_calls),
    Array.isArray(a.choices))
  )
    for (const e of a.choices)
      n &&
        "string" == typeof e.delta?.content &&
        e.delta.content &&
        t.responseTexts.push(e.delta.content),
        n && Array.isArray(e.delta?.tool_calls) && s(e.delta.tool_calls, r),
        "string" == typeof e.finish_reason &&
          t.finishReasons.push(e.finish_reason);
}
t.instrumentWorkersAiStream = function (e, t, n) {
  const s = e.getReader(),
    c = new TextDecoder(),
    u = {
      responseId: "",
      responseModel: "",
      finishReasons: [],
      responseTexts: [],
      toolCalls: [],
      promptTokens: void 0,
      completionTokens: void 0,
      totalTokens: void 0,
    },
    l = {};
  let d = "",
    p = !1;
  const f = () => {
      if (!p) {
        if (((p = !0), n)) {
          const e = Object.values(l);
          e.length > 0 && u.toolCalls.push(...e),
            i.setOutputMessagesAttribute(t, {
              responseText: u.responseTexts.join(""),
              toolCalls: u.toolCalls,
            });
        }
        o.endStreamSpan(t, u, n);
      }
    },
    h = (e) => {
      const t = d.split("\n");
      d = e ? "" : (t.pop() ?? "");
      for (const e of t) a(e, u, n, l);
    };
  return new ReadableStream({
    async pull(e) {
      try {
        const { done: t, value: n } = await s.read();
        if (t) return (d += c.decode()), h(!0), f(), void e.close();
        (d += c.decode(n, { stream: !0 })), h(!1), e.enqueue(n);
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
      f(), await s.cancel(e);
    },
  });
};
