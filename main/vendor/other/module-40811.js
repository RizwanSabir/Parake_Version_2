// vendor/other/module-40811.js — webpack module 40811
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = [
    ...i(">=4.0.0 <7.0.0", "generateText", "generateText", "Async"),
    ...i(">=4.0.0 <7.0.0", "streamText", "streamText", "Sync"),
    ...i(">=4.0.0 <7.0.0", "generateObject", "generateObject", "Async"),
    ...i(">=4.0.0 <7.0.0", "embed", "embed", "Async"),
    ...i(">=4.0.0 <7.0.0", "embedMany", "embedMany", "Async"),
    ...i(
      ">=5.0.0 <7.0.0",
      "resolveLanguageModel",
      "resolveLanguageModel",
      "Sync",
    ),
    ...i(">=6.0.0 <7.0.0", "executeToolCall", "executeToolCall", "Async"),
  ];
function i(e, t, n, r) {
  return ["dist/index.js", "dist/index.mjs"].map((o) => ({
    channelName: t,
    module: { name: "ai", versionRange: e, filePath: o },
    functionQuery: { functionName: n, kind: r },
  }));
}
const s = r.toSubscribeInjections(o);
(t.vercelAiChannels = {
  VERCEL_AI_GENERATE_TEXT: "orchestrion:ai:generateText",
  VERCEL_AI_STREAM_TEXT: "orchestrion:ai:streamText",
  VERCEL_AI_GENERATE_OBJECT: "orchestrion:ai:generateObject",
  VERCEL_AI_EMBED: "orchestrion:ai:embed",
  VERCEL_AI_EMBED_MANY: "orchestrion:ai:embedMany",
  VERCEL_AI_EXECUTE_TOOL_CALL: "orchestrion:ai:executeToolCall",
  VERCEL_AI_RESOLVE_LANGUAGE_MODEL: "orchestrion:ai:resolveLanguageModel",
}),
  (t.vercelAiConfig = o),
  (t.vercelAiSubscribeInjection = s);
