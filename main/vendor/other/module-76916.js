// vendor/other/module-76916.js — webpack module 76916
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
const r = n(96137 /* vendor/other/module-96137 */),
  o = n(84157 /* external/electron */),
  i = n(3327 /* vendor/other/module-3327 */),
  s = n(77999 /* vendor/other/module-77999 */),
  a = n(74031 /* vendor/other/module-74031 */);
let c;
const u = r.defineIntegration(() => ({
  name: "RendererProfiling",
  setup(e) {
    const t = e.getOptions();
    t.enableRendererProfiling &&
      ((c = new r.LRUMap(10)),
      o.app.on("ready", () => {
        t.getSessions().forEach((e) =>
          s.addHeaderToSession(e, "Document-Policy", "js-profiling"),
        );
      }),
      e.on?.("beforeEnvelope", (e) => {
        let n;
        if (
          (r.forEachEnvelopeItem(e, (e, t) => {
            if ("transaction" === t)
              for (let t = 1; t < e.length; t++) {
                const r = e[t];
                r?.contexts?.profile?.profile_id &&
                  ((n = r.contexts.profile.profile_id),
                  delete r.contexts.profile);
              }
          }),
          !n)
        )
          return;
        const s = c?.remove(n);
        s &&
          (a.normaliseProfile(s, o.app.getAppPath()),
          (s.release = t.release || i.getDefaultReleaseName()),
          (s.environment = t.environment || i.getDefaultEnvironment()),
          e[1].push([{ type: "profile" }, s]));
      }));
  },
}));
(t.rendererProfileFromIpc = function (e, t) {
  if (!c) return;
  const n = t.event_id;
  c.set(n, t),
    e && (e.contexts = { ...e.contexts, profile: { profile_id: n } });
}),
  (t.rendererProfilingIntegration = u);
