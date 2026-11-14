// vendor/module-95246.js — webpack module 95246
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.getPossibleEventMessages = function (e) {
    const t = [];
    e.message && t.push(e.message);
    try {
      const n = e.exception.values[e.exception.values.length - 1];
      n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
    } catch {}
    return t;
  });
