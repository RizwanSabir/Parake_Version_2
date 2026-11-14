// vendor/other/module-88139.js — webpack module 88139
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(26776 /* vendor/other/module-26776 */);
function s(e, t) {
  const n = i.extractPropagationHeaders(t);
  if (!n) return;
  const {
    parentSpanId: s,
    traceId: a,
    sampled: c,
  } = r.propagationContextFromHeaders(n.sentryTrace, n.baggage);
  a &&
    s &&
    e.addLink({
      context: { traceId: a, spanId: s, traceFlags: c ? 1 : 0 },
      attributes: { [o.MESSAGING_MESSAGE_ID]: t.MessageId },
    });
}
t.SqsServiceExtension = class {
  requestPreSpanHook(e) {
    const t = ((n = e.commandInput), n?.QueueUrl);
    var n;
    const s = (function (e) {
      if (!e) return;
      const t = e.split("/");
      return 0 === t.length ? void 0 : t[t.length - 1];
    })(t);
    let a,
      c = r.SPAN_KIND.CLIENT;
    const u = {
      [o.MESSAGING_SYSTEM]: "aws_sqs",
      [o.MESSAGING_DESTINATION_NAME]: s,
      [o.URL_FULL]: t,
    };
    switch (e.commandName) {
      case "ReceiveMessage":
        (c = r.SPAN_KIND.CONSUMER),
          (a = `${s} receive`),
          (u[o.MESSAGING_OPERATION_TYPE] = "receive"),
          (e.commandInput.MessageAttributeNames =
            i.addPropagationFieldsToAttributeNames(
              e.commandInput.MessageAttributeNames,
            ));
        break;
      case "SendMessage":
      case "SendMessageBatch":
        (c = r.SPAN_KIND.PRODUCER), (a = `${s} send`);
    }
    return { spanAttributes: u, spanKind: c, spanName: a };
  }
  requestPostSpanHook(e, t) {
    switch (e.commandName) {
      case "SendMessage":
        {
          const n = e.commandInput.MessageAttributes ?? {};
          e.commandInput.MessageAttributes = i.injectPropagationContext(
            n,
            r.getTraceData({ span: t }),
          );
        }
        break;
      case "SendMessageBatch": {
        const n = e.commandInput?.Entries;
        if (Array.isArray(n)) {
          const e = r.getTraceData({ span: t });
          n.forEach((t) => {
            t.MessageAttributes = i.injectPropagationContext(
              t.MessageAttributes ?? {},
              e,
            );
          });
        }
      }
    }
  }
  responseHook(e, t) {
    switch (e.request.commandName) {
      case "SendMessage":
        t.setAttribute(o.MESSAGING_MESSAGE_ID, e?.data?.MessageId);
        break;
      case "SendMessageBatch":
        break;
      case "ReceiveMessage": {
        const n = e?.data?.Messages || [];
        t.setAttribute(o.MESSAGING_BATCH_MESSAGE_COUNT, n.length);
        for (const e of n) s(t, e);
        break;
      }
    }
  }
};
