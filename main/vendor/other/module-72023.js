// vendor/other/module-72023.js — webpack module 72023
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82954 /* vendor/other/module-82954 */),
  o = n(32317 /* vendor/other/module-32317 */),
  i = n(34359 /* vendor/other/module-34359 */);
function s(e, t, n) {
  const i = {};
  switch (e) {
    case "notifications/cancelled":
      t?.requestId && (i["mcp.cancelled.request_id"] = String(t.requestId)),
        t?.reason && (i["mcp.cancelled.reason"] = String(t.reason));
      break;
    case "notifications/message":
      t?.level && (i[o.MCP_LOGGING_LEVEL_ATTRIBUTE] = String(t.level)),
        t?.logger && (i[o.MCP_LOGGING_LOGGER_ATTRIBUTE] = String(t.logger)),
        void 0 !== t?.data &&
          ((i[o.MCP_LOGGING_DATA_TYPE_ATTRIBUTE] = typeof t.data),
          n &&
            (i[o.MCP_LOGGING_MESSAGE_ATTRIBUTE] =
              "string" == typeof (s = t.data) ? s : JSON.stringify(s)));
      break;
    case "notifications/progress":
      t?.progressToken && (i["mcp.progress.token"] = String(t.progressToken)),
        "number" == typeof t?.progress &&
          (i["mcp.progress.current"] = t.progress),
        "number" == typeof t?.total &&
          ((i["mcp.progress.total"] = t.total),
          "number" == typeof t?.progress &&
            (i["mcp.progress.percentage"] = (t.progress / t.total) * 100)),
        t?.message && (i["mcp.progress.message"] = String(t.message));
      break;
    case "notifications/resources/updated":
      if (t?.uri) {
        i[o.MCP_RESOURCE_URI_ATTRIBUTE] = String(t.uri);
        const e = r.parseStringToURLObject(String(t.uri));
        e &&
          !r.isURLObjectRelative(e) &&
          (i["mcp.resource.protocol"] = e.protocol.replace(":", ""));
      }
      break;
    case "notifications/initialized":
      (i["mcp.lifecycle.phase"] = "initialization_complete"),
        (i["mcp.protocol.ready"] = 1);
  }
  var s;
  return i;
}
(t.buildTypeSpecificAttributes = function (e, t, n, r) {
  if ("request" === e) {
    const e = t,
      s = i.extractTargetInfo(e.method, n || {});
    return {
      ...(void 0 !== e.id && {
        [o.MCP_REQUEST_ID_ATTRIBUTE]: String(e.id),
      }),
      ...s.attributes,
      ...(r ? i.getRequestArguments(e.method, n || {}) : {}),
    };
  }
  return s(t.method, n || {}, r);
}),
  (t.getNotificationAttributes = s);
