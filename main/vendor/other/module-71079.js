// vendor/other/module-71079.js — webpack module 71079
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(64198 /* vendor/other/module-64198 */),
  s = n(69138 /* vendor/other/module-69138 */),
  a = [">=3.0.0 <5"],
  c = [">=6.0.0 <7"];
class u extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-firebase", o.SDK_VERSION, e);
  }
  init() {
    const e = [];
    return (
      e.push(i.patchFirestore(a, this._wrap, this._unwrap)),
      e.push(s.patchFunctions(c, this._wrap, this._unwrap)),
      e
    );
  }
}
t.FirebaseInstrumentation = u;
