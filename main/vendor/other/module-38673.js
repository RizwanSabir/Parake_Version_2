// vendor/other/module-38673.js — webpack module 38673
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(47702 /* vendor/other/module-47702 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(24026 /* vendor/other/module-24026 */),
  s = [">=3.0.0 <7"],
  a = [
    "generateText",
    "streamText",
    "generateObject",
    "streamObject",
    "embed",
    "embedMany",
    "rerank",
  ];
function c(e) {
  if ("object" != typeof e || null === e) return !1;
  const t = e;
  return (
    "type" in t &&
    "error" in t &&
    "toolName" in t &&
    "toolCallId" in t &&
    "tool-error" === t.type &&
    t.error instanceof Error
  );
}
function u(e) {
  if ("object" != typeof e || null === e || !("content" in e)) return;
  const t = e;
  Array.isArray(t.content) &&
    ((function (e) {
      for (const t of e) {
        if (!c(t)) continue;
        const e = o._INTERNAL_getSpanContextForToolCallId(t.toolCallId);
        e
          ? o.withScope((n) => {
              n.setContext("trace", {
                trace_id: e.traceId,
                span_id: e.spanId,
              }),
                n.setTag("vercel.ai.tool.name", t.toolName),
                n.setTag("vercel.ai.tool.callId", t.toolCallId),
                n.setLevel("error"),
                o.captureException(t.error, {
                  mechanism: {
                    type: "auto.vercelai.otel",
                    handled: !1,
                  },
                });
            })
          : o.withScope((e) => {
              e.setTag("vercel.ai.tool.name", t.toolName),
                e.setTag("vercel.ai.tool.callId", t.toolCallId),
                e.setLevel("error"),
                o.captureException(t.error, {
                  mechanism: {
                    type: "auto.vercelai.otel",
                    handled: !1,
                  },
                });
            });
      }
    })(t.content),
    l(t.content));
}
function l(e) {
  for (const t of e)
    "object" == typeof t &&
      null !== t &&
      "toolCallId" in t &&
      "string" == typeof t.toolCallId &&
      o._INTERNAL_cleanupToolCallSpanContext(t.toolCallId);
}
function d(e, t, n, r, o) {
  return {
    recordInputs:
      void 0 !== e?.recordInputs
        ? e.recordInputs
        : void 0 !== t.recordInputs
          ? t.recordInputs
          : !0 === n || r,
    recordOutputs:
      void 0 !== e?.recordOutputs
        ? e.recordOutputs
        : void 0 !== t.recordOutputs
          ? t.recordOutputs
          : !0 === n || o,
  };
}
class p extends r.InstrumentationBase {
  constructor(e = {}) {
    super("@sentry/instrumentation-vercel-ai", o.SDK_VERSION, e),
      (this._isPatched = !1),
      (this._callbacks = []);
  }
  init() {
    return new r.InstrumentationNodeModuleDefinition(
      "ai",
      s,
      this._patch.bind(this),
    );
  }
  callWhenPatched(e) {
    this._isPatched ? e() : this._callbacks.push(e);
  }
  _patch(e) {
    (this._isPatched = !0),
      this._callbacks.forEach((e) => e()),
      (this._callbacks = []);
    const t = (e) =>
      new Proxy(e, {
        apply: (e, t, n) => {
          const r = n[0].experimental_telemetry || {},
            s = r.isEnabled,
            a = o.getClient(),
            c = a?.getIntegrationByName(i.INTEGRATION_NAME),
            l = c?.options,
            p = c ? a?.getDataCollectionOptions().genAI : void 0,
            { recordInputs: f, recordOutputs: h } = d(
              l,
              r,
              s,
              Boolean(p?.inputs),
              Boolean(p?.outputs),
            );
          return (
            (n[0].experimental_telemetry = {
              ...r,
              isEnabled: void 0 === s || s,
              recordInputs: f,
              recordOutputs: h,
            }),
            o.handleCallbackErrors(
              () => Reflect.apply(e, t, n),
              (e) => {
                e &&
                  "object" == typeof e &&
                  o.addNonEnumerableProperty(
                    e,
                    "_sentry_active_span",
                    o.getActiveSpan(),
                  );
              },
              () => {},
              (e) => {
                u(e);
              },
            )
          );
        },
      });
    if ("[object Module]" === Object.prototype.toString.call(e)) {
      for (const n of a) null != e[n] && (e[n] = t(e[n]));
      return e;
    }
    {
      const n = a.reduce((n, r) => (null != e[r] && (n[r] = t(e[r])), n), {});
      return { ...e, ...n };
    }
  }
}
(t.SentryVercelAiInstrumentation = p),
  (t.cleanupToolCallSpanContexts = l),
  (t.determineRecordingSettings = d),
  (t.processToolCallResults = u);
