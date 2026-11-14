// vendor/module-89460.js — webpack module 89460
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(32317 /* vendor/module-32317 */),
  o = new Set([
    r.CLIENT_ADDRESS_ATTRIBUTE,
    r.CLIENT_PORT_ATTRIBUTE,
    r.MCP_RESOURCE_URI_ATTRIBUTE,
  ]);
t.filterMcpPiiFromSpanData = function (e, t) {
  return t
    ? e
    : Object.entries(e).reduce(
        (e, [t, n]) => (
          (function (e) {
            return o.has(e);
          })(t) || (e[t] = n),
          e
        ),
        {},
      );
};
