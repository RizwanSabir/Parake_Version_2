// vendor/other/module-51835.js — webpack module 51835
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.observe = (e, t, n = {}) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const r = new PerformanceObserver((e) => {
          Promise.resolve().then(() => {
            t(e.getEntries());
          });
        });
        return r.observe({ type: e, buffered: !0, ...n }), r;
      }
    } catch {}
  });
