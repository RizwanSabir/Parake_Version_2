// vendor/module-64184.js — webpack module 64184
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.let_ = t.bindTo = t.bind = void 0);
var r = n(74109 /* vendor/module-74109 */);
(t.let_ = (e) =>
  (0, r.dual)(3, (t, n, r) => e(t, (e) => ({ ...e, [n]: r(e) })))),
  (t.bindTo = (e) => (0, r.dual)(2, (t, n) => e(t, (e) => ({ [n]: e })))),
  (t.bind = (e, t) =>
    (0, r.dual)(3, (n, r, o) =>
      t(n, (t) => e(o(t), (e) => ({ ...t, [r]: e }))),
    ));
