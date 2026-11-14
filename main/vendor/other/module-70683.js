// vendor/other/module-70683.js — webpack module 70683
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = r.defineIntegration(
    (e) => (
      r.isBrowser() || r.consoleSandbox(() => {}), { name: "LaunchDarkly" }
    ),
  );
(t.buildLaunchDarklyFlagUsedHandlerShim = function () {
  return (
    r.isBrowser() || r.consoleSandbox(() => {}),
    {
      name: "sentry-flag-auditor",
      type: "flag-used",
      synchronous: !0,
      method: () => null,
    }
  );
}),
  (t.launchDarklyIntegrationShim = o);
