// vendor/other/module-87809.js — webpack module 87809
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/other/module-15946 */),
  o = n(75122 /* vendor/other/module-75122 */),
  i = n(19648 /* vendor/other/module-19648 */),
  s = n(36648 /* vendor/other/module-36648 */),
  a = n(48854 /* vendor/other/module-48854 */),
  c = {
    invalid_request_error: "invalid_argument",
    authentication_error: "unauthenticated",
    permission_error: "permission_denied",
    not_found_error: "not_found",
    request_too_large: "failed_precondition",
    rate_limit_error: "resource_exhausted",
    api_error: "internal_error",
    overloaded_error: "unavailable",
  };
function u(e) {
  return (e && c[e]) || "internal_error";
}
(t.handleResponseError = function (e, t) {
  t.error &&
    (e.setStatus({
      code: i.SPAN_STATUS_ERROR,
      message: u(t.error.type),
    }),
    r.captureException(t.error, {
      mechanism: {
        handled: !1,
        type: "auto.ai.anthropic.anthropic_error",
      },
    }));
}),
  (t.mapAnthropicErrorToStatusMessage = u),
  (t.messagesFromParams = function (e) {
    const { system: t, messages: n, input: r } = e,
      o = "string" == typeof t ? [{ role: "system", content: e.system }] : [],
      i = Array.isArray(r) ? r : null != r ? [r] : void 0,
      s = Array.isArray(n) ? n : null != n ? [n] : [];
    return [...o, ...(i ?? s)];
  }),
  (t.setMessagesAttribute = function (e, t, n) {
    if (Array.isArray(t) && 0 === t.length) return;
    const { systemInstructions: r, filteredMessages: i } =
      a.extractSystemInstructions(t);
    r &&
      e.setAttributes({
        [s.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE]: r,
      });
    const c = Array.isArray(i) ? i.length : 1;
    e.setAttributes({
      [s.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: n
        ? a.getTruncatedJsonString(i)
        : o.stringify(i),
      [s.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: c,
    });
  });
