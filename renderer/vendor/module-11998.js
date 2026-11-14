// vendor/module-11998.js — webpack module 11998
// params: (e, t) = (module, exports, require)
"use strict";
t.afterShareSilenceEvent = function (e) {
  return "silence-detected" === e.type
    ? { computerSilent: !0 }
    : { computerSilent: "sound" !== e.endedBy && null };
};
