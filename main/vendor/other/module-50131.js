// vendor/other/module-50131.js — webpack module 50131
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(76414 /* vendor/other/module-76414 */);
t.makeFetchTransport = function (e, t = o.getNativeImplementation("fetch")) {
  let n = 0,
    i = 0;
  return r.createTransport(
    e,
    async function (r) {
      const s = r.body.length;
      (n += s), i++;
      const a = {
        body: r.body,
        method: "POST",
        referrerPolicy: "strict-origin",
        headers: e.headers,
        keepalive: n <= 6e4 && i < 15,
        ...e.fetchOptions,
      };
      try {
        const n = await t(e.url, a);
        return {
          statusCode: n.status,
          headers: {
            "x-sentry-rate-limits": n.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": n.headers.get("Retry-After"),
          },
        };
      } catch (e) {
        throw (o.clearCachedImplementation("fetch"), e);
      } finally {
        (n -= s), i--;
      }
    },
    r.makePromiseBuffer(e.bufferSize || 40),
  );
};
