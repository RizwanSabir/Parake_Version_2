// vendor/module-225.js — webpack module 225
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
class n extends Error {
  constructor(e, t = "warn") {
    super(e), (this.message = e), (this.logLevel = t);
  }
}
t.SentryError = n;
