// vendor/other/module-11125.js — webpack module 11125
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(23295 /* vendor/other/module-23295 */),
  o = n(19648 /* vendor/other/module-19648 */),
  i = n(77481 /* vendor/other/module-77481 */),
  s = n(98474 /* vendor/other/module-98474 */),
  a = n(48854 /* vendor/other/module-48854 */),
  c = n(51148 /* vendor/other/module-51148 */),
  u = n(46181 /* vendor/other/module-46181 */),
  l = n(90576 /* vendor/other/module-90576 */);
t.instrumentWorkersAiClient = function (e, t) {
  const n = a.resolveAIRecordingOptions(t);
  return new Proxy(e, {
    get(e, t, d) {
      const p = Reflect.get(e, t, d);
      return "run" === t && "function" == typeof p
        ? (function (e, t, n) {
            return function (...d) {
              if (
                s._INTERNAL_shouldSkipAiProviderWrapping(
                  c.WORKERS_AI_INTEGRATION_NAME,
                )
              )
                return e.apply(t, d);
              const [p, f, h] = d,
                g = l.getOperationName(f),
                m = l.extractRequestAttributes(p, f, g),
                _ = "string" == typeof p ? p : "unknown",
                S = !!f && "object" == typeof f && !0 === f.stream,
                E =
                  !!h &&
                  "object" == typeof h &&
                  (!0 === h.returnRawResponse || !0 === h.websocket),
                y = {
                  name: `${g} ${_}`,
                  op: `gen_ai.${g}`,
                  attributes: m,
                };
              return S && !E
                ? i.startSpanManual(y, (i) => {
                    const s = (e) => {
                      throw (
                        (i.setStatus({
                          code: o.SPAN_STATUS_ERROR,
                          message: "internal_error",
                        }),
                        i.end(),
                        e)
                      );
                    };
                    let c;
                    try {
                      c = e.apply(t, d);
                    } catch (e) {
                      return s(e);
                    }
                    return (
                      n.recordInputs &&
                        l.addRequestAttributes(
                          i,
                          f,
                          g,
                          a.shouldEnableTruncation(n.enableTruncation),
                        ),
                      c.then((e) => {
                        return (
                          (t = e),
                          r.isObjectLike(t) &&
                          "function" == typeof t.pipeThrough &&
                          "function" == typeof t.getReader
                            ? u.instrumentWorkersAiStream(e, i, n.recordOutputs)
                            : (l.addResponseAttributes(i, e, n.recordOutputs),
                              i.end(),
                              e)
                        );
                        var t;
                      }, s)
                    );
                  })
                : i.startSpan(y, (r) => {
                    const o = e.apply(t, d);
                    return (
                      n.recordInputs &&
                        l.addRequestAttributes(
                          r,
                          f,
                          g,
                          a.shouldEnableTruncation(n.enableTruncation),
                        ),
                      o.then(
                        (e) => (
                          E || l.addResponseAttributes(r, e, n.recordOutputs), e
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
