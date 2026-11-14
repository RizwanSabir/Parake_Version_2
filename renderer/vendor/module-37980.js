// vendor/module-37980.js — webpack module 37980
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.MenuSubmenuRoot = function (e) {
    const t = (0, a.useMenuRootContext)().store,
      n = o.useMemo(() => ({ parentMenu: t }), [t]);
    return (0, l.jsx)(s.MenuSubmenuRootContext.Provider, {
      value: n,
      children: (0, l.jsx)(i.MenuRoot, { ...e }),
    });
  }),
  Object.defineProperty(t, "useMenuSubmenuRootContext", {
    enumerable: !0,
    get: function () {
      return s.useMenuSubmenuRootContext;
    },
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(66309 /* app/components/outside-press */),
  a = n(85950 /* vendor/module-85950 */),
  s = n(87057 /* vendor/module-87057 */),
  l = n(31085 /* vendor/module-31085 */);
