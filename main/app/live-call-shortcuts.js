// app/live-call-shortcuts.js — webpack module 83034
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.registerLiveCallSessionScreenShortcuts = function () {
  r.globalShortcut.register("CommandOrControl+Enter", () => {
    s.mainWindow &&
      o.ipcMainProxy.emit(
        s.mainWindow,
        "main/primary-ai-message-shortcut-pressed",
      );
  }),
    r.globalShortcut.register("CommandOrControl+Shift+Enter", () => {
      s.mainWindow &&
        o.ipcMainProxy.emit(
          s.mainWindow,
          "main/secondary-ai-message-shortcut-pressed",
        );
    }),
    r.globalShortcut.register("CommandOrControl+Down", () => {
      s.mainWindow &&
        o.ipcMainProxy.emit(
          s.mainWindow,
          "main/down-live-call-session-screen-shortcut-pressed",
        );
    }),
    r.globalShortcut.register("CommandOrControl+Up", () => {
      s.mainWindow &&
        o.ipcMainProxy.emit(
          s.mainWindow,
          "main/up-live-call-session-screen-shortcut-pressed",
        );
    }),
    r.globalShortcut.register("CommandOrControl+H", () => {
      s.mainWindow &&
        o.ipcMainProxy.emit(
          s.mainWindow,
          "main/hide-live-call-session-screen-shortcut-pressed",
        );
    }),
    r.globalShortcut.register("CommandOrControl+Left", () => {
      s.mainWindow &&
        o.ipcMainProxy.emit(
          s.mainWindow,
          "main/previous-ai-message-shortcut-pressed",
        );
    }),
    r.globalShortcut.register("CommandOrControl+Right", () => {
      s.mainWindow &&
        o.ipcMainProxy.emit(
          s.mainWindow,
          "main/next-ai-message-shortcut-pressed",
        );
    }),
    r.globalShortcut.register("CommandOrControl+Backspace", () => {
      s.mainWindow &&
        o.ipcMainProxy.emit(
          s.mainWindow,
          "main/clear-ai-messages-shortcut-pressed",
        );
    }),
    r.globalShortcut.register("CommandOrControl+Shift+Backspace", () => {
      s.mainWindow &&
        o.ipcMainProxy.emit(
          s.mainWindow,
          "main/clear-transcript-shortcut-pressed",
        );
    }),
    r.globalShortcut.register("CommandOrControl+Shift+Space", () => {
      (async () => {
        const e = await (0, i.createOrFocusMainWindow)();
        e && o.ipcMainProxy.emit(e, "main/chat-shortcut-pressed");
      })();
    }),
    r.globalShortcut.register("CommandOrControl+Alt+Enter", () => {
      s.mainWindow &&
        o.ipcMainProxy.emit(
          s.mainWindow,
          "main/add-screenshot-shortcut-pressed",
        );
    });
}),
  (t.unregisterLiveCallSessionScreenShortcuts = function () {
    r.globalShortcut.unregister("CommandOrControl+Enter"),
      r.globalShortcut.unregister("CommandOrControl+Shift+Enter"),
      r.globalShortcut.unregister("CommandOrControl+Down"),
      r.globalShortcut.unregister("CommandOrControl+Up"),
      r.globalShortcut.unregister("CommandOrControl+H"),
      r.globalShortcut.unregister("CommandOrControl+Left"),
      r.globalShortcut.unregister("CommandOrControl+Right"),
      r.globalShortcut.unregister("CommandOrControl+Backspace"),
      r.globalShortcut.unregister("CommandOrControl+Shift+Backspace"),
      r.globalShortcut.unregister("CommandOrControl+Shift+Space"),
      r.globalShortcut.unregister("CommandOrControl+Alt+Enter");
  });
const r = n(84157 /* external/electron */),
  o = n(9596 /* app/ipc-main-proxy */),
  i = n(6586 /* app/create-main-window */),
  s = n(30327 /* app/main-entry */);
