// vendor/other/module-24296.js — webpack module 24296
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(76414 /* vendor/other/module-76414 */),
  i = n(57230 /* vendor/other/module-57230 */),
  s = n(39053 /* vendor/other/module-39053 */),
  a = r.defineIntegration((e = {}) => {
    const t = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...e,
    };
    return {
      name: "Breadcrumbs",
      setup(e) {
        t.console &&
          r.addConsoleInstrumentationHandler(
            (function (e) {
              return function (t) {
                if (r.getClient() !== e) return;
                const n = {
                  category: "console",
                  data: { arguments: t.args, logger: "console" },
                  level: r.severityLevelFromString(t.level),
                  message: r.safeJoin(t.args, " "),
                };
                if ("assert" === t.level) {
                  if (!1 !== t.args[0]) return;
                  (n.message = `Assertion failed: ${r.safeJoin(t.args.slice(1), " ") || "console.assert"}`),
                    (n.data.arguments = t.args.slice(1));
                }
                r.addBreadcrumb(n, { input: t.args, level: t.level });
              };
            })(e),
          ),
          t.dom &&
            o.addClickKeypressInstrumentationHandler(
              (function (e, t) {
                return function (n) {
                  if (r.getClient() !== e) return;
                  let s,
                    a,
                    c = "object" == typeof t ? t.serializeAttribute : void 0,
                    u =
                      "object" == typeof t &&
                      "number" == typeof t.maxStringLength
                        ? t.maxStringLength
                        : void 0;
                  u &&
                    u > 1024 &&
                    (i.DEBUG_BUILD &&
                      r.debug.warn(
                        `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${u} was configured. Sentry will use 1024 instead.`,
                      ),
                    (u = 1024)),
                    "string" == typeof c && (c = [c]);
                  try {
                    const e = n.event,
                      t = (function (e) {
                        return !!e && !!e.target;
                      })(e)
                        ? e.target
                        : e;
                    (s = o.htmlTreeAsString(t, {
                      keyAttrs: c,
                      maxStringLength: u,
                    })),
                      (a = r.getComponentName(t));
                  } catch {
                    s = "<unknown>";
                  }
                  if (0 === s.length) return;
                  const l = { category: `ui.${n.name}`, message: s };
                  a && (l.data = { "ui.component_name": a }),
                    r.addBreadcrumb(l, {
                      event: n.event,
                      name: n.name,
                      global: n.global,
                    });
                };
              })(e, t.dom),
            ),
          t.xhr &&
            o.addXhrInstrumentationHandler(
              (function (e) {
                return function (t) {
                  if (r.getClient() !== e) return;
                  const { startTimestamp: n, endTimestamp: i } = t,
                    s = t.xhr[o.SENTRY_XHR_DATA_KEY];
                  if (!n || !i || !s) return;
                  const { method: a, url: c, status_code: u, body: l } = s,
                    d = { method: a, url: c, status_code: u },
                    p = {
                      xhr: t.xhr,
                      input: l,
                      startTimestamp: n,
                      endTimestamp: i,
                    },
                    f = {
                      category: "xhr",
                      data: d,
                      type: "http",
                      level: r.getBreadcrumbLogLevelFromHttpStatusCode(u),
                    };
                  e.emit("beforeOutgoingRequestBreadcrumb", f, p),
                    r.addBreadcrumb(f, p);
                };
              })(e),
            ),
          t.fetch &&
            r.addFetchInstrumentationHandler(
              (function (e) {
                return function (t) {
                  if (r.getClient() !== e) return;
                  const { startTimestamp: n, endTimestamp: o } = t;
                  if (
                    o &&
                    (!t.fetchData.url.match(/sentry_key/) ||
                      "POST" !== t.fetchData.method)
                  )
                    if (t.error) {
                      const i = {
                          data: t.error,
                          input: t.args,
                          startTimestamp: n,
                          endTimestamp: o,
                        },
                        s = {
                          category: "fetch",
                          data: t.fetchData,
                          level: "error",
                          type: "http",
                        };
                      e.emit("beforeOutgoingRequestBreadcrumb", s, i),
                        r.addBreadcrumb(s, i);
                    } else {
                      const i = t.response,
                        s = {
                          ...t.fetchData,
                          status_code: i?.status,
                        },
                        a = {
                          input: t.args,
                          response: i,
                          startTimestamp: n,
                          endTimestamp: o,
                        },
                        c = {
                          category: "fetch",
                          data: s,
                          type: "http",
                          level: r.getBreadcrumbLogLevelFromHttpStatusCode(
                            s.status_code,
                          ),
                        };
                      e.emit("beforeOutgoingRequestBreadcrumb", c, a),
                        r.addBreadcrumb(c, a);
                    }
                };
              })(e),
            ),
          t.history &&
            o.addHistoryInstrumentationHandler(
              (function (e) {
                return function (t) {
                  if (r.getClient() !== e) return;
                  let n = t.from,
                    o = t.to;
                  const i = r.parseUrl(s.WINDOW.location.href);
                  let a = n ? r.parseUrl(n) : void 0;
                  const c = r.parseUrl(o);
                  a?.path || (a = i),
                    i.protocol === c.protocol &&
                      i.host === c.host &&
                      (o = c.relative),
                    i.protocol === a.protocol &&
                      i.host === a.host &&
                      (n = a.relative),
                    r.addBreadcrumb({
                      category: "navigation",
                      data: { from: n, to: o },
                    });
                };
              })(e),
            ),
          t.sentry &&
            e.on(
              "beforeSendEvent",
              (function (e) {
                return function (t) {
                  r.getClient() === e &&
                    r.addBreadcrumb(
                      {
                        category:
                          "sentry." +
                          ("transaction" === t.type ? "transaction" : "event"),
                        event_id: t.event_id,
                        level: t.level,
                        message: r.getEventDescription(t),
                      },
                      { event: t },
                    );
                };
              })(e),
            );
      },
    };
  });
t.breadcrumbsIntegration = a;
