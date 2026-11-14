// vendor/module-97627.js — webpack module 97627
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(12724 /* vendor/module-12724 */),
  o = n(75122 /* vendor/module-75122 */),
  i = n(36648 /* vendor/module-36648 */),
  a = n(23693 /* vendor/module-23693 */),
  s = n(48854 /* vendor/module-48854 */),
  l = n(18523 /* vendor/module-18523 */),
  c = (e, t, n) => {
    null != n && (e[t] = n);
  },
  u = (e, t, n) => {
    const r = Number(n);
    Number.isNaN(r) || (e[t] = r);
  };
function d(e) {
  if (Array.isArray(e))
    try {
      const t = e.map((e) =>
        e && "object" == typeof e && a.isContentMedia(e)
          ? a.stripInlineMediaFromSingleMessage(e)
          : e,
      );
      return JSON.stringify(t);
    } catch {
      return String(e);
    }
  return o.stringify(e, String);
}
function p(e) {
  const t = e.toLowerCase();
  return l.ROLE_MAP[t] ?? t;
}
function f(e) {
  return e.includes("System")
    ? "system"
    : e.includes("Human")
      ? "user"
      : e.includes("AI") || e.includes("Assistant")
        ? "assistant"
        : e.includes("Function")
          ? "function"
          : e.includes("Tool")
            ? "tool"
            : "user";
}
function h(e) {
  return e.map((e) => {
    const t = e._getType;
    if ("function" == typeof t)
      return { role: p(t.call(e)), content: d(e.content) };
    if (1 === e.lc && e.kwargs) {
      const t = e.id,
        n = Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "";
      return {
        role: p("string" == typeof n ? f(n) : "user"),
        content: d(e.kwargs?.content),
      };
    }
    if (e.type)
      return {
        role: p(String(e.type).toLowerCase()),
        content: d(e.content),
      };
    if (e.role) return { role: p(String(e.role)), content: d(e.content) };
    const n = e.constructor?.name;
    return n && "Object" !== n
      ? { role: p(f(n)), content: d(e.content) }
      : { role: "user", content: d(e.content) };
  });
}
function m(e, t, n) {
  const r = {},
    o = "kwargs" in e ? e.kwargs : void 0,
    a = t?.temperature ?? n?.ls_temperature ?? o?.temperature;
  u(r, i.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE, a);
  const s = t?.max_tokens ?? n?.ls_max_tokens ?? o?.max_tokens;
  u(r, i.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE, s);
  const l = t?.top_p ?? o?.top_p;
  u(r, i.GEN_AI_REQUEST_TOP_P_ATTRIBUTE, l);
  const d = t?.frequency_penalty;
  u(r, i.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE, d);
  const p = t?.presence_penalty;
  return (
    u(r, i.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE, p),
    t &&
      "stream" in t &&
      c(r, i.GEN_AI_REQUEST_STREAM_ATTRIBUTE, Boolean(t.stream)),
    r
  );
}
function g(e, t, n, a, s) {
  return {
    [i.GEN_AI_SYSTEM_ATTRIBUTE]: o.stringify(e ?? "langchain", String),
    [i.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "chat",
    [i.GEN_AI_REQUEST_MODEL_ATTRIBUTE]: o.stringify(t, String),
    [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: l.LANGCHAIN_ORIGIN,
    ...m(n, a, s),
  };
}
function y(e) {
  return "object" == typeof e && "SentryCallbackHandler" === e?.name;
}
function v(e) {
  return e.some(y);
}
(t._INTERNAL_mergeLangChainCallbackHandler = function (e, t) {
  if (!e) return [t];
  if (
    (function (e) {
      if (!e || "object" != typeof e) return !1;
      const t = e;
      return "function" == typeof t.addHandler && "function" == typeof t.copy;
    })(e)
  ) {
    if (v(e.handlers ?? [])) return e;
    const n = e.copy();
    return n.addHandler(t, !0), n;
  }
  const n = Array.isArray(e) ? e : [e];
  return v(n) ? e : [...n, t];
}),
  (t.extractChatModelRequestAttributes = function (e, t, n, r, a, l) {
    const u = g(
      l?.ls_provider ?? e.id?.[2],
      a?.model ?? l?.ls_model_name ?? "unknown",
      e,
      a,
      l,
    );
    if (n && Array.isArray(t) && t.length > 0) {
      const e = h(t.flat()),
        { systemInstructions: n, filteredMessages: a } =
          s.extractSystemInstructions(e);
      n && c(u, i.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, n);
      const l = Array.isArray(a) ? a.length : 0;
      c(u, i.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, l),
        c(
          u,
          i.GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
          r ? s.getTruncatedJsonString(a) : o.stringify(a),
        );
    }
    return u;
  }),
  (t.extractLLMRequestAttributes = function (e, t, n, r, a, l) {
    const u = l?.ls_provider,
      d = g(u, a?.model ?? l?.ls_model_name ?? "unknown", e, a, l);
    if (n && Array.isArray(t) && t.length > 0) {
      c(d, i.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, t.length);
      const e = t.map((e) => ({ role: "user", content: e }));
      c(
        d,
        i.GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
        r ? s.getTruncatedJsonString(e) : o.stringify(e),
      );
    }
    return d;
  }),
  (t.extractLlmResponseAttributes = function (e, t) {
    if (!e) return;
    const n = {};
    if (Array.isArray(e.generations)) {
      const r = e.generations
        .flat()
        .map((e) =>
          e.generationInfo?.finish_reason
            ? e.generationInfo.finish_reason
            : e.generation_info?.finish_reason
              ? e.generation_info.finish_reason
              : null,
        )
        .filter((e) => "string" == typeof e);
      if (
        (r.length > 0 &&
          c(
            n,
            i.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE,
            o.stringify(r, String),
          ),
        (function (e, t) {
          const n = [],
            r = e.flat();
          for (const e of r) {
            const t = e.message,
              r = t?.tool_calls;
            if (Array.isArray(r) && r.length > 0) n.push(...r);
            else {
              const t = e.message?.content;
              if (Array.isArray(t))
                for (const e of t) {
                  const t = e;
                  "tool_use" === t.type && n.push(t);
                }
            }
          }
          n.length > 0 &&
            c(
              t,
              i.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE,
              o.stringify(n, String),
            );
        })(e.generations, n),
        t)
      ) {
        const t = e.generations
          .flat()
          .map((e) => e.text ?? e.message?.content)
          .filter((e) => "string" == typeof e);
        t.length > 0 &&
          c(n, i.GEN_AI_RESPONSE_TEXT_ATTRIBUTE, o.stringify(t, String));
      }
    }
    !(function (e, t) {
      if (!e) return;
      const n = e.tokenUsage,
        r = e.usage;
      if (n)
        u(t, i.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, n.promptTokens),
          u(t, i.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, n.completionTokens),
          u(t, i.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, n.totalTokens);
      else if (r) {
        u(t, i.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, r.input_tokens),
          u(t, i.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, r.output_tokens);
        const e = Number(r.input_tokens),
          n = Number(r.output_tokens),
          o = (Number.isNaN(e) ? 0 : e) + (Number.isNaN(n) ? 0 : n);
        o > 0 && u(t, i.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, o),
          void 0 !== r.cache_creation_input_tokens &&
            u(
              t,
              i.GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_ATTRIBUTE,
              r.cache_creation_input_tokens,
            ),
          void 0 !== r.cache_read_input_tokens &&
            u(
              t,
              i.GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_ATTRIBUTE,
              r.cache_read_input_tokens,
            );
      }
    })(e.llmOutput, n);
    const r = e.llmOutput,
      a = e.generations?.[0]?.[0],
      s = a?.message,
      l = r?.model_name ?? r?.model ?? s?.response_metadata?.model_name;
    l && c(n, i.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, l);
    const d = r?.id ?? s?.id;
    d && c(n, i.GEN_AI_RESPONSE_ID_ATTRIBUTE, d);
    const p = r?.stop_reason ?? s?.response_metadata?.finish_reason;
    return (
      p &&
        c(n, i.GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE, o.stringify(p, String)),
      n
    );
  }),
  (t.extractToolDefinitions = function (e) {
    const t = e?.invocation_params?.tools ?? e?.options?.tools;
    if (!Array.isArray(t) || 0 === t.length) return;
    const n = t.map((e) => {
      const t = e.function;
      return {
        type: "function",
        name: e.name ?? t?.name ?? "",
        description: e.description ?? t?.description,
      };
    });
    return JSON.stringify(n);
  }),
  (t.getAgentNameFromMetadata = function (e) {
    const t = {},
      n = e?.lc_agent_name;
    return "string" == typeof n && (t[i.GEN_AI_AGENT_NAME_ATTRIBUTE] = n), t;
  }),
  (t.getInvocationParams = function (e) {
    if (e && !Array.isArray(e)) return e.invocation_params;
  }),
  (t.normalizeLangChainMessages = h);
