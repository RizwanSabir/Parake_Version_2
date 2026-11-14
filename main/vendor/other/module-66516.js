// vendor/other/module-66516.js — webpack module 66516
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31538 /* vendor/other/module-31538 */),
  o = n(76403 /* vendor/other/module-76403 */),
  i = n(20807 /* vendor/other/module-20807 */),
  s = n(97190 /* vendor/other/module-97190 */);
function a(e) {
  return !!e.trace_id && !!e.public_key;
}
t.createStreamedSpanEnvelope = function (e, t, n) {
  const c = n.getOptions(),
    u = n.getDsn(),
    l = c.tunnel,
    d = o.getSdkMetadataForEnvelopeHeader(c._metadata),
    p = {
      sent_at: new Date(s.safeDateNow()).toISOString(),
      ...(a(t) && { trace: t }),
      ...(d && { sdk: d }),
      ...(!!l && u && { dsn: r.dsnToString(u) }),
    },
    f = n.getDataCollectionOptions().userInfo ? "auto" : "never",
    h = [
      {
        type: "span",
        item_count: e.length,
        content_type: "application/vnd.sentry.items.span.v2+json",
      },
      {
        version: 2,
        ...(i.isBrowser() && {
          ingest_settings: { infer_ip: f, infer_user_agent: f },
        }),
        items: e,
      },
    ];
  return o.createEnvelope(p, [h]);
};
