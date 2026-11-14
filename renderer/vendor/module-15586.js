// vendor/module-15586.js — webpack module 15586
// params: (e, t, n) = (module, exports, require)
"use strict";
var r = n(78920 /* vendor/module-78920 */).default;
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.useOpenChangeComplete = function (e) {
    const { enabled: t = !0, open: n, ref: r, onComplete: s } = e,
      l = (0, i.useStableCallback)(s),
      c = (0, a.useAnimationsFinished)(r, n, !1);
    o.useEffect(() => {
      if (!t) return;
      const e = new AbortController();
      return (
        c(l, e.signal),
        () => {
          e.abort();
        }
      );
    }, [t, n, l, c]);
  });
var o = r(n(14041 /* vendor/module-14041 */)),
  i = n(4674 /* vendor/module-4674 */),
  a = n(43808 /* vendor/module-43808 */);
