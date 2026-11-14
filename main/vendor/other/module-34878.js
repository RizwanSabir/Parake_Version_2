// vendor/other/module-34878.js — webpack module 34878
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */);
(t.eventFromEnvelope = function (e) {
  let t;
  const n = [];
  let o;
  return (
    r.forEachEnvelopeItem(e, (e, r) => {
      if ("event" === r || "transaction" === r || "feedback" === r)
        t = Array.isArray(e) ? e[1] : void 0;
      else if ("attachment" === r) {
        const [t, r] = e;
        n.push({
          filename: t.filename,
          attachmentType: t.attachment_type,
          contentType: t.content_type,
          data: r,
        });
      } else "profile" === r && (o = e[1]);
    }),
    t ? [t, n, o] : void 0
  );
}),
  (t.profileChunkFromEnvelope = function (e) {
    let t;
    return (
      r.forEachEnvelopeItem(e, (e, n) => {
        "profile_chunk" === n && (t = e[1]);
      }),
      t
    );
  }),
  (t.spanContainerFromEnvelope = function (e) {
    let t;
    return (
      r.forEachEnvelopeItem(e, (e, n) => {
        "span" === n && (t = e[1]);
      }),
      t
    );
  });
