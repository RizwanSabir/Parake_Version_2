// vendor/module-69597.js — webpack module 69597
// params: (e, t) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const n = new Map(),
  r = new WeakMap();
function o(e) {
  const t = e.sessionId;
  return t ? n.get(t) : r.get(e);
}
(t.cleanupSessionDataForTransport = function (e) {
  const t = e.sessionId;
  t && n.delete(t);
}),
  (t.getClientInfoForTransport = function (e) {
    return o(e)?.clientInfo;
  }),
  (t.getProtocolVersionForTransport = function (e) {
    return o(e)?.protocolVersion;
  }),
  (t.getSessionDataForTransport = function (e) {
    return o(e);
  }),
  (t.updateSessionDataForTransport = function (e, t) {
    !(function (e, t) {
      const o = e.sessionId;
      o ? n.set(o, t) : r.set(e, t);
    })(e, { ...(o(e) || {}), ...t });
  });
