// vendor/other/module-87754.js — webpack module 87754
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(13111 /* vendor/other/module-13111 */),
  i = n(71417 /* vendor/other/module-71417 */),
  s = r.defineIntegration(() => ({
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
              s = e.loadTime,
              a = {
                "sentry.origin": "auto.ui.browser.element_timing",
                "ui.element.identifier": n,
              };
            o && (a["ui.element.paint_type"] = o),
              e.id && (a["ui.element.id"] = e.id),
              e.element &&
                (a["ui.element.type"] = e.element.tagName.toLowerCase()),
              e.url && (a["ui.element.url"] = e.url),
              e.naturalWidth && (a["ui.element.width"] = e.naturalWidth),
              e.naturalHeight && (a["ui.element.height"] = e.naturalHeight),
              i > 0 &&
                r.metrics.distribution("ui.element.render_time", i, {
                  unit: "millisecond",
                  attributes: a,
                }),
              s > 0 &&
                r.metrics.distribution("ui.element.load_time", s, {
                  unit: "millisecond",
                  attributes: a,
                });
          }
        });
    },
  }));
(t.elementTimingIntegration = s),
  (t.startTrackingElementTiming = function () {
    return () => {};
  });
