// vendor/module-87754.js — webpack module 87754
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/module-96137 */),
  o = n(13111 /* vendor/module-13111 */),
  i = n(71417 /* vendor/module-71417 */),
  a = r.defineIntegration(() => ({
    name: "ElementTiming",
    setup() {
      i.getBrowserPerformanceAPI() &&
        r.browserPerformanceTimeOrigin() &&
        o.addPerformanceInstrumentationHandler("element", ({ entries: e }) => {
          for (const t of e) {
            const e = t;
            if (!e.identifier) continue;
            const n = e.identifier,
              o = e.name,
              i = e.renderTime,
              a = e.loadTime,
              s = {
                "sentry.origin": "auto.ui.browser.element_timing",
                "ui.element.identifier": n,
              };
            o && (s["ui.element.paint_type"] = o),
              e.id && (s["ui.element.id"] = e.id),
              e.element &&
                (s["ui.element.type"] = e.element.tagName.toLowerCase()),
              e.url && (s["ui.element.url"] = e.url),
              e.naturalWidth && (s["ui.element.width"] = e.naturalWidth),
              e.naturalHeight && (s["ui.element.height"] = e.naturalHeight),
              i > 0 &&
                r.metrics.distribution("ui.element.render_time", i, {
                  unit: "millisecond",
                  attributes: s,
                }),
              a > 0 &&
                r.metrics.distribution("ui.element.load_time", a, {
                  unit: "millisecond",
                  attributes: s,
                });
          }
        });
    },
  }));
(t.elementTimingIntegration = a),
  (t.startTrackingElementTiming = function () {
    return () => {};
  });
