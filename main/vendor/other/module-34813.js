// vendor/other/module-34813.js — webpack module 34813
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(287 /* vendor/other/module-287 */),
  i = [{ name: "AI_NoOutputGeneratedError" }, { name: "AbortError" }],
  s = r.defineIntegration((e = {}) => {
    const t = {
      mode: e.mode ?? "warn",
      ignore: [...i, ...(e.ignore ?? [])],
    };
    return {
      name: "OnUnhandledRejection",
      setup(e) {
        global.process.on("unhandledRejection", a(e, t));
      },
    };
  });
function a(e, t) {
  return function (n, i) {
    if (r.getClient() !== e) return;
    if (
      (function (e, t) {
        const n = (function (e) {
          if (!r.isObjectLike(e)) return { name: "", message: String(e ?? "") };
          const t = e;
          return {
            name: "string" == typeof t.name ? t.name : "",
            message: "string" == typeof t.message ? t.message : String(e),
          };
        })(t);
        return e.some((e) =>
          (function (e, t) {
            const n =
                void 0 === e.name || r.isMatchingPattern(t.name, e.name, !0),
              o =
                void 0 === e.message ||
                r.isMatchingPattern(t.message, e.message);
            return n && o;
          })(e, n),
        );
      })(t.ignore ?? [], n)
    )
      return;
    const s = "strict" === t.mode ? "fatal" : "error",
      a = r.isObjectLike(n) ? n._sentry_active_span : void 0;
    (a ? (e) => r.withActiveSpan(a, e) : (e) => e())(() => {
      r.captureException(n, {
        originalException: n,
        captureContext: {
          extra: { unhandledPromiseRejection: !0 },
          level: s,
        },
        mechanism: {
          handled: !1,
          type: "auto.node.onunhandledrejection",
        },
      });
    }),
      (function (e, t) {
        "warn" === t
          ? r.consoleSandbox(() => {})
          : "strict" === t &&
            (r.consoleSandbox(() => {}), o.logAndExitProcess(e));
      })(n, t.mode);
  };
}
(t.makeUnhandledPromiseHandler = a), (t.onUnhandledRejectionIntegration = s);
