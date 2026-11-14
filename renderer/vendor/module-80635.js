// vendor/module-80635.js — webpack module 80635
// params: (e, t) = (module, exports, require)
"use strict";
t.resolveExitPrompt = async function (e) {
  return Promise.race([
    (async () => e())().catch(() => null),
    new Promise((e) => setTimeout(() => e(null), 1500)),
  ]);
};
