// vendor/module-24296.js — webpack module 24296
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(76414 /* vendor/module-76414 */),
  i = n(57230 /* vendor/module-57230 */),
  a = n(39053 /* vendor/module-39053 */),
  s = r.defineIntegration((e = {}) => {
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
                  let a,
                    s,
                    l = "object" == typeof t ? t.serializeAttribute : void 0,
                    c =
                      "object" == typeof t &&
                      "number" == typeof t.maxStringLength
                        ? t.maxStringLength
                        : void 0;
                  c &&
                    c > 1024 &&
                    (i.DEBUG_BUILD &&
                      r.debug.warn(
                        `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${c} was configured. Sentry will use 1024 instead.`,
                      ),
                    (c = 1024)),
                    "string" == typeof l && (l = [l]);
                  try {
                    const e = n.event,
                      t = (function (e) {
                        return !!e && !!e.target;
                      })(e)
                        ? e.target
                        : e;
                    (a = o.htmlTreeAsString(t, {
                      keyAttrs: l,
                      maxStringLength: c,
                    })),
                      (s = r.getComponentName(t));
                  } catch {
                    a = "<unknown>";
                  }
                  if (0 === a.length) return;
                  const u = { category: `ui.${n.name}`, message: a };
                  s && (u.data = { "ui.component_name": s }),
                    r.addBreadcrumb(u, {
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
                    a = t.xhr[o.SENTRY_XHR_DATA_KEY];
                  if (!n || !i || !a) return;
                  const { method: s, url: l, status_code: c, body: u } = a,
                    d = { method: s, url: l, status_code: c },
                    p = {
                      xhr: t.xhr,
                      input: u,
                      startTimestamp: n,
                      endTimestamp: i,
                    },
                    f = {
                      category: "xhr",
                      data: d,
                      type: "http",
                      level: r.getBreadcrumbLogLevelFromHttpStatusCode(c),
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
                        a = {
                          category: "fetch",
                          data: t.fetchData,
                          level: "error",
                          type: "http",
                        };
                      e.emit("beforeOutgoingRequestBreadcrumb", a, i),
                        r.addBreadcrumb(a, i);
                    } else {
                      const i = t.response,
                        a = {
                          ...t.fetchData,
                          status_code: i?.status,
                        },
                        s = {
                          input: t.args,
                          response: i,
                          startTimestamp: n,
                          endTimestamp: o,
                        },
                        l = {
                          category: "fetch",
                          data: a,
                          type: "http",
                          level: r.getBreadcrumbLogLevelFromHttpStatusCode(
                            a.status_code,
                          ),
                        };
                      e.emit("beforeOutgoingRequestBreadcrumb", l, s),
                        r.addBreadcrumb(l, s);
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
                  const i = r.parseUrl(a.WINDOW.location.href);
                  let s = n ? r.parseUrl(n) : void 0;
                  const l = r.parseUrl(o);
                  s?.path || (s = i),
                    i.protocol === l.protocol &&
                      i.host === l.host &&
                      (o = l.relative),
                    i.protocol === s.protocol &&
                      i.host === s.host &&
                      (n = s.relative),
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
t.breadcrumbsIntegration = s;
