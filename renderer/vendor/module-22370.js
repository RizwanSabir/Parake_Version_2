// vendor/module-22370.js — webpack module 22370
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default,
  o = n(4293 /* vendor/module-4293 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.SelectRootContext = t.SelectFloatingContext = void 0),
  (t.useSelectFloatingContext = function () {
    const e = a.useContext(l);
    if (null === e) throw new Error((0, i.default)(61));
    return e;
  }),
  (t.useSelectRootContext = function () {
    const e = a.useContext(s);
    if (null === e) throw new Error((0, i.default)(60));
    return e;
  });
var i = o(n(55099 /* vendor/module-55099 */)),
  a = r(n(14041 /* vendor/module-14041 */));
const s = (t.SelectRootContext = a.createContext(null)),
  l = (t.SelectFloatingContext = a.createContext(null));
