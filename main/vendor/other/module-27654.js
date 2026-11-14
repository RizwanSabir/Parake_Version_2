// vendor/other/module-27654.js — webpack module 27654
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(19648 /* vendor/other/module-19648 */),
  o = n(32317 /* vendor/other/module-32317 */),
  i = n(56884 /* vendor/other/module-56884 */),
  s = n(43819 /* vendor/other/module-43819 */),
  a = n(69597 /* vendor/other/module-69597 */),
  c = new Map(),
  u = new WeakMap();
function l(e) {
  const t = e.sessionId;
  if (t) {
    let e = c.get(t);
    return e || ((e = new Map()), c.set(t, e)), e;
  }
  let n = u.get(e);
  return n || ((n = new Map()), u.set(e, n)), n;
}
(t.cleanupPendingSpansForTransport = function (e) {
  const t = e.sessionId;
  if (t) {
    const e = c.get(t);
    if (e) {
      for (const [, t] of e)
        t.span.setStatus({
          code: r.SPAN_STATUS_ERROR,
          message: "cancelled",
        }),
          t.span.end();
      c.delete(t);
    }
    return;
  }
  const n = u.get(e);
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
  (t.completeSpanWithResults = function (e, t, n, c, u = !1) {
    const d = l(e),
      p = d.get(t);
    if (p) {
      const { span: l, method: f } = p,
        h =
          "initialize" === f
            ? s.extractSessionDataFromInitializeResponse(n)
            : s.extractSessionDataFromResponse(n);
      (h.protocolVersion || h.serverInfo) &&
        a.updateSessionDataForTransport(e, h);
      const g = { ...s.buildServerAttributesFromInfo(h.serverInfo) };
      if (
        (h.protocolVersion &&
          (g[o.MCP_PROTOCOL_VERSION_ATTRIBUTE] = h.protocolVersion),
        Object.keys(g).length > 0 && l.setAttributes(g),
        u)
      )
        l.setStatus({
          code: r.SPAN_STATUS_ERROR,
          message: "internal_error",
        });
      else if ("tools/call" === f) {
        const e = i.extractToolResultAttributes(n, c.recordOutputs);
        l.setAttributes(e);
      } else if ("prompts/get" === f) {
        const e = i.extractPromptResultAttributes(n, c.recordOutputs);
        l.setAttributes(e);
      }
      l.end(), d.delete(t);
    }
  }),
  (t.storeSpanForRequest = function (e, t, n, r) {
    l(e).set(t, { span: n, method: r, startTime: Date.now() });
  });
