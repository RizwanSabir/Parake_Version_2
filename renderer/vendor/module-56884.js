// vendor/module-56884.js — webpack module 56884
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(32317 /* vendor/module-32317 */),
  o = n(73519 /* vendor/module-73519 */);
(t.extractPromptResultAttributes = function (e, t) {
  const n = {};
  if (!o.isValidContentItem(e)) return n;
  if (
    (t &&
      "string" == typeof e.description &&
      (n[r.MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE] = e.description),
    Array.isArray(e.messages) &&
      ((n[r.MCP_PROMPT_RESULT_MESSAGE_COUNT_ATTRIBUTE] = e.messages.length), t))
  ) {
    const t = e.messages;
    for (const [e, r] of t.entries()) {
      if (!o.isValidContentItem(r)) continue;
      const i = 1 === t.length ? "mcp.prompt.result" : `mcp.prompt.result.${e}`;
      if (
        (((e, r) => {
          if ("string" == typeof r) {
            const o = 1 === t.length ? `${i}.message_${e}` : `${i}.${e}`;
            n[o] = r;
          }
        })("role", r.role),
        o.isValidContentItem(r.content))
      ) {
        const e = r.content;
        if ("string" == typeof e.text) {
          const r = 1 === t.length ? `${i}.message_content` : `${i}.content`;
          n[r] = e.text;
        }
      }
    }
  }
  return n;
}),
  (t.extractToolResultAttributes = function (e, t) {
    if (!o.isValidContentItem(e)) return {};
    const n = Array.isArray(e.content)
      ? (function (e, t) {
          const n = {
            [r.MCP_TOOL_RESULT_CONTENT_COUNT_ATTRIBUTE]: e.length,
          };
          for (const [r, i] of e.entries()) {
            if (!o.isValidContentItem(i)) continue;
            const a =
              1 === e.length ? "mcp.tool.result" : `mcp.tool.result.${r}`;
            if (
              ("string" == typeof i.type && (n[`${a}.content_type`] = i.type),
              t)
            ) {
              const e = (e, t) => {
                "string" == typeof t && (n[`${a}.${e}`] = t);
              };
              e("mime_type", i.mimeType),
                e("uri", i.uri),
                e("name", i.name),
                "string" == typeof i.text && (n[`${a}.content`] = i.text),
                "string" == typeof i.data &&
                  (n[`${a}.data_size`] = i.data.length);
              const t = i.resource;
              o.isValidContentItem(t) &&
                (e("resource_uri", t.uri), e("resource_mime_type", t.mimeType));
            }
          }
          return n;
        })(e.content, t)
      : {};
    return (
      "boolean" == typeof e.isError &&
        (n[r.MCP_TOOL_RESULT_IS_ERROR_ATTRIBUTE] = e.isError),
      n
    );
  });
