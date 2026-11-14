// vendor/other/module-77541.js — webpack module 77541
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(87877 /* vendor/other/module-87877 */),
  o = new Map([
    ["sqlite3", r.DB_SYSTEM_NAME_VALUE_SQLITE],
    ["pg", r.DB_SYSTEM_NAME_VALUE_POSTGRESQL],
  ]),
  i = (e) => {
    const t = e?._single?.table;
    return "object" == typeof t ? i(t) : t;
  };
(t.extractDatabaseFromConnectionString = (e) => {
  if (e)
    try {
      const t = new URL(e).pathname?.replace(/^\//, "");
      return t || void 0;
    } catch {
      return;
    }
}),
  (t.extractHostFromConnectionString = (e) => {
    if (e)
      try {
        return new URL(e).hostname || void 0;
      } catch {
        return;
      }
  }),
  (t.extractPortFromConnectionString = (e) => {
    if (e)
      try {
        const t = new URL(e).port;
        return t ? parseInt(t, 10) : void 0;
      } catch {
        return;
      }
  }),
  (t.extractTableName = i),
  (t.getFormatter = (e) => {
    if (e) {
      if (e.client) {
        if (e.client._formatQuery) return e.client._formatQuery.bind(e.client);
        if (e.client.SqlString)
          return e.client.SqlString.format.bind(e.client.SqlString);
      }
      if (e.builder) return e.builder.toString.bind(e.builder);
    }
    return () => "<noop formatter>";
  }),
  (t.getName = (e, t, n) => (t ? (n ? `${t} ${e}.${n}` : `${t} ${e}`) : e)),
  (t.limitLength = (e, t) =>
    "string" == typeof e && "number" == typeof t && 0 < t && t < e.length
      ? `${e.substring(0, t)}..`
      : e),
  (t.mapSystem = (e) => o.get(e) || e);
