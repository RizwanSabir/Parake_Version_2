// vendor/module-14816.js — webpack module 14816
// params: (e, t, n) = (module, exports, require)
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(82579 /* vendor/module-82579 */),
  o = n(91860 /* vendor/module-91860 */),
  i = n(76403 /* vendor/module-76403 */),
  a = n(57786 /* vendor/module-57786 */),
  s = n(27352 /* vendor/module-27352 */),
  l = r.defineIntegration((e) => ({
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
        (s.GLOBAL_OBJ._sentryWrappedDepth ?? 0) > 0 &&
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
          const r = a.getFramesFromEvent(e);
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
                            if (e.pre_context[n]?.includes(u)) return !0;
                        }
                        return !1;
                      })(e, r, !!n))
                  ),
              )
              .map((e) =>
                e.module_metadata
                  ? Object.keys(e.module_metadata)
                      .filter((e) => e.startsWith(c))
                      .map((e) => e.slice(c.length))
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
  c = "_sentryBundlerPluginAppKey:",
  u = "Attempt to invoke user-land function",
  d = "fn.apply(this, wrappedArguments)";
t.thirdPartyErrorFilterIntegration = l;
