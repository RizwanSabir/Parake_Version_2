// vendor/module-61586.js — webpack module 61586
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = n(62665 /* vendor/module-62665 */),
  a = n(39053 /* vendor/module-39053 */),
  s = r.defineIntegration((e = {}) => {
    const t = { onerror: !0, onunhandledrejection: !0, ...e };
    return {
      name: "GlobalHandlers",
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(e) {
        t.onerror &&
          ((function (e) {
            r.addGlobalErrorInstrumentationHandler((t) => {
              const { stackParser: n, attachStacktrace: o } = d();
              if (r.getClient() !== e || a.shouldIgnoreOnError()) return;
              const { msg: s, url: l, line: c, column: u, error: f } = t,
                h = (function (e, t, n, o) {
                  const i = (e.exception = e.exception || {}),
                    a = (i.values = i.values || []),
                    s = (a[0] = a[0] || {}),
                    l = (s.stacktrace = s.stacktrace || {}),
                    c = (l.frames = l.frames || []);
                  return (
                    0 === c.length &&
                      c.push({
                        colno: o,
                        lineno: n,
                        filename: p(t) ?? r.getLocationHref(),
                        function: r.UNKNOWN_FUNCTION,
                        in_app: !0,
                      }),
                    e
                  );
                })(i.eventFromUnknownInput(n, f || s, void 0, o, !1), l, c, u);
              (h.level = "error"),
                r.captureEvent(h, {
                  originalException: f,
                  mechanism: {
                    handled: !1,
                    type: "auto.browser.global_handlers.onerror",
                  },
                });
            });
          })(e),
          u("onerror")),
          t.onunhandledrejection &&
            ((function (e) {
              r.addGlobalUnhandledRejectionInstrumentationHandler((t) => {
                const { stackParser: n, attachStacktrace: o } = d();
                if (r.getClient() !== e || a.shouldIgnoreOnError()) return;
                const s = l(t),
                  u = r.isPrimitive(s)
                    ? c(s)
                    : i.eventFromUnknownInput(n, s, void 0, o, !0);
                (u.level = "error"),
                  r.captureEvent(u, {
                    originalException: s,
                    mechanism: {
                      handled: !1,
                      type: "auto.browser.global_handlers.onunhandledrejection",
                    },
                  });
              });
            })(e),
            u("onunhandledrejection"));
      },
    };
  });
function l(e) {
  if (r.isPrimitive(e)) return e;
  try {
    if ("reason" in e) return e.reason;
    if ("detail" in e && "reason" in e.detail) return e.detail.reason;
  } catch {}
  return e;
}
function c(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(e)}`,
        },
      ],
    },
  };
}
function u(e) {
  o.DEBUG_BUILD && r.debug.log(`Global Handler attached: ${e}`);
}
function d() {
  const e = r.getClient();
  return e?.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
function p(e) {
  if (r.isString(e) && 0 !== e.length)
    return e.startsWith("data:") ? `<${r.stripDataUrlContent(e, !1)}>` : e;
}
(t._eventFromRejectionWithPrimitive = c),
  (t._getUnhandledRejectionError = l),
  (t.globalHandlersIntegration = s);
