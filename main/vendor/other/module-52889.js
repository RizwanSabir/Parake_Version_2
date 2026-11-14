// vendor/other/module-52889.js — webpack module 52889
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82615 /* vendor/other/module-82615 */),
  o = n(19410 /* vendor/other/module-19410 */);
function i(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || o.timestampInSeconds()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = 32 === t.sid.length ? t.sid : r.uuid4()),
    void 0 !== t.init && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    "number" == typeof t.started && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if ("number" == typeof t.duration) e.duration = t.duration;
  else {
    const t = e.timestamp - e.started;
    e.duration = t >= 0 ? t : 0;
  }
  t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    "number" == typeof t.errors && (e.errors = t.errors),
    t.status && (e.status = t.status);
}
(t.closeSession = function (e, t) {
  let n = {};
  t ? (n = { status: t }) : "ok" === e.status && (n = { status: "exited" }),
    i(e, n);
}),
  (t.makeSession = function (e) {
    const t = o.timestampInSeconds(),
      n = {
        sid: r.uuid4(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () =>
          (function (e) {
            return {
              sid: `${e.sid}`,
              init: e.init,
              started: new Date(1e3 * e.started).toISOString(),
              timestamp: new Date(1e3 * e.timestamp).toISOString(),
              status: e.status,
              errors: e.errors,
              did:
                "number" == typeof e.did || "string" == typeof e.did
                  ? `${e.did}`
                  : void 0,
              duration: e.duration,
              abnormal_mechanism: e.abnormal_mechanism,
              attrs: {
                release: e.release,
                environment: e.environment,
                ip_address: e.ipAddress,
                user_agent: e.userAgent,
              },
            };
          })(n),
      };
    return e && i(n, e), n;
  }),
  (t.updateSession = i);
