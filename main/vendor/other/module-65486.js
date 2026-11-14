// vendor/other/module-65486.js — webpack module 65486
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(60261 /* vendor/other/module-60261 */),
  a = n(6369 /* vendor/other/module-6369 */),
  c = n(97249 /* vendor/other/module-97249 */),
  u = [">=1.4.2 <3.20.0"];
class l extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-mysql2", i.SDK_VERSION, e);
  }
  init() {
    let e;
    function t(t) {
      !e && t.format && (e = t.format);
    }
    const n = (t) => {
        r.isWrapped(t.query) && this._unwrap(t, "query"),
          this._wrap(t, "query", this._patchQuery(e)),
          r.isWrapped(t.execute) && this._unwrap(t, "execute"),
          this._wrap(t, "execute", this._patchQuery(e));
      },
      o = (e) => {
        this._unwrap(e, "query"), this._unwrap(e, "execute");
      };
    return [
      new r.InstrumentationNodeModuleDefinition(
        "mysql2",
        u,
        (e) => (t(e), e),
        () => {},
        [
          new s.InstrumentationNodeModuleFile(
            "mysql2/promise.js",
            u,
            (e) => (t(e), e),
            () => {},
          ),
          new s.InstrumentationNodeModuleFile(
            "mysql2/lib/connection.js",
            u,
            (e) => {
              const t = c.getConnectionPrototypeToInstrument(e);
              return n(t), e;
            },
            (e) => {
              if (void 0 === e) return;
              const t = c.getConnectionPrototypeToInstrument(e);
              o(t);
            },
          ),
        ],
      ),
    ];
  }
  _patchQuery(e) {
    const t = this;
    return (n) =>
      function (r, s, u) {
        let l;
        Array.isArray(s) ? (l = s) : arguments[2] && (l = [s]);
        const d = {
            ...c.getConnectionAttributes(this.config),
            [o.DB_SYSTEM]: a.DB_SYSTEM_VALUE_MYSQL,
            [o.DB_STATEMENT]: c.getQueryText(r, e, l),
            [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.otel.mysql2",
          },
          p = i.startInactiveSpan({
            name: c.getSpanName(r),
            kind: i.SPAN_KIND.CLIENT,
            attributes: d,
          }),
          f = c.once((e) => {
            e &&
              p.setStatus({
                code: i.SPAN_STATUS_ERROR,
                message: e.message,
              }),
              p.end();
          });
        if (1 === arguments.length) {
          "function" == typeof r.onResult &&
            t._wrap(r, "onResult", t._patchCallbackQuery(f));
          const e = n.apply(this, arguments);
          return (
            e
              .once("error", (e) => {
                f(e);
              })
              .once("result", () => {
                f();
              }),
            e
          );
        }
        return (
          "function" == typeof arguments[1]
            ? t._wrap(arguments, 1, t._patchCallbackQuery(f))
            : "function" == typeof arguments[2] &&
              t._wrap(arguments, 2, t._patchCallbackQuery(f)),
          n.apply(this, arguments)
        );
      };
  }
  _patchCallbackQuery(e) {
    return (t) =>
      function (...n) {
        return e(n[0]), t(...n);
      };
  }
}
t.MySQL2Instrumentation = l;
