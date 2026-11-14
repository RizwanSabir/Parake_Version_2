// vendor/other/module-69869.js — webpack module 69869
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(88516 /* vendor/other/module-88516 */),
  o = n(37766 /* vendor/other/module-37766 */),
  i = n(96137 /* vendor/other/module-96137 */),
  s = n(12417 /* vendor/other/module-12417 */),
  a = n(49392 /* vendor/other/module-49392 */),
  c = "auto.vercelai.channel",
  u = "gen_ai.tool.call.id",
  l = "gen_ai.tool.description",
  d = "vercel.ai.operationId",
  p = "vercel.ai.model.provider",
  f = "vercel.ai.settings.maxRetries",
  h = new Map(),
  g = new Map(),
  m = new Map(),
  _ = new Set([
    "generateText",
    "streamText",
    "generateObject",
    "embed",
    "embedMany",
    "rerank",
  ]);
function S(e) {
  if (!_.has(e.type)) return;
  const t = a.asString(e.event.callId);
  t && E(t);
}
function E(e) {
  h.delete(e), g.delete(e), m.delete(e);
}
function y(e) {
  const t = [];
  e.text && t.push({ type: "text", text: e.text });
  for (const n of e.toolCalls) t.push({ type: "tool-call", ...n });
  return {
    content: t,
    ...(void 0 !== e.usage ? { usage: e.usage } : {}),
    ...(void 0 !== e.finishReason ? { finishReason: e.finishReason } : {}),
    ...(void 0 !== e.providerMetadata
      ? { providerMetadata: e.providerMetadata }
      : {}),
    ...(e.responseId || e.responseModel
      ? {
          response: {
            ...(e.responseId ? { id: e.responseId } : {}),
            ...(e.responseModel ? { modelId: e.responseModel } : {}),
          },
        }
      : {}),
  };
}
function T(e, t, n) {
  if (void 0 === n) return;
  const r = i.spanToJSON(e).data[t];
  e.setAttribute(t, ("number" == typeof r ? r : 0) + n);
}
function b(e, t) {
  const { type: n, event: s } = e;
  if ("step" === n || !s || "object" != typeof s) return;
  const { recordInputs: _, enableTruncation: S } = P(s, t),
    E = a.asString(s.provider),
    y = a.asString(s.modelId),
    T = a.asString(s.callId),
    b = a.asNumber(s.maxRetries);
  _ &&
    (function (e, t) {
      if (!e || !Array.isArray(t)) return;
      let n = g.get(e);
      for (const e of t)
        i.isObjectLike(e) &&
          "string" == typeof e.name &&
          "string" == typeof e.description &&
          ((n = n ?? new Map()), n.has(e.name) || n.set(e.name, e.description));
      n && g.set(e, n);
    })(T, s.tools);
  const v = {
    [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c,
    ...(E ? { [r.GEN_AI_SYSTEM]: E, [p]: E } : {}),
    ...(y ? { [r.GEN_AI_REQUEST_MODEL]: y } : {}),
    ...(void 0 !== b ? { [f]: b } : {}),
  };
  switch (n) {
    case "generateText":
    case "streamText":
    case "generateObject":
      return (function (e, t, n, i, s, c) {
        const u = a.asString(e.functionId),
          l =
            a.asString(e.operationId) ??
            (c ? "ai.streamText" : "ai.generateText");
        s && h.set(s, { operationId: l, isStream: c });
        const p = I(o.GEN_AI_INVOKE_AGENT_SPAN_OP, u, {
          ...t,
          [d]: l,
          [r.GEN_AI_RESPONSE_STREAMING]: c,
          ...(u ? { [r.GEN_AI_FUNCTION_ID]: u } : {}),
          ...(n ? x(e, i) : {}),
        });
        return c && s && m.set(s, p), p;
      })(s, v, _, S, T, "streamText" === n);
    case "languageModelCall":
      return (
        i._INTERNAL_skipAiProviderWrapping(["WorkersAI"]),
        (function (e, t, n, o, s, a) {
          const c = s ? h.get(s) : void 0,
            u = c
              ? `${c.operationId}.${c.isStream ? "doStream" : "doGenerate"}`
              : "ai.generateText.doGenerate";
          return I("generate_content", a, {
            ...t,
            [d]: u,
            ...(n ? x(e, o) : {}),
            ...(n && Array.isArray(e.tools)
              ? {
                  [r.GEN_AI_REQUEST_AVAILABLE_TOOLS]: i.stringify(e.tools),
                }
              : {}),
          });
        })(s, v, _, S, T, y)
      );
    case "executeTool":
      return (function (e, t) {
        const n = i.isObjectLike(e.toolCall) ? e.toolCall : {},
          s = a.asString(n.toolName),
          d = a.asString(e.toolCallId) ?? a.asString(n.toolCallId),
          p = n.input ?? n.args,
          f =
            t && s
              ? (function (e, t, n) {
                  const r = e ? g.get(e)?.get(t) : void 0;
                  if (r) return r;
                  if (Array.isArray(n)) {
                    const e = n.find((e) => i.isObjectLike(e) && e.name === t);
                    return i.isObjectLike(e)
                      ? a.asString(e.description)
                      : void 0;
                  }
                  if (i.isObjectLike(n)) {
                    const e = n[t];
                    return i.isObjectLike(e)
                      ? a.asString(e.description)
                      : void 0;
                  }
                })(a.asString(e.callId), s, e.tools)
              : void 0;
        return I(o.GEN_AI_EXECUTE_TOOL_SPAN_OP, s, {
          [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: c,
          [r.GEN_AI_TOOL_TYPE]: "function",
          ...(s ? { [r.GEN_AI_TOOL_NAME]: s } : {}),
          ...(d ? { [u]: d } : {}),
          ...(f ? { [l]: f } : {}),
          ...(t && void 0 !== p
            ? { [r.GEN_AI_TOOL_INPUT]: i.stringify(p) }
            : {}),
        });
      })(s, _);
    case "embed":
    case "embedMany": {
      const e = "embedMany" === n ? s.values : s.value;
      return I("embeddings", y, {
        ...v,
        ...(_ && void 0 !== e
          ? { [r.GEN_AI_EMBEDDINGS_INPUT]: i.stringify(e) }
          : {}),
      });
    }
    case "rerank":
      return I("rerank", y, v);
    default:
      return;
  }
}
function I(e, t, n) {
  return i.startInactiveSpan({
    name: t ? `${e} ${t}` : e,
    op: `gen_ai.${e}`,
    attributes: { [r.GEN_AI_OPERATION_NAME]: e, ...n },
  });
}
function v(e, t, n) {
  const { type: o, result: s } = t;
  if (!i.isObjectLike(s)) return;
  const { recordOutputs: c } = P(t.event, n);
  if ("executeTool" === o) {
    c && e.setAttribute(r.GEN_AI_TOOL_OUTPUT, i.stringify(s.output ?? s));
    const n = i.isObjectLike(s.output) ? s.output : void 0;
    return void ("tool-error" === n?.type && k(e, t, n.error));
  }
  const u = i.isObjectLike(s.usage) ? s.usage : void 0;
  if (u) {
    const t = R(u.inputTokens) ?? R(u.promptTokens) ?? R(u.tokens),
      n = R(u.outputTokens) ?? R(u.completionTokens),
      o = R(u.totalTokens) ?? a.sum(t, n);
    void 0 !== t && e.setAttribute(r.GEN_AI_USAGE_INPUT_TOKENS, t),
      void 0 !== n && e.setAttribute(r.GEN_AI_USAGE_OUTPUT_TOKENS, n),
      void 0 !== o && e.setAttribute(r.GEN_AI_USAGE_TOTAL_TOKENS, o);
  }
  const l = N(s);
  l &&
    "languageModelCall" === o &&
    e.setAttribute(r.GEN_AI_RESPONSE_FINISH_REASONS, i.stringify([l]));
  const d = i.isObjectLike(s.response) ? s.response : void 0,
    p = a.asString(d?.id) ?? a.asString(s.responseId);
  p && e.setAttribute(r.GEN_AI_RESPONSE_ID, p);
  const f = a.asString(d?.modelId) ?? a.asString(t.event.modelId);
  f && e.setAttribute(r.GEN_AI_RESPONSE_MODEL, f);
  const h = s.providerMetadata,
    g = i.getProviderMetadataAttributes(h);
  if (
    (i.GEN_AI_CONVERSATION_ID_ATTRIBUTE in g &&
      i.spanToJSON(e).data[i.GEN_AI_CONVERSATION_ID_ATTRIBUTE] &&
      delete g[i.GEN_AI_CONVERSATION_ID_ATTRIBUTE],
    e.setAttributes(g),
    c)
  ) {
    const t = C(
      "languageModelCall" === o && Array.isArray(s.content)
        ? (function (e) {
            const t = [];
            for (const n of e)
              i.isObjectLike(n) &&
                ("text" === n.type && "string" == typeof n.text
                  ? t.push({ type: "text", content: n.text })
                  : "tool-call" === n.type && t.push(O(n)));
            return t;
          })(s.content)
        : w(s.text, s.toolCalls),
      l,
    );
    t && e.setAttribute(r.GEN_AI_OUTPUT_MESSAGES, t);
  }
}
function A(e) {
  return "tool-calls" === e ? "tool_call" : (e ?? "stop");
}
function N(e) {
  const t = e.finishReason;
  return "string" == typeof t
    ? t
    : i.isObjectLike(t)
      ? a.asString(t.unified)
      : void 0;
}
function R(e) {
  return a.asNumber(e) ?? (i.isObjectLike(e) ? a.asNumber(e.total) : void 0);
}
function C(e, t) {
  if (e.length)
    return i.stringify([{ role: "assistant", parts: e, finish_reason: A(t) }]);
}
function O(e) {
  const t = e.input ?? e.args;
  return {
    type: "tool_call",
    id: a.asString(e.toolCallId),
    name: a.asString(e.toolName),
    arguments: "string" == typeof t ? t : i.stringify(t ?? {}),
  };
}
function w(e, t) {
  const n = [];
  if (
    ("string" == typeof e && e.length && n.push({ type: "text", content: e }),
    Array.isArray(t))
  )
    for (const e of t) i.isObjectLike(e) && n.push(O(e));
  return n;
}
function k(e, t, n) {
  e.setStatus({
    code: i.SPAN_STATUS_ERROR,
    message: n instanceof Error ? n.message : "tool_error",
  });
  const r = i.isObjectLike(t.event.toolCall) ? t.event.toolCall : {},
    o = a.asString(r.toolName),
    s = a.asString(t.event.toolCallId) ?? a.asString(r.toolCallId);
  i.withScope((t) => {
    t.setContext("trace", i.spanToTraceContext(e)),
      o && t.setTag("vercel.ai.tool.name", o),
      s && t.setTag("vercel.ai.tool.callId", s),
      t.setLevel("error"),
      i.captureException(
        n instanceof Error
          ? n
          : new Error("string" == typeof n ? n : "Tool execution failed"),
        { mechanism: { type: "auto.vercelai.channel", handled: !1 } },
      );
  });
}
function P(e, t) {
  const n = i.getClient()?.getDataCollectionOptions().genAI;
  return {
    recordInputs: L(t.recordInputs, e.recordInputs, n?.inputs),
    recordOutputs: L(t.recordOutputs, e.recordOutputs, n?.outputs),
    enableTruncation: i.shouldEnableTruncation(t.enableTruncation),
  };
}
function L(e, t, n) {
  return "boolean" == typeof e ? e : "boolean" == typeof t ? t : !0 === n;
}
function x(e, t) {
  const n = {},
    o = a.asString(e.instructions);
  o &&
    (n[i.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE] = i.stringify([
      { type: "text", content: o },
    ]));
  const s = e.messages ?? e.prompt;
  return (
    void 0 !== s &&
      ((n[r.GEN_AI_INPUT_MESSAGES] = t
        ? i.getTruncatedJsonString(s)
        : i.stringify(s)),
      (n[i.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = Array.isArray(s)
        ? s.length
        : 1)),
    n
  );
}
(t.captureToolError = k),
  (t.clearOperationCallId = E),
  (t.clearOperationId = S),
  (t.createSpanFromMessage = b),
  (t.enrichSpanOnEnd = v),
  (t.streamedResultToChannelResult = y),
  (t.subscribeVercelAiTracingChannel = function (e, t = {}) {
    s.bindTracingChannelToSpan(e("ai:telemetry"), (e) => b(e, t), {
      beforeSpanEnd: (e, n) => {
        v(e, n, t), S(n);
      },
      deferSpanEnd: ({ data: e, end: n }) =>
        (function (e, t, n) {
          if ("languageModelCall" !== e.type || !i.isObjectLike(e.result))
            return !1;
          const o = e.result,
            s = o.stream;
          if (!a.isReadableStream(s)) return !1;
          const c = a.asString(e.event.callId),
            { recordOutputs: u } = P(e.event, t);
          return (
            (o.stream = a.tapModelCallStream(
              s,
              (t) => {
                (e.result = { ...o, ...y(t) }),
                  n(),
                  (function (e, t, n) {
                    const o = e ? m.get(e) : void 0;
                    if (!o) return;
                    const s = i.isObjectLike(t.usage) ? t.usage : void 0;
                    if (s) {
                      const e =
                          R(s.inputTokens) ?? R(s.promptTokens) ?? R(s.tokens),
                        t = R(s.outputTokens) ?? R(s.completionTokens);
                      T(o, r.GEN_AI_USAGE_INPUT_TOKENS, e),
                        T(o, r.GEN_AI_USAGE_OUTPUT_TOKENS, t),
                        T(
                          o,
                          r.GEN_AI_USAGE_TOTAL_TOKENS,
                          R(s.totalTokens) ?? a.sum(e, t),
                        );
                    }
                    if (n) {
                      const e = C(
                        w(t.text, t.toolCalls),
                        N({ finishReason: t.finishReason }),
                      );
                      e && o.setAttribute(r.GEN_AI_OUTPUT_MESSAGES, e);
                    }
                  })(c, t, u);
              },
              (e) => n(e),
            )),
            !0
          );
        })(e, t, n),
    });
  });
