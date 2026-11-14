// vendor/other/module-16572.js — webpack module 16572
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(75703 /* vendor/other/module-75703 */),
  i = n(12724 /* vendor/other/module-12724 */),
  s = n(58637 /* vendor/other/module-58637 */),
  a = n(72925 /* vendor/other/module-72925 */),
  c = n(51644 /* vendor/other/module-51644 */),
  u = n(33836 /* vendor/other/module-33836 */),
  l = n(38862 /* vendor/other/module-38862 */),
  d = n(19410 /* vendor/other/module-19410 */),
  p = n(63059 /* vendor/other/module-63059 */),
  f = n(41013 /* vendor/other/module-41013 */),
  h = n(19648 /* vendor/other/module-19648 */),
  g = n(77481 /* vendor/other/module-77481 */),
  m = n(30401 /* vendor/other/module-30401 */),
  _ = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 };
(t.TRACING_DEFAULTS = _),
  (t.startIdleSpan = function (e, t = {}) {
    const n = new Map();
    let S,
      E = !1,
      y = "externalFinish",
      T = !t.disableAutoFinish;
    const b = [],
      {
        idleTimeout: I = _.idleTimeout,
        finalTimeout: v = _.finalTimeout,
        childSpanTimeout: A = _.childSpanTimeout,
        beforeSpanEnd: N,
        trimIdleSpanEndTimestamp: R = !0,
      } = t,
      C = r.getClient(),
      O = r.getCurrentScope();
    if (!C || !a.hasSpansEnabled()) {
      const e = new p.SentryNonRecordingSpan({
        traceId: O.getPropagationContext().traceId,
      });
      return m.setCapturedScopesOnSpan(e, O, r.getIsolationScope()), e;
    }
    const w = l.getActiveSpan(),
      k = (function (e) {
        const t = g.startInactiveSpan(e);
        return (
          u._setSpanForScope(r.getCurrentScope(), t),
          o.DEBUG_BUILD &&
            s.debug.log("[Tracing] Started span is an idle span"),
          t
        );
      })(e);
    function P() {
      S && (clearTimeout(S), (S = void 0));
    }
    function L(e) {
      P(),
        (S = setTimeout(() => {
          !E && 0 === n.size && T && ((y = "idleTimeout"), k.end(e));
        }, I));
    }
    function x(e) {
      S = setTimeout(() => {
        !E && T && ((y = "heartbeatFailed"), k.end(e));
      }, A);
    }
    function M(e) {
      (E = !0), n.clear(), b.forEach((e) => e()), u._setSpanForScope(O, w);
      const t = l.spanToJSON(k),
        { start_timestamp: r } = t;
      if (!r) return;
      t.data[i.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON] ||
        k.setAttribute(i.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, y);
      const a = t.status;
      (a && "unknown" !== a) || k.setStatus({ code: h.SPAN_STATUS_OK }),
        s.debug.log(`[Tracing] Idle span "${t.op}" finished`);
      const c = l.getSpanDescendants(k).filter((e) => e !== k);
      let d = 0;
      c.forEach((t) => {
        t.isRecording() &&
          (t.setStatus({
            code: h.SPAN_STATUS_ERROR,
            message: "cancelled",
          }),
          t.end(e),
          o.DEBUG_BUILD &&
            s.debug.log(
              "[Tracing] Cancelling span since span ended early",
              JSON.stringify(t, void 0, 2),
            ));
        const n = l.spanToJSON(t),
          { timestamp: r = 0, start_timestamp: i = 0 } = n,
          a = i <= e,
          c = r - i <= (v + I) / 1e3;
        if (o.DEBUG_BUILD) {
          const e = JSON.stringify(t, void 0, 2);
          a
            ? c ||
              s.debug.log(
                "[Tracing] Discarding span since it finished after idle span final timeout",
                e,
              )
            : s.debug.log(
                "[Tracing] Discarding span since it happened after idle span was finished",
                e,
              );
        }
        (c && a) || (l.removeChildSpanFromSpan(k, t), d++);
      }),
        d > 0 && k.setAttribute("sentry.idle_span_discarded_spans", d);
    }
    return (
      (k.end = new Proxy(k.end, {
        apply(e, t, n) {
          if ((N && N(k), p.spanIsNonRecordingSpan(t))) return;
          const [r, ...o] = n,
            i = r || d.timestampInSeconds(),
            s = l.spanTimeInputToSeconds(i),
            a = l.getSpanDescendants(k).filter((e) => e !== k),
            u = l.spanToJSON(k);
          if (!a.length || !R) return M(s), Reflect.apply(e, t, [s, ...o]);
          const f = C.getOptions().ignoreSpans,
            h = a?.reduce(
              (e, t) => {
                const n = l.spanToJSON(t);
                return n.timestamp
                  ? f &&
                    c.shouldIgnoreSpan(
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
            g = u.start_timestamp,
            m = Math.min(
              g ? g + v / 1e3 : 1 / 0,
              Math.max(g || -1 / 0, Math.min(s, h || 1 / 0)),
            );
          return M(m), Reflect.apply(e, t, [m, ...o]);
        },
      })),
      b.push(
        C.on("spanStart", (e) => {
          var t;
          E ||
            e === k ||
            l.spanToJSON(e).timestamp ||
            (e instanceof f.SentrySpan && e.isStandaloneSpan()) ||
            (l.getSpanDescendants(k).includes(e) &&
              ((t = e.spanContext().spanId),
              P(),
              n.set(t, !0),
              x(d.timestampInSeconds() + A / 1e3)));
        }),
      ),
      b.push(
        C.on("spanEnd", (e) => {
          var t;
          E ||
            ((t = e.spanContext().spanId),
            n.has(t) && n.delete(t),
            0 === n.size && L(d.timestampInSeconds() + I / 1e3));
        }),
      ),
      b.push(
        C.on("idleSpanEnableAutoFinish", (e) => {
          e === k && ((T = !0), L(), n.size && x());
        }),
      ),
      t.disableAutoFinish || L(),
      setTimeout(() => {
        E ||
          (k.setStatus({
            code: h.SPAN_STATUS_ERROR,
            message: "deadline_exceeded",
          }),
          (y = "finalTimeout"),
          k.end());
      }, v),
      k
    );
  });
