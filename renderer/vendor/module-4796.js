// vendor/module-4796.js — webpack module 4796
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.GroupCollectionProvider = function (e) {
    const { children: t, items: n } = e,
      r = o.useMemo(() => ({ items: n }), [n]);
    return (0, i.jsx)(a.Provider, { value: r, children: t });
  }),
  (t.useGroupCollectionContext = function () {
    return o.useContext(a);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(31085 /* vendor/module-31085 */);
const a = o.createContext(null);
