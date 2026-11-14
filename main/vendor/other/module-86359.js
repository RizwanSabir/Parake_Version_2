// vendor/other/module-86359.js — webpack module 86359
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = "db.system",
  i = "db.name",
  s = "db.operation",
  a = "db.mongodb.collection",
  c = "db.connection_string";
function u(e) {
  return JSON.stringify(l(e));
}
function l(e) {
  if (Array.isArray(e)) return e.map((e) => l(e));
  if (
    (function (e) {
      return (
        r.isObjectLike(e) &&
        !(function (e) {
          return "undefined" != typeof Buffer && Buffer.isBuffer(e);
        })(e)
      );
    })(e)
  ) {
    const t = {};
    return Object.entries(e)
      .map(([e, t]) => [e, l(t)])
      .reduce(
        (e, t) => (
          (function (e) {
            return Array.isArray(e);
          })(t) && (e[t[0]] = t[1]),
          e
        ),
        t,
      );
  }
  return "?";
}
function d(e, t, n, l, d, p, f) {
  const h = {
    [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: f,
    [o]: "mongodb",
    [i]: e,
    [a]: t,
    [s]: p,
    [c]: `mongodb://${n}:${l}/${e}`,
  };
  if (n && l) {
    h["net.peer.name"] = n;
    const e = parseInt(l, 10);
    isNaN(e) || (h["net.peer.port"] = e);
  }
  if (d)
    try {
      h["db.statement"] = u(d);
    } catch {}
  return h;
}
(t.getSpanAttributes = d),
  (t.getV3CommandOperation = function (e) {
    return void 0 !== e.createIndexes
      ? "createIndexes"
      : void 0 !== e.findandmodify
        ? "findAndModify"
        : void 0 !== e.ismaster
          ? "isMaster"
          : void 0 !== e.count
            ? "count"
            : void 0 !== e.aggregate
              ? "aggregate"
              : void 0;
  }),
  (t.getV3SpanAttributes = function (e, t, n, r, o) {
    let i, s;
    if (
      t?.s &&
      ((i = t.s.options?.host ?? t.s.host),
      (s = (t.s.options?.port ?? t.s.port)?.toString()),
      null == i || null == s)
    ) {
      const e = t.description?.address;
      if (e) {
        const t = e.split(":");
        (i = t[0]), (s = t[1]);
      }
    }
    const [a, c] = e.toString().split(".");
    return d(a, c, i, s, n?.query ?? n?.q ?? n, r, o);
  }),
  (t.getV4SpanAttributes = function (e, t, n, r, o) {
    let i, s, a;
    if (e) {
      const t = "string" == typeof e.address ? e.address.split(":") : "";
      2 === t.length && ((i = t[0]), (s = t[1]));
    }
    return (
      (a = n?.documents?.[0] ? n.documents[0] : n?.cursors ? n.cursors : n),
      d(t.db, t.collection, i, s, a, r, o)
    );
  }),
  (t.serializeDbStatement = u),
  (t.startMongoSpan = function (e) {
    return r.startInactiveSpan({
      name: `mongodb.${e[s] || "command"}`,
      op: "db",
      kind: r.SPAN_KIND.CLIENT,
      attributes: e,
    });
  });
