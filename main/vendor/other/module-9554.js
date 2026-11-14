// vendor/other/module-9554.js — webpack module 9554
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(49009 /* vendor/other/module-49009 */),
  o = n(56080 /* vendor/other/module-56080 */),
  i = n(76041 /* vendor/other/module-76041 */),
  s = n(75703 /* vendor/other/module-75703 */),
  a = n(56997 /* vendor/other/module-56997 */),
  c = n(82579 /* vendor/other/module-82579 */),
  u = n(92236 /* vendor/other/module-92236 */),
  l = n(64554 /* vendor/other/module-64554 */),
  d = n(52889 /* vendor/other/module-52889 */),
  p = n(60169 /* vendor/other/module-60169 */),
  f = n(3365 /* vendor/other/module-3365 */),
  h = n(22746 /* vendor/other/module-22746 */),
  g = n(93035 /* vendor/other/module-93035 */),
  m = n(2522 /* vendor/other/module-2522 */),
  _ = n(58637 /* vendor/other/module-58637 */),
  S = n(31538 /* vendor/other/module-31538 */),
  E = n(76403 /* vendor/other/module-76403 */),
  y = n(95246 /* vendor/other/module-95246 */),
  T = n(23295 /* vendor/other/module-23295 */),
  b = n(10627 /* vendor/other/module-10627 */),
  I = n(82615 /* vendor/other/module-82615 */),
  v = n(18828 /* vendor/other/module-18828 */),
  A = n(95418 /* vendor/other/module-95418 */),
  N = n(28260 /* vendor/other/module-28260 */),
  R = n(97190 /* vendor/other/module-97190 */),
  C = n(51644 /* vendor/other/module-51644 */),
  O = n(38862 /* vendor/other/module-38862 */),
  w = n(98050 /* vendor/other/module-98050 */),
  k = n(93911 /* vendor/other/module-93911 */),
  P = n(40417 /* vendor/other/module-40417 */),
  L = "Not capturing exception because it's already been captured.",
  x = "Discarded session because of missing or non-string release",
  M = Symbol.for("SentryInternalError"),
  D = Symbol.for("SentryDoNotSendEventError");
function U(e) {
  return { message: e, [M]: !0 };
}
function B(e) {
  return { message: e, [D]: !0 };
}
function G(e) {
  return T.isObjectLike(e) && M in e;
}
function F(e) {
  return T.isObjectLike(e) && D in e;
}
function j(e, t, n, r, o) {
  let i,
    s = 0,
    a = !1;
  e.on(n, () => {
    (s = 0), clearTimeout(i), (a = !1);
  }),
    e.on(t, (t) => {
      if (((s += r(t)), s >= 8e5)) o(e);
      else if (!a) {
        const t = e.getOptions()._flushInterval ?? 5e3;
        t > 0 &&
          ((a = !0),
          (i = w.safeUnref(
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
function W(e) {
  return void 0 === e.type;
}
function V(e) {
  return "transaction" === e.type;
}
function $(e) {
  let t = 0;
  return e.name && (t += 2 * e.name.length), (t += 8), t + q(e.attributes);
}
function Y(e) {
  let t = 0;
  return e.message && (t += 2 * e.message.length), t + q(e.attributes);
}
function q(e) {
  if (!e) return 0;
  let t = 0;
  return (
    Object.values(e).forEach((e) => {
      Array.isArray(e)
        ? (t += e.length * K(e[0]))
        : T.isPrimitive(e)
          ? (t += K(e))
          : (t += 100);
    }),
    t
  );
}
function K(e) {
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
      (this._promiseBuffer = N.makePromiseBuffer(
        e.transportOptions?.bufferSize ?? g.DEFAULT_TRANSPORT_BUFFER_SIZE,
      )),
      (this._dataCollection = P.resolveDataCollectionOptions(e)),
      e.dsn
        ? (this._dsn = S.makeDsn(e.dsn))
        : s.DEBUG_BUILD &&
          _.debug.warn("No DSN provided, client will not send events."),
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
        j(this, "afterCaptureLog", "flushLogs", Y, u._INTERNAL_flushLogsBuffer),
      (this._options.enableMetrics ??
        this._options._experiments?.enableMetrics ??
        1) &&
        j(
          this,
          "afterCaptureMetric",
          "flushMetrics",
          $,
          l._INTERNAL_flushMetricsBuffer,
        );
  }
  captureException(e, t, n) {
    const r = I.uuid4();
    if (I.checkOrSetAlreadyCaught(e)) return s.DEBUG_BUILD && _.debug.log(L), r;
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
    const o = { event_id: I.uuid4(), ...n },
      i = T.isParameterizedString(e) ? e : String(e),
      s = T.isPrimitive(e),
      a = s ? this.eventFromMessage(i, t, o) : this.eventFromException(e, o);
    return (
      this._process(
        () => a.then((e) => this._captureEvent(e, o, r)),
        s ? "unknown" : "error",
      ),
      o.event_id
    );
  }
  captureEvent(e, t, n) {
    const r = I.uuid4();
    if (t?.originalException && I.checkOrSetAlreadyCaught(t.originalException))
      return s.DEBUG_BUILD && _.debug.log(L), r;
    const o = { event_id: r, ...t },
      i = e.sdkProcessingMetadata || {},
      a = i.capturedSpanScope,
      c = i.capturedSpanIsolationScope,
      u = H(e.type);
    return (
      this._process(() => this._captureEvent(e, o, a || n, c), u), o.event_id
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
      c.setupIntegration(this, e, this._integrations),
      t || c.afterSetupIntegrations(this, [e]);
  }
  sendEvent(e, t = {}) {
    this.emit("beforeSendEvent", e, t);
    const n = h.extractGenAiSpansFromEvent(e, this);
    let r = a.createEventEnvelope(
      e,
      this._dsn,
      this._options._metadata,
      this._options.tunnel,
    );
    for (const e of t.attachments || [])
      r = E.addItemToEnvelope(r, E.createAttachmentEnvelopeItem(e));
    n && (r = E.addItemToEnvelope(r, n)),
      this.sendEnvelope(r).then((t) => this.emit("afterSendEvent", e, t));
  }
  sendSession(e) {
    const { release: t, environment: n = o.DEFAULT_ENVIRONMENT } =
      this._options;
    if ("aggregates" in e) {
      const r = e.attrs || {};
      if (!r.release && !t) return void (s.DEBUG_BUILD && _.debug.warn(x));
      (r.release = r.release || t),
        (r.environment = r.environment || n),
        (e.attrs = r);
    } else {
      if (!e.release && !t) return void (s.DEBUG_BUILD && _.debug.warn(x));
      (e.release = e.release || t), (e.environment = e.environment || n);
    }
    this.emit("beforeSendSession", e);
    const r = a.createSessionEnvelope(
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
      s.DEBUG_BUILD &&
        _.debug.log(`Recording outcome: "${r}"${n > 1 ? ` (${n} times)` : ""}`),
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
          s.DEBUG_BUILD && _.debug.error("Error while sending envelope:", e), {}
        );
      }
    return s.DEBUG_BUILD && _.debug.error("Transport disabled"), {};
  }
  registerCleanup(e) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations: e } = this._options;
    (this._integrations = c.setupIntegrations(this, e)),
      c.afterSetupIntegrations(this, e);
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
      s = this.getIntegrationNames();
    return (
      !t.integrations && s.length && (t.integrations = s),
      this.emit("preprocessEvent", e, t),
      e.type || r.setLastEventId(e.event_id || t.event_id),
      A.prepareEvent(o, e, t, n, this, r).then((e) => {
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
      s.DEBUG_BUILD &&
        W(e) &&
        _.debug.log(
          `Captured error event \`${y.getPossibleEventMessages(e)[0] || "<unknown>"}\``,
        ),
      this._processEvent(e, t, n, r).then(
        (e) => e.event_id,
        (e) => {
          s.DEBUG_BUILD &&
            (F(e)
              ? _.debug.log(e.message)
              : G(e)
                ? _.debug.warn(e.message)
                : _.debug.warn(e));
        },
      )
    );
  }
  _processEvent(e, t, n, r) {
    const o = this.getOptions(),
      { sampleRate: i } = o,
      s = V(e),
      a = W(e),
      c = `before send for type \`${e.type || "error"}\``,
      u = void 0 === i ? void 0 : v.parseSampleRate(i),
      l = H(e.type);
    return this._prepareEvent(e, t, n, r)
      .then((e) => {
        if (null === e)
          throw (
            (this.recordDroppedEvent("event_processor", l),
            B("An event processor returned `null`, will not send event."))
          );
        if (!0 === t.data?.__sentry__) return e;
        const n = (function (e, t, n, r) {
          const { beforeSend: o, beforeSendTransaction: i, ignoreSpans: s } = t,
            a =
              !f.isStreamedBeforeSendSpanCallback(t.beforeSendSpan) &&
              t.beforeSendSpan;
          let c = n;
          if (W(c) && o) return o(c, r);
          if (V(c)) {
            if (a || s) {
              const t = k.convertTransactionEventToSpanJson(c);
              if (
                s?.length &&
                C.shouldIgnoreSpan(
                  {
                    description: t.description,
                    op: t.op,
                    attributes: t.data,
                  },
                  s,
                )
              )
                return null;
              if (a) {
                const e = a(t);
                e
                  ? (c = b.merge(n, k.convertSpanJsonToTransactionEvent(e)))
                  : O.showSpanDropWarning();
              }
              if (c.spans) {
                const t = [],
                  n = c.spans;
                for (const e of n)
                  if (
                    s?.length &&
                    C.shouldIgnoreSpan(
                      {
                        description: e.description,
                        op: e.op,
                        attributes: e.data,
                      },
                      s,
                    )
                  )
                    C.reparentChildSpans(n, e);
                  else if (a) {
                    const n = a(e);
                    n ? t.push(n) : (O.showSpanDropWarning(), t.push(e));
                  } else t.push(e);
                const r = c.spans.length - t.length;
                r && e.recordDroppedEvent("before_send", "span", r),
                  (c.spans = t);
              }
            }
            if (i) {
              if (c.spans) {
                const e = c.spans.length;
                c.sdkProcessingMetadata = {
                  ...n.sdkProcessingMetadata,
                  spanCountBeforeProcessing: e,
                };
              }
              return i(c, r);
            }
          }
          return c;
        })(this, o, e, t);
        return (function (e, t) {
          const n = `${t} must return \`null\` or a valid event.`;
          if (T.isThenable(e))
            return e.then(
              (e) => {
                if (!T.isPlainObject(e) && null !== e) throw U(n);
                return e;
              },
              (e) => {
                throw U(`${t} rejected with ${e}`);
              },
            );
          if (!T.isPlainObject(e) && null !== e) throw U(n);
          return e;
        })(n, c);
      })
      .then((o) => {
        if (null === o) {
          if ((this.recordDroppedEvent("before_send", l), s)) {
            const t = 1 + (e.spans || []).length;
            this.recordDroppedEvent("before_send", "span", t);
          }
          throw B(`${c} returned \`null\`, will not send event.`);
        }
        const d = n.getSession() || r.getSession();
        if (
          (a && d && this._updateSessionFromEvent(d, o),
          a && "number" == typeof u && R.safeMathRandom() > u)
        )
          throw (
            (this.recordDroppedEvent("sample_rate", "error"),
            B(
              `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
            ))
          );
        if (s) {
          const e =
            (o.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) -
            (o.spans ? o.spans.length : 0);
          e > 0 && this.recordDroppedEvent("before_send", "span", e);
        }
        const p = o.transaction_info;
        if (s && p && o.transaction !== e.transaction) {
          const e = "custom";
          o.transaction_info = { ...p, source: e };
        }
        return this.sendEvent(o, t), o;
      })
      .then(null, (e) => {
        if (F(e) || G(e)) throw e;
        throw (
          (this.captureException(e, {
            mechanism: { handled: !1, type: "internal" },
            data: { __sentry__: !0 },
            originalException: e,
          }),
          U(
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
          e === N.SENTRY_BUFFER_FULL_ERROR &&
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
    s.DEBUG_BUILD && _.debug.log("Flushing outcomes...");
    const e = this._clearOutcomes();
    if (0 === e.length)
      return void (s.DEBUG_BUILD && _.debug.log("No outcomes to send"));
    if (!this._dsn)
      return void (
        s.DEBUG_BUILD && _.debug.log("No dsn provided, will not send outcomes")
      );
    s.DEBUG_BUILD && _.debug.log("Sending outcomes:", e);
    const t = m.createClientReportEnvelope(
      e,
      this._options.tunnel && S.dsnToString(this._dsn),
    );
    this.sendEnvelope(t);
  }
};
