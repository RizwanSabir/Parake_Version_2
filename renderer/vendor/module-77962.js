// vendor/module-77962.js — webpack module 77962
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/module-15946 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(19648 /* vendor/module-19648 */),
  a = n(77481 /* vendor/module-77481 */),
  s = n(36648 /* vendor/module-36648 */),
  l = n(48854 /* vendor/module-48854 */),
  c = n(18523 /* vendor/module-18523 */),
  u = n(97627 /* vendor/module-97627 */);
t.createLangChainCallbackHandler = function (e = {}) {
  const { recordInputs: t, recordOutputs: n } = l.resolveAIRecordingOptions(e),
    d = l.shouldEnableTruncation(e.enableTruncation),
    p = new Map(),
    f = (e) => {
      const t = p.get(e);
      t?.isRecording() && (t.end(), p.delete(e));
    },
    h = {
      lc_serializable: !1,
      lc_namespace: ["langchain_core", "callbacks", "sentry"],
      lc_secrets: void 0,
      lc_attributes: void 0,
      lc_aliases: void 0,
      lc_serializable_keys: void 0,
      lc_id: ["langchain_core", "callbacks", "sentry"],
      lc_kwargs: {},
      name: "SentryCallbackHandler",
      ignoreLLM: !1,
      ignoreChain: !1,
      ignoreAgent: !1,
      ignoreRetriever: !1,
      ignoreCustomEvent: !1,
      raiseError: !1,
      awaitHandlers: !0,
      handleLLMStart(e, n, r, i, l, c, f, h) {
        const m = u.getInvocationParams(c),
          g = u.extractLLMRequestAttributes(e, n, t, d, m, f),
          y = g[s.GEN_AI_REQUEST_MODEL_ATTRIBUTE],
          v = g[s.GEN_AI_OPERATION_NAME_ATTRIBUTE];
        a.startSpanManual(
          {
            name: `${v} ${y}`,
            op: "gen_ai.chat",
            attributes: {
              ...u.getAgentNameFromMetadata(f),
              ...g,
              [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.chat",
            },
          },
          (e) => (p.set(r, e), e),
        );
      },
      handleChatModelStart(e, n, r, i, l, c, f, h) {
        const m = u.getInvocationParams(c),
          g = u.extractChatModelRequestAttributes(e, n, t, d, m, f),
          y = u.extractToolDefinitions(l);
        y && (g[s.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = y);
        const v = g[s.GEN_AI_REQUEST_MODEL_ATTRIBUTE],
          b = g[s.GEN_AI_OPERATION_NAME_ATTRIBUTE];
        a.startSpanManual(
          {
            name: `${b} ${v}`,
            op: "gen_ai.chat",
            attributes: {
              ...u.getAgentNameFromMetadata(f),
              ...g,
              [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.chat",
            },
          },
          (e) => (p.set(r, e), e),
        );
      },
      handleLLMEnd(e, t, r, o, i) {
        const a = p.get(t);
        if (a?.isRecording()) {
          const r = u.extractLlmResponseAttributes(e, n);
          r && a.setAttributes(r), f(t);
        }
      },
      handleLLMError(e, t) {
        const n = p.get(t);
        n?.isRecording() &&
          (n.setStatus({
            code: i.SPAN_STATUS_ERROR,
            message: "internal_error",
          }),
          f(t)),
          r.captureException(e, {
            mechanism: {
              handled: !1,
              type: `${c.LANGCHAIN_ORIGIN}.llm_error_handler`,
            },
          });
      },
      handleChainStart(e, n, r, i, s, l, c, u) {
        if (l?.__sentry_langgraph__) return;
        const d = u || e.name || "unknown_chain",
          f = {
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.langchain",
            "langchain.chain.name": d,
          };
        t && (f["langchain.chain.inputs"] = JSON.stringify(n)),
          a.startSpanManual(
            {
              name: `chain ${d}`,
              op: "gen_ai.invoke_agent",
              attributes: {
                ...f,
                [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.invoke_agent",
              },
            },
            (e) => (p.set(r, e), e),
          );
      },
      handleChainEnd(e, t) {
        const r = p.get(t);
        r?.isRecording() &&
          (n &&
            r.setAttributes({
              "langchain.chain.outputs": JSON.stringify(e),
            }),
          f(t));
      },
      handleChainError(e, t) {
        const n = p.get(t);
        n?.isRecording() &&
          (n.setStatus({
            code: i.SPAN_STATUS_ERROR,
            message: "internal_error",
          }),
          f(t)),
          r.captureException(e, {
            mechanism: {
              handled: !1,
              type: `${c.LANGCHAIN_ORIGIN}.chain_error_handler`,
            },
          });
      },
      handleToolStart(e, n, r, i, l, d, f) {
        if (d?.__sentry_langgraph__) return;
        const h = f || e.name || "unknown_tool",
          m = {
            ...u.getAgentNameFromMetadata(d),
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c.LANGCHAIN_ORIGIN,
            [s.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "execute_tool",
            [s.GEN_AI_TOOL_NAME_ATTRIBUTE]: h,
          };
        t && (m[s.GEN_AI_TOOL_INPUT_ATTRIBUTE] = n),
          a.startSpanManual(
            {
              name: `execute_tool ${h}`,
              op: "gen_ai.execute_tool",
              attributes: {
                ...m,
                [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.execute_tool",
              },
            },
            (e) => (p.set(r, e), e),
          );
      },
      handleToolEnd(e, t) {
        const r = p.get(t);
        if (r?.isRecording()) {
          if (n) {
            const t =
              e && "object" == typeof e && "content" in e ? e.content : e;
            r.setAttributes({
              [s.GEN_AI_TOOL_OUTPUT_ATTRIBUTE]:
                "string" == typeof t ? t : JSON.stringify(t),
            });
          }
          f(t);
        }
      },
      handleToolError(e, t) {
        const n = p.get(t);
        n?.isRecording() &&
          (n.setStatus({
            code: i.SPAN_STATUS_ERROR,
            message: "internal_error",
          }),
          f(t)),
          r.captureException(e, {
            mechanism: {
              handled: !1,
              type: `${c.LANGCHAIN_ORIGIN}.tool_error_handler`,
            },
          });
      },
      copy: () => h,
      toJSON: () => ({ lc: 1, type: "not_implemented", id: h.lc_id }),
      toJSONNotImplemented: () => ({
        lc: 1,
        type: "not_implemented",
        id: h.lc_id,
      }),
    };
  return h;
};
