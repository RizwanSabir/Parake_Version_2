// vendor/module-35777.js — webpack module 35777
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.FloatingTreeStore = void 0);
var r = n(16705 /* vendor/module-16705 */);
t.FloatingTreeStore = class {
  nodesRef = { current: [] };
  events = (0, r.createEventEmitter)();
  addNode(e) {
    this.nodesRef.current.push(e);
  }
  removeNode(e) {
    const t = this.nodesRef.current.findIndex((t) => t === e);
    -1 !== t && this.nodesRef.current.splice(t, 1);
  }
};
