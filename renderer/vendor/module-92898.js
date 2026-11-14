// vendor/module-92898.js — webpack module 92898
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(84469 /* vendor/module-84469 */),
  o = n(93695 /* vendor/module-93695 */),
  i = n(78393 /* vendor/module-78393 */),
  a = n(60158 /* vendor/module-60158 */),
  s = n(75684 /* vendor/module-75684 */),
  l = n(51835 /* vendor/module-51835 */),
  c = n(94918 /* vendor/module-94918 */),
  u = n(92764 /* vendor/module-92764 */),
  d = n(10220 /* vendor/module-10220 */),
  p = [200, 500];
(t.INPThresholds = p),
  (t.onINP = (e, t = {}) => {
    if (
      !globalThis.PerformanceEventTiming ||
      !("interactionId" in PerformanceEventTiming.prototype)
    )
      return;
    const n = o.getVisibilityWatcher();
    u.whenActivated(() => {
      c.initInteractionCountPolyfill();
      const o = i.initMetric("INP");
      let u;
      const f = a.initUnique(t, s.InteractionManager),
        h = (e) => {
          d.whenIdleOrHidden(() => {
            for (const t of e) f._processEntry(t);
            const t = f._estimateP98LongestInteraction();
            t &&
              t._latency !== o.value &&
              ((o.value = t._latency), (o.entries = t.entries), u());
          });
        },
        m = l.observe("event", h, {
          durationThreshold: t.durationThreshold ?? 40,
        });
      (u = r.bindReporter(e, o, p, t.reportAllChanges)),
        m &&
          (m.observe({ type: "first-input", buffered: !0 }),
          n.onHidden(() => {
            h(m.takeRecords()), u(!0);
          }));
    });
  });
