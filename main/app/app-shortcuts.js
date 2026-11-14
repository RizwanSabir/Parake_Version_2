// app/app-shortcuts.js — webpack module 36501
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.registerAppShortcuts = function () {
  r.globalShortcut.register("CommandOrControl+Shift+Up", () => {
    i.mainWindow &&
      o.ipcMainProxy.emit(i.mainWindow, "main/up-app-shortcut-pressed");
  }),
    r.globalShortcut.register("CommandOrControl+Shift+Down", () => {
      i.mainWindow &&
        o.ipcMainProxy.emit(i.mainWindow, "main/down-app-shortcut-pressed");
    }),
    r.globalShortcut.register("CommandOrControl+Shift+Left", () => {
      i.mainWindow &&
        o.ipcMainProxy.emit(i.mainWindow, "main/left-app-shortcut-pressed");
    }),
    r.globalShortcut.register("CommandOrControl+Shift+Right", () => {
      i.mainWindow &&
        o.ipcMainProxy.emit(i.mainWindow, "main/right-app-shortcut-pressed");
    });
}),
  (t.unregisterAppShortcuts = function () {
    r.globalShortcut.unregister("CommandOrControl+Shift+Up"),
      r.globalShortcut.unregister("CommandOrControl+Shift+Down"),
      r.globalShortcut.unregister("CommandOrControl+Shift+Left"),
      r.globalShortcut.unregister("CommandOrControl+Shift+Right");
  });
const r = n(84157 /* external/electron */),
  o = n(9596 /* app/ipc-main-proxy */),
  i = n(30327 /* app/main-entry */);
