// vendor/other/module-73519.js — webpack module 73519
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(23295 /* vendor/other/module-23295 */);
(t.isJsonRpcNotification = function (e) {
  return (
    i.isObjectLike(e) &&
    "jsonrpc" in e &&
    "2.0" === e.jsonrpc &&
    "method" in e &&
    !("id" in e)
  );
}),
  (t.isJsonRpcRequest = function (e) {
    return (
      i.isObjectLike(e) &&
      "jsonrpc" in e &&
      "2.0" === e.jsonrpc &&
      "method" in e &&
      "id" in e
    );
  }),
  (t.isJsonRpcResponse = function (e) {
    return (
      i.isObjectLike(e) &&
      "jsonrpc" in e &&
      "2.0" === e.jsonrpc &&
      "id" in e &&
      ("result" in e || "error" in e)
    );
  }),
  (t.isValidContentItem = function (e) {
    return i.isObjectLike(e);
  }),
  (t.validateMcpServerInstance = function (e) {
    return (
      !!(
        i.isObjectLike(e) &&
        "connect" in e &&
        (("tool" in e && "resource" in e && "prompt" in e) ||
          ("registerTool" in e &&
            "registerResource" in e &&
            "registerPrompt" in e))
      ) ||
      (r.DEBUG_BUILD &&
        o.debug.warn("Did not patch MCP server. Interface is incompatible."),
      !1)
    );
  });
