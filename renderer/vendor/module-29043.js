// vendor/module-29043.js — webpack module 29043
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getDefaultFormSubmitter = function (e) {
    if (!e) return null;
    for (const t of e.elements) {
      const e = t.tagName;
      if ("BUTTON" === e || "INPUT" === e) {
        const e = t;
        if ("submit" === e.type) return e;
      }
    }
    return null;
  });
