// vendor/module-90576.js — webpack module 90576
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/module-88516 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(36648 /* vendor/module-36648 */),
  a = n(48854 /* vendor/module-48854 */),
  s = n(75122 /* vendor/module-75122 */),
  l = n(51148 /* vendor/module-51148 */);
function c(e, { responseText: t, toolCalls: n }) {
  const r = [];
  if (
    ("string" == typeof t &&
      t.length > 0 &&
      r.push({ type: "text", content: t }),
    Array.isArray(n))
  )
    for (const e of n) {
      if (!e || "object" != typeof e) continue;
      const t = e,
        n = t.function?.name ?? t.name,
        o = t.function?.arguments ?? t.arguments;
      r.push({
        type: "tool_call",
        id: t.id,
        name: n,
        arguments: "string" == typeof o ? o : JSON.stringify(o ?? {}),
      });
    }
  r.length > 0 &&
    e.setAttribute(
      i.GEN_AI_OUTPUT_MESSAGES_ATTRIBUTE,
      JSON.stringify([{ role: "assistant", parts: r }]),
    );
}
(t.addRequestAttributes = function (e, t, n, o) {
  if (!t || "object" != typeof t) return;
  const l = t;
  if ("embeddings" === n) {
    const t = l.text;
    if (
      null == t ||
      ("string" == typeof t && 0 === t.length) ||
      (Array.isArray(t) && 0 === t.length)
    )
      return;
    return void e.setAttribute(
      r.GEN_AI_EMBEDDINGS_INPUT,
      "string" == typeof t ? t : JSON.stringify(t),
    );
  }
  const c = l.messages ?? l.prompt;
  if (null == c || (Array.isArray(c) && 0 === c.length)) return;
  const { systemInstructions: u, filteredMessages: d } =
    a.extractSystemInstructions(c);
  u && e.setAttribute(r.GEN_AI_SYSTEM_INSTRUCTIONS, u),
    e.setAttribute(
      r.GEN_AI_INPUT_MESSAGES,
      o ? a.getTruncatedJsonString(d) : s.stringify(d),
    ),
    e.setAttribute(
      i.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE,
      Array.isArray(d) ? d.length : 1,
    );
}),
  (t.addResponseAttributes = function (e, t, n) {
    if (
      !t ||
      "object" != typeof t ||
      ("undefined" != typeof Response && t instanceof Response)
    )
      return;
    const r = t;
    if (
      (r.usage &&
        a.setTokenUsageAttributes(
          e,
          r.usage.prompt_tokens,
          r.usage.completion_tokens,
        ),
      n)
    ) {
      let t;
      "string" == typeof r.response
        ? ((t = r.response),
          e.setAttribute(i.GEN_AI_RESPONSE_TEXT_ATTRIBUTE, r.response))
        : null != r.response &&
          ((t = JSON.stringify(r.response)),
          e.setAttribute(i.GEN_AI_RESPONSE_TEXT_ATTRIBUTE, t));
      const n =
        Array.isArray(r.tool_calls) && r.tool_calls.length > 0
          ? r.tool_calls
          : void 0;
      n &&
        e.setAttribute(
          i.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE,
          JSON.stringify(n),
        ),
        c(e, { responseText: t, toolCalls: n });
    }
  }),
  (t.extractRequestAttributes = function (e, t, n) {
    const a = {
      [r.GEN_AI_PROVIDER_NAME]: l.WORKERS_AI_PROVIDER_NAME,
      [r.GEN_AI_OPERATION_NAME]: n,
      [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: l.WORKERS_AI_ORIGIN,
      [r.GEN_AI_REQUEST_MODEL]: "string" == typeof e ? e : "unknown",
    };
    if (t && "object" == typeof t) {
      const e = t;
      "number" == typeof e.temperature &&
        (a[r.GEN_AI_REQUEST_TEMPERATURE] = e.temperature),
        "number" == typeof e.max_tokens &&
          (a[r.GEN_AI_REQUEST_MAX_TOKENS] = e.max_tokens),
        "number" == typeof e.top_p && (a[r.GEN_AI_REQUEST_TOP_P] = e.top_p),
        "number" == typeof e.top_k && (a[r.GEN_AI_REQUEST_TOP_K] = e.top_k),
        "number" == typeof e.frequency_penalty &&
          (a[r.GEN_AI_REQUEST_FREQUENCY_PENALTY] = e.frequency_penalty),
        "number" == typeof e.presence_penalty &&
          (a[r.GEN_AI_REQUEST_PRESENCE_PENALTY] = e.presence_penalty),
        !0 === e.stream && (a[i.GEN_AI_REQUEST_STREAM_ATTRIBUTE] = !0);
    }
    return a;
  }),
  (t.getOperationName = function (e) {
    if (e && "object" == typeof e) {
      if ("messages" in e || "prompt" in e) return "chat";
      if ("text" in e) return "embeddings";
    }
    return "chat";
  }),
  (t.setOutputMessagesAttribute = c);
