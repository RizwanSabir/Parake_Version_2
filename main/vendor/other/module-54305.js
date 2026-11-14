// vendor/other/module-54305.js — webpack module 54305
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(15343 /* vendor/other/module-15343 */),
  s = n(93348 /* vendor/other/module-93348 */),
  a = new TextDecoder();
function c(e, t) {
  void 0 !== t && e.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [t]);
}
function u(e, t) {
  if (t) {
    const { inputTokens: n, outputTokens: r } = t;
    void 0 !== n && e.setAttribute(o.GEN_AI_USAGE_INPUT_TOKENS, n),
      void 0 !== r && e.setAttribute(o.GEN_AI_USAGE_OUTPUT_TOKENS, r);
  }
}
function l(e) {
  if (!(e && e instanceof Uint8Array)) return null;
  try {
    const t = Buffer.from(e).toString("utf-8");
    return JSON.parse(t);
  } catch (e) {
    return (
      i.DEBUG_BUILD &&
        r.debug.warn(
          "[orchestrion:aws-sdk] failed to parse streamed bedrock chunk",
          e,
        ),
      null
    );
  }
}
function d(e, t) {
  void 0 !== e.metadata?.usage &&
    (void 0 !== e.metadata?.usage.inputTokens &&
      t.setAttribute(o.GEN_AI_USAGE_INPUT_TOKENS, e.metadata.usage.inputTokens),
    void 0 !== e.metadata?.usage.outputTokens &&
      t.setAttribute(
        o.GEN_AI_USAGE_OUTPUT_TOKENS,
        e.metadata.usage.outputTokens,
      )),
    void 0 !== e.messageStop?.stopReason &&
      t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [
        e.messageStop.stopReason,
      ]);
}
function p(e, t) {
  void 0 !== e.message?.usage?.input_tokens &&
    t.setAttribute(o.GEN_AI_USAGE_INPUT_TOKENS, e.message.usage.input_tokens),
    void 0 !== e.message?.usage?.output_tokens &&
      t.setAttribute(
        o.GEN_AI_USAGE_OUTPUT_TOKENS,
        e.message.usage.output_tokens,
      ),
    void 0 !== e.delta?.stop_reason &&
      t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [e.delta.stop_reason]);
}
function f(e, t) {
  void 0 !== e.inputTextTokenCount &&
    t.setAttribute(o.GEN_AI_USAGE_INPUT_TOKENS, e.inputTextTokenCount),
    void 0 !== e.totalOutputTextTokenCount &&
      t.setAttribute(o.GEN_AI_USAGE_OUTPUT_TOKENS, e.totalOutputTextTokenCount),
    void 0 !== e.completionReason &&
      t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [e.completionReason]);
}
function h(e, t) {
  void 0 !== e.prompt_token_count &&
    t.setAttribute(o.GEN_AI_USAGE_INPUT_TOKENS, e.prompt_token_count),
    void 0 !== e.generation_token_count &&
      t.setAttribute(o.GEN_AI_USAGE_OUTPUT_TOKENS, e.generation_token_count),
    void 0 !== e.stop_reason &&
      t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [e.stop_reason]);
}
function g(e, t) {
  void 0 !== e.outputs?.[0]?.text &&
    t.setAttribute(
      o.GEN_AI_USAGE_OUTPUT_TOKENS,
      Math.ceil(e.outputs[0].text.length / 6),
    ),
    void 0 !== e.outputs?.[0]?.stop_reason &&
      t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [
        e.outputs[0].stop_reason,
      ]);
}
function m(e, t) {
  void 0 !== e.generations?.[0]?.text &&
    t.setAttribute(
      o.GEN_AI_USAGE_OUTPUT_TOKENS,
      Math.ceil(e.generations[0].text.length / 6),
    ),
    void 0 !== e.generations?.[0]?.finish_reason &&
      t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [
        e.generations[0].finish_reason,
      ]);
}
function _(e, t) {
  void 0 !== e.text &&
    t.setAttribute(o.GEN_AI_USAGE_OUTPUT_TOKENS, Math.ceil(e.text.length / 6)),
    void 0 !== e.finish_reason &&
      t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [e.finish_reason]);
}
t.BedrockRuntimeServiceExtension = class {
  requestPreSpanHook(e) {
    switch (e.commandName) {
      case "Converse":
        return this._requestPreSpanHookConverse(e, !1);
      case "ConverseStream":
        return this._requestPreSpanHookConverse(e, !0);
      case "InvokeModel":
        return this._requestPreSpanHookInvokeModel(e, !1);
      case "InvokeModelWithResponseStream":
        return this._requestPreSpanHookInvokeModel(e, !0);
    }
    return {};
  }
  responseHook(e, t) {
    const n = e.request.commandName;
    if (t.isRecording())
      switch (n) {
        case "Converse":
          return this._responseHookConverse(e, t);
        case "ConverseStream":
          return this._responseHookConverseStream(e, t);
        case "InvokeModel":
          return this._responseHookInvokeModel(e, t);
        case "InvokeModelWithResponseStream":
          return this._responseHookInvokeModelWithResponseStream(e, t);
      }
    else
      ("ConverseStream" !== n && "InvokeModelWithResponseStream" !== n) ||
        t.end();
  }
  _requestPreSpanHookConverse(e, t) {
    let n = s.GEN_AI_OPERATION_NAME_VALUE_CHAT;
    const r = {
        [o.GEN_AI_SYSTEM]: s.GEN_AI_SYSTEM_VALUE_AWS_BEDROCK,
        [o.GEN_AI_OPERATION_NAME]: s.GEN_AI_OPERATION_NAME_VALUE_CHAT,
      },
      i = e.commandInput.modelId;
    i && ((r[o.GEN_AI_REQUEST_MODEL] = i), n && (n += ` ${i}`));
    const a = e.commandInput.inferenceConfig;
    if (a) {
      const { maxTokens: e, temperature: t, topP: n, stopSequences: i } = a;
      void 0 !== e && (r[o.GEN_AI_REQUEST_MAX_TOKENS] = e),
        void 0 !== t && (r[o.GEN_AI_REQUEST_TEMPERATURE] = t),
        void 0 !== n && (r[o.GEN_AI_REQUEST_TOP_P] = n),
        void 0 !== i && (r[o.GEN_AI_REQUEST_STOP_SEQUENCES] = i);
    }
    return { spanName: n, isStream: t, spanAttributes: r };
  }
  _requestPreSpanHookInvokeModel(e, t) {
    const n = {
        [o.GEN_AI_SYSTEM]: s.GEN_AI_SYSTEM_VALUE_AWS_BEDROCK,
      },
      r = e.commandInput?.modelId;
    if ((r && (n[o.GEN_AI_REQUEST_MODEL] = r), e.commandInput?.body)) {
      const t = JSON.parse(e.commandInput.body);
      r.includes("amazon.titan")
        ? (void 0 !== t.textGenerationConfig?.temperature &&
            (n[o.GEN_AI_REQUEST_TEMPERATURE] =
              t.textGenerationConfig.temperature),
          void 0 !== t.textGenerationConfig?.topP &&
            (n[o.GEN_AI_REQUEST_TOP_P] = t.textGenerationConfig.topP),
          void 0 !== t.textGenerationConfig?.maxTokenCount &&
            (n[o.GEN_AI_REQUEST_MAX_TOKENS] =
              t.textGenerationConfig.maxTokenCount),
          void 0 !== t.textGenerationConfig?.stopSequences &&
            (n[o.GEN_AI_REQUEST_STOP_SEQUENCES] =
              t.textGenerationConfig.stopSequences))
        : r.includes("amazon.nova")
          ? (void 0 !== t.inferenceConfig?.temperature &&
              (n[o.GEN_AI_REQUEST_TEMPERATURE] = t.inferenceConfig.temperature),
            void 0 !== t.inferenceConfig?.top_p &&
              (n[o.GEN_AI_REQUEST_TOP_P] = t.inferenceConfig.top_p),
            void 0 !== t.inferenceConfig?.max_new_tokens &&
              (n[o.GEN_AI_REQUEST_MAX_TOKENS] =
                t.inferenceConfig.max_new_tokens),
            void 0 !== t.inferenceConfig?.stopSequences &&
              (n[o.GEN_AI_REQUEST_STOP_SEQUENCES] =
                t.inferenceConfig.stopSequences))
          : r.includes("anthropic.claude")
            ? (void 0 !== t.max_tokens &&
                (n[o.GEN_AI_REQUEST_MAX_TOKENS] = t.max_tokens),
              void 0 !== t.temperature &&
                (n[o.GEN_AI_REQUEST_TEMPERATURE] = t.temperature),
              void 0 !== t.top_p && (n[o.GEN_AI_REQUEST_TOP_P] = t.top_p),
              void 0 !== t.stop_sequences &&
                (n[o.GEN_AI_REQUEST_STOP_SEQUENCES] = t.stop_sequences))
            : r.includes("meta.llama")
              ? (void 0 !== t.max_gen_len &&
                  (n[o.GEN_AI_REQUEST_MAX_TOKENS] = t.max_gen_len),
                void 0 !== t.temperature &&
                  (n[o.GEN_AI_REQUEST_TEMPERATURE] = t.temperature),
                void 0 !== t.top_p && (n[o.GEN_AI_REQUEST_TOP_P] = t.top_p))
              : r.includes("cohere.command-r")
                ? (void 0 !== t.max_tokens &&
                    (n[o.GEN_AI_REQUEST_MAX_TOKENS] = t.max_tokens),
                  void 0 !== t.temperature &&
                    (n[o.GEN_AI_REQUEST_TEMPERATURE] = t.temperature),
                  void 0 !== t.p && (n[o.GEN_AI_REQUEST_TOP_P] = t.p),
                  void 0 !== t.message &&
                    (n[o.GEN_AI_USAGE_INPUT_TOKENS] = Math.ceil(
                      t.message.length / 6,
                    )),
                  void 0 !== t.stop_sequences &&
                    (n[o.GEN_AI_REQUEST_STOP_SEQUENCES] = t.stop_sequences))
                : r.includes("cohere.command")
                  ? (void 0 !== t.max_tokens &&
                      (n[o.GEN_AI_REQUEST_MAX_TOKENS] = t.max_tokens),
                    void 0 !== t.temperature &&
                      (n[o.GEN_AI_REQUEST_TEMPERATURE] = t.temperature),
                    void 0 !== t.p && (n[o.GEN_AI_REQUEST_TOP_P] = t.p),
                    void 0 !== t.prompt &&
                      (n[o.GEN_AI_USAGE_INPUT_TOKENS] = Math.ceil(
                        t.prompt.length / 6,
                      )),
                    void 0 !== t.stop_sequences &&
                      (n[o.GEN_AI_REQUEST_STOP_SEQUENCES] = t.stop_sequences))
                  : r.includes("mistral") &&
                    (void 0 !== t.prompt &&
                      (n[o.GEN_AI_USAGE_INPUT_TOKENS] = Math.ceil(
                        t.prompt.length / 6,
                      )),
                    void 0 !== t.max_tokens &&
                      (n[o.GEN_AI_REQUEST_MAX_TOKENS] = t.max_tokens),
                    void 0 !== t.temperature &&
                      (n[o.GEN_AI_REQUEST_TEMPERATURE] = t.temperature),
                    void 0 !== t.top_p && (n[o.GEN_AI_REQUEST_TOP_P] = t.top_p),
                    void 0 !== t.stop &&
                      (n[o.GEN_AI_REQUEST_STOP_SEQUENCES] = t.stop));
    }
    return { isStream: t, spanAttributes: n };
  }
  _responseHookConverse(e, t) {
    const { stopReason: n, usage: r } = e.data;
    c(t, n), u(t, r);
  }
  _responseHookConverseStream(e, t) {
    e.data.stream = (async function* (e, t) {
      try {
        let n;
        for await (const r of e)
          c(t, r.messageStop?.stopReason), (n = r.metadata?.usage), yield r;
        u(t, n);
      } finally {
        t.end();
      }
    })(e.data.stream, t);
  }
  _responseHookInvokeModel(e, t) {
    const n = e.request.commandInput?.modelId;
    if (e.data?.body) {
      const r = a.decode(e.data.body),
        i = JSON.parse(r);
      n.includes("amazon.titan")
        ? (void 0 !== i.inputTextTokenCount &&
            t.setAttribute(o.GEN_AI_USAGE_INPUT_TOKENS, i.inputTextTokenCount),
          void 0 !== i.results?.[0]?.tokenCount &&
            t.setAttribute(
              o.GEN_AI_USAGE_OUTPUT_TOKENS,
              i.results[0].tokenCount,
            ),
          void 0 !== i.results?.[0]?.completionReason &&
            t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [
              i.results[0].completionReason,
            ]))
        : n.includes("amazon.nova")
          ? (void 0 !== i.usage &&
              (void 0 !== i.usage.inputTokens &&
                t.setAttribute(
                  o.GEN_AI_USAGE_INPUT_TOKENS,
                  i.usage.inputTokens,
                ),
              void 0 !== i.usage.outputTokens &&
                t.setAttribute(
                  o.GEN_AI_USAGE_OUTPUT_TOKENS,
                  i.usage.outputTokens,
                )),
            void 0 !== i.stopReason &&
              t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [i.stopReason]))
          : n.includes("anthropic.claude")
            ? (void 0 !== i.usage?.input_tokens &&
                t.setAttribute(
                  o.GEN_AI_USAGE_INPUT_TOKENS,
                  i.usage.input_tokens,
                ),
              void 0 !== i.usage?.output_tokens &&
                t.setAttribute(
                  o.GEN_AI_USAGE_OUTPUT_TOKENS,
                  i.usage.output_tokens,
                ),
              void 0 !== i.stop_reason &&
                t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [
                  i.stop_reason,
                ]))
            : n.includes("meta.llama")
              ? (void 0 !== i.prompt_token_count &&
                  t.setAttribute(
                    o.GEN_AI_USAGE_INPUT_TOKENS,
                    i.prompt_token_count,
                  ),
                void 0 !== i.generation_token_count &&
                  t.setAttribute(
                    o.GEN_AI_USAGE_OUTPUT_TOKENS,
                    i.generation_token_count,
                  ),
                void 0 !== i.stop_reason &&
                  t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [
                    i.stop_reason,
                  ]))
              : n.includes("cohere.command-r")
                ? (void 0 !== i.text &&
                    t.setAttribute(
                      o.GEN_AI_USAGE_OUTPUT_TOKENS,
                      Math.ceil(i.text.length / 6),
                    ),
                  void 0 !== i.finish_reason &&
                    t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [
                      i.finish_reason,
                    ]))
                : n.includes("cohere.command")
                  ? (void 0 !== i.generations?.[0]?.text &&
                      t.setAttribute(
                        o.GEN_AI_USAGE_OUTPUT_TOKENS,
                        Math.ceil(i.generations[0].text.length / 6),
                      ),
                    void 0 !== i.generations?.[0]?.finish_reason &&
                      t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [
                        i.generations[0].finish_reason,
                      ]))
                  : n.includes("mistral") &&
                    (void 0 !== i.outputs?.[0]?.text &&
                      t.setAttribute(
                        o.GEN_AI_USAGE_OUTPUT_TOKENS,
                        Math.ceil(i.outputs[0].text.length / 6),
                      ),
                    void 0 !== i.outputs?.[0]?.stop_reason &&
                      t.setAttribute(o.GEN_AI_RESPONSE_FINISH_REASONS, [
                        i.outputs[0].stop_reason,
                      ]));
    }
  }
  _responseHookInvokeModelWithResponseStream(e, t) {
    const n = e.data?.body,
      r = e.request.commandInput?.modelId;
    if (!n || !r) return;
    const o = (function (e) {
      return e.includes("amazon.titan")
        ? f
        : e.includes("anthropic.claude")
          ? p
          : e.includes("amazon.nova")
            ? d
            : e.includes("meta.llama")
              ? h
              : e.includes("cohere.command-r")
                ? _
                : e.includes("cohere.command")
                  ? m
                  : e.includes("mistral")
                    ? g
                    : void 0;
    })(r);
    e.data.body = (async function* () {
      try {
        for await (const e of n) {
          if (o) {
            const n = l(e?.chunk?.bytes);
            n && o(n, t);
          }
          yield e;
        }
      } finally {
        t.end();
      }
    })();
  }
};
