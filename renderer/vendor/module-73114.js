// vendor/module-73114.js — webpack module 73114
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.validateMinimumDistance = function (e, t, n) {
    if (!Array.isArray(e)) return !0;
    const r = e.reduce(
      (e, t, n, r) => (n === r.length - 1 || e.push(Math.abs(t - r[n + 1])), e),
      [],
    );
    return Math.min(...r) >= t * n;
  });
