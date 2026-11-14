// vendor/other/module-29097.js — webpack module 29097
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(64673 /* vendor/other/module-64673 */),
  a = n(69828 /* vendor/other/module-69828 */),
  c = "auto.db.otel.redis",
  u = [">=2.0.0 <5.11.0"];
function l(e, t) {
  t && e.setStatus({ code: o.SPAN_STATUS_ERROR, message: t.message }), e.end();
}
class d extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-ioredis", o.SDK_VERSION, e);
  }
  init() {
    return [
      new r.InstrumentationNodeModuleDefinition(
        "ioredis",
        u,
        (e) => {
          const t =
            "Module" === e[Symbol.toStringTag] && e.default ? e.default : e;
          return (
            r.isWrapped(t.prototype.sendCommand) &&
              this._unwrap(t.prototype, "sendCommand"),
            this._wrap(t.prototype, "sendCommand", this._patchSendCommand()),
            r.isWrapped(t.prototype.connect) &&
              this._unwrap(t.prototype, "connect"),
            this._wrap(t.prototype, "connect", this._patchConnection()),
            e
          );
        },
        (e) => {
          if (void 0 === e) return;
          const t =
            "Module" === e[Symbol.toStringTag] && e.default ? e.default : e;
          this._unwrap(t.prototype, "sendCommand"),
            this._unwrap(t.prototype, "connect");
        },
      ),
    ];
  }
  _patchSendCommand() {
    const e = this;
    return (t) =>
      function (...n) {
        const r = n[0];
        if (n.length < 1 || "object" != typeof r || !o.getActiveSpan())
          return t.apply(this, n);
        const { host: u, port: d } = this.options,
          p = {
            [i.DB_SYSTEM]: a.DB_SYSTEM_VALUE_REDIS,
            [i.DB_STATEMENT]: s.defaultDbStatementSerializer(r.name, r.args),
            [a.ATTR_DB_CONNECTION_STRING]: `redis://${u}:${d}`,
            [i.NET_PEER_NAME]: u,
            [i.NET_PEER_PORT]: d,
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c,
          },
          f = o.startInactiveSpan({
            name: r.name,
            kind: o.SPAN_KIND.CLIENT,
            attributes: p,
          });
        try {
          const o = t.apply(this, n),
            i = r.resolve;
          r.resolve = function (t) {
            e._callResponseHook(f, r, t), l(f, null), i(t);
          };
          const s = r.reject;
          return (
            (r.reject = function (e) {
              l(f, e), s(e);
            }),
            o
          );
        } catch (e) {
          throw (l(f, e), e);
        }
      };
  }
  _patchConnection() {
    return (e) =>
      function (...t) {
        if (!o.getActiveSpan()) return e.apply(this, t);
        const { host: n, port: r } = this.options,
          s = {
            [i.DB_SYSTEM]: a.DB_SYSTEM_VALUE_REDIS,
            [i.DB_STATEMENT]: "connect",
            [a.ATTR_DB_CONNECTION_STRING]: `redis://${n}:${r}`,
            [i.NET_PEER_NAME]: n,
            [i.NET_PEER_PORT]: r,
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c,
          },
          u = o.startInactiveSpan({
            name: "connect",
            kind: o.SPAN_KIND.CLIENT,
            attributes: s,
          });
        try {
          const n = e.apply(this, t);
          return n instanceof Promise
            ? n.then(
                (e) => (l(u, null), e),
                (e) => (l(u, e), Promise.reject(e)),
              )
            : (l(u, null), n);
        } catch (e) {
          throw (l(u, e), e);
        }
      };
  }
  _callResponseHook(e, t, n) {
    const { responseHook: r } = this.getConfig();
    if (r)
      try {
        r(e, t.name, t.args, n);
      } catch {}
  }
}
t.IORedisInstrumentation = d;
