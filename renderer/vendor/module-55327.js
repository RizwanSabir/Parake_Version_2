// vendor/module-55327.js — webpack module 55327
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 });
var r = n(62369 /* vendor/module-62369 */);
Object.keys(r).forEach(function (e) {
  "default" !== e &&
    "__esModule" !== e &&
    ((e in t && t[e] === r[e]) ||
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return r[e];
        },
      }));
});
