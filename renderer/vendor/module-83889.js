// vendor/module-83889.js — webpack module 83889
// params: (e, t) = (module, exports, require)
"use strict";
(t.M = void 0),
  (t.createCallerTurn = function (e) {
    let n,
      r = !1,
      o = !1,
      i = 0;
    const a = () => {
      clearTimeout(n), (n = void 0);
    };
    return {
      heard() {
        (r = !0),
          (o = !1),
          a(),
          (n = setTimeout(() => {
            (n = void 0), (r = !1), (o = !0), e("autoIdle");
          }, t.M));
      },
      signalled() {
        a(), r ? ((r = !1), e("autoEou")) : o && ((o = !1), (i += 1));
      },
      reset() {
        a(), (r = !1), (o = !1);
      },
      lateSignals: () => i,
    };
  }),
  (t.M = 3e3);
