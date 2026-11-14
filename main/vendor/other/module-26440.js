// vendor/other/module-26440.js — webpack module 26440
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(74031 /* vendor/other/module-74031 */),
  s = r.defineIntegration(() => ({
    name: "NormalizePaths",
    setup: (e) => {
      setImmediate(() => {
        e.on("beforeEnvelope", (e) => {
          r.forEachEnvelopeItem(e, (e, t) => {
            "profile" === t && i.normaliseProfile(e[1], o.app.getAppPath());
          });
        });
      });
    },
    processEvent: (e) => i.normalizePaths(e, o.app.getAppPath()),
    processSpan(e) {
      e.name = r.normalizeUrlToBase(e.name, o.app.getAppPath());
      const t = e.attributes?.["sentry.segment.name"];
      e.attributes &&
        "string" == typeof t &&
        (e.attributes["sentry.segment.name"] = r.normalizeUrlToBase(
          t,
          o.app.getAppPath(),
        ));
    },
  }));
t.normalizePathsIntegration = s;
