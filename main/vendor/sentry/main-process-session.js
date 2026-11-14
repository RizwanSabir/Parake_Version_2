// vendor/sentry/main-process-session.js — webpack module 54772
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(66383 /* vendor/sentry/session-tracking */),
  i = r.defineIntegration((e = {}) => ({
    name: "MainProcessSession",
    setup() {
      o.startSession(!!e.sendOnCreate), o.endSessionOnExit();
    },
  }));
t.mainProcessSessionIntegration = i;
