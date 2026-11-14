// vendor/module-1404.js — webpack module 1404
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(39053 /* vendor/module-39053 */);
(t.baggageHeaderHasSentryValues = function (e) {
  return e.split(",").some((e) => e.trim().startsWith("sentry-"));
}),
  (t.createHeadersSafely = function (e) {
    try {
      return new Headers(e);
    } catch {
      return;
    }
  }),
  (t.getFullURL = function (e) {
    try {
      return new URL(e, r.WINDOW.location.origin).href;
    } catch {
      return;
    }
  }),
  (t.isPerformanceResourceTiming = function (e) {
    return (
      "resource" === e.entryType &&
      "initiatorType" in e &&
      "string" == typeof e.nextHopProtocol &&
      ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType)
    );
  });
