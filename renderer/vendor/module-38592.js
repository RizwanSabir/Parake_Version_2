// vendor/module-38592.js — webpack module 38592
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.mergeCleanups = function (...e) {
    return () => {
      for (let t = 0; t < e.length; t += 1) {
        const n = e[t];
        n && n();
      }
    };
  });
