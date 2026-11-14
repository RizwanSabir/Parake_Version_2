// vendor/electron-log/electron-external-api.js — webpack module 5053
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(16928 /* external/path */),
  o = n(81698 /* vendor/other/module-81698 */);
e.exports = class extends o {
  electron = void 0;
  constructor({ electron: e } = {}) {
    super(), (this.electron = e);
  }
  getAppName() {
    let e;
    try {
      e =
        this.appName || this.electron.app?.name || this.electron.app?.getName();
    } catch {}
    return e || super.getAppName();
  }
  getAppUserDataPath(e) {
    return this.getPath("userData") || super.getAppUserDataPath(e);
  }
  getAppVersion() {
    let e;
    try {
      e = this.electron.app?.getVersion();
    } catch {}
    return e || super.getAppVersion();
  }
  getElectronLogPath() {
    return this.getPath("logs") || super.getElectronLogPath();
  }
  getPath(e) {
    try {
      return this.electron.app?.getPath(e);
    } catch {
      return;
    }
  }
  getVersions() {
    return {
      app: `${this.getAppName()} ${this.getAppVersion()}`,
      electron: `Electron ${process.versions.electron}`,
      os: this.getOsVersion(),
    };
  }
  getSystemPathAppData() {
    return this.getPath("appData") || super.getSystemPathAppData();
  }
  isDev() {
    return void 0 !== this.electron.app?.isPackaged
      ? !this.electron.app.isPackaged
      : "string" == typeof process.execPath
        ? r.basename(process.execPath).toLowerCase().startsWith("electron")
        : super.isDev();
  }
  onAppEvent(e, t) {
    return (
      this.electron.app?.on(e, t),
      () => {
        this.electron.app?.off(e, t);
      }
    );
  }
  onAppReady(e) {
    this.electron.app?.isReady()
      ? e()
      : this.electron.app?.once
        ? this.electron.app?.once("ready", e)
        : e();
  }
  onEveryWebContentsEvent(e, t) {
    return (
      this.electron.webContents?.getAllWebContents()?.forEach((n) => {
        n.on(e, t);
      }),
      this.electron.app?.on("web-contents-created", n),
      () => {
        this.electron.webContents?.getAllWebContents().forEach((n) => {
          n.off(e, t);
        }),
          this.electron.app?.off("web-contents-created", n);
      }
    );
    function n(n, r) {
      r.on(e, t);
    }
  }
  onIpc(e, t) {
    this.electron.ipcMain?.on(e, t);
  }
  onIpcInvoke(e, t) {
    this.electron.ipcMain?.handle?.(e, t);
  }
  openUrl(e, t = console.error) {
    this.electron.shell?.openExternal(e).catch(t);
  }
  setPreloadFileForSessions({
    filePath: e,
    includeFutureSession: t = !0,
    getSessions: n = () => [this.electron.session?.defaultSession],
  }) {
    for (const e of n().filter(Boolean)) r(e);
    function r(t) {
      "function" == typeof t.registerPreloadScript
        ? t.registerPreloadScript({
            filePath: e,
            id: "electron-log-preload",
            type: "frame",
          })
        : t.setPreloads([...t.getPreloads(), e]);
    }
    t &&
      this.onAppEvent("session-created", (e) => {
        r(e);
      });
  }
  sendIpc(e, t) {
    this.electron.BrowserWindow?.getAllWindows()?.forEach((n) => {
      !1 === n.webContents?.isDestroyed() &&
        !1 === n.webContents?.isCrashed() &&
        n.webContents.send(e, t);
    });
  }
  showErrorBox(e, t) {
    this.electron.dialog?.showErrorBox(e, t);
  }
};
