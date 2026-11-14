// vendor/module-30124.js — webpack module 30124
// params: (e, t) = (module, exports, require)
"use strict";
t.renderLocalDateTokens = function (e) {
  return e.replace(n, (e, t) => {
    const n = new Date(t);
    return Number.isNaN(n.getTime())
      ? e
      : n.toLocaleString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
  });
};
const n = /\{\{localDate:([^}]+)\}\}/g;
