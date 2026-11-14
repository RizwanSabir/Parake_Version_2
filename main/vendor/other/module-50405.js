// vendor/other/module-50405.js — webpack module 50405
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(37766 /* vendor/other/module-37766 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(12417 /* vendor/other/module-12417 */),
  a = n(81758 /* vendor/other/module-81758 */),
  c = "graphql:parse",
  u = "graphql:validate",
  l = "graphql:execute",
  d = "graphql:subscribe",
  p = "graphql:resolve",
  f = "auto.graphql.diagnostic_channel",
  h = "graphql.field.name",
  g = "graphql.field.path",
  m = "graphql.field.type",
  _ = "graphql.parent.name";
function S(e) {
  s.bindTracingChannelToSpan(e(c), () =>
    i.startInactiveSpan({
      name: "graphql.parse",
      attributes: {
        [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: f,
        [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: o.WEB_SERVER_GRAPHQL_SPAN_OP,
      },
    }),
  );
}
function E(e) {
  s.bindTracingChannelToSpan(
    e(u),
    (e) =>
      i.startInactiveSpan({
        name: "graphql.validate",
        attributes: {
          [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: f,
          [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: o.WEB_SERVER_GRAPHQL_SPAN_OP,
          [r.GRAPHQL_DOCUMENT]: a.collectGraphqlDocument(e.document),
        },
      }),
    {
      beforeSpanEnd: (e, t) => {
        Array.isArray(t.result) &&
          t.result.length > 0 &&
          e.setStatus({
            code: i.SPAN_STATUS_ERROR,
            message: "invalid_argument",
          });
      },
    },
  );
}
function y(e, t, n, c) {
  s.bindTracingChannelToSpan(
    e(t),
    (e) => {
      const t = i.startInactiveSpan({
        name: a.getOperationSpanName(e.operationType, e.operationName, n),
        attributes: {
          [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: f,
          [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: o.WEB_SERVER_GRAPHQL_SPAN_OP,
          [r.GRAPHQL_OPERATION_TYPE]: e.operationType,
          [r.GRAPHQL_OPERATION_NAME]: e.operationName || void 0,
          [r.GRAPHQL_DOCUMENT]: a.collectGraphqlDocument(e.document),
        },
      });
      return (
        c &&
          e.operationType &&
          a.renameRootSpanWithOperation(t, e.operationType, e.operationName),
        t
      );
    },
    {
      beforeSpanEnd: (e, t) => {
        a.hasResultErrors(t.result) &&
          e.setStatus({
            code: i.SPAN_STATUS_ERROR,
            message: "internal_error",
          });
      },
    },
  );
}
function T(e, t) {
  s.bindTracingChannelToSpan(e(p), (e) => {
    if (!t || !e.isDefaultResolver)
      return i.startInactiveSpan({
        name: `graphql.resolve ${e.fieldPath}`,
        attributes: {
          [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: f,
          [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: o.WEB_SERVER_GRAPHQL_SPAN_OP,
          [h]: e.fieldName,
          [g]: e.fieldPath,
          [m]: e.fieldType,
          [_]: e.parentType,
        },
      });
  });
}
(t.GRAPHQL_DC_CHANNEL_EXECUTE = l),
  (t.GRAPHQL_DC_CHANNEL_PARSE = c),
  (t.GRAPHQL_DC_CHANNEL_RESOLVE = p),
  (t.GRAPHQL_DC_CHANNEL_SUBSCRIBE = d),
  (t.GRAPHQL_DC_CHANNEL_VALIDATE = u),
  (t.subscribeGraphqlDiagnosticChannels = function (e, t = {}) {
    const n = !1 !== t.ignoreResolveSpans,
      r = !1 !== t.ignoreTrivialResolveSpans,
      o = !1 !== t.useOperationNameForRootSpan;
    S(e),
      E(e),
      y(e, l, "graphql.execute", o),
      y(e, d, "graphql.subscribe", o),
      n || T(e, r);
  });
