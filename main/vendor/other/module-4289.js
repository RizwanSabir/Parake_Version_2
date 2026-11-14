// vendor/other/module-4289.js — webpack module 4289
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(37067 /* external/node_http */),
  o = n(44708 /* external/node_https */),
  i = n(57075 /* external/node_stream */),
  s = n(38522 /* external/node_zlib */),
  a = n(96137 /* vendor/other/module-96137 */),
  c = n(65897 /* vendor/other/module-65897 */);
t.makeNodeTransport = function (e) {
  let t;
  try {
    t = new URL(e.url);
  } catch (t) {
    return (
      a.consoleSandbox(() => {}),
      a.createTransport(e, () => Promise.resolve({}))
    );
  }
  const n = "https:" === t.protocol,
    u = (function (e, t) {
      const { no_proxy: n } = process.env,
        r = n
          ?.split(",")
          .some((t) => e.host.endsWith(t) || e.hostname.endsWith(t));
      return r ? void 0 : t;
    })(
      t,
      e.proxy ||
        (n ? process.env.https_proxy : void 0) ||
        process.env.http_proxy,
    ),
    l = n ? o : r,
    d = void 0 !== e.keepAlive && e.keepAlive,
    p = u
      ? new c.HttpsProxyAgent(u)
      : new l.Agent({ keepAlive: d, maxSockets: 30, timeout: 2e3 }),
    f = (function (e, t, n) {
      const {
        hostname: r,
        pathname: o,
        port: c,
        protocol: u,
        search: l,
      } = new URL(e.url);
      return function (d) {
        return new Promise((p, f) => {
          a.suppressTracing(() => {
            let a = (function (e) {
              return new i.Readable({
                read() {
                  this.push(e), this.push(null);
                },
              });
            })(d.body);
            const h = { ...e.headers };
            d.body.length > 32768 &&
              ((h["content-encoding"] = "gzip"), (a = a.pipe(s.createGzip())));
            const g = r.startsWith("["),
              m = t.request(
                {
                  method: "POST",
                  agent: n,
                  headers: h,
                  hostname: g ? r.slice(1, -1) : r,
                  path: `${o}${l}`,
                  port: c,
                  protocol: u,
                  ca: e.caCerts,
                },
                (e) => {
                  e.on("data", () => {}),
                    e.on("end", () => {}),
                    e.setEncoding("utf8");
                  const t = e.headers["retry-after"] ?? null,
                    n = e.headers["x-sentry-rate-limits"] ?? null;
                  p({
                    statusCode: e.statusCode,
                    headers: {
                      "retry-after": t,
                      "x-sentry-rate-limits": Array.isArray(n)
                        ? n[0] || null
                        : n,
                    },
                  });
                },
              );
            m.on("error", f), a.pipe(m);
          });
        });
      };
    })(e, e.httpModule ?? l, p);
  return a.createTransport(e, f);
};
