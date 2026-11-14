// vendor/other/module-97627.js — webpack module 97627
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(12724 /* vendor/other/module-12724 */),
  o = n(75122 /* vendor/other/module-75122 */),
  i = n(36648 /* vendor/other/module-36648 */),
  s = n(23693 /* vendor/other/module-23693 */),
  a = n(48854 /* vendor/other/module-48854 */),
  c = n(18523 /* vendor/other/module-18523 */),
  u = (e, t, n) => {
    null != n && (e[t] = n);
  },
  l = (e, t, n) => {
    const r = Number(n);
    Number.isNaN(r) || (e[t] = r);
  };
function d(e) {
  if (Array.isArray(e))
    try {
      const t = e.map((e) =>
        e && "object" == typeof e && s.isContentMedia(e)
          ? s.stripInlineMediaFromSingleMessage(e)
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
  return c.ROLE_MAP[t] ?? t;
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
function g(e, t, n) {
  const r = {},
    o = "kwargs" in e ? e.kwargs : void 0,
    s = t?.temperature ?? n?.ls_temperature ?? o?.temperature;
  l(r, i.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE, s);
  const a = t?.max_tokens ?? n?.ls_max_tokens ?? o?.max_tokens;
  l(r, i.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE, a);
  const c = t?.top_p ?? o?.top_p;
  l(r, i.GEN_AI_REQUEST_TOP_P_ATTRIBUTE, c);
  const d = t?.frequency_penalty;
  l(r, i.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE, d);
  const p = t?.presence_penalty;
  return (
    l(r, i.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE, p),
    t &&
      "stream" in t &&
      u(r, i.GEN_AI_REQUEST_STREAM_ATTRIBUTE, Boolean(t.stream)),
    r
  );
}
function m(e, t, n, s, a) {
  return {
    [i.GEN_AI_SYSTEM_ATTRIBUTE]: o.stringify(e ?? "langchain", String),
    [i.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "chat",
    [i.GEN_AI_REQUEST_MODEL_ATTRIBUTE]: o.stringify(t, String),
    [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c.LANGCHAIN_ORIGIN,
    ...g(n, s, a),
  };
}
function _(e) {
  return "object" == typeof e && "SentryCallbackHandler" === e?.name;
}
function S(e) {
  return e.some(_);
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
    if (S(e.handlers ?? [])) return e;
    const n = e.copy();
    return n.addHandler(t, !0), n;
  }
  const n = Array.isArray(e) ? e : [e];
  return S(n) ? e : [...n, t];
}),
  (t.extractChatModelRequestAttributes = function (e, t, n, r, s, c) {
    const l = m(
      c?.ls_provider ?? e.id?.[2],
      s?.model ?? c?.ls_model_name ?? "unknown",
      e,
      s,
      c,
    );
    if (n && Array.isArray(t) && t.length > 0) {
      const e = h(t.flat()),
        { systemInstructions: n, filteredMessages: s } =
          a.extractSystemInstructions(e);
      n && u(l, i.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, n);
      const c = Array.isArray(s) ? s.length : 0;
      u(l, i.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, c),
        u(
          l,
          i.GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
          r ? a.getTruncatedJsonString(s) : o.stringify(s),
        );
    }
    return l;
  }),
  (t.extractLLMRequestAttributes = function (e, t, n, r, s, c) {
    const l = c?.ls_provider,
      d = m(l, s?.model ?? c?.ls_model_name ?? "unknown", e, s, c);
    if (n && Array.isArray(t) && t.length > 0) {
      u(d, i.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, t.length);
      const e = t.map((e) => ({ role: "user", content: e }));
      u(
        d,
        i.GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
        r ? a.getTruncatedJsonString(e) : o.stringify(e),
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
          u(
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
            u(
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
          u(n, i.GEN_AI_RESPONSE_TEXT_ATTRIBUTE, o.stringify(t, String));
      }
    }
    !(function (e, t) {
      if (!e) return;
      const n = e.tokenUsage,
        r = e.usage;
      if (n)
        l(t, i.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, n.promptTokens),
          l(t, i.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, n.completionTokens),
          l(t, i.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, n.totalTokens);
      else if (r) {
        l(t, i.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, r.input_tokens),
          l(t, i.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, r.output_tokens);
        const e = Number(r.input_tokens),
          n = Number(r.output_tokens),
          o = (Number.isNaN(e) ? 0 : e) + (Number.isNaN(n) ? 0 : n);
        o > 0 && l(t, i.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, o),
          void 0 !== r.cache_creation_input_tokens &&
            l(
              t,
              i.GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_ATTRIBUTE,
              r.cache_creation_input_tokens,
            ),
          void 0 !== r.cache_read_input_tokens &&
            l(
              t,
              i.GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_ATTRIBUTE,
              r.cache_read_input_tokens,
            );
      }
    })(e.llmOutput, n);
    const r = e.llmOutput,
      s = e.generations?.[0]?.[0],
      a = s?.message,
      c = r?.model_name ?? r?.model ?? a?.response_metadata?.model_name;
    c && u(n, i.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, c);
    const d = r?.id ?? a?.id;
    d && u(n, i.GEN_AI_RESPONSE_ID_ATTRIBUTE, d);
    const p = r?.stop_reason ?? a?.response_metadata?.finish_reason;
    return (
      p &&
        u(n, i.GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE, o.stringify(p, String)),
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
