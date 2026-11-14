// vendor/module-12050.js — webpack module 12050
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = n(39053 /* vendor/module-39053 */);
t.registerBackgroundTabDetection = function () {
  i.WINDOW.document
    ? i.WINDOW.document.addEventListener("visibilitychange", () => {
        const e = r.getActiveSpan();
        if (!e) return;
        const t = r.getRootSpan(e);
        if (i.WINDOW.document.hidden && t) {
          const e = "cancelled",
            { op: n, status: i } = r.spanToJSON(t);
          o.DEBUG_BUILD &&
            r.debug.log(
              `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`,
            ),
            i || t.setStatus({ code: r.SPAN_STATUS_ERROR, message: e }),
            t.setAttribute("sentry.cancellation_reason", "document.hidden"),
            t.end();
        }
      })
    : o.DEBUG_BUILD &&
      r.debug.warn(
        "[Tracing] Could not set up background tab detection due to lack of global document",
      );
};
