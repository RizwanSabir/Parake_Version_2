// vendor/other/module-13153.js — webpack module 13153
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.Provider = void 0),
  (t.findFile = function (e, t, n) {
    var o;
    if (0 === e.length)
      throw (0, r.newError)(
        "No files provided",
        "ERR_UPDATER_NO_FILES_PROVIDED",
      );
    const i = e.filter((e) =>
      e.url.pathname.toLowerCase().endsWith(`.${t.toLowerCase()}`),
    );
    return (
      (null !==
        (o = i.find((e) =>
          [e.url.pathname, e.info.url].some((e) => e.includes(process.arch)),
        )) && void 0 !== o
        ? o
        : i.shift()) ||
      (null == n
        ? e[0]
        : e.find(
            (e) =>
              !n.some((t) =>
                e.url.pathname.toLowerCase().endsWith(`.${t.toLowerCase()}`),
              ),
          ))
    );
  }),
  (t.parseUpdateInfo = function (e, t, n) {
    if (null == e)
      throw (0, r.newError)(
        `Cannot parse update info from ${t} in the latest release artifacts (${n}): rawData: null`,
        "ERR_UPDATER_INVALID_UPDATE_INFO",
      );
    let i;
    try {
      i = (0, o.load)(e);
    } catch (o) {
      throw (0, r.newError)(
        `Cannot parse update info from ${t} in the latest release artifacts (${n}): ${o.stack || o.message}, rawData: ${e}`,
        "ERR_UPDATER_INVALID_UPDATE_INFO",
      );
    }
    return i;
  }),
  (t.getFileList = c),
  (t.resolveFiles = function (e, t, n = (e) => e) {
    const o = c(e).map((e) => {
        if (null == e.sha2 && null == e.sha512)
          throw (0, r.newError)(
            `Update info doesn't contain nor sha256 neither sha512 checksum: ${(0, r.safeStringifyJson)(e)}`,
            "ERR_UPDATER_NO_CHECKSUM",
          );
        return { url: (0, s.newUrlFromBase)(n(e.url), t), info: e };
      }),
      i = e.packages,
      a = null == i ? null : i[process.arch] || i.ia32;
    return (
      null != a &&
        (o[0].packageInfo = {
          ...a,
          path: (0, s.newUrlFromBase)(n(a.path), t).href,
        }),
      o
    );
  });
const r = n(53674 /* vendor/other/module-53674 */),
  o = n(19515 /* vendor/other/module-19515 */),
  i = n(87016 /* external/url */),
  s = n(84363 /* vendor/other/module-84363 */),
  a = n(17697 /* vendor/other/module-17697 */);
function c(e) {
  const t = e.files;
  if (null != t && t.length > 0) return t;
  if (null != e.path) return [{ url: e.path, sha2: e.sha2, sha512: e.sha512 }];
  throw (0, r.newError)(
    `No files provided: ${(0, r.safeStringifyJson)(e)}`,
    "ERR_UPDATER_NO_FILES_PROVIDED",
  );
}
t.Provider = class {
  constructor(e) {
    (this.runtimeOptions = e),
      (this.requestHeaders = null),
      (this.executor = e.executor);
  }
  getBlockMapFiles(e, t, n, r = null) {
    const o = (0, s.newUrlFromBase)(`${e.pathname}.blockmap`, e);
    return [
      (0, s.newUrlFromBase)(
        `${e.pathname.replace(new RegExp(a(n), "g"), t)}.blockmap`,
        r ? new i.URL(r) : e,
      ),
      o,
    ];
  }
  get isUseMultipleRangeRequest() {
    return !1 !== this.runtimeOptions.isUseMultipleRangeRequest;
  }
  getChannelFilePrefix() {
    if ("linux" === this.runtimeOptions.platform) {
      const e = process.env.TEST_UPDATER_ARCH || process.arch;
      return "-linux" + ("x64" === e ? "" : `-${e}`);
    }
    return "darwin" === this.runtimeOptions.platform ? "-mac" : "";
  }
  getDefaultChannelName() {
    return this.getCustomChannelName("latest");
  }
  getCustomChannelName(e) {
    return `${e}${this.getChannelFilePrefix()}`;
  }
  get fileExtraDownloadHeaders() {
    return null;
  }
  setRequestHeaders(e) {
    this.requestHeaders = e;
  }
  httpRequest(e, t, n) {
    return this.executor.request(this.createRequestOptions(e, t), n);
  }
  createRequestOptions(e, t) {
    const n = {};
    return (
      null == this.requestHeaders
        ? null != t && (n.headers = t)
        : (n.headers =
            null == t ? this.requestHeaders : { ...this.requestHeaders, ...t }),
      (0, r.configureRequestUrl)(e, n),
      n
    );
  }
};
