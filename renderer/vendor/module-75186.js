// vendor/module-75186.js — webpack module 75186
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(14041 /* vendor/module-14041 */),
  o = n(30358 /* vendor/module-30358 */);
t.useUUID = function () {
  return r.useState(() => o.uuid())[0];
};
