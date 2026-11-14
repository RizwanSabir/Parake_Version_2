// vendor/module-80291.js — webpack module 80291
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/module-60467 */);
(t.addPageListener = function (e, t, n) {
  r.WINDOW.document && r.WINDOW.addEventListener(e, t, n);
}),
  (t.removePageListener = function (e, t, n) {
    r.WINDOW.document && r.WINDOW.removeEventListener(e, t, n);
  });
