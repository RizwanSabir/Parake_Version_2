// vendor/other/module-37592.js — webpack module 37592
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/other/module-15946 */),
  o = n(12724 /* vendor/other/module-12724 */),
  i = n(19648 /* vendor/other/module-19648 */),
  s = n(77481 /* vendor/other/module-77481 */),
  a = n(36648 /* vendor/other/module-36648 */),
  c = n(48854 /* vendor/other/module-48854 */),
  u = n(82029 /* vendor/other/module-82029 */),
  l = n(61672 /* vendor/other/module-61672 */),
  d = n(87809 /* vendor/other/module-87809 */);
let p = !1;
const f = new WeakSet();
function h(e, t, n) {
  const r = {
    [a.GEN_AI_SYSTEM_ATTRIBUTE]: "anthropic",
    [a.GEN_AI_OPERATION_NAME_ATTRIBUTE]: n,
    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.anthropic",
  };
  if (e.length > 0 && "object" == typeof e[0] && null !== e[0]) {
    const t = e[0];
    t.tools &&
      Array.isArray(t.tools) &&
      (r[a.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(t.tools)),
      (r[a.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = t.model ?? "unknown"),
      "temperature" in t &&
        (r[a.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = t.temperature),
      "top_p" in t && (r[a.GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = t.top_p),
      "stream" in t && (r[a.GEN_AI_REQUEST_STREAM_ATTRIBUTE] = t.stream),
      "top_k" in t && (r[a.GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = t.top_k),
      "frequency_penalty" in t &&
        (r[a.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = t.frequency_penalty),
      "max_tokens" in t &&
        (r[a.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = t.max_tokens);
  } else
    r[a.GEN_AI_REQUEST_MODEL_ATTRIBUTE] =
      "models.retrieve" === t || "models.get" === t ? e[0] : "unknown";
  return r;
}
function g(e, t, n) {
  const r = d.messagesFromParams(t);
  d.setMessagesAttribute(e, r, n),
    "prompt" in t &&
      e.setAttributes({
        [a.GEN_AI_PROMPT_ATTRIBUTE]: JSON.stringify(t.prompt),
      });
}
function m(e, t, n) {
  t &&
    "object" == typeof t &&
    ("type" in t && "error" === t.type
      ? d.handleResponseError(e, t)
      : (n &&
          (function (e, t) {
            if ("content" in t && Array.isArray(t.content)) {
              e.setAttributes({
                [a.GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: t.content
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
                  [a.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE]: JSON.stringify(n),
                });
            }
            "completion" in t &&
              e.setAttributes({
                [a.GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: t.completion,
              }),
              "input_tokens" in t &&
                e.setAttributes({
                  [a.GEN_AI_RESPONSE_TEXT_ATTRIBUTE]: JSON.stringify(
                    t.input_tokens,
                  ),
                });
          })(e, t),
        (function (e, t) {
          "id" in t &&
            "model" in t &&
            (e.setAttributes({
              [a.GEN_AI_RESPONSE_ID_ATTRIBUTE]: t.id,
              [a.GEN_AI_RESPONSE_MODEL_ATTRIBUTE]: t.model,
            }),
            "usage" in t &&
              t.usage &&
              c.setTokenUsageAttributes(
                e,
                t.usage.input_tokens,
                t.usage.output_tokens,
                t.usage.cache_creation_input_tokens,
                t.usage.cache_read_input_tokens,
              ));
        })(e, t)));
}
function _(e, t, n) {
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
function S(e, t, n, o, i) {
  return new Proxy(e, {
    apply(e, u, d) {
      const f = void 0 !== u ? u : o,
        S = !0 === n.streaming;
      if (!S && p) return e.apply(f, d);
      const E = n.operation || "unknown",
        y = h(d, t, E),
        T = y[a.GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown",
        b = "object" == typeof d[0] ? d[0] : void 0,
        I = Boolean(b?.stream);
      if (I || S)
        return (function (e, t, n, r, o, i, u, d, f, h) {
          const m = {
            name: `${o} ${r[a.GEN_AI_REQUEST_MODEL_ATTRIBUTE] ?? "unknown"}`,
            op: `gen_ai.${o}`,
            attributes: r,
          };
          if (f && !h) {
            let r;
            const o = s.startSpanManual(
              m,
              (o) => (
                (r = e.apply(t, n)),
                d.recordInputs &&
                  u &&
                  g(o, u, c.shouldEnableTruncation(d.enableTruncation)),
                (async () => {
                  try {
                    const e = await r;
                    return l.instrumentAsyncIterableStream(
                      e,
                      o,
                      d.recordOutputs ?? !1,
                    );
                  } catch (e) {
                    return _(e, o, i);
                  }
                })()
              ),
            );
            return c.wrapPromiseWithMethods(r, o, "auto.ai.anthropic");
          }
          return s.startSpanManual(m, (r) => {
            try {
              d.recordInputs &&
                u &&
                g(r, u, c.shouldEnableTruncation(d.enableTruncation)),
                (p = !0);
              const o = e.apply(t, n);
              return (
                (p = !1), l.instrumentMessageStream(o, r, d.recordOutputs ?? !1)
              );
            } catch (e) {
              return (p = !1), _(e, r, i);
            }
          });
        })(e, f, d, y, E, t, b, i, I, S);
      let v;
      const A = s.startSpan(
        { name: `${E} ${T}`, op: `gen_ai.${E}`, attributes: y },
        (n) => (
          (v = e.apply(f, d)),
          i.recordInputs &&
            b &&
            g(n, b, c.shouldEnableTruncation(i.enableTruncation)),
          v.then(
            (e) => (m(n, e, i.recordOutputs), e),
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
      return c.wrapPromiseWithMethods(v, A, "auto.ai.anthropic");
    },
  });
}
(t.addPrivateRequestAttributes = g),
  (t.addResponseAttributes = m),
  (t.extractRequestAttributes = h),
  (t.instrumentAnthropicAiClient = function (e, t) {
    return (function (e, t) {
      for (const n of Object.keys(u.ANTHROPIC_METHOD_REGISTRY)) {
        const r = n.split("."),
          o = r.pop();
        let i = e;
        for (const e of r) i = i?.[e];
        if (!i || "function" != typeof i[o]) continue;
        const s = i[o];
        if (f.has(s)) continue;
        const a = S(s, n, u.ANTHROPIC_METHOD_REGISTRY[n], i, t);
        f.add(a), (i[o] = a);
      }
      return e;
    })(e, c.resolveAIRecordingOptions(t));
  });
