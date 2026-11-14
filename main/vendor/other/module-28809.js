// vendor/other/module-28809.js — webpack module 28809
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
(t.detectOrchestrionSetup = function () {
  const { runtime: e, bundler: t } = r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__ ?? {};
  e || t
    ? (r.debug.log(
        e
          ? `[Sentry] Runtime hook registered, injected libraries=${JSON.stringify(e)}`
          : "[Sentry] Runtime hook not registered",
      ),
      r.debug.log(
        t
          ? `[Sentry] Bundler plugin ran, injected libraries=${JSON.stringify(t)}`
          : "[Sentry] Bundler plugin did not run",
      ))
    : r.debug.warn(
        "[Sentry] No diagnostics-channel injection detected. Channel-based integrations will not record spans. Make sure the diagnostics channels are injected via the runtime `--import` hook or a bundler plugin before the instrumented modules load.",
      );
}),
  (t.isOrchestrionInjected = function () {
    return !!r.GLOBAL_OBJ.__SENTRY_ORCHESTRION__;
  });
