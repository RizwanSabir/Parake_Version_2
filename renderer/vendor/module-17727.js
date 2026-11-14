// vendor/module-17727.js — webpack module 17727
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(15946 /* vendor/module-15946 */),
  i = n(12724 /* vendor/module-12724 */),
  a = n(58637 /* vendor/module-58637 */),
  s = n(75122 /* vendor/module-75122 */),
  l = n(19648 /* vendor/module-19648 */),
  c = n(77481 /* vendor/module-77481 */),
  u = n(36648 /* vendor/module-36648 */),
  d = n(48854 /* vendor/module-48854 */),
  p = n(24802 /* vendor/module-24802 */),
  f = n(29139 /* vendor/module-29139 */),
  h = n(40826 /* vendor/module-40826 */);
function m(e, t) {
  const n = {
    [u.GEN_AI_SYSTEM_ATTRIBUTE]: "openai",
    [u.GEN_AI_OPERATION_NAME_ATTRIBUTE]: t,
    [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.openai",
  };
  if (e.length > 0 && "object" == typeof e[0] && null !== e[0]) {
    const t = e[0],
      o = (function (e) {
        const t = [
          ...(Array.isArray(e.tools) ? e.tools : []),
          ...(e.web_search_options && "object" == typeof e.web_search_options
            ? [
                {
                  type: "web_search_options",
                  ...e.web_search_options,
                },
              ]
            : []),
        ];
        if (0 !== t.length)
          try {
            return JSON.stringify(t);
          } catch (e) {
            return void (
              r.DEBUG_BUILD &&
              a.debug.error("Failed to serialize OpenAI tools:", e)
            );
          }
      })(t);
    o && (n[u.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = o),
      Object.assign(n, h.extractRequestParameters(t));
  } else n[u.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = "unknown";
  return n;
}
function g(e, t, n, r) {
  if ("embeddings" === n && "input" in t) {
    const n = t.input;
    if (null == n) return;
    if ("string" == typeof n && 0 === n.length) return;
    if (Array.isArray(n) && 0 === n.length) return;
    return void e.setAttribute(
      u.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE,
      "string" == typeof n ? n : JSON.stringify(n),
    );
  }
  const o = "input" in t ? t.input : "messages" in t ? t.messages : void 0;
  if (!o) return;
  if (Array.isArray(o) && 0 === o.length) return;
  const { systemInstructions: i, filteredMessages: a } =
    d.extractSystemInstructions(o);
  i && e.setAttribute(u.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, i),
    e.setAttribute(
      u.GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
      r ? d.getTruncatedJsonString(a) : s.stringify(a),
    ),
    Array.isArray(a)
      ? e.setAttribute(
          u.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE,
          a.length,
        )
      : e.setAttribute(u.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, 1);
}
function y(e, t = "", n) {
  return new Proxy(e, {
    get(e, r) {
      const i = e[r],
        a = d.buildMethodPath(t, String(r)),
        s = p.OPENAI_METHOD_REGISTRY[a];
      return "function" == typeof i && s
        ? (function (e, t, n, r, i) {
            return function (...a) {
              const s = n.operation || "unknown",
                p = m(a, s),
                y = p[u.GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown",
                v = a[0],
                b = v && "object" == typeof v && !0 === v.stream,
                S = {
                  name: `${s} ${y}`,
                  op: `gen_ai.${s}`,
                  attributes: p,
                };
              if (b) {
                let n;
                const u = c.startSpanManual(
                  S,
                  (c) => (
                    (n = e.apply(r, a)),
                    i.recordInputs &&
                      v &&
                      g(c, v, s, d.shouldEnableTruncation(i.enableTruncation)),
                    (async () => {
                      try {
                        const e = await n;
                        return f.instrumentStream(e, c, i.recordOutputs ?? !1);
                      } catch (e) {
                        throw (
                          (c.setStatus({
                            code: l.SPAN_STATUS_ERROR,
                            message: "internal_error",
                          }),
                          o.captureException(e, {
                            mechanism: {
                              handled: !1,
                              type: "auto.ai.openai.stream",
                              data: { function: t },
                            },
                          }),
                          c.end(),
                          e)
                        );
                      }
                    })()
                  ),
                );
                return d.wrapPromiseWithMethods(n, u, "auto.ai.openai");
              }
              let _;
              const x = c.startSpan(
                S,
                (n) => (
                  (_ = e.apply(r, a)),
                  i.recordInputs &&
                    v &&
                    g(n, v, s, d.shouldEnableTruncation(i.enableTruncation)),
                  _.then(
                    (e) => (h.addResponseAttributes(n, e, i.recordOutputs), e),
                    (e) => {
                      throw (
                        (o.captureException(e, {
                          mechanism: {
                            handled: !1,
                            type: "auto.ai.openai",
                            data: { function: t },
                          },
                        }),
                        e)
                      );
                    },
                  )
                ),
              );
              return d.wrapPromiseWithMethods(_, x, "auto.ai.openai");
            };
          })(i, a, s, e, n)
        : "function" == typeof i
          ? i.bind(e)
          : i && "object" == typeof i
            ? y(i, a, n)
            : i;
    },
  });
}
(t.addRequestAttributes = g),
  (t.extractRequestAttributes = m),
  (t.instrumentOpenAiClient = function (e, t) {
    return y(e, "", d.resolveAIRecordingOptions(t));
  });
