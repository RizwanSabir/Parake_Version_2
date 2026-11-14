// vendor/other/module-71052.js — webpack module 71052
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(98221 /* vendor/other/module-98221 */),
  { Transformer: o } = n(73749 /* vendor/other/module-73749 */);
e.exports = {
  InstrumentationMatcher: class {
    #e = [];
    #t = null;
    #n = {};
    #r = {};
    constructor(e, t) {
      (this.#e = e), (this.#t = t || "diagnostics_channel");
    }
    free() {
      this.#n = {};
    }
    addTransform(e, t) {
      this.#r[e] = t;
    }
    getTransformer(e, t, n) {
      n = n.replace(/\\/g, "/");
      const i = `${e}/${n}@${t}`;
      if (this.#n[i]) return this.#n[i];
      const s = this.#e.filter(
        ({ module: o }) =>
          o.name === e &&
          ("string" == typeof o.filePath
            ? o.filePath === n
            : o.filePath.test(n)) &&
          r(t, o.versionRange),
      );
      return 0 !== s.length
        ? ((this.#n[i] = new o(e, t, n, s, this.#t, this.#r)), this.#n[i])
        : void 0;
    }
  },
};
