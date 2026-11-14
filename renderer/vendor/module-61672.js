// vendor/module-61672.js — webpack module 61672
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/module-15946 */),
  o = n(19648 /* vendor/module-19648 */),
  i = n(48854 /* vendor/module-48854 */),
  a = n(87809 /* vendor/module-87809 */);
function s(e, t, n, i) {
  if (!e || "object" != typeof e) return;
  const s = (function (e, t) {
    return (
      "type" in e &&
      "string" == typeof e.type &&
      "error" === e.type &&
      (t.setStatus({
        code: o.SPAN_STATUS_ERROR,
        message: a.mapAnthropicErrorToStatusMessage(e.error?.type),
      }),
      r.captureException(e.error, {
        mechanism: {
          handled: !1,
          type: "auto.ai.anthropic.anthropic_error",
        },
      }),
      !0)
    );
  })(e, i);
  s ||
    ((function (e, t) {
      if (
        ("message_delta" === e.type &&
          (e.usage &&
            "number" == typeof e.usage.output_tokens &&
            (t.completionTokens = e.usage.output_tokens),
          e.delta?.stop_reason && t.finishReasons.push(e.delta.stop_reason)),
        e.message)
      ) {
        const n = e.message;
        n.id && (t.responseId = n.id),
          n.model && (t.responseModel = n.model),
          n.usage &&
            ("number" == typeof n.usage.input_tokens &&
              (t.promptTokens = n.usage.input_tokens),
            "number" == typeof n.usage.cache_creation_input_tokens &&
              (t.cacheCreationInputTokens =
                n.usage.cache_creation_input_tokens),
            "number" == typeof n.usage.cache_read_input_tokens &&
              (t.cacheReadInputTokens = n.usage.cache_read_input_tokens));
      }
    })(e, t),
    (function (e, t) {
      "content_block_start" === e.type &&
        "number" == typeof e.index &&
        e.content_block &&
        (("tool_use" !== e.content_block.type &&
          "server_tool_use" !== e.content_block.type) ||
          (t.activeToolBlocks[e.index] = {
            id: e.content_block.id,
            name: e.content_block.name,
            inputJsonParts: [],
          }));
    })(e, t),
    (function (e, t, n) {
      if ("content_block_delta" === e.type && e.delta) {
        if (
          "number" == typeof e.index &&
          "partial_json" in e.delta &&
          "string" == typeof e.delta.partial_json
        ) {
          const n = t.activeToolBlocks[e.index];
          n && n.inputJsonParts.push(e.delta.partial_json);
        }
        n &&
          "string" == typeof e.delta.text &&
          t.responseTexts.push(e.delta.text);
      }
    })(e, t, n),
    (function (e, t) {
      if ("content_block_stop" !== e.type || "number" != typeof e.index) return;
      const n = t.activeToolBlocks[e.index];
      if (!n) return;
      const r = n.inputJsonParts.join("");
      let o;
      try {
        o = r ? JSON.parse(r) : {};
      } catch {
        o = { __unparsed: r };
      }
      t.toolCalls.push({
        type: "tool_use",
        id: n.id,
        name: n.name,
        input: o,
      }),
        delete t.activeToolBlocks[e.index];
    })(e, t));
}
(t.instrumentAsyncIterableStream = async function* (e, t, n) {
  const r = {
    responseTexts: [],
    finishReasons: [],
    responseId: "",
    responseModel: "",
    promptTokens: void 0,
    completionTokens: void 0,
    cacheCreationInputTokens: void 0,
    cacheReadInputTokens: void 0,
    toolCalls: [],
    activeToolBlocks: {},
  };
  try {
    for await (const o of e) s(o, r, n, t), yield o;
  } finally {
    i.endStreamSpan(t, r, n);
  }
}),
  (t.instrumentMessageStream = function (e, t, n) {
    const a = {
      responseTexts: [],
      finishReasons: [],
      responseId: "",
      responseModel: "",
      promptTokens: void 0,
      completionTokens: void 0,
      cacheCreationInputTokens: void 0,
      cacheReadInputTokens: void 0,
      toolCalls: [],
      activeToolBlocks: {},
    };
    return (
      e.on("streamEvent", (e) => {
        s(e, a, n, t);
      }),
      e.on("message", () => {
        i.endStreamSpan(t, a, n);
      }),
      e.on("error", (e) => {
        r.captureException(e, {
          mechanism: {
            handled: !1,
            type: "auto.ai.anthropic.stream_error",
          },
        }),
          t.isRecording() &&
            (t.setStatus({
              code: o.SPAN_STATUS_ERROR,
              message: "internal_error",
            }),
            t.end());
      }),
      e
    );
  });
