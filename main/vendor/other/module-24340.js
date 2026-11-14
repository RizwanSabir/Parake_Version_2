// vendor/other/module-24340.js — webpack module 24340
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(60261 /* vendor/other/module-60261 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = [">=0.0.0 <2.0.0"];
class a extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-langgraph", i.SDK_VERSION, e);
  }
  init() {
    return [
      new r.InstrumentationNodeModuleDefinition(
        "@langchain/langgraph",
        s,
        this._patch.bind(this),
        (e) => e,
        [
          new o.InstrumentationNodeModuleFile(
            "@langchain/langgraph/dist/index.cjs",
            s,
            this._patch.bind(this),
            (e) => e,
          ),
          new o.InstrumentationNodeModuleFile(
            "@langchain/langgraph/dist/prebuilt/index.cjs",
            s,
            this._patch.bind(this),
            (e) => e,
          ),
        ],
      ),
      new r.InstrumentationNodeModuleDefinition(
        "@langchain/langgraph/prebuilt",
        s,
        this._patch.bind(this),
        (e) => e,
        [
          new o.InstrumentationNodeModuleFile(
            "@langchain/langgraph/dist/prebuilt/index.cjs",
            s,
            this._patch.bind(this),
            (e) => e,
          ),
        ],
      ),
    ];
  }
  _patch(e) {
    const t = i.getClient(),
      n = t?.getDataCollectionOptions().genAI,
      r = {
        ...this.getConfig(),
        recordInputs: this.getConfig().recordInputs ?? n?.inputs ?? !1,
        recordOutputs: this.getConfig().recordOutputs ?? n?.outputs ?? !1,
      };
    if (
      (e.StateGraph &&
        "function" == typeof e.StateGraph &&
        i.instrumentStateGraph(e.StateGraph.prototype, r),
      e.createReactAgent && "function" == typeof e.createReactAgent)
    ) {
      const t = e.createReactAgent;
      Object.defineProperty(e, "createReactAgent", {
        value: i.instrumentCreateReactAgent(t, r),
        writable: !0,
        enumerable: !0,
        configurable: !0,
      });
    }
    return e;
  }
}
t.SentryLangGraphInstrumentation = a;
