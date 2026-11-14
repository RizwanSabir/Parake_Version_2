// vendor/other/module-90083.js — webpack module 90083
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/other/module-15946 */),
  o = n(19648 /* vendor/other/module-19648 */),
  i = n(48854 /* vendor/other/module-48854 */);
function s(e, t, n, i) {
  e &&
    !(function (e, t) {
      const n = e?.promptFeedback;
      if (n?.blockReason) {
        const e = n.blockReasonMessage ?? n.blockReason;
        return (
          t.setStatus({
            code: o.SPAN_STATUS_ERROR,
            message: "internal_error",
          }),
          r.captureException(`Content blocked: ${e}`, {
            mechanism: { handled: !1, type: "auto.ai.google_genai" },
          }),
          !0
        );
      }
      return !1;
    })(e, i) &&
    ((function (e, t) {
      "string" == typeof e.responseId && (t.responseId = e.responseId),
        "string" == typeof e.modelVersion && (t.responseModel = e.modelVersion);
      const n = e.usageMetadata;
      n &&
        ("number" == typeof n.promptTokenCount &&
          (t.promptTokens = n.promptTokenCount),
        "number" == typeof n.candidatesTokenCount &&
          (t.completionTokens = n.candidatesTokenCount),
        "number" == typeof n.totalTokenCount &&
          (t.totalTokens = n.totalTokenCount));
    })(e, t),
    (function (e, t, n) {
      Array.isArray(e.functionCalls) && t.toolCalls.push(...e.functionCalls);
      for (const r of e.candidates ?? []) {
        r?.finishReason &&
          !t.finishReasons.includes(r.finishReason) &&
          t.finishReasons.push(r.finishReason);
        for (const e of r?.content?.parts ?? [])
          n && e.text && t.responseTexts.push(e.text),
            e.functionCall &&
              t.toolCalls.push({
                type: "function",
                id: e.functionCall.id,
                name: e.functionCall.name,
                arguments: e.functionCall.args,
              });
      }
    })(e, t, n));
}
t.instrumentStream = async function* (e, t, n) {
  const r = { responseTexts: [], finishReasons: [], toolCalls: [] };
  try {
    for await (const o of e) s(o, r, n, t), yield o;
  } finally {
    i.endStreamSpan(t, r, n);
  }
};
