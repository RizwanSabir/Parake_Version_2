// vendor/other/module-43819.js — webpack module 43819
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(32317 /* vendor/other/module-32317 */),
  o = n(69597 /* vendor/other/module-69597 */),
  i = n(73519 /* vendor/other/module-73519 */),
  s = "io.modelcontextprotocol/protocolVersion",
  a = "io.modelcontextprotocol/clientInfo",
  c = "io.modelcontextprotocol/serverInfo";
function u(e) {
  const t = {};
  return (
    i.isValidContentItem(e) &&
      ("string" == typeof e.name && (t.name = e.name),
      "string" == typeof e.title && (t.title = e.title),
      "string" == typeof e.version && (t.version = e.version)),
    t
  );
}
function l(e) {
  const t = o.getClientInfoForTransport(e),
    n = {};
  return (
    t?.name && (n["mcp.client.name"] = t.name),
    t?.title && (n["mcp.client.title"] = t.title),
    t?.version && (n["mcp.client.version"] = t.version),
    n
  );
}
function d(e) {
  const t = o.getSessionDataForTransport(e)?.serverInfo,
    n = {};
  return (
    t?.name && (n[r.MCP_SERVER_NAME_ATTRIBUTE] = t.name),
    t?.title && (n[r.MCP_SERVER_TITLE_ATTRIBUTE] = t.title),
    t?.version && (n[r.MCP_SERVER_VERSION_ATTRIBUTE] = t.version),
    n
  );
}
function p(e) {
  return {
    address:
      e?.requestInfo?.remoteAddress ||
      e?.clientAddress ||
      e?.request?.ip ||
      e?.request?.connection?.remoteAddress,
    port:
      e?.requestInfo?.remotePort ||
      e?.clientPort ||
      e?.request?.connection?.remotePort,
  };
}
function f(e) {
  if (!e?.constructor)
    return { mcpTransport: "unknown", networkTransport: "unknown" };
  const t =
    "string" == typeof e.constructor?.name ? e.constructor.name : "unknown";
  let n = "unknown";
  const r = t.toLowerCase();
  return (
    r.includes("stdio")
      ? (n = "pipe")
      : (r.includes("http") || r.includes("sse")) && (n = "tcp"),
    { mcpTransport: t, networkTransport: n }
  );
}
(t.buildClientAttributesFromInfo = function (e) {
  const t = {};
  return (
    e?.name && (t["mcp.client.name"] = e.name),
    e?.title && (t["mcp.client.title"] = e.title),
    e?.version && (t["mcp.client.version"] = e.version),
    t
  );
}),
  (t.buildServerAttributesFromInfo = function (e) {
    const t = {};
    return (
      e?.name && (t[r.MCP_SERVER_NAME_ATTRIBUTE] = e.name),
      e?.title && (t[r.MCP_SERVER_TITLE_ATTRIBUTE] = e.title),
      e?.version && (t[r.MCP_SERVER_VERSION_ATTRIBUTE] = e.version),
      t
    );
  }),
  (t.buildTransportAttributes = function (e, t) {
    const n = e && "sessionId" in e ? e.sessionId : void 0,
      i = t ? p(t) : {},
      { mcpTransport: s, networkTransport: a } = f(e),
      c = l(e),
      u = d(e),
      h = o.getProtocolVersionForTransport(e);
    return {
      ...(n && { [r.MCP_SESSION_ID_ATTRIBUTE]: n }),
      ...(i.address && { [r.CLIENT_ADDRESS_ATTRIBUTE]: i.address }),
      ...(i.port && { [r.CLIENT_PORT_ATTRIBUTE]: i.port }),
      [r.MCP_TRANSPORT_ATTRIBUTE]: s,
      [r.NETWORK_TRANSPORT_ATTRIBUTE]: a,
      [r.NETWORK_PROTOCOL_VERSION_ATTRIBUTE]: "2.0",
      ...(h && { [r.MCP_PROTOCOL_VERSION_ATTRIBUTE]: h }),
      ...c,
      ...u,
    };
  }),
  (t.extractClientInfo = p),
  (t.extractSessionDataFromInitializeRequest = function (e) {
    const t = {};
    return (
      i.isValidContentItem(e.params) &&
        ("string" == typeof e.params.protocolVersion &&
          (t.protocolVersion = e.params.protocolVersion),
        e.params.clientInfo && (t.clientInfo = u(e.params.clientInfo))),
      t
    );
  }),
  (t.extractSessionDataFromInitializeResponse = function (e) {
    const t = {};
    return (
      i.isValidContentItem(e) &&
        ("string" == typeof e.protocolVersion &&
          (t.protocolVersion = e.protocolVersion),
        e.serverInfo && (t.serverInfo = u(e.serverInfo))),
      t
    );
  }),
  (t.extractSessionDataFromMessage = function (e) {
    const t = {};
    if (
      i.isValidContentItem(e.params) &&
      i.isValidContentItem(e.params._meta)
    ) {
      const n = e.params._meta;
      "string" == typeof n[s] && (t.protocolVersion = n[s]),
        n[a] && (t.clientInfo = u(n[a]));
    }
    return t;
  }),
  (t.extractSessionDataFromResponse = function (e) {
    const t = {};
    return (
      i.isValidContentItem(e) &&
        i.isValidContentItem(e._meta) &&
        e._meta[c] &&
        (t.serverInfo = u(e._meta[c])),
      t
    );
  }),
  (t.getClientAttributes = l),
  (t.getServerAttributes = d),
  (t.getTransportTypes = f);
