// app/private-mode.js — webpack module 89800
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.setPrivateMode = function (e) {
  o.mainWindow &&
    !o.mainWindow.isDestroyed() &&
    (o.mainWindow.setContentProtection(e),
    r.ipcMainProxy.emit(o.mainWindow, "main/private-mode-changed", e)),
    (0, i.setSetting)("isPrivate", e);
}),
  (t.getPrivateMode = function () {
    return (0, i.getSetting)("isPrivate");
  });
const r = n(9596 /* app/ipc-main-proxy */),
  o = n(30327 /* app/main-entry */),
  i = n(92763 /* app/settings-store */);
