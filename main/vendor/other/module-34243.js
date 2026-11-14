// vendor/other/module-34243.js — webpack module 34243
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31538 /* vendor/other/module-31538 */),
  o = n(76403 /* vendor/other/module-76403 */),
  i = n(20807 /* vendor/other/module-20807 */);
function s(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
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
(t.createMetricContainerEnvelopeItem = s),
  (t.createMetricEnvelope = function (e, t, n, i, a) {
    const c = {};
    return (
      t?.sdk && (c.sdk = { name: t.sdk.name, version: t.sdk.version }),
      n && i && (c.dsn = r.dsnToString(i)),
      o.createEnvelope(c, [s(e, a)])
    );
  });
