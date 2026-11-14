// vendor/other/module-88422.js — webpack module 88422
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(27352 /* vendor/other/module-27352 */);
(t.derefWeakRef = function (e) {
  if (e) {
    if ("object" == typeof e && "deref" in e && "function" == typeof e.deref)
      try {
        return e.deref();
      } catch {
        return;
      }
    return e;
  }
}),
  (t.makeWeakRef = function (e) {
    try {
      const t = r.GLOBAL_OBJ.WeakRef;
      if ("function" == typeof t) return new t(e);
    } catch {}
    return e;
  });
