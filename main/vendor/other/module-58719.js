// vendor/other/module-58719.js — webpack module 58719
// params: (e, t) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  (t.getConfig = function (e) {
    const t = e?.connectionConfig || e || {},
      { host: n, port: r, database: o, user: i } = t;
    return { host: n, port: r, database: o, user: i };
  }),
  (t.getDbQueryText = function (e) {
    return "string" == typeof e ? e : e.sql;
  }),
  (t.getJDBCString = function (e, t, n) {
    let r = `jdbc:mysql://${e || "localhost"}`;
    return (
      "number" == typeof t && (r += `:${t}`),
      "string" == typeof n && (r += `/${n}`),
      r
    );
  }),
  (t.getSpanName = function (e) {
    const t = "object" == typeof e ? e.sql : e,
      n = t?.indexOf(" ");
    return "number" == typeof n && -1 !== n ? t?.substring(0, n) : t;
  });
