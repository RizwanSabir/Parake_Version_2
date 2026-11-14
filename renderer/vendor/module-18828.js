// vendor/module-18828.js — webpack module 18828
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.parseSampleRate = function (e) {
    if ("boolean" == typeof e) return Number(e);
    const t = "string" == typeof e ? parseFloat(e) : e;
    return "number" != typeof t || isNaN(t) || t < 0 || t > 1 ? void 0 : t;
  });
