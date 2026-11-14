// vendor/other/module-86270.js — webpack module 86270
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31538 /* vendor/other/module-31538 */),
  o = n(76403 /* vendor/other/module-76403 */),
  i = n(97190 /* vendor/other/module-97190 */);
t.createCheckInEnvelope = function (e, t, n, s, a) {
  const c = { sent_at: new Date(i.safeDateNow()).toISOString() };
  n?.sdk && (c.sdk = { name: n.sdk.name, version: n.sdk.version }),
    s && a && (c.dsn = r.dsnToString(a)),
    t && (c.trace = t);
  const u = (function (e) {
    return [{ type: "check_in" }, e];
  })(e);
  return o.createEnvelope(c, [u]);
};
