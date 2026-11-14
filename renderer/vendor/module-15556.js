// vendor/module-15556.js — webpack module 15556
// params: (e, t, n) = (module, exports, require)
const r = n(87498 /* vendor/module-87498 */),
  o = n(4064 /* vendor/module-4064 */),
  i = n(59295 /* vendor/module-59295 */),
  a = n(44587 /* vendor/module-44587 */),
  s = r.__toESM(n(65566 /* vendor/module-65566 */)),
  l = r.__toESM(n(35e3)),
  c = {
    encode: (e) => JSON.stringify(e),
    decode: (e) => {
      if ("string" != typeof e)
        throw new Error(
          "jsonEncoder received binary data. JSON uses text frames. Use a binary encoder for binary data.",
        );
      return JSON.parse(e);
    },
  },
  u = { enabled: !1, closeMs: 0 },
  d = { enabled: !1, pongTimeoutMs: 1e3, intervalMs: 5e3 },
  p = (e) => (0 === e ? 0 : Math.min(1e3 * 2 ** e, 3e4)),
  f = (e, ...t) => ("function" == typeof e ? e(...t) : e);
var h = r.__toESM(o.require_defineProperty(), 1),
  m = class e extends Error {
    constructor(t) {
      super(t.message, { cause: t.cause }),
        (this.name = "TRPCWebSocketClosedError"),
        Object.setPrototypeOf(this, e.prototype);
    }
  },
  g = class {
    constructor(e, t) {
      (this.onTimeout = e),
        (this.timeoutMs = t),
        (0, h.default)(this, "timeout", void 0);
    }
    reset() {
      this.timeout &&
        (clearTimeout(this.timeout),
        (this.timeout = setTimeout(this.onTimeout, this.timeoutMs)));
    }
    start() {
      clearTimeout(this.timeout),
        (this.timeout = setTimeout(this.onTimeout, this.timeoutMs));
    }
    stop() {
      clearTimeout(this.timeout), (this.timeout = void 0);
    }
  };
function y() {
  let e, t;
  return {
    promise: new Promise((n, r) => {
      (e = n), (t = r);
    }),
    resolve: e,
    reject: t,
  };
}
var v = r.__toESM(o.require_defineProperty(), 1),
  b = class {
    constructor() {
      (0, v.default)(this, "outgoingRequests", new Array()),
        (0, v.default)(this, "pendingRequests", {});
    }
    register(e, t) {
      const { promise: n, resolve: r } = y();
      return (
        this.outgoingRequests.push({
          id: String(e.id),
          message: e,
          end: n,
          callbacks: {
            next: t.next,
            complete: () => {
              t.complete(), r();
            },
            error: (e) => {
              t.error(e), r();
            },
          },
        }),
        () => {
          this.delete(e.id), t.complete(), r();
        }
      );
    }
    delete(e) {
      null !== e &&
        ((this.outgoingRequests = this.outgoingRequests.filter(
          ({ id: t }) => t !== String(e),
        )),
        delete this.pendingRequests[String(e)]);
    }
    flush() {
      const e = this.outgoingRequests;
      this.outgoingRequests = [];
      for (const t of e) this.pendingRequests[t.id] = t;
      return e;
    }
    getPendingRequests() {
      return Object.values(this.pendingRequests);
    }
    getPendingRequest(e) {
      return null === e ? null : this.pendingRequests[String(e)];
    }
    getOutgoingRequests() {
      return this.outgoingRequests;
    }
    getRequests() {
      return [
        ...this.getOutgoingRequests().map((e) => ({
          state: "outgoing",
          message: e.message,
          end: e.end,
          callbacks: e.callbacks,
        })),
        ...this.getPendingRequests().map((e) => ({
          state: "pending",
          message: e.message,
          end: e.end,
          callbacks: e.callbacks,
        })),
      ];
    }
    hasPendingRequests() {
      return this.getPendingRequests().length > 0;
    }
    hasPendingSubscriptions() {
      return this.getPendingRequests().some(
        (e) => "subscription" === e.message.method,
      );
    }
    hasOutgoingRequests() {
      return this.outgoingRequests.length > 0;
    }
  },
  S = r.__toESM(o.require_defineProperty(), 1);
function _(e, { intervalMs: t, pongTimeoutMs: n }) {
  let r, o;
  function i() {
    r = setTimeout(() => {
      e.send("PING"),
        (o = setTimeout(() => {
          e.close();
        }, n));
    }, t);
  }
  e.addEventListener("open", i),
    e.addEventListener("message", ({ data: e }) => {
      clearTimeout(r),
        i(),
        "PONG" === e && (clearTimeout(o), clearTimeout(r), i());
    }),
    e.addEventListener("close", () => {
      clearTimeout(r), clearTimeout(o);
    });
}
var x = class e {
  constructor(t) {
    var n;
    if (
      ((0, S.default)(this, "id", ++e.connectCount),
      (0, S.default)(this, "WebSocketPonyfill", void 0),
      (0, S.default)(this, "urlOptions", void 0),
      (0, S.default)(this, "keepAliveOpts", void 0),
      (0, S.default)(this, "encoder", void 0),
      (0, S.default)(this, "wsObservable", (0, s.behaviorSubject)(null)),
      (0, S.default)(this, "openPromise", null),
      (this.WebSocketPonyfill =
        null !== (n = t.WebSocketPonyfill) && void 0 !== n ? n : WebSocket),
      !this.WebSocketPonyfill)
    )
      throw new Error(
        "No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill",
      );
    (this.urlOptions = t.urlOptions),
      (this.keepAliveOpts = t.keepAlive),
      (this.encoder = t.encoder);
  }
  get ws() {
    return this.wsObservable.get();
  }
  set ws(e) {
    this.wsObservable.next(e);
  }
  isOpen() {
    return (
      !!this.ws &&
      this.ws.readyState === this.WebSocketPonyfill.OPEN &&
      !this.openPromise
    );
  }
  isClosed() {
    return (
      !!this.ws &&
      (this.ws.readyState === this.WebSocketPonyfill.CLOSING ||
        this.ws.readyState === this.WebSocketPonyfill.CLOSED)
    );
  }
  async open() {
    var t = this;
    if (t.openPromise) return t.openPromise;
    t.id = ++e.connectCount;
    const n = (async function (e) {
      const t = await f(e.url);
      if (!e.connectionParams) return t;
      const n = t.includes("?") ? "&" : "?";
      return t + `${n}connectionParams=1`;
    })(t.urlOptions).then((e) => new t.WebSocketPonyfill(e));
    t.openPromise = n.then(async (e) => {
      (t.ws = e),
        (e.binaryType = "arraybuffer"),
        e.addEventListener("message", function ({ data: e }) {
          "PING" === e && this.send("PONG");
        }),
        t.keepAliveOpts.enabled && _(e, t.keepAliveOpts),
        e.addEventListener("close", () => {
          t.ws === e && (t.ws = null);
        }),
        await (function (e) {
          const { promise: t, resolve: n, reject: r } = y();
          return (
            e.addEventListener("open", () => {
              e.removeEventListener("error", r), n();
            }),
            e.addEventListener("error", r),
            t
          );
        })(e),
        t.urlOptions.connectionParams &&
          e.send(
            await (async function (e, t) {
              const n = {
                method: "connectionParams",
                data: await f(e),
              };
              return t.encode(n);
            })(t.urlOptions.connectionParams, t.encoder),
          );
    });
    try {
      await t.openPromise;
    } finally {
      t.openPromise = null;
    }
  }
  async close() {
    try {
      await this.openPromise;
    } finally {
      var e;
      null === (e = this.ws) || void 0 === e || e.close();
    }
  }
};
(0, S.default)(x, "connectCount", 0);
var w = r.__toESM(o.require_defineProperty(), 1),
  E = r.__toESM(o.require_objectSpread2(), 1),
  T = class {
    constructor(e) {
      var t, n;
      (0, w.default)(this, "connectionState", void 0),
        (0, w.default)(this, "allowReconnect", !1),
        (0, w.default)(this, "requestManager", new b()),
        (0, w.default)(this, "activeConnection", void 0),
        (0, w.default)(this, "reconnectRetryDelay", void 0),
        (0, w.default)(this, "inactivityTimeout", void 0),
        (0, w.default)(this, "callbacks", void 0),
        (0, w.default)(this, "lazyMode", void 0),
        (0, w.default)(this, "encoder", void 0),
        (0, w.default)(this, "reconnecting", null),
        (this.encoder =
          null !== (t = e.experimental_encoder) && void 0 !== t ? t : c),
        (this.callbacks = {
          onOpen: e.onOpen,
          onClose: e.onClose,
          onError: e.onError,
        });
      const r = (0, E.default)((0, E.default)({}, u), e.lazy);
      (this.inactivityTimeout = new g(() => {
        this.requestManager.hasOutgoingRequests() ||
        this.requestManager.hasPendingRequests()
          ? this.inactivityTimeout.reset()
          : this.close().catch(() => null);
      }, r.closeMs)),
        (this.activeConnection = new x({
          WebSocketPonyfill: e.WebSocket,
          urlOptions: e,
          keepAlive: (0, E.default)((0, E.default)({}, d), e.keepAlive),
          encoder: this.encoder,
        })),
        this.activeConnection.wsObservable.subscribe({
          next: (e) => {
            e && this.setupWebSocketListeners(e);
          },
        }),
        (this.reconnectRetryDelay =
          null !== (n = e.retryDelayMs) && void 0 !== n ? n : p),
        (this.lazyMode = r.enabled),
        (this.connectionState = (0, s.behaviorSubject)({
          type: "state",
          state: r.enabled ? "idle" : "connecting",
          error: null,
        })),
        this.lazyMode || this.open().catch(() => null);
    }
    async open() {
      var e = this;
      (e.allowReconnect = !0),
        "idle" === e.connectionState.get().state &&
          e.connectionState.next({
            type: "state",
            state: "connecting",
            error: null,
          });
      try {
        await e.activeConnection.open();
      } catch (t) {
        return (
          e.reconnect(new m({ message: "Initialization error", cause: t })),
          e.reconnecting
        );
      }
    }
    async close() {
      var e = this;
      (e.allowReconnect = !1), e.inactivityTimeout.stop();
      const t = [];
      for (const n of e.requestManager.getRequests())
        "subscription" === n.message.method
          ? n.callbacks.complete()
          : "outgoing" === n.state
            ? n.callbacks.error(
                i.TRPCClientError.from(
                  new m({
                    message: "Closed before connection was established",
                  }),
                ),
              )
            : t.push(n.end);
      await Promise.all(t).catch(() => null),
        await e.activeConnection.close().catch(() => null),
        e.connectionState.next({
          type: "state",
          state: "idle",
          error: null,
        });
    }
    request({
      op: { id: e, type: t, path: n, input: r, signal: o },
      transformer: a,
      lastEventId: c,
    }) {
      return (0, s.observable)((s) => {
        const u = this.batchSend(
          {
            id: e,
            method: t,
            params: {
              input: a.input.serialize(r),
              path: n,
              lastEventId: c,
            },
          },
          (0, E.default)(
            (0, E.default)({}, s),
            {},
            {
              next(e) {
                const t = (0, l.transformResult)(e, a.output);
                t.ok
                  ? s.next({ result: t.result })
                  : s.error(i.TRPCClientError.from(t.error));
              },
            },
          ),
        );
        return () => {
          u(),
            "subscription" === t &&
              this.activeConnection.isOpen() &&
              this.send({ id: e, method: "subscription.stop" }),
            null == o || o.removeEventListener("abort", u);
        };
      });
    }
    get connection() {
      return (e = this.activeConnection).isOpen()
        ? { id: e.id, state: "open", ws: e.ws }
        : e.isClosed()
          ? { id: e.id, state: "closed", ws: e.ws }
          : e.ws
            ? { id: e.id, state: "connecting", ws: e.ws }
            : null;
      var e;
    }
    reconnect(e) {
      var t = this;
      if (
        (this.connectionState.next({
          type: "state",
          state: "connecting",
          error: i.TRPCClientError.from(e),
        }),
        this.reconnecting)
      )
        return;
      const n = async (e) => {
        try {
          await (0, l.sleep)(t.reconnectRetryDelay(e)),
            t.allowReconnect &&
              (await t.activeConnection.close(),
              await t.activeConnection.open(),
              t.requestManager.hasPendingRequests() &&
                t.send(
                  t.requestManager
                    .getPendingRequests()
                    .map(({ message: e }) => e),
                )),
            (t.reconnecting = null);
        } catch (t) {
          await n(e + 1);
        }
      };
      this.reconnecting = n(0);
    }
    setupWebSocketListeners(e) {
      var t = this;
      const n = (e) => {
        const t = this.requestManager.getPendingRequests();
        for (const { message: n, callbacks: r } of t)
          "subscription" !== n.method &&
            (r.error(
              i.TRPCClientError.from(
                null != e
                  ? e
                  : new m({ message: "WebSocket closed", cause: e }),
              ),
            ),
            this.requestManager.delete(n.id));
      };
      e.addEventListener("open", () => {
        (0, l.run)(async () => {
          var e, n;
          t.lazyMode && t.inactivityTimeout.start(),
            null === (e = (n = t.callbacks).onOpen) ||
              void 0 === e ||
              e.call(n),
            t.connectionState.next({
              type: "state",
              state: "pending",
              error: null,
            });
        }).catch((t) => {
          e.close(3e3), n(t);
        });
      }),
        e.addEventListener("message", ({ data: e }) => {
          if ((this.inactivityTimeout.reset(), ["PING", "PONG"].includes(e)))
            return;
          const t = this.encoder.decode(e);
          "method" in t
            ? this.handleIncomingRequest(t)
            : this.handleResponseMessage(t);
        }),
        e.addEventListener("close", (e) => {
          var t, r;
          n(e),
            null === (t = (r = this.callbacks).onClose) ||
              void 0 === t ||
              t.call(r, e),
            (this.lazyMode && !this.requestManager.hasPendingSubscriptions()) ||
              this.reconnect(new m({ message: "WebSocket closed", cause: e }));
        }),
        e.addEventListener("error", (e) => {
          var t, r;
          n(e),
            null === (t = (r = this.callbacks).onError) ||
              void 0 === t ||
              t.call(r, e),
            this.reconnect(new m({ message: "WebSocket closed", cause: e }));
        });
    }
    handleResponseMessage(e) {
      const t = this.requestManager.getPendingRequest(e.id);
      if (!t) return;
      t.callbacks.next(e);
      let n = !0;
      "result" in e &&
        "subscription" === t.message.method &&
        ("data" === e.result.type &&
          (t.message.params.lastEventId = e.result.id),
        "stopped" !== e.result.type && (n = !1)),
        n && (t.callbacks.complete(), this.requestManager.delete(e.id));
    }
    handleIncomingRequest(e) {
      "reconnect" === e.method &&
        this.reconnect(new m({ message: "Server requested reconnect" }));
    }
    send(e) {
      if (!this.activeConnection.isOpen())
        throw new Error("Active connection is not open");
      const t = e instanceof Array ? e : [e];
      this.activeConnection.ws.send(
        this.encoder.encode(1 === t.length ? t[0] : t),
      );
    }
    batchSend(e, t) {
      var n = this;
      return (
        this.inactivityTimeout.reset(),
        (0, l.run)(async () => {
          n.activeConnection.isOpen() || (await n.open()),
            await (0, l.sleep)(0),
            n.requestManager.hasOutgoingRequests() &&
              n.send(n.requestManager.flush().map(({ message: e }) => e));
        }).catch((n) => {
          this.requestManager.delete(e.id), t.error(i.TRPCClientError.from(n));
        }),
        this.requestManager.register(e, t)
      );
    }
  };
function k(e) {
  return new T(e);
}
function C(e) {
  const { client: t } = e,
    n = a.getTransformer(e.transformer);
  return () =>
    ({ op: e }) =>
      (0, s.observable)((r) => {
        const o =
            "subscription" === e.type
              ? t.connectionState.subscribe({
                  next(t) {
                    r.next({ result: t, context: e.context });
                  },
                })
              : null,
          i = t.request({ op: e, transformer: n }).subscribe(r);
        return () => {
          i.unsubscribe(), null == o || o.unsubscribe();
        };
      });
}
Object.defineProperty(t, "createWSClient", {
  enumerable: !0,
  get: function () {
    return k;
  },
}),
  Object.defineProperty(t, "jsonEncoder", {
    enumerable: !0,
    get: function () {
      return c;
    },
  }),
  Object.defineProperty(t, "resultOf", {
    enumerable: !0,
    get: function () {
      return f;
    },
  }),
  Object.defineProperty(t, "wsLink", {
    enumerable: !0,
    get: function () {
      return C;
    },
  });
