// vendor/other/module-2286.js — webpack module 2286
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(80781 /* vendor/other/module-80781 */),
  i = n(47702 /* vendor/other/module-47702 */),
  s = n(96137 /* vendor/other/module-96137 */),
  a = n(57344 /* vendor/other/module-57344 */),
  c = n(32314 /* vendor/other/module-32314 */),
  u = n(78474 /* external/node_events */),
  l = n(37067 /* external/node_http */),
  d =
    (22 === c.NODE_VERSION.major && c.NODE_VERSION.minor >= 12) ||
    (23 === c.NODE_VERSION.major && c.NODE_VERSION.minor >= 2) ||
    c.NODE_VERSION.major >= 24;
function p(e = {}) {
  const { outgoingRequestApplyCustomAttributes: t, ...n } = e,
    i = {
      propagateTrace: n.propagateTraceInOutgoingRequests ?? !0,
      applyCustomAttributesOnSpan: t,
      ...n,
      spans: !1 !== n.createSpansForOutgoingRequests && (n.spans ?? !0),
      ignoreOutgoingRequests: (e, t) =>
        s.isTracingSuppressed() ||
        !!n.ignoreOutgoingRequests?.(e, s.getRequestOptions(t)),
      outgoingRequestHook(e, t) {
        n.outgoingRequestHook?.(e, t);
        const r = t.once,
          i = new Proxy(r, {
            apply(t, n, r) {
              const [i] = r;
              if ("response" !== i) return t.apply(n, r);
              const s = o.context.active(),
                a = o.trace.setSpan(s, e);
              return o.context.with(a, () => t.apply(n, r));
            },
          });
        t.once = i;
      },
      outgoingResponseHook(e, t) {
        n.outgoingResponseHook?.(e, t);
      },
      errorMonitor: u.errorMonitor,
      http: l,
    };
  d
    ? (function (e) {
        const { [s.HTTP_ON_CLIENT_REQUEST]: t } =
          s.getHttpClientSubscriptions(e);
        f && r.unsubscribe(s.HTTP_ON_CLIENT_REQUEST, f),
          r.subscribe(s.HTTP_ON_CLIENT_REQUEST, t),
          (f = t);
      })(i)
    : (function (e) {
        s.patchHttpModuleClient(l, e);
      })(i);
}
let f;
class h extends i.InstrumentationBase {
  constructor(e = {}) {
    super(a.INSTRUMENTATION_NAME, s.SDK_VERSION, e);
  }
  init() {
    p(this.getConfig());
  }
}
(t.SentryHttpInstrumentation = h), (t.instrumentHttpOutgoingRequests = p);
