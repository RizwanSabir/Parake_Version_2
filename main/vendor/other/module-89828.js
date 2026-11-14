// vendor/other/module-89828.js — webpack module 89828
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(15343 /* vendor/other/module-15343 */),
  i = n(85834 /* vendor/other/module-85834 */),
  s = n(12417 /* vendor/other/module-12417 */),
  a = n(69869 /* vendor/other/module-69869 */),
  c = n(49392 /* vendor/other/module-49392 */),
  u = Symbol("SentryVercelAiModelPatched"),
  l = Symbol("SentryVercelAiToolPatched");
let d = 0;
function p() {
  return "v6-" + ++d;
}
const f = new WeakMap(),
  h = new WeakSet(),
  g = new WeakSet(),
  m = new WeakMap(),
  _ = new WeakMap(),
  S = new WeakMap(),
  E = new WeakSet();
let y = !1;
function T(e, t, n, i) {
  const u = e(t);
  s.bindTracingChannelToSpan(
    u,
    (e) =>
      ((e) => {
        const t = r.isObjectLike(e.arguments[0]) ? e.arguments[0] : {},
          s = r.isObjectLike(t.experimental_telemetry)
            ? t.experimental_telemetry
            : {};
        if (!1 === s.isEnabled && !E.has(s)) return;
        const u = n(t, s);
        !(function (e, t) {
          if (!0 !== t.isEnabled) return;
          const n = { ...t, isEnabled: !1 };
          E.add(n), (e.experimental_telemetry = n);
        })(t, s);
        const l = r.getActiveSpan(),
          d = a.createSpanFromMessage(u, i);
        if (d) {
          f.set(e, u), h.add(d);
          const n =
            r.isObjectLike(t.model) && "v1" === t.model.specificationVersion;
          S.set(d, { callSiteSpan: l, toolErrorsBubbleToCaller: n }),
            "executeTool" === u.type && g.add(d);
          const a = c.asString(u.event.callId);
          a && m.set(d, a),
            _.set(d, O(s)),
            r.isObjectLike(t.tools) &&
              (function (e, t) {
                try {
                  for (const [n, o] of Object.entries(e))
                    r.isObjectLike(o) && N(n, o, e, t);
                } catch {
                  o.DEBUG_BUILD &&
                    r.debug.log("Vercel AI orchestrion tool patching failed.");
                }
              })(t.tools, i),
            n && v(t.model, i);
        }
        return d;
      })(e),
    {
      beforeSpanEnd: (e, t) => {
        const n = f.get(t);
        if (n) {
          if ("error" in t) {
            const n = S.get(e)?.callSiteSpan;
            n &&
              r.isObjectLike(t.error) &&
              r.addNonEnumerableProperty(t.error, "_sentry_active_span", n);
          } else
            (n.result =
              "executeTool" === n.type ? { output: t.result } : t.result),
              a.enrichSpanOnEnd(e, n, i);
          "streamText" !== n.type && a.clearOperationId(n), f.delete(t);
        }
      },
      deferSpanEnd: ({ data: e, end: t }) =>
        (function (e, t) {
          if (
            "streamText" !== f.get(e)?.type ||
            "error" in e ||
            ((n = e.result),
            !r.isObjectLike(n) || (!b(n.totalUsage) && !b(n.usage)))
          )
            return !1;
          var n;
          const o = e.result;
          return (
            (async () => {
              try {
                const [n, r, i, s, a] = await Promise.all([
                  o.totalUsage ?? o.usage,
                  o.text,
                  o.toolCalls,
                  o.finishReason,
                  o.response,
                ]);
                (e.result = {
                  usage: n,
                  text: r,
                  toolCalls: i,
                  finishReason: s,
                  response: a,
                }),
                  t();
              } catch (e) {
                t(e);
              }
            })(),
            !0
          );
        })(e, t),
    },
  );
}
function b(e) {
  return r.isObjectLike(e) && "function" == typeof e.then;
}
function I() {
  const e = r.getActiveSpan();
  return e && h.has(e) ? e : void 0;
}
function v(e, t) {
  e[u] || ((e[u] = !0), A(e, "doGenerate", t), A(e, "doStream", t));
}
function A(e, t, n) {
  const o = e[t];
  "function" == typeof o &&
    (e[t] = function (...i) {
      const s = I();
      if (!s) return Promise.resolve(o.apply(this, i));
      const u = r.isObjectLike(i[0]) ? i[0] : {},
        l = m.get(s),
        d = {
          type: "languageModelCall",
          event: {
            callId: l,
            provider: e.provider,
            modelId: e.modelId,
            tools: u.tools ?? (r.isObjectLike(u.mode) ? u.mode.tools : void 0),
            messages: u.prompt,
            ..._.get(s),
          },
        },
        p = r.withActiveSpan(s, () => a.createSpanFromMessage(d, n));
      if (!p) return Promise.resolve(o.apply(this, i));
      const f = () => {
          "doStream" === t && l && a.clearOperationCallId(l);
        },
        h = (e) => {
          throw (
            (p.setStatus({
              code: r.SPAN_STATUS_ERROR,
              message: e instanceof Error ? e.message : "unknown_error",
            }),
            p.end(),
            f(),
            e)
          );
        };
      try {
        return Promise.resolve(o.apply(this, i)).then(
          (e) =>
            "doStream" === t &&
            r.isObjectLike(e) &&
            c.isReadableStream(e.stream)
              ? ((e.stream = c.tapModelCallStream(
                  e.stream,
                  (t) => {
                    (d.result = {
                      ...e,
                      ...a.streamedResultToChannelResult(t),
                    }),
                      a.enrichSpanOnEnd(p, d, n),
                      p.end(),
                      f();
                  },
                  (e) => {
                    p.setStatus({
                      code: r.SPAN_STATUS_ERROR,
                      message: e instanceof Error ? e.message : "unknown_error",
                    }),
                      p.end(),
                      f();
                  },
                )),
                e)
              : ((d.result = e), a.enrichSpanOnEnd(p, d, n), p.end(), f(), e),
          h,
        );
      } catch (e) {
        return h(e);
      }
    });
}
function N(e, t, n, o) {
  const i = t.execute;
  "function" != typeof i ||
    t[l] ||
    ((t[l] = !0),
    (t.execute = function (t, ...s) {
      const u = I();
      if (!u || g.has(u)) return i.apply(this, [t, ...s]);
      const l = r.isObjectLike(s[0]) ? s[0] : {},
        d = {
          type: "executeTool",
          event: {
            callId: m.get(u),
            toolCall: {
              toolName: e,
              toolCallId: c.asString(l.toolCallId),
              input: t,
            },
            tools: n,
            ..._.get(u),
          },
        },
        p = r.withActiveSpan(u, () => a.createSpanFromMessage(d, o));
      if (!p) return i.apply(this, [t, ...s]);
      const f = (e) => {
        throw (
          (S.get(u)?.toolErrorsBubbleToCaller
            ? p.setStatus({
                code: r.SPAN_STATUS_ERROR,
                message: e instanceof Error ? e.message : "tool_error",
              })
            : a.captureToolError(p, d, e),
          p.end(),
          e)
        );
      };
      try {
        return Promise.resolve(i.apply(this, [t, ...s])).then(
          (e) => (
            (d.result = { output: e }), a.enrichSpanOnEnd(p, d, o), p.end(), e
          ),
          f,
        );
      } catch (e) {
        return f(e);
      }
    }));
}
function R(e) {
  return (t, n) => ({
    type: e,
    event: {
      callId: p(),
      operationId: `ai.${e}`,
      functionId: c.asString(n.functionId),
      ...w(t.model),
      maxRetries: t.maxRetries,
      instructions: c.asString(t.system),
      messages: C(t),
      ...O(n),
    },
  });
}
function C(e) {
  return Array.isArray(e.messages)
    ? e.messages
    : "string" == typeof e.prompt
      ? [{ role: "user", content: e.prompt }]
      : (e.messages ?? e.prompt);
}
function O(e) {
  const t = !0 === e.isEnabled || void 0;
  return {
    recordInputs: e.recordInputs ?? t,
    recordOutputs: e.recordOutputs ?? t,
  };
}
function w(e) {
  return { provider: k(e, "provider"), modelId: k(e, "modelId") };
}
function k(e, t) {
  return r.isObjectLike(e) ? c.asString(e[t]) : void 0;
}
t.subscribeVercelAiOrchestrionChannels = function (e, t = {}) {
  if (!y) {
    y = !0;
    try {
      T(e, i.CHANNELS.VERCEL_AI_GENERATE_TEXT, R("generateText"), t),
        T(e, i.CHANNELS.VERCEL_AI_STREAM_TEXT, R("streamText"), t),
        T(e, i.CHANNELS.VERCEL_AI_GENERATE_OBJECT, R("generateObject"), t),
        T(
          e,
          i.CHANNELS.VERCEL_AI_EMBED,
          (e, t) => ({
            type: "embed",
            event: {
              callId: p(),
              ...w(e.model),
              maxRetries: e.maxRetries,
              value: e.value,
              ...O(t),
            },
          }),
          t,
        ),
        T(
          e,
          i.CHANNELS.VERCEL_AI_EMBED_MANY,
          (e, t) => ({
            type: "embedMany",
            event: {
              callId: p(),
              ...w(e.model),
              maxRetries: e.maxRetries,
              values: e.values,
              ...O(t),
            },
          }),
          t,
        ),
        T(
          e,
          i.CHANNELS.VERCEL_AI_EXECUTE_TOOL_CALL,
          (e, t) => ({
            type: "executeTool",
            event: {
              callId: p(),
              toolCall: e.toolCall,
              tools: e.tools,
              ...O(t),
            },
          }),
          t,
        ),
        (function (e, t, n) {
          e(t).subscribe({
            end(e) {
              const t = e;
              r.isObjectLike(t.result) && v(t.result, n);
            },
            start() {},
            asyncStart() {},
            asyncEnd() {},
            error() {},
          });
        })(e, i.CHANNELS.VERCEL_AI_RESOLVE_LANGUAGE_MODEL, t);
    } catch {
      o.DEBUG_BUILD &&
        r.debug.log("Vercel AI orchestrion channel subscription failed.");
    }
  }
};
