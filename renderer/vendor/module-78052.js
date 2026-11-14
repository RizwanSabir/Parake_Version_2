// vendor/module-78052.js — webpack module 78052
// params: (e, t, n) = (module, exports, require)
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.default = function (e, t) {
    let n = null;
    if (!e || "string" != typeof e) return n;
    const r = (0, o.default)(e),
      i = "function" == typeof t;
    return (
      r.forEach((e) => {
        if ("declaration" !== e.type) return;
        const { property: r, value: o } = e;
        i ? t(r, o, e) : o && ((n = n || {}), (n[r] = o));
      }),
      n
    );
  });
const o = r(n(92776 /* vendor/module-92776 */));
