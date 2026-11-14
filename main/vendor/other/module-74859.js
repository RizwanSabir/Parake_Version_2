// vendor/other/module-74859.js — webpack module 74859
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(7410 /* vendor/other/module-7410 */),
  c = n(12417 /* vendor/other/module-12417 */),
  u = o.LANGCHAIN_INTEGRATION_NAME,
  l = [
    o.OPENAI_INTEGRATION_NAME,
    o.ANTHROPIC_AI_INTEGRATION_NAME,
    o.GOOGLE_GENAI_INTEGRATION_NAME,
  ];
let d = !1;
function p() {
  o._INTERNAL_skipAiProviderWrapping(l);
}
function f(e, t) {
  p();
  const n = (e.arguments ?? [])[0];
  return o.startInactiveSpan(
    o._INTERNAL_getLangChainEmbeddingsSpanOptions(e.self, n, t),
  );
}
const h = o.defineIntegration((e = {}) => ({
  name: u,
  setupOnce() {
    if (!r.tracingChannel || d) return;
    d = !0;
    const t = o.createLangChainCallbackHandler(e),
      n = (e) => {
        p();
        const n = e.arguments;
        if (!Array.isArray(n)) return;
        let r = n[1];
        (r && "object" == typeof r && !Array.isArray(r)) ||
          ((r = {}), (n[1] = r)),
          (r.callbacks = o._INTERNAL_mergeLangChainCallbackHandler(
            r.callbacks,
            t,
          ));
      };
    for (const e of [
      s.CHANNELS.LANGCHAIN_CHAT_MODEL_INVOKE,
      s.CHANNELS.LANGCHAIN_CHAT_MODEL_STREAM,
    ])
      i.DEBUG_BUILD &&
        o.debug.log(`[orchestrion:langchain] subscribing to channel "${e}"`),
        r.tracingChannel(e).start.subscribe(n);
    o.waitForTracingChannelBinding(() => {
      for (const t of a.langchainEmbeddingsChannels)
        i.DEBUG_BUILD &&
          o.debug.log(`[orchestrion:langchain] subscribing to channel "${t}"`),
          c.bindTracingChannelToSpan(r.tracingChannel(t), (t) => f(t, e), {
            captureError: () => ({
              mechanism: { handled: !1, type: "auto.ai.langchain" },
            }),
          });
    });
  },
}));
t.langChainChannelIntegration = h;
