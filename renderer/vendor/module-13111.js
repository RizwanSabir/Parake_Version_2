// vendor/module-13111.js — webpack module 13111
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(48420 /* vendor/module-48420 */),
  i = n(27311 /* vendor/module-27311 */),
  a = n(92898 /* vendor/module-92898 */),
  s = n(96448 /* vendor/module-96448 */),
  l = n(51835 /* vendor/module-51835 */),
  c = n(30326 /* vendor/module-30326 */),
  u = {},
  d = {};
let p, f, h, m;
function g(e, t) {
  const n = u[e];
  if (n?.length)
    for (const i of n)
      try {
        i(t);
      } catch (t) {
        o.DEBUG_BUILD &&
          r.debug.error(
            `Error while triggering instrumentation handler.\nType: ${e}\nName: ${r.getFunctionName(i)}\nError:`,
            t,
          );
      }
}
function y() {
  return i.onCLS(
    (e) => {
      g("cls", { metric: e }), (p = e);
    },
    { reportAllChanges: !0 },
  );
}
function v() {
  return s.onLCP(
    (e) => {
      g("lcp", { metric: e }), (f = e);
    },
    { reportAllChanges: !0 },
  );
}
function b() {
  return c.onTTFB((e) => {
    g("ttfb", { metric: e }), (h = e);
  });
}
function S() {
  return a.onINP((e) => {
    g("inp", { metric: e }), (m = e);
  });
}
function _(e, t, n, r, o = !1) {
  let i;
  return (
    x(e, t),
    d[e] || ((i = n()), (d[e] = !0)),
    r && t({ metric: r }),
    w(e, t, o ? i : void 0)
  );
}
function x(e, t) {
  (u[e] = u[e] || []), u[e].push(t);
}
function w(e, t, n) {
  return () => {
    n && n();
    const r = u[e];
    if (!r) return;
    const o = r.indexOf(t);
    -1 !== o && r.splice(o, 1);
  };
}
(t.addClsInstrumentationHandler = function (e, t = !1) {
  return _("cls", e, y, p, t);
}),
  (t.addInpInstrumentationHandler = function (e) {
    return _("inp", e, S, m);
  }),
  (t.addLcpInstrumentationHandler = function (e, t = !1) {
    return _("lcp", e, v, f, t);
  }),
  (t.addPerformanceInstrumentationHandler = function (e, t) {
    return (
      x(e, t),
      d[e] ||
        ((function (e) {
          const t = {};
          "event" === e && (t.durationThreshold = 0),
            l.observe(
              e,
              (t) => {
                g(e, { entries: t });
              },
              t,
            );
        })(e),
        (d[e] = !0)),
      w(e, t)
    );
  }),
  (t.addTtfbInstrumentationHandler = function (e) {
    return _("ttfb", e, b, h);
  }),
  (t.isPerformanceEventTiming = function (e) {
    return "duration" in e;
  });
