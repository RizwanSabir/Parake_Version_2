// vendor/module-1899.js — webpack module 1899
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/module-15946 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(75122 /* vendor/module-75122 */),
  a = n(19648 /* vendor/module-19648 */),
  s = n(77481 /* vendor/module-77481 */),
  l = n(36648 /* vendor/module-36648 */),
  c = n(48854 /* vendor/module-48854 */),
  u = n(77962 /* vendor/module-77962 */),
  d = n(97627 /* vendor/module-97627 */),
  p = n(58190 /* vendor/module-58190 */),
  f = n(85878 /* vendor/module-85878 */);
let h = !1;
const m = "__sentry_patched__";
function g(e) {
  const t = {
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: p.LANGGRAPH_ORIGIN,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.create_agent",
    [l.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "create_agent",
  };
  return (
    e && (t[l.GEN_AI_AGENT_NAME_ATTRIBUTE] = e),
    {
      op: "gen_ai.create_agent",
      name: e ? `create_agent ${e}` : "create_agent",
      attributes: t,
    }
  );
}
function y(e, t) {
  if (Object.prototype.hasOwnProperty.call(e, m)) return e;
  const n = u.createLangChainCallbackHandler(t),
    o = new Proxy(e, {
      apply: (e, o, i) =>
        h
          ? Reflect.apply(e, o, i)
          : s.startSpan(g(), (s) => {
              try {
                const r = Reflect.apply(e, o, i),
                  a = i.length > 0 ? i[0] : {};
                a?.name &&
                  "string" == typeof a.name &&
                  (s.setAttribute(l.GEN_AI_AGENT_NAME_ATTRIBUTE, a.name),
                  s.updateName(`create_agent ${a.name}`));
                const c = r.invoke;
                return (
                  c &&
                    "function" == typeof c &&
                    (r.invoke = v(c.bind(r), r, a, t, void 0, n)),
                  r
                );
              } catch (e) {
                throw (
                  (s.setStatus({
                    code: a.SPAN_STATUS_ERROR,
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
            }),
    });
  return Object.defineProperty(o, m, { value: !0, enumerable: !1 }), o;
}
function v(e, t, n, u, h, m) {
  return new Proxy(e, {
    apply(e, g, y) {
      const v = h?.modelName ?? h?.model;
      return s.startSpan(
        {
          op: "gen_ai.invoke_agent",
          name: "invoke_agent",
          attributes: {
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: p.LANGGRAPH_ORIGIN,
            [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]:
              l.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE,
            [l.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "invoke_agent",
          },
        },
        async (o) => {
          try {
            const r = n?.name;
            r &&
              "string" == typeof r &&
              (o.setAttribute(l.GEN_AI_PIPELINE_NAME_ATTRIBUTE, r),
              o.setAttribute(l.GEN_AI_AGENT_NAME_ATTRIBUTE, r),
              o.updateName(`invoke_agent ${r}`)),
              v && o.setAttribute(l.GEN_AI_REQUEST_MODEL_ATTRIBUTE, v);
            const a = y.length > 1 ? y[1] : void 0,
              s = a?.configurable,
              p = s?.thread_id;
            if (
              (p &&
                "string" == typeof p &&
                o.setAttribute(l.GEN_AI_CONVERSATION_ID_ATTRIBUTE, p),
              m)
            ) {
              const e = y[1] ?? {};
              y[1] = e;
              const t = e.metadata ?? {};
              (e.metadata = {
                ...t,
                __sentry_langgraph__: !0,
                ...("string" == typeof r ? { lc_agent_name: r } : {}),
              }),
                (e.callbacks = d._INTERNAL_mergeLangChainCallbackHandler(
                  e.callbacks,
                  m,
                ));
            }
            const h = f.extractToolsFromCompiledGraph(t);
            h &&
              o.setAttribute(
                l.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE,
                JSON.stringify(h),
              );
            const b = u.recordInputs,
              S = u.recordOutputs,
              _ = y.length > 0 ? (y[0]?.messages ?? []) : [];
            if (_ && b) {
              const e = d.normalizeLangChainMessages(_),
                { systemInstructions: t, filteredMessages: n } =
                  c.extractSystemInstructions(e);
              t && o.setAttribute(l.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, t);
              const r = c.shouldEnableTruncation(u.enableTruncation),
                a = Array.isArray(n) ? n.length : 0;
              o.setAttributes({
                [l.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: r
                  ? c.getTruncatedJsonString(n)
                  : i.stringify(n),
                [l.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: a,
              });
            }
            const x = await Reflect.apply(e, g, y);
            return S && f.setResponseAttributes(o, _ ?? null, x), x;
          } catch (e) {
            throw (
              (o.setStatus({
                code: a.SPAN_STATUS_ERROR,
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
}
function b(e, t) {
  return (e.compile = y(e.compile, c.resolveAIRecordingOptions(t))), e;
}
const S = b;
(t._INTERNAL_getLangGraphCreateAgentSpanOptions = g),
  (t.instrumentCompiledGraphInvoke = v),
  (t.instrumentCreateReactAgent = function (e, t) {
    if (Object.prototype.hasOwnProperty.call(e, m)) return e;
    const n = c.resolveAIRecordingOptions(t),
      r = u.createLangChainCallbackHandler(n),
      o = new Proxy(e, {
        apply(e, t, o) {
          const i = f.extractLLMFromParams(o),
            a = f.extractAgentNameFromParams(o),
            s = o[0];
          let l;
          s &&
            Array.isArray(s.tools) &&
            s.tools.length > 0 &&
            f.wrapToolsWithSpans(s.tools, n, a ?? void 0),
            (h = !0);
          try {
            l = Reflect.apply(e, t, o);
          } finally {
            h = !1;
          }
          const c = l.invoke;
          if (c && "function" == typeof c) {
            const e = {};
            a && (e.name = a), (l.invoke = v(c.bind(l), l, e, n, i, r));
          }
          return l;
        },
      });
    return Object.defineProperty(o, m, { value: !0, enumerable: !1 }), o;
  }),
  (t.instrumentLangGraph = S),
  (t.instrumentStateGraph = b),
  (t.instrumentStateGraphCompile = y);
