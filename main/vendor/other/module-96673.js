// vendor/other/module-96673.js — webpack module 96673
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = r.defineIntegration(() => ({
    name: "OnUncaughtException",
    setup(e) {
      const t = e.getOptions();
      global.process.on("uncaughtException", (n) => {
        r.captureException(n, {
          originalException: n,
          captureContext: { level: "fatal" },
          data: { mechanism: { handled: !1, type: "generic" } },
        }),
          e.flush(t.shutdownTimeout || 2e3).then(
            () => {
              if (t?.onFatalError) t.onFatalError(n);
              else if (global.process.listenerCount("uncaughtException") <= 2) {
                const e = n.stack,
                  t = `Uncaught Exception:\n${void 0 !== e ? e : `${n.name}: ${n.message}`}`;
                o.dialog.showErrorBox(
                  "A JavaScript error occurred in the main process",
                  t,
                );
              }
            },
            () => {},
          );
      });
    },
  }));
t.onUncaughtExceptionIntegration = i;
