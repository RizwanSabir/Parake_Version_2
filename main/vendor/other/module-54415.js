// vendor/other/module-54415.js — webpack module 54415
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/other/module-15946 */),
  o = n(12724 /* vendor/other/module-12724 */),
  i = n(75122 /* vendor/other/module-75122 */),
  s = n(19648 /* vendor/other/module-19648 */),
  a = n(77481 /* vendor/other/module-77481 */),
  c = n(46901 /* vendor/other/module-46901 */),
  u = n(36648 /* vendor/other/module-36648 */),
  l = n(48854 /* vendor/other/module-48854 */),
  d = n(5298 /* vendor/other/module-5298 */),
  p = n(90083 /* vendor/other/module-90083 */),
  f = n(12202 /* vendor/other/module-12202 */);
function h(e, t) {
  if ("model" in e && "string" == typeof e.model) return e.model;
  if (t && "object" == typeof t) {
    const e = t;
    if ("model" in e && "string" == typeof e.model) return e.model;
    if ("modelVersion" in e && "string" == typeof e.modelVersion)
      return e.modelVersion;
  }
  return "unknown";
}
function g(e, t, n) {
  const r = {
    [u.GEN_AI_SYSTEM_ATTRIBUTE]: d.GOOGLE_GENAI_SYSTEM_NAME,
    [u.GEN_AI_OPERATION_NAME_ATTRIBUTE]: e,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.google_genai",
  };
  if (t) {
    if (
      ((r[u.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = h(t, n)),
      "config" in t && "object" == typeof t.config && t.config)
    ) {
      const e = t.config;
      if (
        (Object.assign(
          r,
          (function (e) {
            const t = {};
            return (
              "temperature" in e &&
                "number" == typeof e.temperature &&
                (t[u.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = e.temperature),
              "topP" in e &&
                "number" == typeof e.topP &&
                (t[u.GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = e.topP),
              "topK" in e &&
                "number" == typeof e.topK &&
                (t[u.GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = e.topK),
              "maxOutputTokens" in e &&
                "number" == typeof e.maxOutputTokens &&
                (t[u.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = e.maxOutputTokens),
              "frequencyPenalty" in e &&
                "number" == typeof e.frequencyPenalty &&
                (t[u.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] =
                  e.frequencyPenalty),
              "presencePenalty" in e &&
                "number" == typeof e.presencePenalty &&
                (t[u.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] =
                  e.presencePenalty),
              t
            );
          })(e),
        ),
        "tools" in e && Array.isArray(e.tools))
      ) {
        const t = e.tools.flatMap((e) => e.functionDeclarations);
        r[u.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(t);
      }
    }
  } else r[u.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = h({}, n);
  return r;
}
function m(e, t, n, r) {
  if ("embeddings" === n) {
    const n = t.contents;
    return void (
      null != n &&
      e.setAttribute(
        u.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE,
        "string" == typeof n ? n : JSON.stringify(n),
      )
    );
  }
  const o = [];
  if (
    ("config" in t &&
      t.config &&
      "object" == typeof t.config &&
      "systemInstruction" in t.config &&
      t.config.systemInstruction &&
      o.push(...f.contentUnionToMessages(t.config.systemInstruction, "system")),
    "history" in t && o.push(...f.contentUnionToMessages(t.history, "user")),
    "contents" in t && o.push(...f.contentUnionToMessages(t.contents, "user")),
    "message" in t && o.push(...f.contentUnionToMessages(t.message, "user")),
    Array.isArray(o) && o.length)
  ) {
    const { systemInstructions: t, filteredMessages: n } =
      l.extractSystemInstructions(o);
    t && e.setAttribute(u.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, t);
    const s = Array.isArray(n) ? n.length : 0;
    e.setAttributes({
      [u.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: s,
      [u.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: r
        ? l.getTruncatedJsonString(n)
        : i.stringify(n),
    });
  }
}
function _(e, t, n) {
  if (t && "object" == typeof t) {
    if (
      (t.modelVersion &&
        e.setAttribute(u.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, t.modelVersion),
      t.usageMetadata && "object" == typeof t.usageMetadata)
    ) {
      const n = t.usageMetadata;
      "number" == typeof n.promptTokenCount &&
        e.setAttributes({
          [u.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE]: n.promptTokenCount,
        }),
        "number" == typeof n.candidatesTokenCount &&
          e.setAttributes({
            [u.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE]: n.candidatesTokenCount,
          }),
        "number" == typeof n.totalTokenCount &&
          e.setAttributes({
            [u.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE]: n.totalTokenCount,
          });
    }
    if (n && Array.isArray(t.candidates) && t.candidates.length > 0) {
      const n = t.candidates
        .map((e) =>
          e.content?.parts && Array.isArray(e.content.parts)
            ? e.content.parts
                .map((e) => ("string" == typeof e.text ? e.text : ""))
                .filter((e) => e.length > 0)
                .join("")
            : "",
        )
        .filter((e) => e.length > 0);
      n.length > 0 &&
        e.setAttributes({
          [u.GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: n.join(""),
        });
    }
    if (n && t.functionCalls) {
      const n = t.functionCalls;
      Array.isArray(n) &&
        n.length > 0 &&
        e.setAttributes({
          [u.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE]: JSON.stringify(n),
        });
    }
  }
}
function S(e, t = "", n) {
  return new Proxy(e, {
    get: (e, o, i) => {
      const f = Reflect.get(e, o, i),
        h = l.buildMethodPath(t, String(o)),
        E = d.GOOGLE_GENAI_METHOD_REGISTRY[h];
      if ("function" == typeof f && E) {
        const t = E.operation
          ? (function (e, t, n, o, i) {
              const d = "embeddings" === n.operation;
              return new Proxy(e, {
                apply(e, f, h) {
                  const S = n.operation || "unknown",
                    E = h[0],
                    y = g(S, E, o),
                    T = y[u.GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown";
                  return n.streaming
                    ? a.startSpanManual(
                        {
                          name: `${S} ${T}`,
                          op: `gen_ai.${S}`,
                          attributes: y,
                        },
                        async (n) => {
                          try {
                            i.recordInputs &&
                              E &&
                              m(
                                n,
                                E,
                                S,
                                l.shouldEnableTruncation(i.enableTruncation),
                              );
                            const t = await e.apply(o, h);
                            return p.instrumentStream(
                              t,
                              n,
                              Boolean(i.recordOutputs),
                            );
                          } catch (e) {
                            throw (
                              (n.setStatus({
                                code: s.SPAN_STATUS_ERROR,
                                message: "internal_error",
                              }),
                              r.captureException(e, {
                                mechanism: {
                                  handled: !1,
                                  type: "auto.ai.google_genai",
                                  data: { function: t },
                                },
                              }),
                              n.end(),
                              e)
                            );
                          }
                        },
                      )
                    : a.startSpan(
                        {
                          name: `${S} ${T}`,
                          op: `gen_ai.${S}`,
                          attributes: y,
                        },
                        (n) => (
                          i.recordInputs &&
                            E &&
                            m(
                              n,
                              E,
                              S,
                              l.shouldEnableTruncation(i.enableTruncation),
                            ),
                          c.handleCallbackErrors(
                            () => e.apply(o, h),
                            (e) => {
                              r.captureException(e, {
                                mechanism: {
                                  handled: !1,
                                  type: "auto.ai.google_genai",
                                  data: { function: t },
                                },
                              });
                            },
                            () => {},
                            (e) => {
                              d || _(n, e, i.recordOutputs);
                            },
                          )
                        ),
                      );
                },
              });
            })(f, h, E, e, n)
          : f.bind(e);
        return E.proxyResultPath
          ? function (...e) {
              const r = t(...e);
              return r && "object" == typeof r ? S(r, E.proxyResultPath, n) : r;
            }
          : t;
      }
      return "function" == typeof f
        ? f.bind(e)
        : f && "object" == typeof f
          ? S(f, h, n)
          : f;
    },
  });
}
(t.addPrivateRequestAttributes = m),
  (t.addResponseAttributes = _),
  (t.extractModel = h),
  (t.extractRequestAttributes = g),
  (t.instrumentGoogleGenAIClient = function (e, t) {
    return S(e, "", l.resolveAIRecordingOptions(t));
  });
