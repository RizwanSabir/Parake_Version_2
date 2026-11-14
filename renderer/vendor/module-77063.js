// vendor/module-77063.js — webpack module 77063
// params: (e, t) = (module, exports, require)
"use strict";
(t.CALL_SESSION_SAMPLE_RATE = void 0),
  (t.isCallSessionSampled = function (e) {
    let n = 2166136261;
    for (let t = 0; t < e.length; t++)
      (n ^= e.charCodeAt(t)), (n = Math.imul(n, 16777619) >>> 0);
    return n / 2 ** 32 < t.CALL_SESSION_SAMPLE_RATE;
  }),
  (t.CALL_SESSION_SAMPLE_RATE = 0.1);
