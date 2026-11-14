// vendor/module-38541.js — webpack module 38541
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.CompositeListContext = void 0),
  (t.useCompositeListContext = function () {
    return o.useContext(i);
  });
var o = r(n(14041 /* vendor/module-14041 */));
const i = (t.CompositeListContext = o.createContext({
  register: () => {},
  unregister: () => {},
  subscribeMapChange: () => () => {},
  elementsRef: { current: [] },
  nextIndexRef: { current: 0 },
}));
