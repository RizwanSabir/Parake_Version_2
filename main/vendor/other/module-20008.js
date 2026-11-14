// vendor/other/module-20008.js — webpack module 20008
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */);
function o() {
  const e = r.getGlobalScope().getScopeData(),
    t = r.getIsolationScope().getScopeData(),
    n = r.getCurrentScope().getScopeData();
  return (
    r.mergeScopeData(e, t), r.mergeScopeData(e, n), (e.eventProcessors = []), e
  );
}
(t.addScopeListener = function (e) {
  r.getIsolationScope().addScopeListener((t) => {
    const n = o();
    e(n, t);
  }),
    r.getCurrentScope().addScopeListener((t) => {
      const n = o();
      e(n, t);
    }),
    r.getGlobalScope().addScopeListener((t) => {
      const n = o();
      e(n, t);
    });
}),
  (t.getScopeData = o);
