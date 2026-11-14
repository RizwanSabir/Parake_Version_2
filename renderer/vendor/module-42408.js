// vendor/module-42408.js — webpack module 42408
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(23295 /* vendor/module-23295 */),
  a = n(35959 /* vendor/module-35959 */);
function s(e, t, n, a) {
  const l = n[a];
  if (!e || !l) return e;
  const c = l({ ...e }, t);
  return (
    r.DEBUG_BUILD &&
      null === c &&
      o.debug.log(`Event processor "${l.id || "?"}" dropped event`),
    i.isThenable(c) ? c.then((e) => s(e, t, n, a + 1)) : s(c, t, n, a + 1)
  );
}
t.notifyEventProcessors = function (e, t, n, r = 0) {
  try {
    const o = s(t, n, e, r);
    return i.isThenable(o) ? o : a.resolvedSyncPromise(o);
  } catch (e) {
    return a.rejectedSyncPromise(e);
  }
};
