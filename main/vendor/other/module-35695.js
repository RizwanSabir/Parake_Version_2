// vendor/other/module-35695.js — webpack module 35695
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(24434 /* external/events */),
  o = n(58611 /* external/http */),
  { Duplex: i } = n(2203 /* external/stream */),
  { createHash: s } = n(76982 /* external/crypto */),
  a = n(32009 /* vendor/other/module-32009 */),
  c = n(36978 /* vendor/other/module-36978 */),
  u = n(33842 /* vendor/other/module-33842 */),
  l = n(27051 /* vendor/other/module-27051 */),
  {
    CLOSE_TIMEOUT: d,
    GUID: p,
    kWebSocket: f,
  } = n(74033 /* vendor/other/module-74033 */),
  h = /^[+/0-9A-Za-z]{22}==$/;
function g(e) {
  (e._state = 2), e.emit("close");
}
function m() {
  this.destroy();
}
function _(e, t, n, r) {
  (n = n || o.STATUS_CODES[t]),
    (r = {
      Connection: "close",
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(n),
      ...r,
    }),
    e.once("finish", e.destroy),
    e.end(
      `HTTP/1.1 ${t} ${o.STATUS_CODES[t]}\r\n` +
        Object.keys(r)
          .map((e) => `${e}: ${r[e]}`)
          .join("\r\n") +
        "\r\n\r\n" +
        n,
    );
}
function S(e, t, n, r, o, i) {
  if (e.listenerCount("wsClientError")) {
    const r = new Error(o);
    Error.captureStackTrace(r, S), e.emit("wsClientError", r, n, t);
  } else _(n, r, o, i);
}
e.exports = class extends r {
  constructor(e, t) {
    if (
      (super(),
      (null ==
        (e = {
          allowSynchronousEvents: !0,
          autoPong: !0,
          maxBufferedChunks: 262144,
          maxFragments: 16384,
          maxPayload: 104857600,
          skipUTF8Validation: !1,
          perMessageDeflate: !1,
          handleProtocols: null,
          clientTracking: !0,
          closeTimeout: d,
          verifyClient: null,
          noServer: !1,
          backlog: null,
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: l,
          ...e,
        }).port &&
        !e.server &&
        !e.noServer) ||
        (null != e.port && (e.server || e.noServer)) ||
        (e.server && e.noServer))
    )
      throw new TypeError(
        'One and only one of the "port", "server", or "noServer" options must be specified',
      );
    if (
      (null != e.port
        ? ((this._server = o.createServer((e, t) => {
            const n = o.STATUS_CODES[426];
            t.writeHead(426, {
              "Content-Length": n.length,
              "Content-Type": "text/plain",
            }),
              t.end(n);
          })),
          this._server.listen(e.port, e.host, e.backlog, t))
        : e.server && (this._server = e.server),
      this._server)
    ) {
      const e = this.emit.bind(this, "connection");
      this._removeListeners = (function (e, t) {
        for (const n of Object.keys(t)) e.on(n, t[n]);
        return function () {
          for (const n of Object.keys(t)) e.removeListener(n, t[n]);
        };
      })(this._server, {
        listening: this.emit.bind(this, "listening"),
        error: this.emit.bind(this, "error"),
        upgrade: (t, n, r) => {
          this.handleUpgrade(t, n, r, e);
        },
      });
    }
    !0 === e.perMessageDeflate && (e.perMessageDeflate = {}),
      e.clientTracking &&
        ((this.clients = new Set()), (this._shouldEmitClose = !1)),
      (this.options = e),
      (this._state = 0);
  }
  address() {
    if (this.options.noServer)
      throw new Error('The server is operating in "noServer" mode');
    return this._server ? this._server.address() : null;
  }
  close(e) {
    if (2 === this._state)
      return (
        e &&
          this.once("close", () => {
            e(new Error("The server is not running"));
          }),
        void process.nextTick(g, this)
      );
    if ((e && this.once("close", e), 1 !== this._state))
      if (((this._state = 1), this.options.noServer || this.options.server))
        this._server &&
          (this._removeListeners(),
          (this._removeListeners = this._server = null)),
          this.clients && this.clients.size
            ? (this._shouldEmitClose = !0)
            : process.nextTick(g, this);
      else {
        const e = this._server;
        this._removeListeners(),
          (this._removeListeners = this._server = null),
          e.close(() => {
            g(this);
          });
      }
  }
  shouldHandle(e) {
    if (this.options.path) {
      const t = e.url.indexOf("?");
      if ((-1 !== t ? e.url.slice(0, t) : e.url) !== this.options.path)
        return !1;
    }
    return !0;
  }
  handleUpgrade(e, t, n, r) {
    t.on("error", m);
    const o = e.headers["sec-websocket-key"],
      i = e.headers.upgrade,
      s = +e.headers["sec-websocket-version"];
    if ("GET" !== e.method)
      return void S(this, e, t, 405, "Invalid HTTP method");
    if (void 0 === i || "websocket" !== i.toLowerCase())
      return void S(this, e, t, 400, "Invalid Upgrade header");
    if (void 0 === o || !h.test(o))
      return void S(
        this,
        e,
        t,
        400,
        "Missing or invalid Sec-WebSocket-Key header",
      );
    if (13 !== s && 8 !== s)
      return void S(
        this,
        e,
        t,
        400,
        "Missing or invalid Sec-WebSocket-Version header",
        { "Sec-WebSocket-Version": "13, 8" },
      );
    if (!this.shouldHandle(e)) return void _(t, 400);
    const l = e.headers["sec-websocket-protocol"];
    let d = new Set();
    if (void 0 !== l)
      try {
        d = u.parse(l);
      } catch (n) {
        return void S(this, e, t, 400, "Invalid Sec-WebSocket-Protocol header");
      }
    const p = e.headers["sec-websocket-extensions"],
      f = {};
    if (this.options.perMessageDeflate && void 0 !== p) {
      const n = new c({
        ...this.options.perMessageDeflate,
        isServer: !0,
        maxPayload: this.options.maxPayload,
      });
      try {
        const e = a.parse(p);
        e[c.extensionName] &&
          (n.accept(e[c.extensionName]), (f[c.extensionName] = n));
      } catch (n) {
        return void S(
          this,
          e,
          t,
          400,
          "Invalid or unacceptable Sec-WebSocket-Extensions header",
        );
      }
    }
    if (this.options.verifyClient) {
      const i = {
        origin: e.headers[8 === s ? "sec-websocket-origin" : "origin"],
        secure: !(!e.socket.authorized && !e.socket.encrypted),
        req: e,
      };
      if (2 === this.options.verifyClient.length)
        return void this.options.verifyClient(i, (i, s, a, c) => {
          if (!i) return _(t, s || 401, a, c);
          this.completeUpgrade(f, o, d, e, t, n, r);
        });
      if (!this.options.verifyClient(i)) return _(t, 401);
    }
    this.completeUpgrade(f, o, d, e, t, n, r);
  }
  completeUpgrade(e, t, n, r, o, i, u) {
    if (!o.readable || !o.writable) return o.destroy();
    if (o[f])
      throw new Error(
        "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration",
      );
    if (this._state > 0) return _(o, 503);
    const l = [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade: websocket",
        "Connection: Upgrade",
        `Sec-WebSocket-Accept: ${s("sha1")
          .update(t + p)
          .digest("base64")}`,
      ],
      d = new this.options.WebSocket(null, void 0, this.options);
    if (n.size) {
      const e = this.options.handleProtocols
        ? this.options.handleProtocols(n, r)
        : n.values().next().value;
      e && (l.push(`Sec-WebSocket-Protocol: ${e}`), (d._protocol = e));
    }
    if (e[c.extensionName]) {
      const t = e[c.extensionName].params,
        n = a.format({ [c.extensionName]: [t] });
      l.push(`Sec-WebSocket-Extensions: ${n}`), (d._extensions = e);
    }
    this.emit("headers", l, r),
      o.write(l.concat("\r\n").join("\r\n")),
      o.removeListener("error", m),
      d.setSocket(o, i, {
        allowSynchronousEvents: this.options.allowSynchronousEvents,
        maxBufferedChunks: this.options.maxBufferedChunks,
        maxFragments: this.options.maxFragments,
        maxPayload: this.options.maxPayload,
        skipUTF8Validation: this.options.skipUTF8Validation,
      }),
      this.clients &&
        (this.clients.add(d),
        d.on("close", () => {
          this.clients.delete(d),
            this._shouldEmitClose &&
              !this.clients.size &&
              process.nextTick(g, this);
        })),
      u(d, r);
  }
};
