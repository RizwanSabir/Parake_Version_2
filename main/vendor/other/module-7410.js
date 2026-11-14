// vendor/other/module-7410.js — webpack module 7410
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(22951 /* vendor/other/module-22951 */),
  o = "embedQuery",
  i = "embedDocuments",
  s = [
    {
      name: "@langchain/openai",
      versionRange: ">=0.1.0 <2.0.0",
      methods: [o, i],
    },
    {
      name: "@langchain/google-genai",
      versionRange: ">=0.1.0 <3.0.0",
      methods: [o, i],
    },
    {
      name: "@langchain/mistralai",
      versionRange: ">=0.1.0 <2.0.0",
      methods: [o, i],
    },
    {
      name: "@langchain/google-common",
      versionRange: ">=0.1.0 <3.0.0",
      methods: [i],
    },
  ],
  a = [
    ...[
      "dist/language_models/chat_models.cjs",
      "dist/language_models/chat_models.js",
    ].flatMap((e) => {
      const t = {
        name: "@langchain/core",
        versionRange: ">=0.1.0 <2.0.0",
        filePath: e,
      };
      return [
        {
          channelName: "chatModelInvoke",
          module: t,
          functionQuery: {
            className: "BaseChatModel",
            methodName: "invoke",
            kind: "Async",
          },
        },
        {
          channelName: "chatModelStream",
          module: t,
          functionQuery: {
            className: "BaseChatModel",
            methodName: "_streamIterator",
            kind: "Async",
          },
        },
      ];
    }),
    ...s.flatMap(({ name: e, versionRange: t, methods: n }) =>
      ["dist/embeddings.cjs", "dist/embeddings.js"].flatMap((r) =>
        n.map((n) => ({
          channelName: n,
          module: { name: e, versionRange: t, filePath: r },
          functionQuery: { methodName: n, kind: "Async" },
        })),
      ),
    ),
  ],
  c = s.flatMap(({ name: e, methods: t }) =>
    t.map((t) => `orchestrion:${e}:${t}`),
  ),
  u = r.toSubscribeInjections(a);
(t.langchainChannels = {
  LANGCHAIN_CHAT_MODEL_INVOKE: "orchestrion:@langchain/core:chatModelInvoke",
  LANGCHAIN_CHAT_MODEL_STREAM: "orchestrion:@langchain/core:chatModelStream",
}),
  (t.langchainConfig = a),
  (t.langchainEmbeddingsChannels = c),
  (t.langchainSubscribeInjection = u);
