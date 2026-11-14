// vendor/electron-updater/mac-updater.js — webpack module 71063
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.MacUpdater = void 0);
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(28368 /* vendor/other/module-28368 */),
  i = n(79896 /* external/fs */),
  s = n(16928 /* external/path */),
  a = n(58611 /* external/http */),
  c = n(62839 /* vendor/electron-updater/app-updater */),
  u = n(13153 /* vendor/other/module-13153 */),
  l = n(35317 /* external/child_process */),
  d = n(76982 /* external/crypto */);
class p extends c.AppUpdater {
  constructor(e, t) {
    super(e, t),
      (this.nativeUpdater = n(84157 /* external/electron */).autoUpdater),
      (this.squirrelDownloadedUpdate = !1),
      this.nativeUpdater.on("error", (e) => {
        this._logger.warn(e), this.emit("error", e);
      }),
      this.nativeUpdater.on("update-downloaded", () => {
        (this.squirrelDownloadedUpdate = !0),
          this.debug("nativeUpdater.update-downloaded");
      });
  }
  static filterFilesForArch(e, t) {
    const n = (e) => {
      var t;
      return (
        e.url.pathname.includes("arm64") ||
        (null === (t = e.info.url) || void 0 === t
          ? void 0
          : t.includes("arm64"))
      );
    };
    return t && e.some(n)
      ? e.filter((e) => t === n(e))
      : e.filter((e) => !n(e));
  }
  debug(e) {
    null != this._logger.debug && this._logger.debug(e);
  }
  closeServerIfExists() {
    this.server &&
      (this.debug("Closing proxy server"),
      this.server.close((e) => {
        e &&
          this.debug(
            "proxy server wasn't already open, probably attempted closing again as a safety check before quit",
          );
      }));
  }
  async doDownloadUpdate(e) {
    let t = e.updateInfoAndProvider.provider.resolveFiles(
      e.updateInfoAndProvider.info,
    );
    const n = this._logger,
      i = "sysctl.proc_translated";
    let a = !1;
    try {
      this.debug("Checking for macOS Rosetta environment"),
        (a = (0, l.execFileSync)("sysctl", [i], {
          encoding: "utf8",
        }).includes(`${i}: 1`)),
        n.info(`Checked for macOS Rosetta environment (isRosetta=${a})`);
    } catch (e) {
      n.warn(
        `sysctl shell command to check for macOS Rosetta environment failed: ${e}`,
      );
    }
    let c = !1;
    try {
      this.debug("Checking for arm64 in uname");
      const e = (0, l.execFileSync)("uname", ["-a"], {
        encoding: "utf8",
      }).includes("ARM");
      n.info(`Checked 'uname -a': arm64=${e}`), (c = c || e);
    } catch (e) {
      n.warn(`uname shell command to check for arm64 failed: ${e}`);
    }
    (c = c || "arm64" === process.arch || a), (t = p.filterFilesForArch(t, c));
    const d = (0, u.findFile)(t, "zip", ["pkg", "dmg"]);
    if (null == d)
      throw (0, r.newError)(
        `ZIP file not provided: ${(0, r.safeStringifyJson)(t)}`,
        "ERR_UPDATER_ZIP_FILE_NOT_FOUND",
      );
    const f = e.updateInfoAndProvider.provider,
      h = "update.zip";
    return this.executeDownload({
      fileExtension: "zip",
      fileInfo: d,
      downloadUpdateOptions: e,
      task: async (t, r) => {
        const i = s.join(this.downloadedUpdateHelper.cacheDir, h);
        let a = !0;
        ((0, o.pathExistsSync)(i)
          ? !e.disableDifferentialDownload
          : (n.info(
              "Unable to locate previous update.zip for differential download (is this first install?), falling back to full download",
            ),
            0)) &&
          (a = await this.differentialDownloadInstaller(d, e, t, f, h)),
          a && (await this.httpExecutor.download(d.url, t, r));
      },
      done: async (t) => {
        if (!e.disableDifferentialDownload)
          try {
            const e = s.join(this.downloadedUpdateHelper.cacheDir, h);
            await (0, o.copyFile)(t.downloadedFile, e);
          } catch (e) {
            this._logger.warn(
              `Unable to copy file for caching for future differential downloads: ${e.message}`,
            );
          }
        return this.updateDownloaded(d, t);
      },
    });
  }
  async updateDownloaded(e, t) {
    var n;
    const r = t.downloadedFile,
      s =
        null !== (n = e.info.size) && void 0 !== n
          ? n
          : (await (0, o.stat)(r)).size,
      c = this._logger,
      u = `fileToProxy=${e.url.href}`;
    this.closeServerIfExists(),
      this.debug(`Creating proxy server for native Squirrel.Mac (${u})`),
      (this.server = (0, a.createServer)()),
      this.debug(`Proxy server for native Squirrel.Mac is created (${u})`),
      this.server.on("close", () => {
        c.info(`Proxy server for native Squirrel.Mac is closed (${u})`);
      });
    const l = (e) => {
      const t = e.address();
      return "string" == typeof t
        ? t
        : `http://127.0.0.1:${null == t ? void 0 : t.port}`;
    };
    return await new Promise((e, n) => {
      const o = (0, d.randomBytes)(64)
          .toString("base64")
          .replace(/\//g, "_")
          .replace(/\+/g, "-"),
        a = Buffer.from(`autoupdater:${o}`, "ascii"),
        p = `/${(0, d.randomBytes)(64).toString("hex")}.zip`;
      this.server.on("request", (t, a) => {
        const u = t.url;
        if ((c.info(`${u} requested`), "/" === u)) {
          if (
            !t.headers.authorization ||
            -1 === t.headers.authorization.indexOf("Basic ")
          )
            return (
              (a.statusCode = 401),
              (a.statusMessage = "Invalid Authentication Credentials"),
              a.end(),
              void c.warn("No authenthication info")
            );
          const e = t.headers.authorization.split(" ")[1],
            n = Buffer.from(e, "base64").toString("ascii"),
            [r, i] = n.split(":");
          if ("autoupdater" !== r || i !== o)
            return (
              (a.statusCode = 401),
              (a.statusMessage = "Invalid Authentication Credentials"),
              a.end(),
              void c.warn("Invalid authenthication credentials")
            );
          const s = Buffer.from(`{ "url": "${l(this.server)}${p}" }`);
          return (
            a.writeHead(200, {
              "Content-Type": "application/json",
              "Content-Length": s.length,
            }),
            void a.end(s)
          );
        }
        if (!u.startsWith(p))
          return (
            c.warn(`${u} requested, but not supported`),
            a.writeHead(404),
            void a.end()
          );
        c.info(`${p} requested by Squirrel.Mac, pipe ${r}`);
        let d = !1;
        a.on("finish", () => {
          d || (this.nativeUpdater.removeListener("error", n), e([]));
        });
        const f = (0, i.createReadStream)(r);
        f.on("error", (e) => {
          try {
            a.end();
          } catch (e) {
            c.warn(`cannot end response: ${e}`);
          }
          (d = !0),
            this.nativeUpdater.removeListener("error", n),
            n(new Error(`Cannot pipe "${r}": ${e}`));
        }),
          a.writeHead(200, {
            "Content-Type": "application/zip",
            "Content-Length": s,
          }),
          f.pipe(a);
      }),
        this.debug(
          `Proxy server for native Squirrel.Mac is starting to listen (${u})`,
        ),
        this.server.listen(0, "127.0.0.1", () => {
          this.debug(
            `Proxy server for native Squirrel.Mac is listening (address=${l(this.server)}, ${u})`,
          ),
            this.nativeUpdater.setFeedURL({
              url: l(this.server),
              headers: {
                "Cache-Control": "no-cache",
                Authorization: `Basic ${a.toString("base64")}`,
              },
            }),
            this.dispatchUpdateDownloaded(t),
            this.autoInstallOnAppQuit
              ? (this.nativeUpdater.once("error", n),
                this.nativeUpdater.checkForUpdates())
              : e([]);
        });
    });
  }
  handleUpdateDownloaded() {
    this.autoRunAppAfterInstall
      ? this.nativeUpdater.quitAndInstall()
      : this.app.quit(),
      this.closeServerIfExists();
  }
  quitAndInstall() {
    this.squirrelDownloadedUpdate
      ? this.handleUpdateDownloaded()
      : (this.nativeUpdater.on("update-downloaded", () =>
          this.handleUpdateDownloaded(),
        ),
        this.autoInstallOnAppQuit || this.nativeUpdater.checkForUpdates());
  }
}
t.MacUpdater = p;
