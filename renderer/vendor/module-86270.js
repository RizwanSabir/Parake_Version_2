// vendor/module-86270.js — webpack module 86270
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31538 /* vendor/module-31538 */),
  o = n(76403 /* vendor/module-76403 */),
  i = n(97190 /* vendor/module-97190 */);
t.createCheckInEnvelope = function (e, t, n, a, s) {
  const l = { sent_at: new Date(i.safeDateNow()).toISOString() };
  n?.sdk && (l.sdk = { name: n.sdk.name, version: n.sdk.version }),
    a && s && (l.dsn = r.dsnToString(s)),
    t && (l.trace = t);
  const c = (function (e) {
    return [{ type: "check_in" }, e];
  })(e);
  return o.createEnvelope(l, [c]);
};
