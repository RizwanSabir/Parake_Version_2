// vendor/other/module-22746.js — webpack module 22746
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(20807 /* vendor/other/module-20807 */),
  o = n(91159 /* vendor/other/module-91159 */),
  i = n(14490 /* vendor/other/module-14490 */);
t.extractGenAiSpansFromEvent = function (e, t) {
  if (
    "transaction" !== e.type ||
    !e.spans?.length ||
    !e.sdkProcessingMetadata?.hasGenAiSpans ||
    !1 === t.getOptions().streamGenAiSpans ||
    o.hasSpanStreamingEnabled(t)
  )
    return;
  const n = [],
    s = [];
  for (const t of e.spans)
    t.op?.startsWith("gen_ai.")
      ? n.push(i.spanJsonToSerializedStreamedSpan(t))
      : s.push(t);
  if (0 === n.length) return;
  e.spans = s;
  const a = t.getDataCollectionOptions().userInfo ? "auto" : "never";
  return [
    {
      type: "span",
      item_count: n.length,
      content_type: "application/vnd.sentry.items.span.v2+json",
    },
    {
      version: 2,
      ...(r.isBrowser() && {
        ingest_settings: { infer_ip: a, infer_user_agent: a },
      }),
      items: n,
    },
  ];
};
