// vendor/module-99378.js — webpack module 99378
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */);
t.createUserFeedbackEnvelope = function (
  e,
  { metadata: t, tunnel: n, dsn: o },
) {
  const i = {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t?.sdk && {
        sdk: { name: t.sdk.name, version: t.sdk.version },
      }),
      ...(!!n && !!o && { dsn: r.dsnToString(o) }),
    },
    a = (function (e) {
      return [{ type: "user_report" }, e];
    })(e);
  return r.createEnvelope(i, [a]);
};
