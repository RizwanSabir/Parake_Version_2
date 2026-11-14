// vendor/other/module-27311.js — webpack module 27311
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/other/module-60467 */),
  o = n(84469 /* vendor/other/module-84469 */),
  i = n(93695 /* vendor/other/module-93695 */),
  s = n(78393 /* vendor/other/module-78393 */),
  a = n(60158 /* vendor/other/module-60158 */),
  c = n(86902 /* vendor/other/module-86902 */),
  u = n(51835 /* vendor/other/module-51835 */),
  l = n(923 /* vendor/other/module-923 */),
  d = n(64649 /* vendor/other/module-64649 */),
  p = [0.1, 0.25];
(t.CLSThresholds = p),
  (t.onCLS = (e, t = {}) => {
    d.onFCP(
      l.runOnce(() => {
        const n = s.initMetric("CLS", 0);
        let l;
        const d = i.getVisibilityWatcher(),
          f = a.initUnique(t, c.LayoutShiftManager),
          h = (e) => {
            for (const t of e) f._processEntry(t);
            f._sessionValue > n.value &&
              ((n.value = f._sessionValue),
              (n.entries = f._sessionEntries),
              l());
          },
          g = u.observe("layout-shift", h);
        g &&
          ((l = o.bindReporter(e, n, p, t.reportAllChanges)),
          d.onHidden(() => {
            h(g.takeRecords()), l(!0);
          }),
          r.WINDOW?.setTimeout?.(l));
      }),
    );
  });
