// vendor/other/module-49392.js — webpack module 49392
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */);
(t.asNumber = function (e) {
  return "number" != typeof e || isNaN(e) ? void 0 : e;
}),
  (t.asString = function (e) {
    return "string" == typeof e ? e : void 0;
  }),
  (t.isReadableStream = function (e) {
    return (
      r.isObjectLike(e) &&
      "function" == typeof e.pipeThrough &&
      "function" == typeof e.getReader
    );
  }),
  (t.sum = function (e, t) {
    return void 0 === e && void 0 === t ? void 0 : (e ?? 0) + (t ?? 0);
  }),
  (t.tapModelCallStream = function (e, t, n) {
    const o = e.getReader(),
      i = { toolCalls: [] };
    let s = "",
      a = !1;
    const c = () => {
      a || ((a = !0), s && (i.text = s), t(i));
    };
    return new ReadableStream({
      async pull(e) {
        try {
          const { done: t, value: n } = await o.read();
          if (t) return c(), void e.close();
          (s +=
            (function (e, t) {
              if (!r.isObjectLike(t)) return;
              const {
                type: n,
                delta: o,
                textDelta: i,
                id: s,
                modelId: a,
                toolCallId: c,
                toolName: u,
                input: l,
                args: d,
                finishReason: p,
                usage: f,
                providerMetadata: h,
              } = t;
              switch (n) {
                case "text-delta": {
                  const e = o ?? i;
                  return "string" == typeof e ? e : void 0;
                }
                case "tool-call":
                  return void e.toolCalls.push({
                    toolCallId: c,
                    toolName: u,
                    input: l ?? d,
                  });
                case "response-metadata":
                  return (
                    "string" == typeof s && (e.responseId = s),
                    void ("string" == typeof a && (e.responseModel = a))
                  );
                case "finish":
                  return (
                    (e.finishReason = p),
                    (e.usage = f),
                    void (void 0 !== h && (e.providerMetadata = h))
                  );
                default:
                  return;
              }
            })(i, n) ?? ""),
            e.enqueue(n);
        } catch (t) {
          ((e) => {
            a || ((a = !0), n(e));
          })(t),
            e.error(t);
        }
      },
      cancel: (e) => (c(), o.cancel(e)),
    });
  });
