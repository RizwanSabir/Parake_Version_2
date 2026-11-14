// vendor/other/module-60261.js — webpack module 60261
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16928 /* external/path */);
t.InstrumentationNodeModuleFile = class {
  constructor(e, t, n, o) {
    (this.name = r.normalize(e)),
      (this.supportedVersions = t),
      (this.patch = n),
      (this.unpatch = o);
  }
};
