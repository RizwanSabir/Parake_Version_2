// vendor/module-50905.js — webpack module 50905
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(23295 /* vendor/module-23295 */),
  a = n(68020 /* vendor/module-68020 */),
  s = n(78476 /* vendor/module-78476 */);
function l(e, t) {
  a.fill(
    e,
    t,
    (e) =>
      function (n, ...r) {
        const o = r[r.length - 1];
        if ("function" != typeof o) return e.call(this, n, ...r);
        const i = c(o, t, n);
        return e.call(this, n, ...r.slice(0, -1), i);
      },
  );
}
function c(e, t, n) {
  return function (...i) {
    try {
      return u.call(this, e, t, n, i);
    } catch (t) {
      return (
        r.DEBUG_BUILD && o.debug.warn("MCP handler wrapping failed:", t),
        e.apply(this, i)
      );
    }
  };
}
function u(e, t, n, r) {
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
          ? s.captureError(e, "validation", r)
          : "ServerTimeoutError" === e.name ||
              e.message.includes("timed out") ||
              e.message.includes("timeout")
            ? s.captureError(e, "timeout", r)
            : s.captureError(e, "tool_execution", r))
      : "resource" === t || "registerResource" === t
        ? ((r.resource_uri = n), s.captureError(e, "resource_execution", r))
        : ("prompt" !== t && "registerPrompt" !== t) ||
          ((r.prompt_name = n), s.captureError(e, "prompt_execution", r));
  } catch (e) {}
}
function p(e) {
  "function" == typeof e.tool && l(e, "tool"),
    "function" == typeof e.registerTool && l(e, "registerTool");
}
function f(e) {
  "function" == typeof e.resource && l(e, "resource"),
    "function" == typeof e.registerResource && l(e, "registerResource");
}
function h(e) {
  "function" == typeof e.prompt && l(e, "prompt"),
    "function" == typeof e.registerPrompt && l(e, "registerPrompt");
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
          (t.executor = c(t.executor, "registerTool", e));
    const r = t._registeredResources;
    if (i.isObjectLike(r))
      for (const [e, t] of Object.entries(r))
        "function" == typeof t.readCallback &&
          (t.readCallback = c(t.readCallback, "registerResource", e));
    const o = t._registeredResourceTemplates;
    if (i.isObjectLike(o))
      for (const [e, t] of Object.entries(o))
        "function" == typeof t.readCallback &&
          (t.readCallback = c(t.readCallback, "registerResource", e));
    const a = t._registeredPrompts;
    if (i.isObjectLike(a))
      for (const [e, t] of Object.entries(a))
        "function" == typeof t.handler &&
          (t.handler = c(t.handler, "registerPrompt", e));
  }),
  (t.wrapPromptHandlers = h),
  (t.wrapResourceHandlers = f),
  (t.wrapToolHandlers = p);
