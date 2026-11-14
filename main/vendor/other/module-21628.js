// vendor/other/module-21628.js — webpack module 21628
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(88516 /* vendor/other/module-88516 */),
  i = n(93348 /* vendor/other/module-93348 */),
  s = n(26776 /* vendor/other/module-26776 */);
t.SnsServiceExtension = class {
  requestPreSpanHook(e) {
    let t = r.SPAN_KIND.CLIENT,
      n = `SNS ${e.commandName}`;
    const s = { [o.MESSAGING_SYSTEM]: "aws.sns" };
    if ("Publish" === e.commandName) {
      (t = r.SPAN_KIND.PRODUCER),
        (s[i.ATTR_MESSAGING_DESTINATION_KIND] =
          i.MESSAGING_DESTINATION_KIND_VALUE_TOPIC);
      const { TopicArn: a, TargetArn: c, PhoneNumber: u } = e.commandInput,
        l = (function (e, t, n) {
          if (!e && !t) return n || "unknown";
          {
            const n = e ?? t;
            try {
              return n.substring(n.lastIndexOf(":") + 1);
            } catch {
              return n;
            }
          }
        })(a, c, u);
      (s[o.MESSAGING_DESTINATION] = l),
        (s[o.MESSAGING_DESTINATION_NAME] = a || c || u || "unknown"),
        (n = `${u ? "phone_number" : l} send`);
    }
    const a = e.commandInput?.TopicArn;
    return (
      a && (s[o.AWS_SNS_TOPIC_ARN] = a),
      { spanAttributes: s, spanKind: t, spanName: n }
    );
  }
  requestPostSpanHook(e, t) {
    if ("Publish" === e.commandName) {
      const n = e.commandInput.MessageAttributes ?? {};
      e.commandInput.MessageAttributes = s.injectPropagationContext(
        n,
        r.getTraceData({ span: t }),
      );
    }
  }
  responseHook(e, t) {
    const n = e.data?.TopicArn;
    n && t.setAttribute(o.AWS_SNS_TOPIC_ARN, n);
  }
};
