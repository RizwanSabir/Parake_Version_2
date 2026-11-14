// vendor/module-82029.js — webpack module 82029
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.ANTHROPIC_AI_INTEGRATION_NAME = "Anthropic_AI"),
  (t.ANTHROPIC_METHOD_REGISTRY = {
    "messages.create": { operation: "chat" },
    "messages.stream": { operation: "chat", streaming: !0 },
    "messages.countTokens": { operation: "chat" },
    "models.get": { operation: "models" },
    "completions.create": { operation: "chat" },
    "models.retrieve": { operation: "models" },
    "beta.messages.create": { operation: "chat" },
  });
