// vendor/other/module-5545.js — webpack module 5545
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(13391 /* vendor/other/module-13391 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(80781 /* vendor/other/module-80781 */),
  s = n(16698 /* external/node_async_hooks */),
  a = n(78474 /* external/node_events */),
  c = ["addListener", "on", "once", "prependListener", "prependOnceListener"];
function u() {
  const e = new s.AsyncLocalStorage();
  return () => ({ asyncLocalStorage: e, getStoreWithActiveSpan: l });
}
function l(e) {
  const t = i.context.active();
  return (o.spanIsIgnored(e) && o.getRootSpan(e) !== e) ||
    "1" === e.spanContext().traceState?.get(r.SENTRY_TRACE_STATE_CHILD_IGNORED)
    ? t
    : i.trace.setSpan(t, e);
}
(t.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION =
  r.SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION),
  (t.SentryPropagator = r.SentryPropagator),
  (t.SentrySampler = r.SentrySampler),
  (t.SentrySpanProcessor = r.SentrySpanProcessor),
  (t.SentryTracerProvider = r.SentryTracerProvider),
  (t.applyOtelSpanData = r.applyOtelSpanData),
  (t.backfillStreamedSpanDataFromOtel = r.backfillStreamedSpanDataFromOtel),
  (t.continueTrace = r.continueTrace),
  (t.enhanceDscWithOpenTelemetryRootSpanName =
    r.enhanceDscWithOpenTelemetryRootSpanName),
  (t.getActiveSpan = r.getActiveSpan),
  (t.getRequestSpanData = r.getRequestSpanData),
  (t.getScopesFromContext = r.getScopesFromContext),
  (t.getSentryResource = r.getSentryResource),
  (t.getSpanKind = r.getSpanKind),
  (t.getTraceContextForScope = r.getTraceContextForScope),
  (t.isSentryRequestSpan = r.isSentryRequestSpan),
  (t.openTelemetrySetupCheck = r.openTelemetrySetupCheck),
  (t.setIsSetup = r.setIsSetup),
  (t.setupEventContextTrace = r.setupEventContextTrace),
  (t.spanHasAttributes = r.spanHasAttributes),
  (t.spanHasEvents = r.spanHasEvents),
  (t.spanHasKind = r.spanHasKind),
  (t.spanHasName = r.spanHasName),
  (t.spanHasParentId = r.spanHasParentId),
  (t.spanHasStatus = r.spanHasStatus),
  (t.startInactiveSpan = r.startInactiveSpan),
  (t.startSpan = r.startSpan),
  (t.startSpanManual = r.startSpanManual),
  (t.suppressTracing = r.suppressTracing),
  (t.withActiveSpan = r.withActiveSpan),
  (t.wrapClientClass = r.wrapClientClass),
  (t.wrapContextManagerClass = r.wrapContextManagerClass),
  (t.wrapSamplingDecision = r.wrapSamplingDecision),
  (t.getClient = o.getClient),
  (t.getDynamicSamplingContextFromSpan = o.getDynamicSamplingContextFromSpan),
  (t.shouldPropagateTraceForUrl = o.shouldPropagateTraceForUrl),
  (t.withStreamedSpan = o.withStreamedSpan),
  (t.SentryAsyncLocalStorageContextManager = class {
    constructor() {
      (this._kOtListeners = Symbol("OtListeners")),
        (this._wrapped = !1),
        r.setIsSetup("SentryContextManager"),
        (this._asyncLocalStorage =
          o
            .getAsyncContextStrategy(o.getMainCarrier())
            .getTracingChannelBinding?.()?.asyncLocalStorage ??
          new s.AsyncLocalStorage());
    }
    active() {
      return this._asyncLocalStorage.getStore() ?? i.ROOT_CONTEXT;
    }
    with(e, t, n, ...o) {
      const i = r.buildContextWithSentryScopes(e, this.active()),
        s = null == n ? t : t.bind(n);
      return this._asyncLocalStorage.run(i, s, ...o);
    }
    enable() {
      return this;
    }
    disable() {
      return this._asyncLocalStorage.disable(), this;
    }
    bind(e, t) {
      return t instanceof a.EventEmitter
        ? this._bindEventEmitter(e, t)
        : "function" == typeof t
          ? this._bindFunction(e, t)
          : t;
    }
    getAsyncLocalStorageLookup() {
      return {
        asyncLocalStorage: this._asyncLocalStorage,
        contextSymbol: r.SENTRY_SCOPES_CONTEXT_KEY,
      };
    }
    _bindFunction(e, t) {
      const n = this.with.bind(this),
        r = function (...r) {
          return n(e, () => t.apply(this, r));
        };
      return (
        Object.defineProperty(r, "length", {
          enumerable: !1,
          configurable: !0,
          writable: !1,
          value: t.length,
        }),
        r
      );
    }
    _bindEventEmitter(e, t) {
      if (void 0 !== this._getPatchMap(t)) return t;
      this._createPatchMap(t);
      for (const n of c)
        void 0 !== t[n] && (t[n] = this._patchAddListener(t, t[n], e));
      return (
        "function" == typeof t.removeListener &&
          (t.removeListener = this._patchRemoveListener(t, t.removeListener)),
        "function" == typeof t.off &&
          (t.off = this._patchRemoveListener(t, t.off)),
        "function" == typeof t.removeAllListeners &&
          (t.removeAllListeners = this._patchRemoveAllListeners(
            t,
            t.removeAllListeners,
          )),
        t
      );
    }
    _patchRemoveListener(e, t) {
      const n = this;
      return function (r, o) {
        const i = n._getPatchMap(e)?.[r];
        if (void 0 === i) return t.call(this, r, o);
        const s = i.get(o);
        return t.call(this, r, s || o);
      };
    }
    _patchRemoveAllListeners(e, t) {
      const n = this;
      return function (r) {
        const o = n._getPatchMap(e);
        return (
          void 0 !== o &&
            (0 === arguments.length
              ? n._createPatchMap(e)
              : void 0 !== r && void 0 !== o[r] && delete o[r]),
          t.apply(this, arguments)
        );
      };
    }
    _patchAddListener(e, t, n) {
      const r = this;
      return function (o, i) {
        if (r._wrapped) return t.call(this, o, i);
        let s = r._getPatchMap(e);
        void 0 === s && (s = r._createPatchMap(e));
        let a = s[o];
        void 0 === a && ((a = new WeakMap()), (s[o] = a));
        const c = r.bind(n, i);
        a.set(i, c), (r._wrapped = !0);
        try {
          return t.call(this, o, c);
        } finally {
          r._wrapped = !1;
        }
      };
    }
    _createPatchMap(e) {
      const t = Object.create(null);
      return (e[this._kOtListeners] = t), t;
    }
    _getPatchMap(e) {
      return e[this._kOtListeners];
    }
  }),
  (t.setOpenTelemetryContextAsyncContextStrategy = function (e) {
    r.setOpenTelemetryContextAsyncContextStrategy({
      getTracingChannelBinding: e?.skipOpenTelemetrySetup
        ? () => {
            try {
              const e = i.context._getContextManager(),
                t = e?.getAsyncLocalStorageLookup().asyncLocalStorage;
              return t
                ? { asyncLocalStorage: t, getStoreWithActiveSpan: l }
                : void 0;
            } catch {
              return;
            }
          }
        : u(),
    });
  });
