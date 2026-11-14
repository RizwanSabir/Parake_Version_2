// vendor/other/module-90398.js — webpack module 90398
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = o.LANGGRAPH_INTEGRATION_NAME;
let u = !1,
  l = !1;
function d(e) {
  const t = (e ?? [])[0];
  return "object" == typeof t && null !== t ? t : void 0;
}
function p(e, t, n, r, i) {
  if (!e || "object" != typeof e) return;
  const s = e,
    a = s.invoke;
  "function" == typeof a &&
    (s.invoke = o.instrumentCompiledGraphInvoke(a.bind(s), s, t, n, r, i));
}
const f = o.defineIntegration((e = {}) => ({
  name: c,
  setupOnce() {
    if (!r.tracingChannel || u) return;
    u = !0;
    const t = o.resolveAIRecordingOptions(e),
      n = o.createLangChainCallbackHandler(t);
    o.waitForTracingChannelBinding(() => {
      i.DEBUG_BUILD &&
        o.debug.log(
          `[orchestrion:langgraph] subscribing to channel "${s.CHANNELS.LANGGRAPH_STATE_GRAPH_COMPILE}"`,
        ),
        a.bindTracingChannelToSpan(
          r.tracingChannel(s.CHANNELS.LANGGRAPH_STATE_GRAPH_COMPILE),
          (e) => {
            if (l) return;
            const t = d(e.arguments),
              n = "string" == typeof t?.name ? t.name : void 0;
            return o.startInactiveSpan(
              o._INTERNAL_getLangGraphCreateAgentSpanOptions(n),
            );
          },
          {
            beforeSpanEnd: (e, r) => {
              p(r.result, d(r.arguments) ?? {}, t, null, n);
            },
          },
        ),
        i.DEBUG_BUILD &&
          o.debug.log(
            `[orchestrion:langgraph] subscribing to channel "${s.CHANNELS.LANGGRAPH_CREATE_REACT_AGENT}"`,
          );
      const e = r.tracingChannel(s.CHANNELS.LANGGRAPH_CREATE_REACT_AGENT);
      e.start.subscribe((e) => {
        l = !0;
        try {
          const { arguments: n } = e,
            r = d(n);
          r &&
            Array.isArray(r.tools) &&
            r.tools.length > 0 &&
            o.wrapToolsWithSpans(
              r.tools,
              t,
              o.extractAgentNameFromParams(n) ?? void 0,
            );
        } catch (e) {
          i.DEBUG_BUILD &&
            o.debug.error(
              "[orchestrion:langgraph] failed to wrap createReactAgent tools",
              e,
            );
        }
      }),
        e.end.subscribe((e) => {
          l = !1;
          const { arguments: r, result: i } = e,
            s = o.extractAgentNameFromParams(r) ?? void 0;
          p(i, s ? { name: s } : {}, t, o.extractLLMFromParams(r), n);
        }),
        e.error.subscribe(() => {
          l = !1;
        });
    });
  },
}));
t.langGraphChannelIntegration = f;
