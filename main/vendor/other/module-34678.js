// vendor/other/module-34678.js — webpack module 34678
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.LRUMap = class {
    constructor(e) {
      (this._maxSize = e), (this._cache = new Map());
    }
    get size() {
      return this._cache.size;
    }
    get(e) {
      const t = this._cache.get(e);
      if (void 0 !== t) return this._cache.delete(e), this._cache.set(e, t), t;
    }
    set(e, t) {
      if (this._cache.size >= this._maxSize) {
        const e = this._cache.keys().next().value;
        this._cache.delete(e);
      }
      this._cache.set(e, t);
    }
    remove(e) {
      const t = this._cache.get(e);
      return t && this._cache.delete(e), t;
    }
    clear() {
      this._cache.clear();
    }
    keys() {
      return Array.from(this._cache.keys());
    }
    values() {
      const e = [];
      return this._cache.forEach((t) => e.push(t)), e;
    }
  });
