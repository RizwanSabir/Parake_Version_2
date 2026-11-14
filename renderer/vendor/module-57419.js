// vendor/module-57419.js — webpack module 57419
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(68020 /* vendor/module-68020 */),
  i = n(23295 /* vendor/module-23295 */),
  a = n(77481 /* vendor/module-77481 */),
  s = n(32317 /* vendor/module-32317 */),
  l = n(27654 /* vendor/module-27654 */),
  c = n(78476 /* vendor/module-78476 */),
  u = n(43819 /* vendor/module-43819 */),
  d = n(69597 /* vendor/module-69597 */),
  p = n(46839 /* vendor/module-46839 */),
  f = n(73519 /* vendor/module-73519 */);
(t.wrapTransportError = function (e) {
  e.onerror &&
    o.fill(
      e,
      "onerror",
      (e) =>
        function (t) {
          return (
            (function (e) {
              try {
                c.captureError(e, "transport");
              } catch {}
            })(t),
            e.call(this, t)
          );
        },
    );
}),
  (t.wrapTransportOnClose = function (e) {
    e.onclose &&
      o.fill(
        e,
        "onclose",
        (t) =>
          function (...n) {
            return (
              l.cleanupPendingSpansForTransport(e),
              d.cleanupSessionDataForTransport(e),
              t.call(this, ...n)
            );
          },
      );
  }),
  (t.wrapTransportOnMessage = function (e, t) {
    e.onmessage &&
      o.fill(
        e,
        "onmessage",
        (n) =>
          function (o, i) {
            const c = f.isJsonRpcRequest(o) ? o : void 0,
              h = f.isJsonRpcNotification(o) ? o : void 0,
              m = c || h;
            let g;
            if (m)
              try {
                (g =
                  "initialize" === c?.method
                    ? u.extractSessionDataFromInitializeRequest(c)
                    : u.extractSessionDataFromMessage(m)),
                  (g.protocolVersion || g.clientInfo) &&
                    d.updateSessionDataForTransport(e, g);
              } catch {}
            if (c) {
              const o = r.getIsolationScope().clone();
              return r.withIsolationScope(o, () => {
                const r = p.buildMcpServerSpanConfig(c, e, i, t),
                  o = a.startInactiveSpan(r);
                return (
                  "initialize" === c.method &&
                    g &&
                    o.setAttributes({
                      ...u.buildClientAttributesFromInfo(g.clientInfo),
                      ...(g.protocolVersion && {
                        [s.MCP_PROTOCOL_VERSION_ATTRIBUTE]: g.protocolVersion,
                      }),
                    }),
                  l.storeSpanForRequest(e, c.id, o, c.method),
                  a.withActiveSpan(o, () => n.call(this, c, i))
                );
              });
            }
            return h
              ? p.createMcpNotificationSpan(h, e, i, t, () =>
                  n.call(this, h, i),
                )
              : n.call(this, o, i);
          },
      );
  }),
  (t.wrapTransportSend = function (e, t) {
    e.send &&
      o.fill(
        e,
        "send",
        (n) =>
          async function (...r) {
            const [o] = r;
            return f.isJsonRpcNotification(o)
              ? p.createMcpOutgoingNotificationSpan(o, e, t, () =>
                  n.call(this, ...r),
                )
              : (f.isJsonRpcResponse(o) &&
                  null !== o.id &&
                  void 0 !== o.id &&
                  (o.error &&
                    (function (e) {
                      try {
                        if (
                          i.isObjectLike(e) &&
                          "code" in e &&
                          "message" in e
                        ) {
                          const t = e;
                          if (
                            -32603 === t.code ||
                            (t.code >= -32099 && t.code <= -32e3)
                          ) {
                            const e = new Error(t.message);
                            (e.name = `JsonRpcError_${t.code}`),
                              c.captureError(e, "protocol");
                          }
                        }
                      } catch {}
                    })(o.error),
                  l.completeSpanWithResults(e, o.id, o.result, t, !!o.error)),
                n.call(this, ...r));
          },
      );
  });
