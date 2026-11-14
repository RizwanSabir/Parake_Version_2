// vendor/module-79382.js — webpack module 79382
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(36648 /* vendor/module-36648 */),
  o = n(48854 /* vendor/module-48854 */),
  i = n(75122 /* vendor/module-75122 */),
  a = n(28750 /* vendor/module-28750 */),
  s = n(54061 /* vendor/module-54061 */);
function l(e, t) {
  const n = t.get(e.span_id);
  n &&
    e.data &&
    (n.inputTokens > 0 &&
      (e.data[r.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = n.inputTokens),
    n.outputTokens > 0 &&
      (e.data[r.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = n.outputTokens),
    (n.inputTokens > 0 || n.outputTokens > 0) &&
      (e.data["gen_ai.usage.total_tokens"] = n.inputTokens + n.outputTokens));
}
function c(e) {
  return e.filter(
    (e) => !!e && "object" == typeof e && "role" in e && "content" in e,
  );
}
function u(e) {
  try {
    const t = JSON.parse(e);
    if (t && "object" == typeof t) {
      let { messages: e } = t;
      const { prompt: n, system: r } = t,
        o = [];
      if (
        ("string" == typeof r && o.push({ role: "system", content: r }),
        "string" == typeof e)
      )
        try {
          e = JSON.parse(e);
        } catch {}
      if (Array.isArray(e)) return o.push(...c(e)), o;
      if (Array.isArray(n)) return o.push(...c(n)), o;
      if (
        ("string" == typeof n && o.push({ role: "user", content: n }),
        o.length > 0)
      )
        return o;
    }
  } catch {}
  return [];
}
(t._INTERNAL_cleanupToolCallSpanContext = function (e) {
  a.toolCallSpanContextMap.delete(e);
}),
  (t._INTERNAL_getSpanContextForToolCallId = function (e) {
    return a.toolCallSpanContextMap.get(e);
  }),
  (t.accumulateTokensForParent = function (e, t) {
    const n = e.parent_span_id;
    if (!n) return;
    const o = e.data[r.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE],
      i = e.data[r.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
    if ("number" == typeof o || "number" == typeof i) {
      const e = t.get(n) || { inputTokens: 0, outputTokens: 0 };
      "number" == typeof o && (e.inputTokens += o),
        "number" == typeof i && (e.outputTokens += i),
        t.set(n, e);
    }
  }),
  (t.applyAccumulatedTokens = l),
  (t.applyToolDescriptionsAndTokens = function (e, t) {
    const n = (function (e) {
      const t = new Map();
      for (const n of e) {
        const e = n.data[r.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE];
        if ("string" == typeof e)
          try {
            const n = JSON.parse(e);
            for (const e of n)
              e.name &&
                e.description &&
                !t.has(e.name) &&
                t.set(e.name, e.description);
          } catch {}
      }
      return t;
    })(e);
    for (const o of e) {
      if ("gen_ai.execute_tool" === o.op) {
        const e = o.data[r.GEN_AI_TOOL_NAME_ATTRIBUTE];
        if ("string" == typeof e) {
          const t = n.get(e);
          t && (o.data[r.GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE] = t);
        }
      }
      "gen_ai.invoke_agent" === o.op && l(o, t);
    }
  }),
  (t.convertAvailableToolsToJsonString = function (e) {
    const t = e.map((e) => {
      if ("string" == typeof e)
        try {
          return JSON.parse(e);
        } catch {
          return e;
        }
      return e;
    });
    return JSON.stringify(t);
  }),
  (t.convertUserInputToMessagesFormat = u),
  (t.requestMessagesFromPrompt = function (e, t, n) {
    if (
      "string" != typeof t[s.AI_PROMPT_ATTRIBUTE] ||
      t[r.GEN_AI_INPUT_MESSAGES_ATTRIBUTE] ||
      t[s.AI_PROMPT_MESSAGES_ATTRIBUTE]
    ) {
      if ("string" == typeof t[s.AI_PROMPT_MESSAGES_ATTRIBUTE]) {
        const a = t[s.AI_PROMPT_MESSAGES_ATTRIBUTE];
        try {
          const t = JSON.parse(a);
          if (Array.isArray(t)) {
            const { systemInstructions: l, filteredMessages: c } =
              o.extractSystemInstructions(t);
            l && e.setAttribute(r.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, l);
            const u = Array.isArray(c) ? c.length : 0,
              d =
                n || c !== t
                  ? n
                    ? o.getTruncatedJsonString(c)
                    : i.stringify(c)
                  : a;
            e.setAttributes({
              [s.AI_PROMPT_MESSAGES_ATTRIBUTE]: d,
              [r.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: d,
              [r.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: u,
            });
          }
        } catch {}
      }
    } else {
      const a = u(t[s.AI_PROMPT_ATTRIBUTE]);
      if (a.length) {
        const { systemInstructions: t, filteredMessages: l } =
          o.extractSystemInstructions(a);
        t && e.setAttribute(r.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, t);
        const c = Array.isArray(l) ? l.length : 0,
          u = n ? o.getTruncatedJsonString(l) : i.stringify(l);
        e.setAttributes({
          [s.AI_PROMPT_ATTRIBUTE]: u,
          [r.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: u,
          [r.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: c,
        });
      }
    }
  });
