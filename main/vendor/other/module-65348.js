// vendor/other/module-65348.js — webpack module 65348
// params: (e) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const t = Symbol("kDone"),
  n = Symbol("kRun");
e.exports = class {
  constructor(e) {
    (this[t] = () => {
      this.pending--, this[n]();
    }),
      (this.concurrency = e || 1 / 0),
      (this.jobs = []),
      (this.pending = 0);
  }
  add(e) {
    this.jobs.push(e), this[n]();
  }
  [n]() {
    if (this.pending !== this.concurrency && this.jobs.length) {
      const e = this.jobs.shift();
      this.pending++, e(this[t]);
    }
  }
};
