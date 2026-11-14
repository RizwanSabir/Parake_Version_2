// vendor/module-16705.js — webpack module 16705
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.createEventEmitter = function () {
    const e = new Map();
    return {
      emit(t, n) {
        e.get(t)?.forEach((e) => e(n));
      },
      on(t, n) {
        e.has(t) || e.set(t, new Set()), e.get(t).add(n);
      },
      off(t, n) {
        e.get(t)?.delete(n);
      },
    };
  });
