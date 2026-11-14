// vendor/other/module-19449.js — webpack module 19449
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(64673 /* vendor/other/module-64673 */),
  a = n(15280 /* vendor/other/module-15280 */),
  c = n(60261 /* vendor/other/module-60261 */),
  u = n(69828 /* vendor/other/module-69828 */),
  l = "@sentry/instrumentation-redis",
  d = "auto.db.otel.redis",
  p = Symbol("opentelemetry.instrumentation.redis.open_spans"),
  f = Symbol("opentelemetry.instrumentation.redis.multi_command_options");
function h(e, t) {
  t && e.setStatus({ code: o.SPAN_STATUS_ERROR, message: t.message }), e.end();
}
function g(e, t, n, r, o) {
  if (e)
    try {
      e(t, n, r, o);
    } catch {}
}
function m(e) {
  if ("string" == typeof e && e)
    try {
      const t = new URL(e);
      return (
        t.searchParams.delete("user_pwd"),
        (t.username = ""),
        (t.password = ""),
        t.href
      );
    } catch (e) {
      a.DEBUG_BUILD &&
        o.debug.error("failed to sanitize redis connection url", e);
    }
}
function _(e) {
  return {
    [i.DB_SYSTEM]: u.DB_SYSTEM_VALUE_REDIS,
    [i.NET_PEER_NAME]: e?.socket?.host,
    [i.NET_PEER_PORT]: e?.socket?.port,
    [u.ATTR_DB_CONNECTION_STRING]: m(e?.url),
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: d,
  };
}
const S = class e extends r.InstrumentationBase {
  constructor(e = {}) {
    super(l, o.SDK_VERSION, e);
  }
  init() {
    return [
      new r.InstrumentationNodeModuleDefinition(
        "redis",
        [">=2.6.0 <4"],
        (e) => (
          r.isWrapped(e.RedisClient.prototype.internal_send_command) &&
            this._unwrap(e.RedisClient.prototype, "internal_send_command"),
          this._wrap(
            e.RedisClient.prototype,
            "internal_send_command",
            this._getPatchInternalSendCommand(),
          ),
          e
        ),
        (e) => {
          void 0 !== e &&
            this._unwrap(e.RedisClient.prototype, "internal_send_command");
        },
      ),
    ];
  }
  _getPatchInternalSendCommand() {
    const t = this;
    return function (n) {
      return function (r) {
        if (1 !== arguments.length || "object" != typeof r)
          return n.apply(this, arguments);
        const a = {
          [i.DB_SYSTEM]: u.DB_SYSTEM_VALUE_REDIS,
          [i.DB_STATEMENT]: s.defaultDbStatementSerializer(r.command, r.args),
          [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: d,
        };
        this.connection_options &&
          ((a[i.NET_PEER_NAME] = this.connection_options.host),
          (a[i.NET_PEER_PORT] = this.connection_options.port)),
          this.address &&
            (a[u.ATTR_DB_CONNECTION_STRING] = `redis://${this.address}`);
        const c = o.startInactiveSpan({
            name: `${e.COMPONENT}-${r.command}`,
            kind: o.SPAN_KIND.CLIENT,
            attributes: a,
          }),
          l = arguments[0].callback;
        if (l) {
          const e = o.getActiveSpan();
          arguments[0].callback = function (n, i) {
            return (
              g(t.getConfig().responseHook, c, r.command, r.args, i),
              h(c, n),
              o.withActiveSpan(e ?? null, () => l.apply(this, arguments))
            );
          };
        }
        try {
          return n.apply(this, arguments);
        } catch (e) {
          throw (h(c, e), e);
        }
      };
    };
  }
};
S.COMPONENT = "redis";
let E = S;
const y = class e extends r.InstrumentationBase {
  constructor(e = {}) {
    super(l, o.SDK_VERSION, e);
  }
  init() {
    return [
      this._getInstrumentationNodeModuleDefinition("@redis/client"),
      this._getInstrumentationNodeModuleDefinition("@node-redis/client"),
    ];
  }
  _getInstrumentationNodeModuleDefinition(e) {
    const t = new c.InstrumentationNodeModuleFile(
        `${e}/dist/lib/commander.js`,
        ["^1.0.0"],
        (e, t) => {
          const n = e.transformCommandArguments;
          if (!n)
            return (
              a.DEBUG_BUILD &&
                o.debug.error(
                  "internal instrumentation error, missing transformCommandArguments function",
                ),
              e
            );
          const i = t?.startsWith("1.0.")
            ? "extendWithCommands"
            : "attachCommands";
          return (
            r.isWrapped(e?.[i]) && this._unwrap(e, i),
            this._wrap(e, i, this._getPatchExtendWithCommands(n)),
            e
          );
        },
        (e) => {
          r.isWrapped(e?.extendWithCommands) &&
            this._unwrap(e, "extendWithCommands"),
            r.isWrapped(e?.attachCommands) && this._unwrap(e, "attachCommands");
        },
      ),
      n = new c.InstrumentationNodeModuleFile(
        `${e}/dist/lib/client/multi-command.js`,
        ["^1.0.0", ">=5.0.0 <5.12.0"],
        (e) => {
          const t = e?.default?.prototype;
          return (
            r.isWrapped(t?.exec) && this._unwrap(t, "exec"),
            this._wrap(t, "exec", this._getPatchMultiCommandsExec()),
            r.isWrapped(t?.execAsPipeline) && this._unwrap(t, "execAsPipeline"),
            this._wrap(t, "execAsPipeline", this._getPatchMultiCommandsExec()),
            r.isWrapped(t?.addCommand) && this._unwrap(t, "addCommand"),
            this._wrap(
              t,
              "addCommand",
              this._getPatchMultiCommandsAddCommand(),
            ),
            e
          );
        },
        (e) => {
          const t = e?.default?.prototype;
          r.isWrapped(t?.exec) && this._unwrap(t, "exec"),
            r.isWrapped(t?.execAsPipeline) && this._unwrap(t, "execAsPipeline"),
            r.isWrapped(t?.addCommand) && this._unwrap(t, "addCommand");
        },
      ),
      i = new c.InstrumentationNodeModuleFile(
        `${e}/dist/lib/client/index.js`,
        ["^1.0.0", ">=5.0.0 <5.12.0"],
        (e) => {
          const t = e?.default?.prototype;
          return (
            t?.multi &&
              (r.isWrapped(t?.multi) && this._unwrap(t, "multi"),
              this._wrap(t, "multi", this._getPatchRedisClientMulti())),
            t?.MULTI &&
              (r.isWrapped(t?.MULTI) && this._unwrap(t, "MULTI"),
              this._wrap(t, "MULTI", this._getPatchRedisClientMulti())),
            r.isWrapped(t?.sendCommand) && this._unwrap(t, "sendCommand"),
            this._wrap(
              t,
              "sendCommand",
              this._getPatchRedisClientSendCommand(),
            ),
            r.isWrapped(t?.connect) && this._unwrap(t, "connect"),
            this._wrap(t, "connect", this._getPatchedClientConnect()),
            e
          );
        },
        (e) => {
          const t = e?.default?.prototype;
          r.isWrapped(t?.multi) && this._unwrap(t, "multi"),
            r.isWrapped(t?.MULTI) && this._unwrap(t, "MULTI"),
            r.isWrapped(t?.sendCommand) && this._unwrap(t, "sendCommand"),
            r.isWrapped(t?.connect) && this._unwrap(t, "connect");
        },
      );
    return new r.InstrumentationNodeModuleDefinition(
      e,
      ["^1.0.0", ">=5.0.0 <5.12.0"],
      (e) => e,
      () => {},
      [t, n, i],
    );
  }
  _getPatchExtendWithCommands(e) {
    const t = this;
    return function (n) {
      return function (r) {
        if ("RedisClient" !== r?.BaseClass?.name)
          return n.apply(this, arguments);
        const o = r.executor;
        return (
          (r.executor = function (n, r) {
            const i = e(n, r).args;
            return t._traceClientCommand(o, this, arguments, i);
          }),
          n.apply(this, arguments)
        );
      };
    };
  }
  _getPatchMultiCommandsExec() {
    const e = this;
    return function (t) {
      return function () {
        const n = t.apply(this, arguments);
        return "function" != typeof n?.then
          ? (a.DEBUG_BUILD &&
              o.debug.error(
                "non-promise result when patching exec/execAsPipeline",
              ),
            n)
          : n
              .then((t) => {
                const n = this[p];
                return e._endSpansWithRedisReplies(n, t), t;
              })
              .catch((t) => {
                const n = this[p];
                if (n) {
                  const r =
                    "MultiErrorReply" === t.constructor.name
                      ? t.replies
                      : new Array(n.length).fill(t);
                  e._endSpansWithRedisReplies(n, r);
                } else
                  a.DEBUG_BUILD &&
                    o.debug.error(
                      "cannot find open spans to end for multi/pipeline",
                    );
                return Promise.reject(t);
              });
      };
    };
  }
  _getPatchMultiCommandsAddCommand() {
    const e = this;
    return function (t) {
      return function (n) {
        return e._traceClientCommand(t, this, arguments, n);
      };
    };
  }
  _getPatchRedisClientMulti() {
    return function (e) {
      return function () {
        const t = e.apply(this, arguments);
        return (t[f] = this.options), t;
      };
    };
  }
  _getPatchRedisClientSendCommand() {
    const e = this;
    return function (t) {
      return function (n) {
        return e._traceClientCommand(t, this, arguments, n);
      };
    };
  }
  _getPatchedClientConnect() {
    return function (t) {
      return function () {
        const n = _(this.options),
          r = o.startInactiveSpan({
            name: `${e.COMPONENT}-connect`,
            kind: o.SPAN_KIND.CLIENT,
            attributes: n,
          });
        return o
          .withActiveSpan(r, () => t.apply(this))
          .then(
            (e) => (r.end(), e),
            (e) => (h(r, e), Promise.reject(e)),
          );
      };
    };
  }
  _traceClientCommand(t, n, r, a) {
    const c = n.options || n[f],
      u = a[0],
      l = a.slice(1),
      d = _(c),
      h = s.defaultDbStatementSerializer(u, l);
    null != h && (d[i.DB_STATEMENT] = h);
    const g = o.startInactiveSpan({
        name: `${e.COMPONENT}-${u}`,
        kind: o.SPAN_KIND.CLIENT,
        attributes: d,
      }),
      m = o.withActiveSpan(g, () => t.apply(n, r));
    if (m instanceof Promise)
      m.then(
        (e) => {
          this._endSpanWithResponse(g, u, l, e, void 0);
        },
        (e) => {
          this._endSpanWithResponse(g, u, l, null, e);
        },
      );
    else {
      const e = m;
      (e[p] = e[p] || []),
        e[p].push({ span: g, commandName: u, commandArgs: l });
    }
    return m;
  }
  _endSpansWithRedisReplies(e, t) {
    if (e)
      if (t.length === e.length)
        for (let n = 0; n < e.length; n++) {
          const { span: r, commandName: o, commandArgs: i } = e[n],
            s = t[n],
            [a, c] = s instanceof Error ? [null, s] : [s, void 0];
          this._endSpanWithResponse(r, o, i, a, c);
        }
      else
        a.DEBUG_BUILD &&
          o.debug.error(
            "number of multi command spans does not match response from redis",
          );
    else
      a.DEBUG_BUILD &&
        o.debug.error("cannot find open spans to end for redis multi/pipeline");
  }
  _endSpanWithResponse(e, t, n, r, o) {
    o || g(this.getConfig().responseHook, e, t, n, r), h(e, o);
  }
};
y.COMPONENT = "redis";
let T = y;
class b extends r.InstrumentationBase {
  constructor(e = {}) {
    super(l, o.SDK_VERSION, e),
      (this.initialized = !1),
      (this.instrumentationV2_V3 = new E(this.getConfig())),
      (this.instrumentationV4_V5 = new T(this.getConfig())),
      (this.initialized = !0);
  }
  setConfig(e = {}) {
    super.setConfig(e),
      this.initialized &&
        (this.instrumentationV2_V3.setConfig(e),
        this.instrumentationV4_V5.setConfig(e));
  }
  init() {}
  getModuleDefinitions() {
    return [
      ...this.instrumentationV2_V3.getModuleDefinitions(),
      ...this.instrumentationV4_V5.getModuleDefinitions(),
    ];
  }
  setTracerProvider(e) {
    super.setTracerProvider(e),
      this.initialized &&
        (this.instrumentationV2_V3.setTracerProvider(e),
        this.instrumentationV4_V5.setTracerProvider(e));
  }
  enable() {
    super.enable(),
      this.initialized &&
        (this.instrumentationV2_V3.enable(),
        this.instrumentationV4_V5.enable());
  }
  disable() {
    super.disable(),
      this.initialized &&
        (this.instrumentationV2_V3.disable(),
        this.instrumentationV4_V5.disable());
  }
}
t.RedisInstrumentation = b;
