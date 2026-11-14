// vendor/electron-log/main.js — webpack module 96674
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(84157 /* external/electron */),
  o = n(5053 /* vendor/electron-log/electron-external-api */),
  { initialize: i } = n(60658 /* vendor/electron-log/initialize */),
  s = n(80466 /* vendor/other/module-80466 */),
  a = new o({ electron: r }),
  c = s({ dependencies: { externalApi: a }, initializeFn: i });
function u(e) {
  c.Logger.getInstance(e)?.processMessage(e);
}
(e.exports = c),
  a.onIpc("__ELECTRON_LOG__", (e, t) => {
    t.scope && c.Logger.getInstance(t).scope(t.scope);
    const n = new Date(t.date);
    u({ ...t, date: n.getTime() ? n : new Date() });
  }),
  a.onIpcInvoke("__ELECTRON_LOG__", (e, { cmd: t = "", logId: n }) =>
    "getOptions" === t
      ? {
          levels: c.Logger.getInstance({ logId: n }).levels,
          logId: n,
        }
      : (u({ data: [`Unknown cmd '${t}'`], level: "error" }), {}),
  );
