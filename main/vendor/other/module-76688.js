// vendor/other/module-76688.js — webpack module 76688
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(24434 /* external/events */),
  o = n(79896 /* external/fs */),
  i = n(16928 /* external/path */),
  s = n(68603 /* vendor/other/module-68603 */),
  a = n(43214 /* vendor/other/module-43214 */);
e.exports = class extends r {
  store = {};
  constructor() {
    super(), (this.emitError = this.emitError.bind(this));
  }
  provide({ filePath: e, writeOptions: t = {}, writeAsync: n = !1 }) {
    let r;
    try {
      if (((e = i.resolve(e)), this.store[e])) return this.store[e];
      r = this.createFile({
        filePath: e,
        writeOptions: t,
        writeAsync: n,
      });
    } catch (t) {
      (r = new a({ path: e })), this.emitError(t, r);
    }
    return r.on("error", this.emitError), (this.store[e] = r), r;
  }
  createFile({ filePath: e, writeOptions: t, writeAsync: n }) {
    return (
      this.testFileWriting({ filePath: e, writeOptions: t }),
      new s({ path: e, writeOptions: t, writeAsync: n })
    );
  }
  emitError(e, t) {
    this.emit("error", e, t);
  }
  testFileWriting({ filePath: e, writeOptions: t }) {
    o.mkdirSync(i.dirname(e), { recursive: !0 }),
      o.writeFileSync(e, "", { flag: "a", mode: t.mode });
  }
};
