// vendor/other/module-83738.js — webpack module 83738
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(11030 /* vendor/other/module-11030 */),
  i = r.defineIntegration((e = {}) => ({
    name: "FileSystem",
    setupOnce() {
      o.enableFsInstrumentation(e);
    },
  }));
t.fsIntegration = i;
