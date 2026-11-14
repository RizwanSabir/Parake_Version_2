// vendor/other/module-78727.js — webpack module 78727
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/other/module-60467 */);
t.getAbsoluteUrl = function (e) {
  try {
    return new URL(e, r.WINDOW.location.origin).toString();
  } catch {
    return e;
  }
};
