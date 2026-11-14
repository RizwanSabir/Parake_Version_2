// vendor/other/module-25559.js — webpack module 25559
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(27134 /* vendor/other/module-27134 */),
  i = n(64673 /* vendor/other/module-64673 */),
  s = n(24026 /* vendor/other/module-24026 */),
  a = n(38673 /* vendor/other/module-38673 */),
  c = o.generateInstrumentOnce(
    s.INTEGRATION_NAME,
    () => new a.SentryVercelAiInstrumentation({}),
  ),
  u = r.defineIntegration((e = {}) => {
    let t;
    const n = i.vercelAiIntegration(e);
    return r.extendIntegration(n, {
      options: e,
      setupOnce() {
        t = c();
      },
      afterAllSetup(n) {
        const o =
          e.force ??
          (function (e) {
            const t = e.getIntegrationByName("Modules");
            return !!t?.getModules?.()?.ai;
          })(n);
        o
          ? r.addVercelAiProcessors(n)
          : t?.callWhenPatched(() => r.addVercelAiProcessors(n));
      },
    });
  });
(t.instrumentVercelAi = c), (t.vercelAIIntegration = u);
