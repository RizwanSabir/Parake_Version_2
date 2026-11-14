// vendor/module-34359.js — webpack module 34359
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/module-23295 */),
  o = n(32317 /* vendor/module-32317 */),
  i = {
    "tools/call": {
      targetField: "name",
      targetAttribute: o.MCP_TOOL_NAME_ATTRIBUTE,
      captureArguments: !0,
      argumentsField: "arguments",
    },
    "resources/read": {
      targetField: "uri",
      targetAttribute: o.MCP_RESOURCE_URI_ATTRIBUTE,
      captureUri: !0,
    },
    "resources/subscribe": {
      targetField: "uri",
      targetAttribute: o.MCP_RESOURCE_URI_ATTRIBUTE,
    },
    "resources/unsubscribe": {
      targetField: "uri",
      targetAttribute: o.MCP_RESOURCE_URI_ATTRIBUTE,
    },
    "prompts/get": {
      targetField: "name",
      targetAttribute: o.MCP_PROMPT_NAME_ATTRIBUTE,
      captureName: !0,
      captureArguments: !0,
      argumentsField: "arguments",
    },
  };
(t.extractTargetInfo = function (e, t) {
  const n = i[e];
  if (!n) return { attributes: {} };
  const r =
    n.targetField && "string" == typeof t?.[n.targetField]
      ? t[n.targetField]
      : void 0;
  return {
    target: r,
    attributes: r && n.targetAttribute ? { [n.targetAttribute]: r } : {},
  };
}),
  (t.getRequestArguments = function (e, t) {
    const n = {},
      a = i[e];
    if (!a) return n;
    if (a.captureArguments && a.argumentsField && t?.[a.argumentsField]) {
      const e = t[a.argumentsField];
      if (r.isObjectLike(e))
        for (const [t, r] of Object.entries(e))
          n[`${o.MCP_REQUEST_ARGUMENT}.${t.toLowerCase()}`] = JSON.stringify(r);
    }
    return (
      a.captureUri &&
        t?.uri &&
        (n[`${o.MCP_REQUEST_ARGUMENT}.uri`] = JSON.stringify(t.uri)),
      a.captureName &&
        t?.name &&
        (n[`${o.MCP_REQUEST_ARGUMENT}.name`] = JSON.stringify(t.name)),
      n
    );
  });
