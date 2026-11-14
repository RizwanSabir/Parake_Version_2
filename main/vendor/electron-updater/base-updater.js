// vendor/electron-updater/base-updater.js — webpack module 55125
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.BaseUpdater = void 0);
const r = n(35317 /* external/child_process */),
  o = n(16928 /* external/path */),
  i = n(62839 /* vendor/electron-updater/app-updater */);
class s extends i.AppUpdater {
  constructor(e, t) {
    super(e, t), (this.quitAndInstallCalled = !1), (this.quitHandlerAdded = !1);
  }
  quitAndInstall(e = !1, t = !1) {
    this._logger.info("Install on explicit quitAndInstall"),
      this.install(e, e ? t : this.autoRunAppAfterInstall)
        ? setImmediate(() => {
            n(84157 /* external/electron */).autoUpdater.emit(
              "before-quit-for-update",
            ),
              this.app.quit();
          })
        : (this.quitAndInstallCalled = !1);
  }
  executeDownload(e) {
    return super.executeDownload({
      ...e,
      done: (e) => (
        this.dispatchUpdateDownloaded(e),
        this.addQuitHandler(),
        Promise.resolve()
      ),
    });
  }
  get installerPath() {
    return null == this.downloadedUpdateHelper
      ? null
      : this.downloadedUpdateHelper.file;
  }
  install(e = !1, t = !1) {
    if (this.quitAndInstallCalled)
      return (
        this._logger.warn(
          "install call ignored: quitAndInstallCalled is set to true",
        ),
        !1
      );
    const n = this.downloadedUpdateHelper,
      r = this.installerPath,
      o = null == n ? null : n.downloadedFileInfo;
    if (null == r || null == o)
      return (
        this.dispatchError(
          new Error("No update filepath provided, can't quit and install"),
        ),
        !1
      );
    this.quitAndInstallCalled = !0;
    try {
      return (
        this._logger.info(`Install: isSilent: ${e}, isForceRunAfter: ${t}`),
        this.doInstall({
          isSilent: e,
          isForceRunAfter: t,
          isAdminRightsRequired: o.isAdminRightsRequired,
        })
      );
    } catch (e) {
      return this.dispatchError(e), !1;
    }
  }
  addQuitHandler() {
    !this.quitHandlerAdded &&
      this.autoInstallOnAppQuit &&
      ((this.quitHandlerAdded = !0),
      this.app.onQuit((e) => {
        this.quitAndInstallCalled
          ? this._logger.info(
              "Update installer has already been triggered. Quitting application.",
            )
          : this.autoInstallOnAppQuit
            ? 0 === e
              ? (this._logger.info("Auto install update on quit"),
                this.install(!0, !1))
              : this._logger.info(
                  `Update will be not installed on quit because application is quitting with exit code ${e}`,
                )
            : this._logger.info(
                "Update will not be installed on quit because autoInstallOnAppQuit is set to false.",
              );
      }));
  }
  sanitizeEnvPath(e) {
    return e
      .split(o.delimiter)
      .filter((e) => o.isAbsolute(e))
      .join(o.delimiter);
  }
  spawnSyncLog(e, t = [], n = {}) {
    var o;
    this._logger.info(`Executing: ${e} with args: ${t}`);
    const i = { ...process.env, ...n },
      s = (0, r.spawnSync)(e, t, {
        env: {
          ...i,
          PATH: this.sanitizeEnvPath(
            null !== (o = i.PATH) && void 0 !== o ? o : "",
          ),
        },
        encoding: "utf-8",
        shell: !0,
      }),
      { error: a, status: c, stdout: u, stderr: l } = s;
    if (null != a) throw (this._logger.error(l), a);
    if (null != c && 0 !== c)
      throw (
        (this._logger.error(l), new Error(`Command ${e} exited with code ${c}`))
      );
    return u.trim();
  }
  async spawnLog(e, t = [], n = void 0, o = "ignore") {
    return (
      this._logger.info(`Executing: ${e} with args: ${t}`),
      new Promise((i, s) => {
        try {
          const a = { stdio: o, env: n, detached: !0 },
            c = (0, r.spawn)(e, t, a);
          c.on("error", (e) => {
            s(e);
          }),
            c.unref(),
            void 0 !== c.pid && i(!0);
        } catch (e) {
          s(e);
        }
      })
    );
  }
}
t.BaseUpdater = s;
