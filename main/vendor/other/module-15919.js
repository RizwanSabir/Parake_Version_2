// vendor/other/module-15919.js — webpack module 15919
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(58637 /* vendor/other/module-58637 */);
function s(e) {
  return (
    !!e &&
    void 0 !== e._profiler &&
    "function" == typeof e._profiler.start &&
    "function" == typeof e._profiler.stop
  );
}
const a = {
  startProfiler: function () {
    const e = r.getClient();
    if (!e)
      return void (
        o.DEBUG_BUILD &&
        i.debug.warn("No Sentry client available, profiling is not started")
      );
    const t = e.getIntegrationByName("ProfilingIntegration");
    t
      ? s(t)
        ? t._profiler.start()
        : o.DEBUG_BUILD &&
          i.debug.warn("Profiler is not available on profiling integration.")
      : o.DEBUG_BUILD && i.debug.warn("ProfilingIntegration is not available");
  },
  stopProfiler: function () {
    const e = r.getClient();
    if (!e)
      return void (
        o.DEBUG_BUILD &&
        i.debug.warn("No Sentry client available, profiling is not started")
      );
    const t = e.getIntegrationByName("ProfilingIntegration");
    t
      ? s(t)
        ? t._profiler.stop()
        : o.DEBUG_BUILD &&
          i.debug.warn("Profiler is not available on profiling integration.")
      : o.DEBUG_BUILD && i.debug.warn("ProfilingIntegration is not available");
  },
};
t.profiler = a;
