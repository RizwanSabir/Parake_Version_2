// vendor/module-75715.js — webpack module 75715
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(60169 /* vendor/module-60169 */),
  i = n(10627 /* vendor/module-10627 */),
  a = n(38862 /* vendor/module-38862 */);
function s(e, t) {
  const {
    extra: n,
    tags: r,
    attributes: o,
    user: a,
    contexts: s,
    level: c,
    sdkProcessingMetadata: u,
    breadcrumbs: d,
    fingerprint: p,
    eventProcessors: f,
    attachments: h,
    propagationContext: m,
    transactionName: g,
    span: y,
  } = t;
  l(e, "extra", n),
    l(e, "tags", r),
    l(e, "attributes", o),
    l(e, "user", a),
    l(e, "contexts", s),
    (e.sdkProcessingMetadata = i.merge(e.sdkProcessingMetadata, u, 2)),
    c && (e.level = c),
    g && (e.transactionName = g),
    y && (e.span = y),
    d.length && (e.breadcrumbs = [...e.breadcrumbs, ...d]),
    p.length && (e.fingerprint = [...e.fingerprint, ...p]),
    f.length && (e.eventProcessors = [...e.eventProcessors, ...f]),
    h.length && (e.attachments = [...e.attachments, ...h]),
    (e.propagationContext = { ...e.propagationContext, ...m });
}
function l(e, t, n) {
  e[t] = i.merge(e[t], n, 1);
}
(t.applyScopeDataToEvent = function (e, t) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: i,
    sdkProcessingMetadata: s,
  } = t;
  !(function (e, t) {
    const {
      extra: n,
      tags: r,
      user: o,
      contexts: i,
      level: a,
      transactionName: s,
    } = t;
    Object.keys(n).length && (e.extra = { ...n, ...e.extra }),
      Object.keys(r).length && (e.tags = { ...r, ...e.tags }),
      Object.keys(o).length && (e.user = { ...o, ...e.user }),
      Object.keys(i).length && (e.contexts = { ...i, ...e.contexts }),
      a && (e.level = a),
      s && "transaction" !== e.type && (e.transaction = s);
  })(e, t),
    r &&
      (function (e, t) {
        (e.contexts = {
          trace: a.spanToTraceContext(t),
          ...e.contexts,
        }),
          (e.sdkProcessingMetadata = {
            dynamicSamplingContext: o.getDynamicSamplingContextFromSpan(t),
            ...e.sdkProcessingMetadata,
          });
        const n = a.getRootSpan(t),
          r = a.spanToJSON(n).description;
        r && !e.transaction && "transaction" === e.type && (e.transaction = r);
      })(e, r),
    (function (e, t) {
      (e.fingerprint = e.fingerprint
        ? Array.isArray(e.fingerprint)
          ? e.fingerprint
          : [e.fingerprint]
        : []),
        t && (e.fingerprint = e.fingerprint.concat(t)),
        e.fingerprint.length || delete e.fingerprint;
    })(e, n),
    (function (e, t) {
      const n = [...(e.breadcrumbs || []), ...t];
      e.breadcrumbs = n.length ? n : void 0;
    })(e, i),
    (function (e, t) {
      e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
    })(e, s);
}),
  (t.getCombinedScopeData = function (e, t) {
    const n = r.getGlobalScope().getScopeData();
    return e && s(n, e.getScopeData()), t && s(n, t.getScopeData()), n;
  }),
  (t.mergeAndOverwriteScopeData = l),
  (t.mergeScopeData = s);
