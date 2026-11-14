// vendor/other/module-75715.js — webpack module 75715
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(60169 /* vendor/other/module-60169 */),
  i = n(10627 /* vendor/other/module-10627 */),
  s = n(38862 /* vendor/other/module-38862 */);
function a(e, t) {
  const {
    extra: n,
    tags: r,
    attributes: o,
    user: s,
    contexts: a,
    level: u,
    sdkProcessingMetadata: l,
    breadcrumbs: d,
    fingerprint: p,
    eventProcessors: f,
    attachments: h,
    propagationContext: g,
    transactionName: m,
    span: _,
  } = t;
  c(e, "extra", n),
    c(e, "tags", r),
    c(e, "attributes", o),
    c(e, "user", s),
    c(e, "contexts", a),
    (e.sdkProcessingMetadata = i.merge(e.sdkProcessingMetadata, l, 2)),
    u && (e.level = u),
    m && (e.transactionName = m),
    _ && (e.span = _),
    d.length && (e.breadcrumbs = [...e.breadcrumbs, ...d]),
    p.length && (e.fingerprint = [...e.fingerprint, ...p]),
    f.length && (e.eventProcessors = [...e.eventProcessors, ...f]),
    h.length && (e.attachments = [...e.attachments, ...h]),
    (e.propagationContext = { ...e.propagationContext, ...g });
}
function c(e, t, n) {
  e[t] = i.merge(e[t], n, 1);
}
(t.applyScopeDataToEvent = function (e, t) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: i,
    sdkProcessingMetadata: a,
  } = t;
  !(function (e, t) {
    const {
      extra: n,
      tags: r,
      user: o,
      contexts: i,
      level: s,
      transactionName: a,
    } = t;
    Object.keys(n).length && (e.extra = { ...n, ...e.extra }),
      Object.keys(r).length && (e.tags = { ...r, ...e.tags }),
      Object.keys(o).length && (e.user = { ...o, ...e.user }),
      Object.keys(i).length && (e.contexts = { ...i, ...e.contexts }),
      s && (e.level = s),
      a && "transaction" !== e.type && (e.transaction = a);
  })(e, t),
    r &&
      (function (e, t) {
        (e.contexts = {
          trace: s.spanToTraceContext(t),
          ...e.contexts,
        }),
          (e.sdkProcessingMetadata = {
            dynamicSamplingContext: o.getDynamicSamplingContextFromSpan(t),
            ...e.sdkProcessingMetadata,
          });
        const n = s.getRootSpan(t),
          r = s.spanToJSON(n).description;
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
    })(e, a);
}),
  (t.getCombinedScopeData = function (e, t) {
    const n = r.getGlobalScope().getScopeData();
    return e && a(n, e.getScopeData()), t && a(n, t.getScopeData()), n;
  }),
  (t.mergeAndOverwriteScopeData = c),
  (t.mergeScopeData = a);
