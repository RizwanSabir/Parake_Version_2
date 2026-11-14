// vendor/module-96092.js — webpack module 96092
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DirectionContext = void 0),
  (t.useDirection = function () {
    const e = o.useContext(i);
    return e?.direction ?? "ltr";
  });
var o = r(n(14041 /* vendor/module-14041 */));
const i = (t.DirectionContext = o.createContext(void 0));
