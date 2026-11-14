// vendor/other/module-8084.js — webpack module 8084
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(76414 /* vendor/other/module-76414 */),
  i = n(88516 /* vendor/other/module-88516 */);
function s(e) {
  if (l(e)) return `persisted ${e.operationName}`;
  if (u(e)) {
    const { query: t, operationName: n } = e,
      { operationName: r = n, operationType: o } = c(t);
    return r ? `${o} ${r}` : `${o}`;
  }
  return "unknown";
}
function a(e) {
  let t;
  if ("xhr" in e) {
    const n = e.xhr[o.SENTRY_XHR_DATA_KEY];
    t = n && o.getBodyString(n.body)[0];
  } else {
    const n = o.getFetchRequestArgBody(e.input);
    t = o.getBodyString(n)[0];
  }
  return t;
}
function c(e) {
  const t = e.match(
    /^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/,
  );
  if (t) return { operationType: t[1], operationName: t[2] };
  const n = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
  return n
    ? { operationType: n[1], operationName: void 0 }
    : { operationType: void 0, operationName: void 0 };
}
function u(e) {
  return r.isObjectLike(e) && "string" == typeof e.query;
}
function l(e) {
  return (
    r.isObjectLike(e) &&
    "string" == typeof e.operationName &&
    r.isObjectLike(e.extensions) &&
    r.isObjectLike(e.extensions.persistedQuery) &&
    "string" == typeof e.extensions.persistedQuery.sha256Hash &&
    "number" == typeof e.extensions.persistedQuery.version
  );
}
function d(e) {
  try {
    const t = JSON.parse(e);
    return u(t) || l(t) ? t : void 0;
  } catch {
    return;
  }
}
const p = r.defineIntegration((e) => ({
  name: "GraphQLClient",
  setup(t) {
    !(function (e, t) {
      e.on("beforeOutgoingRequestSpan", (n, o) => {
        const c = r.spanToJSON(n).data || {};
        if ("http.client" !== c[r.SEMANTIC_ATTRIBUTE_SENTRY_OP]) return;
        const p = c[i.URL_FULL] || c["http.url"] || c.url,
          f = c[r.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] || c["http.method"];
        if (!r.isString(p) || !r.isString(f)) return;
        const { endpoints: h } = t,
          g = r.stringMatchesSomePattern(p, h),
          m = a(o);
        if (g && m) {
          const t = d(m);
          if (t) {
            const r = s(t);
            n.updateName(`${f} ${p} (${r})`),
              u(t) &&
                !0 === e.getDataCollectionOptions().graphQL.document &&
                n.setAttribute(i.GRAPHQL_DOCUMENT, t.query),
              l(t) &&
                (n.setAttribute(
                  "graphql.persisted_query.hash.sha256",
                  t.extensions.persistedQuery.sha256Hash,
                ),
                n.setAttribute(
                  "graphql.persisted_query.version",
                  t.extensions.persistedQuery.version,
                ));
          }
        }
      });
    })(t, e),
      (function (e, t) {
        e.on("beforeOutgoingRequestBreadcrumb", (n, o) => {
          const { category: c, type: p, data: f } = n;
          if ("http" === p && ("fetch" === c || "xhr" === c)) {
            const n = f?.url,
              { endpoints: c } = t,
              p = r.stringMatchesSomePattern(n, c),
              h = a(o);
            if (p && f && h) {
              const t = d(h);
              if (!f.graphql && t) {
                const n = s(t);
                (f["graphql.operation"] = n),
                  u(t) &&
                    !0 === e.getDataCollectionOptions().graphQL.document &&
                    (f[i.GRAPHQL_DOCUMENT] = t.query),
                  l(t) &&
                    ((f["graphql.persisted_query.hash.sha256"] =
                      t.extensions.persistedQuery.sha256Hash),
                    (f["graphql.persisted_query.version"] =
                      t.extensions.persistedQuery.version));
              }
            }
          }
        });
      })(t, e);
  },
}));
(t._getGraphQLOperation = s),
  (t.getGraphQLRequestPayload = d),
  (t.getRequestPayloadXhrOrFetch = a),
  (t.graphqlClientIntegration = p),
  (t.parseGraphQLQuery = c);
