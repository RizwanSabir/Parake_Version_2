// vendor/other/module-31391.js — webpack module 31391
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(37766 /* vendor/other/module-37766 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(3653 /* vendor/other/module-3653 */);
function s(e, t, n = !1) {
  if ("function" != typeof t || t[i.GRAPHQL_PATCHED_SYMBOL]) return t;
  function r(r, s, d, p) {
    if (!t) return;
    const f = d ?? {};
    if (
      e().ignoreTrivialResolveSpans &&
      n &&
      (o.isObjectLike(r) || "function" == typeof r) &&
      "function" != typeof r[p.fieldName]
    )
      return t.call(this, r, s, f, p);
    if (!f[i.GRAPHQL_DATA_SYMBOL]) return t.call(this, r, s, f, p);
    const h = (function (e) {
        const t = [];
        let n = e;
        for (; n; ) t.push(String(n.key)), (n = n.prev);
        return t.reverse();
      })(p.path),
      { field: g, spanAdded: m } = (function (e, t, n) {
        const r = u(e, n);
        if (r) return { field: r, spanAdded: !1 };
        const o = { span: c(t, n, l(e, n)) };
        return (
          (function (e, t, n) {
            const r = e[i.GRAPHQL_DATA_SYMBOL];
            r && (r.fields[t.join(".")] = n);
          })(e, n, o),
          { field: o, spanAdded: !0 }
        );
      })(f, p, h),
      _ = g.span;
    return o.withActiveSpan(_, () => {
      try {
        const n = t.call(this, r, s, f, p);
        return (
          (e = n),
          "function" == typeof e?.then
            ? n.then(
                (e) => (a(_, m), e),
                (e) => {
                  throw (a(_, m, e), e);
                },
              )
            : (a(_, m), n)
        );
      } catch (e) {
        throw (a(_, m, e), e);
      }
      var e;
    });
  }
  return (r[i.GRAPHQL_PATCHED_SYMBOL] = !0), r;
}
function a(e, t, n) {
  t &&
    (n && e.setStatus({ code: o.SPAN_STATUS_ERROR, message: n.message }),
    e.end());
}
function c(e, t, n) {
  const s = {
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: i.ORIGIN,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: r.WEB_SERVER_GRAPHQL_SPAN_OP,
    [i.GRAPHQL_FIELD_NAME]: e.fieldName,
    [i.GRAPHQL_FIELD_PATH]: t.join("."),
    [i.GRAPHQL_FIELD_TYPE]: e.returnType.toString(),
    [i.GRAPHQL_PARENT_NAME]: e.parentType.name,
  };
  return o.startInactiveSpan({
    name: `${i.SPAN_NAME_RESOLVE} ${t.join(".")}`,
    attributes: s,
    parentSpan: n,
  });
}
function u(e, t) {
  return e[i.GRAPHQL_DATA_SYMBOL]?.fields[t.join(".")];
}
function l(e, t) {
  for (let n = t.length - 1; n > 0; n--) {
    const r = u(e, t.slice(0, n));
    if (r) return r.span;
  }
  return e[i.GRAPHQL_DATA_SYMBOL]?.span;
}
function d(e) {
  return "ofType" in e && e.ofType
    ? d(e.ofType)
    : (function (e) {
          return "getTypes" in e && "function" == typeof e.getTypes;
        })(e)
      ? e.getTypes()
      : (function (e) {
            return "getFields" in e && "function" == typeof e.getFields;
          })(e)
        ? [e]
        : [];
}
(t.getOperation = function (e, t) {
  const n = e?.definitions;
  if (!n || !Array.isArray(n)) return;
  const r = (e) =>
    !!e?.operation &&
    -1 !== ["query", "mutation", "subscription"].indexOf(e.operation);
  return t ? n.filter(r).find((e) => t === e?.name?.value) : n.find(r);
}),
  (t.wrapFieldResolver = s),
  (t.wrapFields = function e(t, n) {
    if (!t || t[i.GRAPHQL_PATCHED_SYMBOL]) return;
    t[i.GRAPHQL_PATCHED_SYMBOL] = !0;
    const r = t.getFields();
    Object.keys(r).forEach((t) => {
      const o = r[t];
      if (o && (o.resolve && (o.resolve = s(n, o.resolve)), o.type))
        for (const t of d(o.type)) e(t, n);
    });
  });
