// vendor/other/module-46839.js — webpack module 46839
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(12724 /* vendor/other/module-12724 */),
  i = n(77481 /* vendor/other/module-77481 */),
  s = n(72023 /* vendor/other/module-72023 */),
  a = n(32317 /* vendor/other/module-32317 */),
  c = n(34359 /* vendor/other/module-34359 */),
  u = n(89460 /* vendor/other/module-89460 */),
  l = n(43819 /* vendor/other/module-43819 */);
function d(e, t) {
  return t ? `${e} ${t}` : e;
}
function p(e) {
  let t, n;
  switch (e) {
    case "request":
      (t = a.MCP_SERVER_OP_VALUE), (n = a.MCP_FUNCTION_ORIGIN_VALUE);
      break;
    case "notification-incoming":
      (t = a.MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE),
        (n = a.MCP_NOTIFICATION_ORIGIN_VALUE);
      break;
    case "notification-outgoing":
      (t = a.MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE),
        (n = a.MCP_NOTIFICATION_ORIGIN_VALUE);
  }
  return {
    [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: t,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: n,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: a.MCP_ROUTE_SOURCE_VALUE,
  };
}
function f(e) {
  const {
      type: t,
      message: n,
      transport: o,
      extra: f,
      callback: h,
      options: g,
    } = e,
    { method: m } = n,
    _ = n.params;
  let S;
  S = "request" === t ? d(m, c.extractTargetInfo(m, _ || {}).target) : m;
  const E = {
      ...l.buildTransportAttributes(o, f),
      [a.MCP_METHOD_NAME_ATTRIBUTE]: m,
      ...s.buildTypeSpecificAttributes(t, n, _, g?.recordInputs),
      ...p(t),
    },
    y = r.getClient(),
    T = Boolean(y?.getDataCollectionOptions().userInfo),
    b = u.filterMcpPiiFromSpanData(E, T);
  return i.startSpan({ name: S, forceTransaction: !0, attributes: b }, h);
}
(t.buildMcpServerSpanConfig = function (e, t, n, o) {
  const { method: i } = e,
    f = e.params,
    h = d(i, c.extractTargetInfo(i, f || {}).target),
    g = {
      ...l.buildTransportAttributes(t, n),
      [a.MCP_METHOD_NAME_ATTRIBUTE]: i,
      ...s.buildTypeSpecificAttributes("request", e, f, o?.recordInputs),
      ...p("request"),
    },
    m = r.getClient(),
    _ = Boolean(m?.getDataCollectionOptions().userInfo),
    S = u.filterMcpPiiFromSpanData(g, _);
  return {
    name: h,
    op: a.MCP_SERVER_OP_VALUE,
    forceTransaction: !0,
    attributes: S,
  };
}),
  (t.createMcpNotificationSpan = function (e, t, n, r, o) {
    return f({
      type: "notification-incoming",
      message: e,
      transport: t,
      extra: n,
      callback: o,
      options: r,
    });
  }),
  (t.createMcpOutgoingNotificationSpan = function (e, t, n, r) {
    return f({
      type: "notification-outgoing",
      message: e,
      transport: t,
      options: n,
      callback: r,
    });
  });
