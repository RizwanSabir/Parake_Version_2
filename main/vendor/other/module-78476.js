// vendor/other/module-78476.js — webpack module 78476
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(15946 /* vendor/other/module-15946 */),
  i = n(38862 /* vendor/other/module-38862 */),
  s = n(19648 /* vendor/other/module-19648 */);
t.captureError = function (e, t, n) {
  try {
    if (!r.getClient()) return;
    const a = i.getActiveSpan();
    a?.isRecording() &&
      a.setStatus({
        code: s.SPAN_STATUS_ERROR,
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
