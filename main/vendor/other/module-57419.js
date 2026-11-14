// vendor/other/module-57419.js — webpack module 57419
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(68020 /* vendor/other/module-68020 */),
  i = n(23295 /* vendor/other/module-23295 */),
  s = n(77481 /* vendor/other/module-77481 */),
  a = n(32317 /* vendor/other/module-32317 */),
  c = n(27654 /* vendor/other/module-27654 */),
  u = n(78476 /* vendor/other/module-78476 */),
  l = n(43819 /* vendor/other/module-43819 */),
  d = n(69597 /* vendor/other/module-69597 */),
  p = n(46839 /* vendor/other/module-46839 */),
  f = n(73519 /* vendor/other/module-73519 */);
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
                u.captureError(e, "transport");
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
              c.cleanupPendingSpansForTransport(e),
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
            const u = f.isJsonRpcRequest(o) ? o : void 0,
              h = f.isJsonRpcNotification(o) ? o : void 0,
              g = u || h;
            let m;
            if (g)
              try {
                (m =
                  "initialize" === u?.method
                    ? l.extractSessionDataFromInitializeRequest(u)
                    : l.extractSessionDataFromMessage(g)),
                  (m.protocolVersion || m.clientInfo) &&
                    d.updateSessionDataForTransport(e, m);
              } catch {}
            if (u) {
              const o = r.getIsolationScope().clone();
              return r.withIsolationScope(o, () => {
                const r = p.buildMcpServerSpanConfig(u, e, i, t),
                  o = s.startInactiveSpan(r);
                return (
                  "initialize" === u.method &&
                    m &&
                    o.setAttributes({
                      ...l.buildClientAttributesFromInfo(m.clientInfo),
                      ...(m.protocolVersion && {
                        [a.MCP_PROTOCOL_VERSION_ATTRIBUTE]: m.protocolVersion,
                      }),
                    }),
                  c.storeSpanForRequest(e, u.id, o, u.method),
                  s.withActiveSpan(o, () => n.call(this, u, i))
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
                              u.captureError(e, "protocol");
                          }
                        }
                      } catch {}
                    })(o.error),
                  c.completeSpanWithResults(e, o.id, o.result, t, !!o.error)),
                n.call(this, ...r));
          },
      );
  });
