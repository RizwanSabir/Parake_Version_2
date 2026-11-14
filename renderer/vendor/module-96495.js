// vendor/module-96495.js — webpack module 96495
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(76414 /* vendor/module-76414 */),
  i = "WebVitals",
  a = r.defineIntegration((e = {}) => {
    const t = new Set(e.ignore ?? []);
    return {
      name: i,
      setup(n) {
        const i = r.hasSpanStreamingEnabled(n),
          { enableStandaloneClsSpans: a, enableStandaloneLcpSpans: s } =
            e._experiments ?? {},
          l = i || t.has("cls") ? void 0 : a || !1,
          c = i || t.has("lcp") ? void 0 : s || !1,
          u = o.startTrackingWebVitals({
            recordClsStandaloneSpans: l,
            recordLcpStandaloneSpans: c,
            client: n,
          }),
          d = new WeakSet();
        n.on("afterStartPageLoadSpan", (e) => {
          d.add(e);
        }),
          n.on("spanEnd", (e) => {
            d.delete(e) &&
              (u(),
              o.addWebVitalsToSpan(e, {
                recordClsOnPageloadSpan: !1 === l,
                recordLcpOnPageloadSpan: !1 === c,
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
(t.WEB_VITALS_INTEGRATION_NAME = i), (t.webVitalsIntegration = a);
