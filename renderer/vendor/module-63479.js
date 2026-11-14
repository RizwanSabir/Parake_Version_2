// vendor/module-63479.js — webpack module 63479
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(12724 /* vendor/module-12724 */),
  o = n(75715 /* vendor/module-75715 */),
  i = n(38862 /* vendor/module-38862 */),
  a = n(30401 /* vendor/module-30401 */),
  s = n(3365 /* vendor/module-3365 */),
  l = n(58594 /* vendor/module-58594 */),
  c = n(56080 /* vendor/module-56080 */),
  u = n(88516 /* vendor/module-88516 */);
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
      { isolationScope: m, scope: g } = a.getCapturedScopesOnSpan(e),
      y = o.getCombinedScopeData(m, g);
    !(function (e, t, n, o) {
      const i = n.getSdkMetadata(),
        { release: a, environment: s } = n.getOptions();
      d(e, {
        [u.SENTRY_TRACE_LIFECYCLE]: "stream",
        [u.SENTRY_SEGMENT_NAME]: t.name,
        [u.SENTRY_SEGMENT_ID]: t.span_id,
        [u.SENTRY_SDK_NAME]: i?.sdk?.name,
        [u.SENTRY_SDK_VERSION]: i?.sdk?.version,
        [r.SEMANTIC_ATTRIBUTE_SENTRY_RELEASE]: a,
        [r.SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT]: s || c.DEFAULT_ENVIRONMENT,
        [r.SEMANTIC_ATTRIBUTE_USER_ID]: o.user?.id,
        [r.SEMANTIC_ATTRIBUTE_USER_EMAIL]: o.user?.email,
        [r.SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: o.user?.ip_address,
        [r.SEMANTIC_ATTRIBUTE_USER_USERNAME]: o.user?.username,
        ...o.attributes,
      });
    })(n, h, t, y);
    const v = e.kind;
    t.emit("preprocessSpan", n, { spanKind: v }),
      n.is_segment &&
        ((function (e, t) {
          d(e, l.scopeContextsToSpanAttributes(t.contexts));
        })(n, y),
        (function (e, t) {
          const n = t.getIntegrationNames();
          n.length &&
            d(e, {
              [r.SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS]: n,
            });
        })(n, t),
        t.emit("processSegmentSpan", n)),
      t.emit("processSpan", n);
    const { beforeSendSpan: b } = t.getOptions(),
      S = b && s.isStreamedBeforeSendSpanCallback(b) ? p(n, b) : n,
      _ = S.attributes?.[r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    return (
      n.is_segment && _ && d(S, { "sentry.segment.name.source": _ }),
      { ...i.streamedSpanJsonToSerializedSpan(S), _segmentSpan: f }
    );
  }),
  (t.safeSetSpanJSONAttributes = d);
