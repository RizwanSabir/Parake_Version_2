// vendor/other/module-90862.js — webpack module 90862
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = [">=4.0.0 <7"];
class s extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-openai", o.SDK_VERSION, e);
  }
  init() {
    return new r.InstrumentationNodeModuleDefinition(
      "openai",
      i,
      this._patch.bind(this),
    );
  }
  _patch(e) {
    let t = e;
    return (
      (t = this._patchClient(t, "OpenAI")),
      (t = this._patchClient(t, "AzureOpenAI")),
      t
    );
  }
  _patchClient(e, t) {
    const n = e[t];
    if (!n) return e;
    const r = this.getConfig(),
      i = function (...e) {
        if (o._INTERNAL_shouldSkipAiProviderWrapping(o.OPENAI_INTEGRATION_NAME))
          return Reflect.construct(n, e);
        const t = Reflect.construct(n, e);
        return o.instrumentOpenAiClient(t, r);
      };
    Object.setPrototypeOf(i, n),
      Object.setPrototypeOf(i.prototype, n.prototype);
    for (const e of Object.getOwnPropertyNames(n))
      if (!["length", "name", "prototype"].includes(e)) {
        const t = Object.getOwnPropertyDescriptor(n, e);
        t && Object.defineProperty(i, e, t);
      }
    try {
      e[t] = i;
    } catch {
      Object.defineProperty(e, t, {
        value: i,
        writable: !0,
        configurable: !0,
        enumerable: !0,
      });
    }
    if (e.default === n)
      try {
        e.default = i;
      } catch {
        Object.defineProperty(e, "default", {
          value: i,
          writable: !0,
          configurable: !0,
          enumerable: !0,
        });
      }
    return e;
  }
}
t.SentryOpenAiInstrumentation = s;
