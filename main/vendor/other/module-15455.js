// vendor/other/module-15455.js — webpack module 15455
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.DownloadedUpdateHelper = void 0),
  (t.createTempUpdateFile = async function (e, t, n) {
    let r = 0,
      o = a.join(t, e);
    for (let i = 0; i < 3; i++)
      try {
        return await (0, s.unlink)(o), o;
      } catch (i) {
        if ("ENOENT" === i.code) return o;
        n.warn(`Error on remove temp update file: ${i}`),
          (o = a.join(t, `${r++}-${e}`));
      }
    return o;
  });
const r = n(76982 /* external/crypto */),
  o = n(79896 /* external/fs */),
  i = n(18677 /* vendor/other/module-18677 */),
  s = n(28368 /* vendor/other/module-28368 */),
  a = n(16928 /* external/path */);
t.DownloadedUpdateHelper = class {
  constructor(e) {
    (this.cacheDir = e),
      (this._file = null),
      (this._packageFile = null),
      (this.versionInfo = null),
      (this.fileInfo = null),
      (this._downloadedFileInfo = null);
  }
  get downloadedFileInfo() {
    return this._downloadedFileInfo;
  }
  get file() {
    return this._file;
  }
  get packageFile() {
    return this._packageFile;
  }
  get cacheDirForPendingUpdate() {
    return a.join(this.cacheDir, "pending");
  }
  async validateDownloadedPath(e, t, n, r) {
    if (null != this.versionInfo && this.file === e && null != this.fileInfo)
      return i(this.versionInfo, t) &&
        i(this.fileInfo.info, n.info) &&
        (await (0, s.pathExists)(e))
        ? e
        : null;
    const o = await this.getValidCachedUpdateFile(n, r);
    return null === o
      ? null
      : (r.info(`Update has already been downloaded to ${e}).`),
        (this._file = o),
        o);
  }
  async setDownloadedFile(e, t, n, r, o, i) {
    (this._file = e),
      (this._packageFile = t),
      (this.versionInfo = n),
      (this.fileInfo = r),
      (this._downloadedFileInfo = {
        fileName: o,
        sha512: r.info.sha512,
        isAdminRightsRequired: !0 === r.info.isAdminRightsRequired,
      }),
      i &&
        (await (0, s.outputJson)(
          this.getUpdateInfoFile(),
          this._downloadedFileInfo,
        ));
  }
  async clear() {
    (this._file = null),
      (this._packageFile = null),
      (this.versionInfo = null),
      (this.fileInfo = null),
      await this.cleanCacheDirForPendingUpdate();
  }
  async cleanCacheDirForPendingUpdate() {
    try {
      await (0, s.emptyDir)(this.cacheDirForPendingUpdate);
    } catch (e) {}
  }
  async getValidCachedUpdateFile(e, t) {
    const n = this.getUpdateInfoFile();
    if (!(await (0, s.pathExists)(n))) return null;
    let i;
    try {
      i = await (0, s.readJson)(n);
    } catch (e) {
      let n = "No cached update info available";
      return (
        "ENOENT" !== e.code &&
          (await this.cleanCacheDirForPendingUpdate(),
          (n += ` (error on read: ${e.message})`)),
        t.info(n),
        null
      );
    }
    if (null === (null == i ? void 0 : i.fileName))
      return (
        t.warn(
          "Cached update info is corrupted: no fileName, directory for cached update will be cleaned",
        ),
        await this.cleanCacheDirForPendingUpdate(),
        null
      );
    if (e.info.sha512 !== i.sha512)
      return (
        t.info(
          `Cached update sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${i.sha512}, expected: ${e.info.sha512}. Directory for cached update will be cleaned`,
        ),
        await this.cleanCacheDirForPendingUpdate(),
        null
      );
    const c = a.join(this.cacheDirForPendingUpdate, i.fileName);
    if (!(await (0, s.pathExists)(c)))
      return t.info("Cached update file doesn't exist"), null;
    const u = await (function (e, t = "sha512", n = "base64", i) {
      return new Promise((s, a) => {
        const c = (0, r.createHash)(t);
        c.on("error", a).setEncoding(n),
          (0, o.createReadStream)(e, { ...i, highWaterMark: 1048576 })
            .on("error", a)
            .on("end", () => {
              c.end(), s(c.read());
            })
            .pipe(c, { end: !1 });
      });
    })(c);
    return e.info.sha512 !== u
      ? (t.warn(
          `Sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${u}, expected: ${e.info.sha512}`,
        ),
        await this.cleanCacheDirForPendingUpdate(),
        null)
      : ((this._downloadedFileInfo = i), c);
  }
  getUpdateInfoFile() {
    return a.join(this.cacheDirForPendingUpdate, "update-info.json");
  }
};
