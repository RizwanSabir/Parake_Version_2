// vendor/module-71494.js — webpack module 71494
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.stringifyLocale = function e(t) {
    return Array.isArray(t)
      ? t.map((t) => e(t)).join(",")
      : null == t
        ? ""
        : String(t);
  });
