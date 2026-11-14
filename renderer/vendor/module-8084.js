// vendor/module-8084.js — webpack module 8084
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(76414 /* vendor/module-76414 */),
  i = n(88516 /* vendor/module-88516 */);
function a(e) {
  if (u(e)) return `persisted ${e.operationName}`;
  if (c(e)) {
    const { query: t, operationName: n } = e,
      { operationName: r = n, operationType: o } = l(t);
    return r ? `${o} ${r}` : `${o}`;
  }
  return "unknown";
}
function s(e) {
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
function l(e) {
  const t = e.match(
    /^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/,
  );
  if (t) return { operationType: t[1], operationName: t[2] };
  const n = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
  return n
    ? { operationType: n[1], operationName: void 0 }
    : { operationType: void 0, operationName: void 0 };
}
function c(e) {
  return r.isObjectLike(e) && "string" == typeof e.query;
}
function u(e) {
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
    return c(t) || u(t) ? t : void 0;
  } catch {
    return;
  }
}
const p = r.defineIntegration((e) => ({
  name: "GraphQLClient",
  setup(t) {
    !(function (e, t) {
      e.on("beforeOutgoingRequestSpan", (n, o) => {
        const l = r.spanToJSON(n).data || {};
        if ("http.client" !== l[r.SEMANTIC_ATTRIBUTE_SENTRY_OP]) return;
        const p = l[i.URL_FULL] || l["http.url"] || l.url,
          f = l[r.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] || l["http.method"];
        if (!r.isString(p) || !r.isString(f)) return;
        const { endpoints: h } = t,
          m = r.stringMatchesSomePattern(p, h),
          g = s(o);
        if (m && g) {
          const t = d(g);
          if (t) {
            const r = a(t);
            n.updateName(`${f} ${p} (${r})`),
              c(t) &&
                !0 === e.getDataCollectionOptions().graphQL.document &&
                n.setAttribute(i.GRAPHQL_DOCUMENT, t.query),
              u(t) &&
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
          const { category: l, type: p, data: f } = n;
          if ("http" === p && ("fetch" === l || "xhr" === l)) {
            const n = f?.url,
              { endpoints: l } = t,
              p = r.stringMatchesSomePattern(n, l),
              h = s(o);
            if (p && f && h) {
              const t = d(h);
              if (!f.graphql && t) {
                const n = a(t);
                (f["graphql.operation"] = n),
                  c(t) &&
                    !0 === e.getDataCollectionOptions().graphQL.document &&
                    (f[i.GRAPHQL_DOCUMENT] = t.query),
                  u(t) &&
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
(t._getGraphQLOperation = a),
  (t.getGraphQLRequestPayload = d),
  (t.getRequestPayloadXhrOrFetch = s),
  (t.graphqlClientIntegration = p),
  (t.parseGraphQLQuery = l);
