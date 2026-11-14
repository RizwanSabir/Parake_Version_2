// vendor/other/module-55722.js — webpack module 55722
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/other/module-15946 */),
  o = n(12724 /* vendor/other/module-12724 */),
  i = n(77481 /* vendor/other/module-77481 */),
  s = n(36648 /* vendor/other/module-36648 */),
  a = n(48854 /* vendor/other/module-48854 */),
  c = n(18523 /* vendor/other/module-18523 */);
function u(e, t, n = {}) {
  const { recordInputs: r } = a.resolveAIRecordingOptions(n),
    i = (function (e) {
      const t = e ?? {},
        n = {
          [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c.LANGCHAIN_ORIGIN,
          [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]:
            s.GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE,
          [s.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "embeddings",
          [s.GEN_AI_REQUEST_MODEL_ATTRIBUTE]: t.model ?? "unknown",
        };
      return (
        (n[s.GEN_AI_SYSTEM_ATTRIBUTE] = (function (e) {
          const t = e.constructor?.name ?? "";
          return t.includes("OpenAI")
            ? "openai"
            : t.includes("Google")
              ? "google_genai"
              : t.includes("Mistral")
                ? "mistralai"
                : t.includes("Vertex")
                  ? "google_vertexai"
                  : t.includes("Bedrock")
                    ? "aws_bedrock"
                    : t.includes("Ollama")
                      ? "ollama"
                      : t.includes("Cloudflare")
                        ? "cloudflare"
                        : t.includes("Cohere")
                          ? "cohere"
                          : "langchain";
        })(t)),
        "dimensions" in t &&
          (n[s.GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE] = t.dimensions),
        "encodingFormat" in t &&
          (n[s.GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE] = t.encodingFormat),
        n
      );
    })(e),
    u = i[s.GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
  return (
    r &&
      null != t &&
      (i[s.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE] =
        "string" == typeof t ? t : JSON.stringify(t)),
    {
      name: `embeddings ${u}`,
      op: s.GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE,
      attributes: i,
    }
  );
}
function l(e, t = {}) {
  return new Proxy(e, {
    apply: (e, n, o) =>
      i.startSpan(u(n, o[0], t), () =>
        Reflect.apply(e, n, o).then(void 0, (e) => {
          throw (
            (r.captureException(e, {
              mechanism: { handled: !1, type: "auto.ai.langchain" },
            }),
            e)
          );
        }),
      ),
  });
}
(t._INTERNAL_getLangChainEmbeddingsSpanOptions = u),
  (t.instrumentEmbeddingMethod = l),
  (t.instrumentLangChainEmbeddings = function (e, t) {
    const n = e;
    return (
      "function" == typeof n.embedQuery && (n.embedQuery = l(n.embedQuery, t)),
      "function" == typeof n.embedDocuments &&
        (n.embedDocuments = l(n.embedDocuments, t)),
      e
    );
  });
