// vendor/module-56997.js — webpack module 56997
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60169 /* vendor/module-60169 */),
  o = n(3365 /* vendor/module-3365 */),
  i = n(31538 /* vendor/module-31538 */),
  a = n(76403 /* vendor/module-76403 */),
  s = n(97190 /* vendor/module-97190 */),
  l = n(51644 /* vendor/module-51644 */),
  c = n(38862 /* vendor/module-38862 */);
function u(e, t) {
  if (!t) return e;
  const n = e.sdk || {};
  return (
    (e.sdk = {
      ...n,
      name: n.name || t.name,
      version: n.version || t.version,
      integrations: [...(e.sdk?.integrations || []), ...(t.integrations || [])],
      packages: [...(e.sdk?.packages || []), ...(t.packages || [])],
      settings:
        e.sdk?.settings || t.settings
          ? { ...e.sdk?.settings, ...t.settings }
          : void 0,
    }),
    e
  );
}
(t._enhanceEventWithSdkInfo = u),
  (t.createEventEnvelope = function (e, t, n, r) {
    const o = a.getSdkMetadataForEnvelopeHeader(n),
      i = e.type && "replay_event" !== e.type ? e.type : "event";
    u(e, n?.sdk);
    const s = a.createEventEnvelopeHeaders(e, o, r, t);
    delete e.sdkProcessingMetadata;
    const l = [{ type: i }, e];
    return a.createEnvelope(s, [l]);
  }),
  (t.createSessionEnvelope = function (e, t, n, r) {
    const o = a.getSdkMetadataForEnvelopeHeader(n),
      l = {
        sent_at: new Date(s.safeDateNow()).toISOString(),
        ...(o && { sdk: o }),
        ...(!!r && t && { dsn: i.dsnToString(t) }),
      },
      c =
        "aggregates" in e
          ? [{ type: "sessions" }, e]
          : [{ type: "session" }, e.toJSON()];
    return a.createEnvelope(l, [c]);
  }),
  (t.createSpanEnvelope = function (e, t) {
    const n = r.getDynamicSamplingContextFromSpan(e[0]),
      u = t?.getDsn(),
      d = t?.getOptions().tunnel,
      p = {
        sent_at: new Date(s.safeDateNow()).toISOString(),
        ...((f = n), !!f.trace_id && !!f.public_key && { trace: n }),
        ...(!!d && u && { dsn: i.dsnToString(u) }),
      };
    var f;
    const { beforeSendSpan: h, ignoreSpans: m } = t?.getOptions() || {},
      g = m?.length
        ? e.filter((e) => {
            const t = c.spanToJSON(e);
            return !l.shouldIgnoreSpan(
              {
                description: t.description,
                op: t.op,
                attributes: t.data,
              },
              m,
            );
          })
        : e,
      y = e.length - g.length;
    y && t?.recordDroppedEvent("before_send", "span", y);
    const v = h
        ? (e) => {
            const t = c.spanToJSON(e);
            return (
              (o.isStreamedBeforeSendSpanCallback(h) ? t : h(t)) ||
              (c.showSpanDropWarning(), t)
            );
          }
        : c.spanToJSON,
      b = [];
    for (const e of g) {
      const t = v(e);
      t && b.push(a.createSpanEnvelopeItem(t));
    }
    return a.createEnvelope(p, b);
  });
