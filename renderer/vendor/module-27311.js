// vendor/module-27311.js — webpack module 27311
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/module-60467 */),
  o = n(84469 /* vendor/module-84469 */),
  i = n(93695 /* vendor/module-93695 */),
  a = n(78393 /* vendor/module-78393 */),
  s = n(60158 /* vendor/module-60158 */),
  l = n(86902 /* vendor/module-86902 */),
  c = n(51835 /* vendor/module-51835 */),
  u = n(923 /* vendor/module-923 */),
  d = n(64649 /* vendor/module-64649 */),
  p = [0.1, 0.25];
(t.CLSThresholds = p),
  (t.onCLS = (e, t = {}) => {
    d.onFCP(
      u.runOnce(() => {
        const n = a.initMetric("CLS", 0);
        let u;
        const d = i.getVisibilityWatcher(),
          f = s.initUnique(t, l.LayoutShiftManager),
          h = (e) => {
            for (const t of e) f._processEntry(t);
            f._sessionValue > n.value &&
              ((n.value = f._sessionValue),
              (n.entries = f._sessionEntries),
              u());
          },
          m = c.observe("layout-shift", h);
        m &&
          ((u = o.bindReporter(e, n, p, t.reportAllChanges)),
          d.onHidden(() => {
            h(m.takeRecords()), u(!0);
          }),
          r.WINDOW?.setTimeout?.(u));
      }),
    );
  });
