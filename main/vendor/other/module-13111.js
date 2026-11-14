// vendor/other/module-13111.js — webpack module 13111
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(48420 /* vendor/other/module-48420 */),
  i = n(27311 /* vendor/other/module-27311 */),
  s = n(70517 /* vendor/other/module-70517 */),
  a = n(96448 /* vendor/other/module-96448 */),
  c = n(51835 /* vendor/other/module-51835 */),
  u = n(30326 /* vendor/other/module-30326 */),
  l = {},
  d = {};
let p, f, h, g;
function m(e, t) {
  const n = l[e];
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
function _() {
  return i.onCLS(
    (e) => {
      m("cls", { metric: e }), (p = e);
    },
    { reportAllChanges: !0 },
  );
}
function S() {
  return a.onLCP(
    (e) => {
      m("lcp", { metric: e }), (f = e);
    },
    { reportAllChanges: !0 },
  );
}
function E() {
  return u.onTTFB((e) => {
    m("ttfb", { metric: e }), (h = e);
  });
}
function y() {
  return s.onINP((e) => {
    m("inp", { metric: e }), (g = e);
  });
}
function T(e, t, n, r, o = !1) {
  let i;
  return (
    b(e, t),
    d[e] || ((i = n()), (d[e] = !0)),
    r && t({ metric: r }),
    I(e, t, o ? i : void 0)
  );
}
function b(e, t) {
  (l[e] = l[e] || []), l[e].push(t);
}
function I(e, t, n) {
  return () => {
    n && n();
    const r = l[e];
    if (!r) return;
    const o = r.indexOf(t);
    -1 !== o && r.splice(o, 1);
  };
}
(t.addClsInstrumentationHandler = function (e, t = !1) {
  return T("cls", e, _, p, t);
}),
  (t.addInpInstrumentationHandler = function (e) {
    return T("inp", e, y, g);
  }),
  (t.addLcpInstrumentationHandler = function (e, t = !1) {
    return T("lcp", e, S, f, t);
  }),
  (t.addPerformanceInstrumentationHandler = function (e, t) {
    return (
      b(e, t),
      d[e] ||
        ((function (e) {
          const t = {};
          "event" === e && (t.durationThreshold = 0),
            c.observe(
              e,
              (t) => {
                m(e, { entries: t });
              },
              t,
            );
        })(e),
        (d[e] = !0)),
      I(e, t)
    );
  }),
  (t.addTtfbInstrumentationHandler = function (e) {
    return T("ttfb", e, E, h);
  }),
  (t.isPerformanceEventTiming = function (e) {
    return "duration" in e;
  });
