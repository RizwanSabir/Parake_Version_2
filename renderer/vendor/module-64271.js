// vendor/module-64271.js — webpack module 64271
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.getCssDimensions = function (e) {
    const t = (0, o.getComputedStyle)(e);
    let n = parseFloat(t.width) || 0,
      i = parseFloat(t.height) || 0;
    const a = (0, o.isHTMLElement)(e),
      s = a ? e.offsetWidth : n,
      l = a ? e.offsetHeight : i;
    return (
      ((0, r.round)(n) === s && (0, r.round)(i) === l) || ((n = s), (i = l)),
      { width: n, height: i }
    );
  });
var r = n(28229 /* vendor/module-28229 */),
  o = n(81339 /* vendor/module-81339 */);
