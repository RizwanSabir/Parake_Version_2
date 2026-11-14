// vendor/electron-updater/index.js — webpack module 77758
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
    (this && this.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          void 0 === r && (r = n);
          var o = Object.getOwnPropertyDescriptor(t, n);
          (o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
            (o = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, o);
        }
      : function (e, t, n, r) {
          void 0 === r && (r = n), (e[r] = t[n]);
        }),
  o =
    (this && this.__exportStar) ||
    function (e, t) {
      for (var n in e)
        "default" === n ||
          Object.prototype.hasOwnProperty.call(t, n) ||
          r(t, e, n);
    };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.NsisUpdater =
    t.MacUpdater =
    t.RpmUpdater =
    t.PacmanUpdater =
    t.DebUpdater =
    t.AppImageUpdater =
    t.Provider =
    t.NoOpLogger =
    t.AppUpdater =
    t.BaseUpdater =
      void 0);
const i = n(28368 /* vendor/other/module-28368 */),
  s = n(16928 /* external/path */);
var a = n(55125 /* vendor/electron-updater/base-updater */);
Object.defineProperty(t, "BaseUpdater", {
  enumerable: !0,
  get: function () {
    return a.BaseUpdater;
  },
});
var c = n(62839 /* vendor/electron-updater/app-updater */);
Object.defineProperty(t, "AppUpdater", {
  enumerable: !0,
  get: function () {
    return c.AppUpdater;
  },
}),
  Object.defineProperty(t, "NoOpLogger", {
    enumerable: !0,
    get: function () {
      return c.NoOpLogger;
    },
  });
var u = n(13153 /* vendor/other/module-13153 */);
Object.defineProperty(t, "Provider", {
  enumerable: !0,
  get: function () {
    return u.Provider;
  },
});
var l = n(47378 /* vendor/electron-updater/appimage-updater */);
Object.defineProperty(t, "AppImageUpdater", {
  enumerable: !0,
  get: function () {
    return l.AppImageUpdater;
  },
});
var d = n(45895 /* vendor/electron-updater/deb-updater */);
Object.defineProperty(t, "DebUpdater", {
  enumerable: !0,
  get: function () {
    return d.DebUpdater;
  },
});
var p = n(50590 /* vendor/electron-updater/pacman-updater */);
Object.defineProperty(t, "PacmanUpdater", {
  enumerable: !0,
  get: function () {
    return p.PacmanUpdater;
  },
});
var f = n(68837 /* vendor/electron-updater/rpm-updater */);
Object.defineProperty(t, "RpmUpdater", {
  enumerable: !0,
  get: function () {
    return f.RpmUpdater;
  },
});
var h = n(71063 /* vendor/electron-updater/mac-updater */);
Object.defineProperty(t, "MacUpdater", {
  enumerable: !0,
  get: function () {
    return h.MacUpdater;
  },
});
var g = n(20443 /* vendor/electron-updater/nsis-updater */);
let m;
Object.defineProperty(t, "NsisUpdater", {
  enumerable: !0,
  get: function () {
    return g.NsisUpdater;
  },
}),
  o(n(30690 /* vendor/other/module-30690 */), t),
  Object.defineProperty(t, "autoUpdater", {
    enumerable: !0,
    get: () =>
      m ||
      (function () {
        if ("win32" === process.platform)
          m = new (n(
            20443 /* vendor/electron-updater/nsis-updater */,
          ).NsisUpdater)();
        else if ("darwin" === process.platform)
          m = new (n(
            71063 /* vendor/electron-updater/mac-updater */,
          ).MacUpdater)();
        else {
          m = new (n(
            47378 /* vendor/electron-updater/appimage-updater */,
          ).AppImageUpdater)();
          try {
            const e = s.join(process.resourcesPath, "package-type");
            if (!(0, i.existsSync)(e)) return m;
            switch ((0, i.readFileSync)(e).toString().trim()) {
              case "deb":
                m = new (n(
                  45895 /* vendor/electron-updater/deb-updater */,
                ).DebUpdater)();
                break;
              case "rpm":
                m = new (n(
                  68837 /* vendor/electron-updater/rpm-updater */,
                ).RpmUpdater)();
                break;
              case "pacman":
                m = new (n(
                  50590 /* vendor/electron-updater/pacman-updater */,
                ).PacmanUpdater)();
            }
          } catch (e) {}
        }
        return m;
      })(),
  });
