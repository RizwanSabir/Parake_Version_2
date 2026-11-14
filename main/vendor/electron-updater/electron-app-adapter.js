// vendor/electron-updater/electron-app-adapter.js — webpack module 72947
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.ElectronAppAdapter = void 0;
const r = n(16928 /* external/path */),
  o = n(73453 /* vendor/other/module-73453 */);
t.ElectronAppAdapter = class {
  constructor(e = n(84157 /* external/electron */).app) {
    this.app = e;
  }
  whenReady() {
    return this.app.whenReady();
  }
  get version() {
    return this.app.getVersion();
  }
  get name() {
    return this.app.getName();
  }
  get isPackaged() {
    return !0 === this.app.isPackaged;
  }
  get appUpdateConfigPath() {
    return this.isPackaged
      ? r.join(process.resourcesPath, "app-update.yml")
      : r.join(this.app.getAppPath(), "dev-app-update.yml");
  }
  get userDataPath() {
    return this.app.getPath("userData");
  }
  get baseCachePath() {
    return (0, o.getAppCacheDir)();
  }
  quit() {
    this.app.quit();
  }
  relaunch() {
    this.app.relaunch();
  }
  onQuit(e) {
    this.app.once("quit", (t, n) => e(n));
  }
};
