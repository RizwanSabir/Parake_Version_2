// vendor/module-69474.js — webpack module 69474
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(38297 /* vendor/module-38297 */),
  o = n(76414 /* vendor/module-76414 */),
  i = n(57230 /* vendor/module-57230 */),
  a = "SpotlightBrowser",
  s = [{ op: "ui.interaction.click", name: "#sentry-spotlight" }],
  l = r.defineIntegration((e = {}) => {
    const t = e.sidecarUrl || "http://localhost:8969/stream";
    return {
      name: a,
      setup: () => {
        i.DEBUG_BUILD && r.debug.log("Using Sidecar URL", t);
      },
      beforeSetup(e) {
        const t = e.getOptions();
        t.ignoreSpans = [...(t.ignoreSpans || []), ...s];
      },
      afterAllSetup: (e) => {
        !(function (e, t) {
          const n = o.getNativeImplementation("fetch");
          let i = 0;
          e.on("beforeEnvelope", (e) => {
            i > 3
              ? r.debug.warn(
                  "[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:",
                  i,
                )
              : n(t, {
                  method: "POST",
                  body: r.serializeEnvelope(e),
                  headers: {
                    "Content-Type": "application/x-sentry-envelope",
                  },
                  mode: "cors",
                }).then(
                  (e) => {
                    e.status >= 200 && e.status < 400 && (i = 0);
                  },
                  (e) => {
                    i++,
                      r.debug.error(
                        "Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/",
                        e,
                      );
                  },
                );
          });
        })(e, t);
      },
    };
  });
(t.INTEGRATION_NAME = a),
  (t.SPOTLIGHT_IGNORE_SPANS = s),
  (t.spotlightBrowserIntegration = l);
