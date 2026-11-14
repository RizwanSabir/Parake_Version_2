// vendor/other/module-20882.js — webpack module 20882
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(85834 /* vendor/other/module-85834 */),
  a = n(12417 /* vendor/other/module-12417 */),
  c = "Anthropic_AI",
  u = [
    {
      channel: s.CHANNELS.ANTHROPIC_CHAT,
      operation: "chat",
      methodPath: "messages.create",
      stream: "async-iterable",
    },
    {
      channel: s.CHANNELS.ANTHROPIC_MODELS,
      operation: "models",
      methodPath: "models.retrieve",
      stream: "none",
    },
    {
      channel: s.CHANNELS.ANTHROPIC_MESSAGES_STREAM,
      operation: "chat",
      methodPath: "messages.stream",
      stream: "message-stream",
    },
  ];
let l = !1;
function d(e, t, n, r) {
  const i = e.arguments ?? [];
  if (o._INTERNAL_shouldSkipAiProviderWrapping(c)) return;
  const s = i[1];
  if ("stream" === s?.headers?.["X-Stainless-Helper-Method"]) return;
  const a = "object" == typeof i[0] && null !== i[0] ? i[0] : void 0,
    { recordInputs: u } = o.resolveAIRecordingOptions(r),
    l = o.shouldEnableTruncation(r.enableTruncation),
    d = o.extractAnthropicRequestAttributes(i, n, t),
    p = d[o.GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
  d[o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = "auto.ai.orchestrion.anthropic";
  const f = o.startInactiveSpan({
    name: `${t} ${p}`,
    op: `gen_ai.${t}`,
    attributes: d,
  });
  return u && a && o.addAnthropicRequestAttributes(f, a, l), f;
}
function p(e, t, n, r) {
  const { recordOutputs: i } = o.resolveAIRecordingOptions(r),
    s = t.result;
  if (
    "async-iterable" === n &&
    (a = s) &&
    "function" == typeof a[Symbol.asyncIterator]
  ) {
    const t = s[Symbol.asyncIterator].bind(s),
      n = o.instrumentAsyncIterableStream({ [Symbol.asyncIterator]: t }, e, i);
    return (s[Symbol.asyncIterator] = () => n), !0;
  }
  var a;
  return !(
    "message-stream" !== n ||
    !(function (e) {
      return !!e && "function" == typeof e.on;
    })(s) ||
    (o.instrumentMessageStream(s, e, i), 0)
  );
}
const f = o.defineIntegration((e = {}) => ({
  name: c,
  setupOnce() {
    r.tracingChannel &&
      !l &&
      ((l = !0),
      o.waitForTracingChannelBinding(() => {
        for (const { channel: t, operation: n, methodPath: s, stream: c } of u)
          i.DEBUG_BUILD &&
            o.debug.log(
              `[orchestrion:anthropic] subscribing to channel "${t}"`,
            ),
            a.bindTracingChannelToSpan(
              r.tracingChannel(t),
              (t) => d(t, n, s, e),
              {
                beforeSpanEnd: (t, n) => {
                  o.addAnthropicResponseAttributes(
                    t,
                    n.result,
                    o.resolveAIRecordingOptions(e).recordOutputs,
                  );
                },
                deferSpanEnd: ({ span: t, data: n }) => p(t, n, c, e),
              },
            );
      }));
  },
}));
t.anthropicChannelIntegration = f;
