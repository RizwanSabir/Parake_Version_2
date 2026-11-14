// vendor/other/module-79757.js — webpack module 79757
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = r.defineIntegration(() => ({
    name: "ProcessSession",
    setupOnce() {
      r.startSession(),
        process.on("beforeExit", () => {
          const e = r.getIsolationScope().getSession();
          "ok" !== e?.status && r.endSession();
        });
    },
  }));
t.processSessionIntegration = o;
