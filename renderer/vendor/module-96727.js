// vendor/module-96727.js — webpack module 96727
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.webkit = t.gecko = t.blink = void 0);
var r = n(56924 /* vendor/module-56924 */);
const o = (t.webkit =
  "undefined" != typeof CSS &&
  !!CSS.supports?.("-webkit-backdrop-filter:none"));
(t.gecko = !o && r.lowerUserAgent.includes("firefox")),
  (t.blink = !o && r.lowerUserAgent.includes("chrom"));
