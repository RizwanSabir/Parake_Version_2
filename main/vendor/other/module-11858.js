// vendor/other/module-11858.js — webpack module 11858
// params: (e, t, n) = (module, exports, require)
// require(<id> /* name */) marks which module is loaded; "external/*" are Node/Electron built-ins
Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
const r = n(76041 /* vendor/other/module-76041 */),
  o = n(15946 /* vendor/other/module-15946 */),
  i = n(12724 /* vendor/other/module-12724 */),
  s = n(8888 /* vendor/other/module-8888 */),
  a = n(77481 /* vendor/other/module-77481 */),
  c = n(6990 /* vendor/other/module-6990 */),
  u = {
    mechanism: { handled: !1, type: "auto.rpc.trpc.middleware" },
  };
t.trpcMiddleware = function (e = {}) {
  return async function (t) {
    const { path: n, type: l, next: d, rawInput: p, getRawInput: f } = t,
      h = r.getClient(),
      g = h?.getOptions(),
      m = h?.getDataCollectionOptions(),
      _ = { procedure_path: n, procedure_type: l };
    if (
      (c.setNormalizationDepthOverrideHint(_, 1 + (g?.normalizeDepth ?? 5)),
      (void 0 !== e.attachRpcInput
        ? e.attachRpcInput
        : m?.httpBodies.includes("incomingRequest")) &&
        (void 0 !== p && (_.input = s.normalize(p)),
        void 0 !== f && "function" == typeof f))
    )
      try {
        const e = await f();
        _.input = s.normalize(e);
      } catch {}
    return r.withIsolationScope(
      (t) => (
        t.setContext("trpc", _),
        a.startSpanManual(
          {
            name: `trpc/${n}`,
            op: "rpc.server",
            attributes: {
              [i.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route",
              [i.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc",
            },
            forceTransaction: !!e.forceTransaction,
          },
          async (e) => {
            try {
              const t = await d();
              return (
                (function (e) {
                  "object" == typeof e &&
                    null !== e &&
                    "ok" in e &&
                    !e.ok &&
                    "error" in e &&
                    o.captureException(e.error, u);
                })(t),
                e.end(),
                t
              );
            } catch (t) {
              throw (o.captureException(t, u), e.end(), t);
            }
          },
        )
      ),
    );
  };
};
