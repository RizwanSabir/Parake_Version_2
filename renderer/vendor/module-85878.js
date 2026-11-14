// vendor/module-85878.js — webpack module 85878
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/module-15946 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(19648 /* vendor/module-19648 */),
  a = n(77481 /* vendor/module-77481 */),
  s = n(36648 /* vendor/module-36648 */),
  l = n(97627 /* vendor/module-97627 */),
  c = n(58190 /* vendor/module-58190 */);
function u(e) {
  if (!e || 0 === e.length) return null;
  const t = [];
  for (const n of e)
    if (n && "object" == typeof n) {
      const e = n.tool_calls;
      e && Array.isArray(e) && t.push(...e);
    }
  return t.length > 0 ? t : null;
}
function d(e) {
  const t = e;
  let n = 0,
    r = 0,
    o = 0;
  if (t.usage_metadata && "object" == typeof t.usage_metadata) {
    const e = t.usage_metadata;
    return (
      "number" == typeof e.input_tokens && (n = e.input_tokens),
      "number" == typeof e.output_tokens && (r = e.output_tokens),
      "number" == typeof e.total_tokens && (o = e.total_tokens),
      { inputTokens: n, outputTokens: r, totalTokens: o }
    );
  }
  if (t.response_metadata && "object" == typeof t.response_metadata) {
    const e = t.response_metadata;
    if (e.tokenUsage && "object" == typeof e.tokenUsage) {
      const t = e.tokenUsage;
      "number" == typeof t.promptTokens && (n = t.promptTokens),
        "number" == typeof t.completionTokens && (r = t.completionTokens),
        "number" == typeof t.totalTokens && (o = t.totalTokens);
    }
  }
  return { inputTokens: n, outputTokens: r, totalTokens: o };
}
function p(e, t) {
  const n = t;
  if (n.response_metadata && "object" == typeof n.response_metadata) {
    const t = n.response_metadata;
    t.model_name &&
      "string" == typeof t.model_name &&
      e.setAttribute(s.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, t.model_name),
      t.finish_reason &&
        "string" == typeof t.finish_reason &&
        e.setAttribute(s.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, [
          t.finish_reason,
        ]);
  }
}
(t.extractAgentNameFromParams = function (e) {
  const t = e[0];
  return "object" == typeof t && t && "name" in t && "string" == typeof t.name
    ? t.name
    : null;
}),
  (t.extractLLMFromParams = function (e) {
    const t = e[0];
    if (
      "object" != typeof t ||
      !t ||
      !("llm" in t) ||
      !t.llm ||
      "object" != typeof t.llm
    )
      return null;
    const n = t.llm;
    return "string" != typeof n.modelName && "string" != typeof n.model
      ? null
      : n;
  }),
  (t.extractModelMetadata = p),
  (t.extractTokenUsageFromMessage = d),
  (t.extractToolCalls = u),
  (t.extractToolsFromCompiledGraph = function (e) {
    if (!e.builder?.nodes?.tools?.runnable?.tools) return null;
    const t = e.builder?.nodes?.tools?.runnable?.tools;
    return t && Array.isArray(t) && 0 !== t.length
      ? t.map((e) => ({
          name: e.lc_kwargs?.name,
          description: e.lc_kwargs?.description,
          schema: e.lc_kwargs?.schema,
        }))
      : null;
  }),
  (t.setResponseAttributes = function (e, t, n) {
    const r = n,
      o = r?.messages;
    if (!o || !Array.isArray(o)) return;
    const i = t?.length ?? 0,
      a = o.length > i ? o.slice(i) : [];
    if (0 === a.length) return;
    const c = u(a);
    c &&
      e.setAttribute(s.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(c));
    const f = l.normalizeLangChainMessages(a);
    e.setAttribute(s.GEN_AI_RESPONSE_TEXT_ATTRIBUTE, JSON.stringify(f));
    let h = 0,
      m = 0,
      g = 0;
    for (const t of a) {
      const n = d(t);
      (h += n.inputTokens),
        (m += n.outputTokens),
        (g += n.totalTokens),
        p(e, t);
    }
    h > 0 && e.setAttribute(s.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, h),
      m > 0 && e.setAttribute(s.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, m),
      g > 0 && e.setAttribute(s.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, g);
  }),
  (t.wrapToolsWithSpans = function (e, t, n) {
    const l = "__sentry_tool_wrapped__";
    for (const u of e) {
      if (!u || "object" != typeof u) continue;
      const e = u,
        d = e.invoke;
      if ("function" != typeof d || Object.prototype.hasOwnProperty.call(e, l))
        continue;
      const p = "string" == typeof e.name ? e.name : "unknown_tool",
        f = "string" == typeof e.description ? e.description : void 0,
        h = new Proxy(d, {
          apply(e, l, u) {
            const d = {
                [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c.LANGGRAPH_ORIGIN,
                [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]:
                  s.GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE,
                [s.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "execute_tool",
                [s.GEN_AI_TOOL_NAME_ATTRIBUTE]: p,
                [s.GEN_AI_TOOL_TYPE_ATTRIBUTE]: "function",
              },
              h = u[1],
              m = h?.metadata?.lc_agent_name ?? n;
            "string" == typeof m && (d[s.GEN_AI_AGENT_NAME_ATTRIBUTE] = m),
              f && (d[s.GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE] = f);
            const g = u[0];
            if (
              "object" == typeof g &&
              g &&
              ("id" in g &&
                "string" == typeof g.id &&
                (d[s.GEN_AI_TOOL_CALL_ID_ATTRIBUTE] = g.id),
              t.recordInputs)
            ) {
              const e = "args" in g && "object" == typeof g.args ? g.args : g;
              try {
                d[s.GEN_AI_TOOL_INPUT_ATTRIBUTE] = JSON.stringify(e);
              } catch {}
            }
            return a.startSpan(
              {
                op: s.GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE,
                name: `execute_tool ${p}`,
                attributes: d,
              },
              async (n) => {
                try {
                  const r = await Reflect.apply(e, l, u);
                  if (t.recordOutputs)
                    try {
                      const e =
                        r && "object" == typeof r && "content" in r
                          ? r.content
                          : r;
                      n.setAttribute(
                        s.GEN_AI_TOOL_OUTPUT_ATTRIBUTE,
                        "string" == typeof e ? e : JSON.stringify(e),
                      );
                    } catch {}
                  return r;
                } catch (e) {
                  throw (
                    (n.setStatus({
                      code: i.SPAN_STATUS_ERROR,
                      message: "internal_error",
                    }),
                    r.captureException(e, {
                      mechanism: {
                        handled: !1,
                        type: "auto.ai.langgraph.error",
                      },
                    }),
                    e)
                  );
                }
              },
            );
          },
        });
      (e.invoke = h),
        Object.defineProperty(e, l, { value: !0, enumerable: !1 });
    }
    return e;
  });
