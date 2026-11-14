// vendor/module-59237.js — webpack module 59237
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/module-75703 */),
  o = n(82579 /* vendor/module-82579 */),
  i = n(3365 /* vendor/module-3365 */),
  a = n(63479 /* vendor/module-63479 */),
  s = n(91159 /* vendor/module-91159 */),
  l = n(42134 /* vendor/module-42134 */),
  c = n(58637 /* vendor/module-58637 */),
  u = n(38862 /* vendor/module-38862 */),
  d = o.defineIntegration(() => ({
    name: "SpanStreaming",
    setup(e) {
      const t = "SpanStreaming integration requires",
        n = "Falling back to static trace lifecycle.",
        o = e.getOptions();
      if (!s.hasSpanStreamingEnabled(e))
        return (
          (o.traceLifecycle = "static"),
          void (
            r.DEBUG_BUILD &&
            c.debug.warn(`${t} \`traceLifecycle\` to be set to "stream"! ${n}`)
          )
        );
      const d = o.beforeSendSpan;
      if (d && !i.isStreamedBeforeSendSpanCallback(d))
        return (
          (o.traceLifecycle = "static"),
          void (
            r.DEBUG_BUILD &&
            c.debug.warn(
              `${t} a beforeSendSpan callback using \`withStreamedSpan\`! ${n}`,
            )
          )
        );
      const p = new l.SpanBuffer(e);
      e.on("afterSpanEnd", (t) => {
        u.spanIsSampled(t) && p.add(a.captureSpan(t, e));
      });
    },
  }));
t.spanStreamingIntegration = d;
