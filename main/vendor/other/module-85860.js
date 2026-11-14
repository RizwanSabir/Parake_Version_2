// vendor/other/module-85860.js — webpack module 85860
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(12724 /* vendor/other/module-12724 */),
  o = n(75715 /* vendor/other/module-75715 */),
  i = n(38862 /* vendor/other/module-38862 */),
  s = n(30401 /* vendor/other/module-30401 */),
  a = n(3365 /* vendor/other/module-3365 */),
  c = n(58594 /* vendor/other/module-58594 */),
  u = n(56080 /* vendor/other/module-56080 */),
  l = n(88516 /* vendor/other/module-88516 */);
function d(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([e, t]) => {
    null == t || e in n || (n[e] = t);
  });
}
function p(e, t) {
  return t(e) || (i.showSpanDropWarning(), e);
}
(t.applyBeforeSendSpanCallback = p),
  (t.captureSpan = function (e, t) {
    const n = i.spanToStreamedSpanJSON(e),
      f = i.INTERNAL_getSegmentSpan(e),
      h = i.spanToStreamedSpanJSON(f),
      { isolationScope: g, scope: m } = s.getCapturedScopesOnSpan(e),
      _ = o.getCombinedScopeData(g, m);
    !(function (e, t, n, o) {
      const i = n.getSdkMetadata(),
        { release: s, environment: a } = n.getOptions();
      d(e, {
        [l.SENTRY_TRACE_LIFECYCLE]: "stream",
        [l.SENTRY_SEGMENT_NAME]: t.name,
        [l.SENTRY_SEGMENT_ID]: t.span_id,
        [l.SENTRY_SDK_NAME]: i?.sdk?.name,
        [l.SENTRY_SDK_VERSION]: i?.sdk?.version,
        [r.SEMANTIC_ATTRIBUTE_SENTRY_RELEASE]: s,
        [r.SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT]: a || u.DEFAULT_ENVIRONMENT,
        [r.SEMANTIC_ATTRIBUTE_USER_ID]: o.user?.id,
        [r.SEMANTIC_ATTRIBUTE_USER_EMAIL]: o.user?.email,
        [r.SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: o.user?.ip_address,
        [r.SEMANTIC_ATTRIBUTE_USER_USERNAME]: o.user?.username,
        ...o.attributes,
      });
    })(n, h, t, _);
    const S = e.kind;
    t.emit("preprocessSpan", n, { spanKind: S }),
      n.is_segment &&
        ((function (e, t) {
          d(e, c.scopeContextsToSpanAttributes(t.contexts));
        })(n, _),
        (function (e, t) {
          const n = t.getIntegrationNames();
          n.length &&
            d(e, {
              [r.SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS]: n,
            });
        })(n, t),
        t.emit("processSegmentSpan", n)),
      t.emit("processSpan", n);
    const { beforeSendSpan: E } = t.getOptions(),
      y = E && a.isStreamedBeforeSendSpanCallback(E) ? p(n, E) : n,
      T = y.attributes?.[r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    return (
      n.is_segment && T && d(y, { "sentry.segment.name.source": T }),
      { ...i.streamedSpanJsonToSerializedSpan(y), _segmentSpan: f }
    );
  }),
  (t.safeSetSpanJSONAttributes = d);
