// vendor/module-92996.js — webpack module 92996
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/module-15946 */),
  o = n(58637 /* vendor/module-58637 */),
  i = n(28221 /* vendor/module-28221 */),
  a = n(27352 /* vendor/module-27352 */);
async function s(e) {
  try {
    o.debug.log("Flushing events..."),
      await r.flush(e),
      o.debug.log("Done flushing events");
  } catch (e) {
    o.debug.log("Error while flushing events:\n", e);
  }
}
t.flushIfServerless = async function (e = {}) {
  const { timeout: t = 2e3 } = e;
  "cloudflareWaitUntil" in e && "function" == typeof e?.cloudflareWaitUntil
    ? e.cloudflareWaitUntil(s(t))
    : "cloudflareCtx" in e && "function" == typeof e.cloudflareCtx?.waitUntil
      ? e.cloudflareCtx.waitUntil(s(t))
      : a.GLOBAL_OBJ[Symbol.for("@vercel/request-context")]
        ? i.vercelWaitUntil(s(t))
        : "undefined" != typeof process &&
          (process.env.FUNCTIONS_WORKER_RUNTIME ||
            process.env.LAMBDA_TASK_ROOT ||
            process.env.K_SERVICE ||
            process.env.CF_PAGES ||
            process.env.VERCEL ||
            process.env.NETLIFY) &&
          (await s(t));
};
