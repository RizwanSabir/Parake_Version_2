// vendor/other/module-26967.js — webpack module 26967
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.PrivateGitHubProvider = void 0;
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(19515 /* vendor/other/module-19515 */),
  i = n(16928 /* external/path */),
  s = n(87016 /* external/url */),
  a = n(84363 /* vendor/other/module-84363 */),
  c = n(93698 /* vendor/other/module-93698 */),
  u = n(13153 /* vendor/other/module-13153 */);
class l extends c.BaseGitHubProvider {
  constructor(e, t, n, r) {
    super(e, "api.github.com", r), (this.updater = t), (this.token = n);
  }
  createRequestOptions(e, t) {
    const n = super.createRequestOptions(e, t);
    return (n.redirect = "manual"), n;
  }
  async getLatestVersion() {
    const e = new r.CancellationToken(),
      t = (0, a.getChannelFilename)(this.getDefaultChannelName()),
      n = await this.getLatestVersionInfo(e),
      i = n.assets.find((e) => e.name === t);
    if (null == i)
      throw (0, r.newError)(
        `Cannot find ${t} in the release ${n.html_url || n.name}`,
        "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND",
      );
    const c = new s.URL(i.url);
    let u;
    try {
      u = (0, o.load)(
        await this.httpRequest(
          c,
          this.configureHeaders("application/octet-stream"),
          e,
        ),
      );
    } catch (e) {
      if (e instanceof r.HttpError && 404 === e.statusCode)
        throw (0, r.newError)(
          `Cannot find ${t} in the latest release artifacts (${c}): ${e.stack || e.message}`,
          "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND",
        );
      throw e;
    }
    return (u.assets = n.assets), u;
  }
  get fileExtraDownloadHeaders() {
    return this.configureHeaders("application/octet-stream");
  }
  configureHeaders(e) {
    return { accept: e, authorization: `token ${this.token}` };
  }
  async getLatestVersionInfo(e) {
    const t = this.updater.allowPrerelease;
    let n = this.basePath;
    t || (n = `${n}/latest`);
    const o = (0, a.newUrlFromBase)(n, this.baseUrl);
    try {
      const n = JSON.parse(
        await this.httpRequest(
          o,
          this.configureHeaders("application/vnd.github.v3+json"),
          e,
        ),
      );
      if (t) {
        const e = n.filter((e) => !e.draft);
        return e.find((e) => e.prerelease) || e[0];
      }
      return n;
    } catch (e) {
      throw (0, r.newError)(
        `Unable to find latest version on GitHub (${o}), please ensure a production release exists: ${e.stack || e.message}`,
        "ERR_UPDATER_LATEST_VERSION_NOT_FOUND",
      );
    }
  }
  get basePath() {
    return this.computeGithubBasePath(
      `/repos/${this.options.owner}/${this.options.repo}/releases`,
    );
  }
  resolveFiles(e) {
    return (0, u.getFileList)(e).map((t) => {
      const n = i.posix.basename(t.url).replace(/ /g, "-"),
        o = e.assets.find((e) => null != e && e.name === n);
      if (null == o)
        throw (0, r.newError)(
          `Cannot find asset "${n}" in: ${JSON.stringify(e.assets, null, 2)}`,
          "ERR_UPDATER_ASSET_NOT_FOUND",
        );
      return { url: new s.URL(o.url), info: t };
    });
  }
}
t.PrivateGitHubProvider = l;
