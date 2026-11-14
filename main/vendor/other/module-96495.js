// vendor/other/module-96495.js — webpack module 96495
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/other/module-38297 */),
  o = n(76414 /* vendor/other/module-76414 */),
  i = "WebVitals",
  s = r.defineIntegration((e = {}) => {
    const t = new Set(e.ignore ?? []);
    return {
      name: i,
      setup(n) {
        const i = r.hasSpanStreamingEnabled(n),
          { enableStandaloneClsSpans: s, enableStandaloneLcpSpans: a } =
            e._experiments ?? {},
          c = i || t.has("cls") ? void 0 : s || !1,
          u = i || t.has("lcp") ? void 0 : a || !1,
          l = o.startTrackingWebVitals({
            recordClsStandaloneSpans: c,
            recordLcpStandaloneSpans: u,
            client: n,
          }),
          d = new WeakSet();
        n.on("afterStartPageLoadSpan", (e) => {
          d.add(e);
        }),
          n.on("spanEnd", (e) => {
            d.delete(e) &&
              (l(),
              o.addWebVitalsToSpan(e, {
                recordClsOnPageloadSpan: !1 === c,
                recordLcpOnPageloadSpan: !1 === u,
                spanStreamingEnabled: i,
              }));
          }),
          i
            ? (t.has("lcp") || o.trackLcpAsSpan(n),
              t.has("cls") || o.trackClsAsSpan(n),
              t.has("inp") || o.trackInpAsSpan())
            : t.has("inp") || o.startTrackingINP();
      },
      afterAllSetup() {
        t.has("inp") || o.registerInpInteractionListener();
      },
    };
  });
(t.WEB_VITALS_INTEGRATION_NAME = i), (t.webVitalsIntegration = s);
