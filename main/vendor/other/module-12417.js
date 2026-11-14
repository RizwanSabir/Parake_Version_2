// vendor/other/module-12417.js — webpack module 12417
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(15343 /* vendor/other/module-15343 */),
  i = n(88516 /* vendor/other/module-88516 */),
  s = () => {};
function a(e, t) {
  const n = e._sentrySpan;
  n && (t?.(n, e), n.end());
}
function c(e) {
  const t = r.isObjectLike(e),
    n = t ? ("message" in e ? e.message : void 0) : e,
    o = n ? String(n) : void 0,
    s = t && "name" in e ? String(e.name) : "unknown";
  return { message: o, attributes: { [i.ERROR_TYPE]: s } };
}
t.bindTracingChannelToSpan = function (e, t, n) {
  const i = (function (e, t, n) {
      const i = r
        .getAsyncContextStrategy(r.getMainCarrier())
        .getTracingChannelBinding?.();
      if (!i)
        return (
          o.DEBUG_BUILD &&
            r.debug.log(
              "[TracingChannel] Could not access async context binding.",
            ),
          { channel: e, unbind: s }
        );
      const a = i.asyncLocalStorage;
      return (
        e.start.bindStore(a, (e) => {
          e._sentryCallerStore = a.getStore();
          const o = !n?.requiresParentSpan || r.getActiveSpan() ? t(e) : void 0;
          return o
            ? ((e._sentrySpan = o), i.getStoreWithActiveSpan(o))
            : e._sentryCallerStore;
        }),
        e.asyncStart.bindStore(a, (e) => e._sentryCallerStore),
        {
          channel: e,
          unbind: () => {
            e.start.unbindStore(a), e.asyncStart.unbindStore(a);
          },
        }
      );
    })(e, t, n),
    u = n?.beforeSpanEnd,
    l = n?.deferSpanEnd,
    d = (e, t) => {
      var o;
      n?.captureError &&
        r.captureException(
          t,
          ((o = t),
          "function" == typeof n?.captureError
            ? n.captureError(o)
            : {
                mechanism: {
                  type: "auto.diagnostic_channels.bind_span",
                  handled: !1,
                },
              }),
        );
      const { message: i, attributes: s } = c(t);
      e.setStatus({ code: r.SPAN_STATUS_ERROR, message: i }),
        e.setAttributes(s);
    },
    p = (e, t) => {
      let n = !1;
      return (r) => {
        n || ((n = !0), void 0 !== r && d(e, r), a(t, u));
      };
    },
    f = {
      start: s,
      asyncStart: s,
      end(e) {
        if ("error" in e || "result" in e) {
          const t = e._sentrySpan;
          if (t && l?.({ span: t, data: e, end: p(t, e) })) return;
          a(e, u);
        }
      },
      error(e) {
        const t = e._sentrySpan;
        t && d(t, e.error);
      },
      asyncEnd(e) {
        const t = e._sentrySpan;
        (t && l?.({ span: t, data: e, end: p(t, e) })) || a(e, u);
      },
    };
  return (
    i.channel.subscribe(f),
    {
      channel: i.channel,
      unbind: () => {
        i.channel.unsubscribe(f), i.unbind();
      },
    }
  );
};
