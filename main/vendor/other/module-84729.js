// vendor/other/module-84729.js — webpack module 84729
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(79808 /* vendor/other/module-79808 */),
  o = n(19458 /* vendor/other/module-19458 */),
  i = new WeakSet(),
  s = (e) => i.has(e),
  a = (e) => {
    i.add(e);
  },
  c = new WeakMap(),
  u = {
    onSegmentSpanEnded(e, t) {
      const n = t.getClient(),
        r = n && c.get(n);
      if (!r) {
        const t = e();
        return void (t && n?.captureEvent(t));
      }
      r(() => {
        const t = e({ isSpanAlreadyCaptured: s, onSpanCaptured: a });
        t && n.captureEvent(t);
      });
    },
    onChildSpanEnded(e, t, n, r) {
      if (i.has(e) || !i.has(t)) return;
      const o = r.getClient(),
        u = o && c.get(o),
        l = () => {
          const e = n({
            isSpanAlreadyCaptured: s,
            onSpanCaptured: a,
          });
          e?.contexts?.trace?.data &&
            (e.contexts.trace.data["sentry.parent_span_already_sent"] = !0),
            e && o?.captureEvent(e);
        };
      u ? u(l) : l();
    },
  };
t._INTERNAL_setDeferSegmentSpanCapture = function (e) {
  if (
    (o.getSegmentSpanCaptureStrategy() || o.setSegmentSpanCaptureStrategy(u),
    c.has(e))
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
    c.set(e, (e) => {
      t.add(e), n();
    });
};
