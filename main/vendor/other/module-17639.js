// vendor/other/module-17639.js — webpack module 17639
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = (e) => "function" == typeof e.__unwrap,
  s =
    "Double-wrapped http.client detected. Either disable spans in Sentry.httpIntegration, or disable the OpenTelemetry HTTP instrumentation. See: https://docs.sentry.io/platforms/javascript/guides/express/opentelemetry/custom-setup/#custom-http-instrumentation";
let a = !1;
const c = r.DEBUG_BUILD
  ? (e) => {
      a || ((i(e.request) || i(e.get)) && ((a = !0), o.debug.warn(s)));
    }
  : () => {};
(t.doubleWrapWarning = c), (t.warning = s);
