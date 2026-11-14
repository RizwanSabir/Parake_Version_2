// app/display-listeners.js — webpack module 37632
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.registerDisplayListeners = function () {
    o.screen.removeAllListeners("display-metrics-changed"),
      o.screen.removeAllListeners("display-removed"),
      o.screen.on("display-metrics-changed", (e, t, n) => {
        if (!a.mainWindow || a.mainWindow.isDestroyed()) return;
        i.default.info("Display metrics changed", {
          displayId: t.id,
          changedMetrics: n,
        });
        const r = (0, c.getCurrentScreenIndex)(),
          u = o.screen.getAllDisplays()[r];
        u && u.id === t.id && (0, s.applyWindowSizeAndMargin)(a.mainWindow);
      }),
      o.screen.on("display-removed", (e, t) => {
        a.mainWindow &&
          !a.mainWindow.isDestroyed() &&
          (i.default.info("Display removed", { displayId: t.id }),
          (0, c.getCurrentScreenIndex)(),
          (0, s.applyWindowSizeAndMargin)(a.mainWindow));
      });
  });
const o = n(84157 /* external/electron */),
  i = r(n(57686 /* vendor/electron-log/index */)),
  s = n(99918 /* app/window-size-and-margin */),
  a = n(30327 /* app/main-entry */),
  c = n(92763 /* app/settings-store */);
