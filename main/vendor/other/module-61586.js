// vendor/other/module-61586.js — webpack module 61586
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(57230 /* vendor/other/module-57230 */),
  i = n(62665 /* vendor/other/module-62665 */),
  s = n(39053 /* vendor/other/module-39053 */),
  a = r.defineIntegration((e = {}) => {
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
              if (r.getClient() !== e || s.shouldIgnoreOnError()) return;
              const { msg: a, url: c, line: u, column: l, error: f } = t,
                h = (function (e, t, n, o) {
                  const i = (e.exception = e.exception || {}),
                    s = (i.values = i.values || []),
                    a = (s[0] = s[0] || {}),
                    c = (a.stacktrace = a.stacktrace || {}),
                    u = (c.frames = c.frames || []);
                  return (
                    0 === u.length &&
                      u.push({
                        colno: o,
                        lineno: n,
                        filename: p(t) ?? r.getLocationHref(),
                        function: r.UNKNOWN_FUNCTION,
                        in_app: !0,
                      }),
                    e
                  );
                })(i.eventFromUnknownInput(n, f || a, void 0, o, !1), c, u, l);
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
          l("onerror")),
          t.onunhandledrejection &&
            ((function (e) {
              r.addGlobalUnhandledRejectionInstrumentationHandler((t) => {
                const { stackParser: n, attachStacktrace: o } = d();
                if (r.getClient() !== e || s.shouldIgnoreOnError()) return;
                const a = c(t),
                  l = r.isPrimitive(a)
                    ? u(a)
                    : i.eventFromUnknownInput(n, a, void 0, o, !0);
                (l.level = "error"),
                  r.captureEvent(l, {
                    originalException: a,
                    mechanism: {
                      handled: !1,
                      type: "auto.browser.global_handlers.onunhandledrejection",
                    },
                  });
              });
            })(e),
            l("onunhandledrejection"));
      },
    };
  });
function c(e) {
  if (r.isPrimitive(e)) return e;
  try {
    if ("reason" in e) return e.reason;
    if ("detail" in e && "reason" in e.detail) return e.detail.reason;
  } catch {}
  return e;
}
function u(e) {
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
function l(e) {
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
(t._eventFromRejectionWithPrimitive = u),
  (t._getUnhandledRejectionError = c),
  (t.globalHandlersIntegration = a);
