// vendor/module-30964.js — webpack module 30964
// params: (e, t) = (module, exports, require)
"use strict";
t.pickTriggerKind = function ({ chatInput: e, screenshots: t }) {
  const n = !!e.trim();
  return t.length > 0 && !n ? "analyze-screen" : "direct-message";
};
