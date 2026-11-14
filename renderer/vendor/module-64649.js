// vendor/module-64649.js — webpack module 64649
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(84469 /* vendor/module-84469 */),
  o = n(79111 /* vendor/module-79111 */),
  i = n(93695 /* vendor/module-93695 */),
  a = n(78393 /* vendor/module-78393 */),
  s = n(51835 /* vendor/module-51835 */),
  l = n(92764 /* vendor/module-92764 */),
  c = [1800, 3e3];
(t.FCPThresholds = c),
  (t.onFCP = (e, t = {}) => {
    l.whenActivated(() => {
      const n = i.getVisibilityWatcher(),
        l = a.initMetric("FCP");
      let u;
      const d = s.observe("paint", (e) => {
        for (const t of e)
          "first-contentful-paint" === t.name &&
            (d.disconnect(),
            t.startTime < n.firstHiddenTime &&
              ((l.value = Math.max(t.startTime - o.getActivationStart(), 0)),
              l.entries.push(t),
              u(!0)));
      });
      d && (u = r.bindReporter(e, l, c, t.reportAllChanges));
    });
  });
