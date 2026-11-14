// vendor/other/module-13205.js — webpack module 13205
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(47702 /* vendor/other/module-47702 */),
  i = n(60261 /* vendor/other/module-60261 */),
  s = n(88516 /* vendor/other/module-88516 */),
  a = n(96137 /* vendor/other/module-96137 */),
  c = n(27134 /* vendor/other/module-27134 */),
  u = n(15280 /* vendor/other/module-15280 */),
  l = "PostgresJs",
  d = [">=3.0.0 <4"],
  p = /^(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)/i,
  f = Symbol.for("sentry.query.from.instrumented.sql"),
  h = c.generateInstrumentOnce(
    l,
    (e) =>
      new g({
        requireParentSpan: e?.requireParentSpan ?? !0,
        requestHook: e?.requestHook,
      }),
  );
class g extends o.InstrumentationBase {
  constructor(e) {
    super("sentry-postgres-js", a.SDK_VERSION, e);
  }
  init() {
    const e = new o.InstrumentationNodeModuleDefinition(
      "postgres",
      d,
      (e) => {
        try {
          return this._patchPostgres(e);
        } catch (t) {
          return (
            u.DEBUG_BUILD &&
              a.debug.error("Failed to patch postgres module:", t),
            e
          );
        }
      },
      (e) => e,
    );
    return (
      ["src", "cf/src", "cjs/src"].forEach((t) => {
        e.files.push(
          new i.InstrumentationNodeModuleFile(
            `postgres/${t}/query.js`,
            d,
            this._patchQueryPrototype.bind(this),
            this._unpatchQueryPrototype.bind(this),
          ),
        );
      }),
      e
    );
  }
  _patchPostgres(e) {
    const t = "function" == typeof e,
      n = t ? e : e.default;
    if ("function" != typeof n)
      return (
        u.DEBUG_BUILD &&
          a.debug.warn(
            "postgres module does not export a function. Skipping instrumentation.",
          ),
        e
      );
    const r = this,
      o = function (...e) {
        const t = Reflect.construct(n, e);
        if (!t || "function" != typeof t)
          return (
            u.DEBUG_BUILD &&
              a.debug.warn("postgres() did not return a valid instance"),
            t
          );
        const o = r.getConfig();
        return a.instrumentPostgresJsSql(t, {
          requireParentSpan: o.requireParentSpan,
          requestHook: o.requestHook,
        });
      };
    Object.setPrototypeOf(o, n),
      Object.setPrototypeOf(o.prototype, n.prototype);
    for (const e of Object.getOwnPropertyNames(n))
      if (!["length", "name", "prototype"].includes(e)) {
        const t = Object.getOwnPropertyDescriptor(n, e);
        t && Object.defineProperty(o, e, t);
      }
    return t ? o : (a.replaceExports(e, "default", o), e);
  }
  _shouldCreateSpans() {
    const e = this.getConfig();
    return (
      void 0 !== r.trace.getSpan(r.context.active()) || !e.requireParentSpan
    );
  }
  _setOperationName(e, t, n) {
    if (n) return void e.setAttribute(s.DB_OPERATION_NAME, n);
    const r = t?.match(p);
    r?.[1] && e.setAttribute(s.DB_OPERATION_NAME, r[1].toUpperCase());
  }
  _reconstructQuery(e) {
    if (e?.length)
      return 1 === e.length
        ? e[0] || void 0
        : e.reduce((e, t, n) => (0 === n ? t : `${e}$${n}${t}`), "");
  }
  _sanitizeSqlQuery(e) {
    return e
      ? e
          .replace(/--.*$/gm, "")
          .replace(/\/\*[\s\S]*?\*\//g, "")
          .replace(/;\s*$/, "")
          .replace(/\s+/g, " ")
          .trim()
          .replace(/\bX'[0-9A-Fa-f]*'/gi, "?")
          .replace(/\bB'[01]*'/gi, "?")
          .replace(/'(?:[^']|'')*'/g, "?")
          .replace(/\b0x[0-9A-Fa-f]+/gi, "?")
          .replace(/\b(?:TRUE|FALSE)\b/gi, "?")
          .replace(/-?\b\d+\.?\d*[eE][+-]?\d+\b/g, "?")
          .replace(/-?\b\d+\.\d+\b/g, "?")
          .replace(/-?\.\d+\b/g, "?")
          .replace(/(?<!\$)-?\b\d+\b/g, "?")
          .replace(/\bIN\b\s*\(\s*\?(?:\s*,\s*\?)*\s*\)/gi, "IN (?)")
          .replace(/\bIN\b\s*\(\s*\$\d+(?:\s*,\s*\$\d+)*\s*\)/gi, "IN ($?)")
      : "Unknown SQL Query";
  }
  _patchQueryPrototype(e) {
    const t = this,
      n = e.Query.prototype.handle;
    return (
      (e.Query.prototype.handle = async function (...e) {
        if (this.executed || this[f]) return n.apply(this, e);
        if (!t._shouldCreateSpans()) return n.apply(this, e);
        const r = t._reconstructQuery(this.strings),
          i = t._sanitizeSqlQuery(r);
        return a.startSpanManual(
          { name: i || "postgresjs.query", op: "db" },
          (r) => {
            c.addOriginToSpan(r, "auto.db.postgresjs"),
              r.setAttributes({
                [s.DB_SYSTEM_NAME]: "postgres",
                [s.DB_QUERY_TEXT]: i,
              });
            const d = t.getConfig(),
              { requestHook: p } = d;
            p &&
              o.safeExecuteInTheMiddle(
                () => p(r, i, void 0),
                (e) => {
                  e &&
                    (r.setAttribute("sentry.hook.error", "requestHook failed"),
                    u.DEBUG_BUILD &&
                      a.debug.error(
                        `Error in requestHook for ${l} integration:`,
                        e,
                      ));
                },
                !0,
              );
            const f = this.resolve;
            this.resolve = new Proxy(f, {
              apply: (e, n, o) => {
                try {
                  t._setOperationName(r, i, o?.[0]?.command), r.end();
                } catch (e) {
                  u.DEBUG_BUILD &&
                    a.debug.error("Error ending span in resolve callback:", e);
                }
                return Reflect.apply(e, n, o);
              },
            });
            const h = this.reject;
            this.reject = new Proxy(h, {
              apply: (e, n, o) => {
                try {
                  r.setStatus({
                    code: a.SPAN_STATUS_ERROR,
                    message: o?.[0]?.message || "unknown_error",
                  }),
                    r.setAttribute(
                      "db.response.status_code",
                      o?.[0]?.code || "unknown",
                    ),
                    r.setAttribute(s.ERROR_TYPE, o?.[0]?.name || "unknown"),
                    t._setOperationName(r, i),
                    r.end();
                } catch (e) {
                  u.DEBUG_BUILD &&
                    a.debug.error("Error ending span in reject callback:", e);
                }
                return Reflect.apply(e, n, o);
              },
            });
            try {
              return n.apply(this, e);
            } catch (e) {
              throw (
                (r.setStatus({
                  code: a.SPAN_STATUS_ERROR,
                  message: e instanceof Error ? e.message : "unknown_error",
                }),
                r.end(),
                e)
              );
            }
          },
        );
      }),
      (e.Query.prototype.handle.__sentry_original__ = n),
      e
    );
  }
  _unpatchQueryPrototype(e) {
    return (
      e.Query.prototype.handle.__sentry_original__ &&
        (e.Query.prototype.handle =
          e.Query.prototype.handle.__sentry_original__),
      e
    );
  }
}
const m = a.defineIntegration((e) => ({
  name: l,
  setupOnce() {
    h(e);
  },
}));
(t.PostgresJsInstrumentation = g),
  (t.instrumentPostgresJs = h),
  (t.postgresJsIntegration = m);
