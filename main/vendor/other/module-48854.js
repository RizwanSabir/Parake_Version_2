// vendor/other/module-48854.js — webpack module 48854
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(15946 /* vendor/other/module-15946 */),
  o = n(76041 /* vendor/other/module-76041 */),
  i = n(91159 /* vendor/other/module-91159 */),
  s = n(23295 /* vendor/other/module-23295 */),
  a = n(36648 /* vendor/other/module-36648 */),
  c = n(28955 /* vendor/other/module-28955 */);
(t.buildMethodPath = function (e, t) {
  return e ? `${e}.${t}` : t;
}),
  (t.endStreamSpan = function (e, t, n) {
    if (!e.isRecording()) return;
    const r = { [a.GEN_AI_RESPONSE_STREAMING_ATTRIBUTE]: !0 };
    t.responseId && (r[a.GEN_AI_RESPONSE_ID_ATTRIBUTE] = t.responseId),
      t.responseModel &&
        (r[a.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = t.responseModel),
      void 0 !== t.promptTokens &&
        (r[a.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = t.promptTokens),
      void 0 !== t.completionTokens &&
        (r[a.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = t.completionTokens),
      void 0 !== t.totalTokens
        ? (r[a.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = t.totalTokens)
        : (void 0 === t.promptTokens &&
            void 0 === t.completionTokens &&
            void 0 === t.cacheCreationInputTokens &&
            void 0 === t.cacheReadInputTokens) ||
          (r[a.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] =
            (t.promptTokens ?? 0) +
            (t.completionTokens ?? 0) +
            (t.cacheCreationInputTokens ?? 0) +
            (t.cacheReadInputTokens ?? 0)),
      t.finishReasons.length &&
        (r[a.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = JSON.stringify(
          t.finishReasons,
        )),
      n &&
        t.responseTexts.length &&
        (r[a.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = t.responseTexts.join("")),
      n &&
        t.toolCalls.length &&
        (r[a.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = JSON.stringify(
          t.toolCalls,
        )),
      e.setAttributes(r),
      e.end();
  }),
  (t.extractSystemInstructions = function (e) {
    if (!Array.isArray(e))
      return { systemInstructions: void 0, filteredMessages: e };
    const t = e.findIndex(
      (e) => e && "object" == typeof e && "role" in e && "system" === e.role,
    );
    if (-1 === t) return { systemInstructions: void 0, filteredMessages: e };
    const n = e[t],
      r =
        "string" == typeof n.content
          ? n.content
          : void 0 !== n.content
            ? JSON.stringify(n.content)
            : void 0;
    return r
      ? {
          systemInstructions: JSON.stringify([{ type: "text", content: r }]),
          filteredMessages: [...e.slice(0, t), ...e.slice(t + 1)],
        }
      : { systemInstructions: void 0, filteredMessages: e };
  }),
  (t.getTruncatedJsonString = function (e) {
    if ("string" == typeof e) return c.truncateGenAiStringInput(e);
    try {
      return JSON.stringify(Array.isArray(e) ? c.truncateGenAiMessages(e) : e);
    } catch {
      return "[unserializable]";
    }
  }),
  (t.resolveAIRecordingOptions = function (e) {
    const t = o.getClient()?.getDataCollectionOptions().genAI;
    return {
      ...e,
      recordInputs: e?.recordInputs ?? t?.inputs ?? !1,
      recordOutputs: e?.recordOutputs ?? t?.outputs ?? !1,
    };
  }),
  (t.setTokenUsageAttributes = function (e, t, n, r, o) {
    if (
      (void 0 !== t &&
        e.setAttributes({
          [a.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE]: t,
        }),
      void 0 !== n &&
        e.setAttributes({
          [a.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE]: n,
        }),
      void 0 !== t || void 0 !== n || void 0 !== r || void 0 !== o)
    ) {
      const i = (t ?? 0) + (n ?? 0) + (r ?? 0) + (o ?? 0);
      e.setAttributes({ [a.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE]: i });
    }
  }),
  (t.shouldEnableTruncation = function (e) {
    if (void 0 !== e) return e;
    const t = o.getClient();
    return (
      !t ||
      (!i.hasSpanStreamingEnabled(t) && !1 === t.getOptions().streamGenAiSpans)
    );
  }),
  (t.wrapPromiseWithMethods = function (e, t, n) {
    return s.isThenable(e)
      ? new Proxy(e, {
          get(e, o) {
            const i =
                o in Promise.prototype || o === Symbol.toStringTag ? t : e,
              s = Reflect.get(i, o);
            return "withResponse" === o && "function" == typeof s
              ? function () {
                  return (async function (e, t, n) {
                    const o = e.catch((e) => {
                        throw (
                          (r.captureException(e, {
                            mechanism: { handled: !1, type: n },
                          }),
                          e)
                        );
                      }),
                      i = await t,
                      s = await o;
                    return s && "object" == typeof s && "data" in s
                      ? { ...s, data: i }
                      : i;
                  })(s.call(e), t, n);
                }
              : "function" == typeof s
                ? s.bind(i)
                : s;
          },
        })
      : t;
  });
