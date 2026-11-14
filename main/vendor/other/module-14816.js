// vendor/other/module-14816.js — webpack module 14816
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/other/module-82579 */),
  o = n(91860 /* vendor/other/module-91860 */),
  i = n(76403 /* vendor/other/module-76403 */),
  s = n(57786 /* vendor/other/module-57786 */),
  a = n(27352 /* vendor/other/module-27352 */),
  c = r.defineIntegration((e) => ({
    name: "ThirdPartyErrorsFilter",
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
    preprocessEvent(t) {
      e.ignoreSentryInternalFrames &&
        (a.GLOBAL_OBJ._sentryWrappedDepth ?? 0) > 0 &&
        (t.sdkProcessingMetadata = {
          ...t.sdkProcessingMetadata,
          insideSentryWrapped: !0,
        });
    },
    processEvent(t) {
      const n =
          !!e.ignoreSentryInternalFrames &&
          !0 === t.sdkProcessingMetadata?.insideSentryWrapped &&
          1 === t.exception?.values?.length,
        r = (function (e, t, n) {
          const r = s.getFramesFromEvent(e);
          if (r)
            return r
              .filter(
                (e, r) =>
                  !(
                    !e.filename ||
                    (null == e.lineno &&
                      null == e.colno &&
                      null == e.instruction_addr) ||
                    (t &&
                      (function (e, t, n) {
                        if (0 !== t) return !1;
                        if (
                          n &&
                          (function (e) {
                            return (
                              !e.context_line &&
                              !e.pre_context &&
                              !!e.function &&
                              e.function.length <= 2
                            );
                          })(e)
                        )
                          return !0;
                        if ("sentryWrapped" === e.function) return !0;
                        if (!e.context_line || !e.filename) return !1;
                        if (
                          !e.filename.includes("sentry") ||
                          !e.filename.includes("helpers") ||
                          !e.context_line.includes(d)
                        )
                          return !1;
                        if (e.pre_context) {
                          const t = e.pre_context.length;
                          for (let n = 0; n < t; n++)
                            if (e.pre_context[n]?.includes(l)) return !0;
                        }
                        return !1;
                      })(e, r, !!n))
                  ),
              )
              .map((e) =>
                e.module_metadata
                  ? Object.keys(e.module_metadata)
                      .filter((e) => e.startsWith(u))
                      .map((e) => e.slice(u.length))
                  : [],
              );
        })(t, e.ignoreSentryInternalFrames, n);
      if (
        r &&
        r[
          "drop-error-if-contains-third-party-frames" === e.behaviour ||
          "apply-tag-if-contains-third-party-frames" === e.behaviour
            ? "some"
            : "every"
        ]((t) => !t.some((t) => e.filterKeys.includes(t)))
      ) {
        if (
          "drop-error-if-contains-third-party-frames" === e.behaviour ||
          "drop-error-if-exclusively-contains-third-party-frames" ===
            e.behaviour
        )
          return null;
        t.tags = { ...t.tags, third_party_code: !0 };
      }
      return t;
    },
  })),
  u = "_sentryBundlerPluginAppKey:",
  l = "Attempt to invoke user-land function",
  d = "fn.apply(this, wrappedArguments)";
t.thirdPartyErrorFilterIntegration = c;
