// vendor/other/module-72192.js — webpack module 72192
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.retry = async function e(t, n) {
    var o;
    const {
      retries: i,
      interval: s,
      backoff: a = 0,
      attempt: c = 0,
      shouldRetry: u,
      cancellationToken: l = new r.CancellationToken(),
    } = n;
    try {
      return await t();
    } catch (r) {
      if (
        (await Promise.resolve(
          null === (o = null == u ? void 0 : u(r)) || void 0 === o || o,
        )) &&
        i > 0 &&
        !l.cancelled
      )
        return (
          await new Promise((e) => setTimeout(e, s + a * c)),
          await e(t, { ...n, retries: i - 1, attempt: c + 1 })
        );
      throw r;
    }
  });
const r = n(8462 /* vendor/other/module-8462 */);
