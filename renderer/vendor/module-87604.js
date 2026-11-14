// vendor/module-87604.js — webpack module 87604
// params: (e, t) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getOffset = function (e, t, n) {
    if (!e) return 0;
    const r = getComputedStyle(e),
      o = "x" === n ? "Inline" : "Block";
    return "x" === n && "margin" === t
      ? 2 * parseFloat(r[`${t}InlineStart`])
      : parseFloat(r[`${t}${o}Start`]) + parseFloat(r[`${t}${o}End`]);
  });
