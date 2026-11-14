// vendor/module-85522.js — webpack module 85522
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.usePreviousValue = function (e) {
    const [t, n] = o.useState({ current: e, previous: null });
    return (
      e !== t.current && n({ current: e, previous: t.current }), t.previous
    );
  });
var o = r(n(14041 /* vendor/module-14041 */));
