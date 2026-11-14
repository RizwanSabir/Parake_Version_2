// vendor/other/module-16588.js — webpack module 16588
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(76414 /* vendor/other/module-76414 */),
  i = n(57230 /* vendor/other/module-57230 */),
  s = n(39053 /* vendor/other/module-39053 */),
  a = r.defineIntegration((e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (void 0 === s.WINDOW.document)
          return void (
            i.DEBUG_BUILD &&
            r.debug.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported.",
            )
          );
        r.startSession({ ignoreDuration: !0 });
        let e = !1;
        o.whenIdleOrHidden(() => {
          e || (r.captureSession(), (e = !0));
        });
        const n = r.getIsolationScope();
        let a = n.getUser();
        n.addScopeListener((t) => {
          const n = t.getUser();
          (a?.id === n?.id && a?.ip_address === n?.ip_address) ||
            ((a = n), e && r.captureSession());
        }),
          "route" === t &&
            o.addHistoryInstrumentationHandler(({ from: t, to: n }) => {
              t !== n &&
                (r.startSession({ ignoreDuration: !0 }),
                r.captureSession(),
                (e = !0));
            });
      },
    };
  });
t.browserSessionIntegration = a;
