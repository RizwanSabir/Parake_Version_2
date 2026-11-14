// app/tray.js — webpack module 83924
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.registerTray = function () {
  if (c) return c;
  let e;
  a.isMacOS
    ? ((e = r.nativeImage.createFromPath(
        (0, s.getAssetPath)(o.DESKTOP_BRAND.trayIcon, "tray.png"),
      )),
      e.setTemplateImage(!0))
    : (e = (0, s.getAssetPath)(o.DESKTOP_BRAND.trayIcon, "tray.ico")),
    (c = new r.Tray(e)),
    c.setToolTip(o.DESKTOP_BRAND.name);
  const t = r.Menu.buildFromTemplate([
    { label: "Meeting Detect enabled", enabled: !1 },
    { type: "separator" },
    {
      label: `Open ${o.DESKTOP_BRAND.name}`,
      click: () => {
        (0, i.createOrFocusMainWindow)();
      },
    },
    { type: "separator" },
    { label: `${o.DESKTOP_BRAND.name} ${a.version}`, enabled: !1 },
    { type: "separator" },
    {
      label: "Quit Completely",
      click: () => {
        (async () => {
          (0, i.createOrFocusMainWindow)();
          const { response: e } = await r.dialog.showMessageBox({
            type: "question",
            buttons: ["Quit", "Cancel"],
            cancelId: 1,
            defaultId: 0,
            message: `Quit ${o.DESKTOP_BRAND.name}?`,
            detail: "Notifications for upcoming meetings will stop",
          });
          0 === e && ((0, a.setShouldFullyQuit)(), r.app.quit());
        })();
      },
    },
  ]);
  return (
    a.isWindows &&
      c.on("click", () => {
        (0, i.createOrFocusMainWindow)();
      }),
    c.setContextMenu(t),
    c
  );
}),
  (t.unregisterTray = function () {
    c && (c.destroy(), (c = null));
  });
const r = n(84157 /* external/electron */),
  o = n(26279 /* app/brand-constants */),
  i = n(6586 /* app/create-main-window */),
  s = n(89553 /* app/asset-path */),
  a = n(30327 /* app/main-entry */);
let c = null;
