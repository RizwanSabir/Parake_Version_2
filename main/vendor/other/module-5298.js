// vendor/other/module-5298.js — webpack module 5298
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.GOOGLE_GENAI_INTEGRATION_NAME = "Google_GenAI"),
  (t.GOOGLE_GENAI_METHOD_REGISTRY = {
    "models.generateContent": { operation: "generate_content" },
    "models.generateContentStream": {
      operation: "generate_content",
      streaming: !0,
    },
    "models.embedContent": { operation: "embeddings" },
    "chats.create": { proxyResultPath: "chat" },
    "chat.sendMessage": { operation: "chat" },
    "chat.sendMessageStream": { operation: "chat", streaming: !0 },
  }),
  (t.GOOGLE_GENAI_SYSTEM_NAME = "google_genai");
