// vendor/other/module-81758.js — webpack module 81758
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = "original-description",
  s = new Set(["Int", "Float", "String", "BlockString"]);
(t.collectGraphqlDocument = function (e) {
  if (!0 === o.getClient()?.getDataCollectionOptions().graphQL.document)
    return (function (e) {
      const t = e?.loc,
        n = t?.source?.body;
      if ("string" == typeof n && t?.startToken)
        try {
          const e = [];
          for (let n = t.startToken; n; n = n.next)
            s.has(n.kind) &&
              e.push({ start: n.start, end: n.end, kind: n.kind });
          let r = n;
          for (let t = e.length - 1; t >= 0; t--) {
            const { start: n, end: o, kind: i } = e[t],
              s = "String" === i || "BlockString" === i ? '"*"' : "*";
            r = r.slice(0, n) + s + r.slice(o);
          }
          return r;
        } catch {
          return;
        }
    })(e);
}),
  (t.getOperationSpanName = function (e, t, n) {
    return e && t ? `${e} ${t}` : e || n;
  }),
  (t.hasResultErrors = function (e) {
    if (o.isObjectLike(e) && "errors" in e) {
      const t = e.errors;
      return Array.isArray(t) && t.length > 0;
    }
    return !1;
  }),
  (t.renameRootSpanWithOperation = function (e, t, n) {
    const s = o.getRootSpan(e);
    if (s === e) return;
    const a = o.spanToJSON(s),
      c = n ? `${t} ${n}` : t,
      u = a.data[r.SENTRY_GRAPHQL_OPERATION];
    let l;
    (l = Array.isArray(u) ? [...u, c] : "string" == typeof u ? [u, c] : c),
      s.setAttribute(r.SENTRY_GRAPHQL_OPERATION, l);
    const d = a.data[i] ?? a.description;
    a.data[i] || s.setAttribute(i, d),
      s.updateName(
        `${d} (${(function (e) {
          if (Array.isArray(e)) {
            const t = e.slice().sort();
            return t.length <= 5
              ? t.join(", ")
              : `${t.slice(0, 5).join(", ")}, +${t.length - 5}`;
          }
          return e;
        })(l)})`,
      );
  });
