// vendor/module-64445.js — webpack module 64445
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PopupTriggerMap = void 0),
  (t.PopupTriggerMap = class {
    constructor() {
      (this.elementsSet = new Set()), (this.idMap = new Map());
    }
    add(e, t) {
      const n = this.idMap.get(e);
      n !== t &&
        (void 0 !== n && this.elementsSet.delete(n),
        this.elementsSet.add(t),
        this.idMap.set(e, t));
    }
    delete(e) {
      const t = this.idMap.get(e);
      t && (this.elementsSet.delete(t), this.idMap.delete(e));
    }
    hasElement(e) {
      return this.elementsSet.has(e);
    }
    hasMatchingElement(e) {
      for (const t of this.elementsSet) if (e(t)) return !0;
      return !1;
    }
    getById(e) {
      return this.idMap.get(e);
    }
    entries() {
      return this.idMap.entries();
    }
    elements() {
      return this.elementsSet.values();
    }
    get size() {
      return this.idMap.size;
    }
  });
