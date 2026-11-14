// vendor/other/module-10627.js — webpack module 10627
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.merge = function e(t, n, r = 2) {
    if (!n || "object" != typeof n || r <= 0) return n;
    if (t && 0 === Object.keys(n).length) return t;
    const o = { ...t };
    for (const t in n)
      Object.prototype.hasOwnProperty.call(n, t) &&
        (o[t] = e(o[t], n[t], r - 1));
    return o;
  });
