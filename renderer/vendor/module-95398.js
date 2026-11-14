// vendor/module-95398.js — webpack module 95398
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(57230 /* vendor/module-57230 */),
  i = r.defineIntegration(() => ({
    name: "SpanStreaming",
    beforeSetup(e) {
      const t = e.getOptions();
      t.traceLifecycle ||
        (o.DEBUG_BUILD &&
          r.debug.log('[SpanStreaming] setting `traceLifecycle` to "stream"'),
        (t.traceLifecycle = "stream"));
    },
    setup(e) {
      const t = "SpanStreaming integration requires",
        n = "Falling back to static trace lifecycle.",
        i = e.getOptions();
      if (!r.hasSpanStreamingEnabled(e))
        return (
          (i.traceLifecycle = "static"),
          void (
            o.DEBUG_BUILD &&
            r.debug.warn(`${t} \`traceLifecycle\` to be set to "stream"! ${n}`)
          )
        );
      const a = i.beforeSendSpan;
      if (a && !r.isStreamedBeforeSendSpanCallback(a))
        return (
          (i.traceLifecycle = "static"),
          void (
            o.DEBUG_BUILD &&
            r.debug.warn(
              `${t} a beforeSendSpan callback using \`withStreamedSpan\`! ${n}`,
            )
          )
        );
      const s = new r.SpanBuffer(e);
      e.on("afterSpanEnd", (t) => {
        r.spanIsSampled(t) && s.add(r.captureSpan(t, e));
      }),
        e.on("afterSegmentSpanEnd", (e) => {
          const t = e.spanContext().traceId;
          setTimeout(() => {
            s.flush(t);
          }, 500);
        });
    },
  }));
t.spanStreamingIntegration = i;
