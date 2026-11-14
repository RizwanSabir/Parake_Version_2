// vendor/electron-updater/rpm-updater.js — webpack module 68837
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.RpmUpdater = void 0);
const r = n(30690 /* vendor/other/module-30690 */),
  o = n(13153 /* vendor/other/module-13153 */),
  i = n(10876 /* vendor/electron-updater/linux-updater */);
class s extends i.LinuxUpdater {
  constructor(e, t) {
    super(e, t);
  }
  doDownloadUpdate(e) {
    const t = e.updateInfoAndProvider.provider,
      n = (0, o.findFile)(t.resolveFiles(e.updateInfoAndProvider.info), "rpm", [
        "AppImage",
        "deb",
        "pacman",
      ]);
    return this.executeDownload({
      fileExtension: "rpm",
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
    const n = this.detectPackageManager(["zypper", "dnf", "yum", "rpm"]);
    try {
      s.installWithCommandRunner(
        n,
        t,
        this.runCommandWithSudoIfNeeded.bind(this),
        this._logger,
      );
    } catch (e) {
      return this.dispatchError(e), !1;
    }
    return e.isForceRunAfter && this.app.relaunch(), !0;
  }
  static installWithCommandRunner(e, t, n, r) {
    if ("zypper" === e)
      return n([
        "zypper",
        "--non-interactive",
        "--no-refresh",
        "install",
        "--allow-unsigned-rpm",
        "-f",
        t,
      ]);
    if ("dnf" === e) return n(["dnf", "install", "--nogpgcheck", "-y", t]);
    if ("yum" === e) return n(["yum", "install", "--nogpgcheck", "-y", t]);
    if ("rpm" === e)
      return (
        r.warn("Installing with rpm only (no dependency resolution)."),
        n(["rpm", "-Uvh", "--replacepkgs", "--replacefiles", "--nodeps", t])
      );
    throw new Error(`Package manager ${e} not supported`);
  }
}
t.RpmUpdater = s;
