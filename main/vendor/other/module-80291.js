// vendor/other/module-80291.js — webpack module 80291
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/other/module-60467 */);
(t.addPageListener = function (e, t, n) {
  r.WINDOW.document && r.WINDOW.addEventListener(e, t, n);
}),
  (t.removePageListener = function (e, t, n) {
    r.WINDOW.document && r.WINDOW.removeEventListener(e, t, n);
  });
