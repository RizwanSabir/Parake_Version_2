// vendor/other/module-32337.js — webpack module 32337
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(33767 /* vendor/other/module-33767 */),
  i = n(53788 /* vendor/other/module-53788 */),
  s = n(20902 /* vendor/other/module-20902 */),
  a = r.defineIntegration(({ shouldHandleError: e } = {}) => {
    let t;
    return {
      name: i.INTEGRATION_NAME,
      setupOnce() {
        (t = e || i.defaultShouldHandleError),
          s.subscribeToFastifyErrorChannel(),
          o.instrumentFastify();
      },
      getShouldHandleError: () => t,
      setShouldHandleError(e) {
        t = e;
      },
    };
  }),
  c = o.instrumentFastify,
  u = s.handleFastifyError;
(t.fastifyIntegration = a),
  (t.handleFastifyError = u),
  (t.instrumentFastify = c);
