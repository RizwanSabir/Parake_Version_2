// vendor/module-41509.js — webpack module 41509
// params: (e, t) = (module, exports, require)
"use strict";
(t.X = void 0),
  (t.createRecheckScheduler = function (e) {
    let n = !1,
      r = 0,
      o = null;
    const i = () => {
      null !== o && (clearTimeout(o), (o = null));
    };
    return {
      arm: () => {
        n = !0;
      },
      cancel: () => {
        (n = !1), (r += 1), i();
      },
      onStreamSettled: () => {
        if (!n) return;
        (n = !1), (r += 1);
        const a = r;
        i();
        const s = Math.max(0, e.getCooldownRemainingMs()) + t.X;
        o = setTimeout(() => {
          (o = null), a === r && e.fireRecheck();
        }, s);
      },
    };
  }),
  (t.X = 1500);
