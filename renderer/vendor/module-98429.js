// vendor/module-98429.js — webpack module 98429
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/module-16973 */),
  o = n(75457 /* vendor/module-75457 */);
(t.getDefaultCurrentScope = function () {
  return r.getGlobalSingleton("defaultCurrentScope", () => new o.Scope());
}),
  (t.getDefaultIsolationScope = function () {
    return r.getGlobalSingleton("defaultIsolationScope", () => new o.Scope());
  });
