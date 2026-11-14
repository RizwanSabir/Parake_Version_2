// vendor/other/module-91275.js — webpack module 91275
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(2203 /* external/stream */),
  s = n(87016 /* external/url */),
  a = n(43106 /* external/zlib */);
function c(e) {
  const {
    hostname: t,
    pathname: n,
    port: r,
    protocol: o,
    search: i,
  } = new s.URL(e);
  return {
    method: "POST",
    hostname: t,
    path: `${n}${i}`,
    port: parseInt(r, 10),
    protocol: o,
    partition: "sentry-electron",
  };
}
t.makeElectronTransport = function (e) {
  return r.createTransport(
    e,
    (function (e, t) {
      return (
        (t["Content-Type"] = "application/x-sentry-envelope"),
        function (n) {
          return o.app.whenReady().then(
            () =>
              new Promise((r, s) => {
                let u =
                  ((l = n.body),
                  new i.Readable({
                    read() {
                      this.push(l), this.push(null);
                    },
                  }));
                var l;
                const d = { ...t };
                n.body.length > 32768 &&
                  ((d["content-encoding"] = "gzip"),
                  (u = u.pipe(a.createGzip())));
                const p = o.net.request(c(e));
                for (const [e, t] of Object.entries(d)) p.setHeader(e, t);
                p.on("response", (e) => {
                  e.on("error", s),
                    e.on("data", () => {}),
                    e.on("end", () => {});
                  const t = e.headers["retry-after"] ?? null,
                    n = e.headers["x-sentry-rate-limits"] ?? null;
                  r({
                    statusCode: e.statusCode,
                    headers: {
                      "retry-after": Array.isArray(t) ? t[0] || null : t,
                      "x-sentry-rate-limits": Array.isArray(n)
                        ? n[0] || null
                        : n,
                    },
                  });
                }),
                  p.on("error", s),
                  u.pipe(p);
              }),
          );
        }
      );
    })(e.url, e.headers || {}),
  );
};
