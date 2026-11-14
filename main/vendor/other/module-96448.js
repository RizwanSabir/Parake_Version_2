// vendor/other/module-96448.js — webpack module 96448
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(84469 /* vendor/other/module-84469 */),
  o = n(79111 /* vendor/other/module-79111 */),
  i = n(93695 /* vendor/other/module-93695 */),
  s = n(80291 /* vendor/other/module-80291 */),
  a = n(78393 /* vendor/other/module-78393 */),
  c = n(60158 /* vendor/other/module-60158 */),
  u = n(40415 /* vendor/other/module-40415 */),
  l = n(51835 /* vendor/other/module-51835 */),
  d = n(923 /* vendor/other/module-923 */),
  p = n(92764 /* vendor/other/module-92764 */),
  f = n(10220 /* vendor/other/module-10220 */),
  h = [2500, 4e3];
(t.LCPThresholds = h),
  (t.onLCP = (e, t = {}) => {
    p.whenActivated(() => {
      const n = i.getVisibilityWatcher(),
        p = a.initMetric("LCP");
      let g;
      const m = c.initUnique(t, u.LCPEntryManager),
        _ = (e) => {
          t.reportAllChanges || (e = e.slice(-1));
          for (const t of e)
            m._processEntry(t),
              t.startTime < n.firstHiddenTime &&
                ((p.value = Math.max(t.startTime - o.getActivationStart(), 0)),
                (p.entries = [t]),
                g());
        },
        S = l.observe("largest-contentful-paint", _);
      if (S) {
        g = r.bindReporter(e, p, h, t.reportAllChanges);
        const n = d.runOnce(() => {
            _(S.takeRecords()), S.disconnect(), g(!0);
          }),
          o = (e) => {
            e.isTrusted &&
              (f.whenIdleOrHidden(n),
              s.removePageListener(e.type, o, { capture: !0 }));
          };
        for (const e of ["keydown", "click", "visibilitychange"])
          s.addPageListener(e, o, { capture: !0 });
      }
    });
  });
