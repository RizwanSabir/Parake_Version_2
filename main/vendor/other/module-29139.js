// vendor/other/module-29139.js — webpack module 29139
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/other/module-15946 */),
  o = n(19648 /* vendor/other/module-19648 */),
  i = n(48854 /* vendor/other/module-48854 */),
  s = n(24802 /* vendor/other/module-24802 */),
  a = n(40826 /* vendor/other/module-40826 */);
function c(e, t) {
  for (const n of e) {
    const e = n.index;
    if (void 0 !== e && n.function)
      if (e in t.chatCompletionToolCalls) {
        const r = t.chatCompletionToolCalls[e];
        n.function.arguments &&
          r?.function &&
          (r.function.arguments += n.function.arguments);
      } else
        t.chatCompletionToolCalls[e] = {
          ...n,
          function: {
            name: n.function.name,
            arguments: n.function.arguments || "",
          },
        };
  }
}
function u(e, t, n) {
  (t.responseId = e.id ?? t.responseId),
    (t.responseModel = e.model ?? t.responseModel),
    e.usage &&
      ((t.promptTokens = e.usage.prompt_tokens),
      (t.completionTokens = e.usage.completion_tokens),
      (t.totalTokens = e.usage.total_tokens));
  for (const r of e.choices ?? [])
    n &&
      (r.delta?.content && t.responseTexts.push(r.delta.content),
      r.delta?.tool_calls && c(r.delta.tool_calls, t)),
      r.finish_reason && t.finishReasons.push(r.finish_reason);
}
function l(e, t, n, i) {
  if (!e || "object" != typeof e)
    return void t.eventTypes.push("unknown:non-object");
  if (e instanceof Error)
    return (
      i.setStatus({
        code: o.SPAN_STATUS_ERROR,
        message: "internal_error",
      }),
      void r.captureException(e, {
        mechanism: {
          handled: !1,
          type: "auto.ai.openai.stream-response",
        },
      })
    );
  if (!("type" in e)) return;
  const a = e;
  if (s.RESPONSE_EVENT_TYPES.includes(a.type)) {
    if (
      n &&
      ("response.output_item.done" === a.type &&
        "item" in a &&
        t.responsesApiToolCalls.push(a.item),
      "response.output_text.delta" === a.type && "delta" in a && a.delta)
    )
      t.responseTexts.push(a.delta);
    else if ("response" in a) {
      const { response: e } = a;
      (t.responseId = e.id ?? t.responseId),
        (t.responseModel = e.model ?? t.responseModel),
        e.usage &&
          ((t.promptTokens = e.usage.input_tokens),
          (t.completionTokens = e.usage.output_tokens),
          (t.totalTokens = e.usage.total_tokens)),
        e.status && t.finishReasons.push(e.status),
        n && e.output_text && t.responseTexts.push(e.output_text);
    }
  } else t.eventTypes.push(a.type);
}
t.instrumentStream = async function* (e, t, n) {
  const r = {
    eventTypes: [],
    responseTexts: [],
    finishReasons: [],
    responseId: "",
    responseModel: "",
    promptTokens: void 0,
    completionTokens: void 0,
    totalTokens: void 0,
    chatCompletionToolCalls: {},
    responsesApiToolCalls: [],
  };
  try {
    for await (const o of e)
      a.isChatCompletionChunk(o)
        ? u(o, r, n)
        : a.isResponsesApiStreamEvent(o) && l(o, r, n, t),
        yield o;
  } finally {
    const e = [
      ...Object.values(r.chatCompletionToolCalls),
      ...r.responsesApiToolCalls,
    ];
    i.endStreamSpan(t, { ...r, toolCalls: e }, n);
  }
};
