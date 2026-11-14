// app/ipc-main-proxy.js — webpack module 9596
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.ipcMainProxy = void 0;
const r = n(84157 /* external/electron */);
t.ipcMainProxy = {
  handle: function (e, t) {
    r.ipcMain.handle(e, t);
  },
  emit: function (e, t, ...n) {
    const r = "webContents" in e ? e.webContents : e;
    0 === n.length ? r.send(t) : r.send(t, n[0]);
  },
};
