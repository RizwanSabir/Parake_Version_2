// vendor/module-9554.js — webpack module 9554
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(49009 /* vendor/module-49009 */),
  o = n(56080 /* vendor/module-56080 */),
  i = n(76041 /* vendor/module-76041 */),
  a = n(75703 /* vendor/module-75703 */),
  s = n(56997 /* vendor/module-56997 */),
  l = n(82579 /* vendor/module-82579 */),
  c = n(92236 /* vendor/module-92236 */),
  u = n(64554 /* vendor/module-64554 */),
  d = n(52889 /* vendor/module-52889 */),
  p = n(60169 /* vendor/module-60169 */),
  f = n(3365 /* vendor/module-3365 */),
  h = n(22746 /* vendor/module-22746 */),
  m = n(93035 /* vendor/module-93035 */),
  g = n(2522 /* vendor/module-2522 */),
  y = n(58637 /* vendor/module-58637 */),
  v = n(31538 /* vendor/module-31538 */),
  b = n(76403 /* vendor/module-76403 */),
  S = n(95246 /* vendor/module-95246 */),
  _ = n(23295 /* vendor/module-23295 */),
  x = n(10627 /* vendor/module-10627 */),
  w = n(82615 /* vendor/module-82615 */),
  E = n(18828 /* vendor/module-18828 */),
  T = n(95418 /* vendor/module-95418 */),
  k = n(28260 /* vendor/module-28260 */),
  C = n(97190 /* vendor/module-97190 */),
  I = n(51644 /* vendor/module-51644 */),
  A = n(38862 /* vendor/module-38862 */),
  O = n(98050 /* vendor/module-98050 */),
  R = n(93911 /* vendor/module-93911 */),
  M = n(40417 /* vendor/module-40417 */),
  P = "Not capturing exception because it's already been captured.",
  N = "Discarded session because of missing or non-string release",
  D = Symbol.for("SentryInternalError"),
  j = Symbol.for("SentryDoNotSendEventError");
function L(e) {
  return { message: e, [D]: !0 };
}
function F(e) {
  return { message: e, [j]: !0 };
}
function U(e) {
  return _.isObjectLike(e) && D in e;
}
function B(e) {
  return _.isObjectLike(e) && j in e;
}
function z(e, t, n, r, o) {
  let i,
    a = 0,
    s = !1;
  e.on(n, () => {
    (a = 0), clearTimeout(i), (s = !1);
  }),
    e.on(t, (t) => {
      if (((a += r(t)), a >= 8e5)) o(e);
      else if (!s) {
        const t = e.getOptions()._flushInterval ?? 5e3;
        t > 0 &&
          ((s = !0),
          (i = O.safeUnref(
            setTimeout(() => {
              o(e);
            }, t),
          )));
      }
    }),
    e.on("flush", () => {
      o(e);
    });
}
function H(e) {
  return "replay_event" === e ? "replay" : e || "error";
}
function V(e) {
  return void 0 === e.type;
}
function q(e) {
  return "transaction" === e.type;
}
function G(e) {
  let t = 0;
  return e.name && (t += 2 * e.name.length), (t += 8), t + $(e.attributes);
}
function W(e) {
  let t = 0;
  return e.message && (t += 2 * e.message.length), t + $(e.attributes);
}
function $(e) {
  if (!e) return 0;
  let t = 0;
  return (
    Object.values(e).forEach((e) => {
      Array.isArray(e)
        ? (t += e.length * Y(e[0]))
        : _.isPrimitive(e)
          ? (t += Y(e))
          : (t += 100);
    }),
    t
  );
}
function Y(e) {
  return "string" == typeof e
    ? 2 * e.length
    : "number" == typeof e
      ? 8
      : "boolean" == typeof e
        ? 4
        : 0;
}
t.Client = class {
  constructor(e) {
    if (
      ((this._options = e),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      (this._promiseBuffer = k.makePromiseBuffer(
        e.transportOptions?.bufferSize ?? m.DEFAULT_TRANSPORT_BUFFER_SIZE,
      )),
      (this._dataCollection = M.resolveDataCollectionOptions(e)),
      e.dsn
        ? (this._dsn = v.makeDsn(e.dsn))
        : a.DEBUG_BUILD &&
          y.debug.warn("No DSN provided, client will not send events."),
      this._dsn)
    ) {
      const t = r.getEnvelopeEndpointWithUrlEncodedAuth(
        this._dsn,
        e.tunnel,
        e._metadata ? e._metadata.sdk : void 0,
      );
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: t,
      });
    }
    (this._options.enableLogs =
      this._options.enableLogs ?? this._options._experiments?.enableLogs),
      this._options.enableLogs &&
        z(this, "afterCaptureLog", "flushLogs", W, c._INTERNAL_flushLogsBuffer),
      (this._options.enableMetrics ??
        this._options._experiments?.enableMetrics ??
        1) &&
        z(
          this,
          "afterCaptureMetric",
          "flushMetrics",
          G,
          u._INTERNAL_flushMetricsBuffer,
        );
  }
  captureException(e, t, n) {
    const r = w.uuid4();
    if (w.checkOrSetAlreadyCaught(e)) return a.DEBUG_BUILD && y.debug.log(P), r;
    const o = { event_id: r, ...t };
    return (
      this._process(
        () =>
          this.eventFromException(e, o)
            .then((e) => this._captureEvent(e, o, n))
            .then((e) => e),
        "error",
      ),
      o.event_id
    );
  }
  captureMessage(e, t, n, r) {
    const o = { event_id: w.uuid4(), ...n },
      i = _.isParameterizedString(e) ? e : String(e),
      a = _.isPrimitive(e),
      s = a ? this.eventFromMessage(i, t, o) : this.eventFromException(e, o);
    return (
      this._process(
        () => s.then((e) => this._captureEvent(e, o, r)),
        a ? "unknown" : "error",
      ),
      o.event_id
    );
  }
  captureEvent(e, t, n) {
    const r = w.uuid4();
    if (t?.originalException && w.checkOrSetAlreadyCaught(t.originalException))
      return a.DEBUG_BUILD && y.debug.log(P), r;
    const o = { event_id: r, ...t },
      i = e.sdkProcessingMetadata || {},
      s = i.capturedSpanScope,
      l = i.capturedSpanIsolationScope,
      c = H(e.type);
    return (
      this._process(() => this._captureEvent(e, o, s || n, l), c), o.event_id
    );
  }
  captureSession(e) {
    this.sendSession(e), d.updateSession(e, { init: !1 });
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getDataCollectionOptions() {
    return this._dataCollection;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(e) {
    const t = this._transport;
    if ((this.emit("flush"), !t)) return !0;
    const n = await this._isClientDoneProcessing(e),
      r = await t.flush(e);
    return n && r;
  }
  async close(e) {
    const t = await this.flush(e);
    return (this.getOptions().enabled = !1), this.emit("close"), t;
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    (this._isEnabled() ||
      this._options.integrations.some(({ name: e }) =>
        e.startsWith("Spotlight"),
      )) &&
      this._setupIntegrations();
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  getIntegrationNames() {
    return Object.keys(this._integrations);
  }
  addIntegration(e) {
    const t = this._integrations[e.name];
    !t && e.beforeSetup && e.beforeSetup(this),
      l.setupIntegration(this, e, this._integrations),
      t || l.afterSetupIntegrations(this, [e]);
  }
  sendEvent(e, t = {}) {
    this.emit("beforeSendEvent", e, t);
    const n = h.extractGenAiSpansFromEvent(e, this);
    let r = s.createEventEnvelope(
      e,
      this._dsn,
      this._options._metadata,
      this._options.tunnel,
    );
    for (const e of t.attachments || [])
      r = b.addItemToEnvelope(r, b.createAttachmentEnvelopeItem(e));
    n && (r = b.addItemToEnvelope(r, n)),
      this.sendEnvelope(r).then((t) => this.emit("afterSendEvent", e, t));
  }
  sendSession(e) {
    const { release: t, environment: n = o.DEFAULT_ENVIRONMENT } =
      this._options;
    if ("aggregates" in e) {
      const r = e.attrs || {};
      if (!r.release && !t) return void (a.DEBUG_BUILD && y.debug.warn(N));
      (r.release = r.release || t),
        (r.environment = r.environment || n),
        (e.attrs = r);
    } else {
      if (!e.release && !t) return void (a.DEBUG_BUILD && y.debug.warn(N));
      (e.release = e.release || t), (e.environment = e.environment || n);
    }
    this.emit("beforeSendSession", e);
    const r = s.createSessionEnvelope(
      e,
      this._dsn,
      this._options._metadata,
      this._options.tunnel,
    );
    this.sendEnvelope(r);
  }
  recordDroppedEvent(e, t, n = 1) {
    if (this._options.sendClientReports) {
      const r = `${e}:${t}`;
      a.DEBUG_BUILD &&
        y.debug.log(`Recording outcome: "${r}"${n > 1 ? ` (${n} times)` : ""}`),
        (this._outcomes[r] = (this._outcomes[r] || 0) + n);
    }
  }
  on(e, t) {
    const n = (this._hooks[e] = this._hooks[e] || new Set()),
      r = (...e) => t(...e);
    return (
      n.add(r),
      () => {
        n.delete(r);
      }
    );
  }
  emit(e, ...t) {
    const n = this._hooks[e];
    n && n.forEach((e) => e(...t));
  }
  async sendEnvelope(e) {
    if ((this.emit("beforeEnvelope", e), this._isEnabled() && this._transport))
      try {
        return await this._transport.send(e);
      } catch (e) {
        return (
          a.DEBUG_BUILD && y.debug.error("Error while sending envelope:", e), {}
        );
      }
    return a.DEBUG_BUILD && y.debug.error("Transport disabled"), {};
  }
  registerCleanup(e) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations: e } = this._options;
    (this._integrations = l.setupIntegrations(this, e)),
      l.afterSetupIntegrations(this, e);
  }
  _updateSessionFromEvent(e, t) {
    let n = "fatal" === t.level,
      r = !1;
    const o = t.exception?.values;
    if (o) {
      (r = !0), (n = !1);
      for (const e of o)
        if (!1 === e.mechanism?.handled) {
          n = !0;
          break;
        }
    }
    const i = "ok" === e.status;
    ((i && 0 === e.errors) || (i && n)) &&
      (d.updateSession(e, {
        ...(n && { status: "crashed" }),
        errors: e.errors || Number(r || n),
      }),
      this.captureSession(e));
  }
  async _isClientDoneProcessing(e) {
    let t = 0;
    for (; !e || t < e; ) {
      if ((await new Promise((e) => setTimeout(e, 1)), !this._numProcessing))
        return !0;
      t++;
    }
    return !1;
  }
  _isEnabled() {
    return !1 !== this.getOptions().enabled && void 0 !== this._transport;
  }
  _prepareEvent(e, t, n, r) {
    const o = this.getOptions(),
      a = this.getIntegrationNames();
    return (
      !t.integrations && a.length && (t.integrations = a),
      this.emit("preprocessEvent", e, t),
      e.type || r.setLastEventId(e.event_id || t.event_id),
      T.prepareEvent(o, e, t, n, this, r).then((e) => {
        if (null === e) return e;
        this.emit("postprocessEvent", e, t),
          (e.contexts = {
            trace: {
              ...e.contexts?.trace,
              ...i.getTraceContextFromScope(n),
            },
            ...e.contexts,
          });
        const r = p.getDynamicSamplingContextFromScope(this, n);
        return (
          (e.sdkProcessingMetadata = {
            dynamicSamplingContext: r,
            ...e.sdkProcessingMetadata,
          }),
          e
        );
      })
    );
  }
  _captureEvent(e, t = {}, n = i.getCurrentScope(), r = i.getIsolationScope()) {
    return (
      a.DEBUG_BUILD &&
        V(e) &&
        y.debug.log(
          `Captured error event \`${S.getPossibleEventMessages(e)[0] || "<unknown>"}\``,
        ),
      this._processEvent(e, t, n, r).then(
        (e) => e.event_id,
        (e) => {
          a.DEBUG_BUILD &&
            (B(e)
              ? y.debug.log(e.message)
              : U(e)
                ? y.debug.warn(e.message)
                : y.debug.warn(e));
        },
      )
    );
  }
  _processEvent(e, t, n, r) {
    const o = this.getOptions(),
      { sampleRate: i } = o,
      a = q(e),
      s = V(e),
      l = `before send for type \`${e.type || "error"}\``,
      c = void 0 === i ? void 0 : E.parseSampleRate(i),
      u = H(e.type);
    return this._prepareEvent(e, t, n, r)
      .then((e) => {
        if (null === e)
          throw (
            (this.recordDroppedEvent("event_processor", u),
            F("An event processor returned `null`, will not send event."))
          );
        if (!0 === t.data?.__sentry__) return e;
        const n = (function (e, t, n, r) {
          const { beforeSend: o, beforeSendTransaction: i, ignoreSpans: a } = t,
            s =
              !f.isStreamedBeforeSendSpanCallback(t.beforeSendSpan) &&
              t.beforeSendSpan;
          let l = n;
          if (V(l) && o) return o(l, r);
          if (q(l)) {
            if (s || a) {
              const t = R.convertTransactionEventToSpanJson(l);
              if (
                a?.length &&
                I.shouldIgnoreSpan(
                  {
                    description: t.description,
                    op: t.op,
                    attributes: t.data,
                  },
                  a,
                )
              )
                return null;
              if (s) {
                const e = s(t);
                e
                  ? (l = x.merge(n, R.convertSpanJsonToTransactionEvent(e)))
                  : A.showSpanDropWarning();
              }
              if (l.spans) {
                const t = [],
                  n = l.spans;
                for (const e of n)
                  if (
                    a?.length &&
                    I.shouldIgnoreSpan(
                      {
                        description: e.description,
                        op: e.op,
                        attributes: e.data,
                      },
                      a,
                    )
                  )
                    I.reparentChildSpans(n, e);
                  else if (s) {
                    const n = s(e);
                    n ? t.push(n) : (A.showSpanDropWarning(), t.push(e));
                  } else t.push(e);
                const r = l.spans.length - t.length;
                r && e.recordDroppedEvent("before_send", "span", r),
                  (l.spans = t);
              }
            }
            if (i) {
              if (l.spans) {
                const e = l.spans.length;
                l.sdkProcessingMetadata = {
                  ...n.sdkProcessingMetadata,
                  spanCountBeforeProcessing: e,
                };
              }
              return i(l, r);
            }
          }
          return l;
        })(this, o, e, t);
        return (function (e, t) {
          const n = `${t} must return \`null\` or a valid event.`;
          if (_.isThenable(e))
            return e.then(
              (e) => {
                if (!_.isPlainObject(e) && null !== e) throw L(n);
                return e;
              },
              (e) => {
                throw L(`${t} rejected with ${e}`);
              },
            );
          if (!_.isPlainObject(e) && null !== e) throw L(n);
          return e;
        })(n, l);
      })
      .then((o) => {
        if (null === o) {
          if ((this.recordDroppedEvent("before_send", u), a)) {
            const t = 1 + (e.spans || []).length;
            this.recordDroppedEvent("before_send", "span", t);
          }
          throw F(`${l} returned \`null\`, will not send event.`);
        }
        const d = n.getSession() || r.getSession();
        if (
          (s && d && this._updateSessionFromEvent(d, o),
          s && "number" == typeof c && C.safeMathRandom() > c)
        )
          throw (
            (this.recordDroppedEvent("sample_rate", "error"),
            F(
              `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
            ))
          );
        if (a) {
          const e =
            (o.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) -
            (o.spans ? o.spans.length : 0);
          e > 0 && this.recordDroppedEvent("before_send", "span", e);
        }
        const p = o.transaction_info;
        if (a && p && o.transaction !== e.transaction) {
          const e = "custom";
          o.transaction_info = { ...p, source: e };
        }
        return this.sendEvent(o, t), o;
      })
      .then(null, (e) => {
        if (B(e) || U(e)) throw e;
        throw (
          (this.captureException(e, {
            mechanism: { handled: !1, type: "internal" },
            data: { __sentry__: !0 },
            originalException: e,
          }),
          L(
            `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`,
          ))
        );
      });
  }
  _process(e, t) {
    this._numProcessing++,
      this._promiseBuffer.add(e).then(
        (e) => (this._numProcessing--, e),
        (e) => (
          this._numProcessing--,
          e === k.SENTRY_BUFFER_FULL_ERROR &&
            this.recordDroppedEvent("queue_overflow", t),
          e
        ),
      );
  }
  _clearOutcomes() {
    const e = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.entries(e).map(([e, t]) => {
        const [n, r] = e.split(":");
        return { reason: n, category: r, quantity: t };
      })
    );
  }
  _flushOutcomes() {
    a.DEBUG_BUILD && y.debug.log("Flushing outcomes...");
    const e = this._clearOutcomes();
    if (0 === e.length)
      return void (a.DEBUG_BUILD && y.debug.log("No outcomes to send"));
    if (!this._dsn)
      return void (
        a.DEBUG_BUILD && y.debug.log("No dsn provided, will not send outcomes")
      );
    a.DEBUG_BUILD && y.debug.log("Sending outcomes:", e);
    const t = g.createClientReportEnvelope(
      e,
      this._options.tunnel && v.dsnToString(this._dsn),
    );
    this.sendEnvelope(t);
  }
};
