// vendor/module-39366.js — webpack module 39366
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(17442 /* vendor/module-17442 */);
t.getTraceMetaTags = function (e) {
  return Object.entries(e || r.getTraceData())
    .map(([e, t]) => `<meta name="${e}" content="${t}"/>`)
    .join("");
};
