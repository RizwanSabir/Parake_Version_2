// vendor/module-51229.js — webpack module 51229
// params: (e, t) = (module, exports, require)
"use strict";
t.answersWithScreenshots = function (e) {
  return e.flatMap((t, r) => {
    if ("assistant" !== t.role) return [];
    const o = e[r - 1],
      i =
        "user" === o?.role ? (o.metadata?.trigger?.parts ?? []).filter(n) : [];
    return 0 === i.length ? [t] : [{ ...t, parts: [...i, ...t.parts] }];
  });
};
const n = (e) => "file" === e.type;
