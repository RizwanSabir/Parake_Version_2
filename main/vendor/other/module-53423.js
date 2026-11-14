// vendor/other/module-53423.js — webpack module 53423
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(44965 /* vendor/other/module-44965 */);
t.ensureIsWrapped = function (e, t) {
  const n = o.getClient()?.getOptions();
  !n?.disableInstrumentationWarnings &&
    !r.isWrapped(e) &&
    "function" != typeof o.getOriginalFunction(e) &&
    o.isEnabled() &&
    o.hasSpansEnabled(n) &&
    (o.consoleSandbox(() => {}),
    o
      .getGlobalScope()
      .setContext(
        "missing_instrumentation",
        i.createMissingInstrumentationContext(t),
      ));
};
