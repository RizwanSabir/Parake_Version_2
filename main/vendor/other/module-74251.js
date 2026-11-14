// vendor/other/module-74251.js — webpack module 74251
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(86270 /* vendor/other/module-86270 */),
  o = n(9554 /* vendor/other/module-9554 */),
  i = n(76041 /* vendor/other/module-76041 */),
  s = n(75703 /* vendor/other/module-75703 */),
  a = n(59237 /* vendor/other/module-59237 */),
  c = n(93035 /* vendor/other/module-93035 */),
  u = n(97352 /* vendor/other/module-97352 */),
  l = n(58637 /* vendor/other/module-58637 */),
  d = n(73868 /* vendor/other/module-73868 */),
  p = n(82615 /* vendor/other/module-82615 */),
  f = n(28260 /* vendor/other/module-28260 */),
  h = n(35959 /* vendor/other/module-35959 */),
  g = n(25607 /* vendor/other/module-25607 */);
class m extends o.Client {
  constructor(e) {
    u.addUserAgentToTransportHeaders(e),
      "stream" !== e.traceLifecycle ||
        e.integrations.some((e) => "SpanStreaming" === e.name) ||
        e.integrations.push(a.spanStreamingIntegration()),
      super(e),
      (this._disposeCallbacks = []),
      this._setUpMetricsProcessing();
  }
  eventFromException(e, t) {
    const n = d.eventFromUnknownInput(this, this._options.stackParser, e, t);
    return (n.level = "error"), h.resolvedSyncPromise(n);
  }
  eventFromMessage(e, t = "info", n) {
    return h.resolvedSyncPromise(
      d.eventFromMessage(
        this._options.stackParser,
        e,
        t,
        n,
        this._options.attachStacktrace,
      ),
    );
  }
  captureException(e, t, n) {
    return _(t), super.captureException(e, t, n);
  }
  captureEvent(e, t, n) {
    return (
      !e.type && e.exception?.values && e.exception.values.length > 0 && _(t),
      super.captureEvent(e, t, n)
    );
  }
  captureCheckIn(e, t, n) {
    const o = "checkInId" in e && e.checkInId ? e.checkInId : p.uuid4();
    if (!this._isEnabled())
      return (
        s.DEBUG_BUILD &&
          l.debug.warn("SDK not enabled, will not capture check-in."),
        o
      );
    const i = this.getOptions(),
      { release: a, environment: c, tunnel: u } = i,
      d = {
        check_in_id: o,
        monitor_slug: e.monitorSlug,
        status: e.status,
        release: a,
        environment: c,
      };
    "duration" in e && (d.duration = e.duration),
      t &&
        (d.monitor_config = {
          schedule: t.schedule,
          checkin_margin: t.checkinMargin,
          max_runtime: t.maxRuntime,
          timezone: t.timezone,
          failure_issue_threshold: t.failureIssueThreshold,
          recovery_threshold: t.recoveryThreshold,
        });
    const [f, h] = g._getTraceInfoFromScope(this, n);
    h && (d.contexts = { trace: h });
    const m = r.createCheckInEnvelope(
      d,
      f,
      this.getSdkMetadata(),
      u,
      this.getDsn(),
    );
    return (
      s.DEBUG_BUILD && l.debug.log("Sending checkin:", e.monitorSlug, e.status),
      this.sendEnvelope(m),
      o
    );
  }
  registerCleanup(e) {
    this._disposeCallbacks.push(e);
  }
  dispose() {
    s.DEBUG_BUILD && l.debug.log("Disposing client...");
    for (const e of this._disposeCallbacks)
      try {
        e();
      } catch {}
    this._disposeCallbacks.length = 0;
    for (const e of Object.keys(this._hooks)) this._hooks[e]?.clear();
    (this._hooks = {}),
      (this._eventProcessors.length = 0),
      (this._integrations = {}),
      (this._outcomes = {}),
      (this._transport = void 0),
      (this._promiseBuffer = f.makePromiseBuffer(
        c.DEFAULT_TRANSPORT_BUFFER_SIZE,
      ));
  }
  _prepareEvent(e, t, n, r) {
    return (
      this._options.platform &&
        (e.platform = e.platform || this._options.platform),
      this._options.runtime &&
        (e.contexts = {
          ...e.contexts,
          runtime: e.contexts?.runtime || this._options.runtime,
        }),
      this._options.serverName &&
        (e.server_name = e.server_name || this._options.serverName),
      super._prepareEvent(e, t, n, r)
    );
  }
  _setUpMetricsProcessing() {
    this.on("processMetric", (e) => {
      this._options.serverName &&
        (e.attributes = {
          "server.address": this._options.serverName,
          ...e.attributes,
        });
    });
  }
}
function _(e) {
  const t = i.getIsolationScope().getScopeData()
    .sdkProcessingMetadata.requestSession;
  if (t) {
    const n = e?.mechanism?.handled ?? !0;
    n && "crashed" !== t.status
      ? (t.status = "errored")
      : n || (t.status = "crashed");
  }
}
t.ServerRuntimeClient = m;
