// vendor/module-75639.js — webpack module 75639
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.serializeValue = function (e) {
    if (null == e) return "";
    if ("string" == typeof e) return e;
    try {
      return JSON.stringify(e);
    } catch {
      return String(e);
    }
  });
