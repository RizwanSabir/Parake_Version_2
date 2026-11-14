// vendor/other/module-49645.js — webpack module 49645
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = [
    ...[
      "resources/chat/completions/completions.js",
      "resources/chat/completions/completions.mjs",
    ].map((e) => ({
      channelName: "chat",
      module: {
        name: "openai",
        versionRange: ">=4.0.0 <7",
        filePath: e,
      },
      functionQuery: {
        className: "Completions",
        methodName: "create",
        kind: "Auto",
      },
    })),
    ...[
      "resources/responses/responses.js",
      "resources/responses/responses.mjs",
    ].map((e) => ({
      channelName: "chat",
      module: {
        name: "openai",
        versionRange: ">=4.0.0 <7",
        filePath: e,
      },
      functionQuery: {
        className: "Responses",
        methodName: "create",
        kind: "Auto",
      },
    })),
    ...["resources/embeddings.js", "resources/embeddings.mjs"].map((e) => ({
      channelName: "embeddings",
      module: {
        name: "openai",
        versionRange: ">=4.0.0 <7",
        filePath: e,
      },
      functionQuery: {
        className: "Embeddings",
        methodName: "create",
        kind: "Auto",
      },
    })),
    ...[
      "resources/conversations/conversations.js",
      "resources/conversations/conversations.mjs",
    ].map((e) => ({
      channelName: "chat",
      module: {
        name: "openai",
        versionRange: ">=4.0.0 <7",
        filePath: e,
      },
      functionQuery: {
        className: "Conversations",
        methodName: "create",
        kind: "Auto",
      },
    })),
  ],
  i = r.toSubscribeInjections(o);
(t.openaiChannels = {
  OPENAI_CHAT: "orchestrion:openai:chat",
  OPENAI_EMBEDDINGS: "orchestrion:openai:embeddings",
}),
  (t.openaiConfig = o),
  (t.openaiSubscribeInjection = i);
