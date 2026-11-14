// vendor/module-62038.js — webpack module 62038
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 });
var r = n(9989 /* vendor/module-9989 */);
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
