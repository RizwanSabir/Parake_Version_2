// vendor/other/module-40415.js — webpack module 40415
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.LCPEntryManager = class {
    _processEntry(e) {
      this._onBeforeProcessingEntry?.(e);
    }
  });
