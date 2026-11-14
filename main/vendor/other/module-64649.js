// vendor/other/module-64649.js — webpack module 64649
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(84469 /* vendor/other/module-84469 */),
  o = n(79111 /* vendor/other/module-79111 */),
  i = n(93695 /* vendor/other/module-93695 */),
  s = n(78393 /* vendor/other/module-78393 */),
  a = n(51835 /* vendor/other/module-51835 */),
  c = n(92764 /* vendor/other/module-92764 */),
  u = [1800, 3e3];
(t.FCPThresholds = u),
  (t.onFCP = (e, t = {}) => {
    c.whenActivated(() => {
      const n = i.getVisibilityWatcher(),
        c = s.initMetric("FCP");
      let l;
      const d = a.observe("paint", (e) => {
        for (const t of e)
          "first-contentful-paint" === t.name &&
            (d.disconnect(),
            t.startTime < n.firstHiddenTime &&
              ((c.value = Math.max(t.startTime - o.getActivationStart(), 0)),
              c.entries.push(t),
              l(!0)));
      });
      d && (l = r.bindReporter(e, c, u, t.reportAllChanges));
    });
  });
