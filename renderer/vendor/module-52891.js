// vendor/module-52891.js — webpack module 52891
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(19410 /* vendor/module-19410 */),
  a = 100;
t.addBreadcrumb = function (e, t) {
  const n = r.getClient(),
    s = r.getIsolationScope();
  if (!n) return;
  const { beforeBreadcrumb: l = null, maxBreadcrumbs: c = a } = n.getOptions();
  if (c <= 0) return;
  const u = { timestamp: i.dateTimestampInSeconds(), ...e },
    d = l ? o.consoleSandbox(() => l(u, t)) : u;
  null !== d &&
    (n.emit && n.emit("beforeAddBreadcrumb", d, t), s.addBreadcrumb(d, c));
};
