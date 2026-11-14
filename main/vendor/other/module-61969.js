// vendor/other/module-61969.js — webpack module 61969
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(24434 /* external/events */),
  o = n(47702 /* vendor/other/module-47702 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(90410 /* vendor/other/module-90410 */),
  a = n(6754 /* vendor/other/module-6754 */),
  c = n(96137 /* vendor/other/module-96137 */),
  u = Symbol("opentelemetry.instrumentation-tedious.current-database"),
  l = [
    "callProcedure",
    "execSql",
    "execSqlBatch",
    "execBulkLoad",
    "prepare",
    "execute",
  ];
function d(e) {
  Object.defineProperty(this, u, { value: e, writable: !0 });
}
const p = class e extends o.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-tedious", c.SDK_VERSION, e);
  }
  init() {
    return [
      new o.InstrumentationNodeModuleDefinition(
        e.COMPONENT,
        [">=1.11.0 <20"],
        (e) => {
          const t = e.Connection.prototype;
          for (const e of l)
            o.isWrapped(t[e]) && this._unwrap(t, e),
              this._wrap(t, e, this._patchQuery(e));
          return (
            o.isWrapped(t.connect) && this._unwrap(t, "connect"),
            this._wrap(t, "connect", this._patchConnect),
            e
          );
        },
        (e) => {
          if (void 0 === e) return;
          const t = e.Connection.prototype;
          for (const e of l) this._unwrap(t, e);
          this._unwrap(t, "connect");
        },
      ),
    ];
  }
  _patchConnect(e) {
    return function () {
      return (
        d.call(this, this.config?.options?.database),
        this.removeListener("databaseChange", d),
        this.on("databaseChange", d),
        this.once("end", () => {
          this.removeListener("databaseChange", d);
        }),
        e.apply(this, arguments)
      );
    };
  }
  _patchQuery(e) {
    return (t) => {
      const n = this;
      function o(o) {
        if (!(o instanceof r.EventEmitter))
          return (
            n._diag.warn(
              `Unexpected invocation of patched ${e} method. Span not recorded`,
            ),
            t.apply(this, arguments)
          );
        let l = 0,
          d = 0;
        const p = () => d++,
          f = () => l++,
          h = this[u],
          g =
            "sp_prepare" === (m = o).sqlTextOrProcedure &&
            m.parametersByName?.stmt?.value
              ? m.parametersByName.stmt.value
              : m.sqlTextOrProcedure;
        var m;
        const _ = {
            [c.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.otel.tedious",
            [i.DB_SYSTEM]: s.DB_SYSTEM_VALUE_MSSQL,
            [i.DB_NAME]: h,
            [i.DB_USER]:
              this.config?.userName ??
              this.config?.authentication?.options?.userName,
            [i.DB_STATEMENT]: g,
            [s.ATTR_DB_SQL_TABLE]: o.table,
            [i.NET_PEER_NAME]: this.config?.server,
            [i.NET_PEER_PORT]: this.config?.options?.port,
          },
          S = c.startInactiveSpan({
            name: a.getSpanName(e, h, g, o.table),
            kind: c.SPAN_KIND.CLIENT,
            attributes: _,
          }),
          E = a.once((e) => {
            o.removeListener("done", p),
              o.removeListener("doneInProc", p),
              o.removeListener("doneProc", f),
              o.removeListener("error", E),
              this.removeListener("end", E),
              S.setAttribute("tedious.procedure_count", l),
              S.setAttribute("tedious.statement_count", d),
              e &&
                S.setStatus({
                  code: c.SPAN_STATUS_ERROR,
                  message: e.message,
                }),
              S.end();
          });
        return (
          o.on("done", p),
          o.on("doneInProc", p),
          o.on("doneProc", f),
          o.once("error", E),
          this.on("end", E),
          "function" == typeof o.callback
            ? n._wrap(o, "callback", n._patchCallbackQuery(E))
            : n._diag.error("Expected request.callback to be a function"),
          c.withActiveSpan(S, () => t.apply(this, arguments))
        );
      }
      return (
        Object.defineProperty(o, "length", {
          value: t.length,
          writable: !1,
        }),
        o
      );
    };
  }
  _patchCallbackQuery(e) {
    return (t) =>
      function (n, r, o) {
        return e(n), t.apply(this, arguments);
      };
  }
};
p.COMPONENT = "tedious";
let f = p;
t.TediousInstrumentation = f;
