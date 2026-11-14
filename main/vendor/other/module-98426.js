// vendor/other/module-98426.js — webpack module 98426
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.GitLabProvider = void 0;
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(87016 /* external/url */),
  i = n(17697 /* vendor/other/module-17697 */),
  s = n(84363 /* vendor/other/module-84363 */),
  a = n(13153 /* vendor/other/module-13153 */);
class c extends a.Provider {
  normalizeFilename(e) {
    return e.replace(/ |_/g, "-");
  }
  constructor(e, t, n) {
    super({ ...n, isUseMultipleRangeRequest: !1 }),
      (this.options = e),
      (this.updater = t),
      (this.cachedLatestVersion = null);
    const r = e.host || "gitlab.com";
    this.baseApiUrl = (0, s.newBaseUrl)(`https://${r}/api/v4`);
  }
  createRequestOptions(e, t) {
    const n = super.createRequestOptions(e, t);
    return (n.redirect = "manual"), n;
  }
  get channel() {
    const e = this.updater.channel || this.options.channel;
    return null == e
      ? this.getDefaultChannelName()
      : this.getCustomChannelName(e);
  }
  async getLatestVersion() {
    const e = new r.CancellationToken(),
      t = (0, s.newUrlFromBase)(
        `projects/${this.options.projectId}/releases/permalink/latest`,
        this.baseApiUrl,
      ),
      n = {
        Accept: "application/json",
        ...this.setAuthHeaderForToken(this.options.token || null),
      };
    let i, c;
    try {
      i = await this.httpRequest(t, n, e);
    } catch (e) {
      throw (0, r.newError)(
        `Unable to find latest release on GitLab (${t}): ${e.stack || e.message}`,
        "ERR_UPDATER_LATEST_VERSION_NOT_FOUND",
      );
    }
    if (!i)
      throw (0, r.newError)(
        "No published releases on GitLab",
        "ERR_UPDATER_NO_PUBLISHED_VERSIONS",
      );
    try {
      c = JSON.parse(i);
    } catch (e) {
      throw (0, r.newError)(
        `Unable to parse latest release response from GitLab (${t}): response was not valid JSON: ${e.stack || e.message}`,
        "ERR_UPDATER_LATEST_VERSION_NOT_FOUND",
      );
    }
    if (c.upcoming_release)
      throw (0, r.newError)(
        "Latest GitLab release is scheduled but not yet published",
        "ERR_UPDATER_LATEST_VERSION_NOT_FOUND",
      );
    const u = c.tag_name;
    let l = null,
      d = "",
      p = null;
    const f = async (t) => {
      d = (0, s.getChannelFilename)(t);
      const n = c.assets.links.find((e) => e.name === d);
      if (!n)
        throw (0, r.newError)(
          `Cannot find ${d} in the latest release assets`,
          "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND",
        );
      p = new o.URL(n.direct_asset_url);
      const i = this.setAuthHeaderForToken(this.options.token || null),
        a = Object.keys(i).length ? i : void 0;
      try {
        const t = await this.httpRequest(p, a, e);
        if (!t)
          throw (0, r.newError)(
            `Empty response from ${p}`,
            "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND",
          );
        return t;
      } catch (e) {
        if (e instanceof r.HttpError && 404 === e.statusCode)
          throw (0, r.newError)(
            `Cannot find ${d} in the latest release artifacts (${p}): ${e.stack || e.message}`,
            "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND",
          );
        throw e;
      }
    };
    try {
      l = await f(this.channel);
    } catch (e) {
      if (this.channel === this.getDefaultChannelName()) throw e;
      l = await f(this.getDefaultChannelName());
    }
    if (!l)
      throw (0, r.newError)(
        `Unable to parse channel data from ${d}`,
        "ERR_UPDATER_INVALID_UPDATE_INFO",
      );
    const h = (0, a.parseUpdateInfo)(l, d, p);
    null == h.releaseName && (h.releaseName = c.name),
      null == h.releaseNotes && (h.releaseNotes = c.description || null);
    const g = {
      tag: u,
      assets: this.convertAssetsToMap(c.assets),
      ...h,
    };
    return (this.cachedLatestVersion = g), g;
  }
  convertAssetsToMap(e) {
    const t = new Map();
    for (const n of e.links)
      t.set(this.normalizeFilename(n.name), n.direct_asset_url);
    return t;
  }
  findBlockMapInAssets(e, t) {
    const n = [`${t}.blockmap`, `${this.normalizeFilename(t)}.blockmap`];
    for (const t of n) {
      const n = e.get(t);
      if (n) return new o.URL(n);
    }
    return null;
  }
  async fetchReleaseInfoByVersion(e) {
    const t = new r.CancellationToken(),
      n = [`v${e}`, e];
    for (const e of n) {
      const n = (0, s.newUrlFromBase)(
        `projects/${this.options.projectId}/releases/${encodeURIComponent(e)}`,
        this.baseApiUrl,
      );
      try {
        const e = {
            Accept: "application/json",
            ...this.setAuthHeaderForToken(this.options.token || null),
          },
          r = await this.httpRequest(n, e, t);
        if (r) return JSON.parse(r);
      } catch (t) {
        if (t instanceof r.HttpError && 404 === t.statusCode) continue;
        throw (0, r.newError)(
          `Unable to find release ${e} on GitLab (${n}): ${t.stack || t.message}`,
          "ERR_UPDATER_RELEASE_NOT_FOUND",
        );
      }
    }
    throw (0, r.newError)(
      `Unable to find release with version ${e} (tried: ${n.join(", ")}) on GitLab`,
      "ERR_UPDATER_RELEASE_NOT_FOUND",
    );
  }
  setAuthHeaderForToken(e) {
    const t = {};
    return (
      null != e &&
        (e.startsWith("Bearer")
          ? (t.authorization = e)
          : (t["PRIVATE-TOKEN"] = e)),
      t
    );
  }
  async getVersionInfoForBlockMap(e) {
    if (this.cachedLatestVersion && this.cachedLatestVersion.version === e)
      return this.cachedLatestVersion.assets;
    const t = await this.fetchReleaseInfoByVersion(e);
    return t && t.assets ? this.convertAssetsToMap(t.assets) : null;
  }
  async findBlockMapUrlsFromAssets(e, t, n) {
    let r = null,
      o = null;
    const s = await this.getVersionInfoForBlockMap(t);
    s && (r = this.findBlockMapInAssets(s, n));
    const a = await this.getVersionInfoForBlockMap(e);
    if (a) {
      const r = n.replace(new RegExp(i(t), "g"), e);
      o = this.findBlockMapInAssets(a, r);
    }
    return [o, r];
  }
  async getBlockMapFiles(e, t, n, o = null) {
    if ("project_upload" === this.options.uploadTarget) {
      const o = e.pathname.split("/").pop() || "",
        [i, s] = await this.findBlockMapUrlsFromAssets(t, n, o);
      if (!s)
        throw (0, r.newError)(
          `Cannot find blockmap file for ${n} in GitLab assets`,
          "ERR_UPDATER_BLOCKMAP_FILE_NOT_FOUND",
        );
      if (!i)
        throw (0, r.newError)(
          `Cannot find blockmap file for ${t} in GitLab assets`,
          "ERR_UPDATER_BLOCKMAP_FILE_NOT_FOUND",
        );
      return [i, s];
    }
    return super.getBlockMapFiles(e, t, n, o);
  }
  resolveFiles(e) {
    return (0, a.getFileList)(e).map((t) => {
      const n = [t.url, this.normalizeFilename(t.url)].find((t) =>
          e.assets.has(t),
        ),
        i = n ? e.assets.get(n) : void 0;
      if (!i)
        throw (0, r.newError)(
          `Cannot find asset "${t.url}" in GitLab release assets. Available assets: ${Array.from(e.assets.keys()).join(", ")}`,
          "ERR_UPDATER_ASSET_NOT_FOUND",
        );
      return { url: new o.URL(i), info: t };
    });
  }
  toString() {
    return `GitLab (projectId: ${this.options.projectId}, channel: ${this.channel})`;
  }
}
t.GitLabProvider = c;
