// vendor/other/module-95246.js — webpack module 95246
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
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
