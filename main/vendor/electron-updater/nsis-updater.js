// vendor/electron-updater/nsis-updater.js — webpack module 20443
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.NsisUpdater = void 0);
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(16928 /* external/path */),
  i = n(55125 /* vendor/electron-updater/base-updater */),
  s = n(68035 /* vendor/other/module-68035 */),
  a = n(30690 /* vendor/other/module-30690 */),
  c = n(13153 /* vendor/other/module-13153 */),
  u = n(28368 /* vendor/other/module-28368 */),
  l = n(80883 /* vendor/other/module-80883 */),
  d = n(87016 /* external/url */);
class p extends i.BaseUpdater {
  constructor(e, t) {
    super(e, t),
      (this._verifyUpdateCodeSignature = (e, t) =>
        (0, l.verifySignature)(e, t, this._logger));
  }
  get verifyUpdateCodeSignature() {
    return this._verifyUpdateCodeSignature;
  }
  set verifyUpdateCodeSignature(e) {
    e && (this._verifyUpdateCodeSignature = e);
  }
  doDownloadUpdate(e) {
    const t = e.updateInfoAndProvider.provider,
      n = (0, c.findFile)(t.resolveFiles(e.updateInfoAndProvider.info), "exe");
    return this.executeDownload({
      fileExtension: "exe",
      downloadUpdateOptions: e,
      fileInfo: n,
      task: async (o, i, s, a) => {
        const c = n.packageInfo,
          l = null != c && null != s;
        if (l && e.disableWebInstaller)
          throw (0, r.newError)(
            `Unable to download new version ${e.updateInfoAndProvider.info.version}. Web Installers are disabled`,
            "ERR_UPDATER_WEB_INSTALLER_DISABLED",
          );
        l ||
          e.disableWebInstaller ||
          this._logger.warn(
            "disableWebInstaller is set to false, you should set it to true if you do not plan on using a web installer. This will default to true in a future version.",
          ),
          (l ||
            e.disableDifferentialDownload ||
            (await this.differentialDownloadInstaller(
              n,
              e,
              o,
              t,
              r.CURRENT_APP_INSTALLER_FILE_NAME,
            ))) &&
            (await this.httpExecutor.download(n.url, o, i));
        const p = await this.verifySignature(o);
        if (null != p)
          throw (
            (await a(),
            (0, r.newError)(
              `New version ${e.updateInfoAndProvider.info.version} is not signed by the application owner: ${p}`,
              "ERR_UPDATER_INVALID_SIGNATURE",
            ))
          );
        if (l && (await this.differentialDownloadWebPackage(e, c, s, t)))
          try {
            await this.httpExecutor.download(new d.URL(c.path), s, {
              headers: e.requestHeaders,
              cancellationToken: e.cancellationToken,
              sha512: c.sha512,
            });
          } catch (e) {
            try {
              await (0, u.unlink)(s);
            } catch (e) {}
            throw e;
          }
      },
    });
  }
  async verifySignature(e) {
    let t;
    try {
      if (((t = (await this.configOnDisk.value).publisherName), null == t))
        return null;
    } catch (e) {
      if ("ENOENT" === e.code) return null;
      throw e;
    }
    return await this._verifyUpdateCodeSignature(Array.isArray(t) ? t : [t], e);
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
    const r = ["--updated"];
    e.isSilent && r.push("/S"),
      e.isForceRunAfter && r.push("--force-run"),
      this.installDirectory && r.push(`/D=${this.installDirectory}`);
    const i =
      null == this.downloadedUpdateHelper
        ? null
        : this.downloadedUpdateHelper.packageFile;
    null != i && r.push(`--package-file=${i}`);
    const s = () => {
      this.spawnLog(
        o.join(process.resourcesPath, "elevate.exe"),
        [t].concat(r),
      ).catch((e) => this.dispatchError(e));
    };
    return e.isAdminRightsRequired
      ? (this._logger.info(
          "isAdminRightsRequired is set to true, run installer using elevate.exe",
        ),
        s(),
        !0)
      : (this.spawnLog(t, r).catch((e) => {
          const r = e.code;
          this._logger.info(
            `Cannot run installer: error code: ${r}, error message: "${e.message}", will be executed again using elevate if EACCES, and will try to use electron.shell.openItem if ENOENT`,
          ),
            "UNKNOWN" === r || "EACCES" === r
              ? s()
              : "ENOENT" === r
                ? n(84157 /* external/electron */)
                    .shell.openPath(t)
                    .catch((e) => this.dispatchError(e))
                : this.dispatchError(e);
        }),
        !0);
  }
  async differentialDownloadWebPackage(e, t, n, i) {
    if (null == t.blockMapSize) return !0;
    try {
      const c = {
        newUrl: new d.URL(t.path),
        oldFile: o.join(
          this.downloadedUpdateHelper.cacheDir,
          r.CURRENT_APP_PACKAGE_FILE_NAME,
        ),
        logger: this._logger,
        newFile: n,
        requestHeaders: this.requestHeaders,
        isUseMultipleRangeRequest: i.isUseMultipleRangeRequest,
        cancellationToken: e.cancellationToken,
      };
      this.listenerCount(a.DOWNLOAD_PROGRESS) > 0 &&
        (c.onProgress = (e) => this.emit(a.DOWNLOAD_PROGRESS, e)),
        await new s.FileWithEmbeddedBlockMapDifferentialDownloader(
          t,
          this.httpExecutor,
          c,
        ).download();
    } catch (e) {
      return (
        this._logger.error(
          `Cannot download differentially, fallback to full download: ${e.stack || e}`,
        ),
        "win32" === process.platform
      );
    }
    return !1;
  }
}
t.NsisUpdater = p;
