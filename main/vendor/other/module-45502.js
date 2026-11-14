// vendor/other/module-45502.js — webpack module 45502
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = "OpenAI",
  u = [
    { channel: s.CHANNELS.OPENAI_CHAT, operation: "chat" },
    {
      channel: s.CHANNELS.OPENAI_EMBEDDINGS,
      operation: "embeddings",
    },
  ];
let l = !1;
function d(e, t, n) {
  if (o._INTERNAL_shouldSkipAiProviderWrapping(c)) return;
  const r = e.arguments ?? [],
    i = r[0],
    { recordInputs: s } = o.resolveAIRecordingOptions(n),
    a = o.shouldEnableTruncation(n.enableTruncation),
    u = o.extractOpenAiRequestAttributes(r, t);
  u[o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.orchestrion.openai";
  const l = i?.model || "unknown",
    d = o.startInactiveSpan({
      name: `${t} ${l}`,
      op: `gen_ai.${t}`,
      attributes: u,
    });
  return s && i && o.addOpenAiRequestAttributes(d, i, t, a), d;
}
function p(e, t, n) {
  const r = t.result;
  if (!(i = r) || "function" != typeof i[Symbol.asyncIterator]) return !1;
  var i;
  const { recordOutputs: s } = o.resolveAIRecordingOptions(n),
    a = r[Symbol.asyncIterator].bind(r),
    c = o.instrumentOpenAiStream({ [Symbol.asyncIterator]: a }, e, s ?? !1);
  return (r[Symbol.asyncIterator] = () => c), !0;
}
const f = o.defineIntegration((e = {}) => ({
  name: c,
  setupOnce() {
    r.tracingChannel &&
      !l &&
      ((l = !0),
      o.waitForTracingChannelBinding(() => {
        for (const { channel: t, operation: n } of u)
          i.DEBUG_BUILD &&
            o.debug.log(`[orchestrion:openai] subscribing to channel "${t}"`),
            a.bindTracingChannelToSpan(r.tracingChannel(t), (t) => d(t, n, e), {
              beforeSpanEnd: (t, n) => {
                o.addOpenAiResponseAttributes(
                  t,
                  n.result,
                  o.resolveAIRecordingOptions(e).recordOutputs,
                );
              },
              deferSpanEnd: ({ span: t, data: n }) => p(t, n, e),
            });
      }));
  },
}));
t.openaiChannelIntegration = f;
