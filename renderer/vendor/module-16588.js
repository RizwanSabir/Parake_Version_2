// vendor/module-16588.js — webpack module 16588
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(76414 /* vendor/module-76414 */),
  i = n(57230 /* vendor/module-57230 */),
  a = n(39053 /* vendor/module-39053 */),
  s = r.defineIntegration((e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (void 0 === a.WINDOW.document)
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
        let s = n.getUser();
        n.addScopeListener((t) => {
          const n = t.getUser();
          (s?.id === n?.id && s?.ip_address === n?.ip_address) ||
            ((s = n), e && r.captureSession());
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
t.browserSessionIntegration = s;
