// vendor/electron-updater/deb-updater.js — webpack module 45895
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebUpdater = void 0);
const r = n(13153 /* vendor/other/module-13153 */),
  o = n(30690 /* vendor/other/module-30690 */),
  i = n(10876 /* vendor/electron-updater/linux-updater */);
class s extends i.LinuxUpdater {
  constructor(e, t) {
    super(e, t);
  }
  doDownloadUpdate(e) {
    const t = e.updateInfoAndProvider.provider,
      n = (0, r.findFile)(t.resolveFiles(e.updateInfoAndProvider.info), "deb", [
        "AppImage",
        "rpm",
        "pacman",
      ]);
    return this.executeDownload({
      fileExtension: "deb",
      fileInfo: n,
      downloadUpdateOptions: e,
      task: async (e, t) => {
        this.listenerCount(o.DOWNLOAD_PROGRESS) > 0 &&
          (t.onProgress = (e) => this.emit(o.DOWNLOAD_PROGRESS, e)),
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
    if (!this.hasCommand("dpkg") && !this.hasCommand("apt"))
      return (
        this.dispatchError(
          new Error(
            "Neither dpkg nor apt command found. Cannot install .deb package.",
          ),
        ),
        !1
      );
    const n = this.detectPackageManager(["dpkg", "apt"]);
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
    var o;
    if ("dpkg" === e)
      try {
        n(["dpkg", "-i", t]);
      } catch (e) {
        r.warn(null !== (o = e.message) && void 0 !== o ? o : e),
          r.warn(
            "dpkg installation failed, trying to fix broken dependencies with apt-get",
          ),
          n(["apt-get", "install", "-f", "-y"]);
      }
    else {
      if ("apt" !== e) throw new Error(`Package manager ${e} not supported`);
      r.warn(
        "Using apt to install a local .deb. This may fail for unsigned packages unless properly configured.",
      ),
        n([
          "apt",
          "install",
          "-y",
          "--allow-unauthenticated",
          "--allow-downgrades",
          "--allow-change-held-packages",
          t,
        ]);
    }
  }
}
t.DebUpdater = s;
