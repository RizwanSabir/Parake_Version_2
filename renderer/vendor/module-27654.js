// vendor/module-27654.js — webpack module 27654
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(19648 /* vendor/module-19648 */),
  o = n(32317 /* vendor/module-32317 */),
  i = n(56884 /* vendor/module-56884 */),
  a = n(43819 /* vendor/module-43819 */),
  s = n(69597 /* vendor/module-69597 */),
  l = new Map(),
  c = new WeakMap();
function u(e) {
  const t = e.sessionId;
  if (t) {
    let e = l.get(t);
    return e || ((e = new Map()), l.set(t, e)), e;
  }
  let n = c.get(e);
  return n || ((n = new Map()), c.set(e, n)), n;
}
(t.cleanupPendingSpansForTransport = function (e) {
  const t = e.sessionId;
  if (t) {
    const e = l.get(t);
    if (e) {
      for (const [, t] of e)
        t.span.setStatus({
          code: r.SPAN_STATUS_ERROR,
          message: "cancelled",
        }),
          t.span.end();
      l.delete(t);
    }
    return;
  }
  const n = c.get(e);
  if (n) {
    for (const [, e] of n)
      e.span.setStatus({
        code: r.SPAN_STATUS_ERROR,
        message: "cancelled",
      }),
        e.span.end();
    n.clear();
  }
}),
  (t.completeSpanWithResults = function (e, t, n, l, c = !1) {
    const d = u(e),
      p = d.get(t);
    if (p) {
      const { span: u, method: f } = p,
        h =
          "initialize" === f
            ? a.extractSessionDataFromInitializeResponse(n)
            : a.extractSessionDataFromResponse(n);
      (h.protocolVersion || h.serverInfo) &&
        s.updateSessionDataForTransport(e, h);
      const m = { ...a.buildServerAttributesFromInfo(h.serverInfo) };
      if (
        (h.protocolVersion &&
          (m[o.MCP_PROTOCOL_VERSION_ATTRIBUTE] = h.protocolVersion),
        Object.keys(m).length > 0 && u.setAttributes(m),
        c)
      )
        u.setStatus({
          code: r.SPAN_STATUS_ERROR,
          message: "internal_error",
        });
      else if ("tools/call" === f) {
        const e = i.extractToolResultAttributes(n, l.recordOutputs);
        u.setAttributes(e);
      } else if ("prompts/get" === f) {
        const e = i.extractPromptResultAttributes(n, l.recordOutputs);
        u.setAttributes(e);
      }
      u.end(), d.delete(t);
    }
  }),
  (t.storeSpanForRequest = function (e, t, n, r) {
    u(e).set(t, { span: n, method: r, startTime: Date.now() });
  });
