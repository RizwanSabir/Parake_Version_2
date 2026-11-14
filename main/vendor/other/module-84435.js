// vendor/other/module-84435.js — webpack module 84435
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(80781 /* vendor/other/module-80781 */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(36763 /* vendor/other/module-36763 */),
  a = Symbol("opentelemetry.amqplib.message.stored-span"),
  c = Symbol("opentelemetry.amqplib.channel.spans-not-ended"),
  u = Symbol("opentelemetry.amqplib.channel.consumer-timeout-timer"),
  l = Symbol("opentelemetry.amqplib.connection.attributes"),
  d = Symbol("sentry.amqplib.channel.is-confirm-publishing"),
  p = (e) => ("" !== e ? e : "<default>"),
  f = (e, t) => e || ("AMQP" === t ? 5672 : 5671),
  h = (e) => {
    const t = e || "amqp";
    return (t.endsWith(":") ? t.substring(0, t.length - 1) : t).toUpperCase();
  },
  g = (e) => e || "localhost";
(t.CHANNEL_CONSUME_TIMEOUT_TIMER = u),
  (t.CHANNEL_IS_CONFIRM_PUBLISHING = d),
  (t.CHANNEL_SPANS_NOT_ENDED = c),
  (t.CONNECTION_ATTRIBUTES = l),
  (t.MESSAGE_STORED_SPAN = a),
  (t.getConnectionAttributesFromServer = (e) => {
    const t = e.serverProperties.product?.toLowerCase?.();
    return t ? { [i.MESSAGING_SYSTEM]: t } : {};
  }),
  (t.getConnectionAttributesFromUrl = (e) => {
    const t = { [s.ATTR_MESSAGING_PROTOCOL_VERSION]: "0.9.1" },
      n = e || "amqp://localhost";
    if ("object" == typeof n) {
      const e = n,
        r = h(e?.protocol);
      (t[s.ATTR_MESSAGING_PROTOCOL] = r),
        (t[i.NET_PEER_NAME] = g(e?.hostname)),
        (t[i.NET_PEER_PORT] = f(e.port, r));
    } else {
      const e = ((e) => e.replace(/:[^:@/]*@/, ":***@"))(n);
      t[s.ATTR_MESSAGING_URL] = e;
      try {
        const n = new URL(e),
          r = h(n.protocol);
        (t[s.ATTR_MESSAGING_PROTOCOL] = r),
          (t[i.NET_PEER_NAME] = g(n.hostname)),
          (t[i.NET_PEER_PORT] = f(n.port ? parseInt(n.port) : void 0, r));
      } catch {}
    }
    return t;
  }),
  (t.getHeaderAsString = function (e, t) {
    const n = e?.[t];
    if (null != n) return Array.isArray(n) ? String(n[0]) : String(n);
  }),
  (t.normalizeExchange = p),
  (t.startConsumeSpan = function (e, t, n) {
    return o.startInactiveSpan({
      name: `${e} process`,
      kind: r.SpanKind.CONSUMER,
      attributes: {
        ...n?.connection?.[l],
        [s.ATTR_MESSAGING_DESTINATION]: t.fields?.exchange,
        [s.ATTR_MESSAGING_DESTINATION_KIND]:
          s.MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
        [s.ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: t.fields?.routingKey,
        [s.ATTR_MESSAGING_OPERATION]: s.MESSAGING_OPERATION_VALUE_PROCESS,
        [s.OLD_ATTR_MESSAGING_MESSAGE_ID]: t?.properties.messageId,
        [s.ATTR_MESSAGING_CONVERSATION_ID]: t?.properties.correlationId,
        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.amqplib.otel.consumer",
      },
    });
  }),
  (t.startPublishSpan = function (e, t, n, i) {
    const a = p(e),
      c = o.startInactiveSpan({
        name: `publish ${a}`,
        kind: r.SpanKind.PRODUCER,
        attributes: {
          ...n.connection[l],
          [s.ATTR_MESSAGING_DESTINATION]: e,
          [s.ATTR_MESSAGING_DESTINATION_KIND]:
            s.MESSAGING_DESTINATION_KIND_VALUE_TOPIC,
          [s.ATTR_MESSAGING_RABBITMQ_ROUTING_KEY]: t,
          [s.OLD_ATTR_MESSAGING_MESSAGE_ID]: i?.messageId,
          [s.ATTR_MESSAGING_CONVERSATION_ID]: i?.correlationId,
          [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.amqplib.otel.publisher",
        },
      }),
      u = i ?? {};
    u.headers = u.headers ?? {};
    const d = o.getTraceData({ span: c });
    return (
      d["sentry-trace"] && (u.headers["sentry-trace"] = d["sentry-trace"]),
      d.baggage && (u.headers.baggage = d.baggage),
      { span: c, modifiedOptions: u }
    );
  });
