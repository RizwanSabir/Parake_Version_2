// vendor/other/module-57940.js — webpack module 57940
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(6607 /* vendor/other/module-6607 */),
  i = n(84435 /* vendor/other/module-84435 */);
function s(e, t, n, s) {
  const a = e[i.MESSAGE_STORED_SPAN];
  a &&
    (!1 !== t &&
      a.setStatus({
        code: r.SPAN_STATUS_ERROR,
        message:
          n !== o.EndOperation.ChannelClosed &&
          n !== o.EndOperation.ChannelError
            ? `${n} called on message${!0 === s ? " with requeue" : !1 === s ? " without requeue" : ""}`
            : n,
      }),
    a.end(),
    (e[i.MESSAGE_STORED_SPAN] = void 0));
}
function a(e, t, n, r) {
  (e[i.CHANNEL_SPANS_NOT_ENDED] ?? []).forEach((e) => {
    s(e.msg, t, n, r);
  }),
    (e[i.CHANNEL_SPANS_NOT_ENDED] = []);
}
(t.getAckAllPatch = function (e, t) {
  return (n) =>
    function (r) {
      return a(this, e, t, r), n.apply(this, arguments);
    };
}),
  (t.getAckPatch = function (e, t) {
    return (n) =>
      function (r, a, c) {
        const u = t === o.EndOperation.Reject ? a : c,
          l = this[i.CHANNEL_SPANS_NOT_ENDED] ?? [],
          d = l.findIndex((e) => e.msg === r);
        if (d < 0) s(r, e, t, u);
        else if (t !== o.EndOperation.Reject && a) {
          for (let n = 0; n <= d; n++) s(l[n].msg, e, t, u);
          l.splice(0, d + 1);
        } else s(r, e, t, u), l.splice(d, 1);
        return n.apply(this, arguments);
      };
  }),
  (t.getChannelEmitPatch = function (e) {
    return function (t) {
      if ("close" === t) {
        a(this, !0, o.EndOperation.ChannelClosed, void 0);
        const e = this[i.CHANNEL_CONSUME_TIMEOUT_TIMER];
        e && clearInterval(e), (this[i.CHANNEL_CONSUME_TIMEOUT_TIMER] = void 0);
      } else "error" === t && a(this, !0, o.EndOperation.ChannelError, void 0);
      return e.apply(this, arguments);
    };
  }),
  (t.getConfirmedPublishPatch = function (e) {
    return function (t, n, o, s, a) {
      const c = this,
        { span: u, modifiedOptions: l } = i.startPublishSpan(t, n, c, s),
        d = [...arguments];
      (d[3] = l),
        (d[4] = function (e, t) {
          try {
            r.withActiveSpan(u, () => {
              a?.call(this, e, t);
            });
          } finally {
            e &&
              u.setStatus({
                code: r.SPAN_STATUS_ERROR,
                message: "message confirmation has been nack'ed",
              }),
              u.end();
          }
        }),
        (c[i.CHANNEL_IS_CONFIRM_PUBLISHING] = !0);
      try {
        return e.apply(this, d);
      } finally {
        c[i.CHANNEL_IS_CONFIRM_PUBLISHING] = !1;
      }
    };
  }),
  (t.getConnectPatch = function (e) {
    return function (t, n, r) {
      return e.call(this, t, n, function (e, n) {
        if (null == e) {
          const e = i.getConnectionAttributesFromUrl(t),
            r = i.getConnectionAttributesFromServer(n);
          n[i.CONNECTION_ATTRIBUTES] = { ...e, ...r };
        }
        r.apply(this, arguments);
      });
    };
  }),
  (t.getConsumePatch = function (e) {
    return function (t, n, a) {
      const c = this;
      if (!Object.prototype.hasOwnProperty.call(c, i.CHANNEL_SPANS_NOT_ENDED)) {
        const e = setInterval(() => {
          !(function (e) {
            const t = r.timestampInSeconds(),
              n = e[i.CHANNEL_SPANS_NOT_ENDED] ?? [];
            let a;
            for (a = 0; a < n.length; a++) {
              const e = n[a];
              if (1e3 * (t - e.timeOfConsume) < 6e4) break;
              s(e.msg, null, o.EndOperation.InstrumentationTimeout, !0);
            }
            n.splice(0, a);
          })(c);
        }, 6e4);
        e.unref(),
          (c[i.CHANNEL_CONSUME_TIMEOUT_TIMER] = e),
          (c[i.CHANNEL_SPANS_NOT_ENDED] = []);
      }
      const u = Array.prototype.slice.call(arguments);
      return (
        (u[1] = function (e) {
          if (!e) return n.call(this, e);
          const o = e.properties.headers ?? {},
            s = i.getHeaderAsString(o, "sentry-trace"),
            u = i.getHeaderAsString(o, "baggage");
          r.continueTrace({ sentryTrace: s, baggage: u }, () => {
            const o = i.startConsumeSpan(t, e, c);
            a?.noAck ||
              (c[i.CHANNEL_SPANS_NOT_ENDED].push({
                msg: e,
                timeOfConsume: r.timestampInSeconds(),
              }),
              (e[i.MESSAGE_STORED_SPAN] = o)),
              r.withActiveSpan(o, () => {
                n.call(this, e);
              }),
              a?.noAck && o.end();
          });
        }),
        e.apply(this, u)
      );
    };
  }),
  (t.getPublishPatch = function (e) {
    return function (t, n, r, o) {
      if (this[i.CHANNEL_IS_CONFIRM_PUBLISHING])
        return e.apply(this, arguments);
      const { span: s, modifiedOptions: a } = i.startPublishSpan(t, n, this, o),
        c = [...arguments];
      c[3] = a;
      const u = e.apply(this, c);
      return s.end(), u;
    };
  });
