// vendor/other/module-57277.js — webpack module 57277
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
n.d(t, { B: () => c, L: () => a });
var r = n(32535 /* vendor/other/module-32535 */);
class o {
  constructor(e) {
    this._entries = e ? new Map(e) : new Map();
  }
  getEntry(e) {
    const t = this._entries.get(e);
    if (t) return Object.assign({}, t);
  }
  getAllEntries() {
    return Array.from(this._entries.entries());
  }
  setEntry(e, t) {
    const n = new o(this._entries);
    return n._entries.set(e, t), n;
  }
  removeEntry(e) {
    const t = new o(this._entries);
    return t._entries.delete(e), t;
  }
  removeEntries(...e) {
    const t = new o(this._entries);
    for (const n of e) t._entries.delete(n);
    return t;
  }
  clear() {
    return new o();
  }
}
const i = Symbol("BaggageEntryMetadata"),
  s = r.K.instance();
function a(e = {}) {
  return new o(new Map(Object.entries(e)));
}
function c(e) {
  return (
    "string" != typeof e &&
      (s.error("Cannot create baggage metadata from unknown type: " + typeof e),
      (e = "")),
    { __TYPE__: i, toString: () => e }
  );
}
