// vendor/other/module-65672.js — webpack module 65672
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(9426 /* vendor/other/module-9426 */),
  i = n(6932 /* vendor/other/module-6932 */),
  s = n(72968 /* vendor/other/module-72968 */),
  a = n(88516 /* vendor/other/module-88516 */),
  c = "auto.db.otel.postgres";
function u(e, t) {
  if (!t) return i.SpanNames.QUERY_PREFIX;
  const n = "string" == typeof t.name && t.name ? t.name : l(t.text);
  return `${i.SpanNames.QUERY_PREFIX}:${n}${e ? ` ${e}` : ""}`;
}
function l(e) {
  const t = e.trim(),
    n = t.indexOf(" ");
  let r = -1 === n ? t : t.slice(0, n);
  return (r = r.toUpperCase()), r.endsWith(";") ? r.slice(0, -1) : r;
}
function d(e) {
  try {
    const t = new URL(e);
    return (t.username = ""), (t.password = ""), t.toString();
  } catch {
    return "postgresql://localhost:5432/";
  }
}
function p(e) {
  return "connectionString" in e && e.connectionString
    ? d(e.connectionString)
    : `postgresql://${e.host || "localhost"}:${e.port || 5432}/${e.database || ""}`;
}
function f(e) {
  if (Number.isInteger(e)) return e;
}
function h(e) {
  return {
    [a.DB_SYSTEM]: s.DB_SYSTEM_VALUE_POSTGRESQL,
    [a.DB_NAME]: e.database,
    [s.ATTR_DB_CONNECTION_STRING]: p(e),
    [a.DB_USER]: e.user,
    [a.NET_PEER_NAME]: e.host,
    [a.NET_PEER_PORT]: f(e.port),
  };
}
(t.ORIGIN = c),
  (t.getConnectionString = p),
  (t.getErrorMessage = function (e) {
    return "object" == typeof e && null !== e && "message" in e
      ? String(e.message)
      : void 0;
  }),
  (t.getQuerySpanName = u),
  (t.getSemanticAttributesFromConnection = h),
  (t.getSemanticAttributesFromPoolConnection = function (e) {
    let t;
    try {
      t = e.connectionString ? new URL(e.connectionString) : void 0;
    } catch {
      t = void 0;
    }
    return {
      [o.AttributeNames.IDLE_TIMEOUT_MILLIS]: e.idleTimeoutMillis,
      [o.AttributeNames.MAX_CLIENT]: e.maxClient,
      [a.DB_SYSTEM]: s.DB_SYSTEM_VALUE_POSTGRESQL,
      [a.DB_NAME]: t?.pathname.slice(1) ?? e.database,
      [s.ATTR_DB_CONNECTION_STRING]: p(e),
      [a.NET_PEER_NAME]: t?.hostname ?? e.host,
      [a.NET_PEER_PORT]: Number(t?.port) || f(e.port),
      [a.DB_USER]: t?.username ?? e.user,
    };
  }),
  (t.handleConfigQuery = function (e) {
    const { connectionParameters: t } = this,
      n = u(t.database, e),
      i = r.startInactiveSpan({
        name: n,
        kind: r.SPAN_KIND.CLIENT,
        attributes: {
          ...h(t),
          [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c,
        },
      });
    return e
      ? (e.text && i.setAttribute(a.DB_STATEMENT, e.text),
        "string" == typeof e.name &&
          i.setAttribute(o.AttributeNames.PG_PLAN, e.name),
        i)
      : i;
  }),
  (t.isObjectWithTextString = function (e) {
    return "object" == typeof e && "string" == typeof e?.text;
  }),
  (t.parseAndMaskConnectionString = d),
  (t.parseNormalizedOperationName = l),
  (t.patchCallback = function (e, t) {
    return function (n, o) {
      n &&
        e.setStatus({
          code: r.SPAN_STATUS_ERROR,
          message: n.message,
        }),
        e.end(),
        t.call(this, n, o);
    };
  }),
  (t.patchCallbackPGPool = function (e, t) {
    return function (n, o, i) {
      n &&
        e.setStatus({
          code: r.SPAN_STATUS_ERROR,
          message: n.message,
        }),
        e.end(),
        t.call(this, n, o, i);
    };
  }),
  (t.patchClientConnectCallback = function (e, t) {
    return function (...n) {
      const o = n[0];
      o instanceof Error &&
        e.setStatus({
          code: r.SPAN_STATUS_ERROR,
          message: o.message,
        }),
        e.end(),
        t.apply(this, n);
    };
  }),
  (t.shouldSkipInstrumentation = function () {
    return void 0 === r.getActiveSpan();
  });
