// vendor/module-28750.js — webpack module 28750
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = new Map(),
  r = new Map(),
  o = new Map([
    ["ai.generateText", "invoke_agent"],
    ["ai.streamText", "invoke_agent"],
    ["ai.generateObject", "invoke_agent"],
    ["ai.streamObject", "invoke_agent"],
    ["ai.generateText.doGenerate", "generate_content"],
    ["ai.streamText.doStream", "generate_content"],
    ["ai.generateObject.doGenerate", "generate_content"],
    ["ai.streamObject.doStream", "generate_content"],
    ["ai.embed.doEmbed", "embeddings"],
    ["ai.embedMany.doEmbed", "embeddings"],
    ["ai.rerank.doRerank", "rerank"],
    ["ai.toolCall", "execute_tool"],
  ]);
(t.SPAN_TO_OPERATION_NAME = o),
  (t.toolCallSpanContextMap = n),
  (t.toolDescriptionMap = r);
