// vendor/module-50045.js — webpack module 50045
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.DirectionProvider = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(96092 /* vendor/module-96092 */),
  a = n(31085 /* vendor/module-31085 */);
t.DirectionProvider = function (e) {
  const { direction: t = "ltr" } = e,
    n = o.useMemo(() => ({ direction: t }), [t]);
  return (0, a.jsx)(i.DirectionContext.Provider, {
    value: n,
    children: e.children,
  });
};
