// app/keepalive-fetch.js — webpack module 35320
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
"use strict";
var r =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.KEEPALIVE_DRAIN_TIMEOUT_MS = void 0),
  (t.executeKeepaliveFetch = async function (e) {
    const t = new URL((0, s.getApiConfig)().url).origin;
    if (new URL(e.url).origin !== t)
      throw new Error(
        `Keepalive fetch blocked: ${e.url} is outside the API origin`,
      );
    const n = o.net.fetch(e.url, {
        method: e.method,
        headers: e.headers,
        ...(null === e.body ? {} : { body: e.body }),
        credentials: "include",
      }),
      r = n.catch(() => {});
    return a.add(r), r.then(() => a.delete(r)), { status: (await n).status };
  }),
  (t.drainKeepaliveFetches = c),
  (t.handleWillQuitKeepaliveDrain = function (e) {
    u
      ? e.preventDefault()
      : 0 !== a.size &&
        (e.preventDefault(),
        (u = !0),
        c().finally(() => {
          (u = !1), o.app.quit();
        }));
  });
const o = n(84157 /* external/electron */),
  i = r(n(57686 /* vendor/electron-log/index */)),
  s = n(2510 /* app/api-config-store */);
t.KEEPALIVE_DRAIN_TIMEOUT_MS = 1500;
const a = new Set();
async function c(e = t.KEEPALIVE_DRAIN_TIMEOUT_MS) {
  const n = Date.now() + e;
  for (; a.size > 0; ) {
    const e = n - Date.now();
    if (e <= 0)
      return (
        i.default.warn(
          `Keepalive fetch drain timed out with ${a.size} request(s) in flight`,
        ),
        void a.clear()
      );
    await Promise.race([
      Promise.all([...a]),
      new Promise((t) => setTimeout(t, e)),
    ]);
  }
}
let u = !1;
