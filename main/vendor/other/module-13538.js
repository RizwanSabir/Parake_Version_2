// vendor/other/module-13538.js — webpack module 13538
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(60261 /* vendor/other/module-60261 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = [">=0.10.0 <2"];
class a extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-google-genai", i.SDK_VERSION, e);
  }
  init() {
    const e = new r.InstrumentationNodeModuleDefinition(
      "@google/genai",
      s,
      (e) => this._patch(e),
      (e) => e,
      [
        new o.InstrumentationNodeModuleFile(
          "@google/genai/dist/node/index.cjs",
          s,
          (e) => this._patch(e),
          (e) => e,
        ),
      ],
    );
    return e;
  }
  _patch(e) {
    const t = e.GoogleGenAI,
      n = this.getConfig();
    if ("function" != typeof t) return e;
    const r = function (...e) {
      if (
        i._INTERNAL_shouldSkipAiProviderWrapping(
          i.GOOGLE_GENAI_INTEGRATION_NAME,
        )
      )
        return Reflect.construct(t, e);
      const r = Reflect.construct(t, e);
      return i.instrumentGoogleGenAIClient(r, n);
    };
    Object.setPrototypeOf(r, t),
      Object.setPrototypeOf(r.prototype, t.prototype);
    for (const e of Object.getOwnPropertyNames(t))
      if (!["length", "name", "prototype"].includes(e)) {
        const n = Object.getOwnPropertyDescriptor(t, e);
        n && Object.defineProperty(r, e, n);
      }
    return i.replaceExports(e, "GoogleGenAI", r), e;
  }
}
t.SentryGoogleGenAiInstrumentation = a;
