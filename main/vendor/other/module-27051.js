// vendor/other/module-27051.js — webpack module 27051
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
const r = n(24434 /* external/events */),
  o = n(65692 /* external/https */),
  i = n(58611 /* external/http */),
  s = n(69278 /* external/net */),
  a = n(64756 /* external/tls */),
  { randomBytes: c, createHash: u } = n(76982 /* external/crypto */),
  { Duplex: l, Readable: d } = n(2203 /* external/stream */),
  { URL: p } = n(87016 /* external/url */),
  f = n(36978 /* vendor/other/module-36978 */),
  h = n(1611 /* vendor/other/module-1611 */),
  g = n(71031 /* vendor/other/module-71031 */),
  { isBlob: m } = n(3977 /* vendor/other/module-3977 */),
  {
    BINARY_TYPES: _,
    CLOSE_TIMEOUT: S,
    EMPTY_BUFFER: E,
    GUID: y,
    kForOnEventAttribute: T,
    kListener: b,
    kStatusCode: I,
    kWebSocket: v,
    NOOP: A,
  } = n(74033 /* vendor/other/module-74033 */),
  {
    EventTarget: { addEventListener: N, removeEventListener: R },
  } = n(24400 /* vendor/other/module-24400 */),
  { format: C, parse: O } = n(32009 /* vendor/other/module-32009 */),
  { toBuffer: w } = n(77213 /* vendor/other/module-77213 */),
  k = Symbol("kAborted"),
  P = [8, 13],
  L = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"],
  x = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
class M extends r {
  constructor(e, t, n) {
    super(),
      (this._binaryType = _[0]),
      (this._closeCode = 1006),
      (this._closeFrameReceived = !1),
      (this._closeFrameSent = !1),
      (this._closeMessage = E),
      (this._closeTimer = null),
      (this._errorEmitted = !1),
      (this._extensions = {}),
      (this._paused = !1),
      (this._protocol = ""),
      (this._readyState = M.CONNECTING),
      (this._receiver = null),
      (this._sender = null),
      (this._socket = null),
      null !== e
        ? ((this._bufferedAmount = 0),
          (this._isServer = !1),
          (this._redirects = 0),
          void 0 === t
            ? (t = [])
            : Array.isArray(t) ||
              ("object" == typeof t && null !== t
                ? ((n = t), (t = []))
                : (t = [t])),
          D(this, e, t, n))
        : ((this._autoPong = n.autoPong),
          (this._closeTimeout = n.closeTimeout),
          (this._isServer = !0));
  }
  get binaryType() {
    return this._binaryType;
  }
  set binaryType(e) {
    _.includes(e) &&
      ((this._binaryType = e),
      this._receiver && (this._receiver._binaryType = e));
  }
  get bufferedAmount() {
    return this._socket
      ? this._socket._writableState.length + this._sender._bufferedBytes
      : this._bufferedAmount;
  }
  get extensions() {
    return Object.keys(this._extensions).join();
  }
  get isPaused() {
    return this._paused;
  }
  get onclose() {
    return null;
  }
  get onerror() {
    return null;
  }
  get onopen() {
    return null;
  }
  get onmessage() {
    return null;
  }
  get protocol() {
    return this._protocol;
  }
  get readyState() {
    return this._readyState;
  }
  get url() {
    return this._url;
  }
  setSocket(e, t, n) {
    const r = new h({
        allowSynchronousEvents: n.allowSynchronousEvents,
        binaryType: this.binaryType,
        extensions: this._extensions,
        isServer: this._isServer,
        maxBufferedChunks: n.maxBufferedChunks,
        maxFragments: n.maxFragments,
        maxPayload: n.maxPayload,
        skipUTF8Validation: n.skipUTF8Validation,
      }),
      o = new g(e, this._extensions, n.generateMask);
    (this._receiver = r),
      (this._sender = o),
      (this._socket = e),
      (r[v] = this),
      (o[v] = this),
      (e[v] = this),
      r.on("conclude", H),
      r.on("drain", W),
      r.on("error", V),
      r.on("message", Y),
      r.on("ping", q),
      r.on("pong", K),
      (o.onerror = Z),
      e.setTimeout && e.setTimeout(0),
      e.setNoDelay && e.setNoDelay(),
      t.length > 0 && e.unshift(t),
      e.on("close", J),
      e.on("data", Q),
      e.on("end", ee),
      e.on("error", te),
      (this._readyState = M.OPEN),
      this.emit("open");
  }
  emitClose() {
    if (!this._socket)
      return (
        (this._readyState = M.CLOSED),
        void this.emit("close", this._closeCode, this._closeMessage)
      );
    this._extensions[f.extensionName] &&
      this._extensions[f.extensionName].cleanup(),
      this._receiver.removeAllListeners(),
      (this._readyState = M.CLOSED),
      this.emit("close", this._closeCode, this._closeMessage);
  }
  close(e, t) {
    if (this.readyState !== M.CLOSED) {
      if (this.readyState === M.CONNECTING) {
        const e = "WebSocket was closed before the connection was established";
        return void F(this, this._req, e);
      }
      this.readyState !== M.CLOSING
        ? ((this._readyState = M.CLOSING),
          this._sender.close(e, t, !this._isServer, (e) => {
            e ||
              ((this._closeFrameSent = !0),
              (this._closeFrameReceived ||
                this._receiver._writableState.errorEmitted) &&
                this._socket.end());
          }),
          z(this))
        : this._closeFrameSent &&
          (this._closeFrameReceived ||
            this._receiver._writableState.errorEmitted) &&
          this._socket.end();
    }
  }
  pause() {
    this.readyState !== M.CONNECTING &&
      this.readyState !== M.CLOSED &&
      ((this._paused = !0), this._socket.pause());
  }
  ping(e, t, n) {
    if (this.readyState === M.CONNECTING)
      throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
    "function" == typeof e
      ? ((n = e), (e = t = void 0))
      : "function" == typeof t && ((n = t), (t = void 0)),
      "number" == typeof e && (e = e.toString()),
      this.readyState === M.OPEN
        ? (void 0 === t && (t = !this._isServer),
          this._sender.ping(e || E, t, n))
        : j(this, e, n);
  }
  pong(e, t, n) {
    if (this.readyState === M.CONNECTING)
      throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
    "function" == typeof e
      ? ((n = e), (e = t = void 0))
      : "function" == typeof t && ((n = t), (t = void 0)),
      "number" == typeof e && (e = e.toString()),
      this.readyState === M.OPEN
        ? (void 0 === t && (t = !this._isServer),
          this._sender.pong(e || E, t, n))
        : j(this, e, n);
  }
  resume() {
    this.readyState !== M.CONNECTING &&
      this.readyState !== M.CLOSED &&
      ((this._paused = !1),
      this._receiver._writableState.needDrain || this._socket.resume());
  }
  send(e, t, n) {
    if (this.readyState === M.CONNECTING)
      throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
    if (
      ("function" == typeof t && ((n = t), (t = {})),
      "number" == typeof e && (e = e.toString()),
      this.readyState !== M.OPEN)
    )
      return void j(this, e, n);
    const r = {
      binary: "string" != typeof e,
      mask: !this._isServer,
      compress: !0,
      fin: !0,
      ...t,
    };
    this._extensions[f.extensionName] || (r.compress = !1),
      this._sender.send(e || E, r, n);
  }
  terminate() {
    if (this.readyState !== M.CLOSED) {
      if (this.readyState === M.CONNECTING) {
        const e = "WebSocket was closed before the connection was established";
        return void F(this, this._req, e);
      }
      this._socket && ((this._readyState = M.CLOSING), this._socket.destroy());
    }
  }
}
function D(e, t, n, r) {
  const s = {
    allowSynchronousEvents: !0,
    autoPong: !0,
    closeTimeout: S,
    protocolVersion: P[1],
    maxBufferedChunks: 262144,
    maxFragments: 16384,
    maxPayload: 104857600,
    skipUTF8Validation: !1,
    perMessageDeflate: !0,
    followRedirects: !1,
    maxRedirects: 10,
    ...r,
    socketPath: void 0,
    hostname: void 0,
    protocol: void 0,
    timeout: void 0,
    method: "GET",
    host: void 0,
    path: void 0,
    port: void 0,
  };
  if (
    ((e._autoPong = s.autoPong),
    (e._closeTimeout = s.closeTimeout),
    !P.includes(s.protocolVersion))
  )
    throw new RangeError(
      `Unsupported protocol version: ${s.protocolVersion} (supported versions: ${P.join(", ")})`,
    );
  let a;
  if (t instanceof p) a = t;
  else
    try {
      a = new p(t);
    } catch {
      throw new SyntaxError(`Invalid URL: ${t}`);
    }
  "http:" === a.protocol
    ? (a.protocol = "ws:")
    : "https:" === a.protocol && (a.protocol = "wss:"),
    (e._url = a.href);
  const l = "wss:" === a.protocol,
    d = "ws+unix:" === a.protocol;
  let h;
  if (
    ("ws:" === a.protocol || l || d
      ? d && !a.pathname
        ? (h = "The URL's pathname is empty")
        : a.hash && (h = "The URL contains a fragment identifier")
      : (h =
          'The URL\'s protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"'),
    h)
  ) {
    const t = new SyntaxError(h);
    if (0 === e._redirects) throw t;
    return void U(e, t);
  }
  const g = l ? 443 : 80,
    m = c(16).toString("base64"),
    _ = l ? o.request : i.request,
    E = new Set();
  let T, b;
  if (
    ((s.createConnection = s.createConnection || (l ? G : B)),
    (s.defaultPort = s.defaultPort || g),
    (s.port = a.port || g),
    (s.host = a.hostname.startsWith("[")
      ? a.hostname.slice(1, -1)
      : a.hostname),
    (s.headers = {
      ...s.headers,
      "Sec-WebSocket-Version": s.protocolVersion,
      "Sec-WebSocket-Key": m,
      Connection: "Upgrade",
      Upgrade: "websocket",
    }),
    (s.path = a.pathname + a.search),
    (s.timeout = s.handshakeTimeout),
    s.perMessageDeflate &&
      ((T = new f({
        ...s.perMessageDeflate,
        isServer: !1,
        maxPayload: s.maxPayload,
      })),
      (s.headers["Sec-WebSocket-Extensions"] = C({
        [f.extensionName]: T.offer(),
      }))),
    n.length)
  ) {
    for (const e of n) {
      if ("string" != typeof e || !x.test(e) || E.has(e))
        throw new SyntaxError(
          "An invalid or duplicated subprotocol was specified",
        );
      E.add(e);
    }
    s.headers["Sec-WebSocket-Protocol"] = n.join(",");
  }
  if (
    (s.origin &&
      (s.protocolVersion < 13
        ? (s.headers["Sec-WebSocket-Origin"] = s.origin)
        : (s.headers.Origin = s.origin)),
    (a.username || a.password) && (s.auth = `${a.username}:${a.password}`),
    d)
  ) {
    const e = s.path.split(":");
    (s.socketPath = e[0]), (s.path = e[1]);
  }
  if (s.followRedirects) {
    if (0 === e._redirects) {
      (e._originalIpc = d),
        (e._originalSecure = l),
        (e._originalHostOrSocketPath = d ? s.socketPath : a.host);
      const t = r && r.headers;
      if (((r = { ...r, headers: {} }), t))
        for (const [e, n] of Object.entries(t)) r.headers[e.toLowerCase()] = n;
    } else if (0 === e.listenerCount("redirect")) {
      const t = d
        ? !!e._originalIpc && s.socketPath === e._originalHostOrSocketPath
        : !e._originalIpc && a.host === e._originalHostOrSocketPath;
      (!t || (e._originalSecure && !l)) &&
        (delete s.headers.authorization,
        delete s.headers.cookie,
        t || delete s.headers.host,
        (s.auth = void 0));
    }
    s.auth &&
      !r.headers.authorization &&
      (r.headers.authorization =
        "Basic " + Buffer.from(s.auth).toString("base64")),
      (b = e._req = _(s)),
      e._redirects && e.emit("redirect", e.url, b);
  } else b = e._req = _(s);
  s.timeout &&
    b.on("timeout", () => {
      F(e, b, "Opening handshake has timed out");
    }),
    b.on("error", (t) => {
      null === b || b[k] || ((b = e._req = null), U(e, t));
    }),
    b.on("response", (o) => {
      const i = o.headers.location,
        a = o.statusCode;
      if (i && s.followRedirects && a >= 300 && a < 400) {
        if (++e._redirects > s.maxRedirects)
          return void F(e, b, "Maximum redirects exceeded");
        let o;
        b.abort();
        try {
          o = new p(i, t);
        } catch (t) {
          const n = new SyntaxError(`Invalid URL: ${i}`);
          return void U(e, n);
        }
        D(e, o, n, r);
      } else
        e.emit("unexpected-response", b, o) ||
          F(e, b, `Unexpected server response: ${o.statusCode}`);
    }),
    b.on("upgrade", (t, n, r) => {
      if ((e.emit("upgrade", t), e.readyState !== M.CONNECTING)) return;
      b = e._req = null;
      const o = t.headers.upgrade;
      if (void 0 === o || "websocket" !== o.toLowerCase())
        return void F(e, n, "Invalid Upgrade header");
      const i = u("sha1")
        .update(m + y)
        .digest("base64");
      if (t.headers["sec-websocket-accept"] !== i)
        return void F(e, n, "Invalid Sec-WebSocket-Accept header");
      const a = t.headers["sec-websocket-protocol"];
      let c;
      if (
        (void 0 !== a
          ? E.size
            ? E.has(a) || (c = "Server sent an invalid subprotocol")
            : (c = "Server sent a subprotocol but none was requested")
          : E.size && (c = "Server sent no subprotocol"),
        c)
      )
        return void F(e, n, c);
      a && (e._protocol = a);
      const l = t.headers["sec-websocket-extensions"];
      if (void 0 !== l) {
        if (!T)
          return void F(
            e,
            n,
            "Server sent a Sec-WebSocket-Extensions header but no extension was requested",
          );
        let t;
        try {
          t = O(l);
        } catch (t) {
          return void F(e, n, "Invalid Sec-WebSocket-Extensions header");
        }
        const r = Object.keys(t);
        if (1 !== r.length || r[0] !== f.extensionName)
          return void F(
            e,
            n,
            "Server indicated an extension that was not requested",
          );
        try {
          T.accept(t[f.extensionName]);
        } catch (t) {
          return void F(e, n, "Invalid Sec-WebSocket-Extensions header");
        }
        e._extensions[f.extensionName] = T;
      }
      e.setSocket(n, r, {
        allowSynchronousEvents: s.allowSynchronousEvents,
        generateMask: s.generateMask,
        maxBufferedChunks: s.maxBufferedChunks,
        maxFragments: s.maxFragments,
        maxPayload: s.maxPayload,
        skipUTF8Validation: s.skipUTF8Validation,
      });
    }),
    s.finishRequest ? s.finishRequest(b, e) : b.end();
}
function U(e, t) {
  (e._readyState = M.CLOSING),
    (e._errorEmitted = !0),
    e.emit("error", t),
    e.emitClose();
}
function B(e) {
  return (e.path = e.socketPath), s.connect(e);
}
function G(e) {
  return (
    (e.path = void 0),
    e.servername ||
      "" === e.servername ||
      (e.servername = s.isIP(e.host) ? "" : e.host),
    a.connect(e)
  );
}
function F(e, t, n) {
  e._readyState = M.CLOSING;
  const r = new Error(n);
  Error.captureStackTrace(r, F),
    t.setHeader
      ? ((t[k] = !0),
        t.abort(),
        t.socket && !t.socket.destroyed && t.socket.destroy(),
        process.nextTick(U, e, r))
      : (t.destroy(r),
        t.once("error", e.emit.bind(e, "error")),
        t.once("close", e.emitClose.bind(e)));
}
function j(e, t, n) {
  if (t) {
    const n = m(t) ? t.size : w(t).length;
    e._socket ? (e._sender._bufferedBytes += n) : (e._bufferedAmount += n);
  }
  if (n) {
    const t = new Error(
      `WebSocket is not open: readyState ${e.readyState} (${L[e.readyState]})`,
    );
    process.nextTick(n, t);
  }
}
function H(e, t) {
  const n = this[v];
  (n._closeFrameReceived = !0),
    (n._closeMessage = t),
    (n._closeCode = e),
    void 0 !== n._socket[v] &&
      (n._socket.removeListener("data", Q),
      process.nextTick(X, n._socket),
      1005 === e ? n.close() : n.close(e, t));
}
function W() {
  const e = this[v];
  e.isPaused || e._socket.resume();
}
function V(e) {
  const t = this[v];
  void 0 !== t._socket[v] &&
    (t._socket.removeListener("data", Q),
    process.nextTick(X, t._socket),
    t.close(e[I])),
    t._errorEmitted || ((t._errorEmitted = !0), t.emit("error", e));
}
function $() {
  this[v].emitClose();
}
function Y(e, t) {
  this[v].emit("message", e, t);
}
function q(e) {
  const t = this[v];
  t._autoPong && t.pong(e, !this._isServer, A), t.emit("ping", e);
}
function K(e) {
  this[v].emit("pong", e);
}
function X(e) {
  e.resume();
}
function Z(e) {
  const t = this[v];
  t.readyState !== M.CLOSED &&
    (t.readyState === M.OPEN && ((t._readyState = M.CLOSING), z(t)),
    this._socket.end(),
    t._errorEmitted || ((t._errorEmitted = !0), t.emit("error", e)));
}
function z(e) {
  e._closeTimer = setTimeout(
    e._socket.destroy.bind(e._socket),
    e._closeTimeout,
  );
}
function J() {
  const e = this[v];
  if (
    (this.removeListener("close", J),
    this.removeListener("data", Q),
    this.removeListener("end", ee),
    (e._readyState = M.CLOSING),
    !this._readableState.endEmitted &&
      !e._closeFrameReceived &&
      !e._receiver._writableState.errorEmitted &&
      0 !== this._readableState.length)
  ) {
    const t = this.read(this._readableState.length);
    e._receiver.write(t);
  }
  e._receiver.end(),
    (this[v] = void 0),
    clearTimeout(e._closeTimer),
    e._receiver._writableState.finished ||
    e._receiver._writableState.errorEmitted
      ? e.emitClose()
      : (e._receiver.on("error", $), e._receiver.on("finish", $));
}
function Q(e) {
  this[v]._receiver.write(e) || this.pause();
}
function ee() {
  const e = this[v];
  (e._readyState = M.CLOSING), e._receiver.end(), this.end();
}
function te() {
  const e = this[v];
  this.removeListener("error", te),
    this.on("error", A),
    e && ((e._readyState = M.CLOSING), this.destroy());
}
Object.defineProperty(M, "CONNECTING", {
  enumerable: !0,
  value: L.indexOf("CONNECTING"),
}),
  Object.defineProperty(M.prototype, "CONNECTING", {
    enumerable: !0,
    value: L.indexOf("CONNECTING"),
  }),
  Object.defineProperty(M, "OPEN", {
    enumerable: !0,
    value: L.indexOf("OPEN"),
  }),
  Object.defineProperty(M.prototype, "OPEN", {
    enumerable: !0,
    value: L.indexOf("OPEN"),
  }),
  Object.defineProperty(M, "CLOSING", {
    enumerable: !0,
    value: L.indexOf("CLOSING"),
  }),
  Object.defineProperty(M.prototype, "CLOSING", {
    enumerable: !0,
    value: L.indexOf("CLOSING"),
  }),
  Object.defineProperty(M, "CLOSED", {
    enumerable: !0,
    value: L.indexOf("CLOSED"),
  }),
  Object.defineProperty(M.prototype, "CLOSED", {
    enumerable: !0,
    value: L.indexOf("CLOSED"),
  }),
  [
    "binaryType",
    "bufferedAmount",
    "extensions",
    "isPaused",
    "protocol",
    "readyState",
    "url",
  ].forEach((e) => {
    Object.defineProperty(M.prototype, e, { enumerable: !0 });
  }),
  ["open", "error", "close", "message"].forEach((e) => {
    Object.defineProperty(M.prototype, `on${e}`, {
      enumerable: !0,
      get() {
        for (const t of this.listeners(e)) if (t[T]) return t[b];
        return null;
      },
      set(t) {
        for (const t of this.listeners(e))
          if (t[T]) {
            this.removeListener(e, t);
            break;
          }
        "function" == typeof t && this.addEventListener(e, t, { [T]: !0 });
      },
    });
  }),
  (M.prototype.addEventListener = N),
  (M.prototype.removeEventListener = R),
  (e.exports = M);
