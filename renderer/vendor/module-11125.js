// vendor/module-11125.js — webpack module 11125
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/module-23295 */),
  o = n(19648 /* vendor/module-19648 */),
  i = n(77481 /* vendor/module-77481 */),
  a = n(98474 /* vendor/module-98474 */),
  s = n(48854 /* vendor/module-48854 */),
  l = n(51148 /* vendor/module-51148 */),
  c = n(46181 /* vendor/module-46181 */),
  u = n(90576 /* vendor/module-90576 */);
t.instrumentWorkersAiClient = function (e, t) {
  const n = s.resolveAIRecordingOptions(t);
  return new Proxy(e, {
    get(e, t, d) {
      const p = Reflect.get(e, t, d);
      return "run" === t && "function" == typeof p
        ? (function (e, t, n) {
            return function (...d) {
              if (
                a._INTERNAL_shouldSkipAiProviderWrapping(
                  l.WORKERS_AI_INTEGRATION_NAME,
                )
              )
                return e.apply(t, d);
              const [p, f, h] = d,
                m = u.getOperationName(f),
                g = u.extractRequestAttributes(p, f, m),
                y = "string" == typeof p ? p : "unknown",
                v = !!f && "object" == typeof f && !0 === f.stream,
                b =
                  !!h &&
                  "object" == typeof h &&
                  (!0 === h.returnRawResponse || !0 === h.websocket),
                S = {
                  name: `${m} ${y}`,
                  op: `gen_ai.${m}`,
                  attributes: g,
                };
              return v && !b
                ? i.startSpanManual(S, (i) => {
                    const a = (e) => {
                      throw (
                        (i.setStatus({
                          code: o.SPAN_STATUS_ERROR,
                          message: "internal_error",
                        }),
                        i.end(),
                        e)
                      );
                    };
                    let l;
                    try {
                      l = e.apply(t, d);
                    } catch (e) {
                      return a(e);
                    }
                    return (
                      n.recordInputs &&
                        u.addRequestAttributes(
                          i,
                          f,
                          m,
                          s.shouldEnableTruncation(n.enableTruncation),
                        ),
                      l.then((e) => {
                        return (
                          (t = e),
                          r.isObjectLike(t) &&
                          "function" == typeof t.pipeThrough &&
                          "function" == typeof t.getReader
                            ? c.instrumentWorkersAiStream(e, i, n.recordOutputs)
                            : (u.addResponseAttributes(i, e, n.recordOutputs),
                              i.end(),
                              e)
                        );
                        var t;
                      }, a)
                    );
                  })
                : i.startSpan(S, (r) => {
                    const o = e.apply(t, d);
                    return (
                      n.recordInputs &&
                        u.addRequestAttributes(
                          r,
                          f,
                          m,
                          s.shouldEnableTruncation(n.enableTruncation),
                        ),
                      o.then(
                        (e) => (
                          b || u.addResponseAttributes(r, e, n.recordOutputs), e
                        ),
                      )
                    );
                  });
            };
          })(p, e, n)
        : "function" == typeof p
          ? p.bind(e)
          : p;
    },
  });
};
