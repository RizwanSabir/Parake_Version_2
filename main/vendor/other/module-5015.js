// vendor/other/module-5015.js — webpack module 5015
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */);
class i extends r.InstrumentationBase {
  constructor() {
    super("@sentry/instrumentation-lru-memoizer", o.SDK_VERSION, {});
  }
  init() {
    return [
      new r.InstrumentationNodeModuleDefinition(
        "lru-memoizer",
        [">=1.3 <4"],
        (e) =>
          Object.assign(
            function (...t) {
              const n = e.apply(this, t);
              return function (...e) {
                const t = e.pop(),
                  r = o.getCurrentScope(),
                  i =
                    "function" == typeof t
                      ? function (...e) {
                          return o.withScope(r, () => t.apply(this, e));
                        }
                      : t;
                return n.apply(this, [...e, i]);
              };
            },
            { sync: e.sync },
          ),
        void 0,
      ),
    ];
  }
}
t.LruMemoizerInstrumentation = i;
