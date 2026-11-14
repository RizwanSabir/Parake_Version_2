// vendor/other/module-70517.js — webpack module 70517
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(84469 /* vendor/other/module-84469 */),
  o = n(93695 /* vendor/other/module-93695 */),
  i = n(78393 /* vendor/other/module-78393 */),
  s = n(60158 /* vendor/other/module-60158 */),
  a = n(75684 /* vendor/other/module-75684 */),
  c = n(51835 /* vendor/other/module-51835 */),
  u = n(94918 /* vendor/other/module-94918 */),
  l = n(92764 /* vendor/other/module-92764 */),
  d = n(10220 /* vendor/other/module-10220 */),
  p = [200, 500];
(t.INPThresholds = p),
  (t.onINP = (e, t = {}) => {
    if (
      !globalThis.PerformanceEventTiming ||
      !("interactionId" in PerformanceEventTiming.prototype)
    )
      return;
    const n = o.getVisibilityWatcher();
    l.whenActivated(() => {
      u.initInteractionCountPolyfill();
      const o = i.initMetric("INP");
      let l;
      const f = s.initUnique(t, a.InteractionManager),
        h = (e) => {
          d.whenIdleOrHidden(() => {
            for (const t of e) f._processEntry(t);
            const t = f._estimateP98LongestInteraction();
            t &&
              t._latency !== o.value &&
              ((o.value = t._latency), (o.entries = t.entries), l());
          });
        },
        g = c.observe("event", h, {
          durationThreshold: t.durationThreshold ?? 40,
        });
      (l = r.bindReporter(e, o, p, t.reportAllChanges)),
        g &&
          (g.observe({ type: "first-input", buffered: !0 }),
          n.onHidden(() => {
            h(g.takeRecords()), l(!0);
          }));
    });
  });
