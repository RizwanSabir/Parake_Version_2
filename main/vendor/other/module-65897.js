// vendor/other/module-65897.js — webpack module 65897
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(77030 /* external/node_net */),
  o = n(41692 /* external/node_tls */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(26748 /* vendor/other/module-26748 */),
  a = n(32459 /* vendor/other/module-32459 */);
function c(...e) {
  i.debug.log("[https-proxy-agent]", ...e);
}
class u extends s.Agent {
  constructor(e, t) {
    super(t),
      (this.options = {}),
      (this.proxy = "string" == typeof e ? new URL(e) : e),
      (this.proxyHeaders = t?.headers ?? {}),
      c("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
    const n = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
      r = this.proxy.port
        ? parseInt(this.proxy.port, 10)
        : "https:" === this.proxy.protocol
          ? 443
          : 80;
    this.connectOpts = {
      ALPNProtocols: ["http/1.1"],
      ...(t ? d(t, "headers") : null),
      host: n,
      port: r,
    };
  }
  async connect(e, t) {
    const { proxy: n } = this;
    if (!t.host) throw new TypeError('No "host" provided');
    let i;
    if ("https:" === n.protocol) {
      c("Creating `tls.Socket`: %o", this.connectOpts);
      const e = this.connectOpts.servername || this.connectOpts.host;
      i = o.connect({
        ...this.connectOpts,
        servername: e && r.isIP(e) ? void 0 : e,
      });
    } else
      c("Creating `net.Socket`: %o", this.connectOpts),
        (i = r.connect(this.connectOpts));
    const s =
        "function" == typeof this.proxyHeaders
          ? this.proxyHeaders()
          : { ...this.proxyHeaders },
      u = r.isIPv6(t.host) ? `[${t.host}]` : t.host;
    let p = `CONNECT ${u}:${t.port} HTTP/1.1\r\n`;
    if (n.username || n.password) {
      const e = `${decodeURIComponent(n.username)}:${decodeURIComponent(n.password)}`;
      s["Proxy-Authorization"] = `Basic ${Buffer.from(e).toString("base64")}`;
    }
    (s.Host = `${u}:${t.port}`),
      s["Proxy-Connection"] ||
        (s["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close");
    for (const e of Object.keys(s)) p += `${e}: ${s[e]}\r\n`;
    const f = a.parseProxyResponse(i);
    i.write(`${p}\r\n`);
    const { connect: h, buffered: g } = await f;
    if (
      (e.emit("proxyConnect", h),
      this.emit("proxyConnect", h, e),
      200 === h.statusCode)
    ) {
      if ((e.once("socket", l), t.secureEndpoint)) {
        c("Upgrading socket connection to TLS");
        const e = t.servername || t.host;
        return o.connect({
          ...d(t, "host", "path", "port"),
          socket: i,
          servername: r.isIP(e) ? void 0 : e,
        });
      }
      return i;
    }
    i.destroy();
    const m = new r.Socket({ writable: !1 });
    return (
      (m.readable = !0),
      e.once("socket", (e) => {
        c("Replaying proxy buffer for failed request"), e.push(g), e.push(null);
      }),
      m
    );
  }
}
function l(e) {
  e.resume();
}
function d(e, ...t) {
  const n = {};
  let r;
  for (r in e) t.includes(r) || (n[r] = e[r]);
  return n;
}
(u.protocols = ["http", "https"]), (t.HttpsProxyAgent = u);
