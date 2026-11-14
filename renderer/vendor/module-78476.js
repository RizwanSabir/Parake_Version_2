// vendor/module-78476.js — webpack module 78476
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(15946 /* vendor/module-15946 */),
  i = n(38862 /* vendor/module-38862 */),
  a = n(19648 /* vendor/module-19648 */);
t.captureError = function (e, t, n) {
  try {
    if (!r.getClient()) return;
    const s = i.getActiveSpan();
    s?.isRecording() &&
      s.setStatus({
        code: a.SPAN_STATUS_ERROR,
        message: "internal_error",
      }),
      o.captureException(e, {
        mechanism: {
          type: "auto.ai.mcp_server",
          handled: !1,
          data: { error_type: t || "handler_execution", ...n },
        },
      });
  } catch {}
};
