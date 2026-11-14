// vendor/other/module-52891.js — webpack module 52891
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(19410 /* vendor/other/module-19410 */),
  s = 100;
t.addBreadcrumb = function (e, t) {
  const n = r.getClient(),
    a = r.getIsolationScope();
  if (!n) return;
  const { beforeBreadcrumb: c = null, maxBreadcrumbs: u = s } = n.getOptions();
  if (u <= 0) return;
  const l = { timestamp: i.dateTimestampInSeconds(), ...e },
    d = c ? o.consoleSandbox(() => c(l, t)) : l;
  null !== d &&
    (n.emit && n.emit("beforeAddBreadcrumb", d, t), a.addBreadcrumb(d, u));
};
