// vendor/module-39053.js — webpack module 39053
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = r.GLOBAL_OBJ;
let i = 0;
function a() {
  i++,
    setTimeout(() => {
      i--;
    });
}
(t.WINDOW = o),
  (t.getHttpRequestData = function () {
    const e = r.getLocationHref(),
      { referrer: t } = o.document || {},
      { userAgent: n } = o.navigator || {};
    return {
      url: e,
      headers: {
        ...(t && { Referer: t }),
        ...(n && { "User-Agent": n }),
      },
    };
  }),
  (t.ignoreNextOnError = a),
  (t.shouldIgnoreOnError = function () {
    return i > 0;
  }),
  (t.wrap = function e(t, n = {}) {
    if ("function" != typeof t) return t;
    try {
      if (Object.prototype.hasOwnProperty.call(t, "__sentry_wrapped__")) {
        const e = t.__sentry_wrapped__;
        return "function" == typeof e ? e : t;
      }
      if (r.getOriginalFunction(t)) return t;
    } catch {
      return t;
    }
    const o = function (...o) {
      r.GLOBAL_OBJ._sentryWrappedDepth =
        (r.GLOBAL_OBJ._sentryWrappedDepth || 0) + 1;
      try {
        const r = o.map((t) => e(t, n));
        return t.apply(this, r);
      } catch (e) {
        throw (
          (a(),
          r.withScope((t) => {
            t.addEventProcessor(
              (e) => (
                n.mechanism &&
                  (r.addExceptionTypeValue(e, void 0, void 0),
                  r.addExceptionMechanism(e, n.mechanism)),
                (e.extra = { ...e.extra, arguments: o }),
                e
              ),
            ),
              r.captureException(e);
          }),
          e)
        );
      } finally {
        r.GLOBAL_OBJ._sentryWrappedDepth =
          (r.GLOBAL_OBJ._sentryWrappedDepth || 0) - 1;
      }
    };
    try {
      for (const e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    } catch {}
    r.markFunctionWrapped(o, t),
      r.addNonEnumerableProperty(t, "__sentry_wrapped__", o);
    try {
      Object.getOwnPropertyDescriptor(o, "name").configurable &&
        Object.defineProperty(o, "name", { get: () => t.name });
    } catch {}
    return o;
  });
