// vendor/module-12846.js — webpack module 12846
// params: (e, t) = (module, exports, require)
"use strict";
(t.b = void 0),
  (t.decideShareLoopbackErrorAction = function ({
    pinnedDeviceId: e,
    presentDeviceIds: n,
    lastRetryAtMs: r,
    nowMs: o,
  }) {
    return e && n.includes(e)
      ? null !== r && o - r < t.b
        ? "fallback-to-default"
        : "retry-same-device"
      : "fallback-to-default";
  }),
  (t.b = 6e4);
