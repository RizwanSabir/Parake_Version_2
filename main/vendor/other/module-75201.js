// vendor/other/module-75201.js — webpack module 75201
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(37766 /* vendor/other/module-37766 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(81758 /* vendor/other/module-81758 */),
  a = n(3653 /* vendor/other/module-3653 */),
  c = n(31391 /* vendor/other/module-31391 */),
  u = {
    [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: a.ORIGIN,
    [i.SEMANTIC_ATTRIBUTE_SENTRY_OP]: o.WEB_SERVER_GRAPHQL_SPAN_OP,
  };
(t.finalizeExecuteSpan = function (e, t) {
  s.hasResultErrors(t) &&
    e.setStatus({
      code: i.SPAN_STATUS_ERROR,
      message: "internal_error",
    });
}),
  (t.finalizeValidateSpan = function (e, t) {
    Array.isArray(t) &&
      t.length > 0 &&
      e.setStatus({
        code: i.SPAN_STATUS_ERROR,
        message: "invalid_argument",
      });
  }),
  (t.startExecuteSpan = function (e, t, n, o) {
    const l = (function (e) {
        if (e.length >= 2)
          return {
            schema: e[0],
            document: e[1],
            contextValue: e[3] ?? {},
            operationName: e[5],
            fieldResolver: e[6],
            writeBack: (t, n) => {
              (e[3] = t), (e[6] = n);
            },
          };
        const t = e[0] ?? {};
        return {
          schema: t.schema,
          document: t.document,
          contextValue: t.contextValue ?? {},
          operationName: t.operationName,
          fieldResolver: t.fieldResolver,
          writeBack: (e, n) => {
            (t.contextValue = e), (t.fieldResolver = n);
          },
        };
      })(e),
      { schema: d, document: p } = l;
    let { contextValue: f, fieldResolver: h } = l;
    const g = !!f[a.GRAPHQL_DATA_SYMBOL];
    if (!n.ignoreResolveSpans && !g) {
      const e = null == h,
        n = t?.defaultFieldResolver,
        r = h ?? n;
      r && (h = c.wrapFieldResolver(o, r, e)),
        d &&
          (c.wrapFields(d.getQueryType(), o),
          c.wrapFields(d.getMutationType(), o));
    }
    const m = c.getOperation(p, l.operationName),
      _ = m?.operation,
      S = m?.name?.value ?? l.operationName ?? void 0,
      E = i.startInactiveSpan({
        name: s.getOperationSpanName(_, S || void 0, a.SPAN_NAME_EXECUTE),
        attributes: {
          ...u,
          [r.GRAPHQL_OPERATION_TYPE]: _,
          [r.GRAPHQL_OPERATION_NAME]: S || void 0,
          [r.GRAPHQL_DOCUMENT]: s.collectGraphqlDocument(p),
        },
      });
    return (
      n.useOperationNameForRootSpan &&
        _ &&
        s.renameRootSpanWithOperation(E, _, S || void 0),
      (f[a.GRAPHQL_DATA_SYMBOL] = { source: p, span: E, fields: {} }),
      l.writeBack(f, h),
      E
    );
  }),
  (t.startParseSpan = function () {
    return i.startInactiveSpan({
      name: a.SPAN_NAME_PARSE,
      attributes: { ...u },
    });
  }),
  (t.startValidateSpan = function (e) {
    return i.startInactiveSpan({
      name: a.SPAN_NAME_VALIDATE,
      attributes: {
        ...u,
        [r.GRAPHQL_DOCUMENT]: s.collectGraphqlDocument(e),
      },
    });
  });
