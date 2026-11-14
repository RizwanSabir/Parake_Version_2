// vendor/electron-updater/pacman-updater.js — webpack module 50590
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.PacmanUpdater = void 0);
const r = n(30690 /* vendor/other/module-30690 */),
  o = n(13153 /* vendor/other/module-13153 */),
  i = n(10876 /* vendor/electron-updater/linux-updater */);
class s extends i.LinuxUpdater {
  constructor(e, t) {
    super(e, t);
  }
  doDownloadUpdate(e) {
    const t = e.updateInfoAndProvider.provider,
      n = (0, o.findFile)(
        t.resolveFiles(e.updateInfoAndProvider.info),
        "pacman",
        ["AppImage", "deb", "rpm"],
      );
    return this.executeDownload({
      fileExtension: "pacman",
      fileInfo: n,
      downloadUpdateOptions: e,
      task: async (e, t) => {
        this.listenerCount(r.DOWNLOAD_PROGRESS) > 0 &&
          (t.onProgress = (e) => this.emit(r.DOWNLOAD_PROGRESS, e)),
          await this.httpExecutor.download(n.url, e, t);
      },
    });
  }
  doInstall(e) {
    const t = this.installerPath;
    if (null == t)
      return (
        this.dispatchError(
          new Error("No update filepath provided, can't quit and install"),
        ),
        !1
      );
    try {
      s.installWithCommandRunner(
        t,
        this.runCommandWithSudoIfNeeded.bind(this),
        this._logger,
      );
    } catch (e) {
      return this.dispatchError(e), !1;
    }
    return e.isForceRunAfter && this.app.relaunch(), !0;
  }
  static installWithCommandRunner(e, t, n) {
    var r;
    try {
      t(["pacman", "-U", "--noconfirm", e]);
    } catch (o) {
      n.warn(null !== (r = o.message) && void 0 !== r ? r : o),
        n.warn(
          "pacman installation failed, attempting to update package database and retry",
        );
      try {
        t(["pacman", "-Sy", "--noconfirm"]),
          t(["pacman", "-U", "--noconfirm", e]);
      } catch (e) {
        throw (n.error("Retry after pacman -Sy failed"), e);
      }
    }
  }
}
t.PacmanUpdater = s;
