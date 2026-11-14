// vendor/module-88194.js — webpack module 88194
// params: (e, t) = (module, exports, require)
"use strict";
(t.RECONNECT_RETRY_DELAYS_MS = t.v5 = t.jO = void 0),
  (t.createRecoveryBudget = function (e = t.v5) {
    let n = 0,
      r = null;
    function o(e) {
      0 !== n &&
        (null !== r ? e - r >= t.jO && ((n = 0), (r = null)) : (r = e));
    }
    return {
      tryConsume(t) {
        o(t);
        const i = e[n];
        return void 0 === i
          ? null
          : ((n += 1), (r = null), { attempt: n, delayMs: i });
      },
      markRecording: o,
      reset() {
        r = null;
      },
    };
  }),
  (t.jO = 3e4),
  (t.v5 = [0, 1e3, 2e3, 5e3, 1e4]),
  (t.RECONNECT_RETRY_DELAYS_MS = [0, 1e3, 2e3, 5e3, 1e4, 2e4, 3e4]);
