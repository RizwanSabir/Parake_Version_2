// vendor/other/module-97249.js — webpack module 97249
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(6369 /* vendor/other/module-6369 */);
function i(e, t, n) {
  let r = `jdbc:mysql://${e || "localhost"}`;
  return (
    "number" == typeof t && (r += `:${t}`),
    "string" == typeof n && (r += `/${n}`),
    r
  );
}
(t.getConnectionAttributes = function (e) {
  const {
      host: t,
      port: n,
      database: s,
      user: a,
    } = (function (e) {
      const {
        host: t,
        port: n,
        database: r,
        user: o,
      } = e?.connectionConfig || e || {};
      return { host: t, port: n, database: r, user: o };
    })(e),
    c = {
      [o.ATTR_DB_CONNECTION_STRING]: i(t, n, s),
      [r.DB_NAME]: s,
      [r.DB_USER]: a,
      [r.NET_PEER_NAME]: t,
    },
    u = parseInt(n, 10);
  return isNaN(u) || (c[r.NET_PEER_PORT] = u), c;
}),
  (t.getConnectionPrototypeToInstrument = function (e) {
    const t = e.prototype,
      n = Object.getPrototypeOf(t);
    return "function" == typeof n?.query && "function" == typeof n?.execute
      ? n
      : t;
  }),
  (t.getQueryText = function (e, t, n) {
    const [r, o] =
      "string" == typeof e
        ? [e, n]
        : [e.sql, ((i = e), "values" in i ? n || e.values : n)];
    var i;
    try {
      return t && o ? t(r, o) : r;
    } catch {
      return "Could not determine the query due to an error in formatting";
    }
  }),
  (t.getSpanName = function (e) {
    const t = "object" == typeof e ? e.sql : e,
      n = t?.indexOf(" ");
    return "number" == typeof n && -1 !== n ? t?.substring(0, n) : t;
  }),
  (t.once = (e) => {
    let t = !1;
    return (...n) => {
      if (!t) return (t = !0), e(...n);
    };
  });
