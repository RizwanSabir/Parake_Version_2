// vendor/other/module-62411.js — webpack module 62411
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */);
t.setActiveSpanInBrowser = function (e) {
  const t = r.getActiveSpan();
  if (t === e) return;
  const n = r.getCurrentScope();
  (e.end = new Proxy(e.end, {
    apply: (e, o, i) => (
      r._INTERNAL_setSpanForScope(n, t), Reflect.apply(e, o, i)
    ),
  })),
    r._INTERNAL_setSpanForScope(n, e);
};
