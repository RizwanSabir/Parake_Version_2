// vendor/module-82296.js — webpack module 82296
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useAnchoredPopupScrollLock = function (e, t, n, r) {
    const [l, c] = o.useState(!1);
    (0, s.useIsoLayoutEffect)(() => {
      if (!e || !t || null == n) return void c(!1);
      const r = (0, i.ownerDocument)(n).documentElement.clientWidth,
        o = n.offsetWidth;
      c(r > 0 && o > 0 && o >= r - 20);
    }, [e, t, n]),
      (0, a.useScrollLock)(e && (!t || l), r);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(854 /* vendor/module-854 */),
  a = n(43976 /* vendor/module-43976 */),
  s = n(57122 /* vendor/module-57122 */);
