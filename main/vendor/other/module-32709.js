// vendor/other/module-32709.js — webpack module 32709
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = [">=0.19.2 <1.0.0"];
class s extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-anthropic-ai", o.SDK_VERSION, e);
  }
  init() {
    return new r.InstrumentationNodeModuleDefinition(
      "@anthropic-ai/sdk",
      i,
      this._patch.bind(this),
    );
  }
  _patch(e) {
    const t = e.Anthropic,
      n = this.getConfig(),
      r = function (...e) {
        if (
          o._INTERNAL_shouldSkipAiProviderWrapping(
            o.ANTHROPIC_AI_INTEGRATION_NAME,
          )
        )
          return Reflect.construct(t, e);
        const r = Reflect.construct(t, e);
        return o.instrumentAnthropicAiClient(r, n);
      };
    Object.setPrototypeOf(r, t),
      Object.setPrototypeOf(r.prototype, t.prototype);
    for (const e of Object.getOwnPropertyNames(t))
      if (!["length", "name", "prototype"].includes(e)) {
        const n = Object.getOwnPropertyDescriptor(t, e);
        n && Object.defineProperty(r, e, n);
      }
    try {
      e.Anthropic = r;
    } catch {
      Object.defineProperty(e, "Anthropic", {
        value: r,
        writable: !0,
        configurable: !0,
        enumerable: !0,
      });
    }
    if (e.default === t)
      try {
        e.default = r;
      } catch {
        Object.defineProperty(e, "default", {
          value: r,
          writable: !0,
          configurable: !0,
          enumerable: !0,
        });
      }
    return e;
  }
}
t.SentryAnthropicAiInstrumentation = s;
