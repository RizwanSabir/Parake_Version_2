// vendor/other/module-34820.js — webpack module 34820
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(64569 /* vendor/other/module-64569 */),
  i = r.defineIntegration((e = {}) => ({
    name: "NodeFetch",
    setupOnce() {
      o.instrumentUndici(e);
    },
  }));
t.nativeNodeFetchIntegration = i;
