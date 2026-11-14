// vendor/other/module-3743.js — webpack module 3743
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(12724 /* vendor/other/module-12724 */),
  o = n(82954 /* vendor/other/module-82954 */),
  i = n(45814 /* vendor/other/module-45814 */);
function s(e) {
  if (!e) return {};
  const { remoteAddress: t, remotePort: n } = e;
  return {
    "network.peer.address": t,
    "network.peer.port": n,
    "net.peer.ip": t,
    "net.peer.port": n,
  };
}
function a(e) {
  const { headers: t } = e,
    n = t["content-length"],
    r = n ? parseInt(String(n), 10) : -1,
    o = t["content-encoding"];
  return r >= 0
    ? o && "identity" !== o
      ? { "http.response_content_length": r }
      : { "http.response_content_length_uncompressed": r }
    : {};
}
(t.getOutgoingRequestSpanData = function (e) {
  const t = i.getRequestUrlFromClientRequest(e),
    [n, s] = o.getHttpSpanDetailsFromUrlObject(
      o.parseStringToURLObject(t),
      "client",
      "auto.http.client",
      e,
    ),
    a = e.getHeader("user-agent");
  return {
    name: n,
    attributes: {
      [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
      "otel.kind": "CLIENT",
      "http.url": t,
      "http.method": e.method,
      "http.target": e.path || "/",
      "net.peer.name": e.host,
      "http.host": e.getHeader("host"),
      ...(a ? { "user_agent.original": a } : {}),
      ...s,
    },
    onlyIfParent: !0,
  };
}),
  (t.setIncomingResponseSpanData = function (e, t) {
    const { statusCode: n, statusMessage: r, httpVersion: o, socket: i } = e,
      c = "QUIC" !== o?.toUpperCase() ? "ip_tcp" : "ip_udp";
    t.setAttributes({
      "http.response.status_code": n,
      "network.protocol.version": o,
      "http.flavor": o,
      "network.transport": c,
      "net.transport": c,
      "http.status_text": r?.toUpperCase(),
      "http.status_code": n,
      ...a(e),
      ...s(i),
    });
  });
