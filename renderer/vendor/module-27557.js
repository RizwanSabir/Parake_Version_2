// vendor/module-27557.js — webpack module 27557
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31538 /* vendor/module-31538 */),
  o = n(76403 /* vendor/module-76403 */),
  i = n(20807 /* vendor/module-20807 */);
function a(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(i.isBrowser() && {
        ingest_settings: { infer_ip: n, infer_user_agent: n },
      }),
      items: e,
    },
  ];
}
(t.createLogContainerEnvelopeItem = a),
  (t.createLogEnvelope = function (e, t, n, i, s) {
    const l = {};
    return (
      t?.sdk && (l.sdk = { name: t.sdk.name, version: t.sdk.version }),
      n && i && (l.dsn = r.dsnToString(i)),
      o.createEnvelope(l, [a(e, s)])
    );
  });
