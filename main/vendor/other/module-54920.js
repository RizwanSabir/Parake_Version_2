// vendor/other/module-54920.js — webpack module 54920
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(53895 /* vendor/other/module-53895 */),
  a = n(58719 /* vendor/other/module-58719 */);
class c extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-mysql", o.SDK_VERSION, e);
  }
  init() {
    return [
      new r.InstrumentationNodeModuleDefinition(
        "mysql",
        [">=2.0.0 <3"],
        (e) => (
          r.isWrapped(e.createConnection) &&
            this._unwrap(e, "createConnection"),
          this._wrap(e, "createConnection", this._patchCreateConnection()),
          r.isWrapped(e.createPool) && this._unwrap(e, "createPool"),
          this._wrap(e, "createPool", this._patchCreatePool()),
          r.isWrapped(e.createPoolCluster) &&
            this._unwrap(e, "createPoolCluster"),
          this._wrap(e, "createPoolCluster", this._patchCreatePoolCluster()),
          e
        ),
        (e) => {
          void 0 !== e &&
            (this._unwrap(e, "createConnection"),
            this._unwrap(e, "createPool"),
            this._unwrap(e, "createPoolCluster"));
        },
      ),
    ];
  }
  _patchCreateConnection() {
    return (e) => {
      const t = this;
      return function (n) {
        const r = e(...arguments);
        return t._wrap(r, "query", t._patchQuery(r)), r;
      };
    };
  }
  _patchCreatePool() {
    return (e) => {
      const t = this;
      return function (n) {
        const r = e(...arguments);
        return (
          t._wrap(r, "query", t._patchQuery(r)),
          t._wrap(r, "getConnection", t._patchGetConnection(r)),
          r
        );
      };
    };
  }
  _patchCreatePoolCluster() {
    return (e) => {
      const t = this;
      return function (n) {
        const r = e(...arguments);
        return t._wrap(r, "getConnection", t._patchGetConnection(r)), r;
      };
    };
  }
  _patchGetConnection(e) {
    return (t) => {
      const n = this;
      return function (r, o, i) {
        if (!n._enabled)
          return n._unwrap(e, "getConnection"), t.apply(e, arguments);
        if (1 === arguments.length && "function" == typeof r) {
          const o = n._getConnectionCallbackPatchFn(r);
          return t.call(e, o);
        }
        if (2 === arguments.length && "function" == typeof o) {
          const i = n._getConnectionCallbackPatchFn(o);
          return t.call(e, r, i);
        }
        if (3 === arguments.length && "function" == typeof i) {
          const s = n._getConnectionCallbackPatchFn(i);
          return t.call(e, r, o, s);
        }
        return t.apply(e, arguments);
      };
    };
  }
  _getConnectionCallbackPatchFn(e) {
    const t = this,
      n = o.getCurrentScope();
    return function (i, s) {
      s && (r.isWrapped(s.query) || t._wrap(s, "query", t._patchQuery(s))),
        "function" == typeof e && o.withScope(n, () => e.call(this, i, s));
    };
  }
  _patchQuery(e) {
    return (t) => {
      const n = this;
      return function (r, c, u) {
        if (!n._enabled) return n._unwrap(e, "query"), t.apply(e, arguments);
        const {
            host: l,
            port: d,
            database: p,
            user: f,
          } = a.getConfig(e.config),
          h = parseInt(String(d), 10),
          g = {
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.otel.mysql",
            [i.DB_SYSTEM]: s.DB_SYSTEM_VALUE_MYSQL,
            [s.ATTR_DB_CONNECTION_STRING]: a.getJDBCString(l, d, p),
            [i.DB_NAME]: p,
            [i.DB_USER]: f,
            [i.DB_STATEMENT]: a.getDbQueryText(r),
            [i.NET_PEER_NAME]: l,
          };
        isNaN(h) || (g[i.NET_PEER_PORT] = h);
        const m = o.startInactiveSpan({
            name: a.getSpanName(r),
            kind: o.SPAN_KIND.CLIENT,
            attributes: g,
          }),
          _ = Array.from(arguments).findIndex((e) => "function" == typeof e),
          S = o.getCurrentScope();
        if (-1 === _) {
          const n = o.withActiveSpan(m, () => t.apply(e, arguments));
          return (
            o.bindScopeToEmitter(n, S),
            n
              .on("error", (e) => {
                m.setStatus({
                  code: o.SPAN_STATUS_ERROR,
                  message: e.message,
                });
              })
              .on("end", () => {
                m.end();
              })
          );
        }
        return (
          n._wrap(arguments, _, n._patchCallbackQuery(m, S)),
          o.withActiveSpan(m, () => t.apply(e, arguments))
        );
      };
    };
  }
  _patchCallbackQuery(e, t) {
    return (n) =>
      function (r, i, s) {
        return (
          r &&
            e.setStatus({
              code: o.SPAN_STATUS_ERROR,
              message: r.message,
            }),
          e.end(),
          o.withScope(t, () => n(...arguments))
        );
      };
  }
}
t.MySQLInstrumentation = c;
