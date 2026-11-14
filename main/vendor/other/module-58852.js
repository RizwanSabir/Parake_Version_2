// vendor/other/module-58852.js — webpack module 58852
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
function n(e, t) {
  if (
    "object" == typeof e &&
    null !== e &&
    "object" == typeof t &&
    null !== t
  ) {
    const r = Object.keys(e),
      o = Object.keys(t);
    return r.length === o.length && r.every((r) => n(e[r], t[r]));
  }
  return e === t;
}
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MemoLazy = void 0),
  (t.MemoLazy = class {
    constructor(e, t) {
      (this.selector = e),
        (this.creator = t),
        (this.selected = void 0),
        (this._value = void 0);
    }
    get hasValue() {
      return void 0 !== this._value;
    }
    get value() {
      const e = this.selector();
      if (void 0 !== this._value && n(this.selected, e)) return this._value;
      this.selected = e;
      const t = this.creator(e);
      return (this.value = t), t;
    }
    set value(e) {
      this._value = e;
    }
  });
