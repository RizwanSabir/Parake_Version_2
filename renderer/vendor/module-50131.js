// vendor/module-50131.js — webpack module 50131
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(76414 /* vendor/module-76414 */);
t.makeFetchTransport = function (e, t = o.getNativeImplementation("fetch")) {
  let n = 0,
    i = 0;
  return r.createTransport(
    e,
    async function (r) {
      const a = r.body.length;
      (n += a), i++;
      const s = {
        body: r.body,
        method: "POST",
        referrerPolicy: "strict-origin",
        headers: e.headers,
        keepalive: n <= 6e4 && i < 15,
        ...e.fetchOptions,
      };
      try {
        const n = await t(e.url, s);
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
        (n -= a), i--;
      }
    },
    r.makePromiseBuffer(e.bufferSize || 40),
  );
};
