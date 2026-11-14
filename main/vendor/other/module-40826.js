// vendor/other/module-40826.js — webpack module 40826
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(36648 /* vendor/other/module-36648 */);
(t.addResponseAttributes = function (e, t, n) {
  if (!t || "object" != typeof t) return;
  const o = t,
    i = {};
  if (
    ("string" == typeof o.id && (i[r.GEN_AI_RESPONSE_ID_ATTRIBUTE] = o.id),
    "string" == typeof o.model &&
      (i[r.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = o.model),
    "conversation" === o.object &&
      "string" == typeof o.id &&
      (i[r.GEN_AI_CONVERSATION_ID_ATTRIBUTE] = o.id),
    o.usage && "object" == typeof o.usage)
  ) {
    const e = o.usage,
      t = e.prompt_tokens ?? e.input_tokens;
    "number" == typeof t && (i[r.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = t);
    const n = e.completion_tokens ?? e.output_tokens;
    "number" == typeof n && (i[r.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = n),
      "number" == typeof e.total_tokens &&
        (i[r.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = e.total_tokens);
  }
  if (Array.isArray(o.choices)) {
    const e = o.choices,
      t = e.map((e) => e.finish_reason).filter((e) => "string" == typeof e);
    if (
      (t.length > 0 &&
        (i[r.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(t)),
      n)
    ) {
      const t = e.map((e) => {
        const t = e.message;
        return t?.content || "";
      });
      i[r.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = JSON.stringify(t);
      const n = e
        .map((e) => {
          const t = e.message;
          return t?.tool_calls;
        })
        .filter((e) => Array.isArray(e) && e.length > 0)
        .flat();
      n.length > 0 &&
        (i[r.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(n));
    }
  }
  if (
    ("string" == typeof o.status &&
      (i[r.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] ||
        (i[r.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify([
          o.status,
        ]))),
    n &&
      ("string" != typeof o.output_text ||
        i[r.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] ||
        (i[r.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = o.output_text),
      Array.isArray(o.output) &&
        o.output.length > 0 &&
        !i[r.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE]))
  ) {
    const e = o.output.filter((e) => "function_call" === e?.type);
    e.length > 0 &&
      (i[r.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(e));
  }
  e.setAttributes(i);
}),
  (t.extractRequestParameters = function (e) {
    const t = {
      [r.GEN_AI_REQUEST_MODEL_ATTRIBUTE]: e.model ?? "unknown",
    };
    "temperature" in e &&
      (t[r.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = e.temperature),
      "top_p" in e && (t[r.GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = e.top_p),
      "frequency_penalty" in e &&
        (t[r.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = e.frequency_penalty),
      "presence_penalty" in e &&
        (t[r.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = e.presence_penalty),
      "stream" in e && (t[r.GEN_AI_REQUEST_STREAM_ATTRIBUTE] = e.stream),
      "encoding_format" in e &&
        (t[r.GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE] = e.encoding_format),
      "dimensions" in e &&
        (t[r.GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE] = e.dimensions);
    const n = (function (e) {
      return "conversation" in e && "string" == typeof e.conversation
        ? e.conversation
        : "previous_response_id" in e &&
            "string" == typeof e.previous_response_id
          ? e.previous_response_id
          : void 0;
    })(e);
    return n && (t[r.GEN_AI_CONVERSATION_ID_ATTRIBUTE] = n), t;
  }),
  (t.isChatCompletionChunk = function (e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "object" in e &&
      "chat.completion.chunk" === e.object
    );
  }),
  (t.isResponsesApiStreamEvent = function (e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "type" in e &&
      "string" == typeof e.type &&
      e.type.startsWith("response.")
    );
  });
