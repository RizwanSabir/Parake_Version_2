// vendor/other/module-93698.js — webpack module 93698
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.GitHubProvider = t.BaseGitHubProvider = void 0;
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(73904 /* vendor/other/module-73904 */),
  i = n(87016 /* external/url */),
  s = n(84363 /* vendor/other/module-84363 */),
  a = n(13153 /* vendor/other/module-13153 */),
  c = /\/tag\/(v?[^/]+)$/;
class u extends a.Provider {
  constructor(e, t, n) {
    super({ ...n, isUseMultipleRangeRequest: !1 }),
      (this.options = e),
      (this.baseUrl = (0, s.newBaseUrl)((0, r.githubUrl)(e, t)));
    const o = "github.com" === t ? "api.github.com" : t;
    this.baseApiUrl = (0, s.newBaseUrl)((0, r.githubUrl)(e, o));
  }
  computeGithubBasePath(e) {
    const t = this.options.host;
    return t && !["github.com", "api.github.com"].includes(t)
      ? `/api/v3${e}`
      : e;
  }
}
function l(e) {
  const t = e.elementValueOrEmpty("content");
  return "No content." === t ? "" : t;
}
(t.BaseGitHubProvider = u),
  (t.GitHubProvider = class extends u {
    constructor(e, t, n) {
      super(e, "github.com", n), (this.options = e), (this.updater = t);
    }
    get channel() {
      const e = this.updater.channel || this.options.channel;
      return null == e
        ? this.getDefaultChannelName()
        : this.getCustomChannelName(e);
    }
    async getLatestVersion() {
      var e, t, n, i, u;
      const d = new r.CancellationToken(),
        p = await this.httpRequest(
          (0, s.newUrlFromBase)(`${this.basePath}.atom`, this.baseUrl),
          {
            accept: "application/xml, application/atom+xml, text/xml, */*",
          },
          d,
        ),
        f = (0, r.parseXml)(p);
      let h,
        g = f.element("entry", !1, "No published versions on GitHub"),
        m = null;
      try {
        if (this.updater.allowPrerelease) {
          const r =
            (null === (e = this.updater) || void 0 === e
              ? void 0
              : e.channel) ||
            (null === (t = o.prerelease(this.updater.currentVersion)) ||
            void 0 === t
              ? void 0
              : t[0]) ||
            null;
          if (null === r) m = c.exec(g.element("link").attribute("href"))[1];
          else
            for (const e of f.getElements("entry")) {
              const t = c.exec(e.element("link").attribute("href"));
              if (null === t) continue;
              const i = t[1];
              if (!o.valid(i)) continue;
              const s =
                  (null === (n = o.prerelease(i)) || void 0 === n
                    ? void 0
                    : n[0]) || null,
                a = !r || ["alpha", "beta"].includes(r),
                u = null !== s && !["alpha", "beta"].includes(String(s));
              if (a && !u && ("beta" !== r || "alpha" !== s)) {
                (m = i), (g = e);
                break;
              }
              if (s && s === r) {
                (m = i), (g = e);
                break;
              }
            }
        } else {
          m = await this.getLatestTagName(d);
          for (const e of f.getElements("entry")) {
            const t = c.exec(e.element("link").attribute("href"));
            if (null != t && t[1] === m) {
              g = e;
              break;
            }
          }
        }
      } catch (e) {
        throw (0, r.newError)(
          `Cannot parse releases feed: ${e.stack || e.message},\nXML:\n${p}`,
          "ERR_UPDATER_INVALID_RELEASE_FEED",
        );
      }
      if (null == m)
        throw (0, r.newError)(
          "No published versions on GitHub",
          "ERR_UPDATER_NO_PUBLISHED_VERSIONS",
        );
      let _ = "",
        S = "";
      const E = async (e) => {
        (_ = (0, s.getChannelFilename)(e)),
          (S = (0, s.newUrlFromBase)(
            this.getBaseDownloadPath(String(m), _),
            this.baseUrl,
          ));
        const t = this.createRequestOptions(S);
        try {
          return await this.executor.request(t, d);
        } catch (e) {
          if (e instanceof r.HttpError && 404 === e.statusCode)
            throw (0, r.newError)(
              `Cannot find ${_} in the latest release artifacts (${S}): ${e.stack || e.message}`,
              "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND",
            );
          throw e;
        }
      };
      try {
        let e = this.channel;
        this.updater.allowPrerelease &&
          (null === (i = o.prerelease(m)) || void 0 === i ? void 0 : i[0]) &&
          (e = this.getCustomChannelName(
            String(
              null === (u = o.prerelease(m)) || void 0 === u ? void 0 : u[0],
            ),
          )),
          (h = await E(e));
      } catch (e) {
        if (!this.updater.allowPrerelease) throw e;
        h = await E(this.getDefaultChannelName());
      }
      const y = (0, a.parseUpdateInfo)(h, _, S);
      return (
        null == y.releaseName &&
          (y.releaseName = g.elementValueOrEmpty("title")),
        null == y.releaseNotes &&
          (y.releaseNotes = (function (e, t, n, r) {
            if (!t) return l(r);
            const i = /\/tag\/v?([^/]+)$/;
            let s;
            try {
              (s = i.exec(r.element("link").attribute("href"))[1]),
                (s = o.valid(s) ? s : void 0);
            } catch {}
            if (null == s) return null;
            const a = [];
            for (const t of n.getElements("entry")) {
              let n;
              try {
                const e = i.exec(t.element("link").attribute("href"));
                if (!e) continue;
                n = e[1];
              } catch {
                continue;
              }
              if (!o.valid(n)) continue;
              const r = o.gt(n, e.raw),
                c = o.lte(n, s);
              r && c && a.push({ version: n, note: l(t) });
            }
            return a.sort((e, t) => o.rcompare(e.version, t.version));
          })(this.updater.currentVersion, this.updater.fullChangelog, f, g)),
        { tag: m, ...y }
      );
    }
    async getLatestTagName(e) {
      const t = this.options,
        n =
          null == t.host || "github.com" === t.host
            ? (0, s.newUrlFromBase)(`${this.basePath}/latest`, this.baseUrl)
            : new i.URL(
                `${this.computeGithubBasePath(`/repos/${t.owner}/${t.repo}/releases`)}/latest`,
                this.baseApiUrl,
              );
      try {
        const t = await this.httpRequest(n, { Accept: "application/json" }, e);
        return null == t ? null : JSON.parse(t).tag_name;
      } catch (e) {
        throw (0, r.newError)(
          `Unable to find latest version on GitHub (${n}), please ensure a production release exists: ${e.stack || e.message}`,
          "ERR_UPDATER_LATEST_VERSION_NOT_FOUND",
        );
      }
    }
    get basePath() {
      return `/${this.options.owner}/${this.options.repo}/releases`;
    }
    resolveFiles(e) {
      return (0, a.resolveFiles)(e, this.baseUrl, (t) =>
        this.getBaseDownloadPath(e.tag, t.replace(/ /g, "-")),
      );
    }
    getBaseDownloadPath(e, t) {
      return `${this.basePath}/download/${e}/${t}`;
    }
  });
