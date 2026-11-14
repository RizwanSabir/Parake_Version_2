// vendor/module-92282.js — webpack module 92282
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = n(68956 /* vendor/module-68956 */);
t.UIProfiler = class {
  constructor() {
    (this._client = void 0),
      (this._profiler = void 0),
      (this._chunkTimer = void 0),
      (this._profilerId = void 0),
      (this._isRunning = !1),
      (this._sessionSampled = !1),
      (this._lifecycleMode = void 0),
      (this._activeRootSpanIds = new Set()),
      (this._rootSpanTimeouts = new Map());
  }
  initialize(e) {
    const t = e.getOptions().profileLifecycle,
      n = i.shouldProfileSession(e.getOptions());
    o.DEBUG_BUILD &&
      r.debug.log(`[Profiling] Initializing profiler (lifecycle='${t}').`),
      n ||
        (o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Session not sampled. Skipping lifecycle profiler initialization.",
          )),
      (this._profilerId = r.uuid4()),
      (this._client = e),
      (this._sessionSampled = n),
      (this._lifecycleMode = t),
      "trace" === t && this._setupTraceLifecycleListeners(e),
      e.on("spanStart", (e) => {
        this._isRunning && i.setThreadAttributes(e);
      });
  }
  start() {
    "trace" !== this._lifecycleMode
      ? this._isRunning
        ? o.DEBUG_BUILD &&
          r.debug.warn(
            "[Profiling] Profile session is already running, `uiProfiler.start()` is a no-op.",
          )
        : this._sessionSampled
          ? this._beginProfiling()
          : o.DEBUG_BUILD &&
            r.debug.warn(
              "[Profiling] Session is not sampled, `uiProfiler.start()` is a no-op.",
            )
      : o.DEBUG_BUILD &&
        r.debug.warn(
          '[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.start()` are ignored in trace mode.',
        );
  }
  stop() {
    "trace" !== this._lifecycleMode
      ? this._isRunning
        ? this._endProfiling()
        : o.DEBUG_BUILD &&
          r.debug.warn(
            "[Profiling] Profiler is not running, `uiProfiler.stop()` is a no-op.",
          )
      : o.DEBUG_BUILD &&
        r.debug.warn(
          '[Profiling] `profileLifecycle` is set to "trace". Calls to `uiProfiler.stop()` are ignored in trace mode.',
        );
  }
  notifyRootSpanActive(e) {
    if ("trace" !== this._lifecycleMode || !this._sessionSampled) return;
    const t = e.spanContext().spanId;
    if (!t || this._activeRootSpanIds.has(t)) return;
    this._registerTraceRootSpan(t);
    const n = this._activeRootSpanIds.size;
    1 === n &&
      (o.DEBUG_BUILD &&
        r.debug.log(
          "[Profiling] Detected already active root span during setup. Active root spans now:",
          n,
        ),
      this._beginProfiling()),
      this._isRunning && i.setThreadAttributes(e);
  }
  _beginProfiling() {
    if (!this._isRunning) {
      if (
        ((this._isRunning = !0),
        o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Started profiling with profiler ID:",
            this._profilerId,
          ),
        r
          .getGlobalScope()
          .setContext("profile", { profiler_id: this._profilerId }),
        this._startProfilerInstance(),
        !this._profiler)
      )
        return (
          o.DEBUG_BUILD &&
            r.debug.log("[Profiling] Failed to start JS Profiler; stopping."),
          void this._resetProfilerInfo()
        );
      this._startPeriodicChunking();
    }
  }
  _endProfiling() {
    this._isRunning &&
      ((this._isRunning = !1),
      this._chunkTimer &&
        (clearTimeout(this._chunkTimer), (this._chunkTimer = void 0)),
      this._clearAllRootSpanTimeouts(),
      this._collectCurrentChunk().catch((e) => {
        o.DEBUG_BUILD &&
          r.debug.error(
            "[Profiling] Failed to collect current profile chunk on `stop()`:",
            e,
          );
      }),
      "manual" === this._lifecycleMode &&
        r.getGlobalScope().setContext("profile", {}));
  }
  _setupTraceLifecycleListeners(e) {
    e.on("spanStart", (e) => {
      if (!this._sessionSampled)
        return void (
          o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Span not profiled because of negative sampling decision for user session.",
          )
        );
      if (e !== r.getRootSpan(e)) return;
      if (!e.isRecording())
        return void (
          o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Discarding profile because root span was not sampled.",
          )
        );
      const t = e.spanContext().spanId;
      if (!t || this._activeRootSpanIds.has(t)) return;
      this._registerTraceRootSpan(t);
      const n = this._activeRootSpanIds.size;
      1 === n &&
        (o.DEBUG_BUILD &&
          r.debug.log(
            `[Profiling] Root span ${t} started. Profiling active while there are active root spans (count=${n}).`,
          ),
        this._beginProfiling());
    }),
      e.on("spanEnd", (e) => {
        if (!this._sessionSampled) return;
        const t = e.spanContext().spanId;
        if (!t || !this._activeRootSpanIds.has(t)) return;
        this._activeRootSpanIds.delete(t);
        const n = this._activeRootSpanIds.size;
        o.DEBUG_BUILD &&
          r.debug.log(
            `[Profiling] Root span with ID ${t} ended. Will continue profiling for as long as there are active root spans (currently: ${n}).`,
          ),
          0 === n &&
            (this._collectCurrentChunk().catch((e) => {
              o.DEBUG_BUILD &&
                r.debug.error(
                  "[Profiling] Failed to collect current profile chunk on last `spanEnd`:",
                  e,
                );
            }),
            this._endProfiling());
      });
  }
  _resetProfilerInfo() {
    (this._isRunning = !1), r.getGlobalScope().setContext("profile", {});
  }
  _clearAllRootSpanTimeouts() {
    this._rootSpanTimeouts.forEach((e) => clearTimeout(e)),
      this._rootSpanTimeouts.clear();
  }
  _registerTraceRootSpan(e) {
    this._activeRootSpanIds.add(e);
    const t = setTimeout(() => this._onRootSpanTimeout(e), 3e5);
    this._rootSpanTimeouts.set(e, t);
  }
  _startProfilerInstance() {
    if (!1 === this._profiler?.stopped) return;
    const e = i.startJSSelfProfile();
    e
      ? (this._profiler = e)
      : o.DEBUG_BUILD &&
        r.debug.log("[Profiling] Failed to start JS Profiler.");
  }
  _startPeriodicChunking() {
    this._isRunning &&
      (this._chunkTimer = setTimeout(() => {
        if (
          (this._collectCurrentChunk().catch((e) => {
            o.DEBUG_BUILD &&
              r.debug.error(
                "[Profiling] Failed to collect current profile chunk during periodic chunking:",
                e,
              );
          }),
          this._isRunning)
        ) {
          if ((this._startProfilerInstance(), !this._profiler))
            return void this._resetProfilerInfo();
          this._startPeriodicChunking();
        }
      }, 6e4));
  }
  _onRootSpanTimeout(e) {
    this._rootSpanTimeouts.has(e) &&
      (this._rootSpanTimeouts.delete(e),
      this._activeRootSpanIds.has(e) &&
        (o.DEBUG_BUILD &&
          r.debug.log(
            `[Profiling] Reached 5-minute timeout for root span ${e}. You likely started a manual root span that never called \`.end()\`.`,
          ),
        this._activeRootSpanIds.delete(e),
        0 === this._activeRootSpanIds.size && this._endProfiling()));
  }
  async _collectCurrentChunk() {
    const e = this._profiler;
    if (((this._profiler = void 0), e))
      try {
        const t = await e.stop(),
          n = i.createProfileChunkPayload(t, this._client, this._profilerId),
          a = i.validateProfileChunk(n);
        if ("reason" in a)
          return void (
            o.DEBUG_BUILD &&
            r.debug.log(
              "[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):",
              a.reason,
            )
          );
        this._sendProfileChunk(n),
          o.DEBUG_BUILD &&
            r.debug.log("[Profiling] Collected browser profile chunk.");
      } catch (e) {
        o.DEBUG_BUILD &&
          r.debug.log(
            "[Profiling] Error while stopping JS Profiler for chunk:",
            e,
          );
      }
  }
  _sendProfileChunk(e) {
    const t = this._client,
      n = r.getSdkMetadataForEnvelopeHeader(t.getSdkMetadata?.()),
      i = t.getDsn(),
      a = t.getOptions().tunnel,
      s = r.createEnvelope(
        {
          event_id: r.uuid4(),
          sent_at: new Date().toISOString(),
          ...(n && { sdk: n }),
          ...(!!a && i && { dsn: r.dsnToString(i) }),
        },
        [[{ type: "profile_chunk", platform: "javascript" }, e]],
      );
    t.sendEnvelope(s).then(null, (e) => {
      o.DEBUG_BUILD &&
        r.debug.error("Error while sending profile chunk envelope:", e);
    });
  }
};
