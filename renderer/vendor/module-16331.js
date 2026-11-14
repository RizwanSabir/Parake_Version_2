// vendor/module-16331.js — webpack module 16331
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(48854 /* vendor/module-48854 */),
  a = n(98474 /* vendor/module-98474 */),
  s = n(38862 /* vendor/module-38862 */),
  l = n(51148 /* vendor/module-51148 */),
  c = n(36648 /* vendor/module-36648 */),
  u = n(28750 /* vendor/module-28750 */),
  d = n(91159 /* vendor/module-91159 */),
  p = n(79382 /* vendor/module-79382 */),
  f = n(54061 /* vendor/module-54061 */);
function h(e) {
  const { data: t, description: n } = s.spanToJSON(e);
  if (!n) return;
  if (
    t[f.AI_TOOL_CALL_NAME_ATTRIBUTE] &&
    t[f.AI_TOOL_CALL_ID_ATTRIBUTE] &&
    "ai.toolCall" === n
  )
    return void (function (e, t) {
      e.setAttribute(o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel"),
        e.setAttribute(o.SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.execute_tool"),
        e.setAttribute(c.GEN_AI_OPERATION_NAME_ATTRIBUTE, "execute_tool"),
        b(t, f.AI_TOOL_CALL_NAME_ATTRIBUTE, c.GEN_AI_TOOL_NAME_ATTRIBUTE),
        b(t, f.AI_TOOL_CALL_ID_ATTRIBUTE, c.GEN_AI_TOOL_CALL_ID_ATTRIBUTE);
      const n = t[c.GEN_AI_TOOL_CALL_ID_ATTRIBUTE];
      "string" == typeof n && u.toolCallSpanContextMap.set(n, e.spanContext()),
        t[c.GEN_AI_TOOL_TYPE_ATTRIBUTE] ||
          e.setAttribute(c.GEN_AI_TOOL_TYPE_ATTRIBUTE, "function");
      const r = t[c.GEN_AI_TOOL_NAME_ATTRIBUTE];
      r && e.updateName(`execute_tool ${r}`);
    })(e, t);
  if (!t[f.AI_OPERATION_ID_ATTRIBUTE] && !n.startsWith("ai.")) return;
  "generate_content" === u.SPAN_TO_OPERATION_NAME.get(n) &&
    a._INTERNAL_skipAiProviderWrapping([l.WORKERS_AI_INTEGRATION_NAME]);
  const h = r.getClient(),
    m = h?.getIntegrationByName("VercelAI");
  !(function (e, t, n, i) {
    e.setAttribute(o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
    const a = t.replace("ai.", "");
    e.setAttribute("ai.pipeline.name", a), e.updateName(a);
    const l = n[f.AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE];
    l && "string" == typeof l && e.setAttribute("gen_ai.function_id", l),
      p.requestMessagesFromPrompt(e, n, i),
      n[f.AI_MODEL_ID_ATTRIBUTE] &&
        !n[c.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] &&
        e.setAttribute(
          c.GEN_AI_RESPONSE_MODEL_ATTRIBUTE,
          n[f.AI_MODEL_ID_ATTRIBUTE],
        ),
      e.setAttribute("ai.streaming", t.includes("stream"));
    const h = u.SPAN_TO_OPERATION_NAME.get(t);
    if (
      (h
        ? e.setAttribute(o.SEMANTIC_ATTRIBUTE_SENTRY_OP, `gen_ai.${h}`)
        : t.startsWith("ai.stream") &&
          e.setAttribute(o.SEMANTIC_ATTRIBUTE_SENTRY_OP, "ai.run"),
      "invoke_agent" === h)
    )
      return void (l && "string" == typeof l
        ? e.updateName(`invoke_agent ${l}`)
        : e.updateName("invoke_agent"));
    const m = n[f.AI_MODEL_ID_ATTRIBUTE];
    m && h && e.updateName(`${h} ${m}`);
    const g = r.getClient();
    if (
      g &&
      d.hasSpanStreamingEnabled(g) &&
      n[f.AI_PROMPT_TOOLS_ATTRIBUTE] &&
      Array.isArray(n[f.AI_PROMPT_TOOLS_ATTRIBUTE])
    ) {
      const t = new Map();
      for (const e of n[f.AI_PROMPT_TOOLS_ATTRIBUTE])
        try {
          const n = "string" == typeof e ? JSON.parse(e) : e;
          n?.name && n?.description && t.set(n.name, n.description);
        } catch {}
      if (t.size > 0) {
        const n = s.spanToJSON(e).parent_span_id;
        n && u.toolDescriptionMap.set(n, t);
      }
    }
  })(e, n, t, i.shouldEnableTruncation(m?.options?.enableTruncation));
}
function m(e) {
  if ("transaction" === e.type && e.spans) {
    const t = new Map();
    for (const n of e.spans) v(n), p.accumulateTokensForParent(n, t);
    p.applyToolDescriptionsAndTokens(e.spans, t);
    const n = e.contexts?.trace;
    "gen_ai.invoke_agent" === n?.op && p.applyAccumulatedTokens(n, t);
  }
  return e;
}
function g(e) {
  return "string" != typeof e ? "stop" : "tool-calls" === e ? "tool_call" : e;
}
function y(e) {
  if (
    (b(
      e,
      f.AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE,
      c.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE,
    ),
    b(
      e,
      f.AI_USAGE_PROMPT_TOKENS_ATTRIBUTE,
      c.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE,
    ),
    b(
      e,
      f.AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE,
      c.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
    ),
    b(e, "ai.usage.inputTokens", c.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE),
    b(e, "ai.usage.outputTokens", c.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE),
    b(e, f.AI_USAGE_TOKENS_ATTRIBUTE, c.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE),
    b(
      e,
      "ai.response.avgOutputTokensPerSecond",
      "ai.response.avgCompletionTokensPerSecond",
    ),
    Object.keys(e).some((e) =>
      e.startsWith(f.AI_USAGE_INPUT_TOKEN_DETAILS_ATTRIBUTE_PREFIX),
    ) ||
      "number" != typeof e[c.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] ||
      "number" != typeof e[c.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE] ||
      (e[c.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] =
        e[c.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] +
        e[c.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE]),
    "number" == typeof e[c.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE])
  ) {
    const t =
      "number" == typeof e[c.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE]
        ? e[c.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE]
        : 0;
    e[c.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
      t + e[c.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
  }
  if (
    (e[f.AI_PROMPT_TOOLS_ATTRIBUTE] &&
      Array.isArray(e[f.AI_PROMPT_TOOLS_ATTRIBUTE]) &&
      (e[f.AI_PROMPT_TOOLS_ATTRIBUTE] = p.convertAvailableToolsToJsonString(
        e[f.AI_PROMPT_TOOLS_ATTRIBUTE],
      )),
    e[f.OPERATION_NAME_ATTRIBUTE])
  ) {
    const t = e[f.AI_OPERATION_ID_ATTRIBUTE]
        ? e[f.AI_OPERATION_ID_ATTRIBUTE]
        : e[f.OPERATION_NAME_ATTRIBUTE],
      n = u.SPAN_TO_OPERATION_NAME.get(t) ?? t;
    (e[c.GEN_AI_OPERATION_NAME_ATTRIBUTE] = n),
      delete e[f.OPERATION_NAME_ATTRIBUTE];
  }
  if (
    (b(e, f.AI_PROMPT_MESSAGES_ATTRIBUTE, c.GEN_AI_INPUT_MESSAGES_ATTRIBUTE),
    (function (e) {
      const t = e[f.AI_RESPONSE_TEXT_ATTRIBUTE],
        n = e[f.AI_RESPONSE_TOOL_CALLS_ATTRIBUTE],
        r = e[f.AI_RESPONSE_FINISH_REASON_ATTRIBUTE];
      if (null == t && null == n) return;
      const o = [];
      if (
        ("string" == typeof t &&
          t.length > 0 &&
          o.push({ type: "text", content: t }),
        null != n)
      )
        try {
          const t = "string" == typeof n ? JSON.parse(n) : n;
          if (Array.isArray(t)) {
            for (const e of t) {
              const t = e.input ?? e.args;
              o.push({
                type: "tool_call",
                id: e.toolCallId,
                name: e.toolName,
                arguments: "string" == typeof t ? t : JSON.stringify(t ?? {}),
              });
            }
            delete e[f.AI_RESPONSE_TOOL_CALLS_ATTRIBUTE];
          }
        } catch {}
      if (o.length > 0) {
        const t = {
          role: "assistant",
          parts: o,
          finish_reason: g(r),
        };
        (e[c.GEN_AI_OUTPUT_MESSAGES_ATTRIBUTE] = JSON.stringify([t])),
          delete e[f.AI_RESPONSE_TEXT_ATTRIBUTE];
      }
    })(e),
    b(e, f.AI_RESPONSE_OBJECT_ATTRIBUTE, "gen_ai.response.object"),
    b(e, f.AI_PROMPT_TOOLS_ATTRIBUTE, "gen_ai.request.available_tools"),
    b(e, f.AI_TOOL_CALL_ARGS_ATTRIBUTE, c.GEN_AI_TOOL_INPUT_ATTRIBUTE),
    b(e, f.AI_TOOL_CALL_RESULT_ATTRIBUTE, c.GEN_AI_TOOL_OUTPUT_ATTRIBUTE),
    b(e, f.AI_SCHEMA_ATTRIBUTE, "gen_ai.request.schema"),
    b(e, f.AI_MODEL_ID_ATTRIBUTE, c.GEN_AI_REQUEST_MODEL_ATTRIBUTE),
    Array.isArray(e[f.AI_VALUES_ATTRIBUTE]))
  ) {
    const t = e[f.AI_VALUES_ATTRIBUTE].map((e) => {
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    });
    e[c.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE] =
      1 === t.length ? t[0] : JSON.stringify(t);
  }
  !(function (e) {
    const t = e[f.AI_RESPONSE_PROVIDER_METADATA_ATTRIBUTE];
    if (t)
      try {
        const n = S(JSON.parse(t));
        for (const [t, r] of Object.entries(n))
          (t === c.GEN_AI_CONVERSATION_ID_ATTRIBUTE && e[t]) || (e[t] = r);
      } catch {}
  })(e);
  for (const t of Object.keys(e))
    Array.isArray(e[t]) && (e[t] = JSON.stringify(e[t])),
      t.startsWith("ai.") && b(e, t, `vercel.${t}`);
}
function v(e) {
  const { data: t, origin: n } = e;
  "auto.vercelai.otel" === n &&
    (e.status && "ok" !== e.status && (e.status = "internal_error"), y(t));
}
function b(e, t, n) {
  null != e[t] && ((e[n] = e[t]), delete e[t]);
}
function S(e) {
  const t = {};
  if (!e || "object" != typeof e) return t;
  const n = e,
    r = n.openai ?? n.azure;
  if (
    (r &&
      (_(t, c.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, r.cachedPromptTokens),
      _(t, "gen_ai.usage.output_tokens.reasoning", r.reasoningTokens),
      _(
        t,
        "gen_ai.usage.output_tokens.prediction_accepted",
        r.acceptedPredictionTokens,
      ),
      _(
        t,
        "gen_ai.usage.output_tokens.prediction_rejected",
        r.rejectedPredictionTokens,
      ),
      _(t, c.GEN_AI_CONVERSATION_ID_ATTRIBUTE, r.responseId)),
    n.anthropic)
  ) {
    const e =
      n.anthropic.usage?.cache_read_input_tokens ??
      n.anthropic.cacheReadInputTokens;
    _(t, c.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, e);
    const r =
      n.anthropic.usage?.cache_creation_input_tokens ??
      n.anthropic.cacheCreationInputTokens;
    _(t, c.GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, r);
  }
  return (
    n.bedrock?.usage &&
      (_(
        t,
        c.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
        n.bedrock.usage.cacheReadInputTokens,
      ),
      _(
        t,
        c.GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE,
        n.bedrock.usage.cacheWriteInputTokens,
      )),
    n.deepseek &&
      (_(
        t,
        c.GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE,
        n.deepseek.promptCacheHitTokens,
      ),
      _(
        t,
        "gen_ai.usage.input_tokens.cache_miss",
        n.deepseek.promptCacheMissTokens,
      )),
    t
  );
}
function _(e, t, n) {
  null != n && (e[t] = n);
}
(t.addVercelAiProcessors = function (e) {
  e.on("spanStart", h),
    e.addEventProcessor(Object.assign(m, { id: "VercelAiEventProcessor" })),
    e.on("processSpan", (e) => {
      !(function (e) {
        const t = e.attributes;
        if ("auto.vercelai.otel" === t?.[o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]) {
          if (
            (y(t),
            "gen_ai.execute_tool" === t[o.SEMANTIC_ATTRIBUTE_SENTRY_OP] &&
              e.parent_span_id)
          ) {
            const n = u.toolDescriptionMap.get(e.parent_span_id);
            if (n) {
              const e = t[c.GEN_AI_TOOL_NAME_ATTRIBUTE];
              if ("string" == typeof e) {
                const r = n.get(e);
                r && (t[c.GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE] = r);
              }
            }
          }
          u.toolDescriptionMap.delete(e.span_id);
        }
      })(e);
    });
}),
  (t.getProviderMetadataAttributes = S),
  (t.processVercelAiSpanAttributes = y);
