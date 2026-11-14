// vendor/module-16572.js — webpack module 16572
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/module-76041 */),
  o = n(75703 /* vendor/module-75703 */),
  i = n(12724 /* vendor/module-12724 */),
  a = n(58637 /* vendor/module-58637 */),
  s = n(72925 /* vendor/module-72925 */),
  l = n(51644 /* vendor/module-51644 */),
  c = n(33836 /* vendor/module-33836 */),
  u = n(38862 /* vendor/module-38862 */),
  d = n(19410 /* vendor/module-19410 */),
  p = n(63059 /* vendor/module-63059 */),
  f = n(41013 /* vendor/module-41013 */),
  h = n(19648 /* vendor/module-19648 */),
  m = n(77481 /* vendor/module-77481 */),
  g = n(30401 /* vendor/module-30401 */),
  y = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 };
(t.TRACING_DEFAULTS = y),
  (t.startIdleSpan = function (e, t = {}) {
    const n = new Map();
    let v,
      b = !1,
      S = "externalFinish",
      _ = !t.disableAutoFinish;
    const x = [],
      {
        idleTimeout: w = y.idleTimeout,
        finalTimeout: E = y.finalTimeout,
        childSpanTimeout: T = y.childSpanTimeout,
        beforeSpanEnd: k,
        trimIdleSpanEndTimestamp: C = !0,
      } = t,
      I = r.getClient(),
      A = r.getCurrentScope();
    if (!I || !s.hasSpansEnabled()) {
      const e = new p.SentryNonRecordingSpan({
        traceId: A.getPropagationContext().traceId,
      });
      return g.setCapturedScopesOnSpan(e, A, r.getIsolationScope()), e;
    }
    const O = u.getActiveSpan(),
      R = (function (e) {
        const t = m.startInactiveSpan(e);
        return (
          c._setSpanForScope(r.getCurrentScope(), t),
          o.DEBUG_BUILD &&
            a.debug.log("[Tracing] Started span is an idle span"),
          t
        );
      })(e);
    function M() {
      v && (clearTimeout(v), (v = void 0));
    }
    function P(e) {
      M(),
        (v = setTimeout(() => {
          !b && 0 === n.size && _ && ((S = "idleTimeout"), R.end(e));
        }, w));
    }
    function N(e) {
      v = setTimeout(() => {
        !b && _ && ((S = "heartbeatFailed"), R.end(e));
      }, T);
    }
    function D(e) {
      (b = !0), n.clear(), x.forEach((e) => e()), c._setSpanForScope(A, O);
      const t = u.spanToJSON(R),
        { start_timestamp: r } = t;
      if (!r) return;
      t.data[i.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON] ||
        R.setAttribute(i.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, S);
      const s = t.status;
      (s && "unknown" !== s) || R.setStatus({ code: h.SPAN_STATUS_OK }),
        a.debug.log(`[Tracing] Idle span "${t.op}" finished`);
      const l = u.getSpanDescendants(R).filter((e) => e !== R);
      let d = 0;
      l.forEach((t) => {
        t.isRecording() &&
          (t.setStatus({
            code: h.SPAN_STATUS_ERROR,
            message: "cancelled",
          }),
          t.end(e),
          o.DEBUG_BUILD &&
            a.debug.log(
              "[Tracing] Cancelling span since span ended early",
              JSON.stringify(t, void 0, 2),
            ));
        const n = u.spanToJSON(t),
          { timestamp: r = 0, start_timestamp: i = 0 } = n,
          s = i <= e,
          l = r - i <= (E + w) / 1e3;
        if (o.DEBUG_BUILD) {
          const e = JSON.stringify(t, void 0, 2);
          s
            ? l ||
              a.debug.log(
                "[Tracing] Discarding span since it finished after idle span final timeout",
                e,
              )
            : a.debug.log(
                "[Tracing] Discarding span since it happened after idle span was finished",
                e,
              );
        }
        (l && s) || (u.removeChildSpanFromSpan(R, t), d++);
      }),
        d > 0 && R.setAttribute("sentry.idle_span_discarded_spans", d);
    }
    return (
      (R.end = new Proxy(R.end, {
        apply(e, t, n) {
          if ((k && k(R), p.spanIsNonRecordingSpan(t))) return;
          const [r, ...o] = n,
            i = r || d.timestampInSeconds(),
            a = u.spanTimeInputToSeconds(i),
            s = u.getSpanDescendants(R).filter((e) => e !== R),
            c = u.spanToJSON(R);
          if (!s.length || !C) return D(a), Reflect.apply(e, t, [a, ...o]);
          const f = I.getOptions().ignoreSpans,
            h = s?.reduce(
              (e, t) => {
                const n = u.spanToJSON(t);
                return n.timestamp
                  ? f &&
                    l.shouldIgnoreSpan(
                      {
                        description: n.description,
                        op: n.op,
                        attributes: n.data,
                      },
                      f,
                    )
                    ? e
                    : e
                      ? Math.max(e, n.timestamp)
                      : n.timestamp
                  : e;
              },
              void 0,
            ),
            m = c.start_timestamp,
            g = Math.min(
              m ? m + E / 1e3 : 1 / 0,
              Math.max(m || -1 / 0, Math.min(a, h || 1 / 0)),
            );
          return D(g), Reflect.apply(e, t, [g, ...o]);
        },
      })),
      x.push(
        I.on("spanStart", (e) => {
          var t;
          b ||
            e === R ||
            u.spanToJSON(e).timestamp ||
            (e instanceof f.SentrySpan && e.isStandaloneSpan()) ||
            (u.getSpanDescendants(R).includes(e) &&
              ((t = e.spanContext().spanId),
              M(),
              n.set(t, !0),
              N(d.timestampInSeconds() + T / 1e3)));
        }),
      ),
      x.push(
        I.on("spanEnd", (e) => {
          var t;
          b ||
            ((t = e.spanContext().spanId),
            n.has(t) && n.delete(t),
            0 === n.size && P(d.timestampInSeconds() + w / 1e3));
        }),
      ),
      x.push(
        I.on("idleSpanEnableAutoFinish", (e) => {
          e === R && ((_ = !0), P(), n.size && N());
        }),
      ),
      t.disableAutoFinish || P(),
      setTimeout(() => {
        b ||
          (R.setStatus({
            code: h.SPAN_STATUS_ERROR,
            message: "deadline_exceeded",
          }),
          (S = "finalTimeout"),
          R.end());
      }, E),
      R
    );
  });
