// vendor/module-30326.js — webpack module 30326
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/module-60467 */),
  o = n(84469 /* vendor/module-84469 */),
  i = n(79111 /* vendor/module-79111 */),
  a = n(86881 /* vendor/module-86881 */),
  s = n(78393 /* vendor/module-78393 */),
  l = n(92764 /* vendor/module-92764 */),
  c = [800, 1800],
  u = (e) => {
    r.WINDOW.document?.prerendering
      ? l.whenActivated(() => u(e))
      : "complete" !== r.WINDOW.document?.readyState
        ? addEventListener("load", () => u(e), !0)
        : setTimeout(e);
  };
(t.TTFBThresholds = c),
  (t.onTTFB = (e, t = {}) => {
    const n = s.initMetric("TTFB"),
      r = o.bindReporter(e, n, c, t.reportAllChanges);
    u(() => {
      const e = a.getNavigationEntry();
      e &&
        ((n.value = Math.max(e.responseStart - i.getActivationStart(), 0)),
        (n.entries = [e]),
        r(!0));
    });
  });
