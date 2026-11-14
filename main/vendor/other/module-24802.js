// vendor/other/module-24802.js — webpack module 24802
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = [
    "response.output_item.added",
    "response.function_call_arguments.delta",
    "response.function_call_arguments.done",
    "response.output_item.done",
  ],
  r = [
    "response.created",
    "response.in_progress",
    "response.failed",
    "response.completed",
    "response.incomplete",
    "response.queued",
    "response.output_text.delta",
    ...n,
  ];
(t.OPENAI_INTEGRATION_NAME = "OpenAI"),
  (t.OPENAI_METHOD_REGISTRY = {
    "responses.create": { operation: "chat" },
    "chat.completions.create": { operation: "chat" },
    "embeddings.create": { operation: "embeddings" },
    "conversations.create": { operation: "chat" },
  }),
  (t.RESPONSES_TOOL_CALL_EVENT_TYPES = n),
  (t.RESPONSE_EVENT_TYPES = r);
