// vendor/module-93305.js — webpack module 93305
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(58637 /* vendor/module-58637 */),
  a = n(38862 /* vendor/module-38862 */),
  s = n(19648 /* vendor/module-19648 */),
  l = n(23295 /* vendor/module-23295 */),
  c = n(77481 /* vendor/module-77481 */),
  u = /^(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)/i,
  d = Symbol("sentryPostgresConnectionContext"),
  p = Symbol.for("sentry.instrumented.postgresjs"),
  f = Symbol.for("sentry.query.from.instrumented.sql");
function h(e, t, n) {
  if (e[p]) return e;
  const r = new Proxy(e, {
    apply(e, n, o) {
      const i = Reflect.apply(e, n, o);
      return l.isObjectLike(i) && "handle" in i && m(i, r, t), i;
    },
    get(e, n) {
      const o = e[n];
      return "string" != typeof n || "function" != typeof o
        ? o
        : "unsafe" === n || "file" === n
          ? (function (e, t, n, r) {
              return function (...o) {
                const i = Reflect.apply(e, t, o);
                return l.isObjectLike(i) && "handle" in i && m(i, n, r), i;
              };
            })(o, e, r, t)
          : "begin" === n || "reserve" === n
            ? (function (e, t, n, r) {
                return function (...o) {
                  const i = n[d];
                  if ("function" != typeof o[o.length - 1]) {
                    const n = Reflect.apply(e, t, o);
                    return n && "function" == typeof n.then
                      ? n.then((e) => h(e, r, i))
                      : n;
                  }
                  const a = 1 === o.length ? o[0] : o[1],
                    s = function (e) {
                      const t = h(e, r, i);
                      return a(t);
                    },
                    l = 1 === o.length ? [s] : [o[0], s];
                  return Reflect.apply(e, t, l);
                };
              })(o, e, r, t)
            : o;
    },
  });
  return (
    n
      ? (r[d] = n)
      : (function (e, t) {
          const n = e;
          n.options && "object" == typeof n.options && (t[d] = _(n.options));
        })(e, r),
    (e[p] = !0),
    (r[p] = !0),
    r
  );
}
function m(e, t, n) {
  if (e.handle?.__sentryWrapped) return;
  e[f] = !0;
  const l = e.handle,
    u = async function (...u) {
      if (
        this.executed ||
        !(function (e) {
          return void 0 !== a.getActiveSpan() || !e.requireParentSpan;
        })(n)
      )
        return l.apply(this, u);
      const p = v(g(e.strings));
      return c.startSpanManual(
        { name: p || "postgresjs.query", op: "db" },
        (e) => {
          e.setAttribute(
            o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
            "auto.db.postgresjs",
          ),
            e.setAttributes({
              "db.system.name": "postgres",
              "db.query.text": p,
            });
          const a = t ? t[d] : void 0;
          if ((b(e, a), n.requestHook))
            try {
              n.requestHook(e, p, a);
            } catch (t) {
              e.setAttribute("sentry.hook.error", "requestHook failed"),
                r.DEBUG_BUILD &&
                  i.debug.error(
                    "Error in requestHook for PostgresJs instrumentation:",
                    t,
                  );
            }
          const c = this;
          (c.resolve = new Proxy(c.resolve, {
            apply: (t, n, o) => {
              try {
                S(e, p, o?.[0]?.command), e.end();
              } catch (e) {
                r.DEBUG_BUILD &&
                  i.debug.error("Error ending span in resolve callback:", e);
              }
              return Reflect.apply(t, n, o);
            },
          })),
            (c.reject = new Proxy(c.reject, {
              apply: (t, n, o) => {
                try {
                  e.setStatus({
                    code: s.SPAN_STATUS_ERROR,
                    message: o?.[0]?.message || "unknown_error",
                  }),
                    e.setAttribute(
                      "db.response.status_code",
                      o?.[0]?.code || "unknown",
                    ),
                    e.setAttribute("error.type", o?.[0]?.name || "unknown"),
                    S(e, p),
                    e.end();
                } catch (e) {
                  r.DEBUG_BUILD &&
                    i.debug.error("Error ending span in reject callback:", e);
                }
                return Reflect.apply(t, n, o);
              },
            }));
          try {
            return l.apply(this, u);
          } catch (t) {
            throw (
              (e.setStatus({
                code: s.SPAN_STATUS_ERROR,
                message: t instanceof Error ? t.message : "unknown_error",
              }),
              e.end(),
              t)
            );
          }
        },
      );
    };
  (u.__sentryWrapped = !0), (e.handle = u);
}
function g(e) {
  if (e?.length)
    return 1 === e.length
      ? e[0] || void 0
      : e.reduce((e, t, n) => (0 === n ? t : `${e}$${n}${t}`), "");
}
let y;
function v(e) {
  return e
    ? (y || (y = new RegExp("(?<!\\$)-?\\b\\d+\\b", "g")),
      e
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
        .replace(y, "?")
        .replace(/\bIN\b\s*\(\s*\?(?:\s*,\s*\?)*\s*\)/gi, "IN (?)")
        .replace(/\bIN\b\s*\(\s*\$\d+(?:\s*,\s*\$\d+)*\s*\)/gi, "IN ($?)"))
    : "Unknown SQL Query";
}
function b(e, t) {
  if (
    t &&
    (t.ATTR_DB_NAMESPACE && e.setAttribute("db.namespace", t.ATTR_DB_NAMESPACE),
    t.ATTR_SERVER_ADDRESS &&
      e.setAttribute("server.address", t.ATTR_SERVER_ADDRESS),
    void 0 !== t.ATTR_SERVER_PORT)
  ) {
    const n = parseInt(t.ATTR_SERVER_PORT, 10);
    isNaN(n) || e.setAttribute("server.port", n);
  }
}
function S(e, t, n) {
  if (n) return void e.setAttribute("db.operation.name", n);
  const r = t?.match(u);
  r?.[1] && e.setAttribute("db.operation.name", r[1].toUpperCase());
}
function _(e) {
  const t = e.host?.[0] || "localhost",
    n = e.port?.[0] || 5432;
  return {
    ATTR_DB_NAMESPACE:
      "string" == typeof e.database && "" !== e.database ? e.database : void 0,
    ATTR_SERVER_ADDRESS: t,
    ATTR_SERVER_PORT: String(n),
  };
}
(t._buildConnectionContext = _),
  (t._reconstructQuery = g),
  (t._sanitizeSqlQuery = v),
  (t._setConnectionAttributes = b),
  (t._setOperationName = S),
  (t.instrumentPostgresJsSql = function (e, t) {
    return e && "function" == typeof e
      ? h(e, { requireParentSpan: !0, ...t })
      : (r.DEBUG_BUILD &&
          i.debug.warn(
            "instrumentPostgresJsSql: provided value is not a valid postgres.js sql instance",
          ),
        e);
  });
