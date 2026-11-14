// vendor/other/module-34369.js — webpack module 34369
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = "db.mongodb.collection",
  i = "db.name",
  s = "db.user",
  a = "net.peer.name",
  c = "net.peer.port",
  u = "db.operation",
  l = "db.system";
t.startMongooseLegacySpan = function ({
  collection: e,
  modelName: t,
  operation: n,
  origin: d,
  parentSpan: p,
}) {
  const f = {
    [o]: e?.name,
    [i]: e?.conn?.name,
    [s]: e?.conn?.user,
    [a]: e?.conn?.host,
    [c]: e?.conn?.port,
    [u]: n,
    [l]: "mongoose",
    [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: d,
  };
  return r.startInactiveSpan({
    name: `mongoose.${t}.${n}`,
    op: "db",
    kind: r.SPAN_KIND.CLIENT,
    attributes: f,
    parentSpan: p,
  });
};
