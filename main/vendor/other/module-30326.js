// vendor/other/module-30326.js — webpack module 30326
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(60467 /* vendor/other/module-60467 */),
  o = n(84469 /* vendor/other/module-84469 */),
  i = n(79111 /* vendor/other/module-79111 */),
  s = n(86881 /* vendor/other/module-86881 */),
  a = n(78393 /* vendor/other/module-78393 */),
  c = n(92764 /* vendor/other/module-92764 */),
  u = [800, 1800],
  l = (e) => {
    r.WINDOW.document?.prerendering
      ? c.whenActivated(() => l(e))
      : "complete" !== r.WINDOW.document?.readyState
        ? addEventListener("load", () => l(e), !0)
        : setTimeout(e);
  };
(t.TTFBThresholds = u),
  (t.onTTFB = (e, t = {}) => {
    const n = a.initMetric("TTFB"),
      r = o.bindReporter(e, n, u, t.reportAllChanges);
    l(() => {
      const e = s.getNavigationEntry();
      e &&
        ((n.value = Math.max(e.responseStart - i.getActivationStart(), 0)),
        (n.entries = [e]),
        r(!0));
    });
  });
