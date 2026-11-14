// vendor/electron-updater/app-updater.js — webpack module 62839
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.NoOpLogger = t.AppUpdater = void 0);
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(76982 /* external/crypto */),
  i = n(70857 /* external/os */),
  s = n(24434 /* external/events */),
  a = n(28368 /* vendor/other/module-28368 */),
  c = n(19515 /* vendor/other/module-19515 */),
  u = n(11624 /* vendor/other/module-11624 */),
  l = n(16928 /* external/path */),
  d = n(73904 /* vendor/other/module-73904 */),
  p = n(15455 /* vendor/other/module-15455 */),
  f = n(72947 /* vendor/electron-updater/electron-app-adapter */),
  h = n(16756 /* vendor/other/module-16756 */),
  g = n(72286 /* vendor/other/module-72286 */),
  m = n(66342 /* vendor/other/module-66342 */),
  _ = n(43106 /* external/zlib */),
  S = n(9525 /* vendor/other/module-9525 */),
  E = n(30690 /* vendor/other/module-30690 */);
class y extends s.EventEmitter {
  get channel() {
    return this._channel;
  }
  set channel(e) {
    if (null != this._channel) {
      if ("string" != typeof e)
        throw (0, r.newError)(
          `Channel must be a string, but got: ${e}`,
          "ERR_UPDATER_INVALID_CHANNEL",
        );
      if (0 === e.length)
        throw (0, r.newError)(
          "Channel must be not an empty string",
          "ERR_UPDATER_INVALID_CHANNEL",
        );
    }
    (this._channel = e), (this.allowDowngrade = !0);
  }
  addAuthHeader(e) {
    this.requestHeaders = Object.assign({}, this.requestHeaders, {
      authorization: e,
    });
  }
  get netSession() {
    return (0, h.getNetSession)();
  }
  get logger() {
    return this._logger;
  }
  set logger(e) {
    this._logger = e ?? new T();
  }
  set updateConfigPath(e) {
    (this.clientPromise = null),
      (this._appUpdateConfigPath = e),
      (this.configOnDisk = new u.Lazy(() => this.loadUpdateConfig()));
  }
  get isUpdateSupported() {
    return this._isUpdateSupported;
  }
  set isUpdateSupported(e) {
    e && (this._isUpdateSupported = e);
  }
  get isUserWithinRollout() {
    return this._isUserWithinRollout;
  }
  set isUserWithinRollout(e) {
    e && (this._isUserWithinRollout = e);
  }
  constructor(e, t) {
    super(),
      (this.autoDownload = !0),
      (this.autoInstallOnAppQuit = !0),
      (this.autoRunAppAfterInstall = !0),
      (this.allowPrerelease = !1),
      (this.fullChangelog = !1),
      (this.allowDowngrade = !1),
      (this.disableWebInstaller = !1),
      (this.disableDifferentialDownload = !1),
      (this.forceDevUpdateConfig = !1),
      (this.previousBlockmapBaseUrlOverride = null),
      (this._channel = null),
      (this.downloadedUpdateHelper = null),
      (this.requestHeaders = null),
      (this._logger = console),
      (this.signals = new E.UpdaterSignal(this)),
      (this._appUpdateConfigPath = null),
      (this._isUpdateSupported = (e) => this.checkIfUpdateSupported(e)),
      (this._isUserWithinRollout = (e) => this.isStagingMatch(e)),
      (this.clientPromise = null),
      (this.stagingUserIdPromise = new u.Lazy(() =>
        this.getOrCreateStagingUserId(),
      )),
      (this.configOnDisk = new u.Lazy(() => this.loadUpdateConfig())),
      (this.checkForUpdatesPromise = null),
      (this.downloadPromise = null),
      (this.updateInfoAndProvider = null),
      (this._testOnlyOptions = null),
      this.on("error", (e) => {
        this._logger.error(`Error: ${e.stack || e.message}`);
      }),
      null == t
        ? ((this.app = new f.ElectronAppAdapter()),
          (this.httpExecutor = new h.ElectronHttpExecutor((e, t) =>
            this.emit("login", e, t),
          )))
        : ((this.app = t), (this.httpExecutor = null));
    const n = this.app.version,
      o = (0, d.parse)(n);
    if (null == o)
      throw (0, r.newError)(
        `App version is not a valid semver version: "${n}"`,
        "ERR_UPDATER_INVALID_VERSION",
      );
    (this.currentVersion = o),
      (this.allowPrerelease = (function (e) {
        const t = (0, d.prerelease)(e);
        return null != t && t.length > 0;
      })(o)),
      null != e &&
        (this.setFeedURL(e),
        "string" != typeof e &&
          e.requestHeaders &&
          (this.requestHeaders = e.requestHeaders));
  }
  getFeedURL() {
    return "Deprecated. Do not use it.";
  }
  setFeedURL(e) {
    const t = this.createProviderRuntimeOptions();
    let n;
    (n =
      "string" == typeof e
        ? new g.GenericProvider({ provider: "generic", url: e }, this, {
            ...t,
            isUseMultipleRangeRequest: (0,
            m.isUrlProbablySupportMultiRangeRequests)(e),
          })
        : (0, m.createClient)(e, this, t)),
      (this.clientPromise = Promise.resolve(n));
  }
  checkForUpdates() {
    if (!this.isUpdaterActive()) return Promise.resolve(null);
    let e = this.checkForUpdatesPromise;
    if (null != e)
      return this._logger.info("Checking for update (already in progress)"), e;
    const t = () => (this.checkForUpdatesPromise = null);
    return (
      this._logger.info("Checking for update"),
      (e = this.doCheckForUpdates()
        .then((e) => (t(), e))
        .catch((e) => {
          throw (
            (t(),
            this.emit(
              "error",
              e,
              `Cannot check for updates: ${(e.stack || e).toString()}`,
            ),
            e)
          );
        })),
      (this.checkForUpdatesPromise = e),
      e
    );
  }
  isUpdaterActive() {
    return !(
      !this.app.isPackaged &&
      !this.forceDevUpdateConfig &&
      (this._logger.info(
        "Skip checkForUpdates because application is not packed and dev update config is not forced",
      ),
      1)
    );
  }
  checkForUpdatesAndNotify(e) {
    return this.checkForUpdates().then((t) =>
      (null == t ? void 0 : t.downloadPromise)
        ? (t.downloadPromise.then(() => {
            const r = y.formatDownloadNotification(
              t.updateInfo.version,
              this.app.name,
              e,
            );
            new (n(84157 /* external/electron */).Notification)(r).show();
          }),
          t)
        : (null != this._logger.debug &&
            this._logger.debug(
              "checkForUpdatesAndNotify called, downloadPromise is null",
            ),
          t),
    );
  }
  static formatDownloadNotification(e, t, n) {
    return (
      null == n &&
        (n = {
          title: "A new update is ready to install",
          body: "{appName} version {version} has been downloaded and will be automatically installed on exit",
        }),
      {
        title: n.title.replace("{appName}", t).replace("{version}", e),
        body: n.body.replace("{appName}", t).replace("{version}", e),
      }
    );
  }
  async isStagingMatch(e) {
    const t = e.stagingPercentage;
    let n = t;
    if (null == n) return !0;
    if (((n = parseInt(n, 10)), isNaN(n)))
      return this._logger.warn(`Staging percentage is NaN: ${t}`), !0;
    n /= 100;
    const o = await this.stagingUserIdPromise.value,
      i = r.UUID.parse(o).readUInt32BE(12) / 4294967295;
    return (
      this._logger.info(
        `Staging percentage: ${n}, percentage: ${i}, user id: ${o}`,
      ),
      i < n
    );
  }
  computeFinalHeaders(e) {
    return (
      null != this.requestHeaders && Object.assign(e, this.requestHeaders), e
    );
  }
  async isUpdateAvailable(e) {
    const t = (0, d.parse)(e.version);
    if (null == t)
      throw (0, r.newError)(
        `This file could not be downloaded, or the latest version (from update server) does not have a valid semver version: "${e.version}"`,
        "ERR_UPDATER_INVALID_VERSION",
      );
    const n = this.currentVersion;
    if ((0, d.eq)(t, n)) return !1;
    if (!(await Promise.resolve(this.isUpdateSupported(e)))) return !1;
    if (!(await Promise.resolve(this.isUserWithinRollout(e)))) return !1;
    const o = (0, d.gt)(t, n),
      i = (0, d.lt)(t, n);
    return !!o || (this.allowDowngrade && i);
  }
  checkIfUpdateSupported(e) {
    const t = null == e ? void 0 : e.minimumSystemVersion,
      n = (0, i.release)();
    if (t)
      try {
        if ((0, d.lt)(n, t))
          return (
            this._logger.info(
              `Current OS version ${n} is less than the minimum OS version required ${t} for version ${n}`,
            ),
            !1
          );
      } catch (e) {
        this._logger.warn(
          `Failed to compare current OS version(${n}) with minimum OS version(${t}): ${(e.message || e).toString()}`,
        );
      }
    return !0;
  }
  async getUpdateInfoAndProvider() {
    await this.app.whenReady(),
      null == this.clientPromise &&
        (this.clientPromise = this.configOnDisk.value.then((e) =>
          (0, m.createClient)(e, this, this.createProviderRuntimeOptions()),
        ));
    const e = await this.clientPromise,
      t = await this.stagingUserIdPromise.value;
    return (
      e.setRequestHeaders(this.computeFinalHeaders({ "x-user-staging-id": t })),
      { info: await e.getLatestVersion(), provider: e }
    );
  }
  createProviderRuntimeOptions() {
    return {
      isUseMultipleRangeRequest: !0,
      platform:
        null == this._testOnlyOptions
          ? process.platform
          : this._testOnlyOptions.platform,
      executor: this.httpExecutor,
    };
  }
  async doCheckForUpdates() {
    this.emit("checking-for-update");
    const e = await this.getUpdateInfoAndProvider(),
      t = e.info;
    if (!(await this.isUpdateAvailable(t)))
      return (
        this._logger.info(
          `Update for version ${this.currentVersion.format()} is not available (latest version: ${t.version}, downgrade is ${this.allowDowngrade ? "allowed" : "disallowed"}).`,
        ),
        this.emit("update-not-available", t),
        { isUpdateAvailable: !1, versionInfo: t, updateInfo: t }
      );
    (this.updateInfoAndProvider = e), this.onUpdateAvailable(t);
    const n = new r.CancellationToken();
    return {
      isUpdateAvailable: !0,
      versionInfo: t,
      updateInfo: t,
      cancellationToken: n,
      downloadPromise: this.autoDownload ? this.downloadUpdate(n) : null,
    };
  }
  onUpdateAvailable(e) {
    this._logger.info(
      `Found version ${e.version} (url: ${(0, r.asArray)(e.files)
        .map((e) => e.url)
        .join(", ")})`,
    ),
      this.emit("update-available", e);
  }
  downloadUpdate(e = new r.CancellationToken()) {
    const t = this.updateInfoAndProvider;
    if (null == t) {
      const e = new Error("Please check update first");
      return this.dispatchError(e), Promise.reject(e);
    }
    if (null != this.downloadPromise)
      return (
        this._logger.info("Downloading update (already in progress)"),
        this.downloadPromise
      );
    this._logger.info(
      `Downloading update from ${(0, r.asArray)(t.info.files)
        .map((e) => e.url)
        .join(", ")}`,
    );
    const n = (e) => {
      if (!(e instanceof r.CancellationError))
        try {
          this.dispatchError(e);
        } catch (e) {
          this._logger.warn(`Cannot dispatch error event: ${e.stack || e}`);
        }
      return e;
    };
    return (
      (this.downloadPromise = this.doDownloadUpdate({
        updateInfoAndProvider: t,
        requestHeaders: this.computeRequestHeaders(t.provider),
        cancellationToken: e,
        disableWebInstaller: this.disableWebInstaller,
        disableDifferentialDownload: this.disableDifferentialDownload,
      })
        .catch((e) => {
          throw n(e);
        })
        .finally(() => {
          this.downloadPromise = null;
        })),
      this.downloadPromise
    );
  }
  dispatchError(e) {
    this.emit("error", e, (e.stack || e).toString());
  }
  dispatchUpdateDownloaded(e) {
    this.emit(E.UPDATE_DOWNLOADED, e);
  }
  async loadUpdateConfig() {
    return (
      null == this._appUpdateConfigPath &&
        (this._appUpdateConfigPath = this.app.appUpdateConfigPath),
      (0, c.load)(await (0, a.readFile)(this._appUpdateConfigPath, "utf-8"))
    );
  }
  computeRequestHeaders(e) {
    const t = e.fileExtraDownloadHeaders;
    if (null != t) {
      const e = this.requestHeaders;
      return null == e ? t : { ...t, ...e };
    }
    return this.computeFinalHeaders({ accept: "*/*" });
  }
  async getOrCreateStagingUserId() {
    const e = l.join(this.app.userDataPath, ".updaterId");
    try {
      const t = await (0, a.readFile)(e, "utf-8");
      if (r.UUID.check(t)) return t;
      this._logger.warn(
        `Staging user id file exists, but content was invalid: ${t}`,
      );
    } catch (e) {
      "ENOENT" !== e.code &&
        this._logger.warn(
          `Couldn't read staging user ID, creating a blank one: ${e}`,
        );
    }
    const t = r.UUID.v5((0, o.randomBytes)(4096), r.UUID.OID);
    this._logger.info(`Generated new staging user ID: ${t}`);
    try {
      await (0, a.outputFile)(e, t);
    } catch (e) {
      this._logger.warn(`Couldn't write out staging user ID: ${e}`);
    }
    return t;
  }
  get isAddNoCacheQuery() {
    const e = this.requestHeaders;
    if (null == e) return !0;
    for (const t of Object.keys(e)) {
      const e = t.toLowerCase();
      if ("authorization" === e || "private-token" === e) return !1;
    }
    return !0;
  }
  async getOrCreateDownloadHelper() {
    let e = this.downloadedUpdateHelper;
    if (null == e) {
      const t = (await this.configOnDisk.value).updaterCacheDirName,
        n = this._logger;
      null == t &&
        n.error(
          "updaterCacheDirName is not specified in app-update.yml Was app build using at least electron-builder 20.34.0?",
        );
      const r = l.join(this.app.baseCachePath, t || this.app.name);
      null != n.debug && n.debug(`updater cache dir: ${r}`),
        (e = new p.DownloadedUpdateHelper(r)),
        (this.downloadedUpdateHelper = e);
    }
    return e;
  }
  async executeDownload(e) {
    const t = e.fileInfo,
      n = {
        headers: e.downloadUpdateOptions.requestHeaders,
        cancellationToken: e.downloadUpdateOptions.cancellationToken,
        sha2: t.info.sha2,
        sha512: t.info.sha512,
      };
    this.listenerCount(E.DOWNLOAD_PROGRESS) > 0 &&
      (n.onProgress = (e) => this.emit(E.DOWNLOAD_PROGRESS, e));
    const o = e.downloadUpdateOptions.updateInfoAndProvider.info,
      i = o.version,
      s = t.packageInfo,
      c = await this.getOrCreateDownloadHelper(),
      u = c.cacheDirForPendingUpdate;
    await (0, a.mkdir)(u, { recursive: !0 });
    const d = (function () {
      const t = decodeURIComponent(e.fileInfo.url.pathname);
      return t.toLowerCase().endsWith(`.${e.fileExtension.toLowerCase()}`)
        ? l.basename(t)
        : l.basename(e.fileInfo.info.url);
    })();
    let f = l.join(u, d);
    const h =
        null == s
          ? null
          : l.join(u, `package-${i}${l.extname(s.path) || ".7z"}`),
      g = async (n) => {
        await c.setDownloadedFile(f, h, o, t, d, n),
          await e.done({ ...o, downloadedFile: f });
        const r = l.join(u, "current.blockmap");
        return (
          (await (0, a.pathExists)(r)) &&
            (await (0, a.copyFile)(r, l.join(c.cacheDir, "current.blockmap"))),
          null == h ? [f] : [f, h]
        );
      },
      m = this._logger,
      _ = await c.validateDownloadedPath(f, o, t, m);
    if (null != _) return (f = _), await g(!1);
    const S = async () => (
        await c.clear().catch(() => {}), await (0, a.unlink)(f).catch(() => {})
      ),
      y = await (0, p.createTempUpdateFile)(`temp-${d}`, u, m);
    try {
      await e.task(y, n, h, S),
        await (0, r.retry)(() => (0, a.rename)(y, f), {
          retries: 60,
          interval: 500,
          shouldRetry: (e) =>
            !!(e instanceof Error && /^EBUSY:/.test(e.message)) ||
            (m.warn(
              `Cannot rename temp file to final file: ${e.message || e.stack}`,
            ),
            !1),
        });
    } catch (e) {
      throw (
        (await S(),
        e instanceof r.CancellationError &&
          (m.info("cancelled"), this.emit("update-cancelled", o)),
        e)
      );
    }
    return m.info(`New version ${i} has been downloaded to ${f}`), await g(!0);
  }
  async differentialDownloadInstaller(e, t, n, r, o) {
    try {
      if (
        null != this._testOnlyOptions &&
        !this._testOnlyOptions.isUseDifferentialDownload
      )
        return !0;
      const r = t.updateInfoAndProvider.provider,
        i = await r.getBlockMapFiles(
          e.url,
          this.app.version,
          t.updateInfoAndProvider.info.version,
          this.previousBlockmapBaseUrlOverride,
        );
      this._logger.info(`Download block maps (old: "${i[0]}", new: ${i[1]})`);
      const s = async (e) => {
          const n = await this.httpExecutor.downloadToBuffer(e, {
            headers: t.requestHeaders,
            cancellationToken: t.cancellationToken,
          });
          if (null == n || 0 === n.length)
            throw new Error(`Blockmap "${e.href}" is empty`);
          try {
            return JSON.parse((0, _.gunzipSync)(n).toString());
          } catch (t) {
            throw new Error(`Cannot parse blockmap "${e.href}", error: ${t}`);
          }
        },
        c = {
          newUrl: e.url,
          oldFile: l.join(this.downloadedUpdateHelper.cacheDir, o),
          logger: this._logger,
          newFile: n,
          isUseMultipleRangeRequest: r.isUseMultipleRangeRequest,
          requestHeaders: t.requestHeaders,
          cancellationToken: t.cancellationToken,
        };
      this.listenerCount(E.DOWNLOAD_PROGRESS) > 0 &&
        (c.onProgress = (e) => this.emit(E.DOWNLOAD_PROGRESS, e));
      const u = async (e, t) => {
          const n = l.join(t, "current.blockmap");
          await (0, a.outputFile)(n, (0, _.gzipSync)(JSON.stringify(e)));
        },
        d = async (e) => {
          const t = l.join(e, "current.blockmap");
          try {
            if (await (0, a.pathExists)(t))
              return JSON.parse(
                (0, _.gunzipSync)(await (0, a.readFile)(t)).toString(),
              );
          } catch (e) {
            this._logger.warn(`Cannot parse blockmap "${t}", error: ${e}`);
          }
          return null;
        },
        p = await s(i[1]);
      await u(p, this.downloadedUpdateHelper.cacheDirForPendingUpdate);
      let f = await d(this.downloadedUpdateHelper.cacheDir);
      return (
        null == f && (f = await s(i[0])),
        await new S.GenericDifferentialDownloader(
          e.info,
          this.httpExecutor,
          c,
        ).download(f, p),
        !1
      );
    } catch (e) {
      if (
        (this._logger.error(
          `Cannot download differentially, fallback to full download: ${e.stack || e}`,
        ),
        null != this._testOnlyOptions)
      )
        throw e;
      return !0;
    }
  }
}
t.AppUpdater = y;
class T {
  info(e) {}
  warn(e) {}
  error(e) {}
}
t.NoOpLogger = T;
