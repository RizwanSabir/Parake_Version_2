// vendor/module-48917.js — webpack module 48917
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.subscribeToVisualViewportResize = function (e, t) {
    const n = (0, o.ownerWindow)(e).visualViewport;
    if (!n) return () => {};
    function i() {
      n && (t.current = n.scale);
    }
    return i(), (0, r.addEventListener)(n, "resize", i);
  });
var r = n(23504 /* vendor/module-23504 */),
  o = n(854 /* vendor/module-854 */);
