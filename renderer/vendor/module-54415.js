// vendor/module-54415.js — webpack module 54415
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/module-15946 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(75122 /* vendor/module-75122 */),
  a = n(19648 /* vendor/module-19648 */),
  s = n(77481 /* vendor/module-77481 */),
  l = n(46901 /* vendor/module-46901 */),
  c = n(36648 /* vendor/module-36648 */),
  u = n(48854 /* vendor/module-48854 */),
  d = n(5298 /* vendor/module-5298 */),
  p = n(90083 /* vendor/module-90083 */),
  f = n(12202 /* vendor/module-12202 */);
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
function m(e, t, n) {
  const r = {
    [c.GEN_AI_SYSTEM_ATTRIBUTE]: d.GOOGLE_GENAI_SYSTEM_NAME,
    [c.GEN_AI_OPERATION_NAME_ATTRIBUTE]: e,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.google_genai",
  };
  if (t) {
    if (
      ((r[c.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = h(t, n)),
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
                (t[c.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = e.temperature),
              "topP" in e &&
                "number" == typeof e.topP &&
                (t[c.GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = e.topP),
              "topK" in e &&
                "number" == typeof e.topK &&
                (t[c.GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = e.topK),
              "maxOutputTokens" in e &&
                "number" == typeof e.maxOutputTokens &&
                (t[c.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = e.maxOutputTokens),
              "frequencyPenalty" in e &&
                "number" == typeof e.frequencyPenalty &&
                (t[c.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] =
                  e.frequencyPenalty),
              "presencePenalty" in e &&
                "number" == typeof e.presencePenalty &&
                (t[c.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] =
                  e.presencePenalty),
              t
            );
          })(e),
        ),
        "tools" in e && Array.isArray(e.tools))
      ) {
        const t = e.tools.flatMap((e) => e.functionDeclarations);
        r[c.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(t);
      }
    }
  } else r[c.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = h({}, n);
  return r;
}
function g(e, t, n, r) {
  if ("embeddings" === n) {
    const n = t.contents;
    return void (
      null != n &&
      e.setAttribute(
        c.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE,
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
      u.extractSystemInstructions(o);
    t && e.setAttribute(c.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, t);
    const a = Array.isArray(n) ? n.length : 0;
    e.setAttributes({
      [c.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: a,
      [c.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: r
        ? u.getTruncatedJsonString(n)
        : i.stringify(n),
    });
  }
}
function y(e, t, n) {
  if (t && "object" == typeof t) {
    if (
      (t.modelVersion &&
        e.setAttribute(c.GEN_AI_RESPONSE_MODEL_ATTRIBUTE, t.modelVersion),
      t.usageMetadata && "object" == typeof t.usageMetadata)
    ) {
      const n = t.usageMetadata;
      "number" == typeof n.promptTokenCount &&
        e.setAttributes({
          [c.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE]: n.promptTokenCount,
        }),
        "number" == typeof n.candidatesTokenCount &&
          e.setAttributes({
            [c.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE]: n.candidatesTokenCount,
          }),
        "number" == typeof n.totalTokenCount &&
          e.setAttributes({
            [c.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE]: n.totalTokenCount,
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
          [c.GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: n.join(""),
        });
    }
    if (n && t.functionCalls) {
      const n = t.functionCalls;
      Array.isArray(n) &&
        n.length > 0 &&
        e.setAttributes({
          [c.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE]: JSON.stringify(n),
        });
    }
  }
}
function v(e, t = "", n) {
  return new Proxy(e, {
    get: (e, o, i) => {
      const f = Reflect.get(e, o, i),
        h = u.buildMethodPath(t, String(o)),
        b = d.GOOGLE_GENAI_METHOD_REGISTRY[h];
      if ("function" == typeof f && b) {
        const t = b.operation
          ? (function (e, t, n, o, i) {
              const d = "embeddings" === n.operation;
              return new Proxy(e, {
                apply(e, f, h) {
                  const v = n.operation || "unknown",
                    b = h[0],
                    S = m(v, b, o),
                    _ = S[c.GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown";
                  return n.streaming
                    ? s.startSpanManual(
                        {
                          name: `${v} ${_}`,
                          op: `gen_ai.${v}`,
                          attributes: S,
                        },
                        async (n) => {
                          try {
                            i.recordInputs &&
                              b &&
                              g(
                                n,
                                b,
                                v,
                                u.shouldEnableTruncation(i.enableTruncation),
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
                                code: a.SPAN_STATUS_ERROR,
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
                    : s.startSpan(
                        {
                          name: `${v} ${_}`,
                          op: `gen_ai.${v}`,
                          attributes: S,
                        },
                        (n) => (
                          i.recordInputs &&
                            b &&
                            g(
                              n,
                              b,
                              v,
                              u.shouldEnableTruncation(i.enableTruncation),
                            ),
                          l.handleCallbackErrors(
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
                              d || y(n, e, i.recordOutputs);
                            },
                          )
                        ),
                      );
                },
              });
            })(f, h, b, e, n)
          : f.bind(e);
        return b.proxyResultPath
          ? function (...e) {
              const r = t(...e);
              return r && "object" == typeof r ? v(r, b.proxyResultPath, n) : r;
            }
          : t;
      }
      return "function" == typeof f
        ? f.bind(e)
        : f && "object" == typeof f
          ? v(f, h, n)
          : f;
    },
  });
}
(t.addPrivateRequestAttributes = g),
  (t.addResponseAttributes = y),
  (t.extractModel = h),
  (t.extractRequestAttributes = m),
  (t.instrumentGoogleGenAIClient = function (e, t) {
    return v(e, "", u.resolveAIRecordingOptions(t));
  });
