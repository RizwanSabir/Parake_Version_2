// vendor/other/module-72286.js — webpack module 72286
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
t.GenericProvider = void 0;
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(84363 /* vendor/other/module-84363 */),
  i = n(13153 /* vendor/other/module-13153 */);
class s extends i.Provider {
  constructor(e, t, n) {
    super(n),
      (this.configuration = e),
      (this.updater = t),
      (this.baseUrl = (0, o.newBaseUrl)(this.configuration.url));
  }
  get channel() {
    const e = this.updater.channel || this.configuration.channel;
    return null == e
      ? this.getDefaultChannelName()
      : this.getCustomChannelName(e);
  }
  async getLatestVersion() {
    const e = (0, o.getChannelFilename)(this.channel),
      t = (0, o.newUrlFromBase)(
        e,
        this.baseUrl,
        this.updater.isAddNoCacheQuery,
      );
    for (let n = 0; ; n++)
      try {
        return (0, i.parseUpdateInfo)(await this.httpRequest(t), e, t);
      } catch (t) {
        if (t instanceof r.HttpError && 404 === t.statusCode)
          throw (0, r.newError)(
            `Cannot find channel "${e}" update info: ${t.stack || t.message}`,
            "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND",
          );
        if ("ECONNREFUSED" === t.code && n < 3) {
          await new Promise((e, t) => {
            try {
              setTimeout(e, 1e3 * n);
            } catch (e) {
              t(e);
            }
          });
          continue;
        }
        throw t;
      }
  }
  resolveFiles(e) {
    return (0, i.resolveFiles)(e, this.baseUrl);
  }
}
t.GenericProvider = s;
