// vendor/other/module-3586.js — webpack module 3586
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
e.exports = class {
  constructor({ processMessage: e }) {
    (this.processMessage = e),
      (this.buffer = []),
      (this.enabled = !1),
      (this.begin = this.begin.bind(this)),
      (this.commit = this.commit.bind(this)),
      (this.reject = this.reject.bind(this));
  }
  addMessage(e) {
    this.buffer.push(e);
  }
  begin() {
    this.enabled = [];
  }
  commit() {
    (this.enabled = !1),
      this.buffer.forEach((e) => this.processMessage(e)),
      (this.buffer = []);
  }
  reject() {
    (this.enabled = !1), (this.buffer = []);
  }
};
