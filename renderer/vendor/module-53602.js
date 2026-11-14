// vendor/module-53602.js — webpack module 53602
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getViewportRect = function (e, t) {
    const n = (0, r.ownerWindow)(t);
    if (null != e) {
      const n = t.getBoundingClientRect();
      return {
        left: n.left - e / 2,
        top: n.top - e / 2,
        right: n.right + e / 2,
        bottom: n.bottom + e / 2,
      };
    }
    const o = n.visualViewport;
    return o
      ? {
          left: o.offsetLeft,
          top: o.offsetTop,
          right: o.offsetLeft + o.width,
          bottom: o.offsetTop + o.height,
        }
      : {
          left: 0,
          top: 0,
          right: n.document.documentElement.clientWidth,
          bottom: n.document.documentElement.clientHeight,
        };
  });
var r = n(854 /* vendor/module-854 */);
