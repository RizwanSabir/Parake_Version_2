// vendor/module-79972.js — webpack module 79972
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/module-82579 */),
  o = n(91860 /* vendor/module-91860 */),
  i = n(76403 /* vendor/module-76403 */),
  a = r.defineIntegration(() => ({
    name: "ModuleMetadata",
    setup(e) {
      e.on("beforeEnvelope", (e) => {
        i.forEachEnvelopeItem(e, (e, t) => {
          if ("event" === t) {
            const t = Array.isArray(e) ? e[1] : void 0;
            t && (o.stripMetadataFromStackFrames(t), (e[1] = t));
          }
        });
      }),
        e.on("applyFrameMetadata", (t) => {
          if (t.type) return;
          const n = e.getOptions().stackParser;
          o.addMetadataToStackFrames(n, t);
        });
    },
  }));
t.moduleMetadataIntegration = a;
