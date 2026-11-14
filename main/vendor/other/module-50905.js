// vendor/other/module-50905.js — webpack module 50905
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(58637 /* vendor/other/module-58637 */),
  i = n(23295 /* vendor/other/module-23295 */),
  s = n(68020 /* vendor/other/module-68020 */),
  a = n(78476 /* vendor/other/module-78476 */);
function c(e, t) {
  s.fill(
    e,
    t,
    (e) =>
      function (n, ...r) {
        const o = r[r.length - 1];
        if ("function" != typeof o) return e.call(this, n, ...r);
        const i = u(o, t, n);
        return e.call(this, n, ...r.slice(0, -1), i);
      },
  );
}
function u(e, t, n) {
  return function (...i) {
    try {
      return l.call(this, e, t, n, i);
    } catch (t) {
      return (
        r.DEBUG_BUILD && o.debug.warn("MCP handler wrapping failed:", t),
        e.apply(this, i)
      );
    }
  };
}
function l(e, t, n, r) {
  try {
    const o = e.apply(this, r);
    return i.isObjectLike(o) && "function" == typeof o.then
      ? Promise.resolve(o).catch((e) => {
          throw (d(e, t, n), e);
        })
      : o;
  } catch (e) {
    throw (d(e, t, n), e);
  }
}
function d(e, t, n) {
  try {
    const r = {};
    "tool" === t || "registerTool" === t
      ? ((r.tool_name = n),
        "ProtocolValidationError" === e.name ||
        e.message.includes("validation") ||
        e.message.includes("protocol")
          ? a.captureError(e, "validation", r)
          : "ServerTimeoutError" === e.name ||
              e.message.includes("timed out") ||
              e.message.includes("timeout")
            ? a.captureError(e, "timeout", r)
            : a.captureError(e, "tool_execution", r))
      : "resource" === t || "registerResource" === t
        ? ((r.resource_uri = n), a.captureError(e, "resource_execution", r))
        : ("prompt" !== t && "registerPrompt" !== t) ||
          ((r.prompt_name = n), a.captureError(e, "prompt_execution", r));
  } catch (e) {}
}
function p(e) {
  "function" == typeof e.tool && c(e, "tool"),
    "function" == typeof e.registerTool && c(e, "registerTool");
}
function f(e) {
  "function" == typeof e.resource && c(e, "resource"),
    "function" == typeof e.registerResource && c(e, "registerResource");
}
function h(e) {
  "function" == typeof e.prompt && c(e, "prompt"),
    "function" == typeof e.registerPrompt && c(e, "registerPrompt");
}
(t.wrapAllMCPHandlers = function (e) {
  p(e), f(e), h(e);
}),
  (t.wrapExistingHandlers = function (e) {
    const t = e,
      n = t._registeredTools;
    if (i.isObjectLike(n))
      for (const [e, t] of Object.entries(n))
        "function" == typeof t.executor &&
          (t.executor = u(t.executor, "registerTool", e));
    const r = t._registeredResources;
    if (i.isObjectLike(r))
      for (const [e, t] of Object.entries(r))
        "function" == typeof t.readCallback &&
          (t.readCallback = u(t.readCallback, "registerResource", e));
    const o = t._registeredResourceTemplates;
    if (i.isObjectLike(o))
      for (const [e, t] of Object.entries(o))
        "function" == typeof t.readCallback &&
          (t.readCallback = u(t.readCallback, "registerResource", e));
    const s = t._registeredPrompts;
    if (i.isObjectLike(s))
      for (const [e, t] of Object.entries(s))
        "function" == typeof t.handler &&
          (t.handler = u(t.handler, "registerPrompt", e));
  }),
  (t.wrapPromptHandlers = h),
  (t.wrapResourceHandlers = f),
  (t.wrapToolHandlers = p);
