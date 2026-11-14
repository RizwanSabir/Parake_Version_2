// vendor/other/module-1899.js — webpack module 1899
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/other/module-15946 */),
  o = n(12724 /* vendor/other/module-12724 */),
  i = n(75122 /* vendor/other/module-75122 */),
  s = n(19648 /* vendor/other/module-19648 */),
  a = n(77481 /* vendor/other/module-77481 */),
  c = n(36648 /* vendor/other/module-36648 */),
  u = n(48854 /* vendor/other/module-48854 */),
  l = n(77962 /* vendor/other/module-77962 */),
  d = n(97627 /* vendor/other/module-97627 */),
  p = n(58190 /* vendor/other/module-58190 */),
  f = n(85878 /* vendor/other/module-85878 */);
let h = !1;
const g = "__sentry_patched__";
function m(e) {
  const t = {
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: p.LANGGRAPH_ORIGIN,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.create_agent",
    [c.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "create_agent",
  };
  return (
    e && (t[c.GEN_AI_AGENT_NAME_ATTRIBUTE] = e),
    {
      op: "gen_ai.create_agent",
      name: e ? `create_agent ${e}` : "create_agent",
      attributes: t,
    }
  );
}
function _(e, t) {
  if (Object.prototype.hasOwnProperty.call(e, g)) return e;
  const n = l.createLangChainCallbackHandler(t),
    o = new Proxy(e, {
      apply: (e, o, i) =>
        h
          ? Reflect.apply(e, o, i)
          : a.startSpan(m(), (a) => {
              try {
                const r = Reflect.apply(e, o, i),
                  s = i.length > 0 ? i[0] : {};
                s?.name &&
                  "string" == typeof s.name &&
                  (a.setAttribute(c.GEN_AI_AGENT_NAME_ATTRIBUTE, s.name),
                  a.updateName(`create_agent ${s.name}`));
                const u = r.invoke;
                return (
                  u &&
                    "function" == typeof u &&
                    (r.invoke = S(u.bind(r), r, s, t, void 0, n)),
                  r
                );
              } catch (e) {
                throw (
                  (a.setStatus({
                    code: s.SPAN_STATUS_ERROR,
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
  return Object.defineProperty(o, g, { value: !0, enumerable: !1 }), o;
}
function S(e, t, n, l, h, g) {
  return new Proxy(e, {
    apply(e, m, _) {
      const S = h?.modelName ?? h?.model;
      return a.startSpan(
        {
          op: "gen_ai.invoke_agent",
          name: "invoke_agent",
          attributes: {
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: p.LANGGRAPH_ORIGIN,
            [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]:
              c.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE,
            [c.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "invoke_agent",
          },
        },
        async (o) => {
          try {
            const r = n?.name;
            r &&
              "string" == typeof r &&
              (o.setAttribute(c.GEN_AI_PIPELINE_NAME_ATTRIBUTE, r),
              o.setAttribute(c.GEN_AI_AGENT_NAME_ATTRIBUTE, r),
              o.updateName(`invoke_agent ${r}`)),
              S && o.setAttribute(c.GEN_AI_REQUEST_MODEL_ATTRIBUTE, S);
            const s = _.length > 1 ? _[1] : void 0,
              a = s?.configurable,
              p = a?.thread_id;
            if (
              (p &&
                "string" == typeof p &&
                o.setAttribute(c.GEN_AI_CONVERSATION_ID_ATTRIBUTE, p),
              g)
            ) {
              const e = _[1] ?? {};
              _[1] = e;
              const t = e.metadata ?? {};
              (e.metadata = {
                ...t,
                __sentry_langgraph__: !0,
                ...("string" == typeof r ? { lc_agent_name: r } : {}),
              }),
                (e.callbacks = d._INTERNAL_mergeLangChainCallbackHandler(
                  e.callbacks,
                  g,
                ));
            }
            const h = f.extractToolsFromCompiledGraph(t);
            h &&
              o.setAttribute(
                c.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE,
                JSON.stringify(h),
              );
            const E = l.recordInputs,
              y = l.recordOutputs,
              T = _.length > 0 ? (_[0]?.messages ?? []) : [];
            if (T && E) {
              const e = d.normalizeLangChainMessages(T),
                { systemInstructions: t, filteredMessages: n } =
                  u.extractSystemInstructions(e);
              t && o.setAttribute(c.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, t);
              const r = u.shouldEnableTruncation(l.enableTruncation),
                s = Array.isArray(n) ? n.length : 0;
              o.setAttributes({
                [c.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: r
                  ? u.getTruncatedJsonString(n)
                  : i.stringify(n),
                [c.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: s,
              });
            }
            const b = await Reflect.apply(e, m, _);
            return y && f.setResponseAttributes(o, T ?? null, b), b;
          } catch (e) {
            throw (
              (o.setStatus({
                code: s.SPAN_STATUS_ERROR,
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
function E(e, t) {
  return (e.compile = _(e.compile, u.resolveAIRecordingOptions(t))), e;
}
const y = E;
(t._INTERNAL_getLangGraphCreateAgentSpanOptions = m),
  (t.instrumentCompiledGraphInvoke = S),
  (t.instrumentCreateReactAgent = function (e, t) {
    if (Object.prototype.hasOwnProperty.call(e, g)) return e;
    const n = u.resolveAIRecordingOptions(t),
      r = l.createLangChainCallbackHandler(n),
      o = new Proxy(e, {
        apply(e, t, o) {
          const i = f.extractLLMFromParams(o),
            s = f.extractAgentNameFromParams(o),
            a = o[0];
          let c;
          a &&
            Array.isArray(a.tools) &&
            a.tools.length > 0 &&
            f.wrapToolsWithSpans(a.tools, n, s ?? void 0),
            (h = !0);
          try {
            c = Reflect.apply(e, t, o);
          } finally {
            h = !1;
          }
          const u = c.invoke;
          if (u && "function" == typeof u) {
            const e = {};
            s && (e.name = s), (c.invoke = S(u.bind(c), c, e, n, i, r));
          }
          return c;
        },
      });
    return Object.defineProperty(o, g, { value: !0, enumerable: !1 }), o;
  }),
  (t.instrumentLangGraph = y),
  (t.instrumentStateGraph = E),
  (t.instrumentStateGraphCompile = _);
