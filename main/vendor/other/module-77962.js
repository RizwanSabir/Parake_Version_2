// vendor/other/module-77962.js — webpack module 77962
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/other/module-15946 */),
  o = n(12724 /* vendor/other/module-12724 */),
  i = n(19648 /* vendor/other/module-19648 */),
  s = n(77481 /* vendor/other/module-77481 */),
  a = n(36648 /* vendor/other/module-36648 */),
  c = n(48854 /* vendor/other/module-48854 */),
  u = n(18523 /* vendor/other/module-18523 */),
  l = n(97627 /* vendor/other/module-97627 */);
t.createLangChainCallbackHandler = function (e = {}) {
  const { recordInputs: t, recordOutputs: n } = c.resolveAIRecordingOptions(e),
    d = c.shouldEnableTruncation(e.enableTruncation),
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
      handleLLMStart(e, n, r, i, c, u, f, h) {
        const g = l.getInvocationParams(u),
          m = l.extractLLMRequestAttributes(e, n, t, d, g, f),
          _ = m[a.GEN_AI_REQUEST_MODEL_ATTRIBUTE],
          S = m[a.GEN_AI_OPERATION_NAME_ATTRIBUTE];
        s.startSpanManual(
          {
            name: `${S} ${_}`,
            op: "gen_ai.chat",
            attributes: {
              ...l.getAgentNameFromMetadata(f),
              ...m,
              [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.chat",
            },
          },
          (e) => (p.set(r, e), e),
        );
      },
      handleChatModelStart(e, n, r, i, c, u, f, h) {
        const g = l.getInvocationParams(u),
          m = l.extractChatModelRequestAttributes(e, n, t, d, g, f),
          _ = l.extractToolDefinitions(c);
        _ && (m[a.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = _);
        const S = m[a.GEN_AI_REQUEST_MODEL_ATTRIBUTE],
          E = m[a.GEN_AI_OPERATION_NAME_ATTRIBUTE];
        s.startSpanManual(
          {
            name: `${E} ${S}`,
            op: "gen_ai.chat",
            attributes: {
              ...l.getAgentNameFromMetadata(f),
              ...m,
              [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.chat",
            },
          },
          (e) => (p.set(r, e), e),
        );
      },
      handleLLMEnd(e, t, r, o, i) {
        const s = p.get(t);
        if (s?.isRecording()) {
          const r = l.extractLlmResponseAttributes(e, n);
          r && s.setAttributes(r), f(t);
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
              type: `${u.LANGCHAIN_ORIGIN}.llm_error_handler`,
            },
          });
      },
      handleChainStart(e, n, r, i, a, c, u, l) {
        if (c?.__sentry_langgraph__) return;
        const d = l || e.name || "unknown_chain",
          f = {
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.langchain",
            "langchain.chain.name": d,
          };
        t && (f["langchain.chain.inputs"] = JSON.stringify(n)),
          s.startSpanManual(
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
              type: `${u.LANGCHAIN_ORIGIN}.chain_error_handler`,
            },
          });
      },
      handleToolStart(e, n, r, i, c, d, f) {
        if (d?.__sentry_langgraph__) return;
        const h = f || e.name || "unknown_tool",
          g = {
            ...l.getAgentNameFromMetadata(d),
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: u.LANGCHAIN_ORIGIN,
            [a.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "execute_tool",
            [a.GEN_AI_TOOL_NAME_ATTRIBUTE]: h,
          };
        t && (g[a.GEN_AI_TOOL_INPUT_ATTRIBUTE] = n),
          s.startSpanManual(
            {
              name: `execute_tool ${h}`,
              op: "gen_ai.execute_tool",
              attributes: {
                ...g,
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
              [a.GEN_AI_TOOL_OUTPUT_ATTRIBUTE]:
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
              type: `${u.LANGCHAIN_ORIGIN}.tool_error_handler`,
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
