// vendor/other/module-77198.js — webpack module 77198
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(15006 /* vendor/other/module-15006 */),
  i = n(83044 /* vendor/other/module-83044 */),
  s = n(11190 /* vendor/other/module-11190 */),
  a = Object.values(o.AllowedOperationTypes),
  c = (e) => "function" == typeof e?.then;
function u(e, t, n, o) {
  if (!0 === r.getClient()?.getDataCollectionOptions().graphQL.document) {
    const r = m(t, n, o);
    e.setAttribute(i.AttributeNames.SOURCE, r);
  }
}
function l(e, t, n, a) {
  const c = {
      [i.AttributeNames.FIELD_NAME]: t.fieldName,
      [i.AttributeNames.FIELD_PATH]: n.join("."),
      [i.AttributeNames.FIELD_TYPE]: t.returnType.toString(),
      [i.AttributeNames.PARENT_NAME]: t.parentType.name,
    },
    l = r.startInactiveSpan({
      name: `${o.SpanNames.RESOLVE} ${c[i.AttributeNames.FIELD_PATH]}`,
      attributes: c,
      parentSpan: a,
    }),
    d = e[s.OTEL_GRAPHQL_DATA_SYMBOL].source,
    p = t.fieldNodes.find((e) => "Field" === e.kind);
  return p && u(l, d.loc, p.loc?.start, p.loc?.end), l;
}
function d(e, t) {
  return e[s.OTEL_GRAPHQL_DATA_SYMBOL].fields[t.join(".")];
}
function p(e) {
  return h("\n", e);
}
function f(e) {
  return h(" ", e);
}
function h(e, t) {
  let n = "";
  for (let r = 0; r < t; r++) n += e;
  return n;
}
const g = [
  o.TokenKind.FLOAT,
  o.TokenKind.STRING,
  o.TokenKind.INT,
  o.TokenKind.BLOCK_STRING,
];
function m(e, t, n) {
  let r = "";
  if (e?.startToken) {
    const i = "number" == typeof t ? t : e.start,
      s = "number" == typeof n ? n : e.end;
    let a = e.startToken.next,
      c = 1;
    for (; a; ) {
      if (a.start < i) {
        (a = a.next), (c = a?.line);
        continue;
      }
      if (a.end > s) {
        (a = a.next), (c = a?.line);
        continue;
      }
      let e = a.value || a.kind,
        t = "";
      g.indexOf(a.kind) >= 0 && (e = "*"),
        a.kind === o.TokenKind.STRING && (e = `"${e}"`),
        a.kind === o.TokenKind.EOF && (e = ""),
        a.line > c
          ? ((r += p(a.line - c)), (c = a.line), (t = f(a.column - 1)))
          : a.line === a.prev?.line && (t = f(a.start - (a.prev?.end || 0))),
        (r += t + e),
        a && (a = a.next);
    }
  }
  return r;
}
function _(e) {
  return "ofType" in e
    ? _(e.ofType)
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
const S = (e, t, n) => {
    n &&
      (e.setStatus({ code: r.SPAN_STATUS_ERROR, message: t.message }), e.end());
  },
  E = (e, t) => {
    t && e.end();
  };
function y(e, t, n = !1) {
  if (o[s.OTEL_PATCHED_SYMBOL] || "function" != typeof t) return t;
  function o(o, i, a, u) {
    if (!t) return;
    if (
      e().ignoreTrivialResolveSpans &&
      n &&
      (r.isObjectLike(o) || "function" == typeof o) &&
      "function" != typeof o[u.fieldName]
    )
      return t.call(this, o, i, a, u);
    if (!a[s.OTEL_GRAPHQL_DATA_SYMBOL]) return t.call(this, o, i, a, u);
    const p = (function (e) {
        const t = [];
        let n = e;
        for (; n; ) t.push(String(n.key)), (n = n.prev);
        return t.reverse();
      })(u?.path),
      { field: f, spanAdded: h } = (function (e, t, n) {
        let r = d(e, n);
        if (r) return { field: r, spanAdded: !1 };
        const o = (function (e, t) {
          for (let n = t.length - 1; n > 0; n--) {
            const r = d(e, t.slice(0, n));
            if (r) return r.span;
          }
          return (function (e) {
            return e[s.OTEL_GRAPHQL_DATA_SYMBOL].span;
          })(e);
        })(e, n);
        return (
          (r = { span: l(e, t, n, o) }),
          (function (e, t, n) {
            e[s.OTEL_GRAPHQL_DATA_SYMBOL].fields[t.join(".")] = n;
          })(e, n, r),
          { field: r, spanAdded: !0 }
        );
      })(a, u, p),
      g = f.span,
      m = h;
    return r.withActiveSpan(g, () => {
      try {
        const e = t.call(this, o, i, a, u);
        return c(e)
          ? e.then(
              (e) => (E(g, m), e),
              (e) => {
                throw (S(g, e, m), e);
              },
            )
          : (E(g, m), e);
      } catch (e) {
        throw (S(g, e, m), e);
      }
    });
  }
  return (o[s.OTEL_PATCHED_SYMBOL] = !0), o;
}
(t.addSpanSource = u),
  (t.endSpan = function (e, t) {
    t && e.setStatus({ code: r.SPAN_STATUS_ERROR, message: t.message }),
      e.end();
  }),
  (t.getOperation = function (e, t) {
    if (e && Array.isArray(e.definitions))
      return t
        ? e.definitions
            .filter((e) => -1 !== a.indexOf(e?.operation))
            .find((e) => t === e?.name?.value)
        : e.definitions.find((e) => -1 !== a.indexOf(e?.operation));
  }),
  (t.getSourceFromLocation = m),
  (t.isPromise = c),
  (t.wrapFieldResolver = y),
  (t.wrapFields = function e(t, n) {
    if (!t || t[s.OTEL_PATCHED_SYMBOL]) return;
    const r = t.getFields();
    (t[s.OTEL_PATCHED_SYMBOL] = !0),
      Object.keys(r).forEach((t) => {
        const o = r[t];
        if (o && (o.resolve && (o.resolve = y(n, o.resolve)), o.type)) {
          const t = _(o.type);
          for (const r of t) e(r, n);
        }
      });
  });
