// vendor/other/module-23833.js — webpack module 23833
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = r.defineIntegration(
    (e) => (
      r.isBrowser() || r.consoleSandbox(() => {}), { name: "OpenFeature" }
    ),
  );
(t.OpenFeatureIntegrationHookShim = class {
  constructor() {
    r.isBrowser() || r.consoleSandbox(() => {});
  }
  after() {}
  error() {}
}),
  (t.openFeatureIntegrationShim = o);
