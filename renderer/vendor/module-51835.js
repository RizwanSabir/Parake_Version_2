// vendor/module-51835.js — webpack module 51835
// params: (e, t) = (module, exports, require)
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
