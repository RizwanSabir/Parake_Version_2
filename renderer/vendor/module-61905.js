// vendor/module-61905.js — webpack module 61905
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = {
    startProfiler: function () {
      const e = r.getClient();
      e
        ? e.getIntegrationByName("BrowserProfiling")
          ? e.emit("startUIProfiler")
          : o.DEBUG_BUILD &&
            r.debug.warn("BrowserProfiling integration is not available")
        : o.DEBUG_BUILD &&
          r.debug.warn("No Sentry client available, profiling is not started");
    },
    stopProfiler: function () {
      const e = r.getClient();
      e
        ? e.getIntegrationByName("BrowserProfiling")
          ? e.emit("stopUIProfiler")
          : o.DEBUG_BUILD &&
            r.debug.warn("ProfilingIntegration is not available")
        : o.DEBUG_BUILD &&
          r.debug.warn("No Sentry client available, profiling is not started");
    },
  };
t.uiProfiler = i;
