// vendor/other/module-87228.js — webpack module 87228
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const { maxDepth: r, toJSON: o } = n(62710 /* vendor/other/module-62710 */),
  { transform: i } = n(83748 /* vendor/other/module-83748 */);
e.exports = function (e, { externalApi: t }) {
  return (
    Object.assign(n, {
      depth: 3,
      eventId: "__ELECTRON_LOG_IPC__",
      level: !!e.isDev && "silly",
      transforms: [o, r],
    }),
    t?.isElectron() ? n : void 0
  );
  function n(r) {
    "renderer" !== r?.variables?.processType &&
      t?.sendIpc(n.eventId, {
        ...r,
        data: i({ logger: e, message: r, transport: n }),
      });
  }
};
