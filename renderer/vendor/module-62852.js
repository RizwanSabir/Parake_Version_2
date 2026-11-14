// vendor/module-62852.js — webpack module 62852
// params: (e, t) = (module, exports, require)
"use strict";
t.formatCountdown = function (e, { hours: t = !1 } = {}) {
  const n = Math.max(0, Math.floor(e / 1e3)),
    r = String(n % 60).padStart(2, "0");
  if (!t) return `${Math.floor(n / 60)}:${r}`;
  const o = String(Math.floor((n % 3600) / 60)).padStart(2, "0");
  return `${String(Math.floor(n / 3600)).padStart(2, "0")}:${o}:${r}`;
};
