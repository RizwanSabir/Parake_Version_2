// vendor/other/module-61337.js — webpack module 61337
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(12417 /* vendor/other/module-12417 */),
  a = "mongoose:query",
  c = "mongoose:aggregate",
  u = "mongoose:model:save",
  l = "mongoose:model:insertMany",
  d = "mongoose:model:bulkWrite",
  p = "mongoose:cursor:next";
let f = !1;
function h(e, t) {
  s.bindTracingChannelToSpan(e(t), (e) => {
    const t = e.collection,
      n = (function (e) {
        if (null != e)
          try {
            const t = g(e, 0),
              n = JSON.stringify(t);
            return null == n || "{}" === n || "[]" === n ? void 0 : n;
          } catch {
            return;
          }
      })(e.args?.pipeline ?? e.args?.filter),
      i = (function (e) {
        const t = e.args,
          n =
            "insertMany" === e.operation
              ? t?.docs
              : "bulkWrite" === e.operation
                ? t?.ops
                : void 0;
        return Array.isArray(n) && n.length > 1 ? n.length : void 0;
      })(e);
    return o.startInactiveSpan({
      name: t ? `mongoose.${t}.${e.operation}` : `mongoose.${e.operation}`,
      attributes: {
        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
          "auto.db.mongoose.diagnostic_channel",
        [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "db",
        [r.DB_SYSTEM_NAME]: "mongodb",
        [r.DB_OPERATION_NAME]: e.operation,
        [r.DB_COLLECTION_NAME]: t ?? void 0,
        [r.DB_NAMESPACE]: e.database ?? void 0,
        [r.DB_QUERY_TEXT]: n ?? void 0,
        [r.DB_OPERATION_BATCH_SIZE]: i ?? void 0,
        [r.SERVER_ADDRESS]: e.serverAddress ?? void 0,
        [r.SERVER_PORT]: e.serverPort ?? void 0,
      },
    });
  });
}
function g(e, t) {
  if (t > 10) return "?";
  if (Array.isArray(e)) return e.map((e) => g(e, t + 1));
  if (o.isObjectLike(e)) {
    const n = {};
    for (const r of Object.keys(e)) n[r] = g(e[r], t + 1);
    return n;
  }
  return "?";
}
(t.MONGOOSE_DC_CHANNEL_AGGREGATE = c),
  (t.MONGOOSE_DC_CHANNEL_CURSOR_NEXT = p),
  (t.MONGOOSE_DC_CHANNEL_MODEL_BULK_WRITE = d),
  (t.MONGOOSE_DC_CHANNEL_MODEL_INSERT_MANY = l),
  (t.MONGOOSE_DC_CHANNEL_MODEL_SAVE = u),
  (t.MONGOOSE_DC_CHANNEL_QUERY = a),
  (t.subscribeMongooseDiagnosticChannels = function (e) {
    if (!f) {
      f = !0;
      try {
        h(e, a), h(e, c), h(e, u), h(e, l), h(e, d), h(e, p);
      } catch {
        i.DEBUG_BUILD &&
          o.debug.log("Mongoose node:diagnostics_channel subscription failed.");
      }
    }
  });
