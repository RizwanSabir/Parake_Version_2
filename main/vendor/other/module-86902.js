// vendor/other/module-86902.js — webpack module 86902
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.LayoutShiftManager = class {
    constructor() {
      (this._sessionValue = 0), (this._sessionEntries = []);
    }
    _processEntry(e) {
      if (e.hadRecentInput) return;
      const t = this._sessionEntries[0],
        n = this._sessionEntries[this._sessionEntries.length - 1];
      this._sessionValue &&
      t &&
      n &&
      e.startTime - n.startTime < 1e3 &&
      e.startTime - t.startTime < 5e3
        ? ((this._sessionValue += e.value), this._sessionEntries.push(e))
        : ((this._sessionValue = e.value), (this._sessionEntries = [e])),
        this._onAfterProcessingUnexpectedShift?.(e);
    }
  });
