// vendor/module-66516.js — webpack module 66516
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(31538 /* vendor/module-31538 */),
  o = n(76403 /* vendor/module-76403 */),
  i = n(20807 /* vendor/module-20807 */),
  a = n(97190 /* vendor/module-97190 */);
function s(e) {
  return !!e.trace_id && !!e.public_key;
}
t.createStreamedSpanEnvelope = function (e, t, n) {
  const l = n.getOptions(),
    c = n.getDsn(),
    u = l.tunnel,
    d = o.getSdkMetadataForEnvelopeHeader(l._metadata),
    p = {
      sent_at: new Date(a.safeDateNow()).toISOString(),
      ...(s(t) && { trace: t }),
      ...(d && { sdk: d }),
      ...(!!u && c && { dsn: r.dsnToString(c) }),
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
