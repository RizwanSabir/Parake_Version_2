// vendor/other/module-62901.js — webpack module 62901
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(58637 /* vendor/other/module-58637 */);
function s(e) {
  r.getCurrentScope().setClient(e);
}
(t.initAndBind = function (e, t) {
  !0 === t.debug &&
    (o.DEBUG_BUILD ? i.debug.enable() : i.consoleSandbox(() => {})),
    r.getCurrentScope().update(t.initialScope);
  const n = new e(t);
  return s(n), n.init(), n;
}),
  (t.setCurrentClient = s);
