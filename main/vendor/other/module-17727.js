// vendor/other/module-17727.js — webpack module 17727
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(15946 /* vendor/other/module-15946 */),
  i = n(12724 /* vendor/other/module-12724 */),
  s = n(58637 /* vendor/other/module-58637 */),
  a = n(75122 /* vendor/other/module-75122 */),
  c = n(19648 /* vendor/other/module-19648 */),
  u = n(77481 /* vendor/other/module-77481 */),
  l = n(36648 /* vendor/other/module-36648 */),
  d = n(48854 /* vendor/other/module-48854 */),
  p = n(24802 /* vendor/other/module-24802 */),
  f = n(29139 /* vendor/other/module-29139 */),
  h = n(40826 /* vendor/other/module-40826 */);
function g(e, t) {
  const n = {
    [l.GEN_AI_SYSTEM_ATTRIBUTE]: "openai",
    [l.GEN_AI_OPERATION_NAME_ATTRIBUTE]: t,
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
              s.debug.error("Failed to serialize OpenAI tools:", e)
            );
          }
      })(t);
    o && (n[l.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = o),
      Object.assign(n, h.extractRequestParameters(t));
  } else n[l.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = "unknown";
  return n;
}
function m(e, t, n, r) {
  if ("embeddings" === n && "input" in t) {
    const n = t.input;
    if (null == n) return;
    if ("string" == typeof n && 0 === n.length) return;
    if (Array.isArray(n) && 0 === n.length) return;
    return void e.setAttribute(
      l.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE,
      "string" == typeof n ? n : JSON.stringify(n),
    );
  }
  const o = "input" in t ? t.input : "messages" in t ? t.messages : void 0;
  if (!o) return;
  if (Array.isArray(o) && 0 === o.length) return;
  const { systemInstructions: i, filteredMessages: s } =
    d.extractSystemInstructions(o);
  i && e.setAttribute(l.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, i),
    e.setAttribute(
      l.GEN_AI_INPUT_MESSAGES_ATTRIBUTE,
      r ? d.getTruncatedJsonString(s) : a.stringify(s),
    ),
    Array.isArray(s)
      ? e.setAttribute(
          l.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE,
          s.length,
        )
      : e.setAttribute(l.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, 1);
}
function _(e, t = "", n) {
  return new Proxy(e, {
    get(e, r) {
      const i = e[r],
        s = d.buildMethodPath(t, String(r)),
        a = p.OPENAI_METHOD_REGISTRY[s];
      return "function" == typeof i && a
        ? (function (e, t, n, r, i) {
            return function (...s) {
              const a = n.operation || "unknown",
                p = g(s, a),
                _ = p[l.GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown",
                S = s[0],
                E = S && "object" == typeof S && !0 === S.stream,
                y = {
                  name: `${a} ${_}`,
                  op: `gen_ai.${a}`,
                  attributes: p,
                };
              if (E) {
                let n;
                const l = u.startSpanManual(
                  y,
                  (u) => (
                    (n = e.apply(r, s)),
                    i.recordInputs &&
                      S &&
                      m(u, S, a, d.shouldEnableTruncation(i.enableTruncation)),
                    (async () => {
                      try {
                        const e = await n;
                        return f.instrumentStream(e, u, i.recordOutputs ?? !1);
                      } catch (e) {
                        throw (
                          (u.setStatus({
                            code: c.SPAN_STATUS_ERROR,
                            message: "internal_error",
                          }),
                          o.captureException(e, {
                            mechanism: {
                              handled: !1,
                              type: "auto.ai.openai.stream",
                              data: { function: t },
                            },
                          }),
                          u.end(),
                          e)
                        );
                      }
                    })()
                  ),
                );
                return d.wrapPromiseWithMethods(n, l, "auto.ai.openai");
              }
              let T;
              const b = u.startSpan(
                y,
                (n) => (
                  (T = e.apply(r, s)),
                  i.recordInputs &&
                    S &&
                    m(n, S, a, d.shouldEnableTruncation(i.enableTruncation)),
                  T.then(
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
              return d.wrapPromiseWithMethods(T, b, "auto.ai.openai");
            };
          })(i, s, a, e, n)
        : "function" == typeof i
          ? i.bind(e)
          : i && "object" == typeof i
            ? _(i, s, n)
            : i;
    },
  });
}
(t.addRequestAttributes = m),
  (t.extractRequestAttributes = g),
  (t.instrumentOpenAiClient = function (e, t) {
    return _(e, "", d.resolveAIRecordingOptions(t));
  });
