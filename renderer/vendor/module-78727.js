// vendor/module-78727.js — webpack module 78727
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/module-60467 */);
t.getAbsoluteUrl = function (e) {
  try {
    return new URL(e, r.WINDOW.location.origin).toString();
  } catch {
    return e;
  }
};
