// vendor/sentry/offline-transport.js — webpack module 86281
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(91275 /* vendor/other/module-91275 */),
  i = n(22332 /* vendor/sentry/offline-store */);
t.makeElectronOfflineTransport = function (e = o.makeElectronTransport) {
  return (t) =>
    r.makeOfflineTransport(e)({
      flushAtStartup: !0,
      createStore: i.createOfflineStore,
      ...t,
    });
};
