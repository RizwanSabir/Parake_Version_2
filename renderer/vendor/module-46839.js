// vendor/module-46839.js — webpack module 46839
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(77481 /* vendor/module-77481 */),
  a = n(72023 /* vendor/module-72023 */),
  s = n(32317 /* vendor/module-32317 */),
  l = n(34359 /* vendor/module-34359 */),
  c = n(89460 /* vendor/module-89460 */),
  u = n(43819 /* vendor/module-43819 */);
function d(e, t) {
  return t ? `${e} ${t}` : e;
}
function p(e) {
  let t, n;
  switch (e) {
    case "request":
      (t = s.MCP_SERVER_OP_VALUE), (n = s.MCP_FUNCTION_ORIGIN_VALUE);
      break;
    case "notification-incoming":
      (t = s.MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE),
        (n = s.MCP_NOTIFICATION_ORIGIN_VALUE);
      break;
    case "notification-outgoing":
      (t = s.MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE),
        (n = s.MCP_NOTIFICATION_ORIGIN_VALUE);
  }
  return {
    [o.SEMANTIC_ATTRIBUTE_SENTRY_OP]: t,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: n,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: s.MCP_ROUTE_SOURCE_VALUE,
  };
}
function f(e) {
  const {
      type: t,
      message: n,
      transport: o,
      extra: f,
      callback: h,
      options: m,
    } = e,
    { method: g } = n,
    y = n.params;
  let v;
  v = "request" === t ? d(g, l.extractTargetInfo(g, y || {}).target) : g;
  const b = {
      ...u.buildTransportAttributes(o, f),
      [s.MCP_METHOD_NAME_ATTRIBUTE]: g,
      ...a.buildTypeSpecificAttributes(t, n, y, m?.recordInputs),
      ...p(t),
    },
    S = r.getClient(),
    _ = Boolean(S?.getDataCollectionOptions().userInfo),
    x = c.filterMcpPiiFromSpanData(b, _);
  return i.startSpan({ name: v, forceTransaction: !0, attributes: x }, h);
}
(t.buildMcpServerSpanConfig = function (e, t, n, o) {
  const { method: i } = e,
    f = e.params,
    h = d(i, l.extractTargetInfo(i, f || {}).target),
    m = {
      ...u.buildTransportAttributes(t, n),
      [s.MCP_METHOD_NAME_ATTRIBUTE]: i,
      ...a.buildTypeSpecificAttributes("request", e, f, o?.recordInputs),
      ...p("request"),
    },
    g = r.getClient(),
    y = Boolean(g?.getDataCollectionOptions().userInfo),
    v = c.filterMcpPiiFromSpanData(m, y);
  return {
    name: h,
    op: s.MCP_SERVER_OP_VALUE,
    forceTransaction: !0,
    attributes: v,
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
