// vendor/module-55722.js — webpack module 55722
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/module-15946 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(77481 /* vendor/module-77481 */),
  a = n(36648 /* vendor/module-36648 */),
  s = n(48854 /* vendor/module-48854 */),
  l = n(18523 /* vendor/module-18523 */);
function c(e, t, n = {}) {
  const { recordInputs: r } = s.resolveAIRecordingOptions(n),
    i = (function (e) {
      const t = e ?? {},
        n = {
          [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: l.LANGCHAIN_ORIGIN,
          [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]:
            a.GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE,
          [a.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "embeddings",
          [a.GEN_AI_REQUEST_MODEL_ATTRIBUTE]: t.model ?? "unknown",
        };
      return (
        (n[a.GEN_AI_SYSTEM_ATTRIBUTE] = (function (e) {
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
          (n[a.GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE] = t.dimensions),
        "encodingFormat" in t &&
          (n[a.GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE] = t.encodingFormat),
        n
      );
    })(e),
    c = i[a.GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
  return (
    r &&
      null != t &&
      (i[a.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE] =
        "string" == typeof t ? t : JSON.stringify(t)),
    {
      name: `embeddings ${c}`,
      op: a.GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE,
      attributes: i,
    }
  );
}
function u(e, t = {}) {
  return new Proxy(e, {
    apply: (e, n, o) =>
      i.startSpan(c(n, o[0], t), () =>
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
(t._INTERNAL_getLangChainEmbeddingsSpanOptions = c),
  (t.instrumentEmbeddingMethod = u),
  (t.instrumentLangChainEmbeddings = function (e, t) {
    const n = e;
    return (
      "function" == typeof n.embedQuery && (n.embedQuery = u(n.embedQuery, t)),
      "function" == typeof n.embedDocuments &&
        (n.embedDocuments = u(n.embedDocuments, t)),
      e
    );
  });
