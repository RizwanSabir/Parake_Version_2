// vendor/module-17639.js — webpack module 17639
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = (e) => "function" == typeof e.__unwrap,
  a =
    "Double-wrapped http.client detected. Either disable spans in Sentry.httpIntegration, or disable the OpenTelemetry HTTP instrumentation. See: https://docs.sentry.io/platforms/javascript/guides/express/opentelemetry/custom-setup/#custom-http-instrumentation";
let s = !1;
const l = r.DEBUG_BUILD
  ? (e) => {
      s || ((i(e.request) || i(e.get)) && ((s = !0), o.debug.warn(a)));
    }
  : () => {};
(t.doubleWrapWarning = l), (t.warning = a);
