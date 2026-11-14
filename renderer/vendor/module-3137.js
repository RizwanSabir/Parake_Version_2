// vendor/module-3137.js — webpack module 3137
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.isElementDisabled = function (e) {
    return (
      null == e ||
      e.hasAttribute("disabled") ||
      "true" === e.getAttribute("aria-disabled")
    );
  });
