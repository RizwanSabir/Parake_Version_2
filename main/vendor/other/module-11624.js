// vendor/other/module-11624.js — webpack module 11624
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.Lazy = void 0),
  (t.Lazy = class {
    constructor(e) {
      (this._value = null), (this.creator = e);
    }
    get hasValue() {
      return null == this.creator;
    }
    get value() {
      if (null == this.creator) return this._value;
      const e = this.creator();
      return (this.value = e), e;
    }
    set value(e) {
      (this._value = e), (this.creator = null);
    }
  });
