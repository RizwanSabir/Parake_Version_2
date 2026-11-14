// vendor/other/module-93305.js — webpack module 93305
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(12724 /* vendor/other/module-12724 */),
  i = n(58637 /* vendor/other/module-58637 */),
  s = n(38862 /* vendor/other/module-38862 */),
  a = n(19648 /* vendor/other/module-19648 */),
  c = n(23295 /* vendor/other/module-23295 */),
  u = n(77481 /* vendor/other/module-77481 */),
  l = /^(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)/i,
  d = Symbol("sentryPostgresConnectionContext"),
  p = Symbol.for("sentry.instrumented.postgresjs"),
  f = Symbol.for("sentry.query.from.instrumented.sql");
function h(e, t, n) {
  if (e[p]) return e;
  const r = new Proxy(e, {
    apply(e, n, o) {
      const i = Reflect.apply(e, n, o);
      return c.isObjectLike(i) && "handle" in i && g(i, r, t), i;
    },
    get(e, n) {
      const o = e[n];
      return "string" != typeof n || "function" != typeof o
        ? o
        : "unsafe" === n || "file" === n
          ? (function (e, t, n, r) {
              return function (...o) {
                const i = Reflect.apply(e, t, o);
                return c.isObjectLike(i) && "handle" in i && g(i, n, r), i;
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
                  const s = 1 === o.length ? o[0] : o[1],
                    a = function (e) {
                      const t = h(e, r, i);
                      return s(t);
                    },
                    c = 1 === o.length ? [a] : [o[0], a];
                  return Reflect.apply(e, t, c);
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
          n.options && "object" == typeof n.options && (t[d] = T(n.options));
        })(e, r),
    (e[p] = !0),
    (r[p] = !0),
    r
  );
}
function g(e, t, n) {
  if (e.handle?.__sentryWrapped) return;
  e[f] = !0;
  const c = e.handle,
    l = async function (...l) {
      if (
        this.executed ||
        !(function (e) {
          return void 0 !== s.getActiveSpan() || !e.requireParentSpan;
        })(n)
      )
        return c.apply(this, l);
      const p = S(m(e.strings));
      return u.startSpanManual(
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
          const s = t ? t[d] : void 0;
          if ((E(e, s), n.requestHook))
            try {
              n.requestHook(e, p, s);
            } catch (t) {
              e.setAttribute("sentry.hook.error", "requestHook failed"),
                r.DEBUG_BUILD &&
                  i.debug.error(
                    "Error in requestHook for PostgresJs instrumentation:",
                    t,
                  );
            }
          const u = this;
          (u.resolve = new Proxy(u.resolve, {
            apply: (t, n, o) => {
              try {
                y(e, p, o?.[0]?.command), e.end();
              } catch (e) {
                r.DEBUG_BUILD &&
                  i.debug.error("Error ending span in resolve callback:", e);
              }
              return Reflect.apply(t, n, o);
            },
          })),
            (u.reject = new Proxy(u.reject, {
              apply: (t, n, o) => {
                try {
                  e.setStatus({
                    code: a.SPAN_STATUS_ERROR,
                    message: o?.[0]?.message || "unknown_error",
                  }),
                    e.setAttribute(
                      "db.response.status_code",
                      o?.[0]?.code || "unknown",
                    ),
                    e.setAttribute("error.type", o?.[0]?.name || "unknown"),
                    y(e, p),
                    e.end();
                } catch (e) {
                  r.DEBUG_BUILD &&
                    i.debug.error("Error ending span in reject callback:", e);
                }
                return Reflect.apply(t, n, o);
              },
            }));
          try {
            return c.apply(this, l);
          } catch (t) {
            throw (
              (e.setStatus({
                code: a.SPAN_STATUS_ERROR,
                message: t instanceof Error ? t.message : "unknown_error",
              }),
              e.end(),
              t)
            );
          }
        },
      );
    };
  (l.__sentryWrapped = !0), (e.handle = l);
}
function m(e) {
  if (e?.length)
    return 1 === e.length
      ? e[0] || void 0
      : e.reduce((e, t, n) => (0 === n ? t : `${e}$${n}${t}`), "");
}
let _;
function S(e) {
  return e
    ? (_ || (_ = new RegExp("(?<!\\$)-?\\b\\d+\\b", "g")),
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
        .replace(_, "?")
        .replace(/\bIN\b\s*\(\s*\?(?:\s*,\s*\?)*\s*\)/gi, "IN (?)")
        .replace(/\bIN\b\s*\(\s*\$\d+(?:\s*,\s*\$\d+)*\s*\)/gi, "IN ($?)"))
    : "Unknown SQL Query";
}
function E(e, t) {
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
function y(e, t, n) {
  if (n) return void e.setAttribute("db.operation.name", n);
  const r = t?.match(l);
  r?.[1] && e.setAttribute("db.operation.name", r[1].toUpperCase());
}
function T(e) {
  const t = e.host?.[0] || "localhost",
    n = e.port?.[0] || 5432;
  return {
    ATTR_DB_NAMESPACE:
      "string" == typeof e.database && "" !== e.database ? e.database : void 0,
    ATTR_SERVER_ADDRESS: t,
    ATTR_SERVER_PORT: String(n),
  };
}
(t._buildConnectionContext = T),
  (t._reconstructQuery = m),
  (t._sanitizeSqlQuery = S),
  (t._setConnectionAttributes = E),
  (t._setOperationName = y),
  (t.instrumentPostgresJsSql = function (e, t) {
    return e && "function" == typeof e
      ? h(e, { requireParentSpan: !0, ...t })
      : (r.DEBUG_BUILD &&
          i.debug.warn(
            "instrumentPostgresJsSql: provided value is not a valid postgres.js sql instance",
          ),
        e);
  });
