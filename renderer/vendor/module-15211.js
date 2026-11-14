// vendor/module-15211.js — webpack module 15211
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/module-15946 */),
  o = n(12724 /* vendor/module-12724 */),
  i = n(19648 /* vendor/module-19648 */),
  a = n(77481 /* vendor/module-77481 */),
  s = n(36648 /* vendor/module-36648 */),
  l = n(48854 /* vendor/module-48854 */),
  c = n(82029 /* vendor/module-82029 */),
  u = n(61672 /* vendor/module-61672 */),
  d = n(87809 /* vendor/module-87809 */);
let p = !1;
const f = new WeakSet();
function h(e, t, n) {
  const r = {
    [s.GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic",
    [s.GEN_AI_OPERATION_NAME_ATTRIBUTE]: n,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.anthropic",
  };
  if (e.length > 0 && "object" == typeof e[0] && null !== e[0]) {
    const t = e[0];
    t.tools &&
      Array.isArray(t.tools) &&
      (r[s.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(t.tools)),
      (r[s.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = t.model ?? "unknown"),
      "temperature" in t &&
        (r[s.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = t.temperature),
      "top_p" in t && (r[s.GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = t.top_p),
      "stream" in t && (r[s.GEN_AI_REQUEST_STREAM_ATTRIBUTE] = t.stream),
      "top_k" in t && (r[s.GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = t.top_k),
      "frequency_penalty" in t &&
        (r[s.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = t.frequency_penalty),
      "max_tokens" in t &&
        (r[s.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = t.max_tokens);
  } else
    r[s.GEN_AI_REQUEST_MODEL_ATTRIBUTE] =
      "models.retrieve" === t || "models.get" === t ? e[0] : "unknown";
  return r;
}
function m(e, t, n) {
  const r = d.messagesFromParams(t);
  d.setMessagesAttribute(e, r, n),
    "prompt" in t &&
      e.setAttributes({
        [s.GEN_AI_PROMPT_ATTRIBUTE]: JSON.stringify(t.prompt),
      });
}
function g(e, t, n) {
  t &&
    "object" == typeof t &&
    ("type" in t && "error" === t.type
      ? d.handleResponseError(e, t)
      : (n &&
          (function (e, t) {
            if ("content" in t && Array.isArray(t.content)) {
              e.setAttributes({
                [s.GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: t.content
                  .map((e) => e.text)
                  .filter((e) => !!e)
                  .join(""),
              });
              const n = [];
              for (const e of t.content)
                ("tool_use" !== e.type && "server_tool_use" !== e.type) ||
                  n.push(e);
              n.length > 0 &&
                e.setAttributes({
                  [s.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE]: JSON.stringify(n),
                });
            }
            "completion" in t &&
              e.setAttributes({
                [s.GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: t.completion,
              }),
              "input_tokens" in t &&
                e.setAttributes({
                  [s.GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: JSON.stringify(
                    t.input_tokens,
                  ),
                });
          })(e, t),
        (function (e, t) {
          "id" in t &&
            "model" in t &&
            (e.setAttributes({
              [s.GEN_AI_RESPONSE_ID_ATTRIBUTE]: t.id,
              [s.GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: t.model,
            }),
            "usage" in t &&
              t.usage &&
              l.setTokenUsageAttributes(
                e,
                t.usage.input_tokens,
                t.usage.output_tokens,
                t.usage.cache_creation_input_tokens,
                t.usage.cache_read_input_tokens,
              ));
        })(e, t)));
}
function y(e, t, n) {
  throw (
    (r.captureException(e, {
      mechanism: {
        handled: !1,
        type: "auto.ai.anthropic",
        data: { function: n },
      },
    }),
    t.isRecording() &&
      (t.setStatus({
        code: i.SPAN_STATUS_ERROR,
        message: "internal_error",
      }),
      t.end()),
    e)
  );
}
function v(e, t, n, o, i) {
  return new Proxy(e, {
    apply(e, c, d) {
      const f = void 0 !== c ? c : o,
        v = !0 === n.streaming;
      if (!v && p) return e.apply(f, d);
      const b = n.operation || "unknown",
        S = h(d, t, b),
        _ = S[s.GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown",
        x = "object" == typeof d[0] ? d[0] : void 0,
        w = Boolean(x?.stream);
      if (w || v)
        return (function (e, t, n, r, o, i, c, d, f, h) {
          const g = {
            name: `${o} ${r[s.GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown"}`,
            op: `gen_ai.${o}`,
            attributes: r,
          };
          if (f && !h) {
            let r;
            const o = a.startSpanManual(
              g,
              (o) => (
                (r = e.apply(t, n)),
                d.recordInputs &&
                  c &&
                  m(o, c, l.shouldEnableTruncation(d.enableTruncation)),
                (async () => {
                  try {
                    const e = await r;
                    return u.instrumentAsyncIterableStream(
                      e,
                      o,
                      d.recordOutputs ?? !1,
                    );
                  } catch (e) {
                    return y(e, o, i);
                  }
                })()
              ),
            );
            return l.wrapPromiseWithMethods(r, o, "auto.ai.anthropic");
          }
          return a.startSpanManual(g, (r) => {
            try {
              d.recordInputs &&
                c &&
                m(r, c, l.shouldEnableTruncation(d.enableTruncation)),
                (p = !0);
              const o = e.apply(t, n);
              return (
                (p = !1), u.instrumentMessageStream(o, r, d.recordOutputs ?? !1)
              );
            } catch (e) {
              return (p = !1), y(e, r, i);
            }
          });
        })(e, f, d, S, b, t, x, i, w, v);
      let E;
      const T = a.startSpan(
        { name: `${b} ${_}`, op: `gen_ai.${b}`, attributes: S },
        (n) => (
          (E = e.apply(f, d)),
          i.recordInputs &&
            x &&
            m(n, x, l.shouldEnableTruncation(i.enableTruncation)),
          E.then(
            (e) => (g(n, e, i.recordOutputs), e),
            (e) => {
              throw (
                (r.captureException(e, {
                  mechanism: {
                    handled: !1,
                    type: "auto.ai.anthropic",
                    data: { function: t },
                  },
                }),
                e)
              );
            },
          )
        ),
      );
      return l.wrapPromiseWithMethods(E, T, "auto.ai.anthropic");
    },
  });
}
(t.addPrivateRequestAttributes = m),
  (t.addResponseAttributes = g),
  (t.extractRequestAttributes = h),
  (t.instrumentAnthropicAiClient = function (e, t) {
    return (function (e, t) {
      for (const n of Object.keys(c.ANTHROPIC_METHOD_REGISTRY)) {
        const r = n.split("."),
          o = r.pop();
        let i = e;
        for (const e of r) i = i?.[e];
        if (!i || "function" != typeof i[o]) continue;
        const a = i[o];
        if (f.has(a)) continue;
        const s = v(a, n, c.ANTHROPIC_METHOD_REGISTRY[n], i, t);
        f.add(s), (i[o] = s);
      }
      return e;
    })(e, l.resolveAIRecordingOptions(t));
  });
