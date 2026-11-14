// vendor/module-98437.js — webpack module 98437
// params: (e, t, n) = (module, exports, require)
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.enqueueFocus = function (e, t = {}) {
    const { preventScroll: n = !1, sync: i = !1, shouldFocus: a } = t;
    function s() {
      (a && !a()) || e?.focus({ preventScroll: n });
    }
    if ((cancelAnimationFrame(o), i)) return s(), r.NOOP;
    const l = requestAnimationFrame(s);
    return (
      (o = l),
      () => {
        o === l && (cancelAnimationFrame(l), (o = 0));
      }
    );
  });
var r = n(38340 /* vendor/module-38340 */);
let o = 0;
