// vendor/other/module-37290.js — webpack module 37290
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(60261 /* vendor/other/module-60261 */),
  a = n(87877 /* vendor/other/module-87877 */),
  c = n(77541 /* vendor/other/module-77541 */),
  u = [
    ">=0.22.0 <4",
    ">=0.10.0 <0.18.0",
    ">=0.19.0 <0.22.0",
    ">=0.18.0 <0.19.0",
  ],
  l = Symbol("sentry.instrumentation-knex.parent-span");
class d extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-knex", o.SDK_VERSION, e);
  }
  init() {
    const e = new r.InstrumentationNodeModuleDefinition("knex", u);
    return (
      e.files.push(
        this._getClientNodeModuleFileInstrumentation("src"),
        this._getClientNodeModuleFileInstrumentation("lib"),
        this._getRunnerNodeModuleFileInstrumentation("src"),
        this._getRunnerNodeModuleFileInstrumentation("lib"),
        this._getRunnerNodeModuleFileInstrumentation("lib/execution"),
      ),
      e
    );
  }
  _getRunnerNodeModuleFileInstrumentation(e) {
    return new s.InstrumentationNodeModuleFile(
      `knex/${e}/runner.js`,
      u,
      (e, t) => (
        this._ensureWrapped(e.prototype, "query", this._createQueryWrapper(t)),
        e
      ),
      (e) => (this._unwrap(e.prototype, "query"), e),
    );
  }
  _getClientNodeModuleFileInstrumentation(e) {
    return new s.InstrumentationNodeModuleFile(
      `knex/${e}/client.js`,
      u,
      (e) => (
        this._ensureWrapped(
          e.prototype,
          "queryBuilder",
          this._storeContext.bind(this),
        ),
        this._ensureWrapped(
          e.prototype,
          "schemaBuilder",
          this._storeContext.bind(this),
        ),
        this._ensureWrapped(e.prototype, "raw", this._storeContext.bind(this)),
        e
      ),
      (e) => (
        this._unwrap(e.prototype, "queryBuilder"),
        this._unwrap(e.prototype, "schemaBuilder"),
        this._unwrap(e.prototype, "raw"),
        e
      ),
    );
  }
  _createQueryWrapper(e) {
    return function (t) {
      return function (n) {
        const r = this.client.config,
          s = c.extractTableName(this.builder),
          u = n?.method,
          d = r?.connection?.connectionString,
          p =
            r?.connection?.filename ||
            r?.connection?.database ||
            c.extractDatabaseFromConnectionString(d),
          f = {
            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.otel.knex",
            "knex.version": e,
            [i.DB_SYSTEM]: c.mapSystem(this.client.driverName),
            [a.ATTR_DB_SQL_TABLE]: s,
            [i.DB_OPERATION]: u,
            [i.DB_USER]: r?.connection?.user,
            [i.DB_NAME]: p,
            [i.NET_PEER_NAME]:
              r?.connection?.host ?? c.extractHostFromConnectionString(d),
            [i.NET_PEER_PORT]:
              r?.connection?.port ?? c.extractPortFromConnectionString(d),
            [i.NET_TRANSPORT]:
              ":memory:" === r?.connection?.filename ? "inproc" : void 0,
            [i.DB_STATEMENT]: c.limitLength(n?.sql, 1022),
          },
          h = this.builder[l] || o.getActiveSpan(),
          g = arguments;
        return o.startSpan(
          {
            name: c.getName(p, u, s),
            kind: o.SPAN_KIND.CLIENT,
            attributes: f,
            parentSpan: h,
            onlyIfParent: !0,
          },
          (e) =>
            t.apply(this, g).catch((t) => {
              const r = c.getFormatter(this)(n.sql, n.bindings || []),
                i = t.message.replace(`${r} - `, "");
              throw (
                (e.setStatus({
                  code: o.SPAN_STATUS_ERROR,
                  message: i,
                }),
                t)
              );
            }),
        );
      };
    };
  }
  _storeContext(e) {
    return function () {
      const t = e.apply(this, arguments);
      return Object.defineProperty(t, l, { value: o.getActiveSpan() }), t;
    };
  }
  _ensureWrapped(e, t, n) {
    r.isWrapped(e[t]) && this._unwrap(e, t), this._wrap(e, t, n);
  }
}
t.KnexInstrumentation = d;
