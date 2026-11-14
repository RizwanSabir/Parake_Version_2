// vendor/other/module-65506.js — webpack module 65506
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(92898 /* vendor/other/module-92898 */),
  i = n(84157 /* external/electron */),
  s = n(87016 /* external/url */);
function a(e) {
  if ("string" == typeof e)
    try {
      return { method: "GET", url: new URL(e).href };
    } catch {
      return { method: "GET", url: e };
    }
  const t = (e.method || "GET").toUpperCase(),
    n = e;
  let o = "url" in n ? n.url : void 0;
  if (!o) {
    const e = {};
    (e.protocol = n.protocol || "http:"),
      n.host
        ? (e.host = n.host)
        : (n.hostname ? (e.hostname = n.hostname) : (e.hostname = "localhost"),
          n.port && (e.port = n.port));
    const t = r.parseStringToURLObject(n.path || "/");
    (e.pathname = t?.pathname),
      (e.search = t?.search),
      (e.hash = t?.hash),
      (o = s.format(e));
  }
  return { method: t, url: o };
}
const c = r.defineIntegration((e = {}) => ({
  name: "ElectronNet",
  setup(t) {
    (!1 === e.breadcrumbs && !1 === e.tracing) ||
      r.fill(
        i.net,
        "request",
        (function (
          { tracing: e, breadcrumbs: t },
          {
            enableLogs: n,
            tracePropagationTargets: i,
            propagateTraceparent: s,
          },
        ) {
          const c = new r.LRUMap(100),
            u = new r.LRUMap(100),
            l = (e, t, i, s, a) => {
              const c = r.getBreadcrumbLogLevelFromHttpStatusCode(
                a?.statusCode,
              );
              if (
                (r.addBreadcrumb(
                  {
                    type: "http",
                    category: "electron.net",
                    data: {
                      url: i,
                      method: t,
                      status_code: a?.statusCode,
                    },
                    level: c,
                  },
                  { event: e, request: s, response: a },
                ),
                !n)
              )
                return;
              const u = {
                "sentry.origin": "auto.electron.net",
                statusCode: a?.statusCode,
              };
              switch (c) {
                case "error":
                  o.logger.error(
                    o.logger.fmt`Electron.net request failed: ${t} ${i}`,
                    u,
                  );
                  break;
                case "warning":
                  o.logger.warn(
                    o.logger.fmt`Electron.net request warning: ${t} ${i}`,
                    u,
                  );
                  break;
                default:
                  o.logger.info(
                    o.logger.fmt`Electron.net request succeeded: ${t} ${i}`,
                    u,
                  );
              }
            };
          return function (n) {
            return function (o, ...d) {
              const { url: p, method: f } = a(o),
                h = n.apply(this, [o, ...d]);
              if (p.match(/sentry_key/) || h.getHeader("x-sentry-auth"))
                return h;
              const g = ((t, n) => {
                if (void 0 === e) return !0;
                if (!1 === e) return !1;
                const r = `${t}:${n}`,
                  o = c.get(r);
                if (void 0 !== o) return o;
                const i = !0 === e || e(t, n);
                return c.set(r, i), i;
              })(f, p)
                ? r.startInactiveSpan({
                    name: `${f} ${p}`,
                    onlyIfParent: !0,
                    attributes: {
                      url: p,
                      type: "net.request",
                      "http.method": f,
                    },
                    op: "http.client",
                  })
                : new r.SentryNonRecordingSpan();
              if (
                (g.setAttribute(
                  r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
                  "auto.http.electron.net",
                ),
                ((e, t) => {
                  const n = `${e}:${t}`,
                    o = u.get(n);
                  if (void 0 !== o) return o;
                  if (i) {
                    const e = r.stringMatchesSomePattern(t, i);
                    return u.set(n, e), e;
                  }
                  return !0;
                })(f, p))
              ) {
                const e = () => {
                  for (const [e, t] of Object.entries(
                    r.getTraceData({ propagateTraceparent: s }),
                  ))
                    r.debug.log(
                      `[Tracing] Adding ${e} header ${t} to outgoing request to "${p}": `,
                    ),
                      h.setHeader(e, t);
                };
                g.isRecording() ? r.withActiveSpan(g, e) : e();
              }
              return h
                .once("response", function (e) {
                  !1 !== t && l("response", f, p, this, e),
                    e.statusCode && r.setHttpStatus(g, e.statusCode),
                    g.end();
                })
                .once("error", function (e) {
                  !1 !== t && l("error", f, p, this, void 0),
                    r.setHttpStatus(g, 500),
                    g.end();
                });
            };
          };
        })(e, t.getOptions()),
      );
  },
}));
t.electronNetIntegration = c;
