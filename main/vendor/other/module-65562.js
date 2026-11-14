// vendor/other/module-65562.js — webpack module 65562
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(48161 /* external/node_os */),
  o = n(80781 /* vendor/other/module-80781 */),
  i = n(47702 /* vendor/other/module-47702 */),
  s = n(96137 /* vendor/other/module-96137 */),
  a = n(5545 /* vendor/other/module-5545 */),
  c = n(28167 /* external/worker_threads */),
  u = n(14052 /* vendor/other/module-14052 */);
class l extends s.ServerRuntimeClient {
  constructor(e) {
    const t =
        !1 === e.includeServerName
          ? void 0
          : e.serverName || global.process.env.SENTRY_NAME || r.hostname(),
      n = {
        ...e,
        platform: "node",
        runtime: e.runtime || {
          name: "node",
          version: global.process.version,
        },
        serverName: t,
      };
    e.openTelemetryInstrumentations &&
      i.registerInstrumentations({
        instrumentations: e.openTelemetryInstrumentations,
      }),
      s.applySdkMetadata(n, "node"),
      s.debug.log(
        `Initializing Sentry: process: ${process.pid}, thread: ${c.isMainThread ? "main" : `worker-${c.threadId}`}.`,
      ),
      super(n),
      this.getOptions().enableLogs &&
        ((this._logOnExitFlushListener = () => {
          s._INTERNAL_flushLogsBuffer(this);
        }),
        t &&
          this.on("beforeCaptureLog", (e) => {
            e.attributes = { ...e.attributes, "server.address": t };
          }),
        process.on("beforeExit", this._logOnExitFlushListener)),
      s._INTERNAL_setDeferSegmentSpanCapture(this);
  }
  get tracer() {
    if (this._tracer) return this._tracer;
    const e = s.SDK_VERSION,
      t = o.trace.getTracer("@sentry/node", e);
    return (this._tracer = t), t;
  }
  async flush(e) {
    return (
      await this.traceProvider?.forceFlush(),
      this.getOptions().sendClientReports && this._flushOutcomes(),
      super.flush(e)
    );
  }
  async close(e) {
    this._clientReportInterval && clearInterval(this._clientReportInterval),
      this._clientReportOnExitFlushListener &&
        process.off("beforeExit", this._clientReportOnExitFlushListener),
      this._logOnExitFlushListener &&
        process.off("beforeExit", this._logOnExitFlushListener);
    const t = await super.close(e);
    return this.traceProvider && (await this.traceProvider.shutdown()), t;
  }
  startClientReportTracking() {
    const e = this.getOptions();
    e.sendClientReports &&
      ((this._clientReportOnExitFlushListener = () => {
        this._flushOutcomes();
      }),
      (this._clientReportInterval = setInterval(() => {
        u.DEBUG_BUILD &&
          s.debug.log("Flushing client reports based on interval."),
          this._flushOutcomes();
      }, e.clientReportFlushInterval ?? 6e4).unref()),
      process.on("beforeExit", this._clientReportOnExitFlushListener));
  }
  _setupIntegrations() {
    s._INTERNAL_clearAiProviderSkips(), super._setupIntegrations();
  }
  _getTraceInfoFromScope(e) {
    return e ? a.getTraceContextForScope(this, e) : [void 0, void 0];
  }
}
t.NodeClient = l;
