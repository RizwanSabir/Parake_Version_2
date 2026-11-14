// vendor/module-82764.js — webpack module 82764
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SCROLL_EDGE_TOLERANCE_PX = void 0),
  (t.getMaxScrollOffset = function (e, t) {
    return Math.max(0, e - t);
  }),
  (t.normalizeScrollOffset = function (e, t) {
    if (t <= 0) return 0;
    const n = (0, r.clamp)(e, 0, t),
      i = t - n,
      a = n <= o,
      s = i <= o;
    return a && s ? (n <= i ? 0 : t) : a ? 0 : s ? t : n;
  });
var r = n(41153 /* vendor/module-41153 */);
const o = (t.SCROLL_EDGE_TOLERANCE_PX = 1);
