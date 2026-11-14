// vendor/other/module-17186.js — webpack module 17186
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = [
    ...[
      "resources/messages/messages.js",
      "resources/messages/messages.mjs",
    ].flatMap((e) =>
      ["create", "countTokens"].map((t) => ({
        channelName: "chat",
        module: {
          name: "@anthropic-ai/sdk",
          versionRange: ">=0.19.2 <1",
          filePath: e,
        },
        functionQuery: {
          className: "Messages",
          methodName: t,
          kind: "Auto",
        },
      })),
    ),
    ...["resources/completions.js", "resources/completions.mjs"].map((e) => ({
      channelName: "chat",
      module: {
        name: "@anthropic-ai/sdk",
        versionRange: ">=0.19.2 <1",
        filePath: e,
      },
      functionQuery: {
        className: "Completions",
        methodName: "create",
        kind: "Auto",
      },
    })),
    ...[
      "resources/beta/messages/messages.js",
      "resources/beta/messages/messages.mjs",
    ].map((e) => ({
      channelName: "chat",
      module: {
        name: "@anthropic-ai/sdk",
        versionRange: ">=0.19.2 <1",
        filePath: e,
      },
      functionQuery: {
        className: "Messages",
        methodName: "create",
        kind: "Auto",
      },
    })),
    ...["resources/models.js", "resources/models.mjs"].map((e) => ({
      channelName: "models",
      module: {
        name: "@anthropic-ai/sdk",
        versionRange: ">=0.19.2 <1",
        filePath: e,
      },
      functionQuery: {
        className: "Models",
        methodName: "retrieve",
        kind: "Auto",
      },
    })),
    ...[
      "resources/messages/messages.js",
      "resources/messages/messages.mjs",
    ].map((e) => ({
      channelName: "messages-stream",
      module: {
        name: "@anthropic-ai/sdk",
        versionRange: ">=0.19.2 <1",
        filePath: e,
      },
      functionQuery: {
        className: "Messages",
        methodName: "stream",
        kind: "Sync",
      },
    })),
  ],
  i = r.toSubscribeInjections(o);
(t.anthropicAiChannels = {
  ANTHROPIC_CHAT: "orchestrion:@anthropic-ai/sdk:chat",
  ANTHROPIC_MODELS: "orchestrion:@anthropic-ai/sdk:models",
  ANTHROPIC_MESSAGES_STREAM: "orchestrion:@anthropic-ai/sdk:messages-stream",
}),
  (t.anthropicAiConfig = o),
  (t.anthropicAiSubscribeInjection = i);
