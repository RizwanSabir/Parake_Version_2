// vendor/other/module-42408.js — webpack module 42408
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(23295 /* vendor/other/module-23295 */),
  s = n(35959 /* vendor/other/module-35959 */);
function a(e, t, n, s) {
  const c = n[s];
  if (!e || !c) return e;
  const u = c({ ...e }, t);
  return (
    r.DEBUG_BUILD &&
      null === u &&
      o.debug.log(`Event processor "${c.id || "?"}" dropped event`),
    i.isThenable(u) ? u.then((e) => a(e, t, n, s + 1)) : a(u, t, n, s + 1)
  );
}
t.notifyEventProcessors = function (e, t, n, r = 0) {
  try {
    const o = a(t, n, e, r);
    return i.isThenable(o) ? o : s.resolvedSyncPromise(o);
  } catch (e) {
    return s.rejectedSyncPromise(e);
  }
};
