// vendor/other/module-34152.js — webpack module 34152
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(53053 /* external/node_diagnostics_channel */),
  o = n(96137 /* vendor/other/module-96137 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = n(15343 /* vendor/other/module-15343 */),
  a = n(85834 /* vendor/other/module-85834 */),
  c = n(12417 /* vendor/other/module-12417 */),
  u = "messaging.operation",
  l = "messaging.destination",
  d = "messaging.destination_kind",
  p = "messaging.rabbitmq.routing_key",
  f = "messaging.protocol",
  h = "messaging.protocol_version",
  g = "messaging.message_id",
  m = "messaging.conversation_id",
  _ = "messaging.rabbitmq.destination.routing_key",
  S = "messaging.message.conversation_id",
  E = "topic",
  y = "process",
  T = "reject",
  b = "channel closed",
  I = "channel error",
  v = Symbol("sentry.amqplib.message.stored-span"),
  A = Symbol("sentry.amqplib.channel.spans-not-ended"),
  N = Symbol("sentry.amqplib.channel.consume-timeout-timer"),
  R = Symbol("sentry.amqplib.channel.consumer-info"),
  C = Symbol("sentry.amqplib.channel.is-confirm-publishing"),
  O = Symbol("sentry.amqplib.connection.attributes"),
  w = () => {};
let k = !1;
function P(e, t, n) {
  const r = e.self;
  if (!r) return;
  const o = e.arguments[0];
  if (!o) return;
  const i = e.arguments[1],
    s = e.arguments[2],
    a = n === T ? i : s,
    c = r[A] ?? [],
    u = c.findIndex((e) => e.msg === o);
  if (u < 0) D(o, t, n, a);
  else if (n !== T && i) {
    for (let e = 0; e <= u; e++) D(c[e].msg, t, n, a);
    c.splice(0, u + 1);
  } else D(o, t, n, a), c.splice(u, 1);
}
function L(e) {
  if (Object.prototype.hasOwnProperty.call(e, A)) return;
  (e[A] = []), (e[R] = new Map());
  const t = setInterval(
    () =>
      (function (e) {
        const t = o.timestampInSeconds(),
          n = e[A] ?? [];
        let r;
        for (r = 0; r < n.length; r++) {
          const e = n[r];
          if (1e3 * (t - e.timeOfConsume) < 6e4) break;
          D(e.msg, null, "instrumentation timeout", !0);
        }
        n.splice(0, r);
      })(e),
    6e4,
  );
  t.unref?.(),
    (e[N] = t),
    "function" == typeof e.on &&
      (e.on("close", () => {
        M(e, !0, b, void 0), x(e);
      }),
      e.on("error", () => {
        M(e, !0, I, void 0), x(e);
      }));
}
function x(e) {
  const t = e[N];
  t && (clearInterval(t), (e[N] = void 0));
}
function M(e, t, n, r) {
  (e[A] ?? []).forEach((e) => {
    D(e.msg, t, n, r);
  }),
    (e[A] = []);
}
function D(e, t, n, r) {
  const i = e[v];
  i &&
    (!1 !== t &&
      i.setStatus({
        code: o.SPAN_STATUS_ERROR,
        message:
          n !== b && n !== I
            ? `${n} called on message${!0 === r ? " with requeue" : !1 === r ? " without requeue" : ""}`
            : n,
      }),
    i.end(),
    (e[v] = void 0));
}
function U(e) {
  const t = e.arguments[0],
    n = e.arguments[1],
    r = "string" == typeof t ? t : "",
    s = "string" == typeof n ? n : "";
  let a = e.arguments[3];
  const c = o.startInactiveSpan({
    name: `publish ${((u = r), "" !== u ? u : "<default>")}`,
    op: "message",
    kind: o.SPAN_KIND.PRODUCER,
    attributes: {
      ...B(e.self),
      [l]: r,
      [i.MESSAGING_DESTINATION_NAME]: r,
      [d]: E,
      [p]: s,
      [_]: s,
      [i.MESSAGING_OPERATION_TYPE]: "send",
      [g]: a?.messageId,
      [i.MESSAGING_MESSAGE_ID]: a?.messageId,
      [m]: a?.correlationId,
      [S]: a?.correlationId,
      [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
        "auto.amqplib.orchestrion.publisher",
    },
  });
  var u;
  (a && "object" == typeof a) || ((a = {}), (e.arguments[3] = a));
  const f =
      a.headers && "object" == typeof a.headers ? a.headers : (a.headers = {}),
    h = o.getTraceData({ span: c });
  return (
    h["sentry-trace"] && (f["sentry-trace"] = h["sentry-trace"]),
    h.baggage && (f.baggage = h.baggage),
    c
  );
}
function B(e) {
  const t = e?.connection,
    n = t?.[O];
  if (n) return n;
  const r =
    t?.serverProperties?.product ?? t?.connection?.serverProperties?.product;
  return "string" == typeof r && r
    ? { [i.MESSAGING_SYSTEM]: r.toLowerCase() }
    : {};
}
function G(e) {
  const t =
    e.serverProperties?.product ?? e.connection?.serverProperties?.product;
  return "string" == typeof t && t
    ? { [i.MESSAGING_SYSTEM]: t.toLowerCase() }
    : {};
}
function F(e) {
  const t = { [h]: "0.9.1", [i.NETWORK_PROTOCOL_VERSION]: "0.9.1" },
    n = e || "amqp://localhost";
  if ("object" == typeof n) {
    const e = n,
      r = H(e.protocol),
      o = W(e.hostname),
      s = j(e.port, r);
    (t[f] = r),
      (t[i.NETWORK_PROTOCOL_NAME] = r),
      (t[i.SERVER_ADDRESS] = o),
      (t[i.SERVER_PORT] = s),
      (t[i.NET_PEER_NAME] = o),
      (t[i.NET_PEER_PORT] = s);
  } else if ("string" == typeof n) {
    const e = (function (e) {
      return e.replace(/:[^:@/]*@/, ":***@");
    })(n);
    (t["messaging.url"] = e), (t[i.URL_FULL] = e);
    try {
      const n = new URL(e),
        r = H(n.protocol),
        o = W(n.hostname),
        s = j(n.port ? parseInt(n.port, 10) : void 0, r);
      (t[f] = r),
        (t[i.NETWORK_PROTOCOL_NAME] = r),
        (t[i.SERVER_ADDRESS] = o),
        (t[i.SERVER_PORT] = s),
        (t[i.NET_PEER_NAME] = o),
        (t[i.NET_PEER_PORT] = s);
    } catch {}
  }
  return t;
}
function j(e, t) {
  return e || ("AMQP" === t ? 5672 : 5671);
}
function H(e) {
  const t = e || "amqp";
  return (t.endsWith(":") ? t.substring(0, t.length - 1) : t).toUpperCase();
}
function W(e) {
  return e || "localhost";
}
function V(e, t) {
  const n = e?.[t];
  if (null != n) return Array.isArray(n) ? String(n[0]) : String(n);
}
const $ = o.defineIntegration(() => ({
  name: "Amqplib",
  setupOnce() {
    r.tracingChannel &&
      !k &&
      ((k = !0),
      s.DEBUG_BUILD &&
        o.debug.log(
          "[orchestrion:amqplib] subscribing to amqplib tracing channels",
        ),
      o.waitForTracingChannelBinding(() => {
        !(function () {
          const e = r.tracingChannel(a.CHANNELS.AMQPLIB_CONNECT);
          e.start.subscribe(w),
            e.asyncEnd.subscribe((e) => {
              const t = e,
                n = t.result;
              n &&
                "object" == typeof n &&
                (n[O] = { ...F(t.arguments?.[0]), ...G(n) });
            });
        })(),
          c.bindTracingChannelToSpan(
            r.tracingChannel(a.CHANNELS.AMQPLIB_PUBLISH),
            (e) => {
              if (!e.self?.[C]) return U(e);
            },
          ),
          (function () {
            const e = r.tracingChannel(a.CHANNELS.AMQPLIB_CONFIRM_PUBLISH);
            c.bindTracingChannelToSpan(
              e,
              (e) => (e.self && (e.self[C] = !0), U(e)),
            ),
              e.end.subscribe((e) => {
                const t = e.self;
                t && (t[C] = !1);
              });
          })(),
          (function () {
            const e = r.tracingChannel(a.CHANNELS.AMQPLIB_CONSUME);
            e.start.subscribe(w),
              e.asyncEnd.subscribe((e) => {
                const t = e,
                  n = t.self,
                  r = t.result,
                  o = r?.consumerTag;
                if (!n || !o) return;
                L(n);
                const i = t.arguments[0],
                  s = "string" == typeof i ? i : "<unknown>",
                  a = t.arguments[2];
                n[R]?.set(o, { noAck: !!a?.noAck, queue: s });
              });
          })(),
          c.bindTracingChannelToSpan(
            r.tracingChannel(a.CHANNELS.AMQPLIB_DISPATCH),
            (e) => {
              const t = e.self,
                n = e.arguments[0],
                r = e.arguments[1];
              if (!t || !r) return;
              L(t);
              const s = n?.consumerTag ? t[R]?.get(n.consumerTag) : void 0,
                a = s?.queue ?? r.fields?.routingKey ?? "<unknown>",
                c = s?.noAck ?? !1,
                f = r.properties?.headers,
                h = V(f, "sentry-trace"),
                T = V(f, "baggage"),
                b = o.continueTrace({ sentryTrace: h, baggage: T }, () =>
                  (function (e, t, n) {
                    return o.startInactiveSpan({
                      name: `${e} process`,
                      op: "message",
                      kind: o.SPAN_KIND.CONSUMER,
                      attributes: {
                        ...B(n),
                        [l]: t.fields?.exchange,
                        [i.MESSAGING_DESTINATION_NAME]: t.fields?.exchange,
                        [d]: E,
                        [p]: t.fields?.routingKey,
                        [_]: t.fields?.routingKey,
                        [u]: y,
                        [i.MESSAGING_OPERATION_TYPE]: y,
                        [g]: t.properties?.messageId,
                        [i.MESSAGING_MESSAGE_ID]: t.properties?.messageId,
                        [m]: t.properties?.correlationId,
                        [S]: t.properties?.correlationId,
                        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]:
                          "auto.amqplib.orchestrion.consumer",
                      },
                    });
                  })(a, r, t),
                );
              return (
                c ||
                  (t[A]?.push({
                    msg: r,
                    timeOfConsume: o.timestampInSeconds(),
                  }),
                  (r[v] = b)),
                (e._sentryNoAck = c),
                b
              );
            },
            { deferSpanEnd: ({ data: e }) => !e._sentryNoAck },
          ),
          r
            .tracingChannel(a.CHANNELS.AMQPLIB_ACK)
            .start.subscribe((e) => P(e, !1, "ack")),
          r
            .tracingChannel(a.CHANNELS.AMQPLIB_NACK)
            .start.subscribe((e) => P(e, !0, "nack")),
          r
            .tracingChannel(a.CHANNELS.AMQPLIB_REJECT)
            .start.subscribe((e) => P(e, !0, T)),
          r.tracingChannel(a.CHANNELS.AMQPLIB_ACK_ALL).start.subscribe((e) => {
            const t = e;
            t.self && M(t.self, !1, "ackAll", void 0);
          }),
          r.tracingChannel(a.CHANNELS.AMQPLIB_NACK_ALL).start.subscribe((e) => {
            const t = e;
            t.self && M(t.self, !0, "nackAll", t.arguments[0]);
          });
      }));
  },
}));
t.amqplibChannelIntegration = $;
