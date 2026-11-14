// vendor/other/module-21353.js — webpack module 21353
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(60261 /* vendor/other/module-60261 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = [">=0.1.0 <2.0.0"];
function a(e, t, n) {
  return new Proxy(e, {
    apply(e, n, r) {
      let o = r[1];
      return (
        (o && "object" == typeof o && !Array.isArray(o)) ||
          ((o = {}), (r[1] = o)),
        (o.callbacks = i._INTERNAL_mergeLangChainCallbackHandler(
          o.callbacks,
          t,
        )),
        Reflect.apply(e, n, r)
      );
    },
  });
}
class c extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-langchain", i.SDK_VERSION, e);
  }
  init() {
    const e = [],
      t = [
        "@langchain/anthropic",
        "@langchain/openai",
        "@langchain/google-genai",
        "@langchain/mistralai",
        "@langchain/google-vertexai",
        "@langchain/groq",
      ];
    for (const n of t)
      e.push(
        new r.InstrumentationNodeModuleDefinition(
          n,
          s,
          this._patch.bind(this),
          (e) => e,
          [
            new o.InstrumentationNodeModuleFile(
              `${n}/dist/index.cjs`,
              s,
              this._patch.bind(this),
              (e) => e,
            ),
          ],
        ),
      );
    return (
      e.push(
        new r.InstrumentationNodeModuleDefinition(
          "langchain",
          s,
          this._patch.bind(this),
          (e) => e,
          [
            new o.InstrumentationNodeModuleFile(
              "langchain/dist/chat_models/universal.cjs",
              s,
              this._patch.bind(this),
              (e) => e,
            ),
          ],
        ),
      ),
      e
    );
  }
  _patch(e) {
    i._INTERNAL_skipAiProviderWrapping([
      i.OPENAI_INTEGRATION_NAME,
      i.ANTHROPIC_AI_INTEGRATION_NAME,
      i.GOOGLE_GENAI_INTEGRATION_NAME,
    ]);
    const t = this.getConfig(),
      n = i.createLangChainCallbackHandler(t);
    return (
      this._patchRunnableMethods(e, n), this._patchEmbeddingsMethods(e, t), e
    );
  }
  _patchRunnableMethods(e, t) {
    const n = [
        "ChatAnthropic",
        "ChatOpenAI",
        "ChatGoogleGenerativeAI",
        "ChatMistralAI",
        "ChatVertexAI",
        "ChatGroq",
        "ConfigurableModel",
      ],
      r = e.universal_exports ?? e,
      o = Object.values(r).find(
        (e) => "function" == typeof e && n.includes(e.name),
      );
    if (!o) return;
    const i = o.prototype;
    if (i.__sentry_patched__) return;
    i.__sentry_patched__ = !0;
    const s = ["invoke", "stream", "batch"];
    for (const e of s) {
      const n = i[e];
      "function" == typeof n && (i[e] = a(n, t));
    }
  }
  _patchEmbeddingsMethods(e, t) {
    const n = e.universal_exports ?? e;
    for (const e of Object.values(n)) {
      if ("function" != typeof e || !e.prototype) continue;
      const n = e.prototype;
      "function" == typeof n.embedQuery &&
        "function" == typeof n.embedDocuments &&
        (n.__sentry_patched__ ||
          ((n.__sentry_patched__ = !0), i.instrumentLangChainEmbeddings(n, t)));
    }
  }
}
t.SentryLangChainInstrumentation = c;
