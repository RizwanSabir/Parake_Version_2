// vendor/other/module-8561.js — webpack module 8561
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = ["dist/node/index.js", "dist/node/index.mjs", "dist/node/index.cjs"],
  i = [
    ...o.flatMap((e) =>
      ["generateContent", "generateContentStream"].map((t) => ({
        channelName: "generate-content",
        module: {
          name: "@google/genai",
          versionRange: ">=0.10.0 <2",
          filePath: e,
        },
        functionQuery: { expressionName: t, kind: "Auto" },
      })),
    ),
    ...o.map((e) => ({
      channelName: "embed-content",
      module: {
        name: "@google/genai",
        versionRange: ">=0.10.0 <2",
        filePath: e,
      },
      functionQuery: {
        className: "Models",
        methodName: "embedContent",
        kind: "Auto",
      },
    })),
    ...o.flatMap((e) =>
      ["sendMessage", "sendMessageStream"].map((t) => ({
        channelName: "chat",
        module: {
          name: "@google/genai",
          versionRange: ">=0.10.0 <2",
          filePath: e,
        },
        functionQuery: {
          className: "Chat",
          methodName: t,
          kind: "Auto",
        },
      })),
    ),
  ],
  s = r.toSubscribeInjections(i);
(t.googleGenAiChannels = {
  GOOGLE_GENAI_GENERATE_CONTENT: "orchestrion:@google/genai:generate-content",
  GOOGLE_GENAI_EMBED_CONTENT: "orchestrion:@google/genai:embed-content",
  GOOGLE_GENAI_CHAT: "orchestrion:@google/genai:chat",
}),
  (t.googleGenAiConfig = i),
  (t.googleGenAiSubscribeInjection = s);
