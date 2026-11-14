// vendor/module-42601.js — webpack module 42601
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(62665 /* vendor/module-62665 */),
  i = n(39053 /* vendor/module-39053 */);
class a extends r.Client {
  constructor(e) {
    const t = s(e),
      n = i.WINDOW.SENTRY_SDK_SOURCE || r.getSDKSource();
    r.applySdkMetadata(t, "browser", ["browser"], n), super(t);
    const { userInfo: o } = this.getDataCollectionOptions();
    t._metadata?.sdk &&
      (t._metadata.sdk.settings = {
        infer_ip: o ? "auto" : "never",
        ...t._metadata.sdk.settings,
      });
    const { sendClientReports: a } = this._options;
    i.WINDOW.document &&
      i.WINDOW.document.addEventListener("visibilitychange", () => {
        "hidden" === i.WINDOW.document.visibilityState &&
          (a && this._flushOutcomes(),
          queueMicrotask(() => {
            this.flush();
          }));
      }),
      o && this.on("beforeSendSession", r.addAutoIpAddressToSession);
  }
  eventFromException(e, t) {
    return o.eventFromException(
      this._options.stackParser,
      e,
      t,
      this._options.attachStacktrace,
    );
  }
  eventFromMessage(e, t = "info", n) {
    return o.eventFromMessage(
      this._options.stackParser,
      e,
      t,
      n,
      this._options.attachStacktrace,
    );
  }
  _prepareEvent(e, t, n, r) {
    return (
      (e.platform = e.platform || "javascript"), super._prepareEvent(e, t, n, r)
    );
  }
}
function s(e) {
  return {
    release:
      "string" == typeof __SENTRY_RELEASE__
        ? __SENTRY_RELEASE__
        : i.WINDOW.SENTRY_RELEASE?.id,
    sendClientReports: !0,
    parentSpanIsAlwaysRootSpan: !0,
    ...e,
  };
}
(t.BrowserClient = a), (t.applyDefaultOptions = s);
