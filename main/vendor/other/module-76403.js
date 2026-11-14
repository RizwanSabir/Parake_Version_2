// vendor/other/module-76403.js — webpack module 76403
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(16973 /* vendor/other/module-16973 */),
  o = n(31538 /* vendor/other/module-31538 */),
  i = n(8888 /* vendor/other/module-8888 */),
  s = n(97190 /* vendor/other/module-97190 */),
  a = n(27352 /* vendor/other/module-27352 */);
function c(e, t) {
  const n = e[1];
  for (const e of n) if (t(e, e[0].type)) return !0;
  return !1;
}
function u(e) {
  const t = r.getSentryCarrier(a.GLOBAL_OBJ);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
const l = {
  sessions: "session",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  raw_security: "security",
  log: "log_item",
  trace_metric: "metric",
};
(t.addItemToEnvelope = function (e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}),
  (t.createAttachmentEnvelopeItem = function (e) {
    const t = "string" == typeof e.data ? u(e.data) : e.data;
    return [
      {
        type: "attachment",
        length: t.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType,
      },
      t,
    ];
  }),
  (t.createEnvelope = function (e, t = []) {
    return [e, t];
  }),
  (t.createEventEnvelopeHeaders = function (e, t, n, r) {
    const i = e.sdkProcessingMetadata?.dynamicSamplingContext;
    return {
      event_id: e.event_id,
      sent_at: new Date(s.safeDateNow()).toISOString(),
      ...(t && { sdk: t }),
      ...(!!n && r && { dsn: o.dsnToString(r) }),
      ...(i && { trace: i }),
    };
  }),
  (t.createSpanEnvelopeItem = function (e) {
    return [{ type: "span" }, e];
  }),
  (t.envelopeContainsItemType = function (e, t) {
    return c(e, (e, n) => t.includes(n));
  }),
  (t.envelopeItemTypeToDataCategory = function (e) {
    return (function (e) {
      return e in l;
    })(e)
      ? l[e]
      : e;
  }),
  (t.forEachEnvelopeItem = c),
  (t.getSdkMetadataForEnvelopeHeader = function (e) {
    if (!e?.sdk) return;
    const { name: t, version: n } = e.sdk;
    return { name: t, version: n };
  }),
  (t.parseEnvelope = function (e) {
    let t = "string" == typeof e ? u(e) : e;
    function n(e) {
      const n = t.subarray(0, e);
      return (t = t.subarray(e + 1)), n;
    }
    function o() {
      let e = t.indexOf(10);
      return (
        e < 0 && (e = t.length),
        JSON.parse(
          (function (e) {
            const t = r.getSentryCarrier(a.GLOBAL_OBJ);
            return t.decodePolyfill
              ? t.decodePolyfill(e)
              : new TextDecoder().decode(e);
          })(n(e)),
        )
      );
    }
    const i = o(),
      s = [];
    for (; t.length; ) {
      const e = o(),
        t = "number" == typeof e.length ? e.length : void 0;
      s.push([e, t ? n(t) : o()]);
    }
    return [i, s];
  }),
  (t.serializeEnvelope = function (e) {
    const [t, n] = e;
    let r = JSON.stringify(t);
    function o(e) {
      "string" == typeof r
        ? (r = "string" == typeof e ? r + e : [u(r), e])
        : r.push("string" == typeof e ? u(e) : e);
    }
    for (const e of n) {
      const [t, n] = e;
      if (
        (o(`\n${JSON.stringify(t)}\n`),
        "string" == typeof n || n instanceof Uint8Array)
      )
        o(n);
      else {
        let e;
        try {
          e = JSON.stringify(n);
        } catch {
          e = JSON.stringify(i.normalize(n));
        }
        o(e);
      }
    }
    return "string" == typeof r
      ? r
      : (function (e) {
          const t = e.reduce((e, t) => e + t.length, 0),
            n = new Uint8Array(t);
          let r = 0;
          for (const t of e) n.set(t, r), (r += t.length);
          return n;
        })(r);
  });
