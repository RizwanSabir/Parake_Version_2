// vendor/module-7306.js — webpack module 7306
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.findRootOwnerId = function e(t) {
    return (0, r.isHTMLElement)(t) && t.hasAttribute("data-rootownerid")
      ? (t.getAttribute("data-rootownerid") ?? void 0)
      : (0, r.isLastTraversableNode)(t)
        ? void 0
        : e((0, r.getParentNode)(t));
  });
var r = n(81339 /* vendor/module-81339 */);
