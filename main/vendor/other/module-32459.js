// vendor/other/module-32459.js — webpack module 32459
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
function o(...e) {
  r.debug.log("[https-proxy-agent:parse-proxy-response]", ...e);
}
t.parseProxyResponse = function (e) {
  return new Promise((t, n) => {
    let r = 0;
    const i = [];
    function s() {
      const c = e.read();
      c
        ? (function (c) {
            i.push(c), (r += c.length);
            const u = Buffer.concat(i, r),
              l = u.indexOf("\r\n\r\n");
            if (-1 === l)
              return (
                o("have not received end of HTTP headers yet..."), void s()
              );
            const d = u.subarray(0, l).toString("ascii").split("\r\n"),
              p = d.shift();
            if (!p)
              return (
                e.destroy(),
                n(new Error("No header received from proxy CONNECT response"))
              );
            const f = p.split(" "),
              h = +(f[1] || 0),
              g = f.slice(2).join(" "),
              m = {};
            for (const t of d) {
              if (!t) continue;
              const r = t.indexOf(":");
              if (-1 === r)
                return (
                  e.destroy(),
                  n(
                    new Error(
                      `Invalid header from proxy CONNECT response: "${t}"`,
                    ),
                  )
                );
              const o = t.slice(0, r).toLowerCase(),
                i = t.slice(r + 1).trimStart(),
                s = m[o];
              "string" == typeof s
                ? (m[o] = [s, i])
                : Array.isArray(s)
                  ? s.push(i)
                  : (m[o] = i);
            }
            o("got proxy server response: %o %o", p, m),
              a(),
              t({
                connect: { statusCode: h, statusText: g, headers: m },
                buffered: u,
              });
          })(c)
        : e.once("readable", s);
    }
    function a() {
      e.removeListener("end", c),
        e.removeListener("error", u),
        e.removeListener("readable", s);
    }
    function c() {
      a(),
        o("onend"),
        n(
          new Error("Proxy connection ended before receiving CONNECT response"),
        );
    }
    function u(e) {
      a(), o("onerror %o", e), n(e);
    }
    e.on("error", u), e.on("end", c), s();
  });
};
