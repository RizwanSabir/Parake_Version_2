// vendor/other/module-74022.js — webpack module 74022
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = "Google_GenAI",
  u = "auto.ai.orchestrion.google_genai",
  l = [
    {
      channel: s.CHANNELS.GOOGLE_GENAI_GENERATE_CONTENT,
      operation: "generate_content",
    },
    {
      channel: s.CHANNELS.GOOGLE_GENAI_EMBED_CONTENT,
      operation: "embeddings",
    },
    { channel: s.CHANNELS.GOOGLE_GENAI_CHAT, operation: "chat" },
  ];
let d = !1;
function p(e, t, n) {
  if (o._INTERNAL_shouldSkipAiProviderWrapping(c)) return;
  if ("chat" !== t) {
    const e = o.getActiveSpan();
    if (e) {
      const { op: t, origin: n } = o.spanToJSON(e);
      if (n === u && "gen_ai.chat" === t) return;
    }
  }
  const r = (e.arguments ?? [])[0],
    { recordInputs: i } = o.resolveAIRecordingOptions(n),
    s = o.shouldEnableTruncation(n.enableTruncation),
    a = o.extractGoogleGenAIRequestAttributes(t, r, e.self),
    l = a[o.GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
  a[o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = u;
  const d = o.startInactiveSpan({
    name: `${t} ${l}`,
    op: `gen_ai.${t}`,
    attributes: a,
  });
  return i && r && o.addGoogleGenAIRequestAttributes(d, r, t, s), d;
}
function f(e, t, n) {
  const r = t.result;
  if (!(i = r) || "function" != typeof i[Symbol.asyncIterator]) return !1;
  var i;
  const { recordOutputs: s } = o.resolveAIRecordingOptions(n),
    a = r[Symbol.asyncIterator].bind(r),
    c = o.instrumentGoogleGenAIStream(
      { [Symbol.asyncIterator]: a },
      e,
      s ?? !1,
    );
  return (r[Symbol.asyncIterator] = () => c), !0;
}
const h = o.defineIntegration((e = {}) => ({
  name: c,
  setupOnce() {
    r.tracingChannel &&
      !d &&
      ((d = !0),
      o.waitForTracingChannelBinding(() => {
        for (const { channel: t, operation: n } of l)
          i.DEBUG_BUILD &&
            o.debug.log(
              `[orchestrion:google-genai] subscribing to channel "${t}"`,
            ),
            a.bindTracingChannelToSpan(r.tracingChannel(t), (t) => p(t, n, e), {
              beforeSpanEnd: (t, r) => {
                "embeddings" !== n &&
                  o.addGoogleGenAIResponseAttributes(
                    t,
                    r.result,
                    o.resolveAIRecordingOptions(e).recordOutputs,
                  );
              },
              deferSpanEnd: ({ span: t, data: n }) => f(t, n, e),
            });
      }));
  },
}));
t.googleGenAIChannelIntegration = h;
