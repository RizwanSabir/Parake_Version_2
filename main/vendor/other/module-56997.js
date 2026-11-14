// vendor/other/module-56997.js — webpack module 56997
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60169 /* vendor/other/module-60169 */),
  o = n(3365 /* vendor/other/module-3365 */),
  i = n(31538 /* vendor/other/module-31538 */),
  s = n(76403 /* vendor/other/module-76403 */),
  a = n(97190 /* vendor/other/module-97190 */),
  c = n(51644 /* vendor/other/module-51644 */),
  u = n(38862 /* vendor/other/module-38862 */);
function l(e, t) {
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
(t._enhanceEventWithSdkInfo = l),
  (t.createEventEnvelope = function (e, t, n, r) {
    const o = s.getSdkMetadataForEnvelopeHeader(n),
      i = e.type && "replay_event" !== e.type ? e.type : "event";
    l(e, n?.sdk);
    const a = s.createEventEnvelopeHeaders(e, o, r, t);
    delete e.sdkProcessingMetadata;
    const c = [{ type: i }, e];
    return s.createEnvelope(a, [c]);
  }),
  (t.createSessionEnvelope = function (e, t, n, r) {
    const o = s.getSdkMetadataForEnvelopeHeader(n),
      c = {
        sent_at: new Date(a.safeDateNow()).toISOString(),
        ...(o && { sdk: o }),
        ...(!!r && t && { dsn: i.dsnToString(t) }),
      },
      u =
        "aggregates" in e
          ? [{ type: "sessions" }, e]
          : [{ type: "session" }, e.toJSON()];
    return s.createEnvelope(c, [u]);
  }),
  (t.createSpanEnvelope = function (e, t) {
    const n = r.getDynamicSamplingContextFromSpan(e[0]),
      l = t?.getDsn(),
      d = t?.getOptions().tunnel,
      p = {
        sent_at: new Date(a.safeDateNow()).toISOString(),
        ...((f = n), !!f.trace_id && !!f.public_key && { trace: n }),
        ...(!!d && l && { dsn: i.dsnToString(l) }),
      };
    var f;
    const { beforeSendSpan: h, ignoreSpans: g } = t?.getOptions() || {},
      m = g?.length
        ? e.filter((e) => {
            const t = u.spanToJSON(e);
            return !c.shouldIgnoreSpan(
              {
                description: t.description,
                op: t.op,
                attributes: t.data,
              },
              g,
            );
          })
        : e,
      _ = e.length - m.length;
    _ && t?.recordDroppedEvent("before_send", "span", _);
    const S = h
        ? (e) => {
            const t = u.spanToJSON(e);
            return (
              (o.isStreamedBeforeSendSpanCallback(h) ? t : h(t)) ||
              (u.showSpanDropWarning(), t)
            );
          }
        : u.spanToJSON,
      E = [];
    for (const e of m) {
      const t = S(e);
      t && E.push(s.createSpanEnvelopeItem(t));
    }
    return s.createEnvelope(p, E);
  });
