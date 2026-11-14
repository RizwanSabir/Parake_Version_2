// vendor/module-77651.js — webpack module 77651
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.TooltipProvider = void 0);
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(47797 /* vendor/module-47797 */),
  a = n(53164 /* vendor/module-53164 */),
  s = n(31085 /* vendor/module-31085 */);
t.TooltipProvider = function (e) {
  const { delay: t, closeDelay: n, timeout: r = 400 } = e,
    l = o.useMemo(() => ({ delay: t, closeDelay: n }), [t, n]),
    c = o.useMemo(() => ({ open: t, close: n }), [t, n]);
  return (0, s.jsx)(a.TooltipProviderContext.Provider, {
    value: l,
    children: (0, s.jsx)(i.FloatingDelayGroup, {
      delay: c,
      timeoutMs: r,
      children: e.children,
    }),
  });
};
