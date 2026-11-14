// vendor/electron-updater/appimage-updater.js — webpack module 47378
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.AppImageUpdater = void 0);
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(35317 /* external/child_process */),
  i = n(28368 /* vendor/other/module-28368 */),
  s = n(79896 /* external/fs */),
  a = n(16928 /* external/path */),
  c = n(55125 /* vendor/electron-updater/base-updater */),
  u = n(68035 /* vendor/other/module-68035 */),
  l = n(13153 /* vendor/other/module-13153 */),
  d = n(30690 /* vendor/other/module-30690 */);
class p extends c.BaseUpdater {
  constructor(e, t) {
    super(e, t);
  }
  isUpdaterActive() {
    return null != process.env.APPIMAGE || this.forceDevUpdateConfig
      ? super.isUpdaterActive()
      : (null == process.env.SNAP
          ? this._logger.warn(
              "APPIMAGE env is not defined, current application is not an AppImage",
            )
          : this._logger.info("SNAP env is defined, updater is disabled"),
        !1);
  }
  doDownloadUpdate(e) {
    const t = e.updateInfoAndProvider.provider,
      n = (0, l.findFile)(
        t.resolveFiles(e.updateInfoAndProvider.info),
        "AppImage",
        ["rpm", "deb", "pacman"],
      );
    return this.executeDownload({
      fileExtension: "AppImage",
      fileInfo: n,
      downloadUpdateOptions: e,
      task: async (o, s) => {
        const a = process.env.APPIMAGE;
        if (null == a)
          throw (0, r.newError)(
            "APPIMAGE env is not defined",
            "ERR_UPDATER_OLD_FILE_NOT_FOUND",
          );
        (e.disableDifferentialDownload ||
          (await this.downloadDifferential(n, a, o, t, e))) &&
          (await this.httpExecutor.download(n.url, o, s)),
          await (0, i.chmod)(o, 493);
      },
    });
  }
  async downloadDifferential(e, t, n, r, o) {
    try {
      const i = {
        newUrl: e.url,
        oldFile: t,
        logger: this._logger,
        newFile: n,
        isUseMultipleRangeRequest: r.isUseMultipleRangeRequest,
        requestHeaders: o.requestHeaders,
        cancellationToken: o.cancellationToken,
      };
      return (
        this.listenerCount(d.DOWNLOAD_PROGRESS) > 0 &&
          (i.onProgress = (e) => this.emit(d.DOWNLOAD_PROGRESS, e)),
        await new u.FileWithEmbeddedBlockMapDifferentialDownloader(
          e.info,
          this.httpExecutor,
          i,
        ).download(),
        !1
      );
    } catch (e) {
      return (
        this._logger.error(
          `Cannot download differentially, fallback to full download: ${e.stack || e}`,
        ),
        "linux" === process.platform
      );
    }
  }
  doInstall(e) {
    const t = process.env.APPIMAGE;
    if (null == t)
      throw (0, r.newError)(
        "APPIMAGE env is not defined",
        "ERR_UPDATER_OLD_FILE_NOT_FOUND",
      );
    if (!a.isAbsolute(t) || t.includes("\0"))
      throw (0, r.newError)(
        `APPIMAGE env is not a valid absolute path: "${t}"`,
        "ERR_UPDATER_OLD_FILE_NOT_FOUND",
      );
    let n;
    (0, s.unlinkSync)(t);
    const i = a.basename(t),
      c = this.installerPath;
    if (null == c)
      return (
        this.dispatchError(
          new Error("No update filepath provided, can't quit and install"),
        ),
        !1
      );
    (n =
      a.basename(c) !== i && /\d+\.\d+\.\d+/.test(i)
        ? a.join(a.dirname(t), a.basename(c))
        : t),
      (0, o.execFileSync)("mv", ["-f", c, n]),
      n !== t && this.emit("appimage-filename-updated", n);
    const u = { ...process.env, APPIMAGE_SILENT_INSTALL: "true" };
    return (
      e.isForceRunAfter
        ? this.spawnLog(n, [], u)
        : ((u.APPIMAGE_EXIT_AFTER_INSTALL = "true"),
          (0, o.execFileSync)(n, [], { env: u })),
      !0
    );
  }
}
t.AppImageUpdater = p;
