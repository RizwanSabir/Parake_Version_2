// vendor/module-84729.js — webpack module 84729
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(79808 /* vendor/module-79808 */),
  o = n(19458 /* vendor/module-19458 */),
  i = new WeakSet(),
  a = (e) => i.has(e),
  s = (e) => {
    i.add(e);
  },
  l = new WeakMap(),
  c = {
    onSegmentSpanEnded(e, t) {
      const n = t.getClient(),
        r = n && l.get(n);
      if (!r) {
        const t = e();
        return void (t && n?.captureEvent(t));
      }
      r(() => {
        const t = e({ isSpanAlreadyCaptured: a, onSpanCaptured: s });
        t && n.captureEvent(t);
      });
    },
    onChildSpanEnded(e, t, n, r) {
      if (i.has(e) || !i.has(t)) return;
      const o = r.getClient(),
        c = o && l.get(o),
        u = () => {
          const e = n({
            isSpanAlreadyCaptured: a,
            onSpanCaptured: s,
          });
          e?.contexts?.trace?.data &&
            (e.contexts.trace.data["sentry.parent_span_already_sent"] = !0),
            e && o?.captureEvent(e);
        };
      c ? c(u) : u();
    },
  };
t._INTERNAL_setDeferSegmentSpanCapture = function (e) {
  if (
    (o.getSegmentSpanCaptureStrategy() || o.setSegmentSpanCaptureStrategy(c),
    l.has(e))
  )
    return;
  const t = new Set(),
    n = r.debounce(
      () => {
        const e = [...t];
        t.clear();
        for (const t of e) t();
      },
      1,
      { maxWait: 100 },
    );
  e.on("flush", () => {
    n.flush();
  }),
    l.set(e, (e) => {
      t.add(e), n();
    });
};
