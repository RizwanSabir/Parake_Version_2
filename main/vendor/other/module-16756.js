// vendor/other/module-16756.js — webpack module 16756
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
(t.ElectronHttpExecutor = t.j = void 0), (t.getNetSession = o);
const r = n(53674 /* vendor/other/module-53674 */);
function o() {
  return n(84157 /* external/electron */).session.fromPartition(t.j, {
    cache: !1,
  });
}
t.j = "electron-updater";
class i extends r.HttpExecutor {
  constructor(e) {
    super(), (this.proxyLoginCallback = e), (this.cachedSession = null);
  }
  async download(e, t, n) {
    return await n.cancellationToken.createPromise((o, i, s) => {
      const a = { headers: n.headers || void 0, redirect: "manual" };
      (0, r.configureRequestUrl)(e, a),
        (0, r.configureRequestOptions)(a),
        this.doDownload(
          a,
          {
            destination: t,
            options: n,
            onCancel: s,
            callback: (e) => {
              null == e ? o(t) : i(e);
            },
            responseHandler: null,
          },
          0,
        );
    });
  }
  createRequest(e, t) {
    e.headers &&
      e.headers.Host &&
      ((e.host = e.headers.Host), delete e.headers.Host),
      null == this.cachedSession && (this.cachedSession = o());
    const r = n(84157 /* external/electron */).net.request({
      ...e,
      session: this.cachedSession,
    });
    return (
      r.on("response", t),
      null != this.proxyLoginCallback && r.on("login", this.proxyLoginCallback),
      r
    );
  }
  addRedirectHandlers(e, t, n, o, i) {
    e.on("redirect", (s, a, c) => {
      e.abort(),
        o > this.maxRedirects
          ? n(this.createMaxRedirectError())
          : i(r.HttpExecutor.prepareRedirectUrlOptions(c, t));
    });
  }
}
t.ElectronHttpExecutor = i;
