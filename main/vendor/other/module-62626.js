// vendor/other/module-62626.js — webpack module 62626
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.BitbucketProvider = void 0;
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(84363 /* vendor/other/module-84363 */),
  i = n(13153 /* vendor/other/module-13153 */);
class s extends i.Provider {
  constructor(e, t, n) {
    super({ ...n, isUseMultipleRangeRequest: !1 }),
      (this.configuration = e),
      (this.updater = t);
    const { owner: r, slug: i } = e;
    this.baseUrl = (0, o.newBaseUrl)(
      `https://api.bitbucket.org/2.0/repositories/${r}/${i}/downloads`,
    );
  }
  get channel() {
    return this.updater.channel || this.configuration.channel || "latest";
  }
  async getLatestVersion() {
    const e = new r.CancellationToken(),
      t = (0, o.getChannelFilename)(this.getCustomChannelName(this.channel)),
      n = (0, o.newUrlFromBase)(
        t,
        this.baseUrl,
        this.updater.isAddNoCacheQuery,
      );
    try {
      const r = await this.httpRequest(n, void 0, e);
      return (0, i.parseUpdateInfo)(r, t, n);
    } catch (e) {
      throw (0, r.newError)(
        `Unable to find latest version on ${this.toString()}, please ensure release exists: ${e.stack || e.message}`,
        "ERR_UPDATER_LATEST_VERSION_NOT_FOUND",
      );
    }
  }
  resolveFiles(e) {
    return (0, i.resolveFiles)(e, this.baseUrl);
  }
  toString() {
    const { owner: e, slug: t } = this.configuration;
    return `Bitbucket (owner: ${e}, slug: ${t}, channel: ${this.channel})`;
  }
}
t.BitbucketProvider = s;
