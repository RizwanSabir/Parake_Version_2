// vendor/module-45222.js — webpack module 45222
// params: (e, t) = (module, exports, require)
"use strict";
t.millisecondsToTimeString = function (e) {
  if (e < 0) return "0:00";
  const t = Math.floor(e / 1e3),
    n = Math.floor(t / 60),
    r = Math.floor(n / 60) % 24,
    o = n % 60,
    i = t % 60;
  return r
    ? `${r}:${o.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`
    : i || o
      ? `${o}:${i.toString().padStart(2, "0")}`
      : "0:00";
};
