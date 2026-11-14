// vendor/module-96448.js — webpack module 96448
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(84469 /* vendor/module-84469 */),
  o = n(79111 /* vendor/module-79111 */),
  i = n(93695 /* vendor/module-93695 */),
  a = n(80291 /* vendor/module-80291 */),
  s = n(78393 /* vendor/module-78393 */),
  l = n(60158 /* vendor/module-60158 */),
  c = n(40415 /* vendor/module-40415 */),
  u = n(51835 /* vendor/module-51835 */),
  d = n(923 /* vendor/module-923 */),
  p = n(92764 /* vendor/module-92764 */),
  f = n(10220 /* vendor/module-10220 */),
  h = [2500, 4e3];
(t.LCPThresholds = h),
  (t.onLCP = (e, t = {}) => {
    p.whenActivated(() => {
      const n = i.getVisibilityWatcher(),
        p = s.initMetric("LCP");
      let m;
      const g = l.initUnique(t, c.LCPEntryManager),
        y = (e) => {
          t.reportAllChanges || (e = e.slice(-1));
          for (const t of e)
            g._processEntry(t),
              t.startTime < n.firstHiddenTime &&
                ((p.value = Math.max(t.startTime - o.getActivationStart(), 0)),
                (p.entries = [t]),
                m());
        },
        v = u.observe("largest-contentful-paint", y);
      if (v) {
        m = r.bindReporter(e, p, h, t.reportAllChanges);
        const n = d.runOnce(() => {
            y(v.takeRecords()), v.disconnect(), m(!0);
          }),
          o = (e) => {
            e.isTrusted &&
              (f.whenIdleOrHidden(n),
              a.removePageListener(e.type, o, { capture: !0 }));
          };
        for (const e of ["keydown", "click", "visibilitychange"])
          a.addPageListener(e, o, { capture: !0 });
      }
    });
  });
