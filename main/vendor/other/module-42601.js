// vendor/other/module-42601.js — webpack module 42601
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(62665 /* vendor/other/module-62665 */),
  i = n(39053 /* vendor/other/module-39053 */);
class s extends r.Client {
  constructor(e) {
    const t = a(e),
      n = i.WINDOW.SENTRY_SDK_SOURCE || r.getSDKSource();
    r.applySdkMetadata(t, "browser", ["browser"], n), super(t);
    const { userInfo: o } = this.getDataCollectionOptions();
    t._metadata?.sdk &&
      (t._metadata.sdk.settings = {
        infer_ip: o ? "auto" : "never",
        ...t._metadata.sdk.settings,
      });
    const { sendClientReports: s } = this._options;
    i.WINDOW.document &&
      i.WINDOW.document.addEventListener("visibilitychange", () => {
        "hidden" === i.WINDOW.document.visibilityState &&
          (s && this._flushOutcomes(),
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
function a(e) {
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
(t.BrowserClient = s), (t.applyDefaultOptions = a);
