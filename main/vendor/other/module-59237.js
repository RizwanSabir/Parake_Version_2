// vendor/other/module-59237.js — webpack module 59237
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(75703 /* vendor/other/module-75703 */),
  o = n(82579 /* vendor/other/module-82579 */),
  i = n(3365 /* vendor/other/module-3365 */),
  s = n(85860 /* vendor/other/module-85860 */),
  a = n(91159 /* vendor/other/module-91159 */),
  c = n(42134 /* vendor/other/module-42134 */),
  u = n(58637 /* vendor/other/module-58637 */),
  l = n(38862 /* vendor/other/module-38862 */),
  d = o.defineIntegration(() => ({
    name: "SpanStreaming",
    setup(e) {
      const t = "SpanStreaming integration requires",
        n = "Falling back to static trace lifecycle.",
        o = e.getOptions();
      if (!a.hasSpanStreamingEnabled(e))
        return (
          (o.traceLifecycle = "static"),
          void (
            r.DEBUG_BUILD &&
            u.debug.warn(`${t} \`traceLifecycle\` to be set to "stream"! ${n}`)
          )
        );
      const d = o.beforeSendSpan;
      if (d && !i.isStreamedBeforeSendSpanCallback(d))
        return (
          (o.traceLifecycle = "static"),
          void (
            r.DEBUG_BUILD &&
            u.debug.warn(
              `${t} a beforeSendSpan callback using \`withStreamedSpan\`! ${n}`,
            )
          )
        );
      const p = new c.SpanBuffer(e);
      e.on("afterSpanEnd", (t) => {
        l.spanIsSampled(t) && p.add(s.captureSpan(t, e));
      });
    },
  }));
t.spanStreamingIntegration = d;
